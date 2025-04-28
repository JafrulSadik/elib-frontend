"use server";

import { auth } from "@/lib/auth/auth";
import { ApiResponse } from "@/types/ApiResponse";
import { revalidatePath } from "next/cache";

export const addToMyLibrary = async (bookId: string) => {
  const session = await auth();

  if (!session) {
    return {
      code: 401,
      message: "Unauthorized",
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/favourite/add`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify({ bookId, userId: session?.user?.id }),
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to add to favourite: ${res.statusText}`);
    }

    revalidatePath("/dashboard/library");
    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: "Failed to add to favourite",
    };
  }
};
export const isAddedToFavourite = async (bookId: string) => {
  const session = await auth();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/favourite/${session?.user?.id}/${bookId}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${session?.accessToken}` || "",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to add to favourite: ${res.statusText}`);
    }

    return (await res.json()) as ApiResponse<boolean>;
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: "Failed to add to favourite",
    };
  }
};
