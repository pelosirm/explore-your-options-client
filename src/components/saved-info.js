import React from 'react';
import { connect } from 'react-redux'
import Navigation from './nav';

import * as actions from '../actions/saved-info';
import RenderSavedCareerData from './saved-info-data';
import RenderSavedCollegeData from './saved-college-data';

export class SavedInfo extends React.Component{

	componentWillMount(){
		this.props.dispatch(actions.getUserData({ user: this.props.user}))
	}

	render(){
		console.log(this.props.userSavedData)
		return(
			<div className="row">
				<div className="col-12">
					<h1> Saved Info </h1>
					<p className="divide"> select one career and one college to compare return on investment </p>
					<p className="divide orange"> careers </p>
					{this.props.userSavedData ? <RenderSavedCareerData careers={this.props.userSavedData[1]} /> : null}
					<p className="divide orange"> colleges</p>
					{this.props.userSavedData ? <RenderSavedCareerData colleges={this.props.userSavedData[0]} /> : null}
				</div>
			</div>

			)
		}
		

	}


const mapStateToProps = state => ({
	user : state.exploreReducer.user, 
	userSavedData : state.exploreReducer.userSavedData
})

export default connect(mapStateToProps)(SavedInfo)