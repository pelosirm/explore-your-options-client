import * as actions from '../actions';
import * as user from '../actions/user';
import * as saveData from '../actions/save-data';
import * as message from '../actions/display-message'
import * as savedInfo from '../actions/saved-info'

const initialState = {
	searchProgramInput : [], 
	searchRegionInput : [], 
	searchStateInput : [], 
	searchCareerInput : [], 
	searchCareerStateInput : [],
	searchCareerResults : {}, 
	user : '', 
	isAuthenticated : false, 
	savedCareer : false, 
	message:'', 
	userSavedData : [], 
	searchCollegeResults : [], 
	collegeDetail : {}

}

export const exploreReducer=(state = initialState, action) => {
 
 if (action.type === user.CREATE_USER_SUCCESS || action.type === user.LOGIN_USER_SUCCESS){
 	return Object.assign({}, state, {
		user : action.username,
		isAuthenticated : true
	})	
 } else if(action.type === message.DISPLAY_MESSAGE){
 	 console.log(message.message)
 	 return Object.assign({}, state, {
		message : action.message
	})

 } else if (action.type === message.HIDE_DISPLAY_MESSAGE){
 	 return Object.assign({}, state, {
		message : ''
	})
	}	
 	else if (action.type === actions.GET_COLLEGE_INPUT){
		const output = Object.assign({}, state, {
				searchProgramInput : action.results[0],
				searchStateInput : action.results[1],
				searchRegionInput : action.results[2]
		})		
		return output;
	

	} else if (action.type === actions.GET_CAREER_INPUT) {
		console.log(action.results[0]);
		return Object.assign({}, state, {
			searchCareerInput : action.results[0], 
			searchCareerStateInput : action.results[1]
		})		
	} else if (action.type === actions.CAREER_QUERY_SUCCESS) {
		console.log(action.results)
		if(!action.results[1]){
			return Object.assign({},state,{
				searchCareerResults : {
					career : action.results[0].OCC_TITLE, 
					state : action.state, 
					nat_a_median : action.results[0].NAT_A_MEDIAN, 
					st_a_median : 'No Data', 
					education : action.results[0].EDUCATION, 
					experience : action.results[0].WORK_EXPERIENCE

				}
			})
		} else {
			const output = 
			 Object.assign({},state,{
				searchCareerResults : {
					career : action.results[0].OCC_TITLE, 
					state : action.results[1].STATE, 
					nat_a_median : action.results[0].NAT_A_MEDIAN, 
					st_a_median : action.results[1].A_MEDIAN, 
					education : action.results[0].EDUCATION, 
					experience : action.results[0].WORK_EXPERIENCE

				}
			})
			console.log(output)
			return output
		}
	} else if ( action.type === saveData.SAVE_CAREER_SUCCESS) {
		return Object.assign({}, state, {
			savedCareer : true 
		})
	} else if (action.type === actions.COLLEGE_QUERY_SUCCESS){
	
		return Object.assign({}, state, {
			searchCollegeResults : action.results
		})

	} else if (action.type === actions.COLLEGE_DETAIL_QUERY_SUCCESS){
			let college = action.results
			debugger

			let tags = []
			let speciality = []

			tags.push(college.CONTROL)

			//interate through tags

			if(college.RELAFFIL !== 'NULL') {
				tags.push(college.RELAFFIL)
			}

			if(college.HBCU === 1){
				tags.push('Historically Black Colleges')
			}

			if(college.PBI === 1) {
				tags.push('Predominantly Black Institution')
			}

			if(college.ANNHI === 1){
				tags.push('Alaska Native Native Hawaiian serving institution')
			}

			if(college.TRIBAL === 1) {
				tags.push('tribal college and university')
			}

			if(college.AANAPII === 1){
				tags.push('Asian American Native American Pacific Islander-serving institution')
			}

			if(college.HSI === 1){
				tags.push('Hispanic-serving institution')
			}

			if(college.NANTI === 1){
				tags.push('Native American non-tribal institution')
			}

			if(college.MENONLY === 1){
				tags.push('Men Only')
			}

			if(college.WOMENONLY === 1){
				tags.push('Women Only')
			}


			for(let prop in college){
				if(prop.match(/01/)){
					speciality.push([prop.slice(2),(Math.round(college[prop]*100))])
				}

			}

			//arrange specialties by popularity
			speciality.sort(function(a,b){
				return b[1] - a[1]
			})

			college.tags = tags 
			college.speciality = speciality
			
			return Object.assign({}, state, {
				collegeDetail : college
			})
	}

		else if (action.type === savedInfo.GET_USER_DATA_SUCCESS){
		console.log(savedInfo.results)
		debugger
		return Object.assign({}, state, {
			userSavedData : action.results
		})
	} else if (action.type === user.LOGOUT_USER) {
		console.log('logged out')
		return Object.assign({}, state, {
			user : '', 
			isAuthenticated : false 
		})
	} 

	return state;

}

