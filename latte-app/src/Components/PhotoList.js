import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
	const results = props.data;
	let imgs = results.map(img => 

        <div className="card-user" key={img.id}>
             <Photo url={img.urls.small}/>
             <div className="card-user details">
                 <p>{img.user.name}</p>
                  <img src={img.user.profile_image.small} alt="profile pics of users"></img>
             </div>
             
        </div>
    );

	return (
		<ul className="card-list">
			{imgs}

		</ul>
        
	);
};

export default PhotoList;