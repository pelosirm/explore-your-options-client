import React from 'react';

const RenderSavedCollegeData = (props)=> {

	for(let i =0; i< props.colleges.length; i++){
		<label class="checkbox-container" id={props.colleges[i]._id}>{props.colleges[i].INSTNM}<a href="#" className="modal_trigger info"><i className="fas fa-info"></i></a><a href="#" className="delete"><i className="fas fa-times"></i></a>
			<input type="checkbox" nameName="college"><span className="checkmark"></span></input></label>
			
	}

}


export default RenderSavedCollegeData 