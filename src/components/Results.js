import React, {useState} from "react";

const Results = (props) => {


    function addNomination() {

        let id = Date.now()

        const entry = {
            id: id,
            name: props.name,
            date: props.date,
            poster: props.poster,
        }
        props.dispatch(
            {
                type: "add",
                payload: entry
            }
        )


    }

    return (
        <div className="Container">
            <div className="row">
                <div className="col s8">{props.name}</div>
                <div className="col s2">{props.date}</div>
                <div className="col s2"><a className="waves-effect waves-light btn" onClick={addNomination}>Nominate</a>
                </div>
            </div>
        </div>

    )
}

export default Results