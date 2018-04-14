import React from 'react';
import { Link } from 'react-router-dom';

export default function NavNotLoggedIn(props){
	return(
		<ul className="center-float">
                <li className="right">
                    <Link to="/sign-in" className="nav-login">login</Link>
                </li>
                <li className="right">
                    <Link to="/sign-up" className="nav-sign-up">sign up</Link>
                </li>
        </ul>
		)
}