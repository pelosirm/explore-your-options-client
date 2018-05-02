import React from 'react';
import Navigation from './nav';
import ReturningUser from './returning-user';
import Footer from './footer'

export default class SignIn extends React.Component{


	render() {
	return (
		<div>
			<header className="header-image">
			</header>
			<Navigation />
			<ReturningUser />
			<Footer />
		</div>
	);
  }
}

