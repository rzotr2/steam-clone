import * as React from "react";
import { Game } from "../../../models";
import TextElement from "../typography/text/text-element";
import StrikethroughText from "../typography/text/StrikethroughText";

type CarouselDealProps = Pick<Game,
    "price" |
    "discount" |
    "newPrice"
>

export default function CarouselDeal({
    price,
    discount,
    newPrice
}: CarouselDealProps) {
    return (
        <>
            <div className="flex pe-1 leading-none items-center">
                <div className="bg-[#4c6b22] py-1.5 px-1">
                    <TextElement text={discount}
                                 variant="badge-deal"
                                 additionalClasses="text-[#BEEE11]" />
                </div>
                <div className="bg-[#344454] p-[0.4rem] text-[#687B87] flex-col flex text-center">
                    <StrikethroughText text={price} />
                    <TextElement text={newPrice} variant="body" additionalClasses="text-[#BEEE11]" />
                </div>
            </div>
        </>
    )
}
