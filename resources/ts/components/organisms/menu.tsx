import * as React from "react";
import { NavigationMenu } from "radix-ui";
import YourStoreItemContent from "../molecules/menu/menu-items-content/your-store-item-content";
import NewItemContent from "../molecules/menu/menu-items-content/new-item-content";
import CategoriesItemContent from "../molecules/menu/menu-items-content/categories-item-content";
import Link from "../atoms/typography/link/link";
import ProfileAvatar from "../atoms/avatars/profile-avatar";
import MenuInputSearch from "../molecules/menu/menu-input-search/menu-input-search";

export default function Menu() {
    return (
        <>
            <div>
                <NavigationMenu.Root
                    className="bg-gradient-menu-blue items-center justify-between
                 text-text-primary brightness-125 flex w-[972px] opacity-85">
                    <NavigationMenu.List className="flex center list-none">
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle group flex select-none items-center justify-between
                            gap-0.5 pe-4 py-1 opacity-100">
                                <ProfileAvatar variant="primary-sm" additionalClasses="p-1 mx-2" />
                                Your Store
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                                <YourStoreItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle group flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 opacity-70 hover:opacity-100">
                                Your Store
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                                <NewItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 opacity-70 hover:opacity-100">
                                Categories
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="absolute left-0 top-full bg-gradient-menu-dropdown-gray w-auto min-w-max">
                                <CategoriesItemContent />
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle group flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 opacity-70 hover:opacity-100">
                                <Link text="Points Shop" />
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle group flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 opacity-70 hover:opacity-100">
                                <Link text="News" />
                            </NavigationMenu.Trigger>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item className="relative hover:bg-gradient-menu-blue-hover">
                            <NavigationMenu.Trigger
                                className="font-semibold text-size-subtitle group flex select-none items-center justify-between
                            gap-0.5 px-4 py-1 opacity-70 hover:opacity-100">
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
