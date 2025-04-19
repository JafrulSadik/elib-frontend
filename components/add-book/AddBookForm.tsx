"use client";

import { errorToast, successToast } from "@/lib/notify";
import { supabase } from "@/lib/supabase";
import { ApiResponse } from "@/types/ApiResponse";
import { Book } from "@/types/Book";
import { Genre } from "@/types/Genre";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Field from "../auth/Field";
import FileInputField from "./FileInputField";
import TextInputField from "./TextInputField";

const MAX_IMAGE_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_IMAGE_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const MAX_BOOK_FILE_UPLOAD_SIZE = 1024 * 1024 * 10; // 3MB
const ACCEPTED_BOOK_FILE_TYPES = ["application/pdf"];

export const bookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  cover: z
    .custom<FileList>((file) => file instanceof FileList && file.length > 0, {
      message: "Cover image is required",
    })
    .refine((file) => file[0]?.size <= MAX_IMAGE_UPLOAD_SIZE, {
      message: "File size must be less than 3MB",
    })
    .refine((file) => ACCEPTED_IMAGE_FILE_TYPES.includes(file[0]?.type), {
      message: "File must be a PNG, JPEG or JPG",
    }),
  file: z
    .custom<FileList>((file) => file instanceof FileList && file.length > 0, {
      message: "Book file is required",
    })
    .refine((file) => file[0]?.size <= MAX_BOOK_FILE_UPLOAD_SIZE, {
      message: "File size must be less than 10MB",
    })
    .refine((file) => ACCEPTED_BOOK_FILE_TYPES.includes(file[0]?.type), {
      message: "File must be a PDF",
    }),
});

// Infer TypeScript type from schema
export type BookFormData = z.infer<typeof bookSchema>;

const AddBookForm = ({ genres }: { genres: Genre[] }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (formData: BookFormData) => {
    const coverImage = formData.cover?.[0];
    const bookFile = formData.file?.[0];

    const coverImageExt = coverImage.name.split(".").pop();
    const coverImageName = `${nanoid()}.${coverImageExt}`;
    const bookFileExt = bookFile.name.split(".").pop();
    const bookFileName = `${nanoid()}.${bookFileExt}`;

    setLoading(true);
    // Upload to Supabase
    const { data: coverImageData, error: coverImageError } =
      await supabase.storage
        .from("elib/cover-images")
        .upload(coverImageName, coverImage);

    if (coverImageError) {
      console.error("Upload Error:", coverImageError.message);
      alert("Book cover upload failed. Please try again.");
      return;
    }

    const { data: bookFileData, error: bookFileError } = await supabase.storage
      .from("elib/book-files")
      .upload(bookFileName, bookFile);

    if (bookFileError) {
      alert("Book file upload failed. Please try again.");
      return;
    }

    // Get Public URL
    const { data: coverImagePublicUrl } = supabase.storage
      .from("elib/cover-images")
      .getPublicUrl(coverImageData.path);

    const { data: bookFilePublicUrl } = supabase.storage
      .from("elib/book-files")
      .getPublicUrl(bookFileData.path);

    const bookData = {
      title: formData.title,
      genreId: formData.genre,
      description: formData.description,
      coverImageUrl: coverImagePublicUrl.publicUrl,
      bookFileUrl: bookFilePublicUrl.publicUrl,
    };

    try {
      const response = await fetch("/api/books/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      const data = (await response.json()) as ApiResponse<Book>;

      if (data.code !== 201) {
        errorToast(data.message);
        return;
      }

      successToast("Book added successfully");
    } catch (err) {
      const error = err as Error;
      errorToast(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <TextInputField
        label="Book Title"
        placeholder="Enter book title"
        error={errors?.title?.message}
        {...register("title")}
      />

      <Field error={errors?.genre?.message} label="Genre">
        <select
          defaultValue=""
          className={`w-full px-4 py-3 bg-bgSecondary rounded-lg focus:outline-none focus:ring-2 ${
            !errors?.genre ? "focus:ring-[#C5A572]/60" : "focus:ring-red-500"
          }`}
          {...register("genre")}
        >
          <option className="text-gray-400" value="" disabled hidden>
            -- Select a genre
          </option>
          {genres.map((genre) => (
            <option
              className="text-white bg-bgSecondary hover:bg-slate-950"
              key={genre._id}
              value={genre._id}
            >
              {genre.title}
            </option>
          ))}
        </select>
      </Field>

      <TextInputField
        label="Description"
        placeholder="Enter book description"
        error={errors?.description?.message}
        type="textarea"
        {...register("description")}
      />

      <FileInputField
        label="Cover Image"
        accept="image/jpeg, image/png, image/jpg"
        placeholder="Choose file"
        id="coverImage"
        {...register("cover")}
        fileName={watch("cover")?.[0]?.name}
        error={errors?.cover?.message}
      />

      <FileInputField
        label="Book File"
        accept="application/pdf"
        placeholder="Choose file"
        id="file"
        {...register("file")}
        fileName={watch("file")?.[0]?.name}
        error={errors?.file?.message}
      />

      <div className="py-5">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 p-2 bg-[#C4A484]/90 text-bgPrimary rounded-lg hover:bg-[#C4A484]/70 transition duration-300"
        >
          {loading && <Loader className="size-4 animate-spin" />}
          <span>Add Book</span>
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
