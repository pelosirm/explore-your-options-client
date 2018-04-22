import React from 'react';
import { connect } from 'react-redux';

import Navigation from './nav';
import College from './college';

export class CollegeResults extends React.Component{

	render() {
		const colleges = this.props.searchCollegeResults
		let items = colleges.map(college=>{
			return <College college = {college} key={college._id}/>
			})
		console.log(items._id)
		
		return(
			<div className = 'college-results'>
				<h1>Search Results </h1>
				<div className="row">
				{ items }
				</div>
			</div>

			) 
	}
}

const mapStateToProps = state => ({
	searchCollegeResults : state.exploreReducer.searchCollegeResults
})

export default connect(mapStateToProps)(CollegeResults)