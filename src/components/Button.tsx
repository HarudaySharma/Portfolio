import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

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
                bg-blue-500
                text-white
                dark:bg-white
                dark:text-black
            `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? 'text-gray-900' : 'text-white',
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && `
                    bg-gray-500
                    hover:bg-white
                    focus-visible:outline-white
                    dark:hover:bg-gray-600
                    dark:focus-visible:outline-gray-600 
                `,)}
        >
            {children}
        </button>
    )
}

export default Button

