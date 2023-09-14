import type {User} from 'next-auth'

interface CustomUserProps {
    id: string
}

declare module 'next-auth' {
    interface Session {
        user: User & CustomUserProps
    }
}