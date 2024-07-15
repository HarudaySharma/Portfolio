import Pfp from "../../assets/izumi pfp.jpg";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Socials from "./components/Socials";

const Hero = () => {
    const name = import.meta.env.VITE_NAME;

    return (
        <section
            id="Hero"
            className="
                h-[100vh]
                max-h-[100vh]
                font-text
                flex
                flex-wrap-reverse
                items-center
                md:max-w-[90vw]
                justify-evenly
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
                    {name}
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
                    FULL STACK DEVELOPER
                </h3>
                <Socials />
                <p
                    className="
                        md:text-xl
                        font-light
                    "
                >
                    With a passion for developing modern web apps for commercial businesses.
                </p>
                <button
                    type="button"
                    className="
                        dark:bg-white
                        dark:text-black
                        bg-black
                        text-white
                        font-bold
                        md:text-xl
                        rounded-xl
                        w-fit
                        px-4
                        py-2

                    "
                >
                    Resume
                </button>
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
