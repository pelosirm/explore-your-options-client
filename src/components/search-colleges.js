import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navigation from './nav';
import SearchCollegesForm from './search-colleges-form';

import { getCollegeInputCall } from '../actions';

export class SearchCollegesPage extends React.Component{

	render(){

		return(
			<div>
				<Navigation />
			    <section className="search-options">
			        <h1> Explore </h1>
			        <div className="row">
					    <div className="col-6 container search-careers">
					        <img src="assets/img/nasa.jpg" className="image"></img>
					            <div className="middle">
					                <div className="text"><Link to="/search-careers-page">Search Careers</Link></div>
					            </div>
					    </div>
			            <div class="col-6 container search-colleges">
			            	<SearchCollegesForm />
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	searchProgramInput : state.searchProgramInput, 
	searchRegionInput : state.searchRegionInput, 
	searchStateInput : state.searchStateInput
})

export default connect(mapStateToProps)(SearchCollegesPage)