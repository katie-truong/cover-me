import React from 'react';

class Form extends React.Component {

    constructor () {
      super();
      this.state = {
				yourName: '',
				student: 'true',
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
				position: '',
				companyMission: ``,
				school: '',
				major: '',
				minor: '',
				title: '',
        languages: '',
				skills: '',
				primaryFocus: '',
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
					minor: this.state.minor,
					title: this.state.title,
					contactName: this.state.contactName,
					howWeMet: this.state.howWeMet,
					companyName: this.state.companyName,
					companyCategory: this.state.companyCategory,
					companyMission: this.state.companyMission,
					position: this.state.position,
					languages: this.state.languages,
					skills: this.state.skills,
					primaryFocus: this.state.primaryFocus,
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
					<input 
						type="text" 
						name="school" 
						// defaultValue="University of Maryland"
						onChange={this.handleChange} />
				</div>

				<div>
					<label>Major: </label>
					<input 
						type="text" 
						name="major"
						// defaultValue="Computer Science" 
						onChange={this.handleChange} />
				</div>

				<div>
					<label>Minor: </label>
					<input 
						type="text" 
						name="minor"
						// defaultValue="Math" 
						onChange={this.handleChange} />
				</div>
			</div>	
			} else if (this.state.student === 'false') {
				studentRender = <div>
					<div>
						<label>Job Title: </label>
						<input type="text" name="title" onChange={this.handleChange} />
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
								// defaultValue="Kevin" 
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
							<input 
								type="text" 
								name="contactName" 
								onChange={this.handleChange}
								// defaultValue="Nathan" 
								value={this.state.contactName}/>
						</div>

						{/* <div>
							<label>How We Met: </label>
							<input type="text" name="howWeMet" onChange={this.handleChange}></input>
						</div> */}

						<div>
							<label>Company Name: </label>
							<input 
								type="text" 
								name="companyName" 
								onChange={this.handleChange} 
								value={this.props.companyName}
								// defaultValue="Google"
							/>
						</div>

						{/* <div>
							<label>Company Type: </label>
							<select value={this.state.value} onChange={this.handleChange}>
								{this.state.companyCategory.map((option, index) => (
                	<option key={index} value={option.value}>{option.displayValue}</option>
								))}
							</select>
						</div> */}

						<div>
							<label>Position: </label>
							<input 
								type="text" 
								name="position" 
								onChange={this.handleChange} 
								value={this.props.position}
								// defaultValue="Software Engineer"
							/>
						</div>

						<div>
							<label>Company Mission: </label>
							<input 
								type="text" 
								name="companyMission" 
								onChange={this.handleChange} 
								value={this.props.companyMission}
								// defaultValue="to organize the world's information and make it universally accessible and useful"
							/>
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
							<label>Primary Focus: </label>
							<input type="text" name="primaryFocus" onChange={this.handleChange} />
						</div>

						<div>
							<label>Working Experience: </label>
							<input type="text" name="workingExperience" onChange={this.handleChange} />
						</div>

						<div>
							<label>Project Experience: </label>
							<input type="text" name="projectExperience" onChange={this.handleChange} />
						</div>

						{/* <div>
							<label>Phone Number: </label>
							<input type="text" name="phoneNumber" onChange={this.handleChange} />
						</div> */}
						
						{/* <div>
							<label>Website: </label>
							<input type="text" name="websiteLink" onChange={this.handleChange} />
						</div> */}
						<input type="submit" value="Submit" />
					</form>
				</div>
      );
    }
  }

export default Form;
