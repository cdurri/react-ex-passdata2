import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieCardsList extends Component {
  render() {
    /*
    Destructuring - We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component.
    */
    const { profiles, users, movies, usersByMovie } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
  }
}

export default MovieCardsList;