import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (string, number) => {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        {/**Title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">
            <div className="space"></div> More Information
          </button>
        </div>
        {/**DIV > 2 BUTTONS */}
        <h1 className="banner__description">{truncate(movie?.overview, 10)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
