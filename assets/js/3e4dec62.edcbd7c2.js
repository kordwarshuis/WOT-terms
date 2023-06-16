"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},16927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={},a=void 0,s={unversionedId:"terms/glossary/blind-oobi",id:"terms/glossary/blind-oobi",title:"blind-oobi",description:"Definition",source:"@site/docs/terms/glossary/blind-oobi.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/blind-oobi",permalink:"/WOT-terms/docs/terms/glossary/blind-oobi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blake3",permalink:"/WOT-terms/docs/terms/glossary/blake3"},next:{title:"blinded-revocation-registry",permalink:"/WOT-terms/docs/terms/glossary/blinded-revocation-registry"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2},{value:"The working",id:"the-working",level:2},{value:"Unblind",id:"unblind",level:2},{value:"Why is a blind OOBI interesting",id:"why-is-a-blind-oobi-interesting",level:2},{value:"Related terms",id:"related-terms",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A blind ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/OOBI"},"OOBI")," means that you have some mechanisms in place for verifying the ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/AID"},"AID")," instead of via the OOBI itself. A blind OOBI is essentially a ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/URL"},"URL"),'. It\'s called "blind" because the witness is not in the OOBI itself. You haves other ways of verifying the AID supplied.'),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"A blind OOBI through an AID that is on some witness list and has been verified to root-of-trust already. So you know the human being behind this referred AID. Because it's an AID that has a ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/KEL"},"KEL")," out there, which has been securely established, you can trust it. So a blind OOBI makes a via-via commitment."),(0,i.kt)("h2",{id:"the-working"},"The working"),(0,i.kt)("p",null,"A natural person that you trust is an owner of an AID. Then you cryptographically commit this AID to another AID through some mechanism (e.g. a witness list)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\"Here's my public key and here's my AID and because this in an another witness list I trust it.\"")),(0,i.kt)("h2",{id:"unblind"},"Unblind"),(0,i.kt)("p",null,"A 'blind' AID becomes \"unblind\" when you establish a direct relationship with human being who controls the referenced AID. You shortcut the blind OOBI because you established a direct OOBI to the formerly reference AID."),(0,i.kt)("h2",{id:"why-is-a-blind-oobi-interesting"},"Why is a blind OOBI interesting"),(0,i.kt)("p",null,"type 2 authentication: minimise the friction\n{TBW prio 3}"),(0,i.kt)("h2",{id:"related-terms"},"Related terms"),(0,i.kt)("p",null,"Authentication by reference, latent authenticity"))}m.isMDXComponent=!0}}]);