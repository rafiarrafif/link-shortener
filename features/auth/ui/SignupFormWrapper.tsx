import { registerUser } from "../model/actions";
import SignupForm from "./SignupForm";

const SignupFormWrapper = () => {
  const action = async (formData: FormData) => {
    "use server";
    await registerUser(formData);
  };

  return <SignupForm action={action} />;
};

export default SignupFormWrapper;
