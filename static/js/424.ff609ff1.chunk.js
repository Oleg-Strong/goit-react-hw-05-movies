"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[424],{1398:function(e,r,t){var n=t(7596);t(5462);r.Z=function(e){var r={position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"colored"};switch(e){case"warning":n.Am.warn("Nothing found for your request!",r);break;case"error":n.Am.error("Error! Something wrong!",r);break;default:return}}},8424:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(9439),o=t(2791),s=t(1087),a=t(7709),i=t(5705),u=t(9409),c=t(3728);var l=(0,u.Z)(i.l0,{target:"e19q6wr64"})({name:"1kzewp8",styles:"position:relative;display:flex;align-items:center;justify-content:center;padding-top:30px"}),p=(0,u.Z)(i.gN,{target:"e19q6wr63"})({name:"1j163qw",styles:"padding:10px;font-size:20px;font-weight:500;color:#474747;background-color:transparent;border-radius:10px;border:none;border-bottom:2px solid black;outline:transparent;box-shadow:0px 12px 12px -4px rgba(0, 0, 0, 0.59)"}),x=(0,u.Z)(c.Vph,{target:"e19q6wr62"})({name:"1fzs365",styles:"width:30px;height:30px;transition:all 250ms"}),g=(0,u.Z)("button",{target:"e19q6wr61"})("border:none;background-color:transparent;cursor:pointer;&:hover ",x,"{transform:scale(1.4);}"),h=(0,u.Z)("div",{target:"e19q6wr60"})({name:"1xs87o1",styles:"position:absolute;bottom:-40px;left:50%;transform:translate(-50%, -50%);font-size:20px;color:white;text-shadow:0 0 5px rgb(255, 221, 0),0 0 10px rgb(255, 221, 0),0 0 15px rgb(255, 221, 0),0 0 20px rgb(255, 221, 0),0 0 30px rgb(255, 221, 0),0 0 40px rgb(255, 221, 0),0 0 55px rgb(255, 221, 0),0 0 75px rgb(255, 221, 0)"}),d=t(2797),f=t(184),b=function(e){var r=e.onSubmit,t=d.Ry().shape({searchQuery:d.Z_("not valid input").required("Enter something to search!")});return(0,f.jsx)(i.J9,{initialValues:{searchQuery:""},onSubmit:function(e,t){var n=e.searchQuery,o=t.resetForm;r(n),o()},validationSchema:t,children:(0,f.jsxs)(l,{children:[(0,f.jsx)(p,{type:"text",name:"searchQuery",autoComplete:"off",placeholder:"Search movies"}),(0,f.jsx)(g,{type:"submit",children:(0,f.jsx)(x,{})}),(0,f.jsx)(i.Bc,{name:"searchQuery",children:function(e){return(0,f.jsx)(h,{children:e})}})]})})},m=t(4723),v=t(1192),w=t(1398),y=t(4044),j=t(6468),Z=t(7596),k=function(){var e,r=(0,s.lr)(),t=(0,n.Z)(r,2),i=t[0],u=t[1],c=(0,o.useState)([]),l=(0,n.Z)(c,2),p=l[0],x=l[1],g=(0,o.useState)(!1),h=(0,n.Z)(g,2),d=h[0],k=h[1],q=null!==(e=i.get("query"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){var e=new AbortController,r=e.signal;if(""!==q)return k(!0),(0,a.Pt)(q,r).then((function(e){var r=e.results;if(0===r.length)return x([]),(0,w.Z)("warning");x(r)})).catch((function(e){e.response?(console.log(e.response.data.status_message),(0,w.Z)("error")):e.request&&console.log(e.name)})).finally((function(){k(!1)})),function(){e.abort()};x([])}),[q]),(0,f.jsxs)("main",{children:[(0,f.jsx)(v.Z,{children:"Find a movie"}),(0,f.jsx)(b,{onSubmit:function(e){return u({query:e})}}),d?(0,f.jsx)(y.Z,{}):(0,f.jsx)(m.Z,{movies:p,url:""}),(0,f.jsx)(j.Z,{}),(0,f.jsx)(Z.Ix,{})]})}}}]);
//# sourceMappingURL=424.ff609ff1.chunk.js.map