import { useEffect, useState } from "react";
import classes from "./Content.module.css";
import { LandingPage } from "./LandingPage/LandingPage";
import { Card } from "./Card/Card";

interface IContent {
  component: JSX.Element;
  name: string;
}

export const Content = () => {
    const [content, setContent] = useState<IContent>({
        component: <LandingPage />,
        name: "LandingPage",
    });
    const [wrapperClasses, setWrapperClasses] = useState([classes.contentWrapper]);
    const [lastTouchY, setLastTouchY] = useState<number | null>(null);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            handleScroll(event.deltaY > 0 ? "down" : "up");
        };

        const handleTouchStart = (event: TouchEvent) => {
            setLastTouchY(event.touches[0].clientY);
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (lastTouchY !== null) {
                const currentTouchY = event.touches[0].clientY;
                const deltaY = lastTouchY - currentTouchY;
                if (Math.abs(deltaY) > 30) {
                    handleScroll(deltaY > 0 ? "down" : "up");
                    setLastTouchY(currentTouchY); // Update for continuous swipes
                }
            }
        };

        const handleScroll = (direction: "up" | "down") => {
            setWrapperClasses([classes.contentWrapper, classes.fadeOut]);
            setTimeout(() => {
                if (direction === "down" && content.name !== "Card") {
                    setContent({
                        component: <Card text="Welcome to my web page! This is my own sliver of the internet where I present different ideas, and my professional portfolio and experience. This page is currently under development, more content coming soon..."/>,
                        name: "Card"
                    });
                } else if (direction === "up") {
                    setContent({ component: <LandingPage />, name: "LandingPage" });
                }

                setTimeout(() => {
                    setWrapperClasses([classes.contentWrapper, classes.fadeIn]);
                }, 200);
            }, 200);
        };

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [content, lastTouchY]);

    return (
        <div className={classes.container}>
            <div className={wrapperClasses.join(" ")}>{content.component}</div>
        </div>
    );
};
