'use client'

import {Input} from "@nextui-org/react";
import {AuthButton} from "@/components/login/auth-button";
// import {HiOutlineMail} from "react-icons/hi";
import React, {useState} from "react";
import {signIn} from "next-auth/react";
import {z} from "zod";

export default function EmailLoginModalForm() {
    const [email, setEmail] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const emailSchema = z.string().email()

    return (
        <form className={"grid w-full items-center gap-4"} onSubmit={(e) => {
            e.preventDefault()

            if (!emailSchema.safeParse(email).success) {
                return
            }

            setIsLoading(true)
            signIn("email", {email: email, redirect: false}).then(() => {
                setIsLoading(false)
            })
        }}>
            <label className={"text-left block -mb-2 ml-3"} htmlFor={"email"}>Email</label>
            <Input
                onInput={(event) => setEmail(event.currentTarget.value)}
                type={"email"}
                name={"email"}
                placeholder="name@examdple.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
            />
            <AuthButton externalLoadingState={isLoading} usingExternalLoadingState className={"bg-primary py-6"}
                        size={"lg"}
                        icon={undefined}>
                Login with Email
            </AuthButton>
        </form>
    )
}