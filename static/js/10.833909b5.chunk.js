(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{1191:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(11),c=n.n(o),l=n(0),s=n.n(l),i=n(5),u=n(27),d=n(61),m=n(43),p=n(408);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(l.useContext)(d.a).darkMode,n=Object(m.a)(),a=n.backgroundLight,o=n.borderDark,c=Object(p.a)().border;return s.a.createElement(i.a,r()({},e,{style:[f(f({},c({color:t?o:a})),{},{backgroundColor:a,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),c=n(27),l=n(408),s=n(322),i=n(72);t.a=function(e){var t=(0,Object(l.a)().border)({color:e.color}),n=e.color||t.borderColor;return r.a.createElement(o.a,{style:[e.clear?{paddingHorizontal:c.g.tiny}:t,e.style]},r.a.createElement(i.a,{note:!0,style:{color:n}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:n},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:c.g.tiny}}))}},1207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),c=n(27),l=n(43);t.a=function(){var e=Object(l.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:e,marginTop:c.g.small,marginBottom:c.g.small+c.g.tiny}})}},1209:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(3),c=n.n(o),l=n(21),s=n.n(l),i=n(0),u=n(142),d=n.n(u),m=n(58),p=n(416),b=n(1210),f=n(409),g=n(1211);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(g.a)(),n=Object(i.useContext)(m.b),a=n.provider,r=n.address,o=n.tokens,l=Object(i.useState)(0),u=s()(l,2),k=u[0],y=u[1],E=Object(i.useState)(!0),P=s()(E,2),v=P[0],j=P[1],T=Object(i.useState)([]),h=s()(T,2),w=h[0],x=h[1],L=Object(i.useState)(),S=s()(L,2),A=S[0],D=S[1],C=Object(i.useState)(!1),B=s()(C,2),M=B[0],W=B[1],q=Object(i.useState)(),H=s()(q,2),I=H[0],z=H[1],Y=Object(i.useState)(""),N=s()(Y,2),U=N[0],F=N[1],J=Object(f.b)().getPair,R=function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!a){n.next=9;break}return n.prev=1,n.next=4,c.a.awrap("pools"===e?Object(p.e)(r,a):"my-lp-tokens"===e?Object(p.b)(r,o,a):Object(p.d)(r,o,a));case 4:(t=n.sent)&&x(t);case 6:return n.prev=6,j(!1),n.finish(6);case 9:case"end":return n.stop()}}),null,null,[[1,,6,9]],Promise)};return Object(i.useEffect)((function(){A||F("")}),[A]),d()((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),z(void 0),!A||!a){e.next=18;break}return e.prev=3,e.t0=z,e.next=7,c.a.awrap(J(A.tokenA,A.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,j(!1),e.finish(13);case 16:e.next=19;break;case 18:j(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[A,a]),Object(b.a)((function(t){return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||o.length>0)){n.next=4;break}return t||j(!0),n.next=4,c.a.awrap(R());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[o.length,r,k],0),O(O({},t),{},{fromToken:t.fromToken||(null==A?void 0:A.tokenA),toToken:t.toToken||(null==A?void 0:A.tokenB),updateLPTokens:R,loading:t.loading||v,lastTimeRefreshed:k,updateLastTimeRefreshed:function(){y(Date.now())},lpTokens:w,selectedLPToken:A,setSelectedLPToken:D,selectedLPTokenAllowed:M,setSelectedLPTokenAllowed:W,pair:I,amount:U,setAmount:F})}},1214:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(0),r=n.n(a),o=n(240),c=n(5),l=n(31),s=n(27),i=n(43),u=n(34),d=(n(10),n(100),n(1199)),m=n(122),p=n(1192),b=n(1205),f=n(1195),g=n(72),k=n(1200),O=function(e){var t=e.state,n=e.emptyText,c=e.filter,s=e.Item,i=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(s,{key:n.address,token:n,selected:!1,filter:c,onSelectToken:t.setSelectedLPToken})}),[c,t.setSelectedLPToken]),d=t.lpTokens.sort((function(e,t){return(t.totalDeposited||l.ethers.constants.Zero).sub(e.totalDeposited||l.ethers.constants.Zero).div(Object(u.h)(14)).toNumber()}));return"amountDeposited"===c?d=d.filter((function(e){var t;return null==(t=e.amountDeposited)?void 0:t.gt(0)})):"balance"===c&&(d=d.filter((function(e){return e.balance.gt(0)}))),t.loading?r.a.createElement(b.a,null):0===d.length?r.a.createElement(y,{text:n}):r.a.createElement(o.a,{keyExtractor:function(e){return e.address},data:d,renderItem:i})},y=function(e){var t=e.text;return r.a.createElement(c.a,{style:{margin:s.g.normal}},r.a.createElement(g.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},E=function(e){var t=Object(i.a)().textMedium,n=Object(u.c)(e.token.balance,e.token.decimals,8),o=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(f.a,{selected:e.selected,onPress:o,containerStyle:{marginBottom:p.a}},r.a.createElement(m.a,{style:{alignItems:"center"}},r.a.createElement(k.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(k.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(g.a,{medium:!0,caption:!0,style:{marginLeft:s.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(c.a,{style:{flex:1,marginLeft:s.g.tiny}},r.a.createElement(g.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n))))};t.b=function(e){return r.a.createElement(c.a,{style:e.style},r.a.createElement(d.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(O,{state:e.state,filter:e.filter,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(E,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1362:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(21),c=n.n(o),l=n(0),s=n.n(l),i=n(13),u=n(5),d=n(142),m=n.n(d),p=n(1204),b=n(415),f=n(1207),g=n(322),k=n(410),O=n(411),y=n(1194),E=n(1199),P=n(1197),v=n(1189),j=n(1191),T=n(1198),h=n(1192),w=n(1214),x=n(1201),L=n(1193),S=n(1195),A=n(72),D=n(413),C=n(1202),B=n(1196),M=n(414),W=n(51),q=n(27),H=n(58),I=n(11),z=n.n(I),Y=n(37),N=n(31),U=n(34),F=n(1209),J=n(409);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(){var e=Object(l.useContext)(H.b).ethereum,t=Object(F.a)("my-uniswap-lp-tokens"),n=Object(l.useContext)(H.b),a=n.provider,o=n.signer,s=n.getTokenAllowance,i=n.updateTokens,u=Object(J.b)(),d=u.migrate,p=u.migrateWithPermit,b=Object(l.useState)(!1),f=c()(b,2),g=f[0],k=f[1],O=Object(l.useState)(),y=c()(O,2),E=y[0],P=y[1],v=Object(l.useState)(!1),j=c()(v,2),T=j[0],h=j[1];Object(l.useEffect)((function(){(null==e?void 0:e.isWalletConnect)?P("approve"):P(void 0)}),[e]),Object(l.useEffect)((function(){t.setSelectedLPToken()}),[E]),m()((function(){var e,n;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(a&&o&&t.selectedLPToken)){c.next=12;break}return k(!0),t.setSelectedLPTokenAllowed(!1),c.prev=3,e=N.ethers.BigNumber.from(2).pow(96).sub(1),c.next=7,r.a.awrap(s(t.selectedLPToken.address,W.g));case 7:n=c.sent,t.setSelectedLPTokenAllowed(N.ethers.BigNumber.from(n).gte(e));case 9:return c.prev=9,k(!1),c.finish(9);case 12:case"end":return c.stop()}}),null,null,[[3,,9,12]],Promise)}),[a,o,t.selectedLPToken]);var w=Object(l.useCallback)((function(){var e,n,c,l;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!(E&&t.selectedLPToken&&t.amount&&a&&o)){s.next=22;break}return h(!0),s.prev=2,e=Object(U.f)(t.amount,t.selectedLPToken.decimals),n="approve"===E?d:p,s.next=7,r.a.awrap(n(t.selectedLPToken,e,o));case 7:return c=s.sent,s.next=10,r.a.awrap(c.wait());case 10:return s.next=12,r.a.awrap(i());case 12:return s.next=14,r.a.awrap(t.updateLPTokens());case 14:return t.setSelectedLPToken(void 0),s.next=17,r.a.awrap(Y.f.fetchPairData(Object(U.b)(t.selectedLPToken.tokenA),Object(U.b)(t.selectedLPToken.tokenB),a));case 17:l=s.sent,window.open("https://sushiswap.fi/pair/"+l.liquidityToken.address,"_blank");case 19:return s.prev=19,h(!1),s.finish(19);case 22:case"end":return s.stop()}}),null,null,[[2,,19,22]],Promise)}),[E,t.selectedLPToken,t.amount,a,o,p,i]);return Z(Z({},t),{},{loading:t.loading||g,mode:E,setMode:P,onMigrate:w,migrating:T})},_=n(412),G=function(){var e=Object(l.useContext)(H.b).ethereum,t=V();return s.a.createElement(u.a,{style:{marginTop:q.g.large}},!(null==e?void 0:e.isWalletConnect)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(K,{state:t}),s.a.createElement(f.a,null)),s.a.createElement(X,{state:t}),s.a.createElement(f.a,null),s.a.createElement($,{state:t}),s.a.createElement(f.a,null),s.a.createElement(ee,{state:t}),s.a.createElement(L.a,{text:"\u2618\ufe0f You'll be redirected to the pair page after the migration finishes.\nStart earning additional income with 'Stake' on that page.",clear:!0,style:{marginTop:q.g.normal}}))},K=function(e){var t=e.state;return s.a.createElement(u.a,null,s.a.createElement(E.a,{title:"Wallet Type",expanded:!t.mode,onExpand:function(){return t.setMode()}},s.a.createElement(Q,{state:t,mode:"permit"}),s.a.createElement(Q,{state:t,mode:"approve"})),t.mode&&s.a.createElement(Q,{state:t,mode:t.mode,selectable:!0}))},Q=function(e){var t=e.state,n=e.mode,a=e.selectable,r=t.mode===n,o="permit"===n?"Non-hardware Wallet":"Hardware Wallet (Trezor, Ledger, etc.)",c="permit"===n?"Migration in done in one-click using your signature(permit).":"You need to first approve LP tokens and then migrate it.";return s.a.createElement(S.a,{containerStyle:{marginBottom:h.a},style:{paddingHorizontal:q.g.small+q.g.tiny},selected:r,disabled:a,onPress:function(){return t.setMode(t.mode===n?void 0:n)}},s.a.createElement(A.a,{fontWeight:"regular"},o),s.a.createElement(A.a,{note:!0},c))},X=function(e){var t=e.state;return t.mode?s.a.createElement(w.b,{state:t,title:"Your Uniswap Liquidity",emptyText:"You don't have any liquidity on Uniswap.",Item:w.a}):s.a.createElement(v.a,{text:"Your Uniswap Liquidity",disabled:!0})},$=function(e){var t=e.state;return t.selectedLPToken?s.a.createElement(C.a,{title:"Amount of Tokens",token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):s.a.createElement(v.a,{text:"Amount of Tokens",disabled:!0})},ee=function(e){var t,n=e.state,a=!n.selectedLPToken||Object(U.e)(n.amount);return s.a.createElement(j.a,null,s.a.createElement(x.a,{label:(null==(t=n.selectedLPToken)?void 0:t.symbol)||"SushiSwap LP",text:n.amount,disabled:a}),s.a.createElement(te,{state:n}))},te=function(e){var t=e.state,n=Object(l.useState)({}),a=c()(n,2),r=a[0],o=a[1];return m()((function(){return o({})}),[t.amount]),s.a.createElement(u.a,{style:{marginTop:q.g.normal}},!t.selectedLPToken||Object(U.e)(t.amount)?s.a.createElement(ne,{state:t,onError:o,disabled:!0}):Object(U.f)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?s.a.createElement(T.a,{symbol:t.selectedLPToken.symbol}):t.loading?s.a.createElement(P.a,null):s.a.createElement(s.a.Fragment,null,"approve"===t.mode&&!t.selectedLPTokenAllowed&&s.a.createElement(p.a,{token:t.selectedLPToken,spender:W.g,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:o}),s.a.createElement(ne,{state:t,onError:o,disabled:"approve"===t.mode&&!t.selectedLPTokenAllowed})),r.message&&4001!==r.code&&s.a.createElement(y.a,{error:r}))},ne=function(e){var t=e.state,n=e.onError,a=e.disabled;return s.a.createElement(g.a,{title:"Migrate Liquidity",loading:t.migrating,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onMigrate());case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),n(e.t0);case 9:case"end":return e.stop()}}),null,null,[[1,6]],Promise)},disabled:a})};t.default=function(){return s.a.createElement(_.a,null,s.a.createElement(k.a,null,s.a.createElement(b.a,null),s.a.createElement(O.a,null,s.a.createElement(D.a,{text:"Migrate Liquidity"}),s.a.createElement(A.a,{light:!0},"Migrate your Uniswap LP tokens to SushiSwap LP tokens."),s.a.createElement(G,null)),"web"===i.a.OS&&s.a.createElement(B.a,null)),s.a.createElement(M.b,null))}}}]);
//# sourceMappingURL=10.833909b5.chunk.js.map