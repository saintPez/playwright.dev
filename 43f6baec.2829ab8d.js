(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(875)),c={id:"README",title:"Running Playwright in Docker"},o={unversionedId:"docker/README",id:"version-1.2.0/docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic is a playwright-ready image of playwright.",source:"@site/versioned_docs/version-1.2.0/docker/README.md",slug:"/docker/README",permalink:"/docs/1.2.0/docker/README",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.2.0/docker/README.md",version:"1.2.0"},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Alpine",id:"alpine",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Dockerfile.bionic"}),"Dockerfile.bionic")," is a playwright-ready image of playwright.\nThis image includes all the dependencies needed to run browsers in a Docker\ncontainer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#pull-the-image"}),"Pull the image")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#run-the-image"}),"Run the image")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#using-on-ci"}),"Using on CI")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#development"}),"Development"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#build-the-image"}),"Build the image")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#push"}),"Push")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#base-images"}),"Base images"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#alpine"}),"Alpine"))))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(a.b)("p",null,"This image is published on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(a.b)("h3",{id:"pull-the-image"},"Pull the image"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(a.b)("h3",{id:"run-the-image"},"Run the image"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker container run -it --rm --ipc=host --security-opt seccomp=chrome.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(a.b)("p",null,"Note that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The seccomp profile is required to run Chrome without sandbox. Thanks to ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jessfraz/dotfiles/blob/master/etc/docker/seccomp/chrome.json"}),"Jessie Frazelle"),"."),Object(a.b)("li",{parentName:"ul"},"Using ",Object(a.b)("inlineCode",{parentName:"li"},"--ipc=host")," is also recommended when using Chrome (",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),Object(a.b)("h3",{id:"using-on-ci"},"Using on CI"),Object(a.b)("p",null,"See our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/ci"}),"Continuous Integration guides")," for sample configs."),Object(a.b)("h2",{id:"development"},"Development"),Object(a.b)("h3",{id:"build-the-image"},"Build the image"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker build -t mcr.microsoft.com/playwright:bionic -f Dockerfile.bionic .\n")),Object(a.b)("h3",{id:"push"},"Push"),Object(a.b)("p",null,"Playwright on Docker Hub relies on"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker push playwright.azurecr.io/public/playwright:bionic\n")),Object(a.b)("h2",{id:"base-images"},"Base images"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(a.b)("h3",{id:"alpine"},"Alpine"),Object(a.b)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}p.isMDXComponent=!0},875:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return r?i.a.createElement(d,o(o({ref:t},b),{},{components:r})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<a;b++)c[b]=r[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);