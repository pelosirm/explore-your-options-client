import React from 'react';
import { Field } from 'redux-form'
import Input from './input';



const RenderSavedCollegeData = (props)=> {
	console.log(props)
	const savedCollege =props.colleges.map((college,index)=>(
		<label key={index} className='custom-radio'> { college.INSTNM }
			<Field name="college" component="input" type="radio" value={college._id}/>
			<a href="#" className="modal_trigger info"><i class="fas fa-info"></i></a><a href="#" class="delete" onClick={(e)=>props.deleteCollege(e)}><i class="fas fa-times"></i></a>
			<span className="checkmark"></span>
		</label>
	
	));

	return savedCollege;

}


export default RenderSavedCollegeData 
