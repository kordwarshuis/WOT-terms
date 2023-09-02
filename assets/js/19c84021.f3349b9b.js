"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[7594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,l={unversionedId:"glossary/selective-disclosure",id:"glossary/selective-disclosure",title:"selective-disclosure",description:"Definition",source:"@site/docs/04_glossary/selective-disclosure.md",sourceDirName:"04_glossary",slug:"/glossary/selective-disclosure",permalink:"/WOT-terms/docs/glossary/selective-disclosure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"seed",permalink:"/WOT-terms/docs/glossary/seed"},next:{title:"self-addressing-data",permalink:"/WOT-terms/docs/glossary/self-addressing-data"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Related",id:"related",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Selective disclosure is a from partial disclosure that has a different cryptographic fundament: a sort of cryptographic aggregator (not an accumulator)."),(0,o.kt)("p",null,"Selective disclosure is a list of field maps. You can choose to blind and publish every single field map, but you have to disclosure all the field maps, either blinded or published."),(0,o.kt)("p",null,"It is an aggregator because you have to disclosure all the blinded fields when you do the selective disclosure."),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"partial-disclosure"},"Partial Disclosure")),(0,o.kt)("p",null,"Source: distilled from ACDC Zoom meeting, date March 28, 2023"))}p.isMDXComponent=!0}}]);