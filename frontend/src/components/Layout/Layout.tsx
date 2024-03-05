import { useEffect } from "react" ;
import classes from "./Layout.module.css";
import faviconSvg from '../../assets/favicon.svg';

interface IProps{
    children: React.ReactNode[] | React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
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
            <header>

            </header>
            <main>
                {children}
            </main>
            <footer className={classes.footer}>
                <p className="roboto-thin">copyright © Mikołaj Strusiński 2024</p>
            </footer>
        </>
    )
}