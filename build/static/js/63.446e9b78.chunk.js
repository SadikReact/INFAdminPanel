(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[63],{2245:function(e,t,n){"use strict";var o=n(2246).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},2246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(0)),r=a(n(2247));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?y(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return m(y(n=s(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,l=t.children,i=t.options,u=o.default.Children.only(l),p=(0,r.default)(a,i);c&&c(a,p),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=i(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&p(n.prototype,a),c&&p(n,c),t}(o.default.PureComponent);t.CopyToClipboard=b,m(b,"defaultProps",{onCopy:void 0,options:void 0})},2247:function(e,t,n){"use strict";var o=n(2248),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,l,i,u,p=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),l=document.createRange(),i=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},2248:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2481:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n(14),a=n(16),c=n(15),l=n(0),i=n.n(l),u=n(811),p=n(1141),s=n(1142),f=n(1143),y=n(1144),d=n(1145),m=n(1146),b=n(1161),h=n(172),v=n(2245),C=n(855),g=(n(853),n(941),function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={value:"Copy Me!",copied:!1},e.handleCopy=function(t){var n=t.target.value;e.setState({value:n,copied:!1})},e.onCopy=function(){e.setState({copied:!0}),C.f.success("Text Copied Successfully",{position:C.f.POSITION.TOP_CENTER,autoClose:2e3})},e}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),i.a.createElement(p.a,null,i.a.createElement(s.a,{sm:"12"},i.a.createElement(f.a,null,i.a.createElement(y.a,null,i.a.createElement(d.a,null,"Clipboard")),i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(s.a,{md:"2",sm:"12",className:"pr-md-0 mb-1"},i.a.createElement(b.a,{value:this.state.value,onChange:this.handleCopy})),i.a.createElement(s.a,{md:"2",sm:"12",className:"mb-1"},i.a.createElement(v.CopyToClipboard,{onCopy:this.onCopy,text:this.state.value},i.a.createElement(h.a.Ripple,{color:"primary"},"Copy!")),i.a.createElement(C.d,null))))))))}}]),n}(i.a.Component));t.default=g},811:function(e,t,n){"use strict";var o=n(13),r=n(14),a=n(16),c=n(15),l=n(0),i=n.n(l),u=n(1141),p=n(1142),s=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(p.a,{sm:"12",className:"ml-50"},i.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):i.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),n}(i.a.Component);t.a=s},941:function(e,t,n){}}]);
//# sourceMappingURL=63.446e9b78.chunk.js.map