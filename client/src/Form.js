import React from 'react';

class Form extends React.Component {

    constructor () {
      super();
      this.state = {
				yourName: '',
				student: '',
				contactName: '',
        companyName: '',
        companyCategory: [
            {value: '', displayValue: ''},
            {value: 'bigN', displayValue: 'Big N'},
            {value: 'finTech', displayValue: 'FinTech'},
            {value: 'healthcare', displayValue: 'Health Care'},
            {value: 'edu', displayValue: 'Education'},
            {value: 'service', displayValue: 'Service'},
            {value: 'ecommerce', displayValue: 'E-Commerce'},
            {value: 'non-tech', displayValue: 'Non Tech'}
        ],
        school: '',
        year: [
            {value: '', displayValue: ''},
            {value: 4, displayValue: 'Senior'},
            {value: 3, displayValue: 'Junior'},
            {value: 2, displayValue: 'Sophomore'},
            {value: 1, displayValue: 'Freshman'},
            {value: 'NaN', displayValue: 'Not Applicable'}
        ],
        languages: '',
        skills: '',
        workingExperience: '',
        projectExperience: '',
        phoneNumber: '',
        websiteLink: ''
    	};
			this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (event) {
      this.setState({ [event.target.name]: event.target.value });
		}
		
		handleSubmit(event) {
			event.preventDefault();
		}	
    
    render () {
			let studentRender = null;
			if (this.state.student === 'true') {
				studentRender = 	<div>				
				<div>
					<label>School: </label>
					<input type="text" name="school" onChange={this.handleChange} />
				</div>

				<div>
					<label>Year in School: </label>
					<select
						name="year" 			
						value={this.state.year[0]}
						onChange={this.handleChange}>
							{this.state.year.map(option => (
								<option value={option.value}>{option.displayValue}</option>
							))}
						</select>
				</div>
			</div>	
			}
      return (
				<div>
        	<form onSubmit={this.handleSubmit}>
						<div>
        			<label>Your Name: </label>
							<input type="text" name="name" onChange={this.handleChange} />
						</div>

						<div>
							<label>Are you a student? </label>
							<label>
            		<input
									name="student"
									type="radio"
              		value="true"
              		checked={this.state.student === "true"}
              		onChange={this.handleChange}
            		/>
            		Yes
          		</label>
							<label>
            		<input
									name="student"
									type="radio"
              		value="false"
              		checked={this.state.student === "false"}
              		onChange={this.handleChange}
            		/>
            		No
          		</label>
						</div>
						{studentRender}
						{/* <div>
							<label>School: </label>
							<input type="text" name="school" onChange={this.handleChange} />
						</div>

						<div>
							<label>Year in School: </label>
							<select 
                            value={this.state.year[0]}
                            onChange={this.handleChange}>
                            {this.state.year.map(option => (
                                <option value={option.value}>{option.displayValue}</option>
                            ))}
                        </select>
						</div> */}

						<div>
							<label>Contact Name: </label>
							<input type="text" name="name" onChange={this.handleChange} />
						</div>

						<div>
							<label>Company Name: </label>
							<input type="text" name="companyName" onChange={this.handleChange} />
						</div>

						<div>
							<label>Company Type: </label>
							<select value={this.state.value} onChange={this.handleChange}>
								{this.state.companyCategory.map(option => (
                	<option key={option.id} value={option.value}>{option.displayValue}</option>
              	))}
							</select>
						</div>

						<div>
							<label>Languages: </label>
							<input type="text" name="languages" onChange={this.handleChange} />
						</div>

						<div>
							<label>Skills: </label>
							<input type="text" name="skills" onChange={this.handleChange} />
						</div>

						<div>
							<label>Working Experience: </label>
							<input type="text" name="workingExperience" onChange={this.handleChange} />
						</div>

						<div>
							<label>Project Experience: </label>
							<input type="text" name="projectExperience" onChange={this.handleChange} />
						</div>

						<div>
							<label>Phone Number: </label>
							<input type="text" name="phoneNumber" onChange={this.handleChange} />
						</div>
						
						<div>
							<label>Website: </label>
							<input type="text" name="websiteLink" onChange={this.handleChange} />
						</div>
					</form>
				</div>
      );
    }
  }

export default Form;
