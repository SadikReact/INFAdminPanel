(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[227],{2359:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPlans",(function(){return y}));var n=t(51),l=t(13),s=t(14),c=t(16),r=t(15),i=t(0),m=t.n(i),o=t(1143),u=t(1141),d=t(1142),p=t(172),h=t(1146),b=t(1159),E=t(1160),f=t(1161),v=(t(27),t(56)),g=t(42),k=t.n(g),y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),k.a.post("http://3.108.185.7/nodejs/api/admin/addplan",s.state).then((function(e){console.log(e),s.props.history.push("/app/subPlan/SubPlanVideos")})).catch((function(e){console.log(e)}))},s.state={_id:"",video_link:"",associated_plan:""},s}return Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(o.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Subscription Plan")),m.a.createElement(d.a,null,m.a.createElement(v.b,{render:function(e){var a=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/subplan/SubPlanVideos")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Video Link "),m.a.createElement(f.a,{type:"text",name:"video_link",value:this.state.video_link,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Associated Plan "),m.a.createElement(f.a,{type:"text",name:"associated_plan",value:this.state.associated_plan,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Plans"))))))}}]),t}(i.Component);a.default=y}}]);
//# sourceMappingURL=227.b2a28fa6.chunk.js.map