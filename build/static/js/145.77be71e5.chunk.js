(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[145],{2352:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(51),s=t(13),i=t(14),l=t(16),r=t(15),o=t(0),c=t.n(o),d=t(1141),u=t(1142),m=t(1139),p=t(1140),f=t(1143),b=t(172),h=t(1146),g=t(797),v=t(796),y=t(793),E=t(169),O=t(56),j=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).changeHandler1=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault();var a=i.props.match.params.id;E.a.post("/admin/Editplan/".concat(a),i.state).then((function(e){console.log(e),i.props.history.push("/app/subPlan/SubPlanVideos")})).catch((function(e){console.log(e)}))},i.state={_id:"",video_link:"",associated_plan:""},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/admin/viewoneplan/".concat(a)).then((function(a){console.log(a.data.data.desc),e.setState({_id:a.data.data._id,video_link:a.data.data.video_link,associated_plan:a.data.data.associated_plan})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(m.a,{listTag:"div"},c.a.createElement(p.a,{href:"/",tag:"a"},"Home"),c.a.createElement(p.a,{active:!0},"Edit Traning Video"))))),c.a.createElement(f.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Plan Video")),c.a.createElement(u.a,null,c.a.createElement(O.b,{render:function(e){var a=e.history;return c.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/subplan/SubPlanVideos")}},"Back")}}))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(v.a,null,"Video Link "),c.a.createElement(y.a,{type:"text",name:"video_link",value:this.state.video_link,onChange:this.changeHandler})),c.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(v.a,null,"Associated Plan "),c.a.createElement(y.a,{readOnly:!0,type:"text",name:"associated_plan",value:this.state.associated_plan,onChange:this.changeHandler}))),c.a.createElement(d.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},c.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(o.Component)},793:function(e,a,t){"use strict";var n=t(5),s=t(9),i=t(11),l=t(12),r=t(0),o=t.n(r),c=t(1),d=t.n(c),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,r=e.valid,c=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(i)>-1,y=new RegExp("\\D","g"),E=d||("select"===i||"textarea"===i?i:"input"),O="form-control";b?(O+="-plaintext",E=d||"input"):"file"===i?O+="-file":"range"===i?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(a,c&&"is-invalid",r&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||d&&"function"===typeof d)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},796:function(e,a,t){"use strict";var n=t(5),s=t(9),i=t(0),l=t.n(i),r=t(1),o=t.n(r),c=t(4),d=t.n(c),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,i=e.hidden,r=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,b=Object(s.a)(e,m),h=[];r.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var i,l=!n;if(Object(u.isObject)(s)){var r,o=l?"-":"-"+a+"-";i=g(l,a,s.size),h.push(Object(u.mapToCssModules)(d()(((r={})[i]=s.size||""===s.size,r["order"+o+s.order]=s.order||0===s.order,r["offset"+o+s.offset]=s.offset||0===s.offset,r))),t)}else i=g(l,a,s),h.push(i)}}));var v=Object(u.mapToCssModules)(d()(a,!!i&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},797:function(e,a,t){"use strict";var n=t(5),s=t(9),i=t(11),l=t(12),r=t(0),o=t.n(r),c=t(1),d=t.n(c),u=t(4),m=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.inline,l=e.tag,r=e.innerRef,c=Object(s.a)(e,f),d=Object(p.mapToCssModules)(m()(a,!!i&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},c,{ref:r,className:d}))},a}(r.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=145.77be71e5.chunk.js.map