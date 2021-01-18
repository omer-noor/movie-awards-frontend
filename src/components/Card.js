import React from "react";
import Placeholder from "../images/placeholder.png"


const Card = (props) => {

    function removeMovie() {
        const entry = {
            id: props.id
        }

        props.dispatch(
            {
                type: "remove",
                payload: entry
            }
        )
    }

    function checkImage() {
        if (props.poster.toString() === "N/A") return Placeholder
        else return props.poster
    }

    return (

        <div className="col m5ths s6">
            <div className="card black-text">
                <div className="card-image">
                    <img src={checkImage()}/>
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                        className="material-icons" onClick={removeMovie}>delete</i></a>
                </div>
                <div className="card-content">
                    <p><b>{props.name}</b></p>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Card