import * as React from "react";
import NavLinkDropdown from "../../../atoms/typography/link/NavLinkDropdown";
import { Separator } from "radix-ui";
import TextElement from "../../../atoms/typography/text/text-element";

export default function NewItemContent() {
    return (
        <>
            <div className="flex px-4 pt-5 pb-3 gap-5">
                <ul>
                    <li><TextElement text="POPULAR" variant="subtitle-lg"
                                     additionalClasses="text-[#2ebfff] opacity-75 tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Top Sellers"/></li>
                    <li><NavLinkDropdown variant="menu" text="Most Played"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="New Releases"/></li>
                    <li><NavLinkDropdown variant="menu" text="Upcoming Releases"/></li>
                    <li className="mt-4"><TextElement text="NEWS & UPDATES" variant="subtitle-lg"
                                                      additionalClasses="text-[#2ebfff] opacity-75 tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Recently Updated"/></li>
                </ul>
                <div
                    className="min-h-max w-[1.4px] self-stretch bg-gradient-menu-dropdown-separator-vertical-gray my-2"></div>
                <ul className="m-0 p-0">
                    <li><TextElement text="PROMOS & EVENTS" variant="subtitle-lg"
                                     additionalClasses="text-[#2ebfff] opacity-75 tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Special Offers"/></li>
                    <li><NavLinkDropdown variant="menu" text="Sale Events"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="Steam Replay"/></li>
                    <li><NavLinkDropdown variant="menu" text="Steam Next Fest"/></li>
                    <li><NavLinkDropdown variant="menu" text="The Steam Awards"/></li>
                </ul>
            </div>
        </>
    );
}
