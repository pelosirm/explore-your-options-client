import React from 'react';
import Header from './header';
import Navigation from './nav';
import HowItWorks from './how-it-works';
import Footer from './footer'

export default class FrontPage extends React.Component{

	render() {
	return (
		<div>
			<Navigation />
			<Header />
			<HowItWorks />
			<Footer />
		</div>
	);
  }
}