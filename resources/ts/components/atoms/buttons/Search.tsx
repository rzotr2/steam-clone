import * as React from "react";
import { VariantProps } from "../../../models";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchButton({variant = null, additionalClasses = ''}: VariantProps) {
    let className: string = "p-1.5";

    switch (variant) {
        case "primary": {
            className = "text-text-primary";
            break;
        } case "secondary": {
            className = "";
            break;
        } case "outline": {
            className = "bg-[#539AC5] hover:bg-[#65B7E8] text-[#324C69]";
            break;
        }
    }

    return (
        <>
            <a href="#" className={className + " " + additionalClasses + " inline-block p-1.5"}><RiSearch2Line strokeWidth={2} /></a>
        </>
    );
}
