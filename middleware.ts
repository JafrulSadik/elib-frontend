import { NextRequest } from "next/server";
import { auth } from "./lib/auth/auth";
import { LOGIN, PUBLIC_ROUTES, ROOT } from "./lib/routes/routes";

export const middleware = async (request: NextRequest) => {
  const session = await auth();
  const { nextUrl } = request;
  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl));
  }
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
