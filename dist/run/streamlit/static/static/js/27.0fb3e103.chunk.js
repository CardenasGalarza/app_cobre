(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[27],{1322:function(e,t,r){"use strict";r(0);var n,o=r(43),i=r(132),a=r(5),u=r(159),c=r(9),l=r(53),s=Object(l.c)(n||(n=Object(u.a)(["\n  50% {\n    color: rgba(0, 0, 0, 0);\n  }\n"]))),p=Object(c.a)("span",{target:"e1m4n6jn0"})((function(e){var t=e.includeDot,r=e.shouldBlink,n=e.theme;return Object(a.a)(Object(a.a)({},t?{"&::before":{opacity:1,content:'"\u2022"',animation:"none",color:n.colors.gray,margin:"0 5px"}}:{}),r?{color:n.colors.red,animationName:"".concat(s),animationDuration:"0.5s",animationIterationCount:5}:{})}),""),f=r(1);t.a=function(e){var t=e.dirty,r=e.value,n=e.maxLength,a=e.className,u=e.type,c=[],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.push(Object(f.jsx)(p,{includeDot:c.length>0,shouldBlink:t,children:e},c.length))};return t&&("multiline"===(void 0===u?"single":u)?Object(o.g)()?l("Press \u2318+Enter to apply"):l("Press Ctrl+Enter to apply"):l("Press Enter to apply")),n&&l("".concat(r.length,"/").concat(n),t&&r.length>=n),Object(f.jsx)(i.a,{className:a,children:c})}},1782:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return W}));var n=r(2),o=r(4),i=r(6),a=r(7),u=r(0),c=r.n(u),l=r(214),s=r(19),p=r(1415),f=r(58),d=r(30),y=r(1295);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(d.a)("div",(function(e){return m(m({},Object(y.j)(m(m({$positive:!1},e),{},{$hasIconTrailing:!1}))),{},{width:e.$resize?"fit-content":"100%"})}));v.displayName="StyledTextAreaRoot",v.displayName="StyledTextAreaRoot";var O=Object(d.a)("div",(function(e){return Object(y.h)(m({$positive:!1},e))}));O.displayName="StyledTextareaContainer",O.displayName="StyledTextareaContainer";var g=Object(d.a)("textarea",(function(e){return m(m({},Object(y.i)(e)),{},{resize:e.$resize||"none"})}));function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return(F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(e,t){if(t&&("object"===j(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}g.displayName="StyledTextarea",g.displayName="StyledTextarea";var B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(i,e);var t,r,n,o=k(i);function i(){var e;S(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(V(e=o.call.apply(o,[this].concat(r))),"state",{isFocused:e.props.autoFocus||!1}),E(V(e),"onFocus",(function(t){e.setState({isFocused:!0}),e.props.onFocus(t)})),E(V(e),"onBlur",(function(t){e.setState({isFocused:!1}),e.props.onBlur(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this.props.overrides,t=void 0===e?{}:e,r=P(Object(s.c)(t.Root,v),2),n=r[0],o=r[1],i=Object(s.e)({Input:{component:g},InputContainer:{component:O}},t);return u.createElement(n,w({"data-baseweb":"textarea",$isFocused:this.state.isFocused,$isReadOnly:this.props.readOnly,$disabled:this.props.disabled,$error:this.props.error,$positive:this.props.positive,$required:this.props.required,$resize:this.props.resize},o),u.createElement(p.a,w({},this.props,{type:f.b.textarea,overrides:i,onFocus:this.onFocus,onBlur:this.onBlur,resize:this.props.resize})))}}])&&C(t.prototype,r),n&&C(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(u.Component);E(B,"defaultProps",{autoFocus:!1,disabled:!1,readOnly:!1,error:!1,name:"",onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},onFocus:function(){},overrides:{},placeholder:"",required:!1,rows:3,size:f.d.default});var $=B,A=r(1322),R=r(132),U=r(133),I=r(63),K=r(43),N=r(9);var z=Object(N.a)("div",{target:"e1y61itm0"})({name:"1om1ktf",styles:"div{border-width:1px;}"}),_=r(1),W=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).formClearHelper=new l.b,e.state={dirty:!1,value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t),e.setState({dirty:!1})},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onBlur=function(){e.state.dirty&&e.commitWidgetValue({fromUi:!0})},e.onChange=function(t){var r=t.target.value,n=e.props.element.maxChars;0!==n&&r.length>n||(Object(K.i)(e.props.element)?e.setState({dirty:!1,value:r},(function(){return e.commitWidgetValue({fromUi:!0})})):e.setState({dirty:!0,value:r}))},e.isEnterKeyPressed=function(e){var t=e.keyCode;return"Enter"===e.key||13===t||10===t},e.onKeyDown=function(t){var r=t.metaKey,n=t.ctrlKey,o=e.state.dirty;e.isEnterKeyPressed(t)&&(n||r)&&o&&(t.preventDefault(),e.commitWidgetValue({fromUi:!0}))},e}return Object(o.a)(r,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e,t=this.props,r=t.element,n=t.disabled,o=t.width,i=t.widgetMgr,a=this.state,u=a.value,c=a.dirty,l={width:o},s=r.height,p=r.placeholder;return this.formClearHelper.manageFormClearListener(i,r.formId,this.onFormCleared),Object(_.jsxs)("div",{className:"stTextArea",style:l,children:[Object(_.jsx)(R.d,{label:r.label,disabled:n,labelVisibility:Object(K.k)(null===(e=r.labelVisibility)||void 0===e?void 0:e.value),children:r.help&&Object(_.jsx)(R.b,{children:Object(_.jsx)(U.a,{content:r.help,placement:I.b.TOP_RIGHT})})}),Object(_.jsx)(z,{children:Object(_.jsx)($,{"data-testid":"stTextArea",value:u,placeholder:p,onBlur:this.onBlur,onChange:this.onChange,onKeyDown:this.onKeyDown,"aria-label":r.label,disabled:n,overrides:{Input:{style:{lineHeight:"1.4",height:s?"".concat(s,"px"):"",minHeight:"95px",resize:"vertical","::placeholder":{opacity:"0.7"},paddingRight:"1rem",paddingLeft:"1rem",paddingBottom:"1rem",paddingTop:"1rem"}}}})}),Object(_.jsx)(A.a,{dirty:c,value:u,maxLength:r.maxChars,type:"multiline"})]})}}]),r}(c.a.PureComponent)}}]);