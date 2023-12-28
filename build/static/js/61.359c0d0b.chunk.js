/*! For license information please see 61.359c0d0b.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),a=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e){return"object"===g(e)},w=function(e){p(n,e);var t=d(n);function n(e){var a;return c(this,n),v(m(a=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!b(e)&&!1!==e})).join(" ")})),v(m(a),"getType",(function(){var e=a.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),a.input=r.default.createRef(),a}return u(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,c=e.inputStyle,l=e.focus,u=e.isDisabled,p=e.hasErrored,f=e.errorStyle,d=e.focusStyle,h=e.disabledStyle,m=(e.shouldAutoFocus,e.isInputNum),y=e.index,v=e.value,g=e.className,w=(e.isInputSecure,s(e,a));return r.default.createElement("div",{className:g,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",i({"aria-label":"".concat(0===y?"Please enter verification code. ":"").concat(m?"Digit":"Character"," ").concat(y+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},b(c)&&c,l&&b(d)&&d,u&&b(h)&&h,p&&b(f)&&f),placeholder:t,className:this.getClasses(c,l&&d,u&&h,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:u,value:v||""},w)),!o&&n)}}]),n}(r.PureComponent),O=function(e){p(n,e);var t=d(n);function n(){var e;c(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return v(m(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),v(m(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),v(m(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),v(m(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),v(m(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),v(m(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),v(m(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),v(m(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),v(m(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),v(m(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,a=r.numInputs;if(!r.isDisabled){for(var o=e.getOtpValue(),i=n,s=t.clipboardData.getData("text/plain").slice(0,a-n).split(""),c=0;c<a;++c)c>=n&&s.length>0&&(o[c]=s.shift(),i++);e.setState({activeInput:i},(function(){e.focusInput(i),e.handleOtpChange(o)}))}})),v(m(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),v(m(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),v(m(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),v(m(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,a=n.numInputs,o=n.inputStyle,i=n.focusStyle,s=n.separator,c=n.isDisabled,l=n.disabledStyle,u=n.hasErrored,p=n.errorStyle,f=n.shouldAutoFocus,d=n.isInputNum,h=n.isInputSecure,m=n.className,y=[],v=e.getOtpValue(),g=e.getPlaceholderValue(),b=e.props["data-cy"],O=e.props["data-testid"],E=function(n){y.push(r.default.createElement(w,{placeholder:g&&g[n],key:n,index:n,focus:t===n,value:v&&v[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:s,inputStyle:o,focusStyle:i,isLastChild:n===a-1,isDisabled:c,disabledStyle:l,hasErrored:u,errorStyle:p,shouldAutoFocus:f,isInputNum:d,isInputSecure:h,className:m,"data-cy":b&&"".concat(b,"-").concat(n),"data-testid":O&&"".concat(O,"-").concat(n)}))},N=0;N<a;N++)E(N);return y})),e}return u(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},b(e)&&e),className:b(e)?"":e},this.renderInputs())}}]),n}(r.Component);v(O,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var E=O;t.default=E},2320:function(e,t,n){e.exports=n.p+"static/media/forgot-password.63f5a96a.png"},2473:function(e,t,n){"use strict";n.r(t);var r=n(71),a=n(51),o=n(13),i=n(14),s=n(16),c=n(15),l=n(0),u=n.n(l),p=n(1143),f=n(1144),d=n(1145),h=n(1146),m=n(1147),y=n(1148),v=n(798),g=n(797),b=n(795),w=n(171),O=n(820),E=n(2320),N=n.n(E),j=(n(27),n(873),n(56)),P=n(1136),x=n.n(P),S=n(168),k=n(794),I=n.n(k);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(x){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=w(i,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(x){return{type:"throw",arg:x}}}e.wrap=c;var u={};function p(){}function f(){}function d(){}var h={};s(h,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&n.call(y,a)&&(h=y);var v=d.prototype=p.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,s){var c=l(e[a],e,o);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=d,s(v,"constructor",d),s(d,"constructor",f),f.displayName=s(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),s(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),s(v,i,"Generator"),s(v,a,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var L=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={mobile:"",email:"",errorValidation:"please enter correct mobile number",isError:!1,forgetScreen:!1,emailotp:"",verifyOTP:"",forgetpass:!1,newPass:"",confirmPass:""},e.handleChangePassword=function(t){if(t.preventDefault(),e.state.newPass===e.state.confirmPass){var n={password:e.state.newPass,cnfmPassword:e.state.confirmPass};S.a.post("/admin/updatePassword/".concat(e.state.adminId),n).then((function(t){console.log(t.data),I()("Pasword Change SuccessFully"),e.props.history.push("/pages/login")})).catch((function(e){I()("Something Went Wrong")}))}else I()("Both Password  Must be same!")},e.handlechange=function(t){t.preventDefault(),e.setState({isError:!1}),e.setState(Object(a.a)({},t.target.name,t.target.value))},e.handleVerifyOtp=function(){var t=Object(r.a)(C().mark((function t(n){var r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r={otp:e.state.emailotp},S.a.post("/admin/varify-otp/".concat(e.state.adminId),r).then((function(t){I()("OTP has been sent to Your Mail Id","Please Verify OTP"),e.setState({forgetpass:!0})})).catch((function(e){console.log(e.response)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleOtp=function(){var t=Object(r.a)(C().mark((function t(n){var r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r={email:e.state.email},S.a.post("/admin/forgetPassword",r).then((function(t){console.log(t.data.data._id),e.setState({adminId:t.data.data._id}),e.setState({forgetScreen:!0})})).catch((function(e){console.log(e.response)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement(p.a,{className:"m-0 justify-content-center"},u.a.createElement(f.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},u.a.createElement(d.a,{className:"bg-authentication rounded-0 mb-0 w-100"},u.a.createElement(p.a,{className:"m-0"},u.a.createElement(f.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},u.a.createElement("img",{src:N.a,alt:"Img"})),this.state.forgetScreen?this.state.forgetpass?u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{lg:"6",md:"12",className:"p-0"},u.a.createElement(d.a,{className:"rounded-0 mb-0 px-2 py-1"},u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(m.a,null,u.a.createElement("h4",{className:"mb-0"},"Enter New Password"))),u.a.createElement(y.a,{className:"pt-1 pb-0"},u.a.createElement(v.a,null,u.a.createElement(g.a,null,"New Password"),u.a.createElement(b.a,{type:"password",name:"newPass",value:this.state.newPass,placeholder:"Password",onChange:this.handlechange}),u.a.createElement(g.a,null,"Confirm Password"),u.a.createElement(b.a,{type:"password",name:"confirmPass",placeholder:"Confirm Password",value:this.state.confirmPass,onChange:this.handlechange}),u.a.createElement("div",{className:"float-md-right d-block my-2"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:this.handleChangePassword},"Change Password"))))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{lg:"6",md:"12",className:"p-0"},u.a.createElement(d.a,{className:"rounded-0 mb-0 px-2 py-1"},u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(m.a,null,u.a.createElement("h4",{className:"mb-0"},"Enter Your OTP"))),u.a.createElement(y.a,{className:"pt-1 pb-0"},u.a.createElement(v.a,null,u.a.createElement(x.a,{containerStyle:"true inputdata",inputStyle:"true inputdataone",className:"otpinputtype",value:this.state.emailotp,name:"emailotp",onChange:function(t){return e.setState({emailotp:t})},numInputs:6,renderSeparator:u.a.createElement("span",null,"-"),renderInput:function(e){return u.a.createElement("input",Object.assign({className:"inputs"},e))}}),u.a.createElement("div",{className:"float-md-right d-block mb-1"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:this.handleVerifyOtp},"Verify OTP"))))))):u.a.createElement(u.a.Fragment,null," ",u.a.createElement(f.a,{lg:"6",md:"12",className:"p-0"},u.a.createElement(d.a,{className:"rounded-0 mb-0 px-2 py-1"},u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(m.a,null,u.a.createElement("h4",{className:"mb-0"},"Recover your password"))),u.a.createElement("p",{className:"px-2 auth-title"},"Please enter your Email and we'll send you OTP, for reset your password."),u.a.createElement(y.a,{className:"pt-1 pb-0"},u.a.createElement(v.a,null,u.a.createElement(O.a,{className:"form-label-group"},u.a.createElement(b.a,{type:"email",name:"email",value:this.state.email,onChange:this.handlechange,placeholder:"Email",required:!0}),u.a.createElement(g.a,null,"Email")),u.a.createElement("div",{className:"float-md-left d-block mb-1"},u.a.createElement(j.b,{render:function(t){t.history;return u.a.createElement(w.a.Ripple,{color:"primary",outline:!0,className:"px-75 btn-block",onClick:function(){return e.props.history.push("/pages/login")}},"Back to Login")}})),u.a.createElement("div",{className:"float-md-right d-block mb-1"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit",className:"px-75 btn-block",onClick:this.handleOtp},"Recover Password")))))))))))}}]),n}(u.a.Component);t.default=L},795:function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(11),i=n(12),s=n(0),c=n.n(s),l=n(1),u=n.n(l),p=n(4),f=n.n(p),d=n(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,y=e.innerRef,v=Object(a.a)(e,h),g=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),w=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",w=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":g&&(O=p?null:"form-check-input"),v.size&&b.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=v.size,delete v.size);var E=Object(d.mapToCssModules)(f()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,O),n);return("input"===w||u&&"function"===typeof u)&&(v.type=o),v.children&&!m&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(w,Object(r.a)({},v,{ref:y,className:E,"aria-invalid":l}))},t}(c.a.Component);y.propTypes=m,y.defaultProps={type:"text"},t.a=y},797:function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(4),u=n.n(l),p=n(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],d=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},y={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,l=e.check,d=e.size,h=e.for,m=Object(a.a)(e,f),y=[];s.forEach((function(t,r){var a=e[t];if(delete m[t],a||""===a){var o,i=!r;if(Object(p.isObject)(a)){var s,c=i?"-":"-"+t+"-";o=v(i,t,a.size),y.push(Object(p.mapToCssModules)(u()(((s={})[o]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s))),n)}else o=v(i,t,a),y.push(o)}}));var g=Object(p.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,y,!!y.length&&"col-form-label"),n);return i.a.createElement(c,Object(r.a)({htmlFor:h},m,{className:g}))};g.propTypes=m,g.defaultProps=y,t.a=g},798:function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(11),i=n(12),s=n(0),c=n.n(s),l=n(1),u=n.n(l),p=n(4),f=n.n(p),d=n(3),h=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,l=Object(a.a)(e,h),u=Object(d.mapToCssModules)(f()(t,!!o&&"form-inline"),n);return c.a.createElement(i,Object(r.a)({},l,{ref:s,className:u}))},t}(s.Component);y.propTypes=m,y.defaultProps={tag:"form"},t.a=y},820:function(e,t,n){"use strict";var r=n(5),a=n(9),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(4),u=n.n(l),p=n(3),f=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,c=e.check,l=e.inline,d=e.tag,h=Object(a.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===d&&(h.disabled=s),i.a.createElement(d,Object(r.a)({},h,{className:m}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},873:function(e,t,n){}}]);
//# sourceMappingURL=61.359c0d0b.chunk.js.map