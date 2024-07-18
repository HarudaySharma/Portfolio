import clsx from 'clsx';
import React from 'react'

interface InputProps {
    id: string;
    placeholder: string;
    type: React.HTMLInputTypeAttribute | undefined,
    required?: boolean;
    name?: string;
    disabled?: boolean;

}

const Input: React.FC<InputProps> = ({
    placeholder,
    id,
    type,
    required,
    name,
    disabled,

}) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={id}
            required={required}
            disabled={disabled}
            className={clsx(`
                    form-input
                    block
                    w-full
                    border-0
                    p-4
                    pr-2
                    rounded-2xl
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-gray-600
                    text-sm
                    sm:text-lg
                    sm:leading-6
                    bg-transparent
                    text-black
                    dark:text-white
                `,

                disabled && "opacity-50 cursor-default"
            )}
        />

    )
}

export default Input;


