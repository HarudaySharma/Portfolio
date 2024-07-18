import Card from './Card';

import disccussionAppImg from "../../../assets/discussion-app.png"
import quizzyImg from "../../../assets/quizzy.png"
import chattyImg from "../../../assets/chatty.png"
import authAppImg from "../../../assets/auth-app.png"
import wasteClassifierImg from "../../../assets/waste-classifier.png"

type PROJECT = {
    name: string;
    desc: string;
    imageSrc: string;
    websiteUrl: string;
}

const ProjectList = () => {

    const projects: PROJECT[] = [
        {
            name: 'Auth-App',
            desc: 'basic authentication.',
            imageSrc: authAppImg,
            websiteUrl: 'https://github.com/HarudaySharma/project-auth'
        },
        {
            name: 'Discussion-App',
            desc: 'ask questions, get answers.',
            imageSrc: disccussionAppImg,
            websiteUrl: 'https://github.com/HarudaySharma/Discussion-App',
        },
        {
            name: 'Quizzy',
            desc: 'take tests & quizzes of various categories.',
            imageSrc: quizzyImg,
            websiteUrl: 'https://github.com/HarudaySharma/Quizzy',
        },
        {
            name: 'Waste-Classifier',
            desc: 'tells you the type of waste the photo you gave contains.',
            imageSrc: wasteClassifierImg,
            websiteUrl: 'https://github.com/HarudaySharma/Waste-Classifier',
        },
        {
            name: 'Chatty',
            desc: 'Real time chatting web app.',
            imageSrc: chattyImg,
            websiteUrl: 'https://github.com/HarudaySharma/Chatty',
        },
    ]

    return (
        <div
            className='
                flex
                flex-wrap
                gap-16
                justify-evenly
                items-baseline
            '
        >
            {projects.map((project) => (
                <Card
                    key={project.name}
                    heading={project.name}
                    desc={project.desc}
                    hyperlink={project.websiteUrl}
                    imageSrc={project.imageSrc}
                />
            ))}
        </div>
    )
}

export default ProjectList
