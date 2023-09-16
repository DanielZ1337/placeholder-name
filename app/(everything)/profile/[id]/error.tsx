'use client' // Error components must be Client Components

import { useEffect } from 'react'
import {Button} from "@nextui-org/react";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={"flex flex-col items-center gap-2"}>
            <h2>Something went wrong!</h2>
            <Button
                onClick={reset}
                size={"lg"}
                color={"danger"}
            >
                Try again
            </Button>
        </div>
    )
}