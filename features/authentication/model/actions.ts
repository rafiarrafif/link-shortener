import { PreviewData } from "next";
import { loginSchema } from "./validatiors";

export const authLogin = async (prevData: PreviewData, formData: FormData) => {
  const inputPayload = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = loginSchema.safeParse(inputPayload);
};
