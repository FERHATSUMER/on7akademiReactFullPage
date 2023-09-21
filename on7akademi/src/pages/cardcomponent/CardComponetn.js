import React from 'react'
import data from '../../assets/data';
import Card from '../card';
import { useState } from 'react';
const CardComponetn = () => {
  const [informations,setInformation]=useState(data)
    return (
      <div className='inclusive'>
    <div className='card-container'>
    {
        informations.map((i)=>
       <Card 
        name={i.name}
        img={i.img}
        job={i.job}
        about={i.about}
        id={i.id}
        />
        )
    }
    </div>
    </div>
    
  )
}


export default CardComponetn
