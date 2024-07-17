import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"

const Root = () => {
    return (
        <div
            className="
                dark:text-white
                text-black
                dark:bg-black
                bg-white
                flex
                flex-col 
                gap-32
            "
        >
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Root
