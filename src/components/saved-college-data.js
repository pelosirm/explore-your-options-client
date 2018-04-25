import React from 'react';
import { Field } from 'redux-form'
import Input from './input';



const RenderSavedCollegeData = (props)=> {
	const savedCollege =props.colleges.map((college,index)=>(
		<label key={index} className='custom-radio'>
			<Field name="college" component={Input} type="radio" value={college._id}/>
			{ college.INSTNM }
			<span className="checkmark"></span>
		</label>
	
	));

	return savedCollege;

}


export default RenderSavedCollegeData 
