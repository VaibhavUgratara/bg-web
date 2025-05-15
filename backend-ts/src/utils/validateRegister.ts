export function validateRegisterInput(name: string, email: string, password: string) {

    if (!name || typeof name !== 'string' || name.length < 3 ) {
        return "Name must be atleast 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return "Invalid email format";
    }
    
    if (!password || typeof password !== 'string' || password.length < 6 ) {
        return "Password must be atleast 6 character long";
    }

    return null;
}
