"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[17862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"glossary/non-establishment-event",id:"glossary/non-establishment-event",title:"non-establishment-event",description:"Definition",source:"@site/docs/04_glossary/non-establishment-event.md",sourceDirName:"04_glossary",slug:"/glossary/non-establishment-event",permalink:"/WOT-terms/docs/glossary/non-establishment-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nested-cooperative-delegated-identifiers",permalink:"/WOT-terms/docs/glossary/nested-cooperative-delegated-identifiers"},next:{title:"non-fungible-token",permalink:"/WOT-terms/docs/glossary/non-fungible-token"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Made easier",id:"made-easier",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A key event tieing or anchoring a data payload to the ",(0,a.kt)("a",{parentName:"p",href:"key-event-log"},"key event log")," of an identifier. This data payload includes a set of one or more ",(0,a.kt)("a",{parentName:"p",href:"seal"},"seals")," each of which anchor data to the key event.\\\nThe data payload event may be used to make verifiable, authoritative statements on behalf of the identifier controller. \\\nThese might include authorizations of encryption keys, communication routes, service endpoints, and so forth."),(0,a.kt)("p",null,"Transactions or workflows composed of non-establishment events are secured by virtue of being included in the verifiable key event\nsequence with the verifiable authoritative establishment events."),(0,a.kt)("p",null,"A non-establishment event is a key event that does not change the current key-state for an AID. "),(0,a.kt)("p",null,"Source ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"KERI Whitepaper Section 7.22 page 46"),"\\\nSource ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,a.kt)("h2",{id:"made-easier"},"Made easier"),(0,a.kt)("p",null,"A non-establishment event is a key event that does not change the current key-state for an ",(0,a.kt)("a",{parentName:"p",href:"identifier"},"identifier"),". The event (only) ties or anchors digital data to the ",(0,a.kt)("a",{parentName:"p",href:"key-event-log"},"key event log")," of the identifier.\\\n",(0,a.kt)("em",{parentName:"p"},"(@henkvancann)")))}f.isMDXComponent=!0}}]);