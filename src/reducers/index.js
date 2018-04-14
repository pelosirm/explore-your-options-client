import * as actions from '../actions';
import * as user from '../actions/user';
import * as saveData from '../actions/save-data';
import * as message from '../actions/display-message'


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
	message:''

}

export const exploreReducer=(state = initialState, action) => {
 
 if (action.type === user.CREATE_USER_SUCCESS || action.type === user.LOGIN_USER_SUCCESS){
 	return Object.assign({}, state, {
		user : action.username,
		isAuthenticated : true
	})	
 } else if(action.type === message.DISPLAY_MESSAGE){
 	 return Object.assign({}, state, {
		message : message.message
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
					state : '', 
					nat_a_median : action.results[0].NAT_A_MEDIAN, 
					st_a_median : '-', 
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
	}

	return state;

}

