import {oAuthProviders} from "@/lib/o-auth-providers";
import {AuthButton} from "@/components/login/auth-button";
import React from "react";
// import EmailLoginForm from "@/components/layout/ui/login/login-page/email-login-form";

export default function LoginOptions() {

    return (
        <div className="grid w-full items-center gap-4">
            {/*<EmailLoginForm/>
            <div className={"flex justify-center items-center gap-4"}>
                <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                <p className="text-sm text-muted-foreground uppercase py-2">OR CONTINUE WITH</p>
                <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
            </div>*/}
            {oAuthProviders.map((provider) => (
                <AuthButton key={provider.provider} provider={provider.provider}
                            icon={provider.icon} color={"secondary"} size={"lg"}>
                    Login with {provider.name}
                </AuthButton>
            ))}
        </div>
    )
}
