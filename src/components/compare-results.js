import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navigation from './nav'
export class Compare extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let results = this.props.compareResults
		let calculationData = {}

		if(results[0][0]["st_a_median"] === 'No data' || results[0][0]["st_a_median"] === ''){
		 	let salary = results[0][0]['nat_a_median'].replace(',','')
			calculationData.salary = parseInt(salary)
		} else {
			let salaryNat = results[0][0]['st_a_median'].replace(',','')
			calculationData.salary = parseInt(salaryNat)
		}

		let interval;
		if(results[1][0]['HIGHDEG'] === 2){
			interval = 2
		} else {
			interval = 4
		}

		let ROI = ((calculationData.salary * 20) - 827136 - (results[1][0]['NPT4'] * interval))

		return(
			<div>
				<Navigation />
				<section className="comparison">
					<div className="row">
						<div className="col-12">
							<p><span className="light">as a </span><span className="heavy emphasis orange">{results[0][0]['career']}</span>
								<br></br>
								<span className="light"> attending</span>
								<span className="heavy emphasis orange"> {results[1][0]['INSTNM']} </span>
							</p>
							<p><span className="light"> return on investment over 20 years: </span>
								<br></br>
								<span className="heavy emphasis orange">{ROI}</span>
							</p>
						</div>
					</div>
					<p className="new-search center back"><Link to='/saved-info'> back </Link>
					</p>
				</section>
			</div>

		)
	}
}

const mapStateToProps = state => ({
	compareResults : state.exploreReducer.compareResults
})

Compare = connect(mapStateToProps)(Compare);

export default Compare


