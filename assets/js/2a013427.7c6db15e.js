"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[73705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,s={unversionedId:"glossary/keep",id:"glossary/keep",title:"keep",description:"Definition",source:"@site/docs/04_glossary/keep.md",sourceDirName:"04_glossary",slug:"/glossary/keep",permalink:"/WOT-terms/docs/glossary/keep",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jury",permalink:"/WOT-terms/docs/glossary/jury"},next:{title:"keri-agreement-algorithm-for-control-establishment",permalink:"/WOT-terms/docs/glossary/keri-agreement-algorithm-for-control-establishment"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Interface",id:"interface",level:2},{value:"Usecases",id:"usecases",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Is KERI's and ACDC's user interface that uses the keripy agent for its backend. It uses the REST API exposed from the keripy agent.\\\nSource: Philip Feairheller"),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"Keep is a task orientated application for managing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri"},"AIDs")," in ecosystems, e.g. the ",(0,a.kt)("a",{parentName:"p",href:"https://www.gleif.org/en/lei-solutions/gleifs-digital-strategy-for-the-lei/introducing-the-verifiable-lei-vlei"},"vLEI Ecosystem"),"."),(0,a.kt)("h2",{id:"usecases"},"Usecases"),(0,a.kt)("p",null,"Keep can be used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"establish and manage local AIDs"),(0,a.kt)("li",{parentName:"ul"},"create, join and manage distributed Multi-Sig AIDs (with or without delegation)"),(0,a.kt)("li",{parentName:"ul"},"issue and revoke credentials specified within the vLEI Ecosystem")),(0,a.kt)("p",null,"More info on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keep"},"Github repo")," of Keep."))}f.isMDXComponent=!0}}]);