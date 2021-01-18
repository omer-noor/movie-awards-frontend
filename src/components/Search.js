import React, {Component} from 'react'
import axios from "axios";
import Results from "./Results";


class Search extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        movies: null,
        loading: false,
        value: ''
    };

    get renderMovies() {
        console.log("renderMovies")
        let movies = []
        if (this.state.movies) {
            let currentList = []
            let fromJSON = Object.entries(this.state.movies)
            if (fromJSON.length === 3) {
                try {
                    for (let i = 0; i < 5; i++) {
                        currentList.push([[fromJSON[0][1][i].Title], [fromJSON[0][1][i].Year], [fromJSON[0][1][i].Poster]])
                    }
                } catch (e) {
                    console.log(e)
                }
            }
            movies = currentList
        }

        return movies;
    }

    search = async val => {
        console.log(val + "   Search")
        this.setState({loading: true});
        const res = await axios(
            `http://www.omdbapi.com/?apikey=236aabb&s=${val}&type=movie`
        );
        const movies = await res.data;

        this.setState({movies, loading: false});
    };

    onChangeHandler = async e => {
        console.log("onChangeHandler")
        this.search(e.target.value);
        this.setState({value: e.target.value});
    };

    clearValue = () => {
        this.setState({movies: null, value: ''})
    }

    render() {
        console.log("render")
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search"
                                   value={this.state.value}
                                   onChange={e => this.onChangeHandler(e)}
                                   placeholder="Search for movies"
                            />
                            <label className="label-icon" htmlFor="search"><i
                                className="material-icons">search</i></label>

                            <i className="material-icons" onClick={this.clearValue}>close</i>

                            {this.renderMovies.map((item, i) => <Results key={i} movies={this.props.movies}
                                                                         dispatch={this.props.dispatch}
                                                                         name={this.renderMovies[i][0]}
                                                                         date={this.renderMovies[i][1]}
                                                                         poster={this.renderMovies[i][2]}/>)}

                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Search