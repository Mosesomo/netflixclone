import axios from "axios";
import {useState, useEffect} from 'react'
import { FaHeart } from 'react-icons/fa'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchUrl, rowId }) => {
  const [movie, setMovie] = useState([]) ;
  
  useEffect(() =>{
    axios.get(fetchUrl).then((Response) =>{
      setMovie(Response.data.results)
    })
  }, [fetchUrl])
  console.log(movie)

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  

  return (
    <div className="mt-7">
      <h2 className="p-4 font-bold text-xl text-gray-200">{title}</h2>
      <div className="relative flex items-center">
      <MdChevronLeft size={30} className="bg-black/70 left-4 rounded-full cursor-pointer opacity-0 hover:opacity-100  hover:bg-gray-400 hover:text-black" onClick={slideLeft}/>
        <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movie.map((item, id) =>(
            <div key={id } className="w-[170px] sm:w-[200px] md:w-[260px] inline-block relative p-2">
              <img className="cursor-pointer w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/75 opacity-0 hover:opacity-100">
                  <p className="white-space-normal text-xs flex justify-center items-center font-bold w-full h-full p-8 font-serif text-
                  c text-red-400">{item.title}</p>
                  <FaHeart className="absolute bottom-3 right-3 cursor-pointer" size={25}/>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight size={30} className="absolute right-0 top-[30%] bg-black/70 rounded-full opacity-0 hover:opacity-100 cursor-pointer hover:bg-gray-400 hover:text-black" onClick={slideRight}/>
      </div>
    </div>
  )
}

export default Row
