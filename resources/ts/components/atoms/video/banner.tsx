import * as React from "react";

export default function Banner() {
    return (
        <>
            <div>
                <video loop preload="none" muted={true} autoPlay={true} className="h-[450px] object-cover">
                    <source
                        src="https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/a5a23f45e8ed75cb8238f3ad/webm_page_bg_english.webm?t=1739922220"
                        type="video/mp4"/>
                </video>
            </div>
        </>
    );
}
