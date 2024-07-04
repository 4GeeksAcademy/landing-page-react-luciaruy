import React from 'react';

const Card = ({ title, text, imgSrc }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#more" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

export default Card;
