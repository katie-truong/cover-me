import React from 'react';

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             companyName: '',
//             companyCategory: [
//                 {value: '', displayValue: ''},
//                 {value: 'bigN', displayValue: 'Big N'},
//                 {value: 'finTech', displayValue: 'FinTech'},
//                 {value: 'healthcare', displayValue: 'Health Care'},
//                 {value: 'edu', displayValue: 'Education'},
//                 {value: 'service', displayValue: 'Service'},
//                 {value: 'ecommerce', displayValue: 'E-Commerce'},
//                 {value: 'non-tech', displayValue: 'Non Tech'}
//             ],
//             school: '',
//             year: [
//                 {value: '', displayValue: ''},
//                 {value: 4, displayValue: 'Senior'},
//                 {value: 3, displayValue: 'Junior'},
//                 {value: 2, displayValue: 'Sophomore'},
//                 {value: 1, displayValue: 'Freshman'},
//                 {value: NaN, displayValue: 'Not Applicable'}
//             ],
//             languages: '',
//             skills: '',
//             workingExperience: '',
//             projectExperience: '',
//             phoneNumber: '',
//             websiteLink: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e, name) {
//         this.setState({
//             [name]: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <div>
//                         <label>Name: </label>
//                         <input 
//                             type="text"
//                             name="name" 
//                             value={this.state.name}
//                             onChange={this.state.handleChangeName}>
//                         </input>
//                     </div>
//                     <div>
//                         <label>Company Name: </label>
//                         <input 
//                             type="text" 
//                             name="companyName"
//                             value={this.state.companyName}
//                             onChange={this.state.handleChange}>
//                         </input>
//                     </div>
//                     <div>
//                         <label>Company Category: </label>
//                         <select 
//                             value={this.state.companyCategory[0]}
//                             onChange={this.handleChange}>
//                             {this.state.companyCategory.map(option => (
//                                 <option value={option.value}>{option.displayValue}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <label>School: </label>
//                         <input 
//                             type="text" 
//                             name="school"
//                             value={this.state.school}
//                             onChange={this.state.handleChange}>
//                         </input>
//                     </div>
//                     <div>
//                         <label>School Year: </label>
//                         <select 
//                             value={this.state.year[0]}
//                             onChange={this.handleChange}>
//                             {this.state.year.map(option => (
//                                 <option value={option.value}>{option.displayValue}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <input type="submit" value="Submit"></input>
//             </form>
//         )
//     }
// }

// export default Form;

class Form extends React.Component {

    constructor () {
      super();
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
        ],
        school: '',
        year: [
            {value: '', displayValue: ''},
            {value: 4, displayValue: 'Senior'},
            {value: 3, displayValue: 'Junior'},
            {value: 2, displayValue: 'Sophomore'},
            {value: 1, displayValue: 'Freshman'},
            {value: NaN, displayValue: 'Not Applicable'}
        ],
        languages: '',
        skills: '',
        workingExperience: '',
        projectExperience: '',
        phoneNumber: '',
        websiteLink: ''
    	};
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }
    
    render () {
      return (
				<div>
        	<form>
						<div>
        			<label>Name</label>
							<input type="text" name="name" onChange={this.handleChange} />
						</div>

						<div>
							<label>Company Name</label>
							<input type="text" name="companyName" onChange={this.handleChange} />
						</div>

						<div>
              <label>Company Category: </label>
							<select 
									name="companyCategory"
                  value={this.state.companyCategory[0]}
                  onChange={this.handleChange}>
									{console.log(typeof(this.state.companyCategory))}
            	</select>
            </div>
					</form>
				</div>
      );
    }
  }

export default Form;