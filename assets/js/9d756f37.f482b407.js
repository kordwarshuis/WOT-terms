"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[63830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=o,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},9170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,s={unversionedId:"glossary/revocation-event",id:"glossary/revocation-event",title:"revocation-event",description:"Definition",source:"@site/docs/04_glossary/revocation-event.md",sourceDirName:"04_glossary",slug:"/glossary/revocation-event",permalink:"/WOT-terms/docs/glossary/revocation-event",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/revocation-event.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rev",permalink:"/WOT-terms/docs/glossary/rev"},next:{title:"revocation",permalink:"/WOT-terms/docs/glossary/revocation"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Considerations",id:"considerations",level:2},{value:"KERI related",id:"keri-related",level:2},{value:"Also see",id:"also-see",level:2},{value:"Beware: Suspension is non-existing",id:"beware-suspension-is-non-existing",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("h2",{id:"keri-related"},"KERI related"),(0,o.kt)("p",null,"An event that revokes ",(0,o.kt)("a",{parentName:"p",href:"control-authority"},"control authority")," over an ",(0,o.kt)("a",{parentName:"p",href:"identifier"},"identifier"),". From that point in time the authoritative key-pairs at hand are not valid anymore."),(0,o.kt)("p",null,"The time stamp of a revocation is useful but not for security purposes, it can be gamed by an attacker. KERI should be fitted in a way so that it's ",(0,o.kt)("em",{parentName:"p"},"not possible")," to rewrite history. The tool we have is the ordering of the events in a ",(0,o.kt)("a",{parentName:"p",href:"KEL"},"KEL"),"."),(0,o.kt)("h2",{id:"also-see"},"Also see"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"revocation"},"Revocation")),(0,o.kt)("h2",{id:"beware-suspension-is-non-existing"},"Beware: Suspension is non-existing"),(0,o.kt)("p",null,"A temporary revocation of a grant or privilege is called a suspension. We don't have this type of state or event in KERI."))}d.isMDXComponent=!0}}]);