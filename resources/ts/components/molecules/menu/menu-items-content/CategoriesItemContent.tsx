import * as React from "react";
import NavLinkDropdown  from "../../../atoms/typography/link/NavLinkDropdown";
import { Separator } from "radix-ui";
import TextElement from "../../../atoms/typography/text/text-element";

export default function CategoriesItemContent() {
    return (
        <>
            <div className="flex flex-1 px-4 pt-5 pb-3 gap-5">
                <ul className="me-5">
                    <li className="mb-1"><TextElement text="SPEICAL SECTIONS" variant="body"
                                                      additionalClasses="text-[#2ebfff] tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Free To Play"/></li>
                    <li><NavLinkDropdown variant="menu" text="Demos"/></li>
                    <li><NavLinkDropdown variant="menu" text="Early Access"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="Steam Deck"/></li>
                    <li><NavLinkDropdown variant="menu" text="Great On Deck"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="Controller Friendly"/></li>
                    <li><NavLinkDropdown variant="menu" text="Remote Play"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="VR Titles"/></li>
                    <li><NavLinkDropdown variant="menu" text="VR Hardware"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="Software"/></li>
                    <li><NavLinkDropdown variant="menu" text="Soundtracks"/></li>
                    <Separator.Root
                        className="bg-gradient-menu-dropdown-separator-horizontal-gray h-[0.5px] w-1/2 brightness-150 my-3"/>
                    <li><NavLinkDropdown variant="menu" text="macOS"/></li>
                    <li><NavLinkDropdown variant="menu" text="SteamOS + Linux"/></li>
                    <li><NavLinkDropdown variant="menu" text="For PC Cafés"/></li>
                </ul>
                <div
                    className="min-h-max w-[1.4px] self-stretch bg-gradient-menu-dropdown-separator-vertical-gray my-2"></div>
                <div>
                    <div>
                        <span className="block min-w-max"><TextElement text="GENRES" variant="subtitle-lg"
                                                                       additionalClasses="text-[#2ebfff] tracking-wider font-extrabold text-xs"/>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <ul className="space-y-[0.32rem] > li">
                            <li><NavLinkDropdown variant="menu" text="Action"/></li>
                            <li><NavLinkDropdown variant="menu" text="Arcade & Rhytm"/></li>
                            <li><NavLinkDropdown variant="menu" text="Fighting & Martial Arts"/></li>
                            <li><NavLinkDropdown variant="menu" text="First-person Shooter"/></li>
                            <li><NavLinkDropdown variant="menu" text="Hack & Slash"/></li>
                            <li><NavLinkDropdown variant="menu" text="Platformer & Runner"/></li>
                            <li><NavLinkDropdown variant="menu" text="Third-person Shooter"/></li>
                            <li className="mb-3"><NavLinkDropdown variant="menu" text="Shmup"/></li>
                            <li><NavLinkDropdown variant="menu" text="Adventure"/></li>
                            <li><NavLinkDropdown variant="menu" text="Adventure RPG"/></li>
                            <li><NavLinkDropdown variant="menu" text="Casual"/></li>
                            <li><NavLinkDropdown variant="menu" text="Hidden Object"/></li>
                            <li><NavLinkDropdown variant="menu" text="Metroidvania"/></li>
                            <li><NavLinkDropdown variant="menu" text="Puzzle"/></li>
                            <li><NavLinkDropdown variant="menu" text="Story-Rich"/></li>
                            <li><NavLinkDropdown variant="menu" text="Visual Novel"/></li>
                        </ul>
                        <ul className="space-y-[0.32rem] > li">
                            <li><NavLinkDropdown variant="menu" text="Role-Playing"/></li>
                            <li><NavLinkDropdown variant="menu" text="Action RPG"/></li>
                            <li><NavLinkDropdown variant="menu" text="Adventure RPG"/></li>
                            <li><NavLinkDropdown variant="menu" text="JRPG"/></li>
                            <li><NavLinkDropdown variant="menu" text="Party-Based"/></li>
                            <li><NavLinkDropdown variant="menu" text="Rogue-Like"/></li>
                            <li><NavLinkDropdown variant="menu" text="Strategy-RPG"/></li>
                            <li className="mb-3"><NavLinkDropdown variant="menu" text="Turn-based"/></li>
                            <li><NavLinkDropdown variant="menu" text="Simulation"/></li>
                            <li><NavLinkDropdown variant="menu" text="Building & Automation"/></li>
                            <li><NavLinkDropdown variant="menu" text="Dating"/></li>
                            <li><NavLinkDropdown variant="menu" text="Farming & Crafting"/></li>
                            <li><NavLinkDropdown variant="menu" text="Hobby & Job"/></li>
                            <li><NavLinkDropdown variant="menu" text="Life & Immersive"/></li>
                            <li><NavLinkDropdown variant="menu" text="Sandbox & Physics"/></li>
                            <li><NavLinkDropdown variant="menu" text="Space & Flight"/></li>
                        </ul>
                        <ul className="space-y-[0.32rem] > li">
                            <li><NavLinkDropdown variant="menu" text="Strategy"/></li>
                            <li><NavLinkDropdown variant="menu" text="Card & Board"/></li>
                            <li><NavLinkDropdown variant="menu" text="City & Settlement"/></li>
                            <li><NavLinkDropdown variant="menu" text="Grand & 4X"/></li>
                            <li><NavLinkDropdown variant="menu" text="Millitary"/></li>
                            <li><NavLinkDropdown variant="menu" text="Real-Time Strategy"/></li>
                            <li><NavLinkDropdown variant="menu" text="Tower Defence"/></li>
                            <li className="mb-3"><NavLinkDropdown variant="menu" text="Turn-Based Strategy"/></li>
                            <li><NavLinkDropdown variant="menu" text="Sports & Racing"/></li>
                            <li><NavLinkDropdown variant="menu" text="All Sports"/></li>
                            <li><NavLinkDropdown variant="menu" text="Fishing & Hunting"/></li>
                            <li><NavLinkDropdown variant="menu" text="Individual Sports"/></li>
                            <li><NavLinkDropdown variant="menu" text="Racing"/></li>
                            <li><NavLinkDropdown variant="menu" text="Racing Sim"/></li>
                            <li><NavLinkDropdown variant="menu" text="Sports Sim"/></li>
                            <li><NavLinkDropdown variant="menu" text="Team Sports"/></li>
                        </ul>
                    </div>
                </div>
                <div
                    className="min-h-max w-[1.4px] self-stretch bg-gradient-menu-dropdown-separator-vertical-gray my-2"></div>
                <ul className="me-5 space-y-[0.22rem] > li">
                    <li className="pb-1"><TextElement text="THEMES" variant="body"
                                                      additionalClasses="text-[#2ebfff] tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Adult Only"/></li>
                    <li><NavLinkDropdown variant="menu" text="Anime"/></li>
                    <li><NavLinkDropdown variant="menu" text="Horror"/></li>
                    <li><NavLinkDropdown variant="menu" text="Mystery & Detective"/></li>
                    <li><NavLinkDropdown variant="menu" text="Open World"/></li>
                    <li><NavLinkDropdown variant="menu" text="Sci-Fi & Cyberpunk"/></li>
                    <li><NavLinkDropdown variant="menu" text="Space"/></li>
                    <li><NavLinkDropdown variant="menu" text="Survival"/></li>
                    <li className="pt-4"><TextElement text="PLAYER SUPPORT" variant="body"
                                                      additionalClasses="text-[#2ebfff] tracking-wider font-extrabold text-xs"/>
                    </li>
                    <li><NavLinkDropdown variant="menu" text="Co-Operative"/></li>
                    <li><NavLinkDropdown variant="menu" text="Lan"/></li>
                    <li><NavLinkDropdown variant="menu" text="Local & Party"/></li>
                    <li><NavLinkDropdown variant="menu" text="MMO"/></li>
                    <li><NavLinkDropdown variant="menu" text="Multiplayer"/></li>
                    <li><NavLinkDropdown variant="menu" text="Online-Competitive"/></li>
                    <li><NavLinkDropdown variant="menu" text="Singleplayer"/></li>
                </ul>
            </div>
        </>
    );
}
