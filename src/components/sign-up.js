import React from 'react'
import { Link } from 'react-router-dom';

import Header from './header';
import Navigation from './nav';
import NewUser from './new-user'


export default class SignUp extends React.Component{

	render() {
	return (
		<div>
			<header className ="header-image">
			</header>
			<Navigation />
			<NewUser />
			
		</div>
	);
  }
}