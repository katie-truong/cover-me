import React from 'react';
import './css/Form.css';

class Form extends React.Component {

    constructor () {
      super();
      this.state = {
				yourName: 'Kevin',
				student: 'true',
				contactName: 'Nathan',
				howWeMet: '',
        companyName: 'Google',
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
				position: 'Software Engineer New Grad',
				companyMission: `to organize the world's information and make it universally accessible and useful`,
				school: 'University of Maryland',
				major: 'Computer Science',
				minor: 'Math',
				title: '',
        languages: 'Java, Scala, Python',
				skills: 'machine learning and predictive modeling',
				primaryFocus: 'build the best recommendation system for the end users',
        workingExperience: 'interned at Amazon',
        projectExperience: 'made a strategic online card game that had 10,000+ downloads',
        phoneNumber: '',
				websiteLink: '',
				submit: 'True'
    	};
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
		
		componentDidMount() {
			this.setState({
				submit: 'True'
			})
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
				<div className="section">
					<label>School: </label>
					<input 
						className="textField"
						type="text" 
						name="school" 
						defaultValue="University of Maryland"
						onChange={this.handleChange} />
				</div>

				<div className="section">
					<label>Major: </label>
					<input
						className="textField"
						type="text" 
						name="major"
						defaultValue="Computer Science" 
						onChange={this.handleChange} />
				</div>

				<div className="section">
					<label>Minor: </label>
					<input 
						className="textField"
						type="text" 
						name="minor"
						defaultValue="Math" 
						onChange={this.handleChange} />
				</div>
			</div>	
			} else if (this.state.student === 'false') {
				studentRender = <div>
					<div className="section">
						<label>Job Title: </label>
						<input 
							className="textField"
							type="text" 
							name="title" 
							onChange={this.handleChange} />
					</div>
				</div>
			}
      return (
				<div className="mainForm">
        	<form onSubmit={this.handleSubmit}>
						<div className="section">
        			<label>Your Name: </label>
							<input 
								className="textField"
								type="text" 
								name="yourName" 
								onChange={this.handleChange}
								defaultValue="Kevin" 
								value={this.state.name}/>
						</div>

						<div className="section">
							<label>Are you a student? </label>
							<label>
            		<input
									className="student"
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
									className="student"
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

						<div className="section">
							<label>Contact Name: </label>
							<input 
								className="textField"
								type="text" 
								name="contactName" 
								onChange={this.handleChange}
								defaultValue="Nathan" 
								value={this.state.contactName}/>
						</div>

						{/* <div>
							<label>How We Met: </label>
							<input type="text" name="howWeMet" onChange={this.handleChange}></input>
						</div> */}

						<div className="section">
							<label>Company Name: </label>
							<input 
								className="textField"
								type="text" 
								name="companyName" 
								onChange={this.handleChange} 
								value={this.props.companyName}
								defaultValue="Google"
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

						<div className="section">
							<label>Position: </label>
							<input 
								className="textField"
								type="text" 
								name="position" 
								onChange={this.handleChange} 
								value={this.props.position}
								defaultValue="Software Engineer New Grad"
							/>
						</div>

						<div className="section">
							<label>Company Mission: </label>
							<input 
								className="textField"
								type="text" 
								name="companyMission" 
								onChange={this.handleChange} 
								value={this.props.companyMission}
								defaultValue="to organize the world's information and make it universally accessible and useful"
							/>
						</div>

						<div className="section">
							<label>Languages: </label>
							<input 
								className="textField"
								type="text" 
								name="languages" 
								onChange={this.handleChange} 
								defaultValue="Java, Scala and Python" />
						</div>

						<div className="section">
							<label>Skills: </label>
							<input 
								className="textField"
								type="text" 
								name="skills" 
								onChange={this.handleChange} 
								defaultValue="machine learning and predictive modeling"/>
						</div>

						<div className="section">
							<label>Primary Focus: </label>
							<input 
								className="textField" 
								type="text" 
								name="primaryFocus" 
								defaultValue="build the best recommendation system for the end users"
								onChange={this.handleChange} />
						</div>

						<div className="section">
							<label>Working Experience: </label>
							<input 
								className="textField"
								type="text" 
								name="workingExperience"
								defaultValue="interned at Amazon"
								onChange={this.handleChange} />
						</div>

						<div className="section">
							<label>Project Experience: </label>
							<input 
								className="textField"
								type="text" 
								name="projectExperience" 
								defaultValue="made a strategic online card game that had over 10,000 downloads"
								onChange={this.handleChange} />
						</div>

						{/* <div>
							<label>Phone Number: </label>
							<input type="text" name="phoneNumber" onChange={this.handleChange} />
						</div> */}
						
						{/* <div>
							<label>Website: </label>
							<input type="text" name="websiteLink" onChange={this.handleChange} />
						</div> */}
						<input className="submit" type="submit" value="Submit" />
					</form>
				</div>
      );
    }
  }

export default Form;
