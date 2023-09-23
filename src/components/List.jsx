import React from 'react';

const List = ({people, hanleRemove}) => {
  return (
    <>
       {people.map((item) => {
        const {id, name, image, age} = item;
        return (
            <div key={id} className='list'>
                <div>
                    <img src={image} alt={name} className="image" />
                </div>

                <div className='textContainer'>
                    <h3>{name}</h3>
                    <p>{age} years old</p>
                </div>

                <div>
                    <button className='removeBtn' onClick={(e) => {
                       handleRemove(id);
                    }}>X</button>
                </div>
            </div>
        )
       })}
    </>
    
  )
}

export default List;