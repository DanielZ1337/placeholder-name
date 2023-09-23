'use client'

import React, {useState} from "react";
import {Button, ButtonProps} from "@nextui-org/react";
import {SignInOptions, SignOutParams} from "next-auth/react";
import {cn} from "@/lib/utils";
import {Spinner} from "@nextui-org/spinner";

// import {toast} from "@/components/ui/use-toast";

export interface AuthButtonProps
    extends ButtonProps {
    provider?: string
    icon?: React.ReactElement
    children?: React.ReactNode
    ref?: React.ForwardedRef<HTMLButtonElement>
    signInOptions?: SignInOptions
    externalLoadingState?: boolean
    usingExternalLoadingState?: boolean
    signingOut?: boolean
    signOutOptions?: SignOutParams
    className?: string
}

function AuthButtonWrapper({
                               provider,
                               icon,
                               children,
                               signInOptions,
                               externalLoadingState,
                               usingExternalLoadingState,
                               signingOut,
                               signOutOptions,
                               className,
                               ...props
                           }: AuthButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <Button
            variant={"solid"}
            isLoading={isLoading || externalLoadingState}
            spinner={<Spinner color={"current"} size={"sm"}/>}
            onClick={async () => {
                if (usingExternalLoadingState) return
                if (signingOut) {
                    const signOut = await import("next-auth/react").then((mod) => mod.signOut)
                    signOut(signOutOptions).then(() => {
                        setIsLoading(false)
                    }).catch(async () => {
                        setIsLoading(false)
                        const toast = await import("@/components/ui/use-toast").then((mod) => mod.toast)
                        toast({
                            title: "Error",
                            description: "There was an error logging you out",
                        })
                    })
                } else {

                    if (!provider) throw new Error("Provider is required")

                    setIsLoading(true)

                    const signIn = await import("next-auth/react").then((mod) => mod.signIn)
                    signIn(provider, signInOptions).then(() => {
                        setIsLoading(false)
                    }).catch(async (error) => {
                        setIsLoading(false)
                        const toast = await import("@/components/ui/use-toast").then((mod) => mod.toast)
                        toast({
                            title: "Error",
                            description: error.message,
                        })
                    })
                }
            }}
            ref={ref}
            className={cn("relative", className)}
            {...props}
        >
            {icon && !isLoading && !externalLoadingState && React.cloneElement(icon, {className: "w-5 h-5"})}
            <span className={"ml-1"}>{children}</span>
        </Button>
    )
}

export const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(AuthButtonWrapper)