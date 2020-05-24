module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){t.exports=n(14)()},function(t,e,n){"use strict";t.exports=n(12)},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(10);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(11),o=n(1);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(13),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||_}function S(){}function C(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||_}g.prototype.isReactComponent={},g.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(v(85));this.updater.enqueueSetState(this,t,e,"setState")},g.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},S.prototype=g.prototype;var x=C.prototype=new S;x.constructor=C,r(x,g.prototype),x.isPureReactComponent=!0;var w={current:null},O=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,n){var r,o={},i=null,a=null;if(null!=e)for(r in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(i=""+e.key),e)O.call(e,r)&&!E.hasOwnProperty(r)&&(o[r]=e[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(t&&t.defaultProps)for(r in u=t.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:t,key:i,ref:a,props:o,_owner:w.current}}function R(t){return"object"==typeof t&&null!==t&&t.$$typeof===c}var B=/\/+/g,k=[];function T(t,e,n,r){if(k.length){var o=k.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function P(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>k.length&&k.push(t)}function I(t,e,n){return null==t?0:function t(e,n,r,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case i:u=!0}}if(u)return r(o,e,""===n?"."+U(e,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+U(a=e[s],s);u+=t(a,l,r,o)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)u+=t(a=a.value,l=n+U(a,s++),r,o);else if("object"===a)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}(t,"",e,n)}function U(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function $(t,e){t.func.call(t.context,e,t.count++)}function M(t,e,n){var r=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?V(t,r,n,(function(t){return t})):null!=t&&(R(t)&&(t=function(t,e){return{$$typeof:c,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(B,"$&/")+"/")+n)),r.push(t))}function V(t,e,n,r,o){var c="";null!=n&&(c=(""+n).replace(B,"$&/")+"/"),I(t,M,e=T(e,c,r,o)),P(e)}var A={current:null};function N(){var t=A.current;if(null===t)throw Error(v(321));return t}var D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:function(t,e,n){if(null==t)return t;var r=[];return V(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;I(t,$,e=T(null,null,e,n)),P(e)},count:function(t){return I(t,(function(){return null}),null)},toArray:function(t){var e=[];return V(t,e,null,(function(t){return t})),e},only:function(t){if(!R(t))throw Error(v(143));return t}},e.Component=g,e.Fragment=a,e.Profiler=s,e.PureComponent=C,e.StrictMode=u,e.Suspense=h,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,e.cloneElement=function(t,e,n){if(null==t)throw Error(v(267,t));var o=r({},t.props),i=t.key,a=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,u=w.current),void 0!==e.key&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)O.call(e,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==s?s[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:c,type:t.type,key:i,ref:a,props:o,_owner:u}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:p,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=j,e.createFactory=function(t){var e=j.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:f,render:t}},e.isValidElement=R,e.lazy=function(t){return{$$typeof:m,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return N().useCallback(t,e)},e.useContext=function(t,e){return N().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return N().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return N().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return N().useLayoutEffect(t,e)},e.useMemo=function(t,e){return N().useMemo(t,e)},e.useReducer=function(t,e,n){return N().useReducer(t,e,n)},e.useRef=function(t){return N().useRef(t)},e.useState=function(t){return N().useState(t)},e.version="16.13.1"},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,u=i(t),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(u[l]=n[l]);if(r){a=r(n);for(var p=0;p<a.length;p++)c.call(n,a[p])&&(u[a[p]]=n[a[p]])}}return u}},function(t,e,n){"use strict";var r=n(15);function o(){}function c(){}c.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,c,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var r=n(17),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],u=e.base?c[0]+e.base:c[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var p=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:y(f,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=c(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,p=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var c=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(c,i[e]):t.appendChild(c)}}function h(t,e,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,m=0;function y(t,e){var n,r,o;if(e.singleton){var c=m++;n=d||(d=s(e)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else n=s(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=u(t,e),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}},function(t,e,n){(e=n(19)(!1)).push([t.i,".list-root{height:100vh;overflow:hidden scroll}.list-root>.scrolling-container{scrollbar-width:0;scrollbar-width:none}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),c=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(c).concat([o]).join("\n")}var i,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),c=n(5),i=n.n(c),a=n(6),u=n.n(a),s=n(1),l=n.n(s),p=n(8),f=n.n(p),h=n(9),d=n.n(h),m=n(7),y=n.n(m),v=n(0),_=n.n(v),b=n(3),g=n.n(b),S="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),C=new Uint8Array(16);function x(){if(!S)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(C)}for(var w=[],O=0;O<256;++O)w.push((O+256).toString(16).substr(1));var E=function(t,e){var n=e||0,r=w;return(r[t[n+0]]+r[t[n+1]]+r[t[n+2]]+r[t[n+3]]+"-"+r[t[n+4]]+r[t[n+5]]+"-"+r[t[n+6]]+r[t[n+7]]+"-"+r[t[n+8]]+r[t[n+9]]+"-"+r[t[n+10]]+r[t[n+11]]+r[t[n+12]]+r[t[n+13]]+r[t[n+14]]+r[t[n+15]]).toLowerCase()};var j=function(t,e,n){"string"==typeof t&&(e="binary"===t?new Uint8Array(16):null,t=null);var r=(t=t||{}).random||(t.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){for(var o=n||0,c=0;c<16;++c)e[o+c]=r[c];return e}return E(r)},R=function(){function t(e){var n=this,r=e.component,c=e.propProvider,a=e.data;i()(this,t),_()(this,"computeBatches",(function(t){var e=t.itemCount,n=t.threshold,r=[],o=0,c=e<n?e:n,i=Math.floor(e/n);if(0==i)return[{start:o,end:c}];for(var a=0;a<i;++a,o=c,c+=n)r.push({start:o,end:c});return r[i-1].end=e,r})),_()(this,"makeComponent",(function(t,e,r){return g.a.createElement(n.component,o()({className:"history-item history-item-".concat(t)},n.propProvider(j(),t,e,r,n._data[t])))})),_()(this,"makeComponents",(function(t,e){for(var r=[],o=t;o<e;++o)r.push(n.makeComponent(o,!0,!0));return r})),_()(this,"makeComponentBatch",(function(t,e){for(var r=[],o=t[e],c=o.start,i=o.end,a=c;a<i;++a)r.push(n.makeComponent(a));return r})),_()(this,"addComponents",(function(t,e,n){return n?e.concat(t):t.concat(e)})),_()(this,"updateComponents",(function(t,e,r,o,c,i){var a=t;return r&&a.splice(o,c),a=n.addComponents(a,e,i)})),_()(this,"getElementIndex",(function(t){for(var e=document.getElementsByClassName("history-item"),n=0,r=e.length;n<r;++n)if(e[n].classList.contains("history-item-".concat(t)))return n;return-1})),this._data=a,this.component=r,this.propProvider=c}return u()(t,[{key:"data",set:function(t){this._data=t}}]),t}(),B=n(2),k=n.n(B);n(16);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var P=function(t){f()(n,t);var e=T(n);function n(t){var r;return i()(this,n),r=e.call(this,t),_()(l()(r),"_reconstruct",(function(){r._compQueue=[],r._batches=r.util.computeBatches(r.props),r.util.data=r.props.data,r._currBatch=r.props.direction==r.directions.top?0:r._batches.length-1,r._currDecBatch=0,r._decrementVal=Math.floor(r.props.maxItems/r.props.threshold),r._didScrollUp=!1,r.setState({components:r.util.makeComponentBatch(r._batches,r._currBatch)})})),_()(l()(r),"hanldeScrolledToTop",(function(){r._currBatch>=r._decrementVal&&(r._currDecBatch=r._currBatch-r._decrementVal,r._didScrollUp=!0,--r._currBatch,r.setState((function(t){return{components:r.util.updateComponents(t.components,r.util.makeComponentBatch(r._batches,r._currDecBatch),r.state.components.length>=r.props.maxItems,r.props.maxItems-r.props.threshold,r.state.components.length%r.props.threshold!=0?r.props.threshold+r._itemRemainder:r.props.threshold,!0)}})))})),_()(l()(r),"hanldeScrolledToBottom",(function(){r._currBatch+=1,r.setState((function(t){return{components:r.util.updateComponents(t.components,r.util.makeComponentBatch(r._batches,r._currBatch),r.state.components.length>=r.props.maxItems,0,r.props.threshold,!1)}}))})),_()(l()(r),"handleScroll",(function(){var t=r._containerElem.scrollTop<=1,e=r._containerElem.scrollHeight-r._containerElem.scrollTop-r._containerElem.clientHeight<1;t&&0!=r._currBatch?r.hanldeScrolledToTop():e&&r._currBatch+1<r._batches.length&&r.hanldeScrolledToBottom()})),_()(l()(r),"hanldeScrolledToTop_inv",(function(){--r._currBatch,r._didScrollUp=!0,r.setState((function(t){return{components:r.util.updateComponents(t.components,r.util.makeComponentBatch(r._batches,r._currBatch),r.state.components.length>=r.props.maxItems,r.props.maxItems-r.props.threshold,r.state.components.length%r.props.threshold!=0?r.props.threshold+r._itemRemainder:r.props.threshold,!0)}}))})),_()(l()(r),"hanldeScrolledToBottom_inv",(function(){r._currBatch+r._decrementVal<=r._batches.length-1&&(r._currDecBatch=r._currBatch+r._decrementVal,++r._currBatch,r.setState((function(t){return{components:r.util.updateComponents(t.components,r.util.makeComponentBatch(r._batches,r._currDecBatch),r.state.components.length>=r.props.maxItems,0,r.props.threshold,!1)}})))})),_()(l()(r),"handleScroll_inv",(function(){var t=r._containerElem.scrollTop<=1,e=r._containerElem.scrollHeight-r._containerElem.scrollTop-r._containerElem.clientHeight<1;t&&r._currBatch-1>=0?r.hanldeScrolledToTop_inv():e&&r.hanldeScrolledToBottom_inv()})),_()(l()(r),"handleItemCountChange",(function(t){var e=r.props.direction==r.directions.top&&r._currBatch==r._batches.length-1,n=r.props.direction==r.directions.bottom&&r._currBatch>=r._batches.length-r._decrementVal,o=r.props.itemCount-t;r._compQueue=r.util.makeComponents(o,r.props.itemCount),r._itemRemainder=r.props.itemCount%r.props.threshold,(e||n)&&(r._addedItem=!0,r._batches=r.util.computeBatches(r.props),r._currBatch=r._batches.length-1,r.util.data=r.props.data,r.setState((function(e){return{components:r.util.updateComponents(e.components,r._compQueue,r.state.components.length>=r.props.maxItems,0,t,!1)}}),(function(){r._compQueue=[]})))})),_()(l()(r),"updateAtIndex",(function(t){var e=r.props.direction==r.directions.top?r._currBatch-(r._decrementVal-1):r._currBatch;if(t>=r._batches[e].start){var n=[].concat(r.state.components),o=r.util.getElementIndex(t);-1!=o&&(n[o]=r.util.makeComponent(t)),r.setState({components:n})}})),r.util=new R(r.props),r._currBatch=0,r._deleteValue=0,r._decrementVal=0,r._currDecBatch=0,r._itemRemainder=0,r._addedItem=!1,r._didScrollUp=!1,r._batches=[],r._compQueue=[],r._container=Object(b.createRef)(),r._scrollingContainer=Object(b.createRef)(),r.state={components:[]},r.directions={top:"top",bottom:"bottom"},r}return u()(n,[{key:"componentDidMount",value:function(){var t=this;this._batches=this.util.computeBatches(this.props),this._currBatch=this.props.direction==this.directions.top?0:this._batches.length-1,this._decrementVal=Math.floor(this.props.maxItems/this.props.threshold),this._itemRemainder=this.props.itemCount%this.props.threshold,this._containerElem=this._container.current,this._containerElem.addEventListener("scroll",this.props.direction==this.directions.top?this.handleScroll:this.handleScroll_inv),this._scrollingContainerElem=this._scrollingContainer.current,this.setState({components:this.util.makeComponentBatch(this._batches,this._currBatch)},(function(){t.props.direction==t.directions.bottom&&(t._containerElem.scrollTop=t._containerElem.scrollHeight)})),this.props.innerRef&&(this.props.innerRef.current={updateAtIndex:this.updateAtIndex})}},{key:"componentDidUpdate",value:function(t){t.dataKey!=this.props.dataKey?this._reconstruct():this.props.itemCount!=t.itemCount?this.handleItemCountChange(this.props.itemCount-t.itemCount):this._didScrollUp?(this._didScrollUp=!1,this._containerElem.scrollTop=.2*this._scrollingContainerElem.scrollHeight):this._addedItem&&this.props.followNewItems&&(this._addedItem=!1,this._containerElem.scrollTo(0,this._scrollingContainerElem.scrollHeight))}},{key:"render",value:function(){return g.a.createElement("div",{className:"list-root",ref:this._container},g.a.createElement("div",{className:"scrolling-container",ref:this._scrollingContainer},this.state.components))}}]),n}(b.PureComponent);_()(P,"propTypes",{ref:k.a.func,data:k.a.array.isRequired,dataKey:k.a.any.isRequired,maxItems:k.a.number.isRequired,itemCount:k.a.number.isRequired,threshold:k.a.number.isRequired,component:k.a.elementType.isRequired,propProvider:k.a.func.isRequired,followNewItems:k.a.bool,direction:k.a.oneOf(["top","bottom"])}),_()(P,"defaultProps",{direction:"top",threshold:20,maxItems:60});var I=g.a.forwardRef((function(t,e){return g.a.createElement(P,o()({},t,{innerRef:e}))}));e.default=I}]);