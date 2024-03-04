import classes from "./Layout.module.css";

interface IProps{
    children: React.ReactNode[] | React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
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