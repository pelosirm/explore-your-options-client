import React from 'react';

const RenderSavedCollegeData = (props)=> {

	const savedCollege =props.colleges.map((college,index)=>(
		<label className="checkbox-container" id={college._id} key={index}>{college.INSTNM}<a href="#" className="modal_trigger info"><i className="fas fa-info"></i></a><a href="#" className="delete"><i className="fas fa-times"></i></a>
		<input type="checkbox" nameName="college" /><span className="checkmark"></span></label>
	));

	return savedCollege;

}


export default RenderSavedCollegeData 