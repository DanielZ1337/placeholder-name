'use client'

import React, {useState} from "react";
import {Button, ButtonProps} from "@nextui-org/react";
import {signIn, SignInOptions, signOut, SignOutParams} from "next-auth/react";
import {cn} from "@/lib/utils";
import {Spinner} from "@nextui-org/spinner";
import {toast} from "@/components/ui/use-toast";

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
            onClick={() => {
                if (usingExternalLoadingState) return

                if (signingOut) {
                    signOut(signOutOptions).then(() => {
                        setIsLoading(false)
                    }).catch(() => {
                        setIsLoading(false)
                        toast({
                            title: "Error",
                            description: "There was an error logging you out",
                        })
                    })
                } else {

                    if (!provider) throw new Error("Provider is required")

                    setIsLoading(true)
                    signIn(provider, signInOptions).then(() => {
                        setIsLoading(false)
                    }).catch((error) => {
                        setIsLoading(false)
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