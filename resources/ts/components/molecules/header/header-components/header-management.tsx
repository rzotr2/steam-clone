import * as React from "react";
import Button from "../../../atoms/buttons/button";
import HeaderManagementDropdown from "./header-nav-content/header-management-dropdown/header-management-dropdown";
import ProfileAvatar from "../../../atoms/avatars/profile-avatar";

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
                <div className="bg-[#363a43] leading-none hover:bg-[#3D4450] px-3">
                    <a href="#" className="">
                        <img src="https://i.ibb.co/RpqNPkBw/image.png"
                             alt="notification-button-svg"
                             className="p-1 size-5"
                        />
                    </a>
                </div>
                <div>
                    <HeaderManagementDropdown text={userObject.nickname} balance={userObject.balance} />
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
