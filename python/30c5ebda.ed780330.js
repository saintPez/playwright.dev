(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{151:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";var r=n(0),o=n(154);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},155:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(153),c=n(151),i=n(55),s=n.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,p=e.groupId,b=e.className,f=Object(a.a)(),w=f.tabGroupChoices,v=f.setTabGroupChoices,m=Object(r.useState)(i),O=m[0],h=m[1],y=r.Children.toArray(e.children);if(null!=p){var g=w[p];null!=g&&g!==O&&d.some((function(e){return e.value===g}))&&h(g)}var j=function(e){h(e),null!=p&&v(p,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},156:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(152)),c=(n(155),n(156),{id:"videos",title:"Videos"}),i={unversionedId:"videos",id:"videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browsercontext.close().",source:"@site/docs/videos.mdx",slug:"/videos",permalink:"/python/docs/videos",version:"current"},s=[{value:"API reference",id:"api-reference",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright can record videos for all pages in a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// With browser.newContext()\nconst context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n\n// With browser.newPage()\nconst page = await browser.newPage({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait page.close();\n\n// [Optional] Specify video size; defaults to viewport size\nconst context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 800, height: 600 },\n  }\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"async",async:!0}),'# With browser.new_context()\ncontext = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n\n# With browser.new_page()\npage = await browser.new_page(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait page.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"sync",sync:!0}),'# With browser.new_context()\ncontext = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n\n# With browser.new_page()\npage = browser.new_page(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\npage.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')),Object(a.b)("h3",{id:"api-reference"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_pageoptions"}),"browser.new_page(**options)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"))))}u.isMDXComponent=!0}}]);