import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navigation from './nav';

export class CollegeResults extends React.Component{

	render() {
		return(
				<h1>Search Results </h1><div class="row">
					for(let i=0; i< results.length; i++) {
						<div class="col-3">
       						<p><span class="heavy emphasis">${results[i].INSTNM}</span><br><span class="light"> ${results[i].CITY}, ${results[i].STABBR}</span></p>
       						<ul>
        						<li><span class="heavy">Average Annual Cost:</span> $${numberWithCommas(results[i].NPT4)}</li>
        						<li><span class="heavy"> Graduation Rate:</span> ${Math.round(results[i].C150_L4_POOLED_SUPP * 100)}% </li>
       							<li><span class="heavy">Average Debt:</span> $${numberWithCommas(results[i].GRAD_DEBT_MDN_SUPP)}</li>
       						</ul>
       						<p class="more-details heavy"><a href="#" id=${results[i]._id}>More Details</a> </p>
        				</div>
						if ( i && ((i+1) % 3 === 0)) {
							</div><div class="row">
						} else if ((i+1) === results.length) {
							</div>
							<p class="new-search center"><a href="#"> new search </a></p>`
						}
	}

			) 
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(CollegeResults)