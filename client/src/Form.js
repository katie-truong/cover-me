import React from 'react';

class Form extends React.Component {

    constructor () {
      super();
      this.state = {
				yourName: '',
				student: '',
				contactName: '',
				howWeMet: '',
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
				companyMission: '',
				school: '',
				major: '',
        languages: '',
        skills: '',
        workingExperience: '',
        projectExperience: '',
        phoneNumber: '',
				websiteLink: '',
				submit: ''
    	};
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange (event) {
			// this.props.onUpdate(event.target.value);
			this.setState({ 
				submit: 'False',
				[event.target.name]: event.target.value 
			});
		}
		
		handleSubmit(event) {
			event.preventDefault();
			this.setState({
				submit: 'True'
			}, () => {
				let formData = {
					yourName: this.state.yourName,
					student: this.state.student,
					school: this.state.school,
					major: this.state.major,
					contactName: this.state.contactName,
					howWeMet: this.state.howWeMet,
					companyName: this.state.companyName,
					companyCategory: this.state.companyCategory,
					languages: this.state.languages,
					skills: this.state.skills,
					workingExperience: this.state.workingExperience,
					projectExperience: this.state.projectExperience,
					phoneNumber: this.state.phoneNumber,
					websiteLink: this.state.websiteLink,
					submit: this.state.submit
				};
				this.props.handleSubmitButtonClick(formData);
			})
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
					<label>Major: </label>
					<input type="text" name="major" onChange={this.handleChange} />
				</div>
			</div>	
			}
      return (
				<div>
        	<form onSubmit={this.handleSubmit}>
						<div>
        			<label>Your Name: </label>
							<input 
								type="text" 
								name="yourName" 
								onChange={this.handleChange} 
								value={this.state.name}/>
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

						<div>
							<label>Contact Name: </label>
							<input type="text" name="contactName" onChange={this.handleChange} />
						</div>

						<div>
							<label>How We Met: </label>
							<input type="text" name="howWeMet" onChange={this.handleChange}></input>
						</div>

						<div>
							<label>Company Name: </label>
							<input type="text" name="companyName" onChange={this.handleChange} />
						</div>

						<div>
							<label>Company Type: </label>
							<select value={this.state.value} onChange={this.handleChange}>
								{this.state.companyCategory.map((option, index) => (
                	<option key={index} value={option.value}>{option.displayValue}</option>
								))}
							</select>
						</div>

						<div>
							<label>Company Mission: </label>
							<input type="text" name="companyMission" onChange={this.handleChange} />
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
						<input type="submit" value="Submit" />
					</form>
				</div>
      );
    }
  }

export default Form;
