import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from '../actions'

import Navigation from './nav';

export class CollegeDetails extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		costDetails: false,
    		programDetails: false
    	};
    	this.handleCostClick = this.handleCostClick.bind(this);
    	this.handleProgramClick = this.handleProgramClick.bind(this);
    }
    

  	handleCostClick() { 
    	this.setState(prevState => ({
      		costDetails: !prevState.costDetails,
    	}));
  	}

  	handleProgramClick() {
    	this.setState(prevState => ({
      		programDetails: !prevState.programDetails,
    	}));
  	}

	componentWillMount(){
    	this.props.dispatch(actions.getCollegeDetailQueryCall(this.props.match.params.id))
  	}

	render() {
		const college = this.props.college
		const tags = this.props.college.tags
		const speciality = this.props.college.speciality
		let tagString = ''
		let top5Programs = []
		let otherPrograms = []

		if(tags){
			for(let i=0; i<tags.length; i++){
		    	if(i !== (tags.length-1))  {
		    		tagString += `${tags[i]}  | `
		    	} else {
		    		tagString += `${tags[i]}`
		    	}
		    }
		}

		if(speciality){
		    for(let i=0;i<5; i++){
		    	top5Programs.push(<li>{i+1}. {speciality[i][0]} - {speciality[i][1]}% </li>)
		    }

		    for(let i=5; i<speciality.length;i++){
		    	if(speciality[i][1] !== 0) {
		    		otherPrograms.push(<li> {speciality[i][0]} </li>)
		    	}
		    	
		    }
		}



	return (
		<div>
		<Navigation />
		<section className="college-more-detail">
		<div className="row career-column">
			<div className="col-12">  
			<p><span className="heavy emphasis">${college.INSTNM}</span><br></br><span className="light"> {college.CITY}, {college.STABBR}</span><br></br>{college.UGDS} undergraduate students</p>
  			<ul>
  				<li><span className="heavy"> School Details: </span>
  				{ tagString }
				</li>
				<li><span className="heavy">Average Annual Cost:</span> {college.NPT4}</li>
    			<li><span className="heavy"> Graduation Rate:</span> {Math.round(college.C150_L4_POOLED_SUPP*100)} %</li>
    			<li><span class="heavy">Average Debt:</span> {college.GRAD_DEBT_MDN_SUPP}</li>
    		</ul>
   				<button className="accordion" onClick={this.handleCostClick}>
    				<i className="fa fa-chevron-down" aria-hidden="true"></i> Cost Details </button>
    			<div className="panel" style={{ display : this.state.costDetails? 'block' : 'none' }}>
    				<p> Average annual cost by income bracket </p>
    				<table>
  							<thead>
  								<tr>
   									<th>Income Level</th>
 									<th>Cost</th>
 								</tr>
    						</thead>
    						<tbody>
	   						 	<tr>
	    							<td><span className="heavy"> Average Annual Cost : </span></td>
	    							<td>${college.NPT4} </td>
	    						</tr>
	    						<tr>
	    							<td><span className="heavy"> $0 - $30,000 : </span> </td>
	    							<td>${college.NPT41} </td>
	    						</tr>
	    						<tr>
	    							<td><span className="heavy"> $30,001-$48,000 : </span></td>
	    							<td>${college.NPT42}</td>
	    						</tr>
	    						<tr>
	    							<td><span className="heavy"> $48,001-$75,000 : </span></td>
	    							<td>${college.NPT43} </td>
	    						</tr>
	    						<tr>
	    							<td><span className="heavy"> $75,001-$110,000 : </span> </td>
	    							<td>${college.NPT44} </td>
	    						</tr>
	    						<tr>
	    							<td><span className="heavy"> $75,001-$110,000 : </span> </td>
	    							<td>${college.NPT45} </td>
	    						</tr>
	    					</tbody>
						</table>
    			</div>
    			<button className="accordion" onClick={this.handleProgramClick}><i className="fa fa-chevron-down" aria-hidden="true"></i> Program Details </button>
    			<div className="panel" style={{ display : this.state.programDetails ? 'block' : 'none' }}>
    				<p> Most Popular Programs</p>
    				{ top5Programs }
					<p> Other Programs Offered </p>
					{ otherPrograms }
				</div>
			</div>
    		<div className="col-12">
    			<button className="save-college-btn"> Save College</button>
    		</div>
    			<p className="return-search new-search center"><a href="#"> return to search </a></p>
   		</div>
   	</section>
   	</div>
	)
  }
}


const mapStateToProps = state => ({
	college : state.exploreReducer.collegeDetail
})

export default connect(mapStateToProps)(CollegeDetails)

