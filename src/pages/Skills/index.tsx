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
                text-center
                md:content-normal
                md:items-center
                lg:justify-center
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
                Skills
            </h1>
            <SkillList />
        </section>
    )
}

export default Skills
