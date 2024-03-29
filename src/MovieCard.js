import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    /*
    Destructuring - We're getting the profiles, users, and movies properties
    off of the props passed into this presentational component.
    */
    const { users, usersWhoLikedMovie, movieInfo } = this.props;

    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>

        {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {usersWhoLikedMovie &&
              usersWhoLikedMovie.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  }
}

export default MovieCard;
