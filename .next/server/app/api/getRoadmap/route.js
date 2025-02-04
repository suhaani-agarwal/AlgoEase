/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/getRoadmap/route";
exports.ids = ["app/api/getRoadmap/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetRoadmap%2Froute&page=%2Fapi%2FgetRoadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetRoadmap%2Froute.js&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetRoadmap%2Froute&page=%2Fapi%2FgetRoadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetRoadmap%2Froute.js&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_suhaaniagarwal_AlgoEase_src_app_api_getRoadmap_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getRoadmap/route.js */ \"(rsc)/./src/app/api/getRoadmap/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getRoadmap/route\",\n        pathname: \"/api/getRoadmap\",\n        filename: \"route\",\n        bundlePath: \"app/api/getRoadmap/route\"\n    },\n    resolvedPagePath: \"/Users/suhaaniagarwal/AlgoEase/src/app/api/getRoadmap/route.js\",\n    nextConfigOutput,\n    userland: _Users_suhaaniagarwal_AlgoEase_src_app_api_getRoadmap_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRSb2FkbWFwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZXRSb2FkbWFwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2V0Um9hZG1hcCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnN1aGFhbmlhZ2Fyd2FsJTJGQWxnb0Vhc2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc3VoYWFuaWFnYXJ3YWwlMkZBbGdvRWFzZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDYztBQUMzRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3N1aGFhbmlhZ2Fyd2FsL0FsZ29FYXNlL3NyYy9hcHAvYXBpL2dldFJvYWRtYXAvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldFJvYWRtYXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXRSb2FkbWFwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRSb2FkbWFwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3N1aGFhbmlhZ2Fyd2FsL0FsZ29FYXNlL3NyYy9hcHAvYXBpL2dldFJvYWRtYXAvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetRoadmap%2Froute&page=%2Fapi%2FgetRoadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetRoadmap%2Froute.js&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getRoadmap/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/getRoadmap/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// // /getRoadmap.route.js\n// import { NextResponse } from 'next/server';\n// import db from '@/lib/db'; // Import your database connection\n// export async function GET(req) {\n//   try {\n//     const {userEmail} = await req.json();\n//     console.log(\"Received request for userEmail:\", userEmail);\n//     // Extract email from query parameters\n//     // const { searchParams } = new URL(req.url);\n//     if (!userEmail) {\n//       return NextResponse.json({ error: 'Email is required' }, { status: 400 });\n//     }\n//     // Fetch roadmap for the given user email\n//     const user = await db.user.findUnique({ where: { email: userEmail } });\n//     if (!user) {\n//       return NextResponse.json({ error: 'User not found' }, { status: 404 });\n//     }\n//     const roadmap = await db.roadmap.findFirst({ where: { userId: user.id } });\n//     if (!roadmap) {\n//       return NextResponse.json({ error: 'Roadmap not found' }, { status: 404 });\n//     }\n//     return NextResponse.json({ content: roadmap.content });\n//   } catch (error) {\n//     return NextResponse.json({ error: 'Database error' }, { status: 500 });\n//   }\n// }\n\n // Import database connection\nasync function POST(req) {\n    try {\n        const { userEmail } = await req.json();\n        console.log(\"Received request for userEmail:\", userEmail);\n        if (!userEmail) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Email is required'\n            }, {\n                status: 400\n            });\n        }\n        // Fetch user by email\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email: userEmail\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        // Fetch roadmap for the given user ID\n        const roadmap = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].roadmap.findUnique({\n            where: {\n                userId: user.id\n            }\n        });\n        if (!roadmap) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Roadmap not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            content: roadmap.content\n        }); // Send roadmap content\n    } catch (error) {\n        console.error(\"Database error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Database error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRSb2FkbWFwL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBCQUEwQjtBQUMxQiw4Q0FBOEM7QUFDOUMsZ0VBQWdFO0FBRWhFLG1DQUFtQztBQUNuQyxVQUFVO0FBQ1YsNENBQTRDO0FBQzVDLGlFQUFpRTtBQUNqRSw2Q0FBNkM7QUFDN0Msb0RBQW9EO0FBRXBELHdCQUF3QjtBQUN4QixtRkFBbUY7QUFDbkYsUUFBUTtBQUVSLGdEQUFnRDtBQUNoRCw4RUFBOEU7QUFFOUUsbUJBQW1CO0FBQ25CLGdGQUFnRjtBQUNoRixRQUFRO0FBRVIsa0ZBQWtGO0FBRWxGLHNCQUFzQjtBQUN0QixtRkFBbUY7QUFDbkYsUUFBUTtBQUVSLDhEQUE4RDtBQUM5RCxzQkFBc0I7QUFDdEIsOEVBQThFO0FBQzlFLE1BQU07QUFDTixJQUFJO0FBR3VDO0FBQ2pCLENBQUMsNkJBQTZCO0FBRWpELGVBQWVFLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUNwQ0MsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ0g7UUFFL0MsSUFBSSxDQUFDQSxXQUFXO1lBQ2QsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUFvQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekU7UUFFQSxzQkFBc0I7UUFDdEIsTUFBTUMsT0FBTyxNQUFNVCwrQ0FBRUEsQ0FBQ1MsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFBRUMsT0FBTztnQkFBRUMsT0FBT1Q7WUFBVTtRQUFFO1FBRXBFLElBQUksQ0FBQ00sTUFBTTtZQUNULE9BQU9WLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVHLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsc0NBQXNDO1FBQ3RDLE1BQU1LLFVBQVUsTUFBTWIsK0NBQUVBLENBQUNhLE9BQU8sQ0FBQ0gsVUFBVSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVHLFFBQVFMLEtBQUtNLEVBQUU7WUFBQztRQUFFO1FBRXpFLElBQUksQ0FBQ0YsU0FBUztZQUNaLE9BQU9kLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVHLE9BQU87WUFBb0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pFO1FBRUEsT0FBT1QscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFWSxTQUFTSCxRQUFRRyxPQUFPO1FBQUMsSUFBSSx1QkFBdUI7SUFDakYsRUFBRSxPQUFPVCxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxtQkFBbUJBO1FBQ2pDLE9BQU9SLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFpQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN0RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc3VoYWFuaWFnYXJ3YWwvQWxnb0Vhc2Uvc3JjL2FwcC9hcGkvZ2V0Um9hZG1hcC9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyAvZ2V0Um9hZG1hcC5yb3V0ZS5qc1xuLy8gaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuLy8gaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJzsgLy8gSW1wb3J0IHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvblxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHt1c2VyRW1haWx9ID0gYXdhaXQgcmVxLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHJlcXVlc3QgZm9yIHVzZXJFbWFpbDpcIiwgdXNlckVtYWlsKTtcbi8vICAgICAvLyBFeHRyYWN0IGVtYWlsIGZyb20gcXVlcnkgcGFyYW1ldGVyc1xuLy8gICAgIC8vIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuXG4vLyAgICAgaWYgKCF1c2VyRW1haWwpIHtcbi8vICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gRmV0Y2ggcm9hZG1hcCBmb3IgdGhlIGdpdmVuIHVzZXIgZW1haWxcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWw6IHVzZXJFbWFpbCB9IH0pO1xuXG4vLyAgICAgaWYgKCF1c2VyKSB7XG4vLyAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnN0IHJvYWRtYXAgPSBhd2FpdCBkYi5yb2FkbWFwLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9IH0pO1xuXG4vLyAgICAgaWYgKCFyb2FkbWFwKSB7XG4vLyAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1JvYWRtYXAgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNvbnRlbnQ6IHJvYWRtYXAuY29udGVudCB9KTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0RhdGFiYXNlIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuLy8gICB9XG4vLyB9XG5cblxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJzsgLy8gSW1wb3J0IGRhdGFiYXNlIGNvbm5lY3Rpb25cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyRW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCByZXF1ZXN0IGZvciB1c2VyRW1haWw6XCIsIHVzZXJFbWFpbCk7XG5cbiAgICBpZiAoIXVzZXJFbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBGZXRjaCB1c2VyIGJ5IGVtYWlsXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiB1c2VyRW1haWwgfSB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICAvLyBGZXRjaCByb2FkbWFwIGZvciB0aGUgZ2l2ZW4gdXNlciBJRFxuICAgIGNvbnN0IHJvYWRtYXAgPSBhd2FpdCBkYi5yb2FkbWFwLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcblxuICAgIGlmICghcm9hZG1hcCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdSb2FkbWFwIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb250ZW50OiByb2FkbWFwLmNvbnRlbnQgfSk7IC8vIFNlbmQgcm9hZG1hcCBjb250ZW50XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdEYXRhYmFzZSBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiIiwiUE9TVCIsInJlcSIsInVzZXJFbWFpbCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJyb2FkbWFwIiwidXNlcklkIiwiaWQiLCJjb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getRoadmap/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// const { PrismaClient } = require('@prisma/client')\n// export const prisma = new PrismaClient()\n// lib/prisma.ts\n//lib/db.ts\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFxRDtBQUVyRCwyQ0FBMkM7QUFDM0MsZ0JBQWdCO0FBRWhCLFdBQVc7QUFDbUM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUV4QixNQUFNQyxTQUNKRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFFNUMsSUFBSUksSUFBcUMsRUFBRUgsZ0JBQWdCRSxNQUFNLEdBQUdBO0FBRTdELE1BQU1FLEtBQUtGLE9BQU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWhhYW5pYWdhcndhbC9BbGdvRWFzZS9zcmMvbGliL2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpXG5cbi8vIGV4cG9ydCBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbi8vIGxpYi9wcmlzbWEudHNcblxuLy9saWIvZGIudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWwgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XG5cbmNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiLCJkYiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetRoadmap%2Froute&page=%2Fapi%2FgetRoadmap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetRoadmap%2Froute.js&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();