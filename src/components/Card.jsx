import React from 'react';

const Card = ({film}) => {
  return (
    <li className='card'>
      <img src="" alt="" />
      <div className="infos">
    <h2 className='title'>
      {film.title}
    </h2>
      </div>
    </li>
  );
};

export default Card;