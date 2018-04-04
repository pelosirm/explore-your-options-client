import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import { required, nonEmpty } from '../validators';
import Input from './input';
import RegionDropDownSelect from '/region-dropdown'

export class SearchCollegesForm extends React.Component{
	onSubmit(values){
		console.log(values)
	}

	render(){
		let successMessage;
		if(this.props.submitSucceded) {
			successMessage = (
				<div className="message message-success">
					Message submitted successfully
				</div>
			)
		}

		let errorMessage; 
		if (this.props.error) {
			errorMessage = (
				<div className="message message-error"> { this.props.error } </div>
			);
		}

		return(
			<form class="form-search-colleges"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
						)}>
			            		<legend> Search Colleges </legend>
			            		<div class="center-on-page">
			            			<div class="select">
									<Field 
										name="region"
										component = { RegionDropDownSelect }
									</Field>
								</div>
								<input type="submit" value="Submit"></input>
						</form>
					)
	}
}