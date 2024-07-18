export default function setPageTheme(theme?: 'light' | 'dark') {
    if (theme === undefined) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark')
        }
    }
    if (theme === 'dark') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    }
    else if (theme === 'light') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    }
}
