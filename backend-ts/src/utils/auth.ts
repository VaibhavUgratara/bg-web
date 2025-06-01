import User from "../models/Register";

async function checkCredential(email: string, password: string) {
  const user = await User.findOne({ email, password });
  if (!user) {
    return "Invalid email or password";
  }
  return null;
}

function validateRegisterInput(email: string, password: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Invalid email format";
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return "Password must be atleast 6 character long";
  }

  return null;
}

async function setSessionId(email: string, sessionId: string) {
  const result = await User.updateOne(
    { email },
    { $set: { cookieId: sessionId } },
  );
  console.log(result);
}
export { validateRegisterInput, checkCredential, setSessionId };
