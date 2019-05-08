import React from 'react';
import Form from './Form.js';
import Message from './Message.js';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
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
        <h3 className="tagline">Cover letter made easy</h3>
        <div className="main">
          <Form handleSubmitButtonClick={this.handleSubmitButtonClick}/>
          <Message data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
