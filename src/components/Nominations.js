import React from "react";
import Card from "./Card";


const Nominations = (props) => {
    return (
        <div className="row">
            {props.movies.map(movie => {
                return <Card id={movie.id} dispatch={props.dispatch} name={movie.name} date={movie.date}
                             poster={movie.poster}/>
            })}
        </div>
    )
}

export default Nominations