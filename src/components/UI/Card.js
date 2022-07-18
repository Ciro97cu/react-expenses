import React from "react"; // <-- importo React
import "./Card.css"; // <-- importo il CSS

const Card = (props) => {

    const classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>;

}

export default Card;