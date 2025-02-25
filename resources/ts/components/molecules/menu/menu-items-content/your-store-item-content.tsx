import * as React from "react";
import NavLinkDropdown from "../../../atoms/typography/link/nav-link-dropdown";
import { Separator } from "radix-ui";
import TextElement from "../../../atoms/typography/text/text-element";

export default function YourStoreItemContent() {
    return (
        <>
            <ul className="p-4 text-xs flex-column space-y-3 > li">
                <li><NavLinkDropdown variant="menu" text="Home"/></li>
                <li><NavLinkDropdown variant="menu" text="Followed Games & Software"/></li>
                <Separator.Root className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-2/3 brightness-150" />
                <li className="pt-3"><TextElement text="SUBSCRIPTIONS" variant="subtitle"
                                 additionalClasses="text-[#2Ebfff] opacity-75 tracking-wider"/></li>
                <li><NavLinkDropdown variant="menu" text="Manage Subscriptions"/></li>
                <li><NavLinkDropdown variant="menu" text="Preferences"/></li>
                <Separator.Root className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-2/3 brightness-150"/>
                <li className="pt-3"><TextElement text="RECOMMENDATIONS" variant="subtitle"
                                 additionalClasses="text-[#2Ebfff] opacity-75 tracking-wider"/></li>
                <li><NavLinkDropdown variant="menu" text="Discovery Queue"/></li>
                <li><NavLinkDropdown variant="menu" text="New Releases Queue"/></li>
                <li><NavLinkDropdown variant="menu" text="Community Recommendations"/></li>
                <li><NavLinkDropdown variant="menu" text="Interactive Recommender"/></li>
                <li><NavLinkDropdown variant="menu" text="Popular Among Friends"/></li>
                <li><NavLinkDropdown variant="menu" text="Steam Curators"/></li>
                <li><NavLinkDropdown variant="menu" text="DLC For You"/></li>
                <Separator.Root className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-2/3 brightness-150"/>
                <li className="pt-3"><TextElement text="BECAUSE YOU LOVE" variant="subtitle"
                                 additionalClasses="text-[#2Ebfff] opacity-75 tracking-wider"/></li>
                <li><NavLinkDropdown variant="menu" text="Relaxing"/></li>
                <li><NavLinkDropdown variant="menu" text="Survival"/></li>
                <li><NavLinkDropdown variant="menu" text="FPS"/></li>
                <li><NavLinkDropdown variant="menu" text="Building"/></li>
                <li><NavLinkDropdown variant="menu" text="More Tags for You..."/></li>
            </ul>
        </>
    );
}
