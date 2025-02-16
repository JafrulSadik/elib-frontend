export type ApiResponse<TData, TPagination = undefined> = {
  code: number;
  message: string;
  data: TData | undefined;
  pagination?: TPagination;
};

export type ApiErrorResopnse = {
  code: number;
  message: string;
};
