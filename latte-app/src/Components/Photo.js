import React from 'react';

const Photo = props => (
  
    <img 
        className="card--image"
        alt={props.alt_description}
        src={props.url} 
        width="50%"
        height="50%"
    ></img>
 
);

export default Photo;