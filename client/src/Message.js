import React from 'react';


class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submit: "True"
        }
    }

    componentDidMount() {
        this.setState({
            submit: this.props.data.submit
        })
    }

    render() {
        let toWhom = "";
        let introduceTitle = "";
        let minorRender = "";
        let primaryFocus = "";
        if (this.props.data) {
            if (this.props.data.contactName === "") {
                let choices = [`there`, `team`, `${this.props.data.companyName}`]
                toWhom = choices[Math.floor(Math.random()*3)]
            } else {
                toWhom = this.props.data.contactName
            }

            if (this.props.data.minor === "") {
                minorRender = ""
            } else {
                minorRender = `and ${this.props.data.minor} minor`
            }

            if (this.props.data.student === "true") {
                introduceTitle = `${this.props.data.major} major ${minorRender} at ${this.props.data.school}`
            } else {
                introduceTitle = `${this.props.data.title}`
            }
        }
        // let MessageRender = null
        // if (this.props.data.submit === 'True') {
        //     MessageRender = <div>
        //         Hi {toWhom}, <br></br>
        //         <br></br>
        //         I am excited to apply for the {this.props.data.position} at {this.props.data.companyName}. 
        //         I am strongly identifed with {this.props.data.companyName}'s mission {this.props.data.companyMission}, 
        //         and I am excited to be a part of that mission.<br></br>
        //         <br></br>
        //         As a {introduceTitle}, I have {this.props.data.languages} and {this.props.data.skills} in my toolbox. 
        //         My primary focus is {this.props.data.primaryFocus}, which is stemmed from my background and working experiences.
        //         In the past, I {this.props.data.workingExperience}. I also {this.props.data.projectExperience}.<br></br>
        //         <br></br>
        //         I know my technical skills combined with my enthusiasm make me a great candidate for this role. 
        //         When are you available for a chat to discuss further?<br></br>
        //         <br></br>
        //         All the best,<br></br>
        //         {this.props.data.yourName}
        //     </div>
        // }
        return(
            <div>
                Hi {toWhom}, <br></br>
                <br></br>
                I am excited to apply for the {this.props.data.position} position at {this.props.data.companyName}. 
                I am strongly identifed with {this.props.data.companyName}'s mission {this.props.data.companyMission}, 
                and I am excited to be a part of that mission.<br></br>
                <br></br>
                As a {introduceTitle}, I have {this.props.data.languages} and {this.props.data.skills} in my toolbox. 
                My primary focus is {this.props.data.primaryFocus}, which is stemmed from my background and working experiences.
                In the past, I {this.props.data.workingExperience}. I also {this.props.data.projectExperience}.<br></br>
                <br></br>
                I know my technical skills combined with my enthusiasm make me a great candidate for this role. 
                When are you available for a chat to discuss further?<br></br>
                <br></br>
                All the best,<br></br>
                {this.props.data.yourName}
            </div>
        )
    }
}

export default Message;