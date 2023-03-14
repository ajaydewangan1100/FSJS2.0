
import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

export default function CardContainer({movies}) {
  
  // const movie = useContext(myContext);
  // console.log("::::", typeof moviesList);
  // console.log(movies);
  console.log(typeof movies, "::type");
  console.log(movies, "data");

  return (
    <div className=' '>
      <div className='flex flex-wrap gap-3'>
        {
        movies?
        movies.map(
          (m) => (
            <Card poster={m.Poster} title={m.Title} year={m.Year} /> 
            // console.log("runned")
          )):null
        }
      </div>
    </div>
  )
}

function Card({poster, title, year}) {
  return (
    <div className="rounded p-1 shadow">
      <img src={poster} className="h-[300px] min-w-[220px] max-w-[220px] rounded" />
      <div>
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </div>
  )
}