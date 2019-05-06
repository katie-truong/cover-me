import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
                ]
            ,
            school: '',
            year: '',
            languages: '',
            skills: '',
            workingExperience: '',
            projectExperience: '',
            phoneNumber: '',
            websiteLink: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>Name: </label>
                        <input 
                            type="text" 
                            value={this.state.name}
                            onChange={this.state.handleChange}>
                        </input>
                    </div>
                    <div>
                        <label>Company Name: </label>
                        <input 
                            type="text" 
                            value={this.state.companyName}
                            onChange={this.state.handleChange}>
                        </input>
                    </div>
                    <div>
                        <label>Company Category: </label>
                        <select 
                            value={this.state.companyCategory[0]}
                            onChange={this.handleChange}>
                            {this.state.companyCategory.map(option => (
                                <option value={option.value}>{option.displayValue}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form;