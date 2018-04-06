import * as actions from '../actions';

const initialState = {
	searchProgramInput : [], 
	searchRegionInput : [], 
	searchStateInput : [], 
	searchCareerInput : [], 
	searchCareerStateInput : []

}

export const exploreReducer=(state = initialState, action) => {

 if (action.type === actions.GET_COLLEGE_INPUT){
		console.log(action.results);
		return Object.assign({}, state, {
				searchProgramInput : action.results[0],
				searchStateInput : action.results[1],
				searchRegionInput : action.results[2]
		})		

	} else if (action.type === actions.GET_CAREER_INPUT) {
		console.log(action.results[0]);
		return Object.assign({}, state, {
			searchCareerInput : action.results[0], 
			searchCareerStateInput : action.results[1]
		})		
	}

	return state;
}
