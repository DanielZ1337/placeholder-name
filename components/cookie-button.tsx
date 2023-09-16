'use client'

import {useCookieContext} from "@/components/cookie-provider";
import {Button} from "@nextui-org/react";

export default function CookieButton() {
    const cookieContext = useCookieContext()
    const {onOpen} = cookieContext

    return (
        <Button
            onClick={onOpen}
            color="secondary"
            size={"sm"}
            className="fixed bottom-4 right-4 z-50"
        >
            Cookie Policy
        </Button>
    )
}