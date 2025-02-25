import * as React from "react";
import Banner from "../atoms/video/banner";
import Menu from "./menu";

export default function BannerMenu() {
    return (
        <>
            <div className="relative">
                <a href="#">
                    <Banner />
                </a>
                <div className="absolute left-0 right-0 me-auto ms-auto top-[24px] w-[980px]">
                    <Menu />
                </div>
            </div>
        </>
    );
}
