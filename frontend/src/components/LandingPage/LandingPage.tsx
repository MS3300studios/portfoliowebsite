import classes from "./LandingPage.module.css";
import GraphqlIcon from "../../assets/graphql";
import DotNetIcon from "../../assets/dotNet";
import ReactIcon from "../../assets/react";
import TypescriptIcon from "../../assets/typescript";
import ArrowDown from "../../assets/arrowDown";
import { useEffect, useState } from "react";

export const LandingPage = () => {
    const [showArrowDown, setShowArrowDown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowArrowDown(true)
        }, 2600);
    }, []);

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
            <div className={classes.scrollDownContainer} style={{opacity: showArrowDown ? "1" : "0"}}>
                <ArrowDown />
            </div>
        </div>
    )
}