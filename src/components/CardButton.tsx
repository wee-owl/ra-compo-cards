import React from 'react';


const CardButton = ( { text }: { text: string } ) => {
  return (
    <button className="card__btn" type='button'>{text}</button>
  );
};

export default CardButton;
