import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from 'embla-carousel-fade'
import MainCarouselCard from "./carousel-content/main-carousel-card";
import { Game } from "../../models";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    type CarouselApi, CarouselPrevious
} from "@/components/ui/carousel";
import { useEffect } from "react";

const games: Game[] = [
    {
        name: "Sid Meier`s Civilization VII",
        price: "1 999₴",
        description: "Now Available",
        tags: ["Top Seller", "Strategy", "MMO"],
        mainImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1295660/67d1e25be716706a00d1e0534882a11bb5ba973a/capsule_616x353.jpg?t=1739396598",
        images: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1295660/ss_84b42c86ecf359f5df63f1626b0971d0454ebd3e.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1295660/ss_64cd9528b18dc6deebd96a4f32125b5b49fd27ab.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1295660/ss_8c1226a5c58447773b03b6c967e9d561d3315fd7.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1295660/ss_ad61e86883bed33711a00965170fc4b4ae785774.600x338.jpg"
        ],
        link: "#",
        platforms: ["PC", "MacOS", "Linux"]

    },
    {
        name: "Battlefield 1",
        price: "3 000₴",
        description: "Now Available",
        tags: ["Top Seller", "Strategy", "MMO"],
        mainImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/capsule_616x353.jpg?t=1730828840",
        images: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/ss_a608c2726850f7ee69d0db51282811dc33d9d083.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/ss_a42f55d9b2b1d2084a7dff4540de42b7d4c36f7f.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/ss_b914b0daf3c46d908d403bdec2881cf2b8d34915.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/ss_25fbf466cb86f59e47ad06827788c003f079d403.600x338.jpg"
        ],
        link: "#",
        platforms: ["PC", "MacOS", "Linux", "VR"]

    },
    {
        name: "Tom Clancy`s Rainbow SixⓇ Siege",
        price: "2 300₴",
        description: "Now Available",
        tags: ["Top Seller", "Strategy", "MMO"],
        mainImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/capsule_616x353.jpg?t=1738608668",
        images: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/ss_39e8d35eea7d67d74e84a6de48c351512c64ec86.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/ss_6e399172cedcb7289017371b9516acb1e774330c.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/ss_3eff8247a59ebc718e87753fd17c4d0321f03ebc.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/ss_5f886d728ff95bbcba1cc4ec5201880c8a65d4cc.600x338.jpg"
        ],
        link: "#",
        platforms: ["PC"]
    },
    {
        name: "Kingdom Come: Deliverance II",
        price: "2 300₴",
        description: "Now Available",
        tags: ["Top Seller", "Strategy", "MMO"],
        mainImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/bcad55593058f54e54aee8b6714220e216cf9b0c/capsule_616x353.jpg?t=1739812122",
        images: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/ss_935ddb59f90bc2c21c706132cb9b446fe7851c19.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/ss_bd668f4d12300c019fa3fa73108aa62929fbf862.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/ss_5580d672302cdc5f8b7161dc94f266341e61a182.600x338.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/ss_709f3329562cd2cfe6db70bac908b3e72eaef83b.600x338.jpg"
        ],
        link: "#",
        platforms: ["PC"]
    },
];

export default function CarouselSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnMouseEnter: true }),
    );
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        api?.scrollTo(index);
    }

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
            <div>
                <Carousel
                    setApi={setApi}
                    className="bg-[url(https://store.fastly.steamstatic.com/public/images/v6/home/background_maincap_2.jpg)]
                    bg-cover" opts={{
                    align: "center",
                    loop: true,
                }}
                    plugins={[plugin.current, Fade()]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={() => plugin.current.play()}

                >
                    <CarouselContent className="p-0">
                        {games.map((game, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    <MainCarouselCard name={game.name}
                                                      price={game.price}
                                                      description={game.description}
                                                      tags={game.tags}
                                                      mainImage={game.mainImage}
                                                      images={game.images}
                                                      link={game.link}
                                                      platforms={game.platforms}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="m-0 border-none gap-0 -right-[37px] h-auto w-auto
                        bg-[linear-gradient(to_right,_rgba(15,25,34,1),_#1a2a3a)] brightness-75
                        text-text-primary hover:text-text-primary py-[3rem] px-3 rounded-none
                        hover:brightness-200"
                    />
                    <CarouselPrevious className="m-0 border-none gap-0 -left-[40px] h-auto w-auto
                        bg-[linear-gradient(to_right,_rgba(15,25,34,1),_#1a2a3a)] brightness-75
                        text-text-primary hover:text-text-primary py-[3rem] px-3 rounded-none
                        hover:brightness-200"
                    />
                    <div className="flex justify-center mt-3 space-x-1 absolute right-0 left-0">
                        {games.map((_, index) => (
                            <button key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-2 w-4 rounded-[2px] transition-all ${
                                        currentIndex === index ? " bg-[#c6d4df] hover:bg-[#64788B]" : "bg-[#64788B] hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </>
    );
}
