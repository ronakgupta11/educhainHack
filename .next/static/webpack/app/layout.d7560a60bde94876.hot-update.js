"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/web3modal.tsx":
/*!***********************************!*\
  !*** ./src/context/web3modal.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppKit: function() { return /* binding */ AppKit; }\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethers/react */ \"(app-pages-browser)/./node_modules/@web3modal/ethers/dist/esm/exports/react.js\");\n/* __next_internal_client_entry_do_not_use__ AppKit auto */ \n// 1. Get projectId from https://cloud.walletconnect.com\nconst projectId = \"baf8428698c7cddf0e212bcff8ffabdf\";\n// 2. Set chains\nconst mainnet = {\n    chainId: 1,\n    name: \"Ethereum\",\n    currency: \"ETH\",\n    explorerUrl: \"https://etherscan.io\",\n    rpcUrl: \"https://cloudflare-eth.com\"\n};\nconst eduChain = {\n    chainId: 656476,\n    name: \"Arbitrum Sepolia 421614\",\n    currency: \"EDU\",\n    explorerUrl: \"https://opencampus-codex.blockscout.com\",\n    rpcUrl: \"https://rpc.open-campus-codex.gelato.digital\"\n};\n// 3. Create a metadata object\nconst metadata = {\n    name: \"mento\",\n    description: \"mento platform\",\n    url: \"https://mywebsite.co\",\n    icons: [\n        \"https://avatars.mywebsite.com/\"\n    ]\n};\n// 4. Create Ethers config\nconst ethersConfig = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__.defaultConfig)({\n    /*Required*/ metadata,\n    /*Optional*/ enableEIP6963: true,\n    enableInjected: true,\n    enableCoinbase: true,\n    rpcUrl: \"...\",\n    defaultChainId: 1 // used for the Coinbase SDK\n});\n// 5. Create a AppKit instance\n(0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__.createWeb3Modal)({\n    ethersConfig,\n    chains: [\n        mainnet,\n        eduChain\n    ],\n    projectId,\n    enableAnalytics: true // Optional - defaults to your Cloud configuration\n});\nfunction AppKit(param) {\n    let { children } = param;\n    return children;\n}\n_c = AppKit;\nvar _c;\n$RefreshReg$(_c, \"AppKit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L3dlYjNtb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7NERBRXdFO0FBRXhFLHdEQUF3RDtBQUN4RCxNQUFNRSxZQUFZO0FBRWxCLGdCQUFnQjtBQUNoQixNQUFNQyxVQUFVO0lBQ1pDLFNBQVM7SUFDVEMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsUUFBUTtBQUNaO0FBQ0EsTUFBTUMsV0FBVztJQUNiTCxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7QUFFWjtBQUVBLDhCQUE4QjtBQUM5QixNQUFNRSxXQUFXO0lBQ2JMLE1BQU07SUFDTk0sYUFBYTtJQUNiQyxLQUFLO0lBQ0xDLE9BQU87UUFBQztLQUFpQztBQUM3QztBQUNBLDBCQUEwQjtBQUMxQixNQUFNQyxlQUFlYixzRUFBYUEsQ0FBQztJQUMvQixVQUFVLEdBQ1ZTO0lBRUEsVUFBVSxHQUNWSyxlQUFlO0lBQ2ZDLGdCQUFnQjtJQUNoQkMsZ0JBQWdCO0lBQ2hCVCxRQUFRO0lBQ1JVLGdCQUFnQixFQUFFLDRCQUE0QjtBQUNsRDtBQUVBLDhCQUE4QjtBQUM5QmxCLHdFQUFlQSxDQUFDO0lBQ1pjO0lBQ0FLLFFBQVE7UUFBQ2hCO1FBQVNNO0tBQVM7SUFDM0JQO0lBQ0FrQixpQkFBaUIsS0FBSyxrREFBa0Q7QUFDNUU7QUFFTyxTQUFTQyxPQUFPLEtBQXFEO1FBQXJELEVBQUVDLFFBQVEsRUFBMkMsR0FBckQ7SUFDbkIsT0FBT0E7QUFDWDtLQUZnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvd2ViM21vZGFsLnRzeD82YzIxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBjcmVhdGVXZWIzTW9kYWwsIGRlZmF1bHRDb25maWcgfSBmcm9tICdAd2ViM21vZGFsL2V0aGVycy9yZWFjdCdcblxuLy8gMS4gR2V0IHByb2plY3RJZCBmcm9tIGh0dHBzOi8vY2xvdWQud2FsbGV0Y29ubmVjdC5jb21cbmNvbnN0IHByb2plY3RJZCA9ICdiYWY4NDI4Njk4YzdjZGRmMGUyMTJiY2ZmOGZmYWJkZidcblxuLy8gMi4gU2V0IGNoYWluc1xuY29uc3QgbWFpbm5ldCA9IHtcbiAgICBjaGFpbklkOiAxLFxuICAgIG5hbWU6ICdFdGhlcmV1bScsXG4gICAgY3VycmVuY3k6ICdFVEgnLFxuICAgIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9ldGhlcnNjYW4uaW8nLFxuICAgIHJwY1VybDogJ2h0dHBzOi8vY2xvdWRmbGFyZS1ldGguY29tJ1xufVxuY29uc3QgZWR1Q2hhaW4gPSB7XG4gICAgY2hhaW5JZDogNjU2NDc2LFxuICAgIG5hbWU6ICdBcmJpdHJ1bSBTZXBvbGlhIDQyMTYxNCcsXG4gICAgY3VycmVuY3k6ICdFRFUnLFxuICAgIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9vcGVuY2FtcHVzLWNvZGV4LmJsb2Nrc2NvdXQuY29tJyxcbiAgICBycGNVcmw6ICdodHRwczovL3JwYy5vcGVuLWNhbXB1cy1jb2RleC5nZWxhdG8uZGlnaXRhbCdcblxufVxuXG4vLyAzLiBDcmVhdGUgYSBtZXRhZGF0YSBvYmplY3RcbmNvbnN0IG1ldGFkYXRhID0ge1xuICAgIG5hbWU6ICdtZW50bycsXG4gICAgZGVzY3JpcHRpb246ICdtZW50byBwbGF0Zm9ybScsXG4gICAgdXJsOiAnaHR0cHM6Ly9teXdlYnNpdGUuY28nLCAvLyBvcmlnaW4gbXVzdCBtYXRjaCB5b3VyIGRvbWFpbiAmIHN1YmRvbWFpblxuICAgIGljb25zOiBbJ2h0dHBzOi8vYXZhdGFycy5teXdlYnNpdGUuY29tLyddXG59XG4vLyA0LiBDcmVhdGUgRXRoZXJzIGNvbmZpZ1xuY29uc3QgZXRoZXJzQ29uZmlnID0gZGVmYXVsdENvbmZpZyh7XG4gICAgLypSZXF1aXJlZCovXG4gICAgbWV0YWRhdGEsXG5cbiAgICAvKk9wdGlvbmFsKi9cbiAgICBlbmFibGVFSVA2OTYzOiB0cnVlLCAvLyB0cnVlIGJ5IGRlZmF1bHRcbiAgICBlbmFibGVJbmplY3RlZDogdHJ1ZSwgLy8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgZW5hYmxlQ29pbmJhc2U6IHRydWUsIC8vIHRydWUgYnkgZGVmYXVsdFxuICAgIHJwY1VybDogJy4uLicsIC8vIHVzZWQgZm9yIHRoZSBDb2luYmFzZSBTREtcbiAgICBkZWZhdWx0Q2hhaW5JZDogMSAvLyB1c2VkIGZvciB0aGUgQ29pbmJhc2UgU0RLXG59KVxuXG4vLyA1LiBDcmVhdGUgYSBBcHBLaXQgaW5zdGFuY2VcbmNyZWF0ZVdlYjNNb2RhbCh7XG4gICAgZXRoZXJzQ29uZmlnLFxuICAgIGNoYWluczogW21haW5uZXQsIGVkdUNoYWluXSxcbiAgICBwcm9qZWN0SWQsXG4gICAgZW5hYmxlQW5hbHl0aWNzOiB0cnVlIC8vIE9wdGlvbmFsIC0gZGVmYXVsdHMgdG8geW91ciBDbG91ZCBjb25maWd1cmF0aW9uXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwS2l0KHsgY2hpbGRyZW4gfTogUmVhZG9ubHk8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+KSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuXG59Il0sIm5hbWVzIjpbImNyZWF0ZVdlYjNNb2RhbCIsImRlZmF1bHRDb25maWciLCJwcm9qZWN0SWQiLCJtYWlubmV0IiwiY2hhaW5JZCIsIm5hbWUiLCJjdXJyZW5jeSIsImV4cGxvcmVyVXJsIiwicnBjVXJsIiwiZWR1Q2hhaW4iLCJtZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJldGhlcnNDb25maWciLCJlbmFibGVFSVA2OTYzIiwiZW5hYmxlSW5qZWN0ZWQiLCJlbmFibGVDb2luYmFzZSIsImRlZmF1bHRDaGFpbklkIiwiY2hhaW5zIiwiZW5hYmxlQW5hbHl0aWNzIiwiQXBwS2l0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/web3modal.tsx\n"));

/***/ })

});