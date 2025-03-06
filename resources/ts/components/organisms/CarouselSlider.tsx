import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from 'embla-carousel-fade'
import {
    Carousel,
    CarouselContent,
    type CarouselApi
} from "@/components/ui/carousel";
import {
    ReactNode,
    useCallback,
    useEffect
} from "react";
import { Game, GameCategory } from "../../models";

export type CarouselSliderProps = {
    iterable: Game[] | GameCategory[],
    variant: "main" | "offers" | "categories";
    children?: ReactNode
}

export default function CarouselSlider({children, iterable, variant}: CarouselSliderProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnMouseEnter: true }),
    );
    const categoriesArray = Array.from(Array(iterable.length / 4), (_, i) => i+1);
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        api?.scrollTo(index);
    }

    const scrollPrev = useCallback(() => {
        if (api) api.scrollPrev()
    }, [api]);
    const scrollNext = useCallback(() => {
        if (api) api.scrollNext()
    }, [api]);

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrentIndex(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap())
        });
    }, [api]);

    return (
        <>
            <div className="relative z-0">
                <Carousel
                    setApi={setApi}
                    className={variant === "main" ?
                        "bg-[url(https://store.fastly.steamstatic.com/public/images/v6/home/background_maincap_2.jpg)] " +
                        "bg-repeat-round" : ""}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={variant === "main" ? [plugin.current, Fade()] : [Fade()]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={() => plugin.current.play()}
                >
                    <CarouselContent className="p-0">
                        {children}
                    </CarouselContent>
                    <button onClick={scrollPrev}
                            className="bg-[linear-gradient(to_left,_rgba(_0,_0,_0,_0)_5%,rgba(0,_0,_0,_0.3)_95%)]
                            hover:bg-[linear-gradient(to_left,_rgba(171,_218,_244,_0)_5%,rgba(171,_218,_244,_0.3)_95%)]
                            text-text-primary py-[2rem] px-[0.7rem] absolute -left-12 top-1/2 -translate-y-1/2">
                        <img src="https://i.ibb.co/7d9mV3KR/image-removebg-preview.png"
                             alt="Previous icon"
                             className="h-[2.7rem] w-auto"
                        />
                    </button>
                    <button onClick={scrollNext}
                            className="bg-[linear-gradient(to_right,_rgba(_0,_0,_0,_0)_5%,rgba(0,_0,_0,_0.3)_95%)]
                            hover:bg-[linear-gradient(to_right,_rgba(171,_218,_244,_0)_5%,rgba(171,_218,_244,_0.3)_95%)]
                            text-text-primary py-[2rem] px-[0.7rem] absolute -right-12 top-1/2 -translate-y-1/2">
                        <img src="https://i.ibb.co/sJHmvt3s/image-removebg-preview-1.png"
                             alt="Next icon"
                             className="h-[2.7rem] w-auto"
                        />
                    </button>
                    <div className="flex justify-center mt-3 space-x-1 absolute right-0 left-0">
                        {variant === "categories" ? (
                            categoriesArray.map((_, index) => (
                                <button key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`h-2 w-4 rounded-[2px] transition-all ${
                                            currentIndex === index ? " bg-[#c6d4df] hover:bg-[#64788B]" : "bg-[#64788B] hover:bg-gray-400"}`}
                                />
                            ))
                        ) : (
                            iterable.map((_, index) => (
                                <button key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`h-2 w-4 rounded-[2px] transition-all ${
                                            currentIndex === index ? " bg-[#c6d4df] hover:bg-[#64788B]" : "bg-[#64788B] hover:bg-gray-400"}`}
                                />
                            ))
                        )}
                    </div>
                </Carousel>
            </div>
        </>
    );
}
