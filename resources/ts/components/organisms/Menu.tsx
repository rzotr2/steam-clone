import * as React from "react";
import { NavigationMenu } from "radix-ui";
import YourStoreItemContent from "../molecules/menu/menu-items-content/YourStoreItemContent";
import NewItemContent from "../molecules/menu/menu-items-content/NewItemContent";
import CategoriesItemContent from "../molecules/menu/menu-items-content/CategoriesItemContent";
import Link from "../atoms/typography/link/Link";
import ProfileAvatar from "../atoms/avatars/ProfileAvatar";
import MenuInputSearch from "../molecules/menu/menu-input-search/MenuInputSearch";

export default function Menu() {
    return (
        <>
            <div>
                <NavigationMenu.Root
                    className="bg-gradient-menu-blue items-center justify-between
                 text-text-primary brightness-125 flex w-[972px]">
                    <NavigationMenu.List className="flex center list-none">
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover z-50">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 pe-4 py-1 text-text-gray hover:text-text-primary">
                                <ProfileAvatar variant="primary-sm" additionalClasses="p-1 mx-2" />
                                Your Store
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max z-50">
                                <YourStoreItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover z-50">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 text-text-gray hover:text-text-primary">
                                New & Noteworthy
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max z-50">
                                <NewItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 text-text-gray hover:text-text-primary">
                                Categories
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                                <CategoriesItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 text-text-gray hover:text-text-primary">
                                <Link text="Points Shop" />
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 text-text-gray hover:text-text-primary">
                                <Link text="News" />
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle-lg flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 text-text-gray hover:text-text-primary">
                                <Link text="Labs" />
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                    <MenuInputSearch />
                </NavigationMenu.Root>
            </div>
        </>
    );
}
