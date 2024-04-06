import classes from "./LandingPage.module.css";
import { useState, useEffect } from "react";
import profilePicture from "../../assets/profile picture.jpg";

export const LandingPage = () => {
    const [hasScrolledDown, setHasScrolledDown] = useState(false);
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        console.log("window.scrollY", window.scrollY)
        setScrollPos(window.scrollY)
        if(window.scrollY > 50) {
            setHasScrolledDown(true);
        }
    };

    useEffect(() => {
        console.log('initial scroll', window.scrollY)
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
                    <h1>
                        Mikołaj Strusiński
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, accusantium vitae, quibusdam et unde eaque, inventore accusamus nisi quis vel ab optio quisquam. Nobis quibusdam dolorum earum architecto aliquid voluptatem reiciendis magni repellat, numquam illum natus, quidem modi delectus cupiditate veniam ex repellendus ut voluptates similique nihil. Incidunt, voluptas.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores reiciendis unde accusantium ipsum consectetur possimus qui. Aliquam corporis accusamus asperiores quam veritatis earum fugiat. Accusantium quam vitae sequi vero?
                    </p>
                </div>
            </article>
        </div>
    )
}