"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[4251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=l,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(k,n(n({ref:t},u),{},{components:r})):a.createElement(k,n({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,n=new Array(i);n[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,n[1]=o;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8654:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),l=(r(7294),r(3905));const i={title:"HowTo"},n="Load ToIP glossary in weboftrust github page",o={type:"mdx",permalink:"/WOT-terms/howtos/hwt_load-toip-glossary-in-weboftrust-github-page",source:"@site/src/pages/howtos/hwt_load-toip-glossary-in-weboftrust-github-page.md",title:"HowTo",description:"Input",frontMatter:{title:"HowTo"}},s=[{value:"Input",id:"input",level:2},{value:"Why load ToIP glossary",id:"why-load-toip-glossary",level:2},{value:"Software environment",id:"software-environment",level:2},{value:"Steps",id:"steps",level:2},{value:"Pull the ToIP wiki",id:"pull-the-toip-wiki",level:3},{value:"Initial clone of the acdc.wiki repo to local",id:"initial-clone-of-the-acdcwiki-repo-to-local",level:4},{value:"Refresh the acdc.wiki repo to local",id:"refresh-the-acdcwiki-repo-to-local",level:4},{value:"Copy the ToIP glossary resources into the Jekyll file structure",id:"copy-the-toip-glossary-resources-into-the-jekyll-file-structure",level:3},{value:"Copy the Terms WOT manage file",id:"copy-the-terms-wot-manage-file",level:3},{value:"Gen-fm.bat",id:"gen-fmbat",level:3},{value:"Level",id:"level",level:4},{value:"Github Repo",id:"github-repo",level:4},{value:"Static pages generator",id:"static-pages-generator",level:4},{value:"Result",id:"result",level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"load-toip-glossary-in-weboftrust-github-page"},"Load ToIP glossary in weboftrust github page"),(0,l.kt)("h2",{id:"input"},"Input"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ToIP ACDC glossary locally (all the .md files pulled from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki"},"repo wiki"),")"),(0,l.kt)("li",{parentName:"ol"},"Terms WOT manage (xls or csv) table"),(0,l.kt)("li",{parentName:"ol"},"Excel or open source alternative"),(0,l.kt)("li",{parentName:"ol"},"Bash program gen-fm.bat"),(0,l.kt)("li",{parentName:"ol"},"Version control (git, Github or Gitlab)")),(0,l.kt)("h2",{id:"why-load-toip-glossary"},"Why load ToIP glossary"),(0,l.kt)("p",null,"The main reason is interoperability. We want to join in the effort to create cross-referencing concepts, terms and glossary resources at WebofTrust."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Why don't we do it on our own, on our own repo ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/WebOfTrust"},"WebofTrust"),"?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"we would to have to build similar Github Actions tooling like ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.trustoverip.org/display/HOME/Terms+Wikis"},"ToIP")," already has."),(0,l.kt)("li",{parentName:"ul"},"we can't join the synchronization effort already taking place with ",(0,l.kt)("a",{parentName:"li",href:"https://example.com"},"eSSIF-lab")),(0,l.kt)("li",{parentName:"ul"},"we would have to maintain these auxiliary which keeps us off other important work")),(0,l.kt)("h2",{id:"software-environment"},"Software environment"),(0,l.kt)("p",null,"For Github pages Jekyll runs locally and remotely (Github Actions). ",(0,l.kt)("strong",{parentName:"p"},"Be sure to"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Have the same version of Jekyll installed locally as Github currently uses remotely; which is Jekyll 3.9.2 end of August 2022."),(0,l.kt)("li",{parentName:"ol"},"study ",(0,l.kt)("a",{parentName:"li",href:"https://mademistakes.com/mastering-jekyll/how-to-link/"},"this guide")," to avoid frustration with paths."),(0,l.kt)("li",{parentName:"ol"},"Install the auxillary software specifically for Github pages, as adviced in the doc under 2. Especially because we have many inter-referencing markdownfiles ",(0,l.kt)("inlineCode",{parentName:"li"},".md")," in our glossaries, sourced from elsewhere (ToIP, eSSIF-lab).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ad. 3:\nIf you have repository of Markdown files on GitHub with links like ",(0,l.kt)("a",{parentName:"p",href:"bar.md"},"foo"),". On GitHub.com these links are valid and work. But on the documentation site you built using these same Markdown source files \u2014 the links are broken.\nUsing the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/benbalter/jekyll-relative-links"},"jekyll-relative-links")," plugin can solve this by converting relative links to Markdown files into links to the appropriate Jekyll generated .html files.")),(0,l.kt)("h2",{id:"steps"},"Steps"),(0,l.kt)("h3",{id:"pull-the-toip-wiki"},"Pull the ToIP wiki"),(0,l.kt)("p",null,"Because the glossary is maintained in Github wiki using Github userinterface ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki"},"here"),", the most recent version is a remote repo. We have to pull this wiki-repo (be sure to have the ",(0,l.kt)("strong",{parentName:"p"},"wiki"),' repo not the "normal" acdc repo!) to local to be able to create our own glossary and Jekyll static site from this. The static site is then run as a github project page (branch ',(0,l.kt)("em",{parentName:"p"},"gh-pages"),")."),(0,l.kt)("h4",{id:"initial-clone-of-the-acdcwiki-repo-to-local"},"Initial clone of the acdc.wiki repo to local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/trustoverip/acdc.wiki.git\ncd acdc.wiki\ngit remote get-url origin\nls\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"wiki-repo-ls-result",src:r(6184).Z,width:"1154",height:"976"})),(0,l.kt)("h4",{id:"refresh-the-acdcwiki-repo-to-local"},"Refresh the acdc.wiki repo to local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git pull origin master\n")),(0,l.kt)("h3",{id:"copy-the-toip-glossary-resources-into-the-jekyll-file-structure"},"Copy the ToIP glossary resources into the Jekyll file structure"),(0,l.kt)("p",null,"To able to generate a tailor made explanation site we use two inputs (see full list of inputs ",(0,l.kt)("a",{parentName:"p",href:"#input"},"here"),"):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ToIP ACDC glossary locally (all the .md files pulled from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki"},"repo wiki"),")"),(0,l.kt)("li",{parentName:"ol"},"Terms WOT manage (xls or csv) table")),(0,l.kt)("p",null,'We use a Jekyll collection "',"_",'terms" that we delete and create anew each time we run gen-fm.bat. The files MUST be named and located exactly:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_terms")," -> ",(0,l.kt)("em",{parentName:"li"},"directory")," in WebofTrust repo ",(0,l.kt)("inlineCode",{parentName:"li"},"root dir"),", gh-pages branch"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gen-fm.bat")," -> ",(0,l.kt)("em",{parentName:"li"},"file")," in in WebofTrust repo ",(0,l.kt)("inlineCode",{parentName:"li"},"root dir"),", gh-pages branch"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"glossary")," -> ",(0,l.kt)("em",{parentName:"li"},"directory")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"_terms")," r dir"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Terms-WOT-manage.csv")," -> ",(0,l.kt)("em",{parentName:"li"},"file")," in in WebofTrust repo ",(0,l.kt)("inlineCode",{parentName:"li"},"root dir"),", gh-pages branch")),(0,l.kt)("p",null,"Ress.bat is an auxillary bash program to repetitively perform those steps run from ","_","terms directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Present in _terms directory\ncd ..\nrm -rf _terms\nmkdir _terms\ncd _terms\nmkdir glossary\ncp ../../acdc.wiki/* ./glossary\ncd ..\nsource gen-fm.bat\ncd _terms\n\n")),(0,l.kt)("p",null,"The command ",(0,l.kt)("inlineCode",{parentName:"p"},"cp ../../acdc.wiki/* ./glossary")," finishes what we'd like to achieve: Copy the ToIP glossary resources into the Jekyll file structure."),(0,l.kt)("h3",{id:"copy-the-terms-wot-manage-file"},"Copy the Terms WOT manage file"),(0,l.kt)("p",null,"From wherever you manage the terms, its links, its key (identifier), its foreign keys, categories etc., be sure to copy the latest version into the root dir of WebofTrust.\nYou could use Excel and export as csv (;-delimited)."),(0,l.kt)("h3",{id:"gen-fmbat"},"Gen-fm.bat"),(0,l.kt)("p",null,"This ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/blob/main/gen-fm.bat"},"Bash command file")," performs a series of operations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"it reads the input file (2.) per line.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"each row describes a term and its resource file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"we create a proper file name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"we try to match the terms in the ToIP glossary resources and bind them")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"we clean Front Matter fields:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"from forbidden characters"),(0,l.kt)("li",{parentName:"ol"},"preceding and trailing spaces"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"we write .md files with Front matter code and includes"))),(0,l.kt)("p",null,"As you edit, also have a an Excel sheet open with a few columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key"),(0,l.kt)("li",{parentName:"ul"},"(WWWWW-key) multiple foreign keys"),(0,l.kt)("li",{parentName:"ul"},"term"),(0,l.kt)("li",{parentName:"ul"},"text"),(0,l.kt)("li",{parentName:"ul"},"level"),(0,l.kt)("li",{parentName:"ul"},"link"),(0,l.kt)("li",{parentName:"ul"},"(Cat-CCCC) multiple categories")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"key")," needs to be unique and once established it should not change.\n",(0,l.kt)("strong",{parentName:"p"},"Term"),"s are words used in the resource, you can provide a ",(0,l.kt)("strong",{parentName:"p"},"link")," to more explanation, mainly to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki/"},"ACDC glossary"),". Then the ",(0,l.kt)("strong",{parentName:"p"},"level")," of understanding at which this term might need explanation, and finally a ",(0,l.kt)("em",{parentName:"p"},"brief explanation")," in field ",(0,l.kt)("strong",{parentName:"p"},"text")," of the term in the first column."),(0,l.kt)("h4",{id:"level"},"Level"),(0,l.kt)("p",null,"Since KERI and ACDC education start off at the level of SSI-expert, a ",(0,l.kt)("em",{parentName:"p"},"beginner")," is not a layman, but somebody with a good common understanding of IT and digital identity."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1=beginner digital identity expert"),(0,l.kt)("li",{parentName:"ul"},"3=advanced self-sovereign identity expert"),(0,l.kt)("li",{parentName:"ul"},"7=SSI experts")),(0,l.kt)("p",null,"The command ",(0,l.kt)("inlineCode",{parentName:"p"},"source gen-fm.bat")," performs the tasks mentioned above."),(0,l.kt)("h4",{id:"github-repo"},"Github Repo"),(0,l.kt)("p",null,"Push the locally updated files to the remote WebofTrust repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'git status\ngit add .\ngit commit -m "update the ToIP glossary"\ngit push <remote> gh-pages\n')),(0,l.kt)("h4",{id:"static-pages-generator"},"Static pages generator"),(0,l.kt)("p",null,"The push will activate Github Actions and the resources will be input to a static site generator."),(0,l.kt)("h2",{id:"result"},"Result"),(0,l.kt)("p",null,"This is the Github pages result from the step by step above"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://weboftrust.github.io/WOT-terms/mydoc_glossary.html"},"https://weboftrust.github.io/WOT-terms/mydoc_glossary.html")))}u.isMDXComponent=!0},6184:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wiki-repo-ls-68875431943122e705931e7a87d6d708.png"}}]);