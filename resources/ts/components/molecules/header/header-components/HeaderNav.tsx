import * as React from "react";
import { NavigationMenu } from "radix-ui";
import {StaticDataProps} from "../../../../models";
import HeaderStoreContent from "./header-nav-content/HeaderStoreContent";
import HeaderCommunityContent from "./header-nav-content/HeaderCommunityContent";
import HeaderProfileContent from "./header-nav-content/HeaderProfileContent";

export default function HeaderNav({text}: StaticDataProps) {
    const classActive = "text-header-active border-header-active hover:text-header-active";

    return (
        <>
            <NavigationMenu.Root className="items-center justify-between
                                text-text-primary flex leading-[1.2rem]">
                <NavigationMenu.List className="flex center list-none">
                    <NavigationMenu.Item className="relative pb-1 z-20">
                        <NavigationMenu.Trigger>
                            <a href="/store"
                                className={"text-size-header font-[550] group flex select-none items-center justify-between " +
                                `gap-0.5 me-6 opacity-90 hover:opacity-100 border-b-2 border-transparent hover:text-text-primary ${classActive}`}>
                               STORE
                            </a>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                            className="absolute left-0 top-full bg-[#3D4450] w-auto min-w-max">
                            <HeaderStoreContent />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="relative pb-1 z-20">
                        <NavigationMenu.Trigger>
                            <a href="#"
                               className={"text-size-header font-[550] group flex select-none items-center justify-between " +
                                   "gap-0.5 me-6 opacity-90 hover:opacity-100 border-b-2 border-transparent hover:text-text-primary"}>
                                COMMUNITY
                            </a>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                            className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                            <HeaderCommunityContent/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="relative pb-1 z-20">
                        <NavigationMenu.Trigger>
                            <a href="#"
                               className={"text-size-header font-[550] group flex select-none items-center justify-between " +
                                   "gap-0.5 me-6 opacity-90 hover:opacity-100 border-b-2 border-transparent hover:text-text-primary"}>
                                {text}
                            </a>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                            className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                            <HeaderProfileContent/>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="relative pb-1">
                        <NavigationMenu.Trigger>
                            <a href="#"
                               className={"text-size-header font-[550] group flex select-none items-center justify-between " +
                                   "gap-0.5 me-6 opacity-90 hover:opacity-100 border-b-2 border-transparent hover:text-text-primary"}>
                                CHAT
                            </a>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item className="relative pb-1">
                        <NavigationMenu.Trigger>
                            <a href="#"
                               className={"text-size-header font-[550] group flex select-none items-center justify-between " +
                                   "gap-0.5 me-6 opacity-90 hover:opacity-100 border-b-2 border-transparent hover:text-text-primary"}>
                                SUPPORT
                            </a>
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </>
    );
}
