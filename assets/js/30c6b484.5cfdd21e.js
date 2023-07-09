"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[22267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return r?i.createElement(y,o(o({ref:t},f),{},{components:r})):i.createElement(y,o({ref:t},f))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={},o=void 0,l={unversionedId:"glossary/self-certifying-identifier",id:"glossary/self-certifying-identifier",title:"self-certifying-identifier",description:"Definition",source:"@site/docs/glossary/self-certifying-identifier.md",sourceDirName:"glossary",slug:"/glossary/self-certifying-identifier",permalink:"/WOT-terms/docs/glossary/self-certifying-identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"self-addressing-identifier",permalink:"/WOT-terms/docs/glossary/self-addressing-identifier"},next:{title:"self-framing",permalink:"/WOT-terms/docs/glossary/self-framing"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Signing",id:"signing",level:2},{value:"Related to KERI",id:"related-to-keri",level:2}],f={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A Self-Certifying Identifier (SCID) cryptographically binds an identifier to a public and private key pair. It is an identifier that can be proven to be the one and only identifier tied to a public key using cryptography alone."),(0,n.kt)("h2",{id:"signing"},"Signing"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"controller"},"controller")," issues an own Identifier by binding a generated public private key pair to an identifier. After this a controller is able to sign the identifier and create a certificate. Also called a ",(0,n.kt)("em",{parentName:"p"},"cryptonym"),". The simplest form of a self-certifying identifier includes either the public key or a unique fingerprint of the public key as a ",(0,n.kt)("a",{parentName:"p",href:"prefix"},"prefix")," in the identifier."),(0,n.kt)("h2",{id:"related-to-keri"},"Related to KERI"),(0,n.kt)("p",null,"SCID : Self-Certifying IDentifier. A self-certifying identifier (SCID) is a type of ",(0,n.kt)("a",{parentName:"p",href:"cryptonym"},"cryptonym")," that is uniquely cryptographically derived from the public key of an asymmetric non-repudiable signing keypair, (public, private).\\\nIt is self-certifying or more precisely self-authenticating because it does not rely on a trusted entity. The authenticity of a non-repudiable signature made with the private key may be verified by extracting the public key from either the identifier itself or incepting information uniquely associated with the cryptographic derivation process for the identifier. In a basic SCID, the mapping between an identifier and its controlling public key is self-contained in the identifier itself. A basic SCID is ",(0,n.kt)("a",{parentName:"p",href:"ephemeral"},"ephemeral")," i.e. it does not support ",(0,n.kt)("a",{parentName:"p",href:"rotation"},"rotation")," of its keypairs in the event of key weakness or compromise and therefore must be abandoned once the controlling private key becomes weakened or compromised from exposure."))}d.isMDXComponent=!0}}]);