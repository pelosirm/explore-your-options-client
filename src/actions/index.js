export const GET_CAREER_INPUT = 'GET_CAREER_INPUT'; 
export const getCareerInput = results => ({
	type: GET_CAREER_INPUT, 
	results
})

export const GET_CAREER_INPUT_ERROR = 'GET_CAREER_INPUT_ERROR';
export const getCareerInputError = error => ({
	type: GET_CAREER_INPUT_ERROR, 
	error
})


export const getCareerInputCall = () => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/jobs')
		.then(res=> {
			if(!res.ok){
				return Promise.reject(res.statusText)
			}

			return res.json();
		})
		.then(results =>{
			dispatch(getCareerInput(results));
		})
		.catch(err=>{
				dispatch(getCareerInput(err))
			})
		}

export const GET_COLLEGE_INPUT = 'GET_COLLEGE_INPUT';
export const getCollegeInput = results => ({
	type : GET_COLLEGE_INPUT, 
	results
})

export const GET_COLLEGE_INPUT_ERROR = 'GET_COLLEGE_INPUT_ERROR';
export const getCollegeInputError = error => ({
	type: GET_COLLEGE_INPUT_ERROR, 
	error
})

export const getCollegeInputCall = () => dispatch => {
	fetch('https://explore-your-options.herokuapp.com/college')
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(collegeInfo => {
			dispatch(getCollegeInput(collegeInfo))
			return collegeInfo
		})
		.catch(err=>{
			dispatch(getCollegeInputError(err))
			const message = {
				message: err
			}
			return message;
		})
}

export const CAREER_QUERY_SUCCESS = 'CAREER_QUERY_SUCCESS';
export const careerQuerySuccess = (results,state) => ({
	type: CAREER_QUERY_SUCCESS, 
	results, 
	state
})

export const CAREER_QUERY_ERROR = 'CAREER_QUERY_ERROR';
export const careerQueryError = results => ({
	type: CAREER_QUERY_ERROR,
	results
})

export const getCareerQueryCall = (search) => dispatch => {
	fetch(`https://explore-your-options.herokuapp.com/career-search/?career=${search.career}&state=${search.state}`)
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(careers => {
			dispatch(careerQuerySuccess(careers,search.state))
			return careers
		})
		.catch(err=>{
			dispatch(careerQueryError(err))
			const message = {
				message: err
			}
			return message;
		})
}


export const COLLEGE_QUERY_SUCCESS = 'COLLEGE_QUERY_SUCCESS';
export const collegeQuerySuccess = (results,state) => ({
	type: CAREER_QUERY_SUCCESS, 
	results, 
	state
})

export const COLLEGE_QUERY_ERROR = 'COLLEGE_QUERY_ERROR';
export const collegeQueryError = results => ({
	type: CAREER_QUERY_ERROR,
	results
})

export const getCollegeQueryCall = (search) => dispatch => {
	fetch(`https://explore-your-options.herokuapp.com/career-search/?career=${search.career}&state=${search.state}`)
		.then(res=>{
			if(!res.ok){
				return Promise.reject(res.statusText)
			}
			return res.json();
		})
		.then(careers => {
			dispatch(collegeQuerySuccess(careers,search.state))
			return careers
		})
		.catch(err=>{
			dispatch(collegeQueryError(err))
			const message = {
				message: err
			}
			return message;
		})
}