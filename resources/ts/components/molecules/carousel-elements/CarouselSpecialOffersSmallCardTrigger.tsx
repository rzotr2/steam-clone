import * as React from "react";
import { Game } from "../../../models";
import TextElement from "../../atoms/typography/text/text-element";
import CarouselDeal from "../../atoms/badges/CarouselDeal";

type CarouselCardTriggerProps = Pick<Game,
    "name" |
    "link" |
    "mainImage" |
    "price" |
    "discount" |
    "newPrice"
>

export default function CarouselSpecialOffersSmallCardTrigger({
     link,
     mainImage,
     name,
     discount,
     price,
     newPrice
}: CarouselCardTriggerProps) {
    return (
        <a href={link} className="group">
            <div className="h-full bg-[#B2DDF5] relative">
                <img src={mainImage}
                     alt={`${name} main image`}
                     className="h-[75%] w-full"
                />
                <div className="absolute top-4 -left-1 hidden group-hover:block animate-[show_0.5s_ease-in-out]">
                    <img src="https://i.ibb.co/pv6Msjs9/image-removebg-preview-5.png"
                         alt="arrow"
                         className="h-6"
                    />
                </div>
                <div className="h-[25%] flex justify-between">
                    <TextElement text="Today`s deal!" variant="body"
                                 additionalClasses="p-1"></TextElement>
                    <CarouselDeal price={price} newPrice={newPrice} discount={discount} />
                </div>
            </div>
        </a>
    )
}
