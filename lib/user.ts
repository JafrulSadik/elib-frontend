import { ApiResponse } from "@/types/ApiResponse";
import { User } from "@/types/User";

type UserProfileProps = {
  userId?: string;
};

export const getUserProfile = async ({
  userId,
}: UserProfileProps): Promise<ApiResponse<User[]>> => {
  try {
    const res = await fetch(`/users/profile/${userId}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
      data: [],
    };
  }
};
