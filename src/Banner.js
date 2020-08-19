import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import './Row.css';


function Banner() {
    const [movie, setMovie] = useState([]);
    // const[rechercherfilm, setRechercherfilm]=useState("");

    // const inputChange= (e)=>{
    //     setRechercherfilm(e.target.value);
    // }
    

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

                <h1 className="banner_description">{truncate(movie?.overview, 300)}</h1>

                
            </div>
            {/* <input
            onChange={inputChange}
            /> */}
            
            <div className="banner_fadeBottom" />
            
            
            
            
            
        </header>
        
    )
    
}


export default Banner;