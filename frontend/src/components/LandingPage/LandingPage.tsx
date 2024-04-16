import classes from "./LandingPage.module.css";
import { useState, useEffect } from "react";
import profilePicture from "../../assets/profile picture.jpg";

export const LandingPage = () => {
    const [hasScrolledDown, setHasScrolledDown] = useState(false);
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        setScrollPos(window.scrollY)
        if(window.scrollY > 50) {
            setHasScrolledDown(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className="center">
            <div className={classes.headingWrapper} style={{opacity: scrollPos > 50 ? "0" : "100"}}>
                <h1 className={classes.keyWords}>💡Inspiration</h1>
                <h1 className={classes.keyWords}>✨Commitment</h1>
                <h1 className={classes.keyWords}>🚚Delivery</h1>
            </div>

            <article className={classes.article} style={{opacity: hasScrolledDown ? "100" : "0"}}>
                <div className={classes.profileWrapper}>
                    <img src={profilePicture} alt="Mikolaj Strusiński" />
                </div>
                <div className={hasScrolledDown ? classes.innerArticle : ""}>
                    <h1>Mikołaj Strusiński</h1>
                    <p>Welcome to my web page! This is my own sliver of the internet where I present different ideas, and my professional portfolio and experience!</p>
                    <p>This page is currently under development, more content coming soon!</p>
                </div>
            </article>
        </div>
    )
}