import React from 'react'

// TODO: make the Resume downloadable
const Resume = () => {
    
    const onClickHandler = () => {
    };

    return (
        <button
            type="button"
            onClick={onClickHandler}
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
    )
}

export default Resume
