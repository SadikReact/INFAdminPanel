(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[203],{2395:function(e,a,t){"use strict";t.r(a);var l=t(51),n=t(13),r=t(14),c=t(16),o=t(15),i=t(0),s=t.n(i),m=t(1143),p=t(1141),d=t(1142),u=t(172),y=t(1146),h=t(1159),g=t(1160),b=t(1161),E=t(56),N=t(168),v=t(802),f=t(803),C=t(816),P=t.n(C),S=(t(811),t(812),t(795)),_=t(793),k=t.n(_),A=(t(836),function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onEditorStateChangePara=function(e){console.log("para",e),r.setState({editorState:e,paraDescription:P()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.onEditorStateChangepolicy=function(e){console.log("policy",e),r.setState({editorState1:e,policyDescription:P()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.changeHandler1=function(e){r.setState({policyActive:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.handlePolicyType=function(e){r.setState({policyType:e.target.value})},r.handleImage=function(e){r.setState({plan_image:e.target.files[0]})},r.submitHandler=function(e){e.preventDefault();var a=localStorage.getItem("userId"),t=new FormData;t.append("policyName",r.state.policyName),t.append("policyNum",r.state.policyNumber),t.append("policyDesc",r.state.policyDescription),t.append("policyUnderWriter",r.state.policyUnderWriter),t.append("proproetary",r.state.proprietary),t.append("policyType",r.state.policyType),t.append("policyAdtional",r.state.policyAdditionalFeatures),t.append("paraDesc",r.state.paraDescription),t.append("policyPage",r.state.policy_page),t.append("policyDocument",r.state.policy_document),t.append("policyFAQ",r.state.policy_FAQ),t.append("purchesLink",r.state.purchase_link),t.append("brochureLink",r.state.brochure_link),t.append("purched",r.state.purchased),t.append("renewed",r.state.renewed),null!==r.state.plan_image&&t.append("planimg",r.state.plan_image),t.append("status",r.state.policyActive),N.a.post("/admin/add_policy/".concat(a),t).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/policy/PolicyList")})).catch((function(e){console.log(e)}))},r.state={policyName:"",policyNumber:"",policyUnderWriter:"",proprietary:"",policyType:"",policyAdditionalFeatures:"",policyDescription:"",paraDescription:"",policy_page:"",policy_document:"",policy_FAQ:"",purchase_link:"",plan_image:"",brochure_link:"",purchased:"",renewed:"",policyActive:"",policyTypeList:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/admin/get_pt").then((function(a){e.setState({policyTypeList:a.data.data}),console.log(a.data.data)})).catch((function(e){k()("Something Went Wrong")}))}},{key:"render",value:function(){var e,a=this;return s.a.createElement("div",null,s.a.createElement(S.a,{breadCrumbTitle:" Add Policy",breadCrumbParent:"Home",breadCrumbActive:" Add Policy"}),s.a.createElement(m.a,null,s.a.createElement(p.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Policy")),s.a.createElement(d.a,null,s.a.createElement(E.b,{render:function(e){var a=e.history;return s.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/policy/PolicyList")}},"Back")}}))),s.a.createElement(y.a,null,s.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(p.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"PolicyName "),s.a.createElement(b.a,{type:"text",name:"policyName",placeholder:"policyName",value:this.state.policyName,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"PolicyNumber"),s.a.createElement(b.a,{type:"text",name:"policyNumber",placeholder:"PolicyNumber",value:this.state.policyNumber,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"policyUnderWriter "),s.a.createElement(b.a,{type:"text",name:"policyUnderWriter",placeholder:"PolicyUnderWriter",value:this.state.policyUnderWriter,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Proprietary "),s.a.createElement(b.a,{type:"text",name:"proprietary",placeholder:"Proprietary",value:this.state.proprietary,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"PolicyAdditionalFeatures "),s.a.createElement(b.a,{type:"text",name:"policyAdditionalFeatures",placeholder:"PolicyAdditionalFeatures",value:this.state.policyAdditionalFeatures,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Policy Page "),s.a.createElement(b.a,{type:"text",name:"policy_page",placeholder:"PolicyPage",value:this.state.policy_page,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Policy Document "),s.a.createElement(b.a,{type:"text",name:"policy_document",placeholder:"Policy Document",value:this.state.policy_document,onChange:this.changeHandler}))," ",s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Policy FAQ "),s.a.createElement(b.a,{type:"text",name:"policy_FAQ",placeholder:"Policy FAQ",value:this.state.policy_FAQ,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Purchase Link "),s.a.createElement(b.a,{type:"text",name:"purchase_link",placeholder:"Purchase_link",value:this.state.purchase_link,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Brochure Link "),s.a.createElement(b.a,{type:"text",name:"brochure_link",placeholder:"Brochure Link",value:this.state.brochure_link,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Purchased "),s.a.createElement(b.a,{type:"text",name:"purchased",placeholder:"Purchased",value:this.state.purchased,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Renewed "),s.a.createElement(b.a,{type:"text",name:"renewed",placeholder:"renewed",value:this.state.renewed,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,{for:"data-category"},"Policy Type"),s.a.createElement(b.a,{type:"select",id:"data-category",value:this.state.policyType,onChange:this.handlePolicyType},s.a.createElement("option",{value:""},"Select PolicyType"),null===(e=this.state.policyTypeList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:e._id,value:e._id},e.pt_type)})))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Plan Image "),s.a.createElement(b.a,{type:"file",name:"plan_image",onChange:this.handleImage})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Policy Descripition"),s.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState1,onEditorStateChange:this.onEditorStateChangepolicy,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(g.a,null,"Para Descripition"),s.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChangePara,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),s.a.createElement(p.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(s.a.Component));a.default=A}}]);
//# sourceMappingURL=203.03287f8b.chunk.js.map