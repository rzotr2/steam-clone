import * as React from "react";
import Header from "../components/organisms/header";
import BannerMenu from "../components/organisms/banner-menu";
import CarouselSlider from "../components/organisms/carousel-slider";
import TextElement from "../components/atoms/typography/text/text-element";

export default function Store() {
    return (
        <>

            <Header />
            <div className="bg-[linear-gradient(to_bottom,_rgba(10,_25,_50,_1)_0%,_rgba(10,_25,_50,_0)_100%)]">
                <BannerMenu />
                <div className="w-[972px] ms-auto me-auto h-auto py-10">
                    <TextElement text="FEATURED & RECOMMENDED"/>
                    <CarouselSlider/>
                </div>
            </div>
        </>
    );
}
