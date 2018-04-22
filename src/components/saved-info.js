import React from 'react';
import { connect } from 'react-redux'
import Navigation from './nav';

import * as actions from '../actions/saved-info';
import RenderSavedCareerData from './saved-info-data';
import RenderSavedCollegeData from './saved-college-data';

export class SavedInfo extends React.Component{

	componentWillMount(){
		debugger
		this.props.dispatch(actions.getUserData({ user: this.props.user}))
	}

	render(){
		const careers = this.props.userSavedData[1]
		const colleges = this.props.userSavedData[0]
		return(
			<div>
				<Navigation />
				    <section className="saved-options">
						<div className="row">
							<div className="col-12">
								<h1> Saved Info </h1>
								<p className="divide"> select one career and one college to compare return on investment </p>
								<p className="divide orange"> careers </p>
								{ careers ? <RenderSavedCareerData careers={careers} /> : null}
								<p className="divide orange"> colleges</p>
								{ colleges ? <RenderSavedCollegeData colleges={colleges} /> : null}
							</div>
						</div>
					</section>
			</div>
			)
		}
		

	}


const mapStateToProps = state => ({
	user : state.exploreReducer.user, 
	userSavedData : state.exploreReducer.userSavedData
})

export default connect(mapStateToProps)(SavedInfo)