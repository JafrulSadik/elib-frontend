// /types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: "admin" | "user";
      profileImg?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
    profileImg?: string;
    accessToken: string;
    expiresAt: Date;
  }
}
