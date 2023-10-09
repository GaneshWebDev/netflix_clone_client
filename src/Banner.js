import { useEffect, useState } from 'react';
import './Banner.css'
import axios from './axios'
import requests from './request';
import Navbar from './Nav'
function Banner(){
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ])
        }
        fetchData();  
    },[]);
    function descHandle(string,n){
        return string?.length>n?<p>{string.substr(0,n-1)+'...'}</p>:<p>{string}</p>
    }
    return(
        <div className="banner" style={{
            backgroundSize:'cover',
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition:'center center'
        }}>
            <div className="banner_content">
               <span className="banner_title">
                {movie?.name || movie?.original_name || movie?.title}
               </span>
               <div>
               <button className="banner_button">Play</button>
               <button className="banner_button">+ My List</button>
               </div>
               <div className="banner_desc">{descHandle(movie.overview,150)}</div>
            </div>
            <div className='banner-fadeBottom'></div>
        </div>
    )
}
export default Banner;