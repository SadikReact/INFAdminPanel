(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{2419:function(e,a,t){"use strict";t.r(a);var n=t(37),l=t(0),r=t.n(l),c=t(1143),o=t(1141),m=t(1142),s=t(172),i=t(1146),d=t(1159),u=t(1160),b=t(1161),p=t(781),E=t(168),f=t(56),N=t(793),g=t.n(N),h=t(1433),S=(t(853),t(802)),j=t(803),v=t(816),y=t.n(v);t(811),t(812);a.default=function(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],N=a[1],v=Object(l.useState)(null),C=Object(n.a)(v,2),k=C[0],O=C[1],w=Object(l.useState)(""),F=Object(n.a)(w,2),T=F[0],x=F[1],A=Object(l.useState)((function(){return S.EditorState.createEmpty()})),z=Object(n.a)(A,2),D=z[0],G=z[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(o.a,{className:"m-2"},r.a.createElement(m.a,null,r.a.createElement("h1",{className:"float-left"},"Add General Notification")),r.a.createElement(m.a,null,r.a.createElement(f.b,{render:function(e){var a=e.history;return r.a.createElement(s.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/generalNotifList")}},"Back")}}))),r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"m-1",onSubmit:function(e){return function(e){e.preventDefault();var a=new FormData;a.append("title",t),a.append("emoji",T),a.append("desc",y()(Object(S.convertToRaw)(D.getCurrentContent()))),null!==k&&a.append("img",k),E.a.post("/admin/add_notification",a).then((function(e){console.log(e.data.data),g()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))}(e)}},r.a.createElement(o.a,null,r.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(u.a,null,"Title"),r.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:t,onChange:function(e){return N(e.target.value)}})),r.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(u.a,null,"Image"),r.a.createElement(p.a,{type:"file",name:"img",onChange:function(e){var a=e.target.files[0];O(a)}})),r.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"show-emoji"},"Your selected Emoji is:",T?r.a.createElement(h.a,{unified:T,emojiStyle:h.b.APPLE,size:22}):null),r.a.createElement("div",null,r.a.createElement(h.c,{onEmojiClick:function(e){x(e.unified)},autoFocusSearch:!1,emojiStyle:h.b.NATIVE,height:"400px"})))),r.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(j.Editor,{className:"form-control",toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:D,onEditorStateChange:function(e){return G(e)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),r.a.createElement("br",null),r.a.createElement(o.a,null,r.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add General Notification"))))))))}},853:function(e,a,t){}}]);
//# sourceMappingURL=118.f4c77670.chunk.js.map