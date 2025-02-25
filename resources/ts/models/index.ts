export type VariantProps = {
    variant?: "primary" | "secondary" | "outline" | null;
    text?: string | null,
    additionalClasses?: string,
}

export type TextProps = {
    variant?: "title" | "subtitle" | "body" | "heading"
        | "main-heading" | "sub-heading" | "carousel-description"
        | "carousel-badge" | null;
    additionalClasses?: string,
    text?: string | null
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
    platforms: string[]
}

export type CarouselDataProps = {
    platforms: string[];
}

export type CarouselImageProps = {
    url: string,
    name: string
}
