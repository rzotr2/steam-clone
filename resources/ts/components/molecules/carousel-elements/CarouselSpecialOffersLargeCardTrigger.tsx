import * as React from "react";
import TextElement from "../../atoms/typography/text/text-element";
import CarouselDeal from "../../atoms/badges/CarouselDeal";
import {Game} from "../../../models";

type CarouselCardTriggerProps = Pick<Game,
    "name" |
    "link" |
    "mainImage" |
    "price" |
    "discount" |
    "newPrice"
>

export default function CarouselSpecialOffersLargeCardTrigger({
     link,
     mainImage,
     name,
     discount,
     price,
     newPrice
}: CarouselCardTriggerProps) {
    return (
        <a href={link} className="block h-full group">
            <div
                className="bg-cover h-full relative
                bg-[url(https://store.fastly.steamstatic.com/public/images/v6/home/background_spotlight.jpg)]">
                <div className="overflow-hidden flex justify-center">
                    <img src={mainImage}
                         alt={`${name} main image`}
                         className="min-w-[30rem]"
                    />
                </div>
                <div className="absolute top-4 -right-1 scale-x-[-1] hidden group-hover:block animate-[show_0.5s_ease-in-out]">
                    <img src="https://i.ibb.co/pv6Msjs9/image-removebg-preview-5.png"
                         alt="arrow"
                         className="h-6"
                    />
                </div>
                <div className="pt-3 px-5 flex flex-col">
                    <TextElement text="FREE WEEKEND"
                                 variant="title"
                                 additionalClasses="text-text-primary"/>
                    <TextElement text="Play for free until 3 Mar @ 7:00pm."
                                 variant="subtitle-sm"
                                 additionalClasses="text-text-primary opacity-75"/>
                    <CarouselDeal price={price} newPrice={newPrice} discount={discount}/>
                </div>
            </div>
        </a>
    )
}
