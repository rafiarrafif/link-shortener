import { NextRequest, NextResponse } from "next/server";

export const authenticatedMiddleware = async (request: NextRequest) => {
  if (request.cookies.get("auth_token")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/dashboard/login", request.url));
};
