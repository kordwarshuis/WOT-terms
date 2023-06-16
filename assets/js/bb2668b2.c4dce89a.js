"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[5156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={},a=void 0,o={unversionedId:"terms/glossary/indexed-signature",id:"terms/glossary/indexed-signature",title:"indexed-signature",description:"Definition",source:"@site/docs/terms/glossary/indexed-signature.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/indexed-signature",permalink:"/WOT-terms/docs/terms/glossary/indexed-signature",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inconsistency",permalink:"/WOT-terms/docs/terms/glossary/inconsistency"},next:{title:"input-output",permalink:"/WOT-terms/docs/terms/glossary/input-output"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example working",id:"example-working",level:2},{value:"Witness signatures indexed",id:"witness-signatures-indexed",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"An indexed signature attachment is used when signing anything with a multi-key autonomic identifier. The index is included as part of the attachment, so a verifier knows which of the multiple public keys was used to generate a specific signature.\\\nSource:Philip Feairheller"),(0,i.kt)("h2",{id:"example-working"},"Example working"),(0,i.kt)("p",null,"An indexed signature attachment would look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"03.<binary signature>\n")),(0,i.kt)("p",null,"All encoded as ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/qualified"},"qualified")," ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/base64"},"base64"),". A verifier would then know to use the AID\u2019s public key located at index 3 in the list of public keys to verify the signature.\\\nSource:Philip Feairheller"),(0,i.kt)("h2",{id:"witness-signatures-indexed"},"Witness signatures indexed"),(0,i.kt)("p",null,"In addition, ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/witness"},"witness")," signatures can also be attached as indexed signatures. So a verifier can determine which witness signed a particular ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/receipt"},"receipt"),". This is useful when witnesses are receipting an event and only attaching their own signature. The ",(0,i.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/controller"},"controller")," knows which witness signed the receipt by looking up the index in their list of witnesses for that event.\\\nSource:Philip Feairheller"))}d.isMDXComponent=!0}}]);