import React, {useReducer} from 'react'
import "materialize-css/sass/materialize.scss"
import Materialize from "materialize-css";
import logo from "./images/shoppiesLogo.png"
import "./App.css"
import Nominations from "./components/Nominations";
import Search from "./components/Search"

function reducer(movies, action) {
    switch (action.type) {
        case "add":
            if (movies.length === 4) {
                Materialize.toast({html: 'You have nominated 5 movies!', displayLength: 4000, classes: 'green'})
                return [...movies, action.payload]
            }
            if (movies.length === 5) {
                Materialize.toast({
                    html: 'You have already nominated 5 movies, please remove a movie from the list',
                    displayLength: 4000,
                    classes: 'red'
                })
                return movies
            } else {
                Materialize.toast({html: 'Movie added!', displayLength: 4000, classes: 'green'})
                return [...movies, action.payload]
            }
        case "remove":
            return movies.filter(movie => movie.id !== action.payload.id)
        case "clearArray":
            return []
        default:
            return movies
    }

}

const App = () => {

    const [movieList, dispatch] = useReducer(reducer, [])

    return (
        <div className="container">
            <br/>
            <br/>
            <div className="center">
                <img className="logo" src={logo} alt="Shoppies Logo"/>
            </div>

            <div className="row">
                <div className="col s7 offset-l3 white-text">
                    <h5>Shopify’s annual movie award show
                        where entrepreneurs like you get to
                        decide the top movies of the year. Use the search
                        below to nominate a film.
                    </h5>
                </div>
                <br/>
                <div className="card col s12 border">
                    <div className="card-content white-text">


                        <span className="card-title">Your Nominations</span>
                        <br/>
                        <Nominations dispatch={dispatch} movies={movieList}/>
                        <a className="waves-effect waves-light btn right clear btn-small red"
                           onClick={() => dispatch({type: "clearArray"})}>Clear Nominations</a>
                    </div>
                </div>
                <div className="col s8 offset-l2">
                    <Search movies={movieList} dispatch={dispatch}/>
                </div>
            </div>


            <br/>
        </div>
    );

}

export default App;