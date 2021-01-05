---
id: class-chromiumcoverage
title: "class: ChromiumCoverage"
---


Coverage gathers information about parts of JavaScript and CSS that were used by the page.

An example of using JavaScript coverage to produce Istambul report for page load:

```js
const { chromium } = require('playwright');
const v8toIstanbul = require('v8-to-istanbul');

(async() => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.coverage.startJSCoverage();
  await page.goto('https://chromium.org');
  const coverage = await page.coverage.stopJSCoverage();
  for (const entry of coverage) {
    const converter = new v8toIstanbul('', 0, { source: entry.source });
    await converter.load();
    converter.applyCoverage(entry.functions);
    console.log(JSON.stringify(converter.toIstanbul()));
  }
  await browser.close();
})();
```

<!-- GEN:toc -->
- [chromiumCoverage.startCSSCoverage([options])](api/class-chromiumcoverage.md#chromiumcoveragestartcsscoverageoptions)
- [chromiumCoverage.startJSCoverage([options])](api/class-chromiumcoverage.md#chromiumcoveragestartjscoverageoptions)
- [chromiumCoverage.stopCSSCoverage()](api/class-chromiumcoverage.md#chromiumcoveragestopcsscoverage)
- [chromiumCoverage.stopJSCoverage()](api/class-chromiumcoverage.md#chromiumcoveragestopjscoverage)
<!-- GEN:stop -->

## chromiumCoverage.startCSSCoverage([options])
- `options` <[Object]>
  - `resetOnNavigation` <[boolean]> Whether to reset coverage on every navigation. Defaults to `true`.
- returns: <[Promise]>

Returns coverage is started

## chromiumCoverage.startJSCoverage([options])
- `options` <[Object]>
  - `resetOnNavigation` <[boolean]> Whether to reset coverage on every navigation. Defaults to `true`.
  - `reportAnonymousScripts` <[boolean]> Whether anonymous scripts generated by the page should be reported. Defaults to `false`.
- returns: <[Promise]>

Returns coverage is started

> **NOTE** Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using `eval` or `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous scripts will have `__playwright_evaluation_script__` as their URL.

## chromiumCoverage.stopCSSCoverage()
- returns: <[Promise]<[Array]<[Object]>>>
  - `url` <[string]> StyleSheet URL
  - `text` <[string]> StyleSheet content, if available.
  - `ranges` <[Array]<[Object]>> StyleSheet ranges that were used. Ranges are sorted and non-overlapping.
    - `start` <[number]> A start offset in text, inclusive
    - `end` <[number]> An end offset in text, exclusive

Returns the array of coverage reports for all stylesheets

> **NOTE** CSS Coverage doesn't include dynamically injected style tags without sourceURLs.

## chromiumCoverage.stopJSCoverage()
- returns: <[Promise]<[Array]<[Object]>>>
  - `url` <[string]> Script URL
  - `scriptId` <[string]> Script ID
  - `source` <[string]> Script content, if applicable.
  - `functions` <[Array]<[Object]>> V8-specific coverage format.
    - `functionName` <[string]>
    - `isBlockCoverage` <[boolean]>
    - `ranges` <[Array]<[Object]>>
      - `count` <[number]>
      - `startOffset` <[number]>
      - `endOffset` <[number]>

Returns the array of coverage reports for all scripts

> **NOTE** JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are reported.



[AXNode]: api/class-accessibility.md#accessibilitysnapshotoptions "AXNode"
[Accessibility]: api/class-accessibility.md#class-accessibility "Accessibility"
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Body]: api.md#class-body  "Body"
[BrowserServer]: api/class-browser.md#class-browserserver  "BrowserServer"
[BrowserContext]: api/class-browsercontext.md#class-browsercontext  "BrowserContext"
[BrowserType]: api/class-browsertype.md#class-browsertype "BrowserType"
[Browser]: api.md#class-browser  "Browser"
[Buffer]: https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer "Buffer"
[ChildProcess]: https://nodejs.org/api/child_process.html "ChildProcess"
[ChromiumBrowser]: api/class-chromiumbrowser.md#class-chromiumbrowser "ChromiumBrowser"
[ChromiumBrowserContext]: api/class-chromiumbrowsercontext.md#class-chromiumbrowsercontext "ChromiumBrowserContext"
[ChromiumCoverage]: api/class-chromiumcoverage.md#class-chromiumcoverage "ChromiumCoverage"
[CDPSession]: api/class-cdpsession.md#class-cdpsession  "CDPSession"
[ConsoleMessage]: api/class-consolemessage.md#class-consolemessage "ConsoleMessage"
[Dialog]: api/class-dialog.md#class-dialog "Dialog"
[Download]: api/class-download.md#class-download "Download"
[ElementHandle]: api/class-elementhandle.md#class-elementhandle "ElementHandle"
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/element "Element"
[Error]: https://nodejs.org/api/errors.htmlapi.md#errors_class_error "Error"
[EvaluationArgument]: api/evaluationargument.md#evaluationargument "Evaluation Argument"
[File]: api.md#class-file "https://developer.mozilla.org/en-US/docs/Web/API/File"
[FileChooser]: api/class-filechooser.md#class-filechooser "FileChooser"
[FirefoxBrowser]: api/class-firefoxbrowser.md#class-firefoxbrowser "FirefoxBrowser"
[Frame]: api/class-frame.md#class-frame "Frame"
[JSHandle]: api/class-jshandle.md#class-jshandle "JSHandle"
[Keyboard]: api/class-keyboard.md#class-keyboard "Keyboard"
[Logger]: api/class-logger.md#class-logger "Logger"
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map"
[Mouse]: api/class-mouse.md#class-mouse "Mouse"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Page]: api/class-page.md#class-page "Page"
[Playwright]: api.md#class-playwright "Playwright"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[RegExp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[Request]: api/class-request.md#class-request  "Request"
[Response]: api/class-response.md#class-response  "Response"
[Route]: api/class-route.md#class-route  "Route"
[Selectors]: api/class-selectors.md#class-selectors  "Selectors"
[Serializable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyapi.md#Description "Serializable"
[TimeoutError]: api/class-timeouterror.md#class-timeouterror "TimeoutError"
[Touchscreen]: api/class-touchscreen.md#class-touchscreen "Touchscreen"
[UIEvent.detail]: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail"
[URL]: https://nodejs.org/api/url.html
[USKeyboardLayout]: ../src/usKeyboardLayout.ts "USKeyboardLayout"
[UnixTime]: https://en.wikipedia.org/wiki/Unix_time "Unix Time"
[Video]: api/class-video.md#class-video "Video"
[WebKitBrowser]: api/class-webkitbrowser.md#class-webkitbrowser "WebKitBrowser"
[WebSocket]: api/class-websocket.md#class-websocket "WebSocket"
[Worker]: api/class-worker.md#class-worker "Worker"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type "Boolean"
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function"
[iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "Iterator"
[null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type "Number"
[origin]: https://developer.mozilla.org/en-US/docs/Glossary/Origin "Origin"
[selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors "selector"
[Readable]: https://nodejs.org/api/stream.htmlapi.md#stream_class_stream_readable "Readable"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type "String"
[xpath]: https://developer.mozilla.org/en-US/docs/Web/XPath "xpath"