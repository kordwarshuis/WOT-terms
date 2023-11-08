"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[37682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"glossary/non-fungible-token",id:"glossary/non-fungible-token",title:"non-fungible-token",description:"Definition",source:"@site/docs/04_glossary/non-fungible-token.md",sourceDirName:"04_glossary",slug:"/glossary/non-fungible-token",permalink:"/WOT-terms/docs/glossary/non-fungible-token",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/non-fungible-token.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"non-establishment-event",permalink:"/WOT-terms/docs/glossary/non-establishment-event"},next:{title:"non-interactive-authentication-design",permalink:"/WOT-terms/docs/glossary/non-interactive-authentication-design"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Ownership",id:"ownership",level:3},{value:"Fungible",id:"fungible",level:3},{value:"KERI / ACDC related",id:"keri--acdc-related",level:3},{value:"Asset backing",id:"asset-backing",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A non-fungible token (NFT) is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security_(finance)"},"financial security")," consisting of digital data stored in a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blockchain"},"blockchain"),", a form of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Distributed_ledger"},"distributed ledger"),". "),(0,r.kt)("h3",{id:"ownership"},"Ownership"),(0,r.kt)("p",null,"The ownership of an NFT is recorded in a blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create. NFTs typically contain references to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_file"},"digital files")," such as photos, videos, and audio. "),(0,r.kt)("h3",{id:"fungible"},"Fungible"),(0,r.kt)("p",null,"Because NFTs are uniquely identifiable assets, they differ from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptocurrencies"},"cryptocurrencies"),", which are ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fungibility"},"fungible"),"."),(0,r.kt)("h3",{id:"keri--acdc-related"},"KERI / ACDC related"),(0,r.kt)("p",null,"There's nothing \"non fungible\" to a Non-fungible Token in our perspective. It's just another unique identifier controlled by a public private key pair. The fact that an NFT uniquely identifies a digital entity isn't very impressing, because of their "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"security fault : the security is dependent of the host ledger the NFT is anchored to. "),(0,r.kt)("li",{parentName:"ul"},"transferability fault : you need a transaction to transfer ownership on the host blockchain, controlling keys can't be rotated"),(0,r.kt)("li",{parentName:"ul"},"monitization fault : there's no good reason whatsoever to mingle the value aspect and the uniqueness property of a digital asset, and unfortunately that's what NFTs are doing.")),(0,r.kt)("p",null,'Because uniqueness tokenization "done right" is to be praised, ',(0,r.kt)("strong",{parentName:"p"},"it's recommended to look into KERI identifiers and ACDC veracity claims to support the value of the identifiers"),", whose monetary value can be recorded elsewhere and separate from the identifier system. Key (pre-)rotation can transfer ownership of a unique digital asset without the need of a transaction on a blockchain."),(0,r.kt)("h3",{id:"asset-backing"},"Asset backing"),(0,r.kt)("p",null,"Sometimes an NFT doesn't only uniquely represent a digital asset. It can be the digital twin of - and is also (hopefully) backed by - a real-life asset. Even in this perspective KERI and ACDC are more emcompassing too, because in the KERI/ACDC case we are dealing with globally portable unique digital twins, not anchored to (read ",(0,r.kt)("inlineCode",{parentName:"p"},"locked in"),") a blockchain."))}p.isMDXComponent=!0}}]);