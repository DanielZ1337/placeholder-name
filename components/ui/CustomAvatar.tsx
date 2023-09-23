'use client'

import React, {forwardRef, useMemo} from "react";

import {AvatarIcon, AvatarProps as BaseAvatarProps, useAvatar} from "@nextui-org/react";
import Image from "next/image";

export interface AvatarProps extends BaseAvatarProps {
}

const CustomAvatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
    const {
        src,
        icon = <AvatarIcon/>,
        alt,
        classNames,
        slots,
        name,
        showFallback,
        fallback: fallbackComponent,
        getInitials,
        getAvatarProps,
        getImageProps,
    } = useAvatar({
        ref,
        ...props,
    });

    const fallback = useMemo(() => {
        if (!showFallback && src) return null;

        const ariaLabel = alt || name || "avatar";

        if (fallbackComponent) {
            return (
                <div
                    aria-label={ariaLabel}
                    className={slots.fallback({class: classNames?.fallback})}
                    role="img"
                >
                    {fallbackComponent}
                </div>
            );
        }

        return name ? (
            <span aria-label={ariaLabel} className={slots.name({class: classNames?.name})} role="img">
        {getInitials(name)}
      </span>
        ) : (
            <span aria-label={ariaLabel} className={slots.icon({class: classNames?.icon})} role="img">
        {icon}
      </span>
        );
    }, [showFallback, src, fallbackComponent, name, classNames]);

    return (
        <div {...getAvatarProps()}>
            {src && <Image src={src} {...getImageProps()} width={50} height={50} alt={alt}/>}
            {fallback}
        </div>
    );
});

CustomAvatar.displayName = "CustomAvatar";

export default CustomAvatar;
