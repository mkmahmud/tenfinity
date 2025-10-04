import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    // This gets called after successful OAuth
    async signIn({ user, account, profile }) {
      try { 
        // send user data to backend API
        // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/social-login`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     provider: account?.provider, // google or facebook
        //     providerAccountId: account?.providerAccountId,
        //     email: user.email,
        //     name: user.name,
        //     avatar: user.image,
        //   }),
        // });

        return true;
      } catch (err) {
        console.error("Error sending user data:", err);
        return false;
      }
    },

    async jwt({ token, account, user }) {
      // attach provider info to JWT token
      if (account) {
        token.accessToken = account.access_token;
        }
        console.log("JWT Token:", token);
      return token;
    },

    async session({ session, token }) {
      // forward token info into session object
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
