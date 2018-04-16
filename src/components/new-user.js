import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import {required, nonEmpty} from '../validators';
import { Link } from 'react-router-dom'
import Input from './input';
import * as user from '../actions/user'

export class NewUser extends React.Component{
	onSubmit(values){
        this.props.dispatch(user.createUser(values))
	}

	render(){
		let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

		return(
			<section className="sign-up">
				<div class="login input-square create-new">
		            <form class="form-create-new"
		            	onSubmit={this.props.handleSubmit(values =>
		            		this.onSubmit(values)
		            	)}>
		            	{successMessage}
                		{errorMessage}
		                <legend> Create New User </legend>
		                <Field
                    		name="username"
                    		placeholder="username"
                    		type="text"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<Field
                    		name="password"
                    		type="password"
                    		placeholder="password"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<Field
                    		name="confirmPassword"
                    		type="password"
                    		placeholder="confirm password"
                   			component={Input}
                    		validate={[required, nonEmpty]}
                		/>
                		<button
                    		type="submit"
                    		disabled={this.props.pristine || this.props.submitting}>
                    		Submit
                		</button>
		                <p> already a user? <Link to="/sign-in" class="nav-login">login</Link></p>
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
})(NewUser);