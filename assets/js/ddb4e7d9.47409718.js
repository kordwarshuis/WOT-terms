"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[91389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,l={unversionedId:"glossary/contextual-linkability",id:"glossary/contextual-linkability",title:"contextual-linkability",description:"Definition",source:"@site/docs/04_glossary/contextual-linkability.md",sourceDirName:"04_glossary",slug:"/glossary/contextual-linkability",permalink:"/WOT-terms/docs/glossary/contextual-linkability",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"content-addressable-hash",permalink:"/WOT-terms/docs/glossary/content-addressable-hash"},next:{title:"contingent-disclosure",permalink:"/WOT-terms/docs/glossary/contingent-disclosure"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2},{value:"Dangers",id:"dangers",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Refers to the condition where vendors or other data capture points provide enough context at point of capture to be able to use statistical correlation with existing data sets to link any of a person's disclosed attributes to a set of already known data points about a given person. "),(0,o.kt)("p",null,"This sort of linkability nullifies the perceived protection of selective disclosure through zero knowledge proofs since the disclosed data can be combined with context to easily link the disclosed data to an existing profile of the person."),(0,o.kt)("p",null,"These threats mainly focus on a subject (the entity) who wants to hide as much of his identifiable information (or at least make it as unlikable as possible). This can occur when the subject wants to authenticate himself to a certain service (multiple authentication principles are shown in the tree), but also during regular communication (browsing, client-server requests, etc.) by means of the contextual information connected or linked to the the activity or communication.\\\nMore at ",(0,o.kt)("a",{parentName:"p",href:"https://www.linddun.org/linkability"},"source")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"contractually-protected-disclosure"},"Contractually protected disclosure")," is the primary defense against contextual linkability."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Cameras in stores are already able to identify you due to the extremely high prevalence of modern security systems who do facial recognition or mobile device ping recognition on each person entering the premises of a store. In the context of you buying stuff in their store they can capture data linked to you and then go and sell your data to third parties since there is an implicit grant of permission to use the data and also since there are no legal constraints on the distribution of that data."),(0,o.kt)("h2",{id:"dangers"},"Dangers"),(0,o.kt)("p",null,'Just have a look at what "they" are doing:\\\n',(0,o.kt)("a",{parentName:"p",href:"https://linkgraph.io/blog/how-to-contextual-link-building/"},"https://linkgraph.io/blog/how-to-contextual-link-building/")))}d.isMDXComponent=!0}}]);