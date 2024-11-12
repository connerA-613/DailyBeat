import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Spotify
  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({session, token}) {
      session.user.accessToken = token.accessToken
      return session
    }
  }
})