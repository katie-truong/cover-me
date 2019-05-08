import React from 'react';
import Form from './Form.js';
import Message from './Message.js';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
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
				title: 'Software Engineer',
        languages: 'Java, Scala, Python',
				skills: 'machine learning and predictive modeling',
				primaryFocus: 'build the best recommendation system for the end users',
        workingExperience: 'interned at Amazon',
        projectExperience: 'made a strategic online card game that had 10,000+ downloads',
        phoneNumber: '',
				websiteLink: '',
				submit: 'True'
    	},
      submit: ''
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }


  handleSubmitButtonClick = (formData) => {
    this.setState({
      submit: formData.submit,
      data: formData
    })
  }

  render() {
    
    return (
      <div className="body">
        <h1 className="title">Cover Me</h1>
        <div className="main">
          <Form handleSubmitButtonClick={this.handleSubmitButtonClick}/>
          <Message data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
