import React from 'react';

const RenderSavedCareerData = (props)=> {
	debugger
	console.log(props)

	for(let i =0; i< props.careers.length; i++){
		<label className="checkbox-container" id={props.careers[i]._id}>{props.careers[i].career}<a href="#" className="modal_trigger info"><i class="fas fa-info"></i></a><a href="#" class="delete"><i class="fas fa-times"></i></a>
			<input type="checkbox" name='career'>
			<span className="checkmark"></span></input></label>
			
	}

}

export default RenderSavedCareerData
