import './App.css'
import faviconSvg from './assets/favicon.svg';
import { useEffect } from 'react';
import { Content } from './components/Content';

function App() {
    useEffect(() => {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/svg+xml';
        favicon.href = faviconSvg;
        document.head.appendChild(favicon);

        return () => {
            document.head.removeChild(favicon);
        };
    }, [])

    return (
        <>
        <Content />
        <footer>
            <p className="roboto-thin">copyright © Mikołaj Strusiński {new Date().getFullYear()}</p>
        </footer>
        </>
    )
}

export default App
