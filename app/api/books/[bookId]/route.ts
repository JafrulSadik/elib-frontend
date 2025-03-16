import { auth } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { bookId: string } }
) {
  const session = await auth();
  const { bookId } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${bookId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    revalidatePath("/");

    return NextResponse.json(
      {
        code: 201,
        message: "Book deleted successfully.",
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "failed to load data" }, { status: 500 });
  }
}
