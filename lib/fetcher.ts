import { ApiResponse } from "@/types/ApiResponse";

export const fetcher = async <T, P = undefined>(
  url: string
): Promise<ApiResponse<T, P>> => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
