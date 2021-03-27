import React from 'react';

const Photo = props => (

    <div className="card" key={props.id}>
        <img 
          className="card--image"
          alt={props.alt_description}
          src={props.url} 
          width="50%"
          height="50%"
        ></img>
    </div>
    
 
);

export default Photo;