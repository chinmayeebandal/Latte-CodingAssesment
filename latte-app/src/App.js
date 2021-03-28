import React, { Component } from 'react';
import './App.css';
import PhotoList from './Components/PhotoList';
import axios from 'axios';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		axios.get('https://api.unsplash.com/photos/?client_id=' + CLIENT_ID)
			.then(res => {
				const photo = res.data;
				this.setState({ imgs: photo });
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
						<h1 className="title">Latte - Coding Assessment</h1>
					</div>
				</div>
				<div className="main-content">
					<PhotoList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}