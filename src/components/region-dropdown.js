import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import 'react-widgets/dist/css/react-widgets.css'

export class RegionDropDownSelect extends React.Component {


	componentWillMount(){
    	this.props.dispatch(actions.getCollegeInputCall())

  	}

	onSubmit(values){
		console.log(values)
	}

	render(){

		const searchRegion = this.props.searchRegionInput.map((region,index)=>(
			<option value={region.CODE} key={index}> {region.REGION} </option>
		))

		const searchProgram= this.props.searchProgramInput.map((program,index)=>(
			<option value={program.PROGRAM} key = {index}> {program.PROGRAM} </option>
		));

		const searchStateInput = this.props.searchStateInput.map((state,index)=>(
			<option value ={state.Abbreviation} key={index}>{state.State}</option>
		));




		return(
			<form className="form-search-colleges"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)}>
			            		<legend> Search Colleges </legend>
			            		<div className="center-on-page">
			            			<div className="select">
			            				<Field 
											name="degree"
											component="select"
											type="select"
											valuefield="value"
											textfield="degree">
											<option>Select Degree</option>
											<option value="2">Associates</option>
											<option value="3,4">Bachelors</option>
										</Field>
									</div>
									<div className="select">
										<Field 
											name="speciality"
											component="select"
											type="select"
											valuefield="value"
											textfield="program">
											<option>Select Speciality</option>
											{ searchProgram }
										</Field>
									</div>
									<div className="select">
										<Field 
											name="region"
											component="select"
											type="select"
											valuefield="value"
											textfield="region">
											<option> Select Region </option>
											{ searchRegion }
										</Field>
									</div>
									<div className="select">
										<Field 
											name="state"
											component="select"
											type="select"
											valuefield="value"
											textfield="state">
											<option> Select State </option>
											{ searchStateInput }
										</Field>
									</div>
								</div>
								<button
		                    		type="submit"
		                    		disabled={this.props.pristine || this.props.submitting}>
		                    		Submit
		                		</button>
						</form>
					)
	}

}


const mapStateToProps = state => ({ 
    searchRegionInput : state.exploreReducer.searchRegionInput, 
    searchStateInput : state.exploreReducer.searchStateInput, 
    searchProgramInput : state.exploreReducer.searchProgramInput
});

RegionDropDownSelect = connect(mapStateToProps)(RegionDropDownSelect);

export default reduxForm({
	form: 'college-select'
})(RegionDropDownSelect)

