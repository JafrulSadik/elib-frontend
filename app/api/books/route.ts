import { auth } from "@/lib/auth/auth";
import { ApiResponse } from "@/types/ApiResponse";
import { Book } from "@/types/Book";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  const { title, genreId, description, coverImageUrl, bookFileUrl } =
    await req.json();

  const bookData = {
    title,
    genreId,
    description,
    coverImageUrl,
    bookFileUrl,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify(bookData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    const responseJson = (await response.json()) as ApiResponse<Book>;

    revalidatePath("/");
    // revalidatePath("/dashboard/my-books");

    return NextResponse.json({ ...responseJson }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "failed to load data" }, { status: 500 });
  }
}
