(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2424:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var l=t(51),n=t(13),r=t(14),m=t(16),c=t(15),s=t(0),i=t.n(s),u=t(1141),d=t(1142),o=t(1139),h=t(1140),b=t(1143),g=t(172),E=t(1146),f=t(1159),p=t(1160),v=t(1161),N=t(168),y=(t(793),t(56)),k=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.state={title:"",image:"",userName:"",email:"",selectedName:"",selectedFile:null,userMobile:"",fullName:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/getonePnlSheet/".concat(a)).then((function(a){var t,l,n;console.log(a.data.data),e.setState({image:a.data.data.pnlimg[0],userMobile:null===(t=a.data.data.userId)||void 0===t?void 0:t.mobile,fullName:(null===(l=a.data.data.userId)||void 0===l?void 0:l.firstname)+(null===(n=a.data.data.userId)||void 0===n?void 0:n.lastname)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(o.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"View Feedback"),i.a.createElement(h.a,{active:!0},"View Feedback"))))),i.a.createElement(b.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View PnLSheet")),i.a.createElement(d.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/pnLSheetList")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a,null,"UserName"),i.a.createElement(v.a,{required:!0,type:"text",disabled:!0,name:"fullName",value:this.state.fullName,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a,null,"Mobile"),i.a.createElement(v.a,{type:"text",disabled:!0,name:"userMobile",value:this.state.userMobile,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a,null,"Email"),i.a.createElement(v.a,{type:"email",disabled:!0,name:"email",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"12",md:"12",sm:"6",className:"mb-2"},i.a.createElement("img",{src:this.state.image,alt:"no image"})))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=246.e3fc598c.chunk.js.map