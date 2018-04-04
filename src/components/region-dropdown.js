import React from 'react';
import { getCollegeInputCall } from '../actions';
import { connect } from 'react-redux';

class RegionDropDownSelect extends React.Component {

	componentWillMount() {
		this.props.dispatch(getCollegeInputCall());
	}

	render() {
		const searchRegionInput = this.props.searchRegionInput.map((region,index)=>(
			<option value={region.CODE} key = {index}> {region.REGION} </option>
		));

		return(){
				<div class="select">
					<select name="region" id="region-select">
						<option>Select Region</option>
							{ searchRegionInput }
					</select>
				</div>
		}
	}

}

const mapStateToProps = state => ({
	searchProgramInput : state.searchProgramInput, 
})

export default connect(mapStateToProps)(RegionDropDownSelect)