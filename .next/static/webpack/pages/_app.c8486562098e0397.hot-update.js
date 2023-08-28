"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Navbar = (param)=>{\n    let { site  } = param;\n    // const { siteName, siteImgUrl }  = useContext(AppContext);\n    const siteName = site.name;\n    console.log(site);\n    console.log(site.pages);\n    const pages = site.pages;\n    console.log(pages);\n    const determineFontSize = (text)=>{\n        const length = text.length;\n        if (length < 10) return \"text-xl\";\n        if (length < 20) return \"text-lg\";\n        if (length < 30) return \"text-base\";\n        return \"text-sm\";\n    };\n    const dynamicFontSize = determineFontSize(siteName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-base-100 border-b-2 border-accent shadow-lg shadow-cyan-500/50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-primary btn-outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-base-content\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M4 6h16M4 12h16M4 18h7\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 141\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, \"home\", false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 23\n                                }, undefined),\n                                pages.filter((p)=>p.show_in_navbar === true && !p.is_homepage).map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: p.slug,\n                                            children: p.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 31\n                                        }, undefined)\n                                    }, p.id, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 27\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"break-all\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"btn btn-ghost normal-case \".concat(dynamicFontSize, \" w-40  \"),\n                        children: siteName\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 51,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-ghost btn-circle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 w-5\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 59,\n                                columnNumber: 121\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-ghost btn-circle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"indicator\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 123\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"badge badge-xs badge-primary indicator-item\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 57,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar); // <div className=\"navbar sticky  p-2  top-0 z-50\">\n //     <div className=\"navbar-start \">\n //     <div></div>\n //     </div>\n //       {/*  {\n //             site.logo_image_url ?\n //             <img src={site.logo_image_url} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //                 :\n //                 <img src={'https://dexterlabs-public.s3.amazonaws.com/images/pagesake_logo.png'} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //         }*/}\n //     <div className=\"navbar-center  \">\n //         {/*<img src={siteData.site_image} className=\"w-16 rounded-full mr-2\" />*/}\n //     <Link href=\"/\"className=\"btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl  break-words  drop-shadow px-0 mx-0 \"> \n //             {siteName}</Link>\n //         <Link href=\"/\"className=\"btn-md   btn-ghost self-center text-2xl  break-words px-0 mx-0 \">\n //             {siteName}\n //         </Link>\n //     </div>\n //     <div className=\"navbar-end\">\n //         <div className=\"dropdown dropdown-end\">\n //             <label tabIndex={0} className=\"btn btn-ghost   \">\n //             <FaBars className='text-2xl '/>\n //                 {/*<svg width=\"64px\" height=\"64px\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#000000\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5  fill-primary stroke-accent\" stroke-width='1.3'  viewBox=\"0 0 20 20\"  ><g id=\"SVGRepo_iconCarrier\"> <path fill=\"\" className= \"\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*className=\"h-5 w-5 stroke-current\" fill=\"none\" viewBox=\"0 0 64 64\"  stroke-width=\"2\"*/}\n //             </label>\n //             {/*<label tabIndex={0} className=\"btn btn-ghost rounded-btn\">Dropdown</label>*/}\n //             {/*<ul tabIndex={0} className=\"menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0\">*/}\n //             <ul tabIndex={0} className=\"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\">\n //                 <li key={'home'}>\n //                     <Link href=\"/\">Home</Link>\n //                 </li>\n //                 {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (\n //                     <li key={p.id}>\n //                         <Link href={p.slug}>{p.title}</Link>\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     </div>\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxlQUFlO0NBSWYsd0NBQXdDO0NBQ3hDLHFGQUFxRjtDQUNyRix5SUFBeUk7Q0FDekksZ0NBQWdDO0NBQ2hDLHFHQUFxRztDQUVyRyx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQ0FBbUM7Q0FFbkMsa0RBQWtEO0NBRWxELGdFQUFnRTtDQUNoRSw4Q0FBOEM7Q0FDOUMsMmRBQTJkO0NBQzNkLGlZQUFpWTtDQUNqWSw2R0FBNkc7Q0FDN0csdUJBQXVCO0NBQ3ZCLCtGQUErRjtDQUMvRixpS0FBaUs7Q0FFakssMEdBQTBHO0NBQzFHLG9DQUFvQztDQUNwQyxpREFBaUQ7Q0FDakQsd0JBQXdCO0NBQ3hCLGdHQUFnRztDQUNoRyxzQ0FBc0M7Q0FDdEMsK0RBQStEO0NBQy9ELDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FJdEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanM/M2QwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7RmFCYXJzfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmNvbnN0IE5hdmJhciA9ICh7c2l0ZX0pID0+IHtcblxuXG4gIC8vIGNvbnN0IHsgc2l0ZU5hbWUsIHNpdGVJbWdVcmwgfSAgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBzaXRlTmFtZSA9IHNpdGUubmFtZVxuXG4gICAgY29uc29sZS5sb2coc2l0ZSlcbiAgICBjb25zb2xlLmxvZyhzaXRlLnBhZ2VzKVxuICAgIGNvbnN0IHBhZ2VzID0gc2l0ZS5wYWdlcztcbiAgICBjb25zb2xlLmxvZyhwYWdlcylcbiAgICBjb25zdCBkZXRlcm1pbmVGb250U2l6ZSA9ICh0ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblxuICAgICAgaWYgKGxlbmd0aCA8IDEwKSByZXR1cm4gJ3RleHQteGwnO1xuICAgICAgaWYgKGxlbmd0aCA8IDIwKSByZXR1cm4gJ3RleHQtbGcnO1xuICAgICAgaWYgKGxlbmd0aCA8IDMwKSByZXR1cm4gJ3RleHQtYmFzZSc7XG4gICAgICByZXR1cm4gJ3RleHQtc20nO1xuICB9O1xuICAgIGNvbnN0IGR5bmFtaWNGb250U2l6ZSA9IGRldGVybWluZUZvbnRTaXplKHNpdGVOYW1lKTtcbiAgcmV0dXJuIChcblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLWJhc2UtMTAwIGJvcmRlci1iLTIgYm9yZGVyLWFjY2VudCBzaGFkb3ctbGcgc2hhZG93LWN5YW4tNTAwLzUwXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW91dGxpbmVcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWJhc2UtY29udGVudFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoN1wiIC8+PC9zdmc+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJtZW51IG1lbnUtc20gZHJvcGRvd24tY29udGVudCBtdC0zIHotWzFdIHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17J2hvbWUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2VzLmZpbHRlcihwID0+IHAuc2hvd19pbl9uYXZiYXIgPT09IHRydWUgJiYgIXAuaXNfaG9tZXBhZ2UpLm1hcCggKHApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwLnNsdWd9PntwLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cblxuXG5cbiAgICAgICBcbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnJlYWstYWxsJz5cbiAgICA8cCBjbGFzc05hbWU9e2BidG4gYnRuLWdob3N0IG5vcm1hbC1jYXNlICR7ZHluYW1pY0ZvbnRTaXplfSB3LTQwICBgfT5cbiAgICB7c2l0ZU5hbWV9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGJ0bi1jaXJjbGVcIj5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIiAvPjwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBidG4tY2lyY2xlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljYXRvclwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTUgMTdoNWwtMS40MDUtMS40MDVBMi4wMzIgMi4wMzIgMCAwMTE4IDE0LjE1OFYxMWE2LjAwMiA2LjAwMiAwIDAwLTQtNS42NTlWNWEyIDIgMCAxMC00IDB2LjM0MUM3LjY3IDYuMTY1IDYgOC4zODggNiAxMXYzLjE1OWMwIC41MzgtLjIxNCAxLjA1NS0uNTk1IDEuNDM2TDQgMTdoNW02IDB2MWEzIDMgMCAxMS02IDB2LTFtNiAwSDlcIiAvPjwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS14cyBiYWRnZS1wcmltYXJ5IGluZGljYXRvci1pdGVtXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuICApXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIHN0aWNreSAgcC0yICB0b3AtMCB6LTUwXCI+XG5cblxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxuICAgICAgLy8gICAgIDxkaXY+PC9kaXY+XG4gICAgICAvLyAgICAgPC9kaXY+XG5cbiAgICAgIC8vICAgICAgIHsvKiAge1xuICAgICAgLy8gICAgICAgICAgICAgc2l0ZS5sb2dvX2ltYWdlX3VybCA/XG4gICAgICAvLyAgICAgICAgICAgICA8aW1nIHNyYz17c2l0ZS5sb2dvX2ltYWdlX3VybH0gY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBtci0yIGJnLW5ldXRyYWwtY29udGVudFwiIC8+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgOlxuICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9kZXh0ZXJsYWJzLXB1YmxpYy5zMy5hbWF6b25hd3MuY29tL2ltYWdlcy9wYWdlc2FrZV9sb2dvLnBuZyd9IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgbXItMiBiZy1uZXV0cmFsLWNvbnRlbnRcIiAvPlxuICAgICAgLy8gICAgICAgICB9Ki99XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyICBcIj5cbiAgICAgIC8vICAgICAgICAgey8qPGltZyBzcmM9e3NpdGVEYXRhLnNpdGVfaW1hZ2V9IGNsYXNzTmFtZT1cInctMTYgcm91bmRlZC1mdWxsIG1yLTJcIiAvPiovfVxuICAgICAgLy8gICAgIDxMaW5rIGhyZWY9XCIvXCJjbGFzc05hbWU9XCJidG4tbWQgIGhpZGRlbiBzbTpibG9jayBidG4tZ2hvc3Qgc2VsZi1jZW50ZXIgdGV4dC1sZyBsZzp0ZXh0LTJ4bCAgYnJlYWstd29yZHMgIGRyb3Atc2hhZG93IHB4LTAgbXgtMCBcIj4gXG4gICAgICAvLyAgICAgICAgICAgICB7c2l0ZU5hbWV9PC9MaW5rPlxuICAgICAgLy8gICAgICAgICA8TGluayBocmVmPVwiL1wiY2xhc3NOYW1lPVwiYnRuLW1kICAgYnRuLWdob3N0IHNlbGYtY2VudGVyIHRleHQtMnhsICBicmVhay13b3JkcyBweC0wIG14LTAgXCI+XG5cbiAgICAgIC8vICAgICAgICAgICAgIHtzaXRlTmFtZX1cbiAgICAgIC8vICAgICAgICAgPC9MaW5rPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuXG4gICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tZW5kXCI+XG5cbiAgICAgIC8vICAgICAgICAgICAgIDxsYWJlbCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCAgIFwiPlxuICAgICAgLy8gICAgICAgICAgICAgPEZhQmFycyBjbGFzc05hbWU9J3RleHQtMnhsICcvPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIHsvKjxzdmcgd2lkdGg9XCI2NHB4XCIgaGVpZ2h0PVwiNjRweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOSA0YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDAxMC0yaDE2YTEgMSAwIDAxMSAxem0wIDZhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMTEwLTJoMTZhMSAxIDAgMDExIDF6bS0xIDdhMSAxIDAgMTAwLTJIMmExIDEgMCAxMDAgMmgxNnpcIj48L3BhdGg+IDwvZz48L3N2Zz4qL31cbiAgICAgIC8vICAgICAgICAgICAgICAgICB7Lyo8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01ICBmaWxsLXByaW1hcnkgc3Ryb2tlLWFjY2VudFwiIHN0cm9rZS13aWR0aD0nMS4zJyAgdmlld0JveD1cIjAgMCAyMCAyMFwiICA+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGZpbGw9XCJcIiBjbGFzc05hbWU9IFwiXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTkgNGExIDEgMCAwMS0xIDFIMmExIDEgMCAwMTAtMmgxNmExIDEgMCAwMTEgMXptMCA2YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDExMC0yaDE2YTEgMSAwIDAxMSAxem0tMSA3YTEgMSAwIDEwMC0ySDJhMSAxIDAgMTAwIDJoMTZ6XCI+PC9wYXRoPiA8L2c+PC9zdmc+Ki99XG4gICAgICAvLyAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwiaC01IHctNSBzdHJva2UtY3VycmVudFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiICBzdHJva2Utd2lkdGg9XCIyXCIqL31cbiAgICAgIC8vICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAvLyAgICAgICAgICAgICB7Lyo8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3Qgcm91bmRlZC1idG5cIj5Ecm9wZG93bjwvbGFiZWw+Ki99XG4gICAgICAvLyAgICAgICAgICAgICB7Lyo8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIm1lbnUgZHJvcGRvd24tY29udGVudCAgICBiZy1wcmltYXJ5LWNvbnRlbnQgdGV4dC1wcmltYXJ5ICBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggbXgtYXV0byB3LTcyIG10LTQgcC0wXCI+Ki99XG5cbiAgICAgIC8vICAgICAgICAgICAgIDx1bCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9eydob21lJ30+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgIC8vICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIHtwYWdlcy5maWx0ZXIocCA9PiBwLnNob3dfaW5fbmF2YmFyID09PSB0cnVlICYmICFwLmlzX2hvbWVwYWdlKS5tYXAoIChwKSA9PiAoXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3AuaWR9PlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cC5zbHVnfT57cC50aXRsZX08L0xpbms+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgKSl9XG5cblxuXG4gICAgICAvLyAgICAgICAgICAgICA8L3VsPlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgIC8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbIkxpbmsiLCJGYUJhcnMiLCJOYXZiYXIiLCJzaXRlIiwic2l0ZU5hbWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiZGV0ZXJtaW5lRm9udFNpemUiLCJ0ZXh0IiwibGVuZ3RoIiwiZHluYW1pY0ZvbnRTaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0YWJJbmRleCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwidWwiLCJsaSIsImhyZWYiLCJmaWx0ZXIiLCJwIiwic2hvd19pbl9uYXZiYXIiLCJpc19ob21lcGFnZSIsIm1hcCIsInNsdWciLCJ0aXRsZSIsImlkIiwiYnV0dG9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});