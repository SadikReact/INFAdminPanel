(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[216],{2406:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(51),c=a(13),l=a(14),r=a(16),s=a(15),i=a(0),m=a.n(i),o=a(1141),p=a(1142),u=a(1139),d=a(1140),h=a(1143),E=a(172),g=a(1146),f=a(1159),b=a(1160),S=a(1161),v=a(168),y=a(56),N=a(793),_=a.n(N),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=l.props.match.params.id;v.a.post("/editScript/".concat(t),l.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),_()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/script/scriptList")})).catch((function(e){console.log(e)}))},l.state={script_type:"",script_name:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("/getone_script/".concat(t),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(t){console.log(t),e.setState({script_type:t.data.data.script_type,script_name:t.data.data.script_name})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(o.a,null,m.a.createElement(p.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(u.a,{listTag:"div"},m.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(d.a,{href:"/app/script/scriptList",tag:"a"},"Script List"),m.a.createElement(d.a,{active:!0},"Edit Script"))))),m.a.createElement(h.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Script")),m.a.createElement(p.a,null,m.a.createElement(y.b,{render:function(e){var t=e.history;return m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/script/scriptList")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(o.a,null,m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(b.a,{for:"exampleSelect"},"Entry Script"),m.a.createElement(S.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},m.a.createElement("option",null,"Select Script"),m.a.createElement("option",null,"FNO INDEX"),m.a.createElement("option",null,"FNO EQUITY"),m.a.createElement("option",null,"CASH EQUITY"),m.a.createElement("option",null,"BANK NIFTY"),m.a.createElement("option",null,"NIFTY "))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Script Name"),m.a.createElement(S.a,{required:!0,type:"text",name:"script_name",placeholder:"",value:this.state.script_name,onChange:this.changeHandler}))),m.a.createElement(o.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(i.Component)}}]);
//# sourceMappingURL=216.b8ad09ad.chunk.js.map