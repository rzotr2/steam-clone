import TextElement from "../typography/text/text-element";
import * as React from "react";

type GameTagProps = {
    text: string,
    variant: "primary-sm" | "secondary-lg"
}

export default function GameTag({text, variant}: GameTagProps) {
    switch (variant) {
        case "primary-sm": {
            return (
                <TextElement text={text} variant="carousel-badge"
                             additionalClasses="bg-bg-secondary text-text-primary p-0.5"/>
            )
        } case "secondary-lg": {
            return (
                <TextElement text={text} variant="carousel-badge"
                             additionalClasses="bg-text-outline text-text-primary py-1 px-1" />
            )
        }
    }
}
