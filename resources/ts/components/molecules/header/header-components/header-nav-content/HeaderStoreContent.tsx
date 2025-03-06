import * as React from "react";
import NavLinkDropdown from "../../../../atoms/typography/link/NavLinkDropdown";

export default function HeaderStoreContent() {
    return (
        <>
            <div>
                <ul>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Home"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Discovery Queue"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Wishlist"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Points Shop"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="News"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="Stats"/></li>
                    <li className="hover:bg-[#DCDEDF] hover:text-[#171A21]"><NavLinkDropdown variant="header" text="About"/></li>
                </ul>
            </div>
        </>
    );
}
