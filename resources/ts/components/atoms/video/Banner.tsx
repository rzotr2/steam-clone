import * as React from "react";

export default function Banner() {
    function getRandomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const num = getRandomNum(0, 1);

    const bannerSrc = [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/a5a23f45e8ed75cb8238f3ad/webm_page_bg_english.webm?t=1739922220",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/clusters/frontpage/d254be318bd7def542ae475b/mp4_page_bg_english.mp4?t=1740525228"
    ]

    return (
        <>
            <div>
                <video loop preload="none" muted={true} autoPlay={true} className="h-[450px] object-cover">
                    <source
                        src={bannerSrc[num]}
                        type="video/mp4"/>
                </video>
            </div>
        </>
    );
}
