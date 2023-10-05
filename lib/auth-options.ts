import { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getNextAuthCredentials } from "./secrets";
import { getServerSession } from "next-auth/next";
export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: getNextAuthCredentials().githubClientId,
      clientSecret: getNextAuthCredentials().githubClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ session, token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: getNextAuthCredentials().nextAuthSecret,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    // error: "/auth/error",
  },
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
};
