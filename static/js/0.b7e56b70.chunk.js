(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1190:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(26),c=n(42),i=n(323),u=n(122),l=n(70);t.a=function(e){var t=Object(c.a)().accent;return a.a.createElement(u.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},a.a.createElement(l.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&a.a.createElement(i.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1191:function(e,t,n){"use strict";var r=n(0),a=n(13),o=n(53),c=n(79);t.a="web"===a.a.OS?function(e,t,n){var a=Object(o.g)();return Object(r.useCallback)((function(){n?window.open(e,n):a.push(e)}),[e,n])}:function(e,t,n){var a=Object(c.useNavigation)().navigate;return Object(r.useCallback)((function(){a(t)}),[t])}},1192:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(5),c=10;t.b=function(){return a.a.createElement(o.a,{style:{height:c}})}},1193:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(11),c=n.n(o),i=n(0),u=n.n(i),l=n(56),s=n(5),f=n(1227),d=n(42),b=n(409);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(d.a)(),n=t.borderDark,r=t.accent,o=t.overlay,c=Object(b.a)().border,i=Object(d.a)(),p=i.background,g=i.backgroundLight;return u.a.createElement(f.a,{style:e.containerStyle},(function(t){var i=t.hovered;return u.a.createElement(l.a,{activeOpacity:.7,underlayColor:o,onPress:e.onPress},u.a.createElement(s.a,a()({},e,{style:[m(m({},c({color:e.selected?r:n})),{},{backgroundColor:i&&!e.disabled?g:p}),e.style]})))}))}},1194:function(e,t,n){"use strict";var r=n(21),a=n.n(r),o=n(0),c=n.n(o),i=n(52),u=n(5),l=n(42);t.a=function(e){var t=Object(l.a)().backgroundLight,r=Object(o.useState)(!1),s=a()(r,2),f=s[0],d=s[1],b=e.small?22:27,p=n(1220),m=n(1221),g=e.replaceWETH&&"WETH"===e.token.symbol?m:{uri:e.token.logoURI};return c.a.createElement(u.a,{style:[{width:b,height:b,backgroundColor:e.disabled?t:"white",borderRadius:b/2},e.style]},c.a.createElement(i.a,{source:!e.token.logoURI||f?p:g,onError:function(){return d(!0)},style:{width:"100%",height:"100%",borderRadius:b/2,opacity:e.disabled?.5:1}}))}},1195:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),c=n(26),i=n(10),u=n.n(i),l=n(13),s=function(e){return a.a.createElement(o.a,u()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===l.a.OS?c.g.large:c.g.normal},e.style]}))},f=n(98),d=n(58),b=n(42),p=n(1191),m=n(122),g=function(e){var t=Object(r.useContext)(d.a).darkMode,n=Object(b.a)(),o=n.background,c=n.textLight;return a.a.createElement(f.d,u()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":c}}))},y=function(){var e=Object(r.useContext)(d.a).darkMode,t=Object(b.a)(),n=t.background,o=t.textLight,c=Object(p.a)("https://twitter.com/sushiswap","","_blank"),i=Object(p.a)("https://github.com/sushiswap","","_blank"),u=Object(p.a)("https://discord.gg/YS8xH7E","","_blank");return a.a.createElement(m.a,{style:{width:"100%",justifyContent:"center"}},a.a.createElement(g,{type:"github-alt",onPress:i}),a.a.createElement(g,{type:"twitter",onPress:c}),a.a.createElement(f.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:u}))},h=n(70);t.a=function(){return a.a.createElement(s,{noTopMargin:!0},a.a.createElement(o.a,{style:{width:"100%",padding:c.g.normal}},a.a.createElement(y,null),a.a.createElement(h.a,{note:!0,style:{marginTop:c.g.tiny,textAlign:"center",width:"100%"}},"Built with \u2764\ufe0f by SushiSwap")))}},1198:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),c=n(26),i=n(42);t.a=function(e){var t=Object(i.a)().border;return a.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?c.g.tiny:c.g.small,marginBottom:e.small?c.g.tiny:c.g.small+c.g.tiny}})}},1199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98),c=n(42);t.a=function(){var e=Object(c.a)().accent;return a.a.createElement(o.b,{type:"material-community",name:"close",color:e,style:{marginLeft:4}})}},1200:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),c=n(26),i=n(70);t.a=function(e){var t=e.error;return a.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:c.g.tiny,marginTop:c.g.small}},t.code&&a.a.createElement(i.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),a.a.createElement(i.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1201:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(11),c=n.n(o),i=n(0),u=n.n(i),l=n(5),s=n(26),f=n(58),d=n(42),b=n(409);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.useContext)(f.a).darkMode,n=Object(d.a)(),r=n.backgroundLight,o=n.borderDark,c=Object(b.a)().border;return u.a.createElement(l.a,a()({},e,{style:[m(m({},c({color:t?o:r})),{},{backgroundColor:r,marginTop:s.g.normal+s.g.small,padding:s.g.small+s.g.tiny}),e.style]}))}},1202:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98),c=n(42);t.a=function(){var e=Object(c.a)().accent;return a.a.createElement(o.b,{type:"material-community",name:"chevron-right",color:e,style:{marginLeft:4}})}},1204:function(e,t,n){"use strict";var r=n(21),a=n.n(r),o=n(0),c=n.n(o),i=n(5),u=n(1190);t.a=function(e){var t=Object(o.useState)(!0),n=a()(t,2),r=n[0],l=n[1],s=e.expanded&&r,f=s?void 0:"Change";return c.a.createElement(i.a,{style:e.style},c.a.createElement(u.a,{text:e.title,buttonText:f,onPressButton:function(){l(!0),null==e.onExpand||e.onExpand()}}),c.a.createElement(i.a,{style:{display:s?"flex":"none"}},e.children))}},1205:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),c=n(99),i=n(31),u=n(60),l=n(34),s=n(32),f=n.n(s),d=n(21),b=n.n(d),p=n(11),m=n.n(p),g=new c.i(c.a.MAINNET,"0x6B175474E89094C44Da98b954EedeAC495271d0F",18,"DAI","Dai Stablecoin"),y=new c.i(c.a.MAINNET,"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",6,"USDC","USD//C"),h=new c.i(c.a.MAINNET,"0xdAC17F958D2ee523a2206206994597C13D831ec7",6,"USDT","Tether USD"),v=new c.i(c.a.MAINNET,"0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",18,"SUSHI","SushiToken"),O=new c.i(c.a.MAINNET,"0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16",18,"YAM","YAM"),w=new c.i(c.a.MAINNET,"0xD46bA6D942050d489DBd938a2C909A5d5039A161",9,"AMPL","Ampleforth"),j=[c.l[c.a.MAINNET],g,y,h,v,O],E=m()({},w.address,[g,c.l[c.a.MAINNET]]);function x(e){return e===c.d?c.l[c.a.MAINNET]:e instanceof c.i?e:void 0}var k=function(){return{loadAllCommonPairs:Object(o.useCallback)((function(e,t,n){var r,o,i,u,l,s,d;return a.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return r=j,o=[x(e),x(t)],i=o[0],u=o[1],l=r.flatMap((function(e){return r.map((function(t){return[e,t]}))})).filter((function(e){var t=b()(e,2),n=t[0],r=t[1];return n.address!==r.address})),s=i&&u?[[i,u]].concat(f()(r.map((function(e){return[i,e]}))),f()(r.map((function(e){return[u,e]}))),f()(l)).filter((function(e){return Boolean(e[0]&&e[1])})).filter((function(e){var t=b()(e,2),n=t[0],r=t[1];return n.address!==r.address})).filter((function(e){var t=b()(e,2),n=t[0],r=t[1],a=E;if(!a)return!0;var o=a[n.address],c=a[r.address];return!o&&!c||!(o&&!o.find((function(e){return u.equals(e)})))&&!(c&&!c.find((function(e){return i.equals(e)})))})):[],p.next=6,a.a.awrap(Promise.all(s.map((function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(c.f.fetchPairData(e[0],e[1],n));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",null);case 9:case"end":return t.stop()}}),null,null,[[0,6]],Promise)}))));case 6:return d=p.sent,p.abrupt("return",d.filter((function(e){return null!==e})));case 8:case"end":return p.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(o.useContext)(u.b).getTotalSupply,t=k().loadAllCommonPairs;return{getTrade:Object(o.useCallback)((function(e,n,r,o){var i,u,s,f,d;return a.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(!o){b.next=9;break}return i="ETH"===e.symbol,u=Object(l.b)(e),s="ETH"===n.symbol?c.b.ETHER:Object(l.b)(n),b.next=6,a.a.awrap(t(u,s,o));case 6:return f=b.sent,d=i?c.c.ether(r.toString()):new c.j(u,r.toString()),b.abrupt("return",c.k.bestTradeExactIn(f,d,s,{maxHops:3,maxNumResults:1})[0]);case 9:case"end":return b.stop()}}),null,null,null,Promise)}),[]),getPair:Object(o.useCallback)((function(e,t,n){var r,o;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return r=Object(l.b)(e),o=Object(l.b)(t),i.next=4,a.a.awrap(c.f.fetchPairData(r,o,n));case 4:return i.abrupt("return",i.sent);case 5:case"end":return i.stop()}}),null,null,null,Promise)}),[]),calculateAmountOfLPTokenMinted:function(t,n,r){var o,u;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,a.a.awrap(e(t.liquidityToken.address));case 2:if(!(o=l.sent)){l.next=6;break}return u=t.getLiquidityMinted(new c.j(t.liquidityToken,o.toString()),n,r),l.abrupt("return",i.ethers.BigNumber.from(u.raw.toString()));case 6:case"end":return l.stop()}}),null,null,null,Promise)}}}},1206:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(323);t.a=function(){return a.a.createElement(o.a,{title:"Fetching\u2026",disabled:!0})}},1207:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(89),c=n(26);t.a=function(){return a.a.createElement(o.a,{size:"large",style:{marginVertical:c.g.large}})}},1208:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(26),c=n(42),i=n(1191),u=n(122),l=n(70);t.a=function(e){var t=Object(c.a)(),n=t.textMedium,r=t.textLight,s=t.placeholder,f=Object(i.a)(e.url||"","","_blank"),d=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return a.a.createElement(u.a,{style:{justifyContent:"space-between",marginTop:4}},a.a.createElement(l.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?s:n}},e.label),a.a.createElement(l.a,{note:!o.d,onPress:e.url?f:void 0,style:{color:e.disabled?s:e.text?n:r,textDecorationLine:e.url?"underline":"none"}},d))}},1210:function(e,t,n){"use strict";var r=n(11),a=n.n(r),o=n(0),c=n.n(o),i=n(13),u=n(5),l=n(31),s=n(26),f=n(42),d=n(409),b=n(34),p=n(323),m=n(1190),g=n(1213);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=Object(f.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if("ETH"===e.token.symbol){var n=Object(b.k)(16);t=t.gt(n)?t.sub(n):l.ethers.constants.Zero}e.updateAmount(Object(b.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return c.a.createElement(u.a,{style:{position:"absolute",right:12,bottom:"web"===i.a.OS?12:24}},c.a.createElement(p.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(s.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:s.g.tiny}}))};t.a=function(e){var t,n,r=Object(d.a)().border,a=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.i)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return c.a.createElement(u.a,null,e.title&&c.a.createElement(m.a,{text:e.title}),c.a.createElement(u.a,null,c.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:a,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:s.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:h(h({},r()),{},{paddingHorizontal:s.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&c.a.createElement(v,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1213:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(0),c=n.n(o),i=n(13),u=n(98),l=n(42);t.a=function(e){var t=Object(l.a)(),n=t.textDark,r=t.textMedium,s=t.textLight,f=e.size||"normal",d=e.color||n,b="small"===f?16:"large"===f?24:20,p=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return c.a.createElement(u.c,a()({},e,{inputStyle:[{fontSize:b,fontFamily:"regular",paddingBottom:4,color:d,marginTop:0,minHeight:32},"web"===i.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:r},e.labelStyle],placeholderTextColor:e.placeholderTextColor||s,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:p}))}},1218:function(e,t,n){"use strict";var r=n(0),a=n(142),o=n.n(a),c=n(60);t.a=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=Object(r.useContext)(c.b),u=i.addOnBlockListener,l=i.removeOnBlockListener,s=t();o()((function(){return[setTimeout(e,a),setTimeout((function(){return u(s,e)}),a)]}),(function(e){e&&(e.forEach((function(e){return clearTimeout(e)})),l(s))}),n)}},1219:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(21),c=n.n(o),i=n(0),u=n(31),l=n(142),s=n.n(l),f=n(63),d=n(60),b=n(34),p=n(99),m=n(100),g=function(){return{wrapETH:Object(i.useCallback)((function(e,t){var n,r,o;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(b.g)("IWETH",p.l[1].address,t),c.next=3,a.a.awrap(n.estimateGas.deposit({value:e}));case 3:return r=c.sent,c.next=6,a.a.awrap(n.deposit({value:e,gasLimit:r}));case 6:return o=c.sent,c.next=9,a.a.awrap(Object(m.a)(o,"WETH.deposit()"));case 9:return c.abrupt("return",c.sent);case 10:case"end":return c.stop()}}),null,null,null,Promise)}),[]),unwrapETH:Object(i.useCallback)((function(e,t){var n,r,o;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(b.g)("IWETH",p.l[1].address,t),c.next=3,a.a.awrap(n.estimateGas.withdraw(e));case 3:return r=c.sent,c.next=6,a.a.awrap(n.withdraw(e,{gasLimit:r}));case 6:return o=c.sent,c.next=9,a.a.awrap(Object(m.a)(o,"WETH.withdraw()"));case 9:return c.abrupt("return",c.sent);case 10:case"end":return c.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(i.useContext)(d.b),t=e.signer,n=e.address,r=e.tokens,o=e.updateTokens,l=e.getTokenAllowance,p=g(),m=p.wrapETH,y=p.unwrapETH,h=Object(i.useState)(""),v=c()(h,2),O=v[0],w=v[1],j=Object(i.useState)(""),E=c()(j,2),x=E[0],k=E[1],T=Object(i.useState)(""),S=c()(T,2),P=S[0],C=S[1],A=Object(i.useState)(""),D=c()(A,2),M=D[0],B=D[1],H=Object(i.useState)(!1),N=c()(H,2),I=N[0],L=N[1],R=Object(i.useState)(!1),W=c()(R,2),F=W[0],z=W[1],U=Object(i.useState)(!1),q=c()(U,2),Y=q[0],_=q[1],X=Object(i.useState)(!1),G=c()(X,2),J=G[0],V=G[1],Z=Object(i.useState)(!1),$=c()(Z,2),K=$[0],Q=$[1],ee=r.find((function(e){return e.symbol===O})),te=r.find((function(e){return e.symbol===x}));Object(i.useEffect)((function(){""===O&&k(""),C(""),B("")}),[O,x]),Object(i.useEffect)((function(){w("")}),[n]),s()((function(){var e,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(ee&&te&&t)){o.next=19;break}if(L(!1),z(!1),_(!0),o.prev=4,e=u.ethers.BigNumber.from(2).pow(96).sub(1),"ETH"===ee.symbol){o.next=11;break}return o.next=9,a.a.awrap(l(ee.address,f.d));case 9:n=o.sent,L(u.ethers.BigNumber.from(n).gte(e));case 11:if("ETH"===te.symbol){o.next=16;break}return o.next=14,a.a.awrap(l(te.address,f.d));case 14:r=o.sent,z(u.ethers.BigNumber.from(r).gte(e));case 16:return o.prev=16,_(!1),o.finish(16);case 19:case"end":return o.stop()}}),null,null,[[4,,16,19]],Promise)}),[ee,te,t]);var ne=Object(i.useCallback)((function(){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!P||!t){n.next=15;break}return V(!0),n.prev=2,n.next=5,a.a.awrap(m(Object(b.i)(P),t));case 5:if(!(e=n.sent)){n.next=12;break}return n.next=9,a.a.awrap(e.wait());case 9:return n.next=11,a.a.awrap(o());case 11:w("");case 12:return n.prev=12,V(!1),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[2,,12,15]],Promise)}),[P,t]),re=Object(i.useCallback)((function(){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!P||!t){n.next=15;break}return Q(!0),n.prev=2,n.next=5,a.a.awrap(y(Object(b.i)(P),t));case 5:if(!(e=n.sent)){n.next=12;break}return n.next=9,a.a.awrap(e.wait());case 9:return n.next=11,a.a.awrap(o());case 11:w("");case 12:return n.prev=12,Q(!1),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[2,,12,15]],Promise)}),[P,t]);return{fromSymbol:O,setFromSymbol:w,toSymbol:x,setToSymbol:k,fromToken:ee,toToken:te,fromAmount:P,setFromAmount:C,toAmount:M,setToAmount:B,fromTokenAllowed:I,setFromTokenAllowed:L,toTokenAllowed:F,setToTokenAllowed:z,loading:Y,onWrap:ne,wrapping:J,onUnwrap:re,unwrapping:K}}},1220:function(e,t,n){e.exports=n.p+"static/media/empty-token.e8aa64c5.png"},1221:function(e,t,n){e.exports=n.p+"static/media/ETH.ab794f02.png"},1227:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var r=n(11),a=n.n(r),o=n(21),c=n.n(o),i=n(15),u=n.n(i),l=n(0),s=n(5),f=n(419),d=n(80),b=n(241),p=n(420);function m(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O="undefined"!==typeof e&&e.release&&"node"===e.release.name,w=function(){var e,t=!O&&window.matchMedia("(pointer:fine)").matches,n=new Map,r={x:0,y:0};function a(t){var r=n.get(t);if(!r)for(var a,o=m(n.keys());!(a=o()).done;){var c=a.value;E(c,t)&&(r=n.get(c))}e&&e(!1),r&&r(!0),e=r}function o(){e&&e(!1)}t&&(document.onmouseover=function(e){a(e.target)},document.onmousemove=function(e){r.x=e.pageX,r.y=e.pageY},document.ontouchstart=o,document.ontouchend=o,document.ontouchcancel=o,document.ontouchmove=o);return{add:function(e,t){n.set(e,t)},remove:function(e){n.delete(e)},mousePosition:r,hover:a}}();function j(e){var t=e.children,n=u()(e,["children"]),r=l.useRef(null),a=l.useState(!1),o=c()(a,2),i=o[0],f=o[1];return l.useEffect((function(){var e=r.current;return w.add(e,f),function(){w.remove(e)}}),[f,r]),l.createElement(s.a,v({ref:r,children:"function"===typeof t?t({hovered:i}):t},n))}function E(e,t){if(e===t)return!0;if(!e)return!1;for(var n,r=m(e.childNodes);!(n=r()).done;){if(E(n.value,t))return!0}return!1}function x(e){var t=function(t){var n=t.forwardedRef,r=t.onScroll,a=t.scrollEventThrottle,o=u()(t,["forwardedRef","onScroll","scrollEventThrottle"]);return l.createElement(e,v({ref:n,onScroll:function(e){r&&r(e);var t=w.mousePosition;(0,w.hover)(document.elementFromPoint(t.x,t.y))},scrollEventThrottle:a||25},o))};return l.forwardRef((function(e,n){return l.createElement(t,v({},e,{forwardedRef:n}))}))}l.forwardRef((function(e,t){var n=e.style,r=e.children,a=u()(e,["style","children"]),o=l.useRef(null),i=l.useState(!1),s=c()(i,2),d=s[0],b=s[1],p=function(e){var t=e.getForwardedRef,n=e.setLocalRef;return function(e){var r=t();n(e),"function"===typeof r?r(e):"object"===typeof r&&null!=r&&(r.current=e)}}({getForwardedRef:function(){return t},setLocalRef:function(e){o.current=e}});return l.useEffect((function(){var e=o.current;return w.add(e,b),function(){w.remove(e)}}),[b,o]),l.createElement(f.a,v({ref:p,style:function(e){return"function"===typeof n?n(h(h({},e),{},{hovered:d})):n},children:function(e){return"function"===typeof r?r(h(h({},e),{},{hovered:d})):r}},a))})),x(d.a),x(b.a),x(p.a)}).call(this,n(27))}}]);
//# sourceMappingURL=0.b7e56b70.chunk.js.map