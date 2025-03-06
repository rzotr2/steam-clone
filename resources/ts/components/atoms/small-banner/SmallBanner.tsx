import * as React from "react";

export default function SmallBanner() {
    const randomNum = getRandomNum(0, 2);
    const bannerSrc = [
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/clusters/takeunder/424e83dc4f90bfa4f00a4e5b/takeunder_desktop_english.jpg?t=1739560864",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/takeunder/978e8f55fe3cea3cbf45e6b4/takeunder_desktop_english.jpg?t=1740088823",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/clusters/takeunder/6a3f2a19bb97d85633f5db5d/takeunder_desktop_english.jpg?t=1740612963"
    ];

    function getRandomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            <div className="mx-auto m-10 w-[972px] my-12 hover:shadow-banner-shadow">
                <a href="#">
                    <img
                        src={bannerSrc[randomNum]}
                        alt="Small Banner" className="w-full"/>
                </a>
            </div>
        </>
    )
}
