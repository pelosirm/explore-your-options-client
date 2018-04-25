import React from 'react';

const RenderSavedCareerData = (props)=> {
	debugger

	const savedCareer =props.careers.map((career,index)=>(
		<label className="checkbox-container" key={index}>{career.career}<a href="#" className="modal_trigger info"><i class="fas fa-info"></i></a><a href="#" class="delete"><i class="fas fa-times"></i></a>
			<input id={career._id} type="checkbox" name='career' onChange = {(e)=>props.handleCareerChange(e)}/>
			<span className="checkmark"></span></label>
	));

	return savedCareer
}

export default RenderSavedCareerData
