import React from 'react';


const CardDescription = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="card__desc">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
};

export default CardDescription;
