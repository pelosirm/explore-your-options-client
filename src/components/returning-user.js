import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import { required, nonEmpty } from '../validators';
import Input from './input';

export class ReturningUser extends React.Component{
	onSubmit(values) {
		console.log(values)
	}
	render(){
		let successMessage;

		if(this.props.submitSucceeded) {
			successMessage = (
					<div className="message message-success">
						Message submitted successfully
					</div>
				);
		}

		let errorMessage; 
		if(this.props.error) {
			errorMessage = (
				<div className="message message-error"> { this.props.error } </div>
			)
		}
		return(
			<section className="sign-up">
		        <div className="login input-square returning-user">
		            <form className="form-returning-user"
		            	onSubmit={this.props.handleSubmit(values => 
		            		this.onSubmit(values)
		            	)}>
		            	{ successMessage }
		            	{ errorMessage }
		                <legend> Login </legend>
		                <p class='demo-user'> for demo username : 'demo' password : 'demo' </p>
		                <Field 
		                	name="username"
		                	placeholder="username"
		                	type="text"
		                	component={Input}
		                	validate={[required,nonEmpty]}
		                />
		                <Field 
		                	name="password"
		                	placeholder="password"
		                	type="password"
		                	component={Input}
		                	validate={[required,nonEmpty]}
		                />
		                <button
                    		type="submit"
                    		disabled={this.props.pristine || this.props.submitting}>
                    		Submit
                		</button>
		                <p> not a user?<Link to="/sign-up" className="nav-sign-up"> create a login</Link></p>
		            </form>
		        </div>
		    </section>
		);
	}
}

export default reduxForm({
    form: 'contact',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(ReturningUser);