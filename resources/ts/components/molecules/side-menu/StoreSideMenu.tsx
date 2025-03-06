import * as React from "react";
import TextElement from "../../atoms/typography/text/text-element";

export default function StoreSideMenu() {
    return (
        <div
            className="absolute top-10 left-0 overflow-hidden max-w-0 opacity-0 transition-all duration-500 custom-lg:relative custom-lg:max-w-40 custom-lg:opacity-100">
            <div>
                <a href="#" className="group">
                    <div>
                        <img
                            src="https://store.cloudflare.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1"
                            alt="Steam Gift Cards"
                            className="group"
                        />
                    </div>
                    <div className="mt-3 flex flex-col leading-none space-y-1 group group-hover:text-text-primary">
                        <TextElement text="STEAM GIFT CARDS"
                                     variant="subtitle-lg"
                                     additionalClasses="text-[#88BDE9] font-bold group group-hover:brightness-150"/>
                        <TextElement text="Give the gift of Game"
                                     variant="subtitle-sm"
                                     additionalClasses="text-[#A4B3C4] font-bold group group-hover:brightness-125"/>
                    </div>
                </a>
            </div>
            <div className="my-3 bg-gradient-store-side-menu leading-none py-4 px-0.5">
                <div className="pb-2">
                    <span className="text-[#536F86] text-size-subtitle-lg font-semibold">
                        RECENTLY VIEWED
                    </span>
                </div>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Dota 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Rust
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Tom Clancy`s Rainbow Six Siege
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Anno 1800
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Kingdom Come: Deliverance
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Avowed
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Gray Zone Warfare
                        </a>
                    </li>
                </ul>
            </div>
            <div className="my-3 leading-none py-2 px-0.5">
                <div className="pb-2">
                    <span className="text-[#536F86] text-size-subtitle-lg font-semibold">
                        YOUR TAGS
                    </span>
                </div>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Tanks
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            FPS
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Post-Apocalyptic
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Military
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Shooter
                        </a>
                    </li>
                </ul>
            </div>
            <div className="my-3 leading-none py-2 px-0.5">
                <div className="pb-2">
                    <span className="text-[#536F86] text-size-subtitle-lg font-semibold">
                        RECOMMENDED
                    </span>
                </div>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            By Friends
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            By Curators
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Tags
                        </a>
                    </li>
                </ul>
            </div>
            <div className="my-3 leading-none py-2 px-0.5">
                <div className="pb-2">
                    <span className="text-[#536F86] text-size-subtitle-lg font-semibold">
                        BROWSE CATEGORIES
                    </span>
                </div>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Top Sellers
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            New Releases
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Upcoming
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Specials
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            VR Titles
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Controller-Friendly
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Great on Deck
                        </a>
                    </li>
                </ul>
            </div>
            <div className="my-3 leading-none py-2 px-0.5">
                <div className="pb-2">
                    <span className="text-[#536F86] text-size-subtitle-lg font-semibold">
                        BROWSE BY GENRE
                    </span>
                </div>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Free To Play
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Early Access
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Action
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Adventure
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Casual
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Indie
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Massively Multiplayer
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Racing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            RPG
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Simulation
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Sports
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[#7A8B9D] hover:text-[#66C0F4] text-size-subtitle-sm font-semibold">
                            Strategy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
