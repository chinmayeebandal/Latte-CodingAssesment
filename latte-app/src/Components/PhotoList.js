import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
	const results = props.data;
	let imgs = results.map(img => 

        <div className="card" key={img.id}>
            <div className="card-user" >
                  <Photo url={img.urls.small}/>
                  <div className="card-contents">
                      <p>{img.user.name}</p>
                      <img src={img.user.profile_image.small} alt="profile pics of users"></img>
                  </div>
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