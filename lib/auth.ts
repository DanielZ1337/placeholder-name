import type {NextAuthOptions} from 'next-auth'
import GitHub from "next-auth/providers/github"
import {redisClient} from '@/lib/redis'
import {UpstashRedisAdapter} from "@next-auth/upstash-redis-adapter";

const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} = process.env

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
    jwt: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({session, token, user}) {
            // Send properties to the client, like an access_token and user id from a provider.
            if (!token.sub) throw new Error("Missing token.sub")

            session.user.id = token.sub

            return session
        }
    },
    events: {
        async createUser({user}) {
            console.log("createUser")
            await redisClient.sadd("users", user.id).then(() => {
                console.log("user added to users set")
            })
        }
    }
}
