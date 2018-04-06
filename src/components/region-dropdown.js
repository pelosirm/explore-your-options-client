import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { getCollegeInputCall } from '../actions';
import Input from './input'
import 'react-widgets/dist/css/react-widgets.css'

class RegionDropDownSelect extends React.Component {

	constructor(props){
		super(props);
		autoBind(this);
	}

	componentWillMount(){
    	this.props.dispatch(getCollegeInputCall())
  	}

	onSubmit(values){
		console.log(values)
	}

	render(){

		const searchRegionInput = [{ region : 'Northeast', value : 2}, {region: 'Southeast',value : 3}]

		const searchRegion = searchRegionInput.map((region,index)=>(
			{ region : region.REGION, value : region.CODE }

		));

		
		console.log(searchRegionInput)

		return(
			<form class="form-search-colleges"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)}>
			            		<legend> Search Colleges </legend>
			            		<div class="center-on-page">
			            			<div class="select">
										<Field 
											name="region"
											component="select"
											type = "select"
											valueField="value"
											textField = "region">
											{ searchRegion }
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
const mapStateToProps = state => (
  {
  searchRegionInput : state.searchRegionInput, 
}
)

const mapDispatchToProps = (dispatch) => {
	return {
		getCollegeInputCall : dispatch(getCollegeInputCall())
	}
}

RegionDropDownSelect = connect(mapStateToProps, mapDispatchToProps)(RegionDropDownSelect)

export default reduxForm({
	form: 'college-select'
})(RegionDropDownSelect)