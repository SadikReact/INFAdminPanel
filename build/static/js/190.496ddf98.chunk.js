(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[190],{2343:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(51),o=a(13),s=a(14),r=a(16),l=a(15),c=a(0),i=a.n(c),m=a(1141),d=a(1142),u=a(1139),p=a(1140),b=a(1143),h=a(172),E=a(1146),f=a(1159),g=a(1160),S=a(836),v=a.n(S),N=a(56),y=a(168),C=(a(812),a(813),a(793)),k=a.n(C),U=a(802),j=a(803),O=a(816),A=a.n(O),w=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:A()(Object(U.convertToRaw)(e.getCurrentContent()))})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=s.props.match.params.id;y.a.post("/admin/edit_aboutus/".concat(t),s.state).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/pageSetUp/about/AllaboutUs")})).catch((function(e){console.log(e.response)}))},s.state={dealer:"",desc:"",editorState:U.EditorState.createEmpty()},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;y.a.get("/admin/getone_aboutus/".concat(t)).then((function(t){console.log(t.data.data.desc);var a=t.data.data.desc,n=U.ContentState.createFromBlockArray(Object(U.convertFromHTML)(a)),o=U.EditorState.createWithContent(n);e.setState({desc:a,editorState:o})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/",tag:"a"},"Home"),i.a.createElement(p.a,{active:!0},"Edit About Us"))))),i.a.createElement(b.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit AboutUs")),i.a.createElement(d.a,null,i.a.createElement(N.b,{render:function(e){var t=e.history;return i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/pageSetUp/about/AllaboutUs")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Descripition"),i.a.createElement(j.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,defaultContentState:v()(this.state.desc),toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update AboutUs")))))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=190.496ddf98.chunk.js.map