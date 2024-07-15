/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                heading: ["Rubik Mono One", "sans-serif"],
                text: ["Roboto Mono", "monospace"],
            },
            colors: {
                "black": "var(--black-color)",
                "white": "var(--white-color)",
            }
        },
    },
    plugins: [],
}
