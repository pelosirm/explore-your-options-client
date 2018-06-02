import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    render(){
    return (
    		<header className="header-image">
			    <div className="header-intro">
			        <div className="header-text">
			            <h1> Explore Your Options </h1>
			            <p> by researching career opportunities and colleges</p>
			            <button className="header-button sign-up-btn"><Link to="sign-up"> Sign Up</Link></button>
			        </div>
			    </div>
			</header>
    )
}
}
