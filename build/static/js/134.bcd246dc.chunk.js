/*! For license information please see 134.bcd246dc.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[134],{1331:function(e,t,n){(function(n){var r,a,o;a=[],void 0===(o="function"===typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,n,i){var c=o.URL||o.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):r(l.href)?t(e,n,i):a(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),n);else if(r(e))t(e,n,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,n,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var c="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&l||i)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},s.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});o.saveAs=c.saveAs=c,e.exports=c})?r.apply(t,a):r)||(e.exports=o)}).call(this,n(24))},2423:function(e,t,n){"use strict";n.r(t);var r=n(71),a=n(13),o=n(14),i=n(16),c=n(15),l=n(0),u=n.n(l),s=n(1141),d=n(1142),f=n(1143),h=n(1146),p=n(787),m=n(790),g=n(788),v=n(786),y=n(1161),w=n(172),b=(n(1331),n(168)),E=n(169),x=n(796),S=n(304),L=n(437),k=n(259),N=(n(797),n(564),n(56));function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var s={};function d(){}function f(){}function h(){}var p={};c(p,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==t&&n.call(g,a)&&(p=g);var v=h.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=h,c(v,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),c(v,i,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var P=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={rowData:[],down:"",paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"P&L Image",field:"pnlimg",width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{src:e.data.pnlimg[0],alt:"P&L",height:200}))}},{headerName:"User Name",field:"firstname",width:200,cellRendererFramework:function(e){var t,n;return u.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},u.a.createElement("span",null,null===(t=e.data.userId)||void 0===t?void 0:t.firstname," ",null===(n=e.data.userId)||void 0===n?void 0:n.lastname))}},{headerName:"Email Id",field:"email",width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(t=e.data.userId)||void 0===t?void 0:t.email))}},{headerName:"Moblie",field:"mobile",width:200,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(t=e.data.userId)||void 0===t?void 0:t.mobile))}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(N.b,{render:function(e){var n=e.history;return u.a.createElement(S.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return n.push("/app/trade/ViewpnLSheet/".concat(t.data._id))}})}}),u.a.createElement(L.a,{size:20,color:"red",onClick:function(){var n=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:n})}}))}}]},e.handleDownload=function(){var e=document.createElement("a");e.href="https://example.com/image.jpg",e.download="image.jpg",document.body.appendChild(e),e.click(),document.body.removeChild(e)},e.sayHello=function(e,t){fetch(e).then((function(e){return e.blob()})).then((function(e){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(n)})).catch((function(){return alert("An error sorry")}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(j().mark((function e(){var t=this;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/admin/getPnlSheet").then((function(e){t.setState({down:e.data.data[0].pnlimg[0]});var n=e.data.data;t.setState({rowData:n})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(r.a)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,b.a.get("/dltPnlsheet/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.rowData,r=t.columnDefs,a=t.defaultColDef;return u.a.createElement(s.a,{className:"app-user-list"},u.a.createElement(d.a,{sm:"12"}),u.a.createElement(d.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(s.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"P&L Screenshort List"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(p.a,{className:"p-1 ag-dropdown"},u.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(k.a,{className:"ml-50",size:15})),u.a.createElement(g.a,{right:!0},u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(y.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(E.a.Consumer,null,(function(t){return u.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:r,rowData:n,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),n}(u.a.Component);t.default=P}}]);
//# sourceMappingURL=134.bcd246dc.chunk.js.map