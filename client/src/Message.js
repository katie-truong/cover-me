import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let MessageRender = null
        if (this.props.data.submit === 'True') {
            MessageRender = <div>
                Hi {this.props.data.contactName}, <br></br>
                <br></br>
                My name is {this.props.data.yourName}. 
            </div>
        }
        return(
            <div>{MessageRender}</div>
        )
    }
}

export default Message;