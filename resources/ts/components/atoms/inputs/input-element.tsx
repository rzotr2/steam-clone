import * as React from "react";
import { VariantProps } from "../../../models";

export default function InputElement({variant = null, text = '', additionalClasses = ''}: VariantProps) {
    let className: string = "";

    switch (variant) {
        case "primary": {
            className = "bg-[#316282] text-text-primary border-[1px] border-transparent " +
                "placeholder-[#0E1C25] text-sm pt-2";
            break;
        } case "secondary": {
            className = "bg-[#2A3F5A] text-[#909090] pt-2 pb-1 text-xs shadow-[1px_1px_0_#000000]";
            break;
        } case "outline": {
            className = "bg-[#202327] text-[#909090] text-xs pt-3 pb-2";
            break;
        }
    }

    return (
        <>
            <input type="text" placeholder={text as string} className={className + " " + additionalClasses + " " +
                "rounded-sm ps-4 placeholder-shown:italic " +
                "appearance-none outline-none leading-none placeholder-opacity-70"
            }/>
        </>
    );
}
