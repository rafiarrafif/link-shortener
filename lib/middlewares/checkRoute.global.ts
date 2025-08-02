import { NextRequest, NextResponse } from "next/server";

const adminPrefix = process.env.ADMIN_PREFIX;

export const checkRouteMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`/${adminPrefix}`) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL(`/shortlink${pathname}`, request.url));
};
