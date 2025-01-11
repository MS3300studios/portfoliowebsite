import classes from "./Card.module.css"

export const Card = ({ text }: {text: string}) => {
    return (
        <div className={classes.card}>
            {text}
        </div>
    )
}