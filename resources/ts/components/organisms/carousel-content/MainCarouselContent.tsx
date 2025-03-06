import * as React from "react";
import { Game } from "../../../models";
import TextElement from "../../atoms/typography/text/text-element";
import CarouselPlatforms from "../../atoms/icons/Platforms";
import { useEffect, useState } from "react";
import CarouselExtraImage from "../../atoms/carousel/CarouselExtraImage";
import GameTag from "../../atoms/badges/GameTag";

export default function MainCarouselContent({game}: {game: Game}) {
    const [src, setSrc] = useState(game.mainImage);

    useEffect((): void => {
        const carouselImages = document.querySelectorAll<HTMLImageElement>(".carousel-img");
        const getSrc = (e: MouseEvent): void => {
            const imageElement = e.currentTarget as HTMLImageElement;
            setSrc(imageElement.src);
        };

        const resetSrc = (): void => {
            setSrc(game.mainImage);
        };

        carouselImages.forEach((img) => {
            img.addEventListener("mousemove", getSrc);
            img.addEventListener("mouseout", resetSrc);
        })
    });

    return (
        <>
            <a href={game.link} className="flex justify-center relative group">
                <div className="absolute top-4 -left-1 hidden custom-xl:group-hover:block animate-[show_0.5s_ease-in-out]">
                    <img src="https://i.ibb.co/pv6Msjs9/image-removebg-preview-5.png"
                         alt="arrow"
                         className="h-6"
                    />
                </div>
                <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-8 flex justify-center">
                        <img src={src} alt={`${game.name} main image`}
                             className="w-full h-[353px] [mask-image:radial-gradient(circle,#000_60%,transparent_99%)]"/>
                    </div>
                    <div className="h-full col-span-4 pe-2 relative">
                        <div>
                            <div className="ps-2 pt-5 mb-1 h-[4.6rem] max-w-[80%] text-wrap">
                                <TextElement text={game.name} variant={"sub-heading"}
                                             additionalClasses="text-text-primary"/>
                            </div>
                            <div>
                                <div className="flex gap-2.5 pb-3 items-center">
                                    <div>
                                        <CarouselExtraImage url={game.images[0]} name={game.name}/>
                                    </div>
                                    <div>
                                        <CarouselExtraImage url={game.images[1]} name={game.name}/>
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <div>
                                        <CarouselExtraImage url={game.images[2]} name={game.name}/>
                                    </div>
                                    <div>
                                        <CarouselExtraImage url={game.images[3]} name={game.name}/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 ps-2 max-h-[4.6rem] line-clamp-1">
                                <TextElement text={game.description}
                                             variant="carousel-description"
                                             additionalClasses="text-text-primary"/>
                            </div>
                            <div className="space-x-2 ps-2">
                                {game.tags?.map((tag, index) => (
                                    <GameTag text={tag} variant="primary-sm" key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between absolute bottom-0 w-full">
                            <div className="ps-2">
                                <TextElement text={game.price} variant="subtitle-lg"
                                             additionalClasses="text-text-primary"/>
                            </div>
                            <div className="pe-2">
                                <CarouselPlatforms platforms={game.platforms}/>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}
