(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{1197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(323);t.a=function(e){var t=e.symbol;return r.a.createElement(o.a,{title:"Insufficient "+(t||"Balance"),disabled:!0})}},1202:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(21),c=n.n(o),l=n(0),s=n.n(l),u=n(5),i=n(26),m=n(58),d=n(323);t.a=function(e){var t,n=Object(l.useContext)(m.b).approveToken,a=Object(l.useState)(!1),o=c()(a,2),b=o[0],k=o[1],f=Object(l.useCallback)((function(){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.token){a.next=19;break}return e.onError({}),k(!0),a.prev=3,a.next=6,r.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=a.sent)){a.next=11;break}return a.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e.onError(a.t0);case 16:return a.prev=16,k(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?s.a.createElement(u.a,null):s.a.createElement(d.a,{title:"Approve "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:f,loading:b,containerStyle:{marginBottom:i.g.tiny}})}},1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(0),r=n.n(a),o=n(241),c=n(5),l=n(26),s=n(43),u=n(33),i=n(1203),m=n(1205),d=n(122),b=n(1193),k=n(1206),f=n(1194),p=n(1207),T=n(72),y=n(1195),O=function(e){var t=e.state,n=e.emptyText,c=e.Item,l=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(c,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),s=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(k.a,null):0===s.length?r.a.createElement(v,{text:n}):r.a.createElement(o.a,{keyExtractor:function(e){return e.symbol},data:s,renderItem:l})},v=function(e){var t=e.text;return r.a.createElement(c.a,{style:{margin:l.g.normal}},r.a.createElement(T.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},P=function(e){var t=Object(s.a)().textMedium,n=Object(u.c)(e.token.balance,e.token.decimals,6),o=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(f.a,{selected:e.selected,onPress:o,containerStyle:{marginBottom:b.a}},r.a.createElement(d.a,{style:{alignItems:"center"}},r.a.createElement(y.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(y.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(T.a,{medium:!0,caption:!0,style:{marginLeft:l.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(c.a,{style:{flex:1,marginLeft:l.g.tiny}},r.a.createElement(T.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(i.a,null):r.a.createElement(p.a,null)))};t.b=function(e){return r.a.createElement(c.a,{style:e.style},r.a.createElement(m.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(O,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1213:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(3),c=n.n(o),l=n(21),s=n.n(l),u=n(0),i=n(142),m=n.n(i),d=n(58),b=n(417),k=n(1218),f=n(410),p=n(1219);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=!1;t.a=function(e){var t=Object(p.a)(),n=Object(u.useContext)(d.b),a=n.provider,r=n.address,o=n.tokens,l=Object(u.useState)(0),i=s()(l,2),T=i[0],v=i[1],P=Object(u.useState)(!0),E=s()(P,2),j=E[0],g=E[1],L=Object(u.useState)([]),x=s()(L,2),S=x[0],h=x[1],w=Object(u.useState)(),A=s()(w,2),B=A[0],C=A[1],D=Object(u.useState)(!1),q=s()(D,2),H=q[0],I=q[1],R=Object(u.useState)(),W=s()(R,2),F=W[0],J=W[1],N=Object(u.useState)(""),Y=s()(N,2),M=Y[0],z=Y[1],G=Object(f.b)().getPair,K=function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&o.length>0)||O){n.next=11;break}return n.prev=1,O=!0,n.next=5,c.a.awrap("my-pools"===e?Object(b.d)(r,o,a):"pools"===e?Object(b.f)(r,o,a):"my-lp-tokens"===e?Object(b.b)(r,o,a):Object(b.e)(r,o,a));case 5:(t=n.sent)&&h(t);case 7:return n.prev=7,O=!1,g(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(u.useEffect)((function(){B||z("")}),[B]),m()((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),J(void 0),!B||!a){e.next=18;break}return e.prev=3,e.t0=J,e.next=7,c.a.awrap(G(B.tokenA,B.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,g(!1),e.finish(13);case 16:e.next=19;break;case 18:g(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[B,a]),Object(k.a)((function(t){return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||o.length>0)){n.next=4;break}return t||g(!0),n.next=4,c.a.awrap(K());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[o.length,r,T],0),y(y({},t),{},{fromToken:t.fromToken||(null==B?void 0:B.tokenA),toToken:t.toToken||(null==B?void 0:B.tokenB),updateLPTokens:K,loading:t.loading||j,lastTimeRefreshed:T,updateLastTimeRefreshed:function(){v(Date.now())},lpTokens:S,selectedLPToken:B,setSelectedLPToken:C,selectedLPTokenAllowed:H,setSelectedLPTokenAllowed:I,pair:F,amount:M,setAmount:z})}},1371:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),o=n(0),c=n.n(o),l=n(13),s=n(5),u=n(142),i=n.n(u),m=n(1202),d=n(414),b=n(1198),k=n(323),f=n(411),p=n(412),T=n(1199),y=n(1204),O=n(1191),v=n(1200),P=n(1197),E=n(1211),j=n(1208),g=n(72),L=n(413),x=n(1210),S=n(1196),h=n(416),w=n(53),A=n(26),B=n(11),C=n.n(B),D=n(3),q=n.n(D),H=n(31),I=n(58),R=n(33),W=n(1213),F=n(410);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(){var e=Object(W.a)("my-lp-tokens"),t=Object(o.useContext)(I.b),n=t.signer,a=t.getTokenAllowance,c=t.updateTokens,l=Object(F.b)(),s=l.removeLiquidity,u=l.removeLiquidityETH,m=Object(o.useState)(!1),d=r()(m,2),b=d[0],k=d[1],f=Object(o.useState)(!1),p=r()(f,2),T=p[0],y=p[1];i()((function(){var t,r;return q.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!n||!e.selectedLPToken){o.next=14;break}return e.setFromSymbol(e.selectedLPToken.tokenA.symbol),e.setToSymbol(e.selectedLPToken.tokenB.symbol),k(!0),e.setSelectedLPTokenAllowed(!1),o.prev=5,t=H.ethers.BigNumber.from(2).pow(96).sub(1),o.next=9,q.a.awrap(a(e.selectedLPToken.address,w.d));case 9:r=o.sent,e.setSelectedLPTokenAllowed(H.ethers.BigNumber.from(r).gte(t));case 11:return o.prev=11,k(!1),o.finish(11);case 14:case"end":return o.stop()}}),null,null,[[5,,11,14]],Promise)}),[n,e.selectedLPToken]),i()((function(){var t,n;return q.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.selectedLPToken&&e.selectedLPToken.totalSupply&&e.pair&&e.fromToken&&e.toToken&&e.pair.liquidityToken.address===e.selectedLPToken.address&&(t=Object(R.i)(e.pair.reserveOf(Object(R.b)(e.fromToken)),e.fromToken.decimals),n=Object(R.i)(e.pair.reserveOf(Object(R.b)(e.toToken)),e.toToken.decimals),e.setFromAmount(Object(R.c)(Object(R.h)(e.amount,e.selectedLPToken.decimals).mul(t).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenA.decimals)),e.setToAmount(Object(R.c)(Object(R.h)(e.amount,e.selectedLPToken.decimals).mul(n).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenB.decimals)));case 1:case"end":return a.stop()}}),null,null,null,Promise)}),[e.selectedLPToken,e.amount,e.pair,e.fromToken,e.toToken,n]);var O=Object(o.useCallback)((function(){var t,a,r,o,l,i,m,d;return q.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(!(e.fromAmount&&e.toAmount&&e.selectedLPToken&&e.amount&&n)){b.next=30;break}if(y(!0),b.prev=2,t=Object(R.h)(e.fromAmount,e.fromToken.decimals),a=Object(R.h)(e.toAmount,e.toToken.decimals),r=Object(R.h)(e.amount,e.selectedLPToken.decimals),"WETH"!==e.fromSymbol&&"WETH"!==e.toSymbol){b.next=17;break}return o="WETH"===e.fromSymbol?e.toToken:e.fromToken,l="WETH"===e.fromSymbol?a:t,i="WETH"===e.fromSymbol?t:a,b.next=12,q.a.awrap(u(o,r,l,i,n));case 12:return m=b.sent,b.next=15,q.a.awrap(m.wait());case 15:b.next=22;break;case 17:return b.next=19,q.a.awrap(s(e.fromToken,e.toToken,r,t,a,n));case 19:return d=b.sent,b.next=22,q.a.awrap(d.wait());case 22:return b.next=24,q.a.awrap(c());case 24:return b.next=26,q.a.awrap(e.updateLPTokens());case 26:e.setSelectedLPToken(void 0);case 27:return b.prev=27,y(!1),b.finish(27);case 30:case"end":return b.stop()}}),null,null,[[2,,27,30]],Promise)}),[e.fromAmount,e.toAmount,e.selectedLPToken,e.amount,n,e.updateLPTokens]);return N(N({},e),{},{loading:e.loading||b,onRemove:O,removing:T})},M=n(415),z=function(){var e=Y();return c.a.createElement(s.a,{style:{marginTop:A.g.large}},c.a.createElement(E.b,{state:e,title:"Your Liquidity",emptyText:"You don't have any liquidity.",Item:E.a}),c.a.createElement(b.a,null),c.a.createElement(G,{state:e}),c.a.createElement(K,{state:e}))},G=function(e){var t=e.state;return t.selectedLPToken?c.a.createElement(x.a,{title:"Amount of Tokens",token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):c.a.createElement(O.a,{text:"Amount of Tokens",disabled:!0})},K=function(e){var t=e.state,n=!t.selectedLPToken||!t.fromToken||!t.toToken;return c.a.createElement(v.a,null,c.a.createElement(j.a,{label:t.fromToken?t.fromToken.symbol:"Token 1",text:t.fromAmount,disabled:n}),c.a.createElement(j.a,{label:t.toToken?t.toToken.symbol:"Token 2",text:t.toAmount,disabled:n}),c.a.createElement(Q,{state:t}))},Q=function(e){var t=e.state,n=Object(o.useState)({}),a=r()(n,2),l=a[0],u=a[1];i()((function(){return u({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var d=!t.selectedLPTokenAllowed,b=d||Object(R.g)(t.amount);return c.a.createElement(s.a,{style:{marginTop:A.g.normal}},!t.selectedLPToken||Object(R.g)(t.amount)?c.a.createElement(U,{state:t,onError:u,disabled:!0}):Object(R.h)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?c.a.createElement(P.a,{symbol:t.selectedLPToken.symbol}):t.loading||!t.pair?c.a.createElement(y.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{token:t.selectedLPToken,spender:w.d,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:u,hidden:!d}),c.a.createElement(U,{state:t,onError:u,disabled:b})),l.message&&4001!==l.code&&c.a.createElement(T.a,{error:l}))},U=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(o.useCallback)((function(){n({}),t.onRemove().catch(n)}),[t.onRemove,n]);return c.a.createElement(k.a,{title:"Remove Liquidity",disabled:a,loading:t.removing,onPress:r})};t.default=function(){return c.a.createElement(M.a,null,c.a.createElement(f.a,null,c.a.createElement(d.a,null),c.a.createElement(p.a,null,c.a.createElement(L.a,{text:"Remove Liquidity"}),c.a.createElement(g.a,{light:!0},"Scan your liquidity and remove one if needed."),c.a.createElement(z,null)),"web"===l.a.OS&&c.a.createElement(S.a,null)),c.a.createElement(h.b,null))}}}]);
//# sourceMappingURL=14.caea2302.chunk.js.map