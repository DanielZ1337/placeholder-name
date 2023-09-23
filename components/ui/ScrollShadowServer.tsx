'use client'

import {ScrollShadow} from "@nextui-org/react";
import {forwardRef} from "react";
import {ScrollShadowProps} from "@nextui-org/scroll-shadow";
import {cn} from "@/lib/utils";

interface ScrollShadowServerProps extends ScrollShadowProps {
    children: React.ReactNode
    className?: string
}

const ScrollShadowServer = forwardRef<HTMLElement, ScrollShadowServerProps>(({children, className, ...props}, ref) => {
    return (
        <ScrollShadow ref={ref} className={cn("overflow-auto", className)} {...props}>
            {children}
        </ScrollShadow>
    )
})

ScrollShadowServer.displayName = ScrollShadow.displayName

export default ScrollShadowServer