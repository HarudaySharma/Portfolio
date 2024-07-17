import skills, { SKILL } from '../utils/skills'
import SkillRow from './SkillRow';

const SkillList = () => {

    const skillSubsets: SKILL[][] = [];
    const chunkSize = 5;

    for (let idx = 0; idx < skills.length; idx += chunkSize) {
        skillSubsets.push(skills.slice(idx, idx + chunkSize));
    }

    return (
        <div
            title='skills'
            className='
                flex 
                font-text
                font-light
                flex-col
                flex-wrap
                gap-8
                dark:text-white
                text-black
            '
        >
            {skillSubsets.map((skills, idx) => (
                <>
                    <SkillRow skills={skills} />
                    {idx != skillSubsets.length - 1 &&
                        <hr
                            className='
                                w-2/5
                                text-center
                                self-center
                                dark:bg-white
                                bg-black
                            '
                        />}
                </>
            ))}
        </div>
    )
}

export default SkillList
