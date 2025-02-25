import {DropdownMenu } from "radix-ui";
import * as React from "react";
import {StaticDataProps} from "../../../../../../models";
import { IoMdArrowDropdown } from "react-icons/io";
import NavLinkDropdown from "../../../../../atoms/typography/link/nav-link-dropdown";

export default function HeaderManagementDropdown({text, balance}: StaticDataProps) {
    return (
        <>
            <div className="text-text-primary ">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild className="brightness-75 hover:brightness-125">
                        <button
                            className="
                            flex items-center appearance-none outline-none"
                            aria-label="Customise options"
                        >
                            {text.toLowerCase()}
                            <IoMdArrowDropdown />
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="View My Profile"/>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                    "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="Account Details:" />
                                <div
                                    className="text-text-blue ms-1">
                                    {text.toLowerCase()}
                                </div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                    "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="Store Preferences"/>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                    "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="View My Wallet"/>
                                <div
                                    className="text-text-blue ms-1">
                                    {balance}
                                </div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                    "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="Change Language"/>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                                className={"flex items-center appearance-none outline-none hover:bg-[#DCDEDF] hover:text-[#171A21] " +
                                    "bg-[#3D4450] w-auto min-w-max text-text-dropdown px-4"}>
                                <NavLinkDropdown
                                    variant="header-management" text="Sign out of account..."/>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <div className="text-text-primary brightness-75 hover:brightness-125">
                <a href="#">{balance}</a>
            </div>
        </>
    );
}
