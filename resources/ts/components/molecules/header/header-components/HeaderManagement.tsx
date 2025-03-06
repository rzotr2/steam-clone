import * as React from "react";
import Button from "../../../atoms/buttons/Button";
import HeaderManagementDropdown from "./header-nav-content/header-management-dropdown/HeaderManagementDropdown";
import ProfileAvatar from "../../../atoms/avatars/ProfileAvatar";

const userObject = {
    nickname: "RZOTR",
    balance: "0.84$"
}

export default function HeaderManagement() {
    return (
        <>
            <div className="flex items-start gap-2">
                <Button variant="primary" text="Install steam"
                        additionalClasses={"bg-[url(https://store.fastly.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1)] " +
                        "bg-no-repeat bg-[center_left_0.5rem] ps-8"}
                />
                <button className="bg-[#363A43] hover:bg-[#3d4450] leading-none px-3 py-1 group">
                    <img src="https://i.ibb.co/2356P5tW/image-removebg-preview-2.png"
                         alt="notification-button-svg"
                         className="size-3 group-hover:animate-[ring_4s_ease-in-out]"
                    />
                </button>
                <div>
                    <HeaderManagementDropdown text={userObject.nickname} balance={userObject.balance}/>
                </div>
                <div>
                    <a href="#">
                        <ProfileAvatar variant="outline-xl" url="https://i.ibb.co/ds9RR2Xf/2025-02-09-12-18-07.jpg" />
                    </a>
                </div>
            </div>
        </>
    );
}
