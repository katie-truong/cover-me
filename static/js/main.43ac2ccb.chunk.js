(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),r=a.n(i),o=(a(16),a(2)),s=a(3),c=a(5),m=a(4),u=a(1),h=a(6),p=a(9),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={yourName:"",student:"true",contactName:"",howWeMet:"",companyName:"",companyCategory:[{value:"",displayValue:""},{value:"bigN",displayValue:"Big N"},{value:"finTech",displayValue:"FinTech"},{value:"healthcare",displayValue:"Health Care"},{value:"edu",displayValue:"Education"},{value:"service",displayValue:"Service"},{value:"ecommerce",displayValue:"E-Commerce"},{value:"non-tech",displayValue:"Non Tech"}],position:"",companyMission:"",school:"",major:"",minor:"",title:"",languages:"",skills:"",primaryFocus:"",workingExperience:"",projectExperience:"",phoneNumber:"",websiteLink:"",submit:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({submit:"False"},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submit:"True"},function(){var e={yourName:t.state.yourName,student:t.state.student,school:t.state.school,major:t.state.major,minor:t.state.minor,title:t.state.title,contactName:t.state.contactName,howWeMet:t.state.howWeMet,companyName:t.state.companyName,companyCategory:t.state.companyCategory,companyMission:t.state.companyMission,position:t.state.position,languages:t.state.languages,skills:t.state.skills,primaryFocus:t.state.primaryFocus,workingExperience:t.state.workingExperience,projectExperience:t.state.projectExperience,phoneNumber:t.state.phoneNumber,websiteLink:t.state.websiteLink,submit:t.state.submit};t.props.handleSubmitButtonClick(e)})}},{key:"render",value:function(){var e=null;return"true"===this.state.student?e=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"School: "),l.a.createElement("input",{type:"text",name:"school",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Major: "),l.a.createElement("input",{type:"text",name:"major",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Minor: "),l.a.createElement("input",{type:"text",name:"minor",onChange:this.handleChange}))):"false"===this.state.student&&(e=l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"Job Title: "),l.a.createElement("input",{type:"text",name:"title",onChange:this.handleChange})))),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Your Name: "),l.a.createElement("input",{type:"text",name:"yourName",onChange:this.handleChange,value:this.state.name})),l.a.createElement("div",null,l.a.createElement("label",null,"Are you a student? "),l.a.createElement("label",null,l.a.createElement("input",{name:"student",type:"radio",value:"true",checked:"true"===this.state.student,onChange:this.handleChange}),"Yes"),l.a.createElement("label",null,l.a.createElement("input",{name:"student",type:"radio",value:"false",checked:"false"===this.state.student,onChange:this.handleChange}),"No")),e,l.a.createElement("div",null,l.a.createElement("label",null,"Contact Name: "),l.a.createElement("input",{type:"text",name:"contactName",onChange:this.handleChange,value:this.state.contactName})),l.a.createElement("div",null,l.a.createElement("label",null,"Company Name: "),l.a.createElement("input",{type:"text",name:"companyName",onChange:this.handleChange,value:this.props.companyName})),l.a.createElement("div",null,l.a.createElement("label",null,"Position: "),l.a.createElement("input",{type:"text",name:"position",onChange:this.handleChange,value:this.props.position})),l.a.createElement("div",null,l.a.createElement("label",null,"Company Mission: "),l.a.createElement("input",{type:"text",name:"companyMission",onChange:this.handleChange,value:this.props.companyMission})),l.a.createElement("div",null,l.a.createElement("label",null,"Languages: "),l.a.createElement("input",{type:"text",name:"languages",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Skills: "),l.a.createElement("input",{type:"text",name:"skills",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Primary Focus: "),l.a.createElement("input",{type:"text",name:"primaryFocus",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Working Experience: "),l.a.createElement("input",{type:"text",name:"workingExperience",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Project Experience: "),l.a.createElement("input",{type:"text",name:"projectExperience",onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(l.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="",t="",a="";if(this.props.data){if(""===this.props.data.contactName)e=["there","team","".concat(this.props.data.companyName)][Math.floor(3*Math.random())];else e=this.props.data.contactName;a=""===this.props.data.minor?"":"and ".concat(this.props.data.minor," minor"),t="true"===this.props.data.student?"".concat(this.props.data.major," major ").concat(a," at ").concat(this.props.data.school):"".concat(this.props.data.title)}console.log(this.props.data);var n=null;return"True"===this.props.data.submit&&(n=l.a.createElement("div",null,"Hi ",e,", ",l.a.createElement("br",null),l.a.createElement("br",null),"I am excited to apply for the ",this.props.data.position," at ",this.props.data.companyName,". I am strongly identifed with ",this.props.data.companyName,"'s mission ",this.props.data.companyMission,", and I am excited to be a part of that mission.",l.a.createElement("br",null),l.a.createElement("br",null),"As a ",t,", I have ",this.props.data.languages," and ",this.props.data.skills," in my toolbox. My primary focus is ",this.props.data.primaryFocus,", which is stemmed from my background and working experiences. In the past, I ",this.props.data.workingExperience," and ",this.props.data.projectExperience,".",l.a.createElement("br",null),l.a.createElement("br",null),"I know my technical skills combined with my enthusiasm make me a great candidate for this role. When are you available for a chat to discuss further?",l.a.createElement("br",null),l.a.createElement("br",null),"All the best,",l.a.createElement("br",null),this.props.data.yourName)),l.a.createElement("div",null,n)}}]),t}(l.a.Component),E=(a(17),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleSubmitButtonClick=function(t){e.setState({submit:t.submit,data:t})},e.state={data:"",submit:""},e.handleSubmitButtonClick=e.handleSubmitButtonClick.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{handleSubmitButtonClick:this.handleSubmitButtonClick}),l.a.createElement(b,{data:this.state.data}))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.43ac2ccb.chunk.js.map