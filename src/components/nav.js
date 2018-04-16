
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavLoggedIn from './nav-logged-in';
import NavNotLoggedIn from './nav-not-logged';



export class Navigation extends React.Component {
    render() {

    return (
    <nav className="navigation navbar-fixed-top">
        <ul>
            <li className="left home">
                <Link to="/"><i className="fab fa-fly" aria-hidden="true"></i> Explore Your Options</Link>
            </li>
        <div>
            { this.props.isAuthenticated 
                ? <NavLoggedIn />
                : <NavNotLoggedIn />
            }
        </div>
        </ul>
    </nav>
    )
}
}

const mapStateToProps=state=>({
    isAuthenticated : state.exploreReducer.isAuthenticated
})

export default connect(mapStateToProps)(Navigation)