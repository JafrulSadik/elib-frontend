import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        const response = await res.json();

        if (res.ok && response.code === 200 && response.data) {
          const { user, tokens } = response.data;
          return {
            ...user,
            accessToken: tokens.accessToken,
          };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.accessToken = user.accessToken;
      }

      if (token.accessToken) {
        try {
          const decoded: { exp: number } = jwtDecode(
            token.accessToken as string
          );

          const now = Date.now() / 1000;

          if (decoded.exp < now) {
            throw new Error("Access token expired");
          }
        } catch (error) {
          console.error("JWT Expired:", error);
          throw new Error("Access token expired");
        }
      }

      if (trigger === "update" && session.user) {
        return { ...token, ...session.user, accessToken: session.accessToken };
      }

      if (user) {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = (token.accessToken as string) || "";
      session.user.id = token.id as string;
      session.user.role = (token.role as "admin") || "user";
      session.user.profileImg = (token.profileImg as string) || "";
      session.user.about = (token.about as string) || "";
      return session;
    },
  },
});
