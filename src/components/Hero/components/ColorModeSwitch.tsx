import clsx from 'clsx';
import { useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import setPageTheme from '../../../utils/setPageTheme';

type ColorMode = "light" | "dark";

const ColorModeSwitch = ({ className }: { className?: string }) => {

    const [colorMode, setColorMode] = useState<ColorMode>(localStorage.theme);

    const colorModeClickHandler = () => {
        if (colorMode === 'dark') {
            setPageTheme('light')
            setColorMode('light');
        }
        else if (colorMode === 'light') {
            setPageTheme('dark')
            setColorMode('dark');
        }
        else {
            setPageTheme(localStorage.theme === "dark" ? "light" : "dark");
            setColorMode(localStorage.theme);
        }
    }

    return (
        <div
            onClick={colorModeClickHandler}
            className={clsx(` `, className)}
        >
            {colorMode === 'light'
                ? <MdLightMode
                    size={22}
                    className='
                        transition
                        transform
                        duration-200
                        ease-in-out
                        hover:scale-105
                        active:translate-y-[2px]
                    '
                />
                : <MdDarkMode
                    size={22}
                    className='
                        transition
                        transform
                        duration-200
                        ease-in-out
                        hover:scale-105
                        active:translate-y-[2px]
                    '
                />
            }

        </div>


    )
}

export default ColorModeSwitch
