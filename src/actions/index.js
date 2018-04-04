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
		})
		.catch(err=>{
			dispatch(getCollegeInputError(err))
		})
}