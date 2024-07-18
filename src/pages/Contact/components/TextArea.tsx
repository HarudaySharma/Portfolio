import clsx from 'clsx';
import React from 'react'

interface TextAreaProps {
    id: string;
    placeholder: string;
    name: string;
    required?: boolean;
    disabled?: boolean;

}

const TextArea: React.FC<TextAreaProps> = ({
    placeholder,
    id,
    required,
    name,
    disabled,

}) => {
    return (
        <textarea
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
                    h-48
                    resize-none
                    border-0
                    p-4
                    pr-2
                    rounded-2xl
                    text-gray-900
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

export default TextArea
