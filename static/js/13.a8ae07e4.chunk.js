"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[13],{5415:function(e,o,t){t.r(o);var i=t(9439),s=t(2791),r=t(7709),n=t(4723),l=t(1192),a=t(4044),c=t(6468),u=t(184);o.default=function(){var e=(0,s.useState)([]),o=(0,i.Z)(e,2),t=o[0],d=o[1],f=(0,s.useState)(!1),v=(0,i.Z)(f,2),h=v[0],p=v[1];return(0,s.useEffect)((function(){var e=new AbortController,o=e.signal;return p(!0),(0,r._L)(o).then((function(e){var o=e.data.results;d(o)})).catch((function(e){e.response?console.log(e.response.data.status_message):e.request&&console.log(e.name)})).finally((function(){p(!1)})),function(){e.abort()}}),[]),(0,u.jsxs)("main",{children:[(0,u.jsx)(l.Z,{children:"Popular movies for today"}),h?(0,u.jsx)(a.Z,{}):(0,u.jsx)(n.Z,{movies:t,url:"movies/"}),(0,u.jsx)(c.Z,{})]})}},3282:function(e,o,t){var i=t(184),s=t(2791),r=function(){return r=Object.assign||function(e){for(var o,t=1,i=arguments.length;t<i;t++)for(var s in o=arguments[t])Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);return e},r.apply(this,arguments)};function n(e,o){return"scrolling"===o.type?{isVisible:o.payload.visible,progress:o.payload.offset}:e}o.p=function(e){var o=e.size,t=void 0===o?50:o,l=e.offsetTop,a=void 0===l?100:l,c=e.bgColor,u=void 0===c?"rgb(0 0 0 / 75%)":c,d=e.strokeWidth,f=void 0===d?4:d,v=e.strokeFillColor,h=void 0===v?"rgb(0 0 0 / 50%)":v,p=e.strokeEmptyColor,b=void 0===p?"rgb(200 200 200 / 85%)":p,m=e.symbol,y=void 0===m?"\u2b99":m,g=e.symbolSize,x=void 0===g?20:g,k=e.symbolColor,w=void 0===k?"#fff":k,j=e.onScrolling,_=e.onScrollEnd,C=e.className,E=void 0===C?"to-top-progress":C,S=e.style,Z=s.useMemo((function(){return t/2}),[t]),M=s.useMemo((function(){return t/2-f/2}),[t,f]),z=s.useMemo((function(){return Math.PI*M*2}),[M]),L=s.useReducer(n,{isVisible:!1,progress:z}),O=L[0],P=O.isVisible,V=O.progress,W=L[1],A=s.useCallback((function(){var e=document.documentElement,o=e.clientHeight,t=e.scrollHeight,i=e.scrollTop,s=i/(t-o);1===s&&_&&_(),j&&j(i),W({type:"scrolling",payload:{visible:i>a,offset:z-z*s}})}),[a,z,j,_]);return s.useEffect((function(){return window.addEventListener("scroll",A),function(){return window.removeEventListener("scroll",A)}}),[A]),i.jsx("div",r({className:E,style:r({position:"fixed",bottom:15,right:15,visibility:P?"visible":"hidden",opacity:P?1:0,transition:"visibility .3s linear, opacity .3s linear",cursor:"pointer",userSelect:"none"},S),onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},role:"button",tabIndex:0,"aria-hidden":"true"},{children:i.jsxs("svg",r({style:{display:"block",transform:"rotate(-90deg)"},width:t,height:t,viewBox:"0 0 "+t+" "+t,focusable:"false"},{children:[i.jsx("circle",{fill:u,stroke:b,strokeWidth:f,r:M,cx:Z,cy:Z},void 0),i.jsx("circle",{style:{transition:"stroke-dashoffset 0.3s linear"},fill:"none",stroke:h,strokeWidth:f,r:M,cx:Z,cy:Z,strokeDasharray:z,strokeDashoffset:V},void 0),i.jsx("text",r({x:Z,y:Z,textAnchor:"middle",dominantBaseline:"middle",transform:"rotate(90, "+Z+", "+Z+")",fill:w,fontSize:x},{children:y}),void 0)]}),void 0)}),void 0)}}}]);
//# sourceMappingURL=13.a8ae07e4.chunk.js.map