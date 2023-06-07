"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2362],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},x=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),x=s,m=u["".concat(i,".").concat(x)]||u[x]||b[x]||o;return r?t.createElement(m,a(a({ref:n},l),{},{components:r})):t.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=x;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:s,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}x.displayName="MDXCreateElement"},28902:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(87462),s=(r(67294),r(3905));const o={},a="Create search index",p={unversionedId:"howto/Create-search-index",id:"howto/Create-search-index",title:"Create search index",description:"",source:"@site/docs/howto/Create-search-index.md",sourceDirName:"howto",slug:"/howto/Create-search-index",permalink:"/WOT-terms/docs/howto/Create-search-index",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WOT Howto's",permalink:"/WOT-terms/docs/howto/intro"},next:{title:"Docusaurus process",permalink:"/WOT-terms/docs/howto/Docusaurus-process"}},i={},c=[],l={toc:c},u="wrapper";function b(e){let{components:n,...r}=e;return(0,s.kt)(u,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-search-index"},"Create search index"),(0,s.kt)("mermaid",{value:"\ngraph TD\n    Start --\x3e\n\n    Scraper[\"Scraper\\n(Node.js)\"]\n    \n    Scraper --\x3e|Multiple domains synchronously|N{\"Site 1: \\n remote sitemap.xml\\nexists?\"}\n    \n    Scraper --\x3e |Multiple domains synchronously|M{\"Site 2: \\n remote sitemap.xml\\nexists?\"} --\x3e ...\n    \n    N --\x3e |Yes| B[Scrape using\\nremote sitemap]\n    \n    N --\x3e |No| O{\"List of urls on\\na page exists?\"} \n    \n    O --\x3e |Yes| P[Scrape using list\\nof urls on a page]\n\n    O --\x3e |No| sdf[\"Create sitemap.xml\\nmanually or via WGET\"]\n\n    sdf --\x3e fgkwiw[\"Scrape using manually\\ncreated sitemap.xml\"]\n\n    assignKeys[\"Assign scrape results to keys in array object\n    [{\n        &nbsp;&nbsp;&nbsp;&nbsp;siteName: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;url: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;content: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;tag: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;firstHeadingBeforeElement: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;timestamp: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl0': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl1': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl2': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl3': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;knowledgeLevel: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;type: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;pageTitle: 'xxx'\n    }]\n\"]\nstyle assignKeys text-align: left\n    \n    B --\x3e assignKeys\n    fgkwiw --\x3e assignKeys\n    P --\x3e assignKeys\n    \n    assignKeys --\x3e storeJson[\"Store in JSON file\"]\n    storeJson --\x3e storeJsonl[\"Convert to JSONL file\"]\n    storeJsonl --\x3e Import[\"Import in TypeSense\\nindex (via Curl)\"]\n    \n\n\n"}))}b.isMDXComponent=!0}}]);