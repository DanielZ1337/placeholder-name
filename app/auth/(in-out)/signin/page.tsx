import React from "react";
import LoginOptions from "@/components/login/login-page/login-options";
import {siteConfig} from "@/lib/site";

export const metadata = {
    title: "Sign In",
    description: `Sign in to your ${siteConfig.title} account`
}

export default function Page() {

    return (
        <>
            <h1 className="my-6">
                <span className="text-3xl font-bold">Welcome to {siteConfig.title}.</span>
            </h1>
            <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <LoginOptions/>
            </div>
        </>
    )
}
