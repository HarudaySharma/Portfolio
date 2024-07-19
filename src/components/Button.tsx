import clsx from 'clsx';
import React, {  ReactNode } from 'react'

interface ButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    children?: ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    children,
    onClick,
    fullWidth,
    secondary,
    danger,
    disabled,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(`
                flex 
                justify-center
                rounded-2xl
                px-4
                py-3
                text-sm
                sm:text-xl
                font-extrabold
                tracking-wider
                w-fit
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                text-white
                dark:bg-white
                dark:text-black
                transition
                transform
                shadow-md
                duration-200
                ease-in-out
                hover:scale-105
                active:translate-y-[2px]
                active:shadow-sm
            `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? 'text-red-900' : 'text-black',
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && `
                    bg-blue-500
                    hover:bg-blue-400
                    dark:hover:bg-gray-300
                `,)}
        >
            {children}
        </button>
    )
}

export default Button

