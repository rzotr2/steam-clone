import * as React from "react";
import { Game } from "../../../models";
import CarouselCard from "./carousel-cards/CarouselCard";

export default function CarouselSpecialOffersContent({game}: {game: Game}) {
    return (
        <>
            <div className="box-border">
                <div className="grid grid-rows-2 grid-cols-3 gap-3 box-border h-[400px] py-1">
                    <div className="row-span-2">
                        <CarouselCard variant="large"
                                      game={game}
                        />
                    </div>
                    <div className="row-span-2">
                        <CarouselCard variant="large"
                                      game={game}
                        />
                    </div>
                    <div className="row-span-2 flex flex-col justify-between">
                        <div className="row-span-1 bg-cover h-[48%]">
                            <CarouselCard variant="small"
                                          game={game}
                            />
                        </div>
                        <div className="row-span-1 bg-cover h-[48%]">
                            <CarouselCard variant="small"
                                          game={game}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
