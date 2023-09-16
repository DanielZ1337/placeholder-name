/*
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {AuthButton} from "@/components/layout/ui/login/auth-button";
import {OAuthProviders} from "@/lib/o-auth-providers";
import EmailLoginForm from "@/components/login/login-page/email-login-form";
import React from "react";

export default async function LoginModal() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"text-center"}>Login</DialogTitle>
                    <DialogDescription className={"flex flex-col gap-4"}>
                        <EmailLoginForm/>
                        <div className={"flex justify-center items-center gap-4"}>
                            <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">OR</p>
                            </div>
                            <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                        </div>
                        <div className="grid w-full items-center gap-4">
                            {OAuthProviders.map((provider) => (
                                <AuthButton key={provider.provider} provider={provider.provider}
                                            icon={provider.icon}>Login with {provider.name}</AuthButton>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

*/
