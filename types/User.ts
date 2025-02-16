export type User = {
  _id: string;
  name: string;
  role: string;
  email: string;
  about?: string;
  profileImg?: string;
};

export type PopularAuthorType = {
  _id: string;
  name: string;
  profileImg?: string;
  totalBooks: number;
  totalDownloads: number;
};
