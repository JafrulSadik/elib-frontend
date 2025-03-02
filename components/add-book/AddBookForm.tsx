"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Field from "../auth/Field";
import FileInputField from "./FileInputField";
import TextInputField from "./TextInputField";

const MAX_IMAGE_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_IMAGE_FILE_TYPES = ["image/png"];

const MAX_BOOK_FILE_UPLOAD_SIZE = 1024 * 1024 * 10; // 3MB
const ACCEPTED_BOOK_FILE_TYPES = ["application/pdf"];

export const bookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  cover: z
    .instanceof(FileList, { message: "Cover image is required" })
    .refine((file) => {
      return !!file;
    }, "File is required")
    .refine((file) => {
      return file[0]?.size <= MAX_IMAGE_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_IMAGE_FILE_TYPES.includes(file[0]?.type);
    }, "File must be a PNG, JPEG or JPG"),
  file: z
    .instanceof(FileList, { message: "Book file is required" })
    .refine((file) => {
      return !!file;
    }, "File is required")
    .refine((file) => {
      return file[0]?.size <= MAX_BOOK_FILE_UPLOAD_SIZE;
    }, "File size must be less than 10MB")
    .refine((file) => {
      return ACCEPTED_BOOK_FILE_TYPES.includes(file[0]?.type);
    }, "File must be a PDF"),
});

// Infer TypeScript type from schema
export type BookFormData = z.infer<typeof bookSchema>;

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const [bookData, setBookData] = useState({
    title: "",
    genre: "",
    description: "",
    coverImage: null,
    bookFile: null,
  });

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Horror",
    "Biography",
    "History",
    "Poetry",
    "Drama",
    "Religion",
  ];

  const onSubmit = (formData: BookFormData) => {
    console.log(bookData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <TextInputField
        label="Book Title"
        placeholder="Enter book title"
        error={errors?.title?.message}
        {...register("title")}
      />

      <Field error={errors?.genre?.message}>
        <label className="block text-[#C5A572] mb-2">Genre</label>
        <select
          defaultValue=""
          className="w-full px-4 py-3 text-gray-400 bg-bgSecondary rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/60"
          {...register("genre")}
        >
          <option value="" defaultChecked disabled hidden>
            Select a genre
          </option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
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
        id="bookFile"
        {...register("file")}
        fileName={watch("file")?.[0]?.name}
        error={errors?.file?.message}
      />

      <div className="py-5">
        <button
          type="submit"
          className="w-full p-2 bg-[#C4A484]/90 text-bgPrimary rounded-lg hover:bg-[#C4A484]/70 transition duration-300"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
