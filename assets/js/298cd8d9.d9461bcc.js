"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[9199],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},13940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={sidebar:"HowWeDidSidebar"},i="Get Markdown files from WebofTrust wiki glossary terms",l={unversionedId:"How-we-did/markdown-from-WOT-wiki",id:"How-we-did/markdown-from-WOT-wiki",title:"Get Markdown files from WebofTrust wiki glossary terms",description:"In a Trust over IP glossary you can easily change its underlying Markdown.",source:"@site/docs/How-we-did/markdown-from-WOT-wiki.md",sourceDirName:"How-we-did",slug:"/How-we-did/markdown-from-WOT-wiki",permalink:"/WOT-terms/docs/How-we-did/markdown-from-WOT-wiki",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"tutorialSidebar",previous:{title:"Load ToIP glossary in weboftrust github page",permalink:"/WOT-terms/docs/How-we-did/load-glossary-weboftrust-in-docusaurus"},next:{title:"Pull changes from toip to terms",permalink:"/WOT-terms/docs/How-we-did/pull-changes-from-toip-to-terms"}},s={},u=[{value:"Be careful",id:"be-careful",level:2},{value:"But I want the actual .MD-file in my hands!",id:"but-i-want-the-actual-md-file-in-my-hands",level:2},{value:"Wiki is a special kind of repo in Github",id:"wiki-is-a-special-kind-of-repo-in-github",level:3},{value:"Steps to download all the .md files",id:"steps-to-download-all-the-md-files",level:3},{value:"How to retrieve updates of the actual .MD-file to my local machine?",id:"how-to-retrieve-updates-of-the-actual-md-file-to-my-local-machine",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-markdown-files-from-weboftrust-wiki-glossary-terms"},"Get Markdown files from WebofTrust wiki glossary terms"),(0,n.kt)("p",null,"In a Trust over IP glossary you can easily change its underlying Markdown."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example\\\nGo to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/weboftrust/WOT-terms/wiki"},"wiki glossary")," of WOT-terms\\\nPick any term, e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/weboftrust/WOT-terms/wiki/agency"},"Agency"),"\\\nUse the ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit")," button in the upper-right corner\\\nChange / amend something\\\n",(0,n.kt)("inlineCode",{parentName:"p"},"Save"))),(0,n.kt)("h2",{id:"be-careful"},"Be careful"),(0,n.kt)("p",null,"Changes are immediate. A change like the one the example above, will be promoted to the production ",(0,n.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/glossary"},"glossary")," because of installed Github Actions and triggers that go off there."),(0,n.kt)("h2",{id:"but-i-want-the-actual-md-file-in-my-hands"},"But I want the actual .MD-file in my hands!"),(0,n.kt)("h3",{id:"wiki-is-a-special-kind-of-repo-in-github"},"Wiki is a special kind of repo in Github"),(0,n.kt)("p",null,"The wiki section of Repo has an own git remote link."),(0,n.kt)("h3",{id:"steps-to-download-all-the-md-files"},"Steps to download all the .md files"),(0,n.kt)("p",null,"Copy the link to the wiki repo of certain Github repo. Use the functionality at the bottom of the glossary:"),(0,n.kt)("img",{src:"https://hackmd.io/_uploads/SJspA9MRq.png",width:"400",alt:"clone the wiki of a repo"}),(0,n.kt)("p",null,"Go to a folder on your local computer and type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Clone <paste the URL here>")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example:\\\nClone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/weboftrust/WOT-terms.wiki.git"},"https://github.com/weboftrust/WOT-terms.wiki.git"))),(0,n.kt)("p",null,"Go to your newly created local repository and all the .MD files will be there"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example:\\"),(0,n.kt)("img",{src:"https://hackmd.io/_uploads/H1SO-jMAq.png",width:"600",alt:"list of term .MD files in the wiki repo"})),(0,n.kt)("h2",{id:"how-to-retrieve-updates-of-the-actual-md-file-to-my-local-machine"},"How to retrieve updates of the actual .MD-file to my local machine?"),(0,n.kt)("p",null,"Suppose you're in the root of the ",(0,n.kt)("inlineCode",{parentName:"p"},"WOT-terms.wiki")),(0,n.kt)("p",null,"Command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"git remote -v\n")),(0,n.kt)("p",null,"tells you from which remote location you'd like to pull the changes from"),(0,n.kt)("p",null,"Then pull the ",(0,n.kt)("inlineCode",{parentName:"p"},".md"),"-files in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"git pull origin main\n")),(0,n.kt)("p",null,"Then go to the destination directory in the Docusaurus file tree and copy the files over:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"cp <path to>/WOT-terms.wiki/* .\n")))}d.isMDXComponent=!0}}]);