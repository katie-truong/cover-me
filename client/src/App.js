import React from 'react';
import Form from './Form.js';
import './css/App.css';

class App extends React.Component {
  constructor() {
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
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }


  handleSubmitButtonClick = (formData) => {
    this.setState({
      submit: formData.submit,
      yourName: formData.yourName,
      student: formData.student,
      contactName: formData.contactName
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        <Form handleSubmitButtonClick={this.handleSubmitButtonClick}/>
        <div>Hi {this.state.contactName}, 
        
        My name is {this.state.yourName}!</div>
      </div>
    )
  }
}

export default App;
