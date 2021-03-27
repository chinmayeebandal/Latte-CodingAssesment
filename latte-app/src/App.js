import React, { Component } from 'react';
import './App.css';
import PhotoList from './Components/PhotoList';


const CLIENT_ID = "CTHvf_PuzbyzA1rpthv9aONqaQcOGkSnawBkvicCRyc";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/?client_id=' + CLIENT_ID)
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
					</div>
				</div>
				<div className="main-content">
					<PhotoList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}