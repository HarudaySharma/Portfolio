import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub } from "react-icons/fa";

type SOCIALS = {
    name: 'github' | 'facebook' | 'instagram' | 'linkedin';
    logo: IconType
    redirectUrl: string;
}

const Socials = () => {
    const socials: SOCIALS[] = [
        {
            name: 'github',
            logo: FaGithub,
            redirectUrl: import.meta.env.VITE_GITHUB_URL,

        },
        {
            name: 'linkedin',
            logo: FaLinkedin,
            redirectUrl: import.meta.env.VITE_LINKEDIN_URL,
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
            {socials.map(({ name, logo: Logo, redirectUrl }) => (
                <li
                    key={name}
                    className='
                        w-fit
                    '
                >
                    <a
                        href={redirectUrl}
                        target='_blank'
                    >
                        <Logo
                            size={32}
                            className="
                                dark:bg-black
                                bg-white
                                transition
                                transform
                                duration-200
                                ease-in-out
                                hover:scale-105
                                active:translate-y-[2px]
                            "
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
