import * as React from "react";
import { CarouselImageProps } from "../../../models";

export default function CarouselExtraImage({url, name}: CarouselImageProps) {
    return (
        <>
            <img className="[mask-image:radial-gradient(circle,#000_60%,transparent_99%)]
                                          brightness-50 hover:brightness-75 carousel-img max-h-max"
                 src={url} alt={`${name} image`}/>
        </>
    );
}
