import * as React from "react";
import { CarouselDataProps } from "../../../models";


export default function CarouselPlatforms({platforms}: CarouselDataProps) {
    const platformLinks: Record<string, string> = {
        PC: "https://store.fastly.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
        MacOS: "https://store.fastly.steamstatic.com/public/images/v6/icon_platform_mac.png",
        Linux: "https://store.fastly.steamstatic.com/public/images/v6/icon_platform_linux.png",
        VR: "https://store.fastly.steamstatic.com/public/images/v6/icon_platform_oculusrift.png",
    }

    return (
        <>
            <div className="flex gap-1">
                {platforms.map((platform: string, index: number) => {
                    const imageUrl: string = platformLinks[platform];

                    return (
                        <img key={index} src={imageUrl}
                             alt={`${platform} platform`}
                             className="h-auto w-auto max-h-5 bg-bg-"
                        >
                        </img>
                    )
                })}
            </div>
        </>
    );
}
