'use client'

import {signOut} from "next-auth/react";
import {Button} from "@nextui-org/react";
import React, {useState} from "react";
import {Spinner} from "@nextui-org/spinner";

export default function LogoutButton() {
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <Button
            onClick={() => {
                setIsLoading(true)
                signOut().then(() => {
                    setIsLoading(false)
                })
            }}
            variant={"bordered"}
            size={"sm"}
            disabled={isLoading}
        >
            {isLoading ? <Spinner color={"current"} size={"sm"}/> : "Logout"}
        </Button>
    )
}