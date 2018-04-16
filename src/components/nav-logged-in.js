import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUserRedirect } from '../actions/user';
import { bindActionCreators } from 'redux';
import { dispatch, connect } from 'react-redux'

export class NavLoggedIn extends React.Component{
   
    handleOnClick(){
        this.props.logoutUserRedirect()
    }

    render(){

	return(

		<div>
		        <li className="right">
                    <a href="#" className="nav-signout" onClick={()=>this.handleOnClick()}>signout</a>
                </li>
                <li className="right">
                    <Link to="/saved-info" className="nav-saved">my saved info</Link>
                </li>
                <li className="right">
                    <Link to="/search-page" className="nav-search">search</Link>
                </li>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUserRedirect: logoutUserRedirect
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLoggedIn);