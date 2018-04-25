import React from 'react';
import { Field } from 'redux-form';

const RenderSavedCareerData = (props)=> {
	const savedCareer =props.careers.map((career,index)=>(
		<label key={index} className='custom-radio'> { career.career }
			<Field name="career" component="input" type="radio" value={career._id}/>
			<a href="#" className="modal_trigger info"><i class="fas fa-info"></i></a><a href="#" class="delete"><i class="fas fa-times"></i></a>
			<span className="checkmark"></span>
		</label>
	));

	return savedCareer
}

export default RenderSavedCareerData
