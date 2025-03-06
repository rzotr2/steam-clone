import {HoverCard} from "radix-ui";
import * as React from "react";
import { ReactNode } from "react";

type HoverCardProps = {
    trigger?: ReactNode,
    content?: ReactNode,
    variant?: "large" | "small"
}

export default function StoreHoverCard({trigger, content, variant}: HoverCardProps) {
    const side = variant === "small" ? "left" : "right";

    return (
        <>
            <HoverCard.Root openDelay={0} closeDelay={0}>
                <HoverCard.Trigger>
                    {trigger}
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content side={side} align="start" sideOffset={4} sticky="always" className="animate-[show_0.5s_ease-in-out]">
                        {content}
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </>
    )
}
