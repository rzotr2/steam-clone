import * as React from "react";
import { TextProps } from "../../../../models";

export default function TextElement({variant = null, text = null, additionalClasses}: TextProps) {
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
        } case "title": {
            className = "text-size-title tracking-wider ";
            break;
        } case "subtitle": {
            className = "text-size-subtitle";
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
