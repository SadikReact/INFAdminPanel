(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[180],{2431:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var n=a(51),l=a(13),r=a(14),s=a(16),o=a(15),c=a(0),i=a.n(c),m=a(1141),d=a(1142),u=a(1139),p=a(1140),b=a(1143),h=a(172),g=a(1146),E=a(797),f=a(796),N=a(793),y=a(169),S=a(56),v=a(827),C=a(828),O=a(805),k=a.n(O),T=(a(839),a(802),a(795)),H=a.n(T),F=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:k()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state);var t=new FormData;t.append("title",r.state.title),t.append("desc",r.state.desc),t.append("img",r.state.selectedFile,r.state.selectedName),y.a.post("/admin/addOportunity",t).then((function(e){console.log(e.data),H()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/explore/Trupee/opportunity")})).catch((function(e){console.log(e)}))},r.state={title:"",image:"",selectedName:"",selectedFile:null,editorState:v.EditorState.createEmpty(),desc:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"Opportunity List"),i.a.createElement(p.a,{active:!0},"Add Opportunity"))))),i.a.createElement(b.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Opportunity")),i.a.createElement(d.a,null,i.a.createElement(S.b,{render:function(e){var t=e.history;return i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/explore/Trupee/opportunity")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Title"),i.a.createElement(N.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(N.a,{type:"file",name:"img",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},802:function(e,t,a){}}]);
//# sourceMappingURL=180.b0b3061e.chunk.js.map