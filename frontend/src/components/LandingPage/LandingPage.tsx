import classes from "./LandingPage.module.css";
import GraphqlIcon from "../../assets/graphql";
import DotNetIcon from "../../assets/dotNet";
import ReactIcon from "../../assets/react";
import TypescriptIcon from "../../assets/typescript";
import ArrowDown from "../../assets/arrowDown";

export const LandingPage = () => {
    return (
        <div>
            <div className={classes.welcomeBannerContainer}>
                <div className={classes.welcomeBanner}>
                    <h1>Mikołaj Strusiński</h1>
                    <h3>Software Developer</h3>
                    <div className={classes.iconsContainer}>
                        <GraphqlIcon />
                        <DotNetIcon />
                        <ReactIcon />
                        <TypescriptIcon />
                    </div>
                </div>
            </div>
            <div className={classes.scrollDownContainer}>
                <ArrowDown />
            </div>
        </div>
    )
}