import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data.results);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]);
            return request;
        }
        fetchData();
    }, [])

    console.log(movie)

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_content">
                <h1></h1>
            </div>
        </header>
    )
}

export default Banner;