import React from 'react'
import ContactForm from './components/ContactForm'

const Contact = () => {
    return (
        <section
            id="Contact"
            className="
                font-text
                flex
                flex-col
                md:max-w-[90dvw]
                mx-auto
                items-center
                gap-16
                lg:gap-24
            "
        >
            <h1
                className="
                    font-heading
                    font-extrabold
                    text-4xl
                    md:text-5xl
                    uppercase
                "
            >
                Contact
            </h1>
            <ContactForm />
        </section>
    )
}

export default Contact
