import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { InfinitySpin } from "react-loader-spinner";


const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  // if (isLoading) {
  //   return (
  //     <div className="">
  //       <div className="loading">Loading....</div>
  //     </div>
  //   );
  // }
  if (isLoading) {
    return (
      <div className="spinner">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((currMovie, id) => {
          const { imdbID, Title, Poster } = currMovie;

          const movieName = Title.substring(0, 15);

          return (
            <NavLink to={`movie/${imdbID}`} key={id}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieName.length >= 15 ? `${movieName} ...` : movieName}
                  </h2>
                  <img src={Poster} alt="Movie-poster" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
