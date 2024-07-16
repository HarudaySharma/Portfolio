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
                basis-56
                flex-shrink
                rounded-xl
                dark:text-white
                text-black
                text-center
                gap-2
                hover:transform
                hover:ease-in-out
                hover:delay-200
                hover:cursor-pointer
            "
        >
            <img
                src={imageSrc}
                alt={heading}
                className="
                    dark:bg-white
                    dark:text-black
                    w-full
                    h-full
                    rounded-3xl
                    text-center
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
