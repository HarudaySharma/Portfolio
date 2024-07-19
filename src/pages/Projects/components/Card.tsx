import React from "react";

interface CardProps {
    heading: string;
    desc: string;
    imageSrc: string;
    hyperlink: string
}

const Card: React.FC<CardProps> = ({ heading, desc, imageSrc, hyperlink }) => {
    return (
        <a
            href={hyperlink}
            target="_blank"
            className="
                card
                flex
                flex-col
                max-w-56
                basis-32
                sm:basis-40
                md:basis-56
                flex-shrink
                rounded-xl
                dark:text-white
                text-black
                text-center
                gap-2
                transition
                transform
                ease-in-out
                delay-100
                duration-200
                hover:scale-105
                hover:cursor-pointer
            "
        >
            <img
                src={imageSrc}
                alt={heading}
                className="
                    dark:bg-white
                    dark:text-black
                    bg-transparent
                    w-full
                    h-full
                    rounded-3xl
                    text-center
                    flex-shrink
                "
            />
            <h3
                className="
                    text-xl
                    md:text-2xl
                    font-heading
                    font-bold
                "
            >
                {heading}
            </h3>
            <p
                className="
                    text-lg
                    md:text-xl
                    font-text
                    font-light
                "
            >
                {desc}
            </p>
        </a>
    )
}

export default Card
