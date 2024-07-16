import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "./Projects"
import Skills from "./Skills"

const Root = () => {
    return (
        <div
            className="
                dark:text-white
                dark:bg-black
            "
        >
            <Hero />
            <Projects />
            <Skills />
            <Footer />
        </div>
    )
}

export default Root
