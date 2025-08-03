import jwt from "jsonwebtoken";

export const verifyJwt = (hashed: string) => {
  return jwt.verify(hashed, process.env.JWT_KEY!);
};
