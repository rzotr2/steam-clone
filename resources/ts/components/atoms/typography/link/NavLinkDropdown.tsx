import * as React from "react";

export default function NavLinkDropdown({text, url, variant}: {text: string, url?: string, variant?: string}) {
    let className = '';

    switch(variant) {
        case 'header': {
            className = "text-size-subtitle-lg w-[100%] px-3 py-1 block";
            break;
        } case 'menu': {
            className = "brightness-75 hover:brightness-100 " +
                "border-b-2 border-transparent pb-0.5 " +
                "hover:border-white text-size-body";
            break;
        } case 'header-management': {
                className = "text-size-subtitle-lg w-[100%] py-1 block";
                break;
        }
    }

    return (
        <>
            <a href={url || "#"} className={`brightness-90 ${className}`}>{text}</a>
        </>
    );
}
