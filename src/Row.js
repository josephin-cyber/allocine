import React, {useEffect, useState} from "react";
import axios from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    // console.table(movies);

    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>
            <div className="row_posters">
                {/* Several row poster(s) */}
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Row;