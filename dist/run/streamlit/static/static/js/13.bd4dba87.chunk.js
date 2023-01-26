(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[13],{1517:function(e,t,r){"use strict";var n,o=r(0),i=r.n(o),a=r(19),c="small",u="medium",l="large",s=r(30),f=r(90);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t;return(t={},g(t,c,"2px"),g(t,u,"4px"),g(t,l,"8px"),t)[e]}var y=Object(s.a)("div",(function(e){return{width:"100%"}}));y.displayName="StyledRoot",y.displayName="StyledRoot";var v=Object(s.a)("div",(function(e){var t=e.$theme.sizing;return{display:"flex",marginLeft:t.scale500,marginRight:t.scale500,marginTop:t.scale500,marginBottom:t.scale500}}));v.displayName="StyledBarContainer",v.displayName="StyledBarContainer";var h=Object(s.a)("div",(function(e){var t=e.$theme,r=e.$size,n=e.$steps,o=t.colors,i=t.sizing,a=t.borders.useRoundedCorners?i.scale0:0;return b({borderTopLeftRadius:a,borderTopRightRadius:a,borderBottomRightRadius:a,borderBottomLeftRadius:a,backgroundColor:Object(f.b)(o.progressbarTrackFill,"0.16"),height:m(r),flex:1,overflow:"hidden"},n<2?{}:{marginLeft:i.scale300,":first-child":{marginLeft:"0"}})}));h.displayName="StyledBar",h.displayName="StyledBar";var O=Object(s.a)("div",(function(e){var t=e.$theme,r=e.$value,n=e.$successValue,o=e.$steps,i=e.$index,a=e.$maxValue,c=e.$minValue,u=void 0===c?0:c,l=a||n,s=t.colors,f=t.sizing,d=t.borders,p="".concat(100-100*(r-u)/(l-u),"%"),g="awaits",m="inProgress",y="completed",v="default";if(o>1){var h=(l-u)/o,O=(r-u)/(l-u)*100,w=Math.floor(O/h);v=i<w?y:i===w?m:g}var j=d.useRoundedCorners?f.scale0:0,D={transform:"translateX(-".concat(p,")")},P=v===m?{animationDuration:"2.1s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,animationName:{"0%":{transform:"translateX(-102%)",opacity:1},"50%":{transform:"translateX(0%)",opacity:1},"100%":{transform:"translateX(0%)",opacity:0}}}:v===y?{transform:"translateX(0%)"}:{transform:"translateX(-102%)"};return b({borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,backgroundColor:s.accent,height:"100%",width:"100%",transform:"translateX(-102%)",transition:"transform 0.5s"},o>1?P:D)}));O.displayName="StyledBarProgress",O.displayName="StyledBarProgress";var w=Object(s.a)("div",(function(e){var t=e.$theme,r=e.$isLeft,n=void 0!==r&&r,o=e.$size,i=void 0===o?u:o,a=t.colors,c=t.sizing,l=t.borders.useRoundedCorners?c.scale0:0,s=m(i),f={display:"inline-block",flex:1,marginLeft:"auto",marginRight:"auto",transitionProperty:"background-position",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,backgroundSize:"300% auto",backgroundRepeat:"no-repeat",backgroundPositionX:n?"-50%":"150%",backgroundImage:"linear-gradient(".concat(n?"90":"270","deg, transparent 0%, ").concat(a.accent," 25%, ").concat(a.accent," 75%, transparent 100%)"),animationName:n?{"0%":{backgroundPositionX:"-50%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"150%"}}:{"0%":{backgroundPositionX:"150%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"-50%"}}};return b(b({},n?{borderTopLeftRadius:l,borderBottomLeftRadius:l}:{borderTopRightRadius:l,borderBottomRightRadius:l}),{},{height:s},f)}));w.displayName="StyledInfiniteBar",w.displayName="StyledInfiniteBar";var j=Object(s.a)("div",(function(e){return b(b({textAlign:"center"},e.$theme.typography.font150),{},{color:e.$theme.colors.contentTertiary})}));j.displayName="StyledLabel",j.displayName="StyledLabel";var D=(g(n={},l,{d:"M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195",width:95,height:48,strokeWidth:8,typography:"LabelLarge"}),g(n,u,{d:"M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195",width:78,height:36,strokeWidth:4,typography:"LabelMedium"}),g(n,c,{d:"M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195",width:64,height:26,strokeWidth:2,typography:"LabelSmall"}),n),P=Object(s.a)("div",(function(e){var t=e.$size,r=e.$inline;return{width:D[t].width+"px",height:D[t].height+"px",position:"relative",display:r?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}));P.displayName="StyledProgressBarRoundedRoot",P.displayName="StyledProgressBarRoundedRoot";var S=Object(s.a)("svg",(function(e){var t=e.$size;return{width:D[t].width+"px",height:D[t].height+"px",position:"absolute",fill:"none"}}));S.displayName="_StyledProgressBarRoundedSvg",S.displayName="_StyledProgressBarRoundedSvg";Object(s.d)(S,(function(e){return function(t){return i.a.createElement(e,d({viewBox:"0 0 ".concat(D[t.$size].width," ").concat(D[t.$size].height),xmlns:"http://www.w3.org/2000/svg"},t))}}));var k=Object(s.a)("path",(function(e){var t=e.$theme,r=e.$size;return{stroke:t.colors.backgroundTertiary,strokeWidth:D[r].strokeWidth+"px"}}));k.displayName="_StyledProgressBarRoundedTrackBackground",k.displayName="_StyledProgressBarRoundedTrackBackground";Object(s.d)(k,(function(e){return function(t){return i.a.createElement(e,d({d:D[t.$size].d},t))}}));var R=Object(s.a)("path",(function(e){var t=e.$theme,r=e.$size,n=e.$visible,o=e.$pathLength,i=e.$pathProgress;return{visibility:n?"visible":"hidden",stroke:t.colors.borderAccent,strokeWidth:D[r].strokeWidth+"px",strokeDasharray:o,strokeDashoffset:o*(1-i)+""}}));R.displayName="_StyledProgressBarRoundedTrackForeground",R.displayName="_StyledProgressBarRoundedTrackForeground";Object(s.d)(R,(function(e){return function(t){return i.a.createElement(e,d({d:D[t.$size].d},t))}}));var C=Object(s.a)("div",(function(e){var t=e.$theme,r=e.$size;return b({color:t.colors.contentPrimary},t.typography[D[r].typography])}));function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}C.displayName="StyledProgressBarRoundedText",C.displayName="StyledProgressBarRoundedText";var E=["overrides","getProgressLabel","value","size","steps","successValue","minValue","maxValue","showLabel","infinite","errorMessage","forwardedRef"];function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return V(this,r)}}function V(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I,H,_,X=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,r,n,i=N(c);function c(){return B(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.overrides,r=void 0===t?{}:t,n=e.getProgressLabel,i=e.value,c=e.size,u=e.steps,l=e.successValue,s=e.minValue,f=e.maxValue,d=e.showLabel,p=e.infinite,b=e.errorMessage,g=e.forwardedRef,m=$(e,E),D=this.props["aria-label"]||this.props.ariaLabel,P=100!==f?f:l,S=z(Object(a.c)(r.Root,y),2),k=S[0],R=S[1],C=z(Object(a.c)(r.BarContainer,v),2),x=C[0],F=C[1],B=z(Object(a.c)(r.Bar,h),2),L=B[0],T=B[1],N=z(Object(a.c)(r.BarProgress,O),2),V=N[0],M=N[1],I=z(Object(a.c)(r.Label,j),2),H=I[0],_=I[1],X=z(Object(a.c)(r.InfiniteBar,w),2),K=X[0],W=X[1],U={$infinite:p,$size:c,$steps:u,$successValue:P,$minValue:s,$maxValue:P,$value:i};return o.createElement(k,A({ref:g,"data-baseweb":"progress-bar",role:"progressbar","aria-label":D||n(i,P,s),"aria-valuenow":p?null:i,"aria-valuemin":p?null:s,"aria-valuemax":p?null:P,"aria-invalid":!!b||null,"aria-errormessage":b},m,U,R),o.createElement(x,A({},U,F),p?o.createElement(o.Fragment,null,o.createElement(K,A({$isLeft:!0,$size:U.$size},W)),o.createElement(K,A({$size:U.$size},W))):function(){for(var e=[],t=0;t<u;t++)e.push(o.createElement(L,A({key:t},U,T),o.createElement(V,A({$index:t},U,M))));return e}()),d&&o.createElement(H,A({},U,_),n(i,P,s)))}}])&&L(t.prototype,r),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.Component);_={getProgressLabel:function(e,t,r){return"".concat(Math.round((e-r)/(t-r)*100),"% Loaded")},infinite:!1,overrides:{},showLabel:!1,size:u,steps:1,successValue:100,minValue:0,maxValue:100,value:0},(H="defaultProps")in(I=X)?Object.defineProperty(I,H,{value:_,enumerable:!0,configurable:!0,writable:!0}):I[H]=_;var K=o.forwardRef((function(e,t){return o.createElement(X,A({forwardedRef:t},e))}));K.displayName="ProgressBar";t.a=K},1685:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},1695:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(13),a=r.n(i),c=r(436),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function l(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=u.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var s=[".DS_Store","Thumbs.db"];function f(e){return(null!==e.target&&e.target.files?b(e.target.files):[]).map((function(e){return l(e)}))}function d(e,t){return Object(c.b)(this,void 0,void 0,(function(){var r;return Object(c.c)(this,(function(n){switch(n.label){case 0:return e.items?(r=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(g))]):[3,2];case 1:return[2,p(m(n.sent()))];case 2:return[2,p(b(e.files).map((function(e){return l(e)})))]}}))}))}function p(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function b(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function g(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?h(t):y(e)}function m(e){return e.reduce((function(e,t){return Object(c.d)(e,Array.isArray(t)?m(t):[t])}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=l(t);return Promise.resolve(r)}function v(e){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.c)(this,(function(t){return[2,e.isDirectory?h(e):O(e)]}))}))}function h(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return Object(c.b)(i,void 0,void 0,(function(){var i,a,u;return Object(c.c)(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),r(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(v)),n.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function O(e){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.c)(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=l(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var w=r(1685),j=r.n(w);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},k=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},R=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},C={code:"too-many-files",message:"Too many files"};function x(e,t){var r="application/x-moz-file"===e.type||j()(e,t);return[r,r?null:S(t)]}function E(e,t,r){if(A(e.size))if(A(t)&&A(r)){if(e.size>r)return[!1,k(r)];if(e.size<t)return[!1,R(t)]}else{if(A(t)&&e.size<t)return[!1,R(t)];if(A(r)&&e.size>r)return[!1,k(r)]}return[!0,null]}function A(e){return void 0!==e&&null!==e}function z(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=D(x(e,r),1)[0],i=D(E(e,n,o),1)[0];return t&&i}))}function F(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function $(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function B(e){e.preventDefault()}function L(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function T(e){return-1!==e.indexOf("Edge/")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return L(e)||T(e)}function V(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!F(e)&&t&&t.apply(void 0,[e].concat(n)),F(e)}))}}function M(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||H(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||H(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){if(e){if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var q=Object(n.forwardRef)((function(e,t){var r=e.children,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=K(K({},G),e),r=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,p=t.onDrop,b=t.onDropAccepted,g=t.onDropRejected,m=t.onFileDialogCancel,y=t.preventDropOnDocument,v=t.noClick,h=t.noKeyboard,O=t.noDrag,w=t.noDragEventsBubbling,j=Object(n.useRef)(null),D=Object(n.useRef)(null),P=I(Object(n.useReducer)(Q,J),2),S=P[0],k=P[1],R=S.isFocused,A=S.isFileDialogActive,L=S.draggedFiles,T=Object(n.useCallback)((function(){D.current&&(k({type:"openDialog"}),D.current.value=null,D.current.click())}),[k]),H=function(){A&&setTimeout((function(){D.current&&(D.current.files.length||(k({type:"closeDialog"}),"function"===typeof m&&m()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",H,!1),function(){window.removeEventListener("focus",H,!1)}}),[D,A,m]);var _=Object(n.useCallback)((function(e){j.current&&j.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),T()))}),[j,D]),X=Object(n.useCallback)((function(){k({type:"focus"})}),[]),q=Object(n.useCallback)((function(){k({type:"blur"})}),[]),Y=Object(n.useCallback)((function(){v||(N()?setTimeout(T,0):T())}),[D,v]),Z=Object(n.useRef)([]),ee=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),Z.current=[])};Object(n.useEffect)((function(){return y&&(document.addEventListener("dragover",B,!1),document.addEventListener("drop",ee,!1)),function(){y&&(document.removeEventListener("dragover",B),document.removeEventListener("drop",ee))}}),[j,y]);var te=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e),Z.current=[].concat(M(Z.current),[e.target]),$(e)&&Promise.resolve(i(e)).then((function(t){F(e)&&!w||(k({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,w]),re=Object(n.useCallback)((function(e){if(e.preventDefault(),e.persist(),ue(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return $(e)&&d&&d(e),!1}),[d,w]),ne=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e);var t=Z.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Z.current=t,t.length>0||(k({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),$(e)&&f&&f(e))}),[j,f,w]),oe=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e),Z.current=[],$(e)&&Promise.resolve(i(e)).then((function(t){if(!F(e)||w){var n=[],o=[];t.forEach((function(e){var t=I(x(e,r),2),i=t[0],u=t[1],l=I(E(e,c,a),2),s=l[0],f=l[1];if(i&&s)n.push(e);else{var d=[u,f].filter((function(e){return e}));o.push({file:e,errors:d})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){o.push({file:e,errors:[C]})})),n.splice(0)),k({acceptedFiles:n,fileRejections:o,type:"setFiles"}),p&&p(n,o,e),o.length>0&&g&&g(o,e),n.length>0&&b&&b(n,e)}})),k({type:"reset"})}),[u,r,c,a,l,i,p,b,g,w]),ie=function(e){return o?null:e},ae=function(e){return h?null:ie(e)},ce=function(e){return O?null:ie(e)},ue=function(e){w&&e.stopPropagation()},le=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,d=U(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return K(K(W({onKeyDown:ae(V(n,_)),onFocus:ae(V(i,X)),onBlur:ae(V(a,q)),onClick:ie(V(c,Y)),onDragEnter:ce(V(u,te)),onDragOver:ce(V(l,re)),onDragLeave:ce(V(s,ne)),onDrop:ce(V(f,oe))},r,j),o||h?{}:{tabIndex:0}),d)}}),[j,_,X,q,Y,te,re,ne,oe,h,O,o]),se=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),fe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=U(e,["refKey","onChange","onClick"]);return K(K({},W({accept:r,multiple:u,type:"file",style:{display:"none"},onChange:ie(V(o,oe)),onClick:ie(V(i,se)),autoComplete:"off",tabIndex:-1},n,D)),a)}}),[D,r,u,oe,o]),de=L.length,pe=de>0&&z({files:L,accept:r,minSize:c,maxSize:a,multiple:u,maxFiles:l}),be=de>0&&!pe;return K(K({},S),{},{isDragAccept:pe,isDragReject:be,isFocused:R&&!o,getRootProps:le,getInputProps:fe,rootRef:j,inputRef:D,open:ie(T)})}(U(e,["children"])),a=i.open,c=U(i,["open"]);return Object(n.useImperativeHandle)(t,(function(){return{open:a}}),[a]),o.a.createElement(n.Fragment,null,r(K(K({},c),{},{open:a})))}));q.displayName="Dropzone";var G={disabled:!1,getFilesFromEvent:function(e){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.c)(this,(function(t){return[2,(r=e,r.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):f(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};q.defaultProps=G,q.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,maxFiles:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func};t.a=q;var J={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Q(e,t){switch(t.type){case"focus":return K(K({},e),{},{isFocused:!0});case"blur":return K(K({},e),{},{isFocused:!1});case"openDialog":return K(K({},e),{},{isFileDialogActive:!0});case"closeDialog":return K(K({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return K(K({},e),{},{draggedFiles:n,isDragActive:r});case"setFiles":return K(K({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return K(K({},e),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}},1762:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(78),o=r.n(n),i=r(0),a=r(50),c=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.createElement("path",{d:"M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0112 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0122 15c0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"}))}));c.displayName="CloudUpload"},1763:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(78),o=r.n(n),i=r(0),a=r(50),c=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"}))}));c.displayName="ChevronLeft"},1764:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(78),o=r.n(n),i=r(0),a=r(50),c=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}))}));c.displayName="Error"},1765:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(78),o=r.n(n),i=r(0),a=r(50),c=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"}))}));c.displayName="InsertDriveFile"},1766:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(78),o=r.n(n),i=r(0),a=r(50),c=i.forwardRef((function(e,t){return i.createElement(a.a,o()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))}));c.displayName="Clear"}}]);