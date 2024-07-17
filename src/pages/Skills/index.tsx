import SkillList from './components/SkillList'

const Skills = () => {
    return (
        <section
            id="Projects"
            className="
                font-text
                flex
                flex-col
                md:max-w-[90dvw]
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
                Skills
            </h1>
            <SkillList />
        </section>
    )
}

export default Skills
