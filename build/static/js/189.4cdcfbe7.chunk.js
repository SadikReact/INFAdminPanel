(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{2413:function(e,t,a){"use strict";a.r(t);var o=a(51),n=a(13),r=a(14),s=a(16),i=a(15),c=a(0),l=a.n(c),d=a(1144),m=a(1147),u=a(798),p=a(171),b=(a(855),a(828)),h=a(829),f=a(806),S=a.n(f),g=(a(840),a(803),a(168)),v=a(796),E=a.n(v),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:S()(Object(b.convertToRaw)(e.getCurrentContent()))})},r.changeHandler=function(e){r.setState(Object(o.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),g.a.post("/admin/addPrmiumSrvc",r.state).then((function(e){console.log(e),r.props.history.push("/app/premium/paidServeiceList"),E()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},r.state={desc:"",editorState:b.EditorState.createEmpty()},r.state={pack_nameM:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/admin/plan_list").then((function(t){console.log(t),e.setState({pack_nameM:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{onSubmit:this.submitHandler},l.a.createElement(h.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(p.a,{color:"primary"}," Add Paid Serveice"))))}}]),a}(l.a.Component);t.default=k},803:function(e,t,a){}}]);
//# sourceMappingURL=189.4cdcfbe7.chunk.js.map