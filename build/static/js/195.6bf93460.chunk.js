(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[195],{2384:function(e,a,t){"use strict";t.r(a);var n=t(51),l=t(13),s=t(14),r=t(16),o=t(15),c=t(0),i=t.n(c),m=t(1145),d=t(1143),p=t(1144),u=t(171),b=t(1148),h=t(798),y=t(797),E=t(795),f=t(56),g=t(168),N=t(822),S=t(823),v=t(802),T=t.n(v),C=(t(827),t(800),t(796)),k=t(793),P=t.n(k),j=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:T()(Object(N.convertToRaw)(e.getCurrentContent()))})},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){var a=localStorage.getItem("userId");e.preventDefault();var t={pt_type:s.state.policyType,pt_type_desc:s.state.desc};g.a.post("/admin/add_Pt/".concat(a),t).then((function(e){console.log(e),P()("Success!","Submitted SuccessFull!","success"),s.setState({desc:""}),s.props.history.push("/app/policy/PolicyTypeList")})).catch((function(e){console.log(e)}))},s.state={planType:"",desc:""},s}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(C.a,{breadCrumbTitle:"PolicyType",breadCrumbParent:"Home",breadCrumbActive:"PolicyType "}),i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Plan Type")),i.a.createElement(p.a,null,i.a.createElement(f.b,{render:function(e){var a=e.history;return i.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/policy/PolicyTypeList")}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(y.a,null,"PlanType "),i.a.createElement(E.a,{type:"text",name:"planType",placeholder:"PlanType",value:this.state.planType,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(y.a,null,"Descripition"),i.a.createElement(S.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(i.a.Component);a.default=j},800:function(e,a,t){}}]);
//# sourceMappingURL=195.6bf93460.chunk.js.map