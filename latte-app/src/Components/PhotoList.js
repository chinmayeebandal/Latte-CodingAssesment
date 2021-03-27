import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
	const results = props.data;
	let imgs = results.map(img => <Photo url={img.urls.small} key={img.id}/>);

	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default PhotoList;