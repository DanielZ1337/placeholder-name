'use client'

import Link from "next/link";
import {cn} from "@/lib/utils";
import {useState} from "react";
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
              className={cn('flex gap-2 items-center justify-between px-10 py-3 rounded-md text-sm font-medium text-white lg:px-4 lg:py-2 lg:text-base md:px-6 md:py-2 md:text-base', className)}
              rel={"noopener noreferrer"} target={"_blank"}
              style={{
                  backgroundColor: HEXtoHSL(color!).h < 0 ? color : `hsl(${HEXtoHSL(color!).h}, ${isHover ? HEXtoHSL(color!).s + 10 : HEXtoHSL(color!).s}%, ${isHover ? HEXtoHSL(color!).l - 10 : HEXtoHSL(color!).l}%, ${isHover ? 1 : 0.9})`,
                  transition: 'background-color 0.2s ease-in-out',
              }}
              {...props}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
        >
            <span className={'flex gap-2 items-center'}>
                <span className={"w-5 h-5"}>{icon}<span className={'sr-only'}>{children}</span></span>
            <span>{children}</span>
            </span>
            <BsArrowRight className={'w-5 h-5'}/>
        </Link>
    )
}