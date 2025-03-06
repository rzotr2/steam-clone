import * as React from "react";

type HoverCardTriggerProps = {
    children: React.ReactNode,
}

export default function HoverCardTrigger({children}: HoverCardTriggerProps) {
    return (
        <>
            {children}
        </>
    )
}
