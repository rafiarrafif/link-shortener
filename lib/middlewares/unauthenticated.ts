import { NextRequest, NextResponse } from "next/server";

export const unauthenticatedMiddleware = async (request: NextRequest) => {
  return NextResponse.json({
    success: false,
    message: "Just testing, buddy2!!",
  });
};
