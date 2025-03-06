import * as React from "react";
import Header from "../components/organisms/Header";
import BannerMenu from "../components/organisms/BannerMenu";
import CarouselSlider from "../components/organisms/CarouselSlider";
import TextElement from "../components/atoms/typography/text/text-element";
import MainCarouselContent from "../components/organisms/carousel-content/MainCarouselContent";
import { Game, GameCategory } from "../models";
import { CarouselItem } from "@/components/ui/carousel";
import CarouselSpecialOffersContent from "../components/organisms/carousel-content/CarouselSpecialOffersContent";
import SmallBanner from "../components/atoms/small-banner/SmallBanner";
import StoreHoverCard from "../components/molecules/hover-card/StoreHoverCard";
import HoverCardContent from "../components/organisms/carousel-content/carousel-cards/HoverCardContent";
import StoreSideMenu from "../components/molecules/side-menu/StoreSideMenu";
import CarouselCategoriesCard from "../components/organisms/carousel-content/carousel-cards/CarouselCategoriesCard";

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
        platforms: ["PC", "MacOS", "Linux"],
        discount: "-75%",
        newPrice: "499₴",
        releaseDate: 1741105054546,
        reviews: {
            grade: "Excellent",
            reviewsSummary: "593,843"
        }
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
        platforms: ["PC", "MacOS", "Linux", "VR"],
        discount: "-35%",
        newPrice: "1950₴",
        releaseDate: 1741105054546,
        reviews: {
            grade: "Excellent",
            reviewsSummary: "593,843"
        }
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
        platforms: ["PC"],
        discount: "-45%",
        newPrice: "1265₴",
        releaseDate: 1741105054546,
        reviews: {
            grade: "Excellent",
            reviewsSummary: "593,843"
        }
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
        platforms: ["PC"],
        discount: "-10%",
        newPrice: "2170₴",
        releaseDate: 1741105054546,
        reviews: {
            grade: "Excellent",
            reviewsSummary: "593,843"
        }
    },
];
const gameCategories: GameCategory[] = [
    {
        name: "CO-OPERATIVE",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/multiplayer_coop?cc=us&l=english"
    },
    {
        name: "CASUAL",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/casual?cc=us&l=english"
    },
    {
        name: "ACTION",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/action?cc=us&l=english"
    },
    {
        name: "ROGUE-LIKE",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english"
    },
    {
        name: "SIMULATION",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/simulation?cc=us&l=english"
    },
    {
        name: "VISUAL NOVEL",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/visual_novel?cc=us&l=english"
    },
    {
        name: "SCI-FI & CYBERPUNK",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/science_fiction?cc=us&l=english"
    },
    {
        name: "STORY-RICH",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/story_rich?cc=us&l=english"
    },
    {
        name: "HORROR",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/horror?cc=us&l=english"
    },
    {
        name: "STRATEGY",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/strategy?cc=us&l=english"
    },
    {
        name: "OPEN WORLD",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/exploration_open_world?cc=us&l=english"
    },
    {
        name: "PUZZLE",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=english"
    },
    {
        name: "FREE TO PLAY",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/freetoplay?cc=us&l=english"
    },
    {
        name: "ALL SPORTS",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/sports?cc=us&l=english"
    },
    {
        name: "VR TITLES",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/vr?cc=us&l=english"
    },
    {
        name: "FIGHTING",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=english"
    },
    {
        name: "SURVIVAL",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/survival?cc=us&l=english"
    },
    {
        name: "RACING",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/racing?cc=us&l=english"
    },
    {
        name: "ANIME",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/anime?cc=us&l=english"
    },
    {
        name: "ROLE-PLAYING",
        url: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/rpg?cc=us&l=english"
    },
];

const getSlicedCategoriesArray = (arr: GameCategory[], quantity: number) => {
    let currentIndex = 0;
    const newArr = [];

    for (let i = 0; i < arr.length; i += quantity) {
        newArr.push(arr.slice(currentIndex, currentIndex + quantity));
        currentIndex += 4
    }

    return newArr;
}

const slicedCategoriesArray: GameCategory[][] = getSlicedCategoriesArray(gameCategories, 4);

export default function Store() {
    return (
        <>
            <div className="w-screen bg-[url(https://store.cloudflare.steamstatic.com/public/images/v6/colored_body_top.png?v=2)]
                    bg-no-repeat bg-center">
                <div className="relative z-11">
                    <Header/>
                </div>
                <div
                    className="bg-[linear-gradient(to_bottom,_rgba(10,_25,_40,_1)_0%,_rgba(10,_25,_50,_0.7)_100%)] relative">
                    <div className="relative z-10">
                        <BannerMenu/>
                    </div>
                    {/*Main Carousel*/}
                    <div className="relative flex justify-center gap-14">
                        <StoreSideMenu />
                        <div>
                            <div className="w-[972px] ms-auto me-auto h-auto py-10">
                                <TextElement text="FEATURED & RECOMMENDED"/>
                                <div>
                                    <CarouselSlider iterable={games} variant="main">
                                        {games.map((game, index) => (
                                            <CarouselItem key={index}>
                                                <StoreHoverCard trigger={
                                                    <MainCarouselContent game={game}/>
                                                } content={
                                                    <HoverCardContent variant={"main"} {...game} />
                                                }/>
                                            </CarouselItem>
                                        ))}
                                    </CarouselSlider>
                                </div>
                                <SmallBanner/>
                                <div className="w-[972px] ms-auto me-auto h-auto mb-10">
                                    <TextElement text="SPECIAL OFFERS"/>
                                    <CarouselSlider iterable={games} variant={"offers"}>
                                        {games.map((game, index) => (
                                            <CarouselItem key={index}>
                                                <CarouselSpecialOffersContent game={game}/>
                                            </CarouselItem>
                                        ))}
                                    </CarouselSlider>
                                </div>
                                <div className="w-[972px] ms-auto me-auto h-auto my-20">
                                    <div className="mb-2">
                                        <TextElement text="BROWSE BY CATEGORY" additionalClasses="tracking-wider" />
                                    </div>
                                    <CarouselSlider iterable={gameCategories} variant={"categories"}>
                                        {slicedCategoriesArray.map((slice, index) => (
                                            <CarouselItem key={index}
                                                          className="flex justify-center gap-3 mb-2">
                                                {slice.map((category) => (
                                                    <CarouselCategoriesCard {...category} />
                                                ))}
                                            </CarouselItem>
                                        ))}
                                    </CarouselSlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
