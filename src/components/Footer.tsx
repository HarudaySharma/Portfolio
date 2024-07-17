
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="Hero"
            role='contentinfo'
            className="
                text-center
                text-gray-400
                tracking-wide
                font-light
                font-text
                flex
                flex-col
                flex-wrap
                md:max-w-[90dvw]
                mx-auto
                justify-center
                mb-24
            "
        >
            <p className="w-auto" >
                &copy; {currentYear} Haruday.
            </p>
            <p className="w-auto" >
                All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
