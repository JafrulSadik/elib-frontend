import { ApiErrorResopnse } from "@/types/ApiResponse";

export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`
    );

    if (!res.ok) {
      const errorData = (await res.json()) as ApiErrorResopnse;
      return {
        code: errorData.code,
        message: errorData.message,
      };
    }

    return await res.json(); // Return the JSON response
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
    };
  }
};
