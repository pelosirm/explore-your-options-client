import history from '../history'
import * as message from './display-message';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = (results,username) => ({
	type: CREATE_USER_SUCCESS, 
	results, 
	username
})

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = results => ({
	type: CREATE_USER_ERROR,
	results
})



export const createUser = user => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/users/create', {
            method: 'POST',
            body: JSON.stringify(user),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
            	dispatch(message.displayMessage('Oops! something went wrong'))
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(createUserSuccess(response,user.username))
			history.push('/search-page')
			return response
		})

}


export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (results,username) => ({
	type: LOGIN_USER_SUCCESS, 
	results, 
	username
})

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = results => ({
	type: LOGIN_USER_ERROR,
	results
})



export const loginUser = user => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
            	dispatch(message.displayMessage('Oops! something went wrong'))
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(loginUserSuccess(response,user.username))
			history.push('/search-page')
			return response
		})

}

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
	type: LOGOUT_USER
})

export const logoutUserRedirect = () => dispatch => {
	console.log('logout fired')
	dispatch(logoutUser())
	history.push('/')

}