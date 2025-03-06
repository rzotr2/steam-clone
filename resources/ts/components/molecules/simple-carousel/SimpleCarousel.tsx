import { ReactNode } from "react";
import {
    Carousel,
    CarouselContent,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

type SimpleCarouselProps = {
    children?: ReactNode,
}

export default function SimpleCarousel({children}: SimpleCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnMouseEnter: true }),
    );

    return (
        <Carousel plugins={[plugin.current, Fade()]}>
            <CarouselContent>
                {children}
            </CarouselContent>
        </Carousel>
    )
}
