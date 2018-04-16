import * as message from './display-message'

export const SAVE_CAREER_SUCCESS = 'SAVE_CAREER_SUCCESS';
export const saveCareerSuccess = (results) => ({
	type: SAVE_CAREER_SUCCESS, 
	results
})

export const SAVE_CAREER_ERROR = 'SAVE_CAREER_SUCCESS';
export const saveCareerError = results => ({
	type: SAVE_CAREER_ERROR,
	results
})

export const postCareerData = career => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(career),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
            	dispatch(message.displayMessageTimer('Oops! something went wrong'))
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(saveCareerSuccess(response))
			dispatch(message.displayMessageTimer(response))
			return response
		})

}

export const SAVE_COLLEGE_SUCCESS = 'SAVE_COLLEGE_SUCCESS';
export const saveCollegeSuccess = (results) => ({
	type: SAVE_COLLEGE_SUCCESS, 
	results
})

export const SAVE_COLLEGE_ERROR = 'SAVE_COLLEGE_SUCCESS';
export const saveCollegeError = results => ({
	type: SAVE_COLLEGE_ERROR,
	results
})

export const postCollegeData = college => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(college),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        }).then(res => {
            if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
        }).then(response => {
			dispatch(saveCollegeSuccess(response))
			return response
		})

}