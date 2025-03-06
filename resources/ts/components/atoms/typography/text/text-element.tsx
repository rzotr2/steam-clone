import * as React from "react";

type TextElementProps = {
    variant?: "title" | "subtitle-lg" | "body" | "heading"
        | "main-heading" | "sub-heading" | "carousel-description"
        | "carousel-badge" | "badge-deal" | "subtitle-sm" |null;
    additionalClasses?: string,
    text?: string | null
}

export default function TextElement({variant = null, text = null, additionalClasses}: TextElementProps) {
    let className: string = "text-text-primary text-md";

    switch (variant) {
        case "main-heading": {
            className = "text-size-main-heading ";
            break;
        }
        case "sub-heading": {
            className = "text-size-sub-heading ";
            break;
        } case "carousel-description": {
            className = "text-size-carousel-description font-light ";
            break;
        } case "carousel-badge": {
            className = "text-size-carousel-badge font-light ";
            break;
        } case "badge-deal": {
            className = "text-size-badge-deal font-medium ";
            break;
        } case "title": {
            className = "text-size-title tracking-wider ";
            break;
        } case "subtitle-lg": {
            className = "text-size-subtitle-lg ";
            break;
        } case "subtitle-sm": {
            className = "text-size-subtitle-sm ";
            break;
        } case "body": {
            className = "text-size-body ";
            break;
        }
    }

    return (
        <>
            <span className={className + " " + additionalClasses}>{text}</span>
        </>
    );
}
