import React from 'react';
import { connect } from 'react-redux';
import Navigation from './nav';

export class CareerOutput extends React.Component{
	componentWillMount(){
		console.log(this.props.searchCareerResults)
	}
	render(){
		return(
			<div>
				<Navigation />
			    <section className="career-results">
			    	<div className="row career-column">
			    		<div className="col-12">
				    		<p><span className="heavy emphasis orange">Manager</span>
				    		<br></br>
				    		<span className="light"> ekjh </span></p>
				    		<ul>
				    			<li><span className="heavy">National Median Salary:</span><span id="nat-median-value">hello</span></li>
				    			<li><span className="heavy"> Region Median Salary:</span> <span id="st-median-value">hello</span></li>
				    			<li><span className="heavy">Degree Requires:</span> <span id="education-value">hello</span></li>
				    			<li><span className="heavy">Experience Needed:</span> <span id="experience-value">hello</span></li>
				    		</ul>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-12">
				    		<button className="save-career-btn"> Save Career</button>
				    	</div>
				    </div>
				    <p className="new-search center"><a href="#"> new search </a></p>
    			</section>
    		</div>

			)
	}

}


const mapStateToProps= state=>({
	searchCareerResults : state.exploreReducer.searchCareerResults
})

export default connect(mapStateToProps)(CareerOutput)