(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{738:function(e,t,n){"use strict";var r=n(0),o=n(30),a=n(42);t.a=function(){var e=Object(a.a)(),t=e.shadow,n=e.borderDark;return{border:Object(r.useCallback)((function(e){return{borderColor:(null==e?void 0:e.color)||n,borderWidth:1,borderRadius:(null==e?void 0:e.radius)||8,padding:o.f.small}}),[]),shadow:function(){return{borderRadius:o.f.tiny,elevation:o.f.small,shadowColor:t,shadowOffset:{width:0,height:2},shadowOpacity:.5,shadowRadius:4,overflow:"visible"}}}}},739:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(30),c=n(42),i=n(300),u=n(107),l=n(70);t.a=function(e){var t=Object(c.a)().accent;return o.a.createElement(u.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:a.f.small}},o.a.createElement(l.a,{medium:!0,fontWeight:"bold",disabled:e.disabled,style:{flex:1,fontSize:18,paddingBottom:a.f.tiny}},e.text),e.buttonText&&o.a.createElement(i.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t}))}},740:function(e,t,n){"use strict";var r=n(0),o=n(11),a=n(49),c=n(71);t.a="web"===o.a.OS?function(e,t,n){var o=Object(a.g)();return Object(r.useCallback)((function(){n?window.open(e,n):o.push(e)}),[e,n])}:function(e,t,n){var o=Object(c.useNavigation)().navigate;return Object(r.useCallback)((function(){o(t)}),[t])}},743:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),c=n(30),i=n(70);t.a=function(e){var t=e.error;return o.a.createElement(a.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:c.f.tiny,marginTop:c.f.small}},t.code&&o.a.createElement(i.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),o.a.createElement(i.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(4),c=10;t.b=function(){return o.a.createElement(a.a,{style:{height:c}})}},745:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),c=n(30),i=n(752),u=n(9),l=n.n(u),s=n(93),f=n(65),d=n(42),b=n(740),m=n(107),p=function(e){var t=Object(r.useContext)(f.a).darkMode,n=Object(d.a)(),a=n.background,c=n.textLight;return o.a.createElement(s.f,l()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:a,borderWidth:1,borderColor:t?"white":c}}))},h=function(){var e=Object(r.useContext)(f.a).darkMode,t=Object(d.a)(),n=t.background,a=t.textLight,c=Object(b.a)("https://twitter.com/sushiswap","","_blank"),i=Object(b.a)("https://github.com/sushiswap","","_blank"),u=Object(b.a)("https://discord.gg/YS8xH7E","","_blank");return o.a.createElement(m.a,{style:{width:"100%",justifyContent:"center"}},o.a.createElement(p,{type:"github-alt",onPress:i}),o.a.createElement(p,{type:"twitter",onPress:c}),o.a.createElement(s.d,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":a},onPress:u}))},y=n(70),g=function(e){var t=e.to,n=e.text,a=Object(r.useCallback)((function(){window.open(t,"_blank")}),[]);return o.a.createElement(y.a,{note:!0,style:{textDecorationLine:"underline"},onPress:a},n)};t.a=function(){return o.a.createElement(i.a,{noTopMargin:!0},o.a.createElement(a.a,{style:{width:"100%",padding:c.f.normal,marginTop:c.f.huge}},o.a.createElement(h,null),o.a.createElement(y.a,{note:!0,style:{marginTop:c.f.tiny,textAlign:"center",width:"100%"}},"2020 Built by ",o.a.createElement(g,{to:"https://levx.io",text:"LevX Team"}))))}},746:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(10),c=n.n(a),i=n(0),u=n.n(i),l=n(58),s=n(4),f=n(765),d=n(42),b=n(738);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(d.a)(),n=t.borderDark,r=t.accent,a=t.overlay,c=Object(b.a)().border,i=Object(d.a)(),m=i.background,h=i.backgroundLight;return u.a.createElement(f.a,{style:e.containerStyle},(function(t){var i=t.hovered;return u.a.createElement(l.a,{activeOpacity:.7,underlayColor:a,onPress:e.onPress},u.a.createElement(s.a,o()({},e,{style:[p(p({},c({color:e.selected?r:n})),{},{backgroundColor:i&&!e.disabled?h:m}),e.style]})))}))}},747:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(300);t.a=function(){return o.a.createElement(a.a,{title:"Fetching\u2026",disabled:!0})}},748:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(300);t.a=function(e){var t=e.symbol;return o.a.createElement(a.a,{title:"Insufficient "+(t||"Balance"),disabled:!0})}},749:function(e,t,n){"use strict";var r=n(19),o=n.n(r),a=n(0),c=n.n(a),i=n(48),u=n(4);t.a=function(e){var t=Object(a.useState)(!1),r=o()(t,2),l=r[0],s=r[1],f=e.small?22:27,d=n(766),b=n(767),m=e.replaceWETH&&"WETH"===e.token.symbol?b:{uri:e.token.logoURI};return c.a.createElement(u.a,{style:[{width:f,height:f,backgroundColor:e.disabled?"black":"white",borderRadius:f/2},e.style]},c.a.createElement(i.a,{source:l?d:m,onError:function(){return s(!0)},style:{width:"100%",height:"100%",borderRadius:f/2,opacity:e.disabled?.5:1}}))}},750:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(42),c=n(740),i=n(107),u=n(70);t.a=function(e){var t=Object(a.a)(),n=t.textMedium,r=t.textLight,l=t.placeholder,s=Object(c.a)(e.url||"","","_blank"),f=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return o.a.createElement(i.a,{style:{justifyContent:"space-between",marginTop:4}},o.a.createElement(u.a,{fontWeight:"bold",style:{fontSize:13,color:e.disabled?l:n}},e.label),o.a.createElement(u.a,{onPress:e.url?s:void 0,style:{fontSize:13,color:e.disabled?l:e.text?n:r,textDecorationLine:e.url?"underline":"none"}},f))}},751:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=n(0),c=n.n(a),i=n(11),u=n(4),l=n(28),s=n(30),f=n(42),d=n(738),b=n(29),m=n(300),p=n(739),h=n(756);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=Object(f.a)().accent,n=Object(a.useCallback)((function(){if(e.token){var t=e.token.balance;if("ETH"===e.token.symbol){var n=Object(b.i)(16);t=t.gt(n)?t.sub(n):l.ethers.constants.Zero}e.updateAmount(Object(b.c)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return c.a.createElement(u.a,{style:{position:"absolute",right:12,bottom:"web"===i.a.OS?12:24}},c.a.createElement(m.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(s.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:4}}))};t.a=function(e){var t,n,r=Object(d.a)().border,o=Object(a.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.g)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return c.a.createElement(u.a,null,e.title&&c.a.createElement(p.a,{text:e.title}),c.a.createElement(u.a,null,c.a.createElement(h.a,{label:e.label,value:e.amount,onChangeText:o,placeholder:"0.0",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:4},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:g(g({},r()),{},{paddingHorizontal:s.f.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&c.a.createElement(v,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},752:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),c=n.n(a),i=n(11),u=n(4),l=n(30);t.a=function(e){return c.a.createElement(u.a,o()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===i.a.OS?l.f.large:l.f.normal},e.style]}))}},753:function(e,t,n){"use strict";var r=n(19),o=n.n(r),a=n(0),c=n.n(a),i=n(4),u=n(739);t.a=function(e){var t=Object(a.useState)(!0),n=o()(t,2),r=n[0],l=n[1],s=e.expanded&&r,f=s?void 0:"Change";return c.a.createElement(i.a,{style:e.style},c.a.createElement(u.a,{text:e.title,buttonText:f,onPressButton:function(){l(!0),null==e.onExpand||e.onExpand()}}),c.a.createElement(i.a,{style:{display:s?"flex":"none"}},e.children))}},754:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(19),c=n.n(a),i=n(0),u=n.n(i),l=n(4),s=n(30),f=n(88),d=n(300);t.a=function(e){var t,n=Object(i.useContext)(f.a).approveToken,r=Object(i.useState)(!1),a=c()(r,2),b=a[0],m=a[1],p=Object(i.useCallback)((function(){var t;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.token){r.next=19;break}return e.onError({}),m(!0),r.prev=3,r.next=6,o.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=r.sent)){r.next=11;break}return r.next=10,o.a.awrap(t.wait());case 10:e.onSuccess();case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),e.onError(r.t0);case 16:return r.prev=16,m(!1),r.finish(16);case 19:case"end":return r.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?u.a.createElement(l.a,null):u.a.createElement(d.a,{title:"Approve "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:p,loading:b,containerStyle:{marginBottom:s.f.tiny}})}},755:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(81),c=n(30);t.a=function(){return o.a.createElement(a.a,{size:"large",style:{marginVertical:c.f.large}})}},756:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),c=n.n(a),i=n(11),u=n(93),l=n(42);t.a=function(e){var t=Object(l.a)(),n=t.textDark,r=t.textMedium,s=t.textLight,f=e.size||"normal",d=e.color||n,b="small"===f?16:"large"===f?24:20,m=Object(a.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return c.a.createElement(u.e,o()({},e,{inputStyle:[{fontSize:b,fontFamily:"regular",paddingBottom:4,color:d,marginTop:0,minHeight:32},"web"===i.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:r},e.labelStyle],placeholderTextColor:e.placeholderTextColor||s,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:m}))}},760:function(e,t,n){"use strict";var r=n(0),o=n(126),a=n.n(o),c=n(88);t.a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=Object(r.useContext)(c.a),u=i.addOnBlockListener,l=i.removeOnBlockListener,s=t();a()((function(){return[setTimeout(e,o),setTimeout((function(){return u(s,e)}),o)]}),(function(e){e&&(e.forEach((function(e){return clearTimeout(e)})),l(s))}),n)}},761:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(19),c=n.n(a),i=n(0),u=n(28),l=n(126),s=n.n(l),f=n(47),d=n(88),b=n(29),m=n(301);t.a=function(){var e=Object(i.useContext)(d.a),t=e.provider,n=e.signer,r=e.address,a=e.tokens,l=e.updateTokens,p=e.getTokenAllowance,h=Object(m.b)(),y=h.wrapETH,g=h.unwrapETH,v=Object(i.useState)(""),O=c()(v,2),w=O[0],j=O[1],E=Object(i.useState)(""),x=c()(E,2),k=x[0],S=x[1],T=Object(i.useState)(""),C=c()(T,2),P=C[0],A=C[1],B=Object(i.useState)(""),D=c()(B,2),R=D[0],z=D[1],H=Object(i.useState)(!1),W=c()(H,2),F=W[0],L=W[1],M=Object(i.useState)(!1),I=c()(M,2),N=I[0],_=I[1],X=Object(i.useState)(!1),U=c()(X,2),J=U[0],Y=U[1],V=Object(i.useState)(!1),Z=c()(V,2),$=Z[0],q=Z[1],G=Object(i.useState)(!1),K=c()(G,2),Q=K[0],ee=K[1],te=a.find((function(e){return e.symbol===w})),ne=a.find((function(e){return e.symbol===k}));Object(i.useEffect)((function(){""===w&&S(""),A(""),z("")}),[w,k]),Object(i.useEffect)((function(){j("")}),[r]),s()((function(){var e,r,a;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(te&&ne&&t&&n)){c.next=19;break}if(L(!1),_(!1),Y(!0),c.prev=4,e=u.ethers.BigNumber.from(2).pow(96).sub(1),"ETH"===te.symbol){c.next=11;break}return c.next=9,o.a.awrap(p(te.address,f.e));case 9:r=c.sent,L(u.ethers.BigNumber.from(r).gte(e));case 11:if("ETH"===ne.symbol){c.next=16;break}return c.next=14,o.a.awrap(p(ne.address,f.e));case 14:a=c.sent,_(u.ethers.BigNumber.from(a).gte(e));case 16:return c.prev=16,Y(!1),c.finish(16);case 19:case"end":return c.stop()}}),null,null,[[4,,16,19]],Promise)}),[te,ne,t,n]);var re=Object(i.useCallback)((function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!P||!n){t.next=15;break}return q(!0),t.prev=2,t.next=5,o.a.awrap(y(Object(b.g)(P),n));case 5:if(!(e=t.sent)){t.next=12;break}return t.next=9,o.a.awrap(e.wait());case 9:return t.next=11,o.a.awrap(l());case 11:j("");case 12:return t.prev=12,q(!1),t.finish(12);case 15:case"end":return t.stop()}}),null,null,[[2,,12,15]],Promise)}),[P,n]),oe=Object(i.useCallback)((function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!P||!n){t.next=15;break}return ee(!0),t.prev=2,t.next=5,o.a.awrap(g(Object(b.g)(P),n));case 5:if(!(e=t.sent)){t.next=12;break}return t.next=9,o.a.awrap(e.wait());case 9:return t.next=11,o.a.awrap(l());case 11:j("");case 12:return t.prev=12,ee(!1),t.finish(12);case 15:case"end":return t.stop()}}),null,null,[[2,,12,15]],Promise)}),[P,n]);return{fromSymbol:w,setFromSymbol:j,toSymbol:k,setToSymbol:S,fromToken:te,toToken:ne,fromAmount:P,setFromAmount:A,toAmount:R,setToAmount:z,fromTokenAllowed:F,setFromTokenAllowed:L,toTokenAllowed:N,setToTokenAllowed:_,loading:J,onWrap:re,wrapping:$,onUnwrap:oe,unwrapping:Q}}},765:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var r=n(10),o=n.n(r),a=n(19),c=n.n(a),i=n(13),u=n.n(i),l=n(0),s=n(4),f=n(375),d=n(72),b=n(193),m=n(309);function p(e,t){var n;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O="undefined"!==typeof e&&e.release&&"node"===e.release.name,w=function(){var e,t=!O&&window.matchMedia("(pointer:fine)").matches,n=new Map,r={x:0,y:0};function o(t){var r=n.get(t);if(!r)for(var o,a=p(n.keys());!(o=a()).done;){var c=o.value;E(c,t)&&(r=n.get(c))}e&&e(!1),r&&r(!0),e=r}function a(){e&&e(!1)}t&&(document.onmouseover=function(e){o(e.target)},document.onmousemove=function(e){r.x=e.pageX,r.y=e.pageY},document.ontouchstart=a,document.ontouchend=a,document.ontouchcancel=a,document.ontouchmove=a);return{add:function(e,t){n.set(e,t)},remove:function(e){n.delete(e)},mousePosition:r,hover:o}}();function j(e){var t=e.children,n=u()(e,["children"]),r=l.useRef(null),o=l.useState(!1),a=c()(o,2),i=a[0],f=a[1];return l.useEffect((function(){var e=r.current;return w.add(e,f),function(){w.remove(e)}}),[f,r]),l.createElement(s.a,v({ref:r,children:"function"===typeof t?t({hovered:i}):t},n))}function E(e,t){if(e===t)return!0;if(!e)return!1;for(var n,r=p(e.childNodes);!(n=r()).done;){if(E(n.value,t))return!0}return!1}function x(e){var t=function(t){var n=t.forwardedRef,r=t.onScroll,o=t.scrollEventThrottle,a=u()(t,["forwardedRef","onScroll","scrollEventThrottle"]);return l.createElement(e,v({ref:n,onScroll:function(e){r&&r(e);var t=w.mousePosition;(0,w.hover)(document.elementFromPoint(t.x,t.y))},scrollEventThrottle:o||25},a))};return l.forwardRef((function(e,n){return l.createElement(t,v({},e,{forwardedRef:n}))}))}l.forwardRef((function(e,t){var n=e.style,r=e.children,o=u()(e,["style","children"]),a=l.useRef(null),i=l.useState(!1),s=c()(i,2),d=s[0],b=s[1],m=function(e){var t=e.getForwardedRef,n=e.setLocalRef;return function(e){var r=t();n(e),"function"===typeof r?r(e):"object"===typeof r&&null!=r&&(r.current=e)}}({getForwardedRef:function(){return t},setLocalRef:function(e){a.current=e}});return l.useEffect((function(){var e=a.current;return w.add(e,b),function(){w.remove(e)}}),[b,a]),l.createElement(f.a,v({ref:m,style:function(e){return"function"===typeof n?n(g(g({},e),{},{hovered:d})):n},children:function(e){return"function"===typeof r?r(g(g({},e),{},{hovered:d})):r}},o))})),x(d.a),x(b.a),x(m.a)}).call(this,n(113))},766:function(e,t,n){e.exports=n.p+"static/media/empty-token.e8aa64c5.png"},767:function(e,t,n){e.exports=n.p+"static/media/ETH.ab794f02.png"}}]);
//# sourceMappingURL=0.e3d19470.chunk.js.map