// import React from 'react';
import './Banner.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
// import requests from '../../Requests/requests';
// import Navbar from '../Navbar/Navbar';

function Banner() {


    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      };

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);

    async function fetchData() {
        const request = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=a3b71fbc78c80fd175316bffe373a71b&language=en-US")
         
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length )
          ]
        );
        // console.log(movie?.backdrop_path);
      }


  return (
                    <div className='Bannerimage'  
                    
                    style={{

                            backgroundImage: movie?.backdrop_path
                            ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`:'url("https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg")',
                            backgroundPosition:'center center',
                            backgroundSize:'cover',


                    }}
                    
                    >

                        {/* <Navbar pr={false} logout={true} show={true} /> */}

                        <div className='Bannercontents'>
                            <h1> {movie?.original_name || movie?.original_title || movie?.title}{" "}</h1>
                            <div className='Bannerbuttons'>
                                <button>Play</button>
                                <button>MyList</button>
                            </div>
                            <h3> {truncate(movie?.overview, 80)}</h3>
                        </div>

                       


                    </div>



       
  )
}

export default Banner