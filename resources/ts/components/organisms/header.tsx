import * as React from "react";
import SteamLogo from "../atoms/images/steamLogo";
import HeaderNav from "../molecules/header/header-components/header-nav";
import HeaderManagement from "../molecules/header/header-components/header-management";

const userObject = {
    nickname: "RZOTR"
}

export default function Header() {
    return (
        <>
            <div className="bg-bg-header flex justify-center w-[100vw]">
                <div className="w-[972px] flex flex-nowrap items-center justify-between min-h-[104px]">
                    <div>
                        <SteamLogo/>
                    </div>
                    <div>
                        <HeaderNav text={userObject.nickname} />
                    </div>
                    <div className="h-[100%] p-2">
                        <div>
                            <HeaderManagement/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
