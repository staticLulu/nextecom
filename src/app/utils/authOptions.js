import CredentialsProvider from "next-auth/providers/credentials";
import User from "../models/user";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // Ensure the database is connected
        await dbConnect();
        
        const { email, password } = credentials;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password");
        }

        // Compare the provided password with the hashed password
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        // Return the user object if authentication is successful
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
