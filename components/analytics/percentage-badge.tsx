import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {Slot} from "@radix-ui/react-slot";
import React from "react";

const badgeVariants = cva(
    "inline-flex items-center rounded-full font-medium text-center",
    {
        variants: {
            variant: {
                default: "bg-primary/30 text-foreground",
                negative: "bg-danger/30",
                positive: "bg-success/30",
                neutral: "bg-warning/30",
            },
            size: {
                default: "h-32 w-32 text-sm p-3",
                sm: "h-24 w-24 text-xs p-2",
                lg: "h-40 w-40 text-lg p-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.ComponentPropsWithoutRef<"span">,
        VariantProps<typeof badgeVariants> {
    asChild?: boolean
    children?: React.ReactNode
}

const PercentageBadge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "span"
        return (
            <Comp
                className={cn(badgeVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        )
    }
)
PercentageBadge.displayName = "Badge"

export { PercentageBadge, badgeVariants}

