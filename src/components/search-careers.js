import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Navigation from './nav'

import { getCareerInputCall } from '../actions'

export class SearchCareersPage extends React.Component{

componentWillMount() {
	this.props.dispatch(getCareerInputCall());
}


render() {

	const searchCareerInput = this.props.searchCareerInput.map((career,index)=>(
		<option value={career.OCC_CODE} key={index}> {career.OCC_TITLE} </option>
		));

	const searchCareerStateInput = this.props.searchCareerStateInput.map((state,index)=>(
		<option value ={state.Abbreviation} key={index}>{state.State}</option>
		));

	return (
		<div>
		<Navigation />
	    <section className="search-options">
	        <h1> Explore </h1>
	        <div className="row">
	            <div className="col-6 container search-careers">
	            	<form class="form-search-careers">
	            		<legend> Search Careers </legend>
	            			<div class="center-on-page">
	            				<div class="select">
	            					<select name="career" id="career-select">
	            						<option>Select Career</option>
	            						{ searchCareerInput }
	            						
	            					</select>
	            				</div>
	            				<div class="select">
	            					<select name="state" id="state-career-select">
	            						<option>Select State</option>
	            						{ searchCareerStateInput }
	            					</select>
	            				</div>
	            				<input type="submit" value ="Submit"></input>
	            			</div>
	            	</form>
	            </div>
	            <div class="col-6 container search-colleges">
	                <img src="assets/img/books.jpg" className="image"></img>
	                <div className="middle">
	                    <div className="text"><Link to="/search-colleges-page">Search Colleges</Link></div>
	                </div>
	            </div>
	        </div>
	    </section>
	   </div>
	);
  }
}


const mapStateToProps = state => ({
	searchCareerInput : state.searchCareerInput, 
	searchCareerStateInput : state.searchCareerStateInput
});

export default connect(mapStateToProps)(SearchCareersPage)