'use client'

import {Button} from "@nextui-org/react";
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import {LinkIcon} from "lucide-react";
import React, {useEffect} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FaCheck} from "react-icons/fa6";

export default function ShareLink({url, className, ...props}: {
    url: string,
    className: string
} & React.ComponentProps<typeof Button>) {
    const [isCopied, setCopied] = React.useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [isCopied]);

    return (
        <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <Button
                isIconOnly
                size={"sm"}
                color={"secondary"}
                variant={"flat"}
                aria-label={isCopied ? "Copied!" : "Copy"}
                className={cn("rounded-full p-3 w-fit h-fit", className)}
                {...props}
            >
                <span className={"sr-only"}>{isCopied ? "Copied!" : "Copy"}</span>
                <span className={"sr-only"}>{url}</span>
                <span className={"w-5 h-5"}>
                    <AnimatePresence>
                    {isCopied && (
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}
                            className={"absolute"}
                        >
                            <FaCheck className={"w-5 h-5"}/>
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {!isCopied && (
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                className={"absolute"}
                            >
                                <LinkIcon className={"w-5 h-5"}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </span>
            </Button>
        </CopyToClipboard>
    )
}