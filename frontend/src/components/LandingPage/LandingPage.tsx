import classes from "./LandingPage.module.css";

export const LandingPage = () => {
    return(
        <article className={classes.main}>
            <div className={classes.headingWrapper}>
                <h1 className="roboto-thick">This is the main website of Mikołaj Strusiński</h1>
                <h4 className="roboto-thin">This page is under construction</h4>
            </div>
        </article>
    )
}