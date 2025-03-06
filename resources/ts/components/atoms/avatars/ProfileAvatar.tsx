import * as React from "react";
import { AvatarProps } from "../../../models";
import { Avatar } from "radix-ui"

export default function ProfileAvatar({variant = null, url = null, additionalClasses = ''}: AvatarProps) {
    let className: string = "";
    let src = url || "https://i.ibb.co/ds9RR2Xf/2025-02-09-12-18-07.jpg"

    switch (variant) {
        case "primary-sm": {
            className = "size-[1.4em]";
            break;
        } case "primary-xl": {
            className = "size-[2.4em]";
            break;
        } case "outline-sm": {
            className = "size-[1.4em] border-[#40748B] border-2";
            break;
        } case "outline-xl": {
            className = "size-[2.4em] border-[#40748B] border-2";
            break;
        }
    }

    return (
        <>
            <Avatar.Root className={additionalClasses}>
                <p>
                    <Avatar.Image
                        className={className}
                        src={src}
                        alt="User Avatar"
                    />
                </p>
            </Avatar.Root>
        </>
    );
}
