import {GameCategory} from "../../../../models";

export default function CarouselCategoriesCard({name, url}: GameCategory) {
    return (
        <>
            <a href="#" className="block w-full group">
                <div className="relative max-w-[300px] rounded-3xl overflow-hidden">
                    <img src={url} alt="Game category name"
                         className="rounded-xl group-hover:scale-110 transition ease-in-out duration-200"/>
                    <div
                        className="absolute inset-0 transition-opacity duration-300 ease-in-out hover:opacity-60
                        bg-[radial-gradient(115%_120%_at_0%_0%,_transparent,_#2880a6)]">
                    </div>
                    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2
                    text-nowrap bg-white px-3 py-1 rounded-sm group-hover:translate-y-10
                    transition duration-300 ease-in-out">
                        <span className="text-size-header font-bold tracking-wider text-[#2881A7]">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </>
    )
}
