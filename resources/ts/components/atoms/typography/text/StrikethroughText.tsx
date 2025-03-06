import * as React from "react";

export default function StrikethroughText({text}: {text: string,}) {
    return (
        <>
            <span
                className="bg-[linear-gradient(to_left_top,transparent_46.75%,#687B87_48.5%,#687B87_51.5%,transparent_53.25%)] text-size-carousel-badge"
            >
                {text}
            </span>
        </>
    )
}
