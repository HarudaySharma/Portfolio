import ProjectList from './components/ProjectList'

const Projects = () => {
    return (
        <section
            id="Projects"
            className="
                h-[100vh]
                max-h-[100vh]
                font-text
                flex
                flex-col
                md:max-w-[90vw]
                mx-auto

                justify-center
                content-center
                gap-4
                md:content-normal
                md:items-center
                lg:justify-center
                lg:gap-32
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
                Projects
            </h1>
            <ProjectList />
        </section>
    )
}

export default Projects
