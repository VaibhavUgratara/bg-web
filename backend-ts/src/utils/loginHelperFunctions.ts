import User from "../models/Register";

export async function checkCredential(email: string, password: string) {
  const user = await User.findOne({ email, password });
  if (!user) {
    return "Invalid email or password";
  }
  return null;
}
