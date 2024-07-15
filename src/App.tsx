import { useEffect } from 'react';
import Root from './pages/Root'
import setPageTheme from './utils/setPageTheme'

function App() {

    useEffect(() => {
        setPageTheme();
    }, [])

    return (
        <>
            <Root />
        </>
    )
}

export default App
