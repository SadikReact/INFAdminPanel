(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[98],{1391:function(e,a,t){},2470:function(e,a,t){"use strict";t.r(a);var s=t(51),n=t(13),r=t(14),c=t(16),o=t(15),l=t(0),d=t.n(l),i=t(1141),m=t(1142),p=t(1143),h=t(1159),u=t(1145),b=t(1160),f=t(1161),w=t(172),E=(t(1391),t(812),t(795)),v=t(793),g=t.n(v),P=t(168),C=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){console.log(e.target.value),r.setState(Object(s.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){if(e.preventDefault(),r.state.password.length<5&&r.state.cnfmPassword.length<5)g()("Error","Password must be atleast 5 abore character ","error");else if(r.state.password!==r.state.cnfmPassword)g()("Error","Password not match","error");else{var a={oldPass:r.state.oldPass,password:r.state.password,cnfmPassword:r.state.cnfmPassword},t=localStorage.getItem("userId");P.a.post("/admin/changeAdmingpassword/".concat(t),a).then((function(e){r.setState({oldPass:""}),r.setState({password:""}),r.setState({cnfmPassword:""}),g()("Success!","Password Changed","success")})).catch((function(e){g()("Error!","You clicked the button!","error")}))}},r.state={oldPass:"",password:"",cnfmPassword:"",data:{}},r}return Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Change Password"}),d.a.createElement("div",{id:"user-profile"},d.a.createElement(i.a,{className:"m-0 justify-content-center"},d.a.createElement(m.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},d.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},d.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement("div",{className:"st-2"},d.a.createElement(u.a,null,d.a.createElement("h4",{className:"mb-3"},"Change Password"),d.a.createElement(m.a,null)),d.a.createElement(i.a,{className:"m-0"},d.a.createElement(m.a,{sm:"12",className:"p-0"},d.a.createElement(b.a,null,"Old Password"),d.a.createElement(f.a,{type:"password",name:"oldPass",placeholder:"Old Password",value:this.state.oldPass,onChange:this.changeHandler}),d.a.createElement(b.a,null,"New Password"),d.a.createElement(f.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),d.a.createElement(b.a,null,"Confirm Password"),d.a.createElement(f.a,{type:"password",name:"cnfmPassword",placeholder:"Confirm password",value:this.state.cnfmPassword,onChange:this.changeHandler}),d.a.createElement("div",{className:"d-flex justify-content-between"},d.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Submit")))))))))))}}]),t}(d.a.Component);a.default=C},812:function(e,a,t){"use strict";var s=t(13),n=t(14),r=t(16),c=t(15),o=t(0),l=t.n(o),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),t}(l.a.Component);a.a=d}}]);
//# sourceMappingURL=98.f29c51d3.chunk.js.map