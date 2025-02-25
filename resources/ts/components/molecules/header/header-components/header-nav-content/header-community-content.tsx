import * as React from "react";
import NavLinkDropdown from "../../../../atoms/typography/link/nav-link-dropdown";

export default function HeaderCommunityContent() {
    return (
        <>
            <div>
                <ul>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Home"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Disscusions"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Workshop"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Market"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Broadcasts"/></li>
                </ul>
            </div>
        </>
    );
}
