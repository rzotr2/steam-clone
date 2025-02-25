import * as React from "react";
import NavLinkDropdown from "../../../../atoms/typography/link/nav-link-dropdown";

export default function HeaderProfileContent() {
    return (
        <>
            <div>
                <ul>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Activity"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Profile"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Friends"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Games"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Groups"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Content"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Badges"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Inventory"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Steam Replay"/></li>
                </ul>
            </div>
        </>
    );
}
