import * as React from "react";
import { VariantProps } from "../../../../models";

export default function Link({variant = null, text = null}: VariantProps) {
    let className: string = "";

    switch (variant) {
        case "primary": {
            className = "text-text-primary text-size-title";
            break;
        } case "secondary": {
            className = "text-text-secondary text-size-subtitle font-bold";
            break;
        } case "outline": {
            className = "text-text-primary text-size-body bg-bg-secondary";
            break;
        }
    }

    return (
        <>
            <a href="#" className={className}>{text}</a>
        </>
    );
}
