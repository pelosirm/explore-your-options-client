import React from 'react';
import { Field, reduxForm, formValueSelector, change, actionCreators } from 'redux-form';
import { connect,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import  * as actions from '../actions';

const formSelector = formValueSelector('form');

export class RegionDropDownSelect extends React.Component {


	componentWillMount(){
    	this.props.dispatch(actions.getCollegeInputCall())
  
  	}


  	onFormChange(e) {
  		const { name } = e.target
  		if(name === 'region'){
  			this.props.dispatch(change('collegeSelect', 'state', null))
  		} else if ( name === 'state'){
  			this.props.dispatch(change('collegeSelect', 'region', null))
  		}
	}

	onSubmit(values){
		let querySet = values 
		querySet.speciality = '01'+values.speciality
		this.props.dispatch(actions.getCollegeQueryCall(querySet))
	}

	render(){
		console.log(searchProgram)

		const searchRegion = this.props.searchRegionInput.map((region,index)=>(
			<option value={region.CODE} key={index}> {region.REGION} </option>
		))

		const searchProgram=this.props.searchProgramInput.map((program,index)=>(
			<option value={program.PROGRAM} key={index}> {program.PROGRAM} </option>
		));

		const searchStateInput=this.props.searchStateInput.map((state,index)=>(
			<option value={state.Abbreviation} key={index}>{state.State}</option>
		));


		return(
			<form className="form-search-colleges"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)} onChange={(e)=>this.onFormChange(e)}>
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
											id="region-select"
											name="region"
											component="select"
											type="select"
											valuefield="value"
											textfield="region">
											<option value='undefined'> Select Region </option>
											{ searchRegion }
										</Field>
									</div>
									<div className="select">
										<Field 
											id="state-select"
											name="state"
											component="select"
											type="select"
											valuefield="value"
											textfield="state">
											<option value='undefined'> Select State </option>
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
    searchProgramInput : state.exploreReducer.searchProgramInput, 
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
     	change : change
    }, dispatch)
  };
}


RegionDropDownSelect = connect(mapStateToProps,mapDispatchToProps)(RegionDropDownSelect);

export default reduxForm({
	form: 'collegeSelect'
})(RegionDropDownSelect)

