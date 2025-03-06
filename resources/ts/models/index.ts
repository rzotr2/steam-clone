export type VariantProps = {
    variant?: "primary" | "secondary" | "outline" | null;
    text?: string | null,
    additionalClasses?: string,
}

export type AvatarProps = {
    variant?: "primary-sm" | "primary-xl" | "outline-sm" | "outline-xl" | null;
    additionalClasses?: string,
    url?: string | null
}

export type ButtonProps = {
    variant?: "primary" | "secondary-green" | "secondary-blue" | "outline" | null;
    text?: string | null,
    additionalClasses?: string
}

export type StaticDataProps = {
    text: string,
    balance?: string
}

export type Game = {
    name: string,
    price: string,
    mainImage: string,
    images: string[],
    tags?: string[],
    description?: string
    link: string,
    platforms: string[],
    discount?: string,
    regularPrice?: string,
    newPrice?: string,
    releaseDate: number,
    reviews: {
        grade: "Mixed" | "Mostly Positive" | "Very Positive" | "Excellent" | "Overwhelmingly Positive",
        reviewsSummary: string
    }
}

export type GameCategory = {
    name: string,
    url: string
}

export type CarouselPlatformProps = {
    platforms: string[];
}

export type CarouselImageProps = {
    url: string,
    name: string
}
