import React from "react";
import { useHistory } from "react-router-dom";
const Card = (props) => {
    let history = useHistory();
    const { title, body, id } = props.x;
    return (
        <div className="myCard">
            <h2>{title}</h2>
            <p>{`${body.substring(0, 150)} ${body.length > 150 && "...."}`}</p>

            <button
                className="button__basic"
                onClick={() => history.push(`/posts/${id}`)}
            >
                See Details
            </button>
        </div>
    );
};

export default Card;
