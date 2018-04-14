import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLoggedIn(props){
	return(
		<ul className="center-float">
		        <li className="right">
                    <a href="#" className="nav-signout">signout</a>
                </li>
                <li className="right">
                    <a href="#" className="nav-saved">my saved info</a>
                </li>
                <li className="right">
                    <Link to="/search-page" className="nav-search">search</Link>
                </li>
        </ul>
		)
}