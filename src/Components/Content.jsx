import request from '../Request'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Content = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length > 0) {
            setMovies(movies[Math.floor(Math.random() * movies.length)]);
        }
    }, [movies]);

    useEffect(() => {
        axios.get(request.requestTrending).then((Response) => {
            setMovies(Response.data.results)
        })
    }, [])
    //console.log(movies);

    let truncateString = (str, count) =>{
      if (str?.length > count){
        return str.slice(0, count) + '.....';
      }else{
        return str;
      }
    }

  return (
    <div className='w-full h-[550px] text-white mb-6'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full object-cover h-full' src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title} />
        <div className='absolute lg:top-[40%] md:top-[27%] top-[25%] p-3'>
            <h1 className='text-xl font-serif font-bold'>{movies.title}</h1>
            <div className='py-2'>
                <button className='mr-4 bg-white py-2 px-4 text-black font-bold rounded'>Play</button>
                <button className='font-bold border-[1px] py-2 px-3 rounded border-red-500'>Watch Later</button>
            </div>
            <p className='mb-2 text-gray-500'>Released: {movies?.release_date}</p>
            <p className='text-gray-300'>{truncateString(movies?.overview, 200)}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
