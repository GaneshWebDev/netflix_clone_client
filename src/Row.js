import { useEffect, useState } from 'react';
import axios from './axios'
import './Row.css';
function Row({title,request ,isLarge}){
    const [movie,setMovie]=useState([]);
    const baseURL='https://image.tmdb.org/t/p/original';
    useEffect(()=>{
        async function fetchData(){
            const requestData=await axios.get(request);
            setMovie(requestData.data.results)
            if(movie){movie?.map(film=>{
                console.log(film)
            })};
        }
        fetchData();  
    },[request])
    return(
        <div className='row'>
           <h1>{title}</h1>
           <div className='row_posters'>
           {movie?.map((film)=>
                ((isLarge && film.poster_path)||(!isLarge && film.backdrop_path))&&(<img className={isLarge?'row_larger':'row_poster'} src={`${baseURL}${isLarge?film?.poster_path:film?.backdrop_path}`}  alt="dorry"/>)
            )}
           </div>
            
        </div>
    )
}
export default Row;