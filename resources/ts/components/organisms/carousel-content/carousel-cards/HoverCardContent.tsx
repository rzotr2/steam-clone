import * as React from "react";
import { Game } from "../../../../models";
import TextElement from "../../../atoms/typography/text/text-element";
import getCustomDate from "../../../../utilities/date";
import SimpleCarousel from "../../../molecules/simple-carousel/SimpleCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import GameTag from "../../../atoms/badges/GameTag";

type GameFieldProps = Pick<Game,
    "name" |
    "releaseDate" |
    "images" |
    "tags" |
    "reviews"
>

type HoverCardContentProps = {variant: string} & GameFieldProps;

export default function HoverCardContent({
    variant,
    name,
    releaseDate,
    images,
    tags,
    reviews
}: HoverCardContentProps) {
    const releaseDateString: string = "Released: " + getCustomDate(releaseDate)
    const className = variant === "main" ? "hidden custom-xl:block" : "";

    return (
        <div className={`w-[300px] h-[300px] bg-[#DCE3E9] p-3 ${className}`}>
            <div className="flex flex-col leading-none space-y-1 mb-1">
                <TextElement text={name} variant="subtitle-lg" />
                <TextElement text={releaseDateString} variant="subtitle-sm" />
            </div>
            <SimpleCarousel>
                {images.map((image) => (
                    <CarouselItem key={image}>
                        <img src={image} alt="Additional game image" />
                    </CarouselItem>
                ))}
            </SimpleCarousel>
            <div className="bg-[#6A7885] text-size-subtitle-sm leading-none p-1 my-1.5">
                <div className="flex flex-col text-gray-400">
                    <TextElement text="Overall user reviews: " />
                    <div className="p-0 m-0">
                        <span className="text-[#4B8EE9] brightness-150">
                            {reviews.grade}
                        </span>
                        <TextElement text={` (${reviews.reviewsSummary} reviews)`} />
                    </div>
                </div>
            </div>
            <div className="leading-none">
                <TextElement text="User tags:" variant="subtitle-sm" additionalClasses="text-[0.75rem] text-bg-primary" />
                <div className="space-x-0.5 mt-0.5">
                    {tags?.map((tag, index) => (
                        <GameTag text={tag} variant="secondary-lg" key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
