import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import {signIn} from "next-auth/react";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const origin = request.nextUrl.origin
    const pathname = request.nextUrl.pathname

    // if /auth/signin or /api/auth/signin
    if (pathname.startsWith("/auth/signin") || pathname.startsWith("/api/auth/signin")) {
        // If no token, redirect to login page
        /*if (!token) {
            return NextResponse.redirect(`${origin}/auth/signin`);
        }*/

        // if already token, redirect to profile page
        if (token) {
            return NextResponse.redirect(`${origin}/profile`);
        }
    }

    // if no token and signout, redirect to home page
    if (!token && pathname.startsWith("/auth/signout")) {
        return NextResponse.redirect(`${origin}/`);
    }

    // if no token and /profile, redirect to login page
    if (!token && pathname.startsWith("/profile")) {
        return NextResponse.redirect(`${origin}/auth/signin`);
    }
}

export const config = { matcher: ["/profile", "/auth/signin","/auth/signout", "/api/auth/signin", "/api/auth/signout"] };