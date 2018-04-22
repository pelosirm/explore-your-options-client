import React from 'react';

const RenderSavedCareerData = (props)=> {

	const savedCareer =props.careers.map((career,index)=>(
		<label className="checkbox-container" id={career._id} key={index}>{career.career}<a href="#" className="modal_trigger info"><i class="fas fa-info"></i></a><a href="#" class="delete"><i class="fas fa-times"></i></a>
			<input type="checkbox" name='career' />
			<span className="checkmark"></span></label>
	));

	return savedCareer
}

export default RenderSavedCareerData
