"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},s="Docusaurus process",i={unversionedId:"howto/Docusaurus-process",id:"howto/Docusaurus-process",title:"Docusaurus process",description:"",source:"@site/docs/howto/Docusaurus-process.md",sourceDirName:"howto",slug:"/howto/Docusaurus-process",permalink:"/WOT-terms/docs/howto/Docusaurus-process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create search index",permalink:"/WOT-terms/docs/howto/Create-search-index"},next:{title:"Algolia search install and configuration",permalink:"/WOT-terms/docs/howto/algolia-search-install-config"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-process"},"Docusaurus process"),(0,o.kt)("mermaid",{value:'\nflowchart TD\n\nsubgraph server-side\nStart\n\n--\x3e A["Import Google Sheet data\\ninto .md file (Node.js)"]\n\nA --\x3e B["Run Docsaurus Build"]\n\nB --\x3e C["Deploy to GitHub Pages"]\nend\n\nsubgraph client-side-JavaScript-plugins\ncrossLinks["Add functionality:\\nCross links"]\n--\x3e insertVideo\n--\x3e insertSubtitles["Insert Subtitles"]\n--\x3e dynamicTables["Add functionality:\\nDynamic Tables"]\n--\x3e elementGoFullScreen["Add functionality:\\nmake overview table go full screen"]\n--\x3e writeChanges["Add functionality:\\nwrite changes to Overview"]\n--\x3e horizontalScrollHint["Add functionality:\\nHorizontal Scroll Hint"]\n--\x3e showDefinitionsOnClick["Add functionality:\\nShow inline definitions On Click"]\n--\x3e addDataTypes["Add knowledge level and\\ntype category as html attrib\\nto &lt;article&gt;"]\n--\x3e showGPTsummary["Add functionality:\\nShow GPT summary"]\n--\x3e PageReady["Page ready to view"]\n--\x3e End\n\n\nend\n\nserver-side --\x3e client-side-JavaScript-plugins\n\n'}))}d.isMDXComponent=!0}}]);