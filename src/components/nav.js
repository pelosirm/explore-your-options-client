
import React from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends React.Component {


    render() {
    return (
    <nav className="navigation navbar-fixed-top">
        <ul>
            <li className="left home">
                <Link to="/"><a href="#"><i className="fab fa-fly" aria-hidden="true"></i> Explore Your Options</a></Link>
            </li>
        </ul>
        <div className="sm-view">
            <ul className="center-float">
                <li className="right">
                    <a href="#" className="nav-signout">signout</a>
                </li>
                <li className="right">
                    <Link to="/sign-in" className="nav-login">login</Link>
                </li>
                <li className="right">
                    <Link to="/sign-up" className="nav-sign-up">sign up</Link>
                </li>
                <li className="right">
                    <a href="#" className="nav-saved">my saved info</a>
                </li>
                <li className="right">
                    <Link to="/search-page" className="nav-search">search</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}
}