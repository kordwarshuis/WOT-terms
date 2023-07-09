"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[60880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,c={unversionedId:"glossary/certificate-transparency",id:"glossary/certificate-transparency",title:"certificate-transparency",description:"Definition",source:"@site/docs/glossary/certificate-transparency.md",sourceDirName:"glossary",slug:"/glossary/certificate-transparency",permalink:"/WOT-terms/docs/glossary/certificate-transparency",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"byzantine-fault-tolerance",permalink:"/WOT-terms/docs/glossary/byzantine-fault-tolerance"},next:{title:"cesr-proof-signatures",permalink:"/WOT-terms/docs/glossary/cesr-proof-signatures"}},s={},l=[{value:"Definition",id:"definition",level:2},{value:"2011 Diginotar Attack",id:"2011-diginotar-attack",level:2},{value:"More information",id:"more-information",level:2}],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Certificate Transparency (CT) is an Internet security standard and open source framework for monitoring and auditing digital certificates. The standard creates a system of public logs that seek to eventually record all certificates issued by publicly trusted certificate authorities, allowing efficient identification of mistakenly or maliciously issued certificates. As of 2021, Certificate Transparency is mandatory for all SSL/TLS certificates."),(0,a.kt)("h2",{id:"2011-diginotar-attack"},"2011 Diginotar Attack"),(0,a.kt)("p",null,"Certificate Transparency was a response to the 2011 attack on DigiNotar and other Certificate Authorities. These attacks showed that the lack of transparency in the way CAs operated was a significant risk to the Web Public Key Infrastructure. It led to the creation of this ambitious project to improve security online by bringing accountability to the system that protects HTTPS. "),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"More on ",(0,a.kt)("a",{parentName:"p",href:"https://certificate.transparency.dev/"},"certificate.transparency.dev")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Certificate_Transparency"},"Wikipedia"),"."))}u.isMDXComponent=!0}}]);