import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movielisting";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
    useEffect(() => {
        const movieText = "Harry";
        const fetchMovies= async () => {
            const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Err:", err);
            });
            console.log( "THE reponse from API", response);
        };

        fetchMovies();
    }, []); //empty dependency added

    return (
        <div>
        <div className="banner-img"></div>
        <MovieListing />
        </div>
    );
};

export default Home;