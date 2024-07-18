import Button from '../../Button';
import resumeFile from "../../../assets/Resume.pdf"
import { useRef } from 'react';


// TODO: make the Resume downloadable
const Resume = () => {
    const download = import.meta.env.VITE_RESUME_DOWNLOADABLE;
    const resumeUrl = import.meta.env.VITE_RESUME_LINK;

    const aRef = useRef<HTMLAnchorElement>(null);

    const onClickHandler = () => {
        aRef.current?.click();
    };

    return (
        <>
            <a
                href={download === 'true' ? resumeFile : resumeUrl}
                target='_blank'
                download={download === 'true'}
                ref={aRef}
                hidden
            >
            </a>
            <Button
                type="button"
                onClick={onClickHandler}
            >
                Resume
            </Button>
        </>
    )
}

export default Resume
