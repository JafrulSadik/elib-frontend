import { ApiResponse } from "@/types/ApiResponse";
import { User } from "@/types/User";
import { fetchDataWithAuth } from "./fetchData";

type UserProfileProps = {
  userId?: string;
};

export const getUserProfile = async ({ userId }: UserProfileProps) => {
  try {
    if (!userId) {
      throw new Error("User id is not defined");
    }

    const response = (await fetchDataWithAuth(
      `/users/profile/${userId}`
    )) as ApiResponse<User>;

    return response;
  } catch (err) {
    const error = err as Error;
    return {
      code: "500",
      message: error.message,
    };
  }
};
