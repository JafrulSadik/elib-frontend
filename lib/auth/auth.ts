import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const res = await fetch("http://localhost:5000/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

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
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.role = user.role;
        token.profileImg = user.profileImg;
      }

      // Auto-refresh token if expired
      if (Date.now() > (token.expiresAt as number)) {
        throw new Error("Token expired");
      }

      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.user.id = token.id as string;
      session.user.role = token.role as "admin" | "user";
      session.user.profileImg = token.profileImg as string | "";
      return session;
    },
  },
});
