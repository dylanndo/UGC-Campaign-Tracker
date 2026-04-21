import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"; // lets users log in with an email/pass form

// calls NextAuth() and returns helpers
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {  // tells NextAuth to use cutom login page instead of default
    signIn: "/login",
  },
  providers: [
    Credentials({ // app supports one login method: credentials
      credentials: { // define fields
        email: {},
        password: {},
      },
      async authorize(credentials) { // authorize and validate credentials
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (    // compares submitted login with env variables
          email === process.env.APP_LOGIN_EMAIL &&
          password === process.env.APP_LOGIN_PASSWORD
        ) {
          return {  // if valid, return user object
            id: "1",
            email,
            name: "Dylan",
          };
        }

        return null;    // failed login
      },
    }),
  ],
});