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

const CardGroup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card 
            title="Card title 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            imgSrc="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card 
            title="Card title 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            imgSrc="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card 
            title="Card title 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            imgSrc="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card 
            title="Card title 4"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
            imgSrc="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardGroup;

