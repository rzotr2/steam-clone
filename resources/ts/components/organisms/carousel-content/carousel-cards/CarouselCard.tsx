import * as React from "react";
import { Game } from "../../../../models";
import StoreHoverCard from "../../../molecules/hover-card/StoreHoverCard";
import HoverCardContent from "./HoverCardContent";
import CarouselSpecialOffersSmallCardTrigger
    from "../../../molecules/carousel-elements/CarouselSpecialOffersSmallCardTrigger";
import CarouselSpecialOffersLargeCardTrigger
    from "../../../molecules/carousel-elements/CarouselSpecialOffersLargeCardTrigger";

export default function CarouselCard({game, variant}: {game: Game, variant: "small" | "large"}) {
    return (
        <>
            {variant === "small" ? (
                <StoreHoverCard
                    variant={variant}
                    trigger={
                        <CarouselSpecialOffersSmallCardTrigger {...game} />
                }
                content={
                    <HoverCardContent variant="" {...game} />
                }/>
            ) : (
                <StoreHoverCard
                    variant={variant}
                    trigger={
                        <CarouselSpecialOffersLargeCardTrigger {...game} />
                    }
                    content={
                        <HoverCardContent variant="" {...game} />
                    } />
            )}
        </>
    )
}
