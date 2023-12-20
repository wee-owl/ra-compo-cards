import React from 'react';


const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="card__preview">
      <img className="card__img" src={src} alt={alt} width={320} height={200}></img>
    </div>
  );
};

export default CardImage;
