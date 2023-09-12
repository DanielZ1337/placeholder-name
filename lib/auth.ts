import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GitHub from "next-auth/providers/github"
import { redisClient } from './redis'
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env

if (!GITHUB_CLIENT_ID) {
  throw new Error("Environment variable GITHUB_CLIENT_ID is missing.")
}

if (!GITHUB_CLIENT_SECRET) {
  throw new Error("Environment variable GITHUB_CLIENT_SECRET is missing.")
}

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(redisClient),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      console.log(account)
      if (account) {
        // @ts-ignore
        token.id = profile?.id
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // console.log(token)
      // @ts-ignore
      session.accessToken = token.accessToken
      // @ts-ignore
      session.user.id = token.id

      return session
    }
  }
}