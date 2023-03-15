
import React from 'react';
import Card from './Card';

export default function CardContainer(props) {

  const cardClicked = (id) => {
    console.log("clicked id :", id);  
  }
  
  return (
    <div className=' mx-auto bg-gray-900 rounded '>
      <div className='flex flex-wrap justify-center gap-3 py-4 '>
        {
        props.movies?
        props.movies.map(
          (m) => (
            <>
            <Card id={m.imdbID} poster={m.Poster} title={m.Title} year={m.Year} cardClicked={cardClicked} /> 
            </>
          )):null
        }
      </div>
    </div>
  )
}
