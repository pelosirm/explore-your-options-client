import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Navigation from './nav';

import * as actions from '../actions/saved-info';
import * as compareData from '../actions/compare';
import RenderSavedCareerData from './saved-info-data';
import RenderSavedCollegeData from './saved-college-data';
import CheckboxGroup from './checkbox-group'

export class SavedInfo extends React.Component{



	componentWillMount(){
		debugger
		this.props.dispatch(actions.getUserData({ user: this.props.user}))
	}

	onSubmit(values){
		console.log(values)
		this.props.dispatch(compareData.getCompareData(values))
	}

	handleCareerChange(e){
		debugger
	}

	deleteCollege(e){
			debugger
	}


	render(){
		const careers = this.props.userSavedData[1]
		const colleges = this.props.userSavedData[0]
		let options = ''




		if(careers){
			options = careers.map((career,index)=>{
			return { 'label' : career.career,
			  'value' : career._id, 'id':career._id }
			})
		}

		return(
			<div>
				<Navigation />
				    <section className="saved-options">
						<div className="row">
							<div className="col-12">
								<h1> Saved Info </h1>
								<p className="divide"> select one career and one college to compare return on investment </p>
					
								<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
								)}> 
									<p className="divide orange"> careers </p>
									{ colleges ? <RenderSavedCareerData careers={careers} deleteCollege={this.deleteCollege()} /> : null}
									<p className="divide orange"> colleges</p>
									{ colleges ? <RenderSavedCollegeData colleges={colleges} /> : null}
		                		<button
		                    		type="submit"
		                    		disabled={this.props.pristine || this.props.submitting}>
		                    		Submit
		                		</button>
		                		</form>
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

SavedInfo = connect(mapStateToProps)(SavedInfo)

export default reduxForm({
	form: 'compare'
})(SavedInfo)


