import * as React from "react";
import { ButtonProps } from "../../../models";

export default function Button({variant = null, text = '', additionalClasses = ""}: ButtonProps) {
    let className: string = "";

    switch (variant) {
        case "primary": {
            className = "bg-[#363a43] text-xs text-text-primary leading-none font-extralight hover:bg-[#3D4450]"
            break;
        } case "secondary-green": {
            className = "bg-gradient-button-green hover:bg-gradient-button-green-hover " +
                "text-[#d2efa9] hover:text-text-primary border-2 border-black rounded-sm text-sm font-medium brightness-95";
            break;
        } case "secondary-blue": {
                className = "bg-gradient-button-blue hover:bg-gradient-button-blue-hover " +
                    "text-[#d2efa9] hover:text-text-primary hover:brightness-110 border-2 border-black rounded-sm text-sm font-medium brightness-95";
                break;
        } case "outline": {
            className = "bg-[#264055] text-[#67C1F5] hover:text-text-primary rounded-sm px-5 font-medium text-sm hover:brightness-110 " +
                "hover:bg-gradient-button-outline-hover";
            break;
        }
    }

    return (
        <>
            <button className={className + " " + additionalClasses + " px-2 py-1"}>{text}</button>
        </>
    );
}
