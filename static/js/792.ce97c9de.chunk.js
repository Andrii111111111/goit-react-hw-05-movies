"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[792],{709:function(e,t,n){n.d(t,{IQ:function(){return u},Jh:function(){return l},NV:function(){return f},Zh:function(){return s},sq:function(){return c}});var r=n(861),o=n(757),a=n.n(o),i=n(294),s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fed317ab3be0f2b7619ff5ef4eb716b2");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=fed317ab3be0f2b7619ff5ef4eb716b2",{params:{query:t}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},549:function(e,t,n){var r=n(689),o=n(87),a=n(184);t.Z=function(e){var t=e.fetchedFilms,n=(0,r.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.original_title})},e.id)}))})}},792:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(861),o=n(439),a=n(757),i=n.n(a),s=n(709),c=n(791),u=n(942),l=n(413);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=n(433);function p(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var m=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(r&&(r+=" "),r+=t);return r},v=["theme","type"],h=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},E=function(e){return y(e)||b(e)?e:null},T=function(e){return(0,c.isValidElement)(e)||y(e)||b(e)||g(e)};function Z(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,u=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(s?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,r)}}function C(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},w=function(e){var t=e.theme,n=e.type,r=f(e,v);return c.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(e){return c.createElement(w,(0,l.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(w,(0,l.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(w,(0,l.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(w,(0,l.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function x(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,c.useState)([]),a=(0,o.Z)(r,2),i=a[0],s=a[1],u=(0,c.useRef)(null),p=(0,c.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function Z(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function w(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=v.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function O(e,t){var r=t.delay,a=t.staleId,i=f(t,h);if(T(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||p.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,d=i.updateId,m=i.data,Z=v.props,O=function(){return w(s)},k=null==d;k&&v.count++;var N,R,M=(0,l.Z)((0,l.Z)((0,l.Z)({},Z),{},{style:Z.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:d,data:m,closeToast:O,isIn:!1,className:E(i.className||Z.toastClassName),bodyClassName:E(i.bodyClassName||Z.bodyClassName),progressClassName:E(i.progressClassName||Z.progressClassName),autoClose:!i.isLoading&&(N=i.autoClose,R=Z.autoClose,!1===N||g(N)&&N>0?N:R),deleteToast:function(){var e=C(p.get(s),"removed");p.delete(s),_.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,x();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});M.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(b(o)?a=o(i):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,i):y(o)||g(o)?a=o:r?a=I.spinner():function(e){return e in I}(n)&&(a=I[n](i))),a}(M),b(i.onOpen)&&(M.onOpen=i.onOpen),b(i.onClose)&&(M.onClose=i.onClose),M.closeButton=Z.closeButton,!1===i.closeButton||T(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!T(Z.closeButton)||Z.closeButton);var P=e;(0,c.isValidElement)(e)&&!y(e.type)?P=(0,c.cloneElement)(e,{closeToast:O,toastProps:M,data:m}):b(e)&&(P=e({closeToast:O,toastProps:M,data:m})),Z.limit&&Z.limit>0&&v.count>Z.limit&&k?v.queue.push({toastContent:P,toastProps:M,staleId:a}):g(r)?setTimeout((function(){L(P,M,a)}),r):L(P,M,a)}}function L(e,t,n){var r=t.toastId;n&&p.delete(n);var o={content:e,props:t};p.set(r,o),s((function(e){return[].concat((0,d.Z)(e),[r]).filter((function(e){return e!==n}))})),_.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return v.containerId=e.containerId,_.cancelEmit(3).on(0,O).on(1,(function(e){return u.current&&w(e)})).on(5,Z).emit(2,v),function(){p.clear(),_.emit(3,v)}}),[]),(0,c.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,c.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,o.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",w),document.addEventListener("touchmove",_),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=O(t.nativeEvent),d.y=L(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?C():Z()}}function Z(){a(!0)}function C(){a(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&C(),d.x=O(t),d.y=L(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",Z,{once:!0}),b(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;b(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",Z),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=C,I.onMouseLeave=Z),y&&(I.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:Z,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:I}}function N(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,f=e.style,d=e.controlledProgress,p=e.progress,v=e.rtl,h=e.isIn,g=e.theme,y=i||d&&0===p,E=(0,l.Z)((0,l.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(E.transform="scaleX(".concat(p,")"));var T=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),Z=b(s)?s({rtl:v,type:a,defaultClassName:T}):m(T,s);return c.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:Z,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var M=function(e){var t=k(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,f=e.onClick,d=e.type,p=e.hideProgressBar,v=e.closeToast,h=e.transition,g=e.position,y=e.className,E=e.style,T=e.bodyClassName,Z=e.bodyStyle,C=e.progressClassName,_=e.progressStyle,w=e.updateId,I=e.role,x=e.progress,O=e.rtl,L=e.toastId,M=e.deleteToast,P=e.isIn,B=e.isLoading,D=e.iconOut,A=e.closeOnClick,S=e.theme,j=m("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":A}),z=b(y)?y({rtl:O,position:g,type:d,defaultClassName:j}):m(j,y),F=!!x||!u,H={closeToast:v,type:d,theme:S},q=null;return!1===i||(q=b(i)?i(H):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,H):N(H)),c.createElement(h,{isIn:P,done:M,position:g,preventExitTransition:r,nodeRef:o},c.createElement("div",(0,l.Z)((0,l.Z)({id:L,onClick:f,className:z},a),{},{style:E,ref:o}),c.createElement("div",(0,l.Z)((0,l.Z)({},P&&{role:I}),{},{className:b(T)?T({type:d}):m("Toastify__toast-body",T),style:Z}),null!=D&&c.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),c.createElement("div",null,s)),q,c.createElement(R,(0,l.Z)((0,l.Z)({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:O,theme:S,delay:u,isRunning:n,isIn:P,closeToast:v,hide:p,type:d,style:_,className:C,controlledProgress:F,progress:x||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},B=Z(P("bounce",!0)),D=(Z(P("slide",!0)),Z(P("zoom")),Z(P("flip")),(0,c.forwardRef)((function(e,t){var n=x(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,f=e.containerId;function d(e){var t=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return b(i)?i({position:e,rtl:u,defaultClassName:t}):m(t,E(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:f},r((function(e,t){var n=t.length?(0,l.Z)({},s):(0,l.Z)((0,l.Z)({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(M,(0,l.Z)((0,l.Z)({},o),{},{isIn:a(o.toastId),style:(0,l.Z)((0,l.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,S=new Map,j=[],z=1;function F(){return""+z++}function H(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:F()}function q(e,t){return S.size>0?_.emit(0,e,t):j.push({content:e,options:t}),t.toastId}function Q(e,t){return(0,l.Z)((0,l.Z)({},t),{},{type:t&&t.type||e,toastId:H(t)})}function V(e){return function(t,n){return q(t,Q(e,n))}}function U(e,t){return q(e,Q("default",t))}U.loading=function(e,t){return q(e,Q("default",(0,l.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},U.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=y(o)?U.loading(o,n):U.loading(o.render,(0,l.Z)((0,l.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=(0,l.Z)((0,l.Z)((0,l.Z)({type:e},s),n),{},{data:o}),i=y(t)?{render:t}:t;return r?U.update(r,(0,l.Z)((0,l.Z)({},a),i)):U(i.render,(0,l.Z)((0,l.Z)({},a),i)),o}U.dismiss(r)},u=b(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},U.success=V("success"),U.info=V("info"),U.error=V("error"),U.warning=V("warning"),U.warn=U.warning,U.dark=function(e,t){return q(e,Q("default",(0,l.Z)({theme:"dark"},t)))},U.dismiss=function(e){S.size>0?_.emit(1,e):j=j.filter((function(t){return null!=e&&t.options.toastId!==e}))},U.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},U.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},U.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=S.get(n||A);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,l.Z)((0,l.Z)((0,l.Z)({delay:100},r),t),{},{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,q(i,a)}}),0)},U.done=function(e){U.update(e,{progress:1})},U.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},U.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},U.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){A=e.containerId||e,S.set(A,e),j.forEach((function(e){_.emit(0,e.content,e.options)})),j=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&_.off(0).off(1).off(5)}));var G,W=n(168),X=n(867).ZP.form(G||(G=(0,W.Z)(["\n  margin-left: 10px;\n  margin-top: 20px;\n"]))),Y=n(87),K=n(549),J=n(184),$=function(){var e=(0,c.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],u=(0,c.useState)([]),l=(0,o.Z)(u,2),f=l[0],d=l[1],p=(0,c.useState)(""),m=(0,o.Z)(p,2),v=m[0],h=m[1],g=(0,Y.lr)(),y=(0,o.Z)(g,2),b=y[0],E=y[1];return(0,c.useEffect)((function(){try{var e=function(){var e=(0,r.Z)(i().mark((function e(t){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.NV)(n.filmQuery);case 2:r=e.sent,o=r.results,d(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e()}catch(t){}}),[n,b]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("header",{children:(0,J.jsxs)(X,{onSubmit:function(e){a(v),E(v),e.preventDefault(),""!==n.trim()||U.error("Please enter your search details.")},children:[(0,J.jsx)("button",{type:"submit",children:(0,J.jsx)("span",{children:"Search"})}),(0,J.jsx)("input",{onChange:function(e){return h({filmQuery:e.target.value})},name:"data",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"})]})}),f.length>0&&(0,J.jsx)(K.Z,{fetchedFilms:f})]})}}}]);
//# sourceMappingURL=792.ce97c9de.chunk.js.map