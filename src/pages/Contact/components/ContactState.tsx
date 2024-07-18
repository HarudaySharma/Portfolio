import clsx from 'clsx';
import React, { ReactNode } from 'react'

interface ContactStateProps {
    show: boolean;
    children?: ReactNode;
    className?: string;
}

const ContactState: React.FC<ContactStateProps> = ({
    show,
    children,
    className
}) => {
    return (
        show &&
        <p
            className={clsx(`
                max-w-fit
                font-text
                text-xl
                md:text-2xl
                tracking-wider
                font-bold
                text-center
            `,
                className
            )}
        >
            {children}
        </p>
    )
}

export default ContactState
