import clsx from 'clsx';
import { useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import setPageTheme from '../../../utils/setPageTheme';

type ColorMode = "light" | "dark";

const ColorModeSwitch = ({ className }: { className?: string }) => {

    const [colorMode, setColorMode] = useState<ColorMode>(localStorage.theme);

    const colorModeClickHandler = () => {
        if (colorMode == 'dark') {
            setPageTheme('light')
            setColorMode('light');
        }
        else {
            setPageTheme('dark')
            setColorMode('dark');
        }
    }

    return (
        <div
            onClick={colorModeClickHandler}
            className={clsx(` `, className)}
        >
            {colorMode === 'dark'
                ? <MdDarkMode size={22} />
                : <MdLightMode size={22} />
            }

        </div>


    )
}

export default ColorModeSwitch
