(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[241],{2424:function(e,t,a){"use strict";a.r(t),a.d(t,"AddFnoIndex",(function(){return x}));var n=a(51),l=a(13),c=a(14),r=a(16),o=a(15),i=a(0),m=a.n(i),s=a(1143),d=a(1141),u=a(1142),p=a(172),E=a(1146),h=a(1159),v=a(1160),y=a(781),g=a(1161),f=a(56),b=a(793),_=a.n(b),N=a(168),x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log("type",c.state),N.a.post("/admin/add_fnoIndex",c.state).then((function(e){console.log("add Data",e.data),_()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/trade/fnoIndexList")})).catch((function(e){console.log(e)}))},c.state={expiryDate:"",script_type:"",fnoindex_scrpt_name:"",active_value:"",call_type:"",qty:"",investment_amt:"",no_of_lots:"",trade_type:"",t5:"",status:""},c.state={type:"Index",scriptN:[],expdateI:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/admin/getFnoScript").then((function(t){console.log(t),e.setState({scriptN:t.data.data})})).catch((function(e){console.log(e)})),N.a.get("/admin/datelist").then((function(t){e.setState({expdateI:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t;return m.a.createElement("div",null,m.a.createElement(s.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(u.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add FNO Index")),m.a.createElement(u.a,null,m.a.createElement(f.b,{render:function(e){var t=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/trade/fnoIndexList")}},"Back")}}))),m.a.createElement(E.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,{className:"mb-2"},m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Script Name"),m.a.createElement(y.a,{type:"select",name:"fnoindex_scrpt_name",value:this.state.fnoindex_scrpt_name,onChange:this.changeHandler},m.a.createElement("option",null,"Select Script"),null===(e=this.state.scriptN)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.scriptName)})))),m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Expiry Date"),m.a.createElement(y.a,{type:"select",name:"expiryDate",value:this.state.expiryDate,onChange:this.changeHandler},m.a.createElement("option",null,"Expiry Date"),null===(t=this.state.expdateI)||void 0===t?void 0:t.map((function(e){return m.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.expDate)})))),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,{for:"exampleSelect"},"Equity Script"),m.a.createElement(g.a,{name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},m.a.createElement("option",null,"Select Script"),m.a.createElement("option",null,"BUY"),m.a.createElement("option",null,"SELL"))),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,{for:"exampleSelect"},"Trade Type"),m.a.createElement(g.a,{id:"exampleSelect",name:"trade_type",type:"select",value:this.state.trade_type,onChange:this.changeHandler},m.a.createElement("option",null,"Select Trade"),m.a.createElement("option",{value:"BankNifty"},"BANK NIFTY"),m.a.createElement("option",{value:"Nifty"},"NIFTY"))),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,{for:"exampleSelect"},"Call Type"),m.a.createElement(g.a,{id:"exampleSelect",name:"call_type",type:"select",value:this.state.call_type,onChange:this.changeHandler,placeholder:"Select Call Type"},m.a.createElement("option",null,"Intraday"),m.a.createElement("option",null,"BTST"),m.a.createElement("option",null,"Short Term"),m.a.createElement("option",null,"Intraday or BTST"),m.a.createElement("option",null,"Intraday (Risky)"),m.a.createElement("option",null,"Intraday (Trailed)"),m.a.createElement("option",null,"Intraday (Re-entry)"),m.a.createElement("option",null,"Intraday (Re-entry- Trailed)"),m.a.createElement("option",null,"Intraday (Hero-Zero)"))),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Active Value*"),m.a.createElement(g.a,{type:"number",required:!0,placeholder:"Enter Active Value",name:"active_value",value:this.state.active_value,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Range value*"),m.a.createElement(g.a,{name:"t5",type:"number",required:!0,placeholder:"Enter T5 ",value:this.state.t5,onChange:this.changeHandler})),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Number Of Lots"),m.a.createElement(g.a,{type:"number",name:"no_of_lots",placeholder:"Enter Lots Price",value:this.state.no_of_lots,onChange:this.changeHandler}))),m.a.createElement(d.a,null,m.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add FNO Index"))))))}}]),a}(i.Component);t.default=x}}]);
//# sourceMappingURL=241.0b229939.chunk.js.map