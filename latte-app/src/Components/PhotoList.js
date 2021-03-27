import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
	const results = props.data;
	let imgs = results.map(img => 

        <div className="card-user" key={img.id}>
             <Photo url={img.urls.small}/>
             <p>{img.user.name}</p>
        </div>
    );

	return (
		<ul className="card-list">
			{imgs}

		</ul>
        
	);
};

export default PhotoList;