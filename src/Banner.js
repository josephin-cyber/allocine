import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import handleClick from './Row';
import './Row.css'
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    const handleClick = (movie)=> {
        if(trailerUrl){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || "")
            .then(url=>{
const urlParams = new URLSearchParams(new URL(url).search);
setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=>console.log(error));
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTendance);

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]);

            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    function truncate(str, n){
        return str?.length > n? str.substr(0, n-1) + "..." : str;
    }

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
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                
                <div className="banner_buttons">
<button className="banner_button"
                            onClick={()=>handleClick(movie)}
                             >Jouer</button>

<button className="banner_button">Details</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>

            
            
            <div className="banner_fadeBottom" />
            
        </header>
        
    )
    
}


export default Banner;