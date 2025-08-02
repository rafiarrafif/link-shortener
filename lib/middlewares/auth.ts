import { NextRequest, NextResponse } from "next/server";

export const authMiddleware = async (request: NextRequest) => {
  return NextResponse.json({
    success: false,
    message: "Just testing, buddy2!!",
  });
};
