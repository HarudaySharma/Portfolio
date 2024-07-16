import Pfp from "../../assets/izumi pfp.jpg";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Resume from "./components/Resume";
import Socials from "./components/Socials";

const Hero = () => {
    const name = import.meta.env.VITE_NAME;
    const pText = import.meta.env.VITE_PARA_TEXT;
    const role = import.meta.env.VITE_ROLE;

    return (
        <section
            id="Hero"
            className="
                h-[100vh]
                max-h-[100vh]
                font-text
                flex
                flex-wrap-reverse
                md:max-w-[90vw]

                justify-center
                content-center
                gap-4
                md:content-normal
                md:items-center
                lg:justify-center
                lg:gap-32
            "
        >
            <div
                id="Info"
                className="
                    max-w-80
                    flex
                    flex-col
                    gap-4
                    text-center
                    items-center
                "
            >
                <h1
                    className="
                        font-heading
                        font-extrabold
                        text-4xl
                        md:text-6xl
                        uppercase
                    "
                >
                    {Boolean(name) ? name : "No Name"}
                </h1>
                <h3
                    className="
                        font-text
                        font-bold
                        text-2xl
                        md:text-4xl
                        text-wrap
                    "
                >
                    {Boolean(role) ? role : "No Role"}

                </h3>
                <Socials />
                <p
                    className="
                        md:text-xl
                        font-light
                    "
                >
                    {Boolean(pText) ? pText : "No text"}
                </p>
                <Resume />
            </div>
            <div
                id="colorMode"
                className="
                    relative
                "
            >
                <img
                    src={Pfp}
                    alt="profile pic"
                    className="
                        w-[200px]
                        h-[200px]
                        max-h-[200px]
                        max-w-[200px]
                        md:w-[350px]
                        md:h-[350px]
                        md:max-w-[350px]
                        md:max-h-[350px]
                        lg:w-[400px]
                        lg:h-[400px]
                        lg:max-w-[400px]
                        lg:max-h-[400px]
                        rounded-full
                    "
                />
                <ColorModeSwitch
                    className="
                        absolute
                        hover:cursor-pointer
                        top-0
                        right-0
                    "
                />
            </div>
        </section>
    )
}

export default Hero
