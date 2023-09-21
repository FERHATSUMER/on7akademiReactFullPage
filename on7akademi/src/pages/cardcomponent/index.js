import React from 'react'
import data from '../../assets/data';
import Card from '../card';
import { useState } from 'react';
const CardComponetn = () => {
    const [informations, setInformation] = useState(data);
    console.log(informations);
  return (
    <div className='inclusive'>
      <div className='container-card'>
        {informations.map((i)=>{
            <Card
            key={i.id}
            name={i.name}
            img={i.img}
            job={i.job}
            about={i.about}
            />
        })}
    </div>
    </div>
  )
}

export default CardComponetn
