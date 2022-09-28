import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../typings";
import {baseUrl} from '../constants/movie'
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/Hi";


interface Props{
    netflixOriginals:Movie[]
}

export default function Banner({netflixOriginals}:Props) {
    const [movie,setMovie] = useState<Movie | null>(null);

    useEffect(()=>{
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    },[netflixOriginals])
    console.log(movie)
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh]  lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
            <Image  objectFit="cover" layout="fill" src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
        </div>
            <h1 className="text-2xl md:text-4xl lg:text-7xl ">{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play</button>
                <button className="bannerButton bg-[gray]/70">More Info <HiInformationCircle className="text-2xl" /></button>
            </div>
    </div>
  )
}
