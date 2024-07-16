import Card from './Card';

import disccussionAppImg from "../../../assets/discussion-app.png"
import quizzyImg from "../../../assets/quizzy.png"
import chattyImg from "../../../assets/chatty.png"
import authAppImg from "../../../assets/auth-app.jpg"
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
            websiteUrl: 'https://signauth.vercel.app'
        },
        {
            name: 'Discussion-App',
            desc: 'ask questions, get answers.',
            imageSrc: disccussionAppImg,
            websiteUrl: 'https://discussionapp.vercel.app',
        },
        {
            name: 'Quizzy',
            desc: 'take tests & quizzes of various categories.',
            imageSrc: quizzyImg,
            websiteUrl: 'https://quizzyweb.vercel.app',
        },
        {
            name: 'Waste-Classifier',
            desc: 'tells you the type of waste the photo you gave contains.',
            imageSrc: wasteClassifierImg,
            websiteUrl: 'https://waste-classifier-client.vercel.app',
        },
        {
            name: 'Chatty',
            desc: 'Real time chatting web app.',
            imageSrc: chattyImg,
            websiteUrl: 'https://chattyweb.vercel.app',
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
