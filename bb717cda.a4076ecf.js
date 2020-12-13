(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{642:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(875)),i={id:"releasing",title:"1. Create a release branch"},o={unversionedId:"development/releasing",id:"version-1.5.2/development/releasing",isDocsHomePage:!1,title:"1. Create a release branch",description:"1. Bump a version to the new -post version and land a chore: cut vX.Y.Z-post version commit",source:"@site/versioned_docs/version-1.5.2/development/releasing.md",slug:"/development/releasing",permalink:"/docs/1.5.2/development/releasing",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.5.2/development/releasing.md",version:"1.5.2"},c=[],b={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Bump a version to the new ",Object(l.b)("inlineCode",{parentName:"li"},"-post")," version and land a ",Object(l.b)("inlineCode",{parentName:"li"},"chore: cut vX.Y.Z-post version")," commit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"./utils/update_version.js vX.Y.Z-post"))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"On your local machine, create a new branch ",Object(l.b)("inlineCode",{parentName:"li"},"release-X.Y"),' based off the "cutting" commit and land a ',Object(l.b)("inlineCode",{parentName:"li"},"chore: mark vX.Y.Z")," in the local branch:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git checkout master")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git checkout -b release-X.Y")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"./utils/update_version.js vX.Y")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm run doc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git commit -am 'chore: mark vX.Y.Z'"))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Push branch to the upstream")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git push upstream release-X.Y"))),Object(l.b)("p",null,"Once release branch is pushed, it's last commit will be picked up by our CI/CD:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"make sure commit passes all the bots. If there are any failures, carefully inspect failures to see if these are flakes."),Object(l.b)("li",{parentName:"ul"},"the ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"../../.github/workflows/publish_canary_npm.yml"}),Object(l.b)("inlineCode",{parentName:"a"},"publish_canary"))," workflow will publish a ",Object(l.b)("inlineCode",{parentName:"li"},"@next")," version for the commit - this will be our ",Object(l.b)("strong",{parentName:"li"},"release candidate"),". Go manually to it's page on NPM   to see what it looks like. Try installing locally.")),Object(l.b)("h1",{id:"2-prepare-release-notes"},"2. Prepare release notes"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Use ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/releases/new"}),'"draft new release tag"'),"."),Object(l.b)("li",{parentName:"ol"},'Version starts with "v", e.g. "vX.Y.Z".'),Object(l.b)("li",{parentName:"ol"},"Run ",Object(l.b)("inlineCode",{parentName:"li"},"./utils/draft_release_notes.sh"),' and fill in the "TODO" in generated text.'),Object(l.b)("li",{parentName:"ol"},"When making links to the API, copy actual links from ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md"}),"GitHub"),", and not from ",Object(l.b)("inlineCode",{parentName:"li"},"api.md")," source - these might be incorrect.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Before publishing, replace ",Object(l.b)("inlineCode",{parentName:"li"},"blob/master/docs")," with ",Object(l.b)("inlineCode",{parentName:"li"},"blob/vX.Y.Z/docs")," in all the links."))),Object(l.b)("li",{parentName:"ol"},'Use "Save Draft", not "Publish".')),Object(l.b)("h1",{id:"3-publish-release"},"3. Publish Release"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Hit "publish release"')),Object(l.b)("p",null,"Once release is published, the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../../.github/workflows/publish_release.yml"}),Object(l.b)("inlineCode",{parentName:"a"},"publish_release"))," will kick in and publish package version on NPM."))}s.isMDXComponent=!0},875:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);