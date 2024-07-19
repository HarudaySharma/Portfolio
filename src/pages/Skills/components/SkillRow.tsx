import { GiCheckMark } from "react-icons/gi";
import { SKILL } from "../utils/skills";

interface SkillRowProps {
    skills: SKILL[];
}

const SkillRow: React.FC<SkillRowProps> = ({ skills }) => {
    return (
        <div
            className='
                flex 
                flex-wrap
                justify-center
                gap-8
                font-text
                font-light
                tracking-widest
                text-xl
            '
        >
            {skills.map(skill => (
                <span
                    key={skill.name}
                    className='
                        flex
                        relative
                        gap-2
                    '
                >
                    <GiCheckMark
                        size={20}
                        className="
                            relative
                            top-1
                        "
                    />
                    {skill.name}
                </span>
            ))}
        </div>
    )
}

export default SkillRow;
