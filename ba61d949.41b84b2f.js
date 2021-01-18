(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{446:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(603)),c=(n(607),n(608),{id:"cli",title:"Command Line Interface"}),i={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Playwright comes with the command line tools that run via npx or as a part of the npm scripts.",source:"@site/docs/cli.mdx",slug:"/cli",permalink:"/docs/next/cli",version:"current",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/next/ci"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright comes with the command line tools that run via ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," or as a part of the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," scripts."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#generate-code"}),"Generate code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#open-pages"}),"Open pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#inspect-selectors"}),"Inspect selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#take-screenshot"}),"Take screenshot")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#generate-pdf"}),"Generate PDF")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#known-limitations"}),"Known limitations"))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright --help\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'# Running from `package.json` script\n{\n  "scripts": {\n    "help": "playwright --help"\n  }\n}\n')),Object(o.b)("h2",{id:"generate-code"},"Generate code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright codegen wikipedia.org\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),Object(o.b)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," with ",Object(o.b)("inlineCode",{parentName:"p"},"--save-storage")," to save ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright --save-storage=auth.json codegen\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),Object(o.b)("p",null,"Run with ",Object(o.b)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright --load-storage=auth.json open my.web.app\n$ npx playwright --load-storage=auth.json codegen my.web.app\n# Perform actions in authenticated state.\n")),Object(o.b)("h2",{id:"open-pages"},"Open pages"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Open page in Chromium\n$ npx playwright open example.com\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Open page in WebKit\n$ npx playwright wk example.com\n")),Object(o.b)("h3",{id:"emulate-devices"},"Emulate devices"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"}),Object(o.b)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# Emulate iPhone 11.\n$ npx playwright --device="iPhone 11" open wikipedia.org\n')),Object(o.b)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Emulate screen size and color scheme.\n$ npx playwright --viewport-size=800,600 --color-scheme=dark open twitter.com\n")),Object(o.b)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\n$ npx playwright --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" open maps.google.com\n')),Object(o.b)("h2",{id:"inspect-selectors"},"Inspect selectors"),Object(o.b)("p",null,"During ",Object(o.b)("inlineCode",{parentName:"p"},"open")," or ",Object(o.b)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),Object(o.b)("h4",{id:"playwrightselector"},"playwright.$(selector)"),Object(o.b)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"> playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n")),Object(o.b)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),Object(o.b)("p",null,"Same as ",Object(o.b)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"> playwright.$$('li >> text=John')\n\n> [<li>, <li>, <li>, <li>]\n")),Object(o.b)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),Object(o.b)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"> playwright.inspect('text=Log in')\n")),Object(o.b)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),Object(o.b)("p",null,"Generates selector for the given element."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'> playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n')),Object(o.b)("h2",{id:"take-screenshot"},"Take screenshot"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# See command help\n$ npx playwright screenshot --help\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\n$ npx playwright \\\n  --device=\"iPhone 11\" \\\n  --color-scheme=dark \\\n  screenshot \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Capture a full page screenshot\n$ npx playwright screenshot --full-page en.wikipedia.org wiki-full.png\n")),Object(o.b)("h2",{id:"generate-pdf"},"Generate PDF"),Object(o.b)("p",null,"PDF generation only works in Headless Chromium."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# See command help\n$ npx playwright pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")),Object(o.b)("h2",{id:"known-limitations"},"Known limitations"),Object(o.b)("p",null,"Opening WebKit Web Inspector will disconnect Playwright from the browser. In such cases, code generation will stop."))}p.isMDXComponent=!0},603:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},604:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},605:function(e,t,n){"use strict";var a=n(0),r=n(606);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},606:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},607:function(e,t,n){"use strict";n(0),n(605),n(604),n(55)},608:function(e,t,n){"use strict";n(3),n(0)}}]);