"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[5940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,p=h["".concat(s,".").concat(d)]||h[d]||f[d]||i;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,l={unversionedId:"glossary/controller",id:"glossary/controller",title:"controller",description:"Definition",source:"@site/docs/04_glossary/controller.md",sourceDirName:"04_glossary",slug:"/glossary/controller",permalink:"/WOT-terms/docs/glossary/controller",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"control-authority",permalink:"/WOT-terms/docs/glossary/control-authority"},next:{title:"coroutines",permalink:"/WOT-terms/docs/glossary/coroutines"}},s={},c=[{value:"Definition",id:"definition",level:2}],u={toc:c},h="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A controller is a controlling entity (person, organization, or autonomous software) of an identifier. For an ",(0,o.kt)("a",{parentName:"p",href:"autonomic-identifier"},"autonomic identifier (AID)"),", a controlling entity has the capability to make changes to the ",(0,o.kt)("a",{parentName:"p",href:"key-event-log"},"key event log (KEL)")," of the AID. This capability is typically asserted by the control of a set of cryptographic keys used by software acting on behalf of the controller, though it might also be asserted via other mechanisms."),(0,o.kt)("p",null,"At any point in time, an identifier has at least one but may have more than one controlling entity. This set of controlling entities constitutes the controller. Without loss of generality, when the context is unambiguous, the term controller may refer either to the whole set or a member of the set of controlling entities."),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"key-event"},"key events")," on the identifier must include a signature from the sole controlling entity when there is only one controlling entity or at least one signature from one of the controlling entities when there is more than one. Typically, when there is more than one controlling entity, control is established via signatures from all or a subset of controlling entities. This is called ",(0,o.kt)("a",{parentName:"p",href:"multisig"},"multi-signature (multi-sig)"),". In a threshold multi-sig scheme, the control authority is split among the controlling entities, where each is assigned a weight. In this case, the control authority over the identifier is established via signatures from a subset of controlling entities whose combined weights exceed an agreed threshold. These thresholded multiple signatures may be expressed as a single collective threshold signature when a collective signing scheme is used."),(0,o.kt)("p",null,"The control authority over an identifier can also be divided into signing authority and rotation authority. The controller of the identifier may grant their authority to other entities. For example, in ",(0,o.kt)("a",{parentName:"p",href:"custodial-rotation"},"custodial rotation"),", the controller grants a designated custodial agent the signing authority while retaining their rotation authority. In the case of a ",(0,o.kt)("a",{parentName:"p",href:"delegated-identifier"},"delegated identifier"),", the delegated identifier is granted some degree of control authority from its delegating identifier."))}f.isMDXComponent=!0}}]);