import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub } from "react-icons/fa";

type SOCIALS = {
    name: 'github' | 'facebook' | 'instagram' | 'linkedin';
    logo: IconType
}

const Socials = () => {
    const socials: SOCIALS[] = [
        {
            name: 'github',
            logo: FaGithub,
        },
        {
            name: 'linkedin',
            logo: FaLinkedin,
        }
    ]

    return (
        <ul
            id="socials"
            className="
                flex
                gap-4
                w-full
                text-sm
                justify-center
            "
        >
            {socials.map(({ name, logo: Logo }) => (
                <li
                    key={name}
                >
                    <Logo
                        size={32}
                        className="
                        dark:bg-black
                        bg-white
                    "
                    />
                </li>
            ))}
        </ul>
    )
}

export default Socials
