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
      <div>
        <Form handleSubmitButtonClick={this.handleSubmitButtonClick}/>
        <Message data={this.state.data}/>
      </div>
    )
  }
}

export default App;
