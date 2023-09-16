'use client'

import Link from "next/link";
import {cn} from "@/lib/utils";
import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

function HEXtoHSL(hex: string) {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {h, s, l};
}

function shouldTextBeInverted(color: string) {
    const {h, s, l} = HEXtoHSL(color)
    return l > 70 || s < 30 || h > 200 && h < 300
}

export default function SocialMediaLink({href, color, icon, children, className, ...props}: {
    href: string
    color?: string
    icon?: React.ReactElement
    children: React.ReactNode
    className?: string
    props?: React.ComponentProps<typeof Link>
}) {
    const [isHover, setIsHover] = useState<boolean>()

    return (
        <Link href={href}
              className={cn('flex gap-2 items-center justify-between px-10 py-3 rounded-md text-sm font-medium text-white lg:px-4 lg:py-2 lg:text-base md:px-6 md:py-3 md:text-base sm:px-8 sm:py-4 sm:text-base transition-all duration-200 ease-in-out', className)}
              rel={"noopener noreferrer"} target={"_blank"}
              style={{
                  backgroundColor: HEXtoHSL(color!).h < 0 ? color : `hsl(${HEXtoHSL(color!).h}, ${isHover ? HEXtoHSL(color!).s + 10 : HEXtoHSL(color!).s}%, ${isHover ? HEXtoHSL(color!).l - 10 : HEXtoHSL(color!).l}%, ${isHover ? 1 : 0.9})`,
                  color: shouldTextBeInverted(color!) ? 'white' : 'black',
                  transition: 'background-color 0.2s ease-in-out',
              }}
              {...props}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
        >
            <span className={'flex gap-2 items-center justify-center'}>
                <span className={"w-6 h-6"}>{React.cloneElement(icon!, {height: '', width: ''})}<span
                    className={'sr-only'}>{children}</span></span>
                <span className={"sm:text-lg text-sm lg:text-lg lg:font-medium xl:text-base"}>{children}</span>
            </span>
            <BsArrowRight className={cn('w-6 h-6', isHover ? 'translate-x-1 transition-transform duration-200 ease-in-out' : 'translate-x-0 transition-transform duration-200 ease-in-out')}/>
        </Link>
    )
}