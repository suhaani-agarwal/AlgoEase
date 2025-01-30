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
exports.id = "app/api/user/route";
exports.ids = ["app/api/user/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_suhaaniagarwal_AlgoEase_src_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/route.ts */ \"(rsc)/./src/app/api/user/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/route\",\n        pathname: \"/api/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/route\"\n    },\n    resolvedPagePath: \"/Users/suhaaniagarwal/AlgoEase/src/app/api/user/route.ts\",\n    nextConfigOutput,\n    userland: _Users_suhaaniagarwal_AlgoEase_src_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnN1aGFhbmlhZ2Fyd2FsJTJGQWxnb0Vhc2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc3VoYWFuaWFnYXJ3YWwlMkZBbGdvRWFzZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDUTtBQUNyRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3N1aGFhbmlhZ2Fyd2FsL0FsZ29FYXNlL3NyYy9hcHAvYXBpL3VzZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3N1aGFhbmlhZ2Fyd2FsL0FsZ29FYXNlL3NyYy9hcHAvYXBpL3VzZXIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/user/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/user/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n\nconst userSchema = zod__WEBPACK_IMPORTED_MODULE_3__.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(1, \"Username is required\").max(100),\n    email: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(1, \"Email is required \").email(\"invalid email\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(1, \"password is required\").min(8, \"password must have 8 characters\")\n});\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { email, username, password } = userSchema.parse(body);\n        //check if email already exists\n        const existingUserByEmail = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n            where: {\n                email: email\n            }\n        });\n        if (existingUserByEmail) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null,\n                message: \"user with this email already exists\"\n            }, {\n                status: 409\n            });\n        }\n        //check if username already exists\n        const existingUserByUsername = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n            where: {\n                username: username\n            }\n        });\n        if (existingUserByUsername) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null,\n                message: \"user with this username already exists\"\n            }, {\n                status: 410\n            });\n        }\n        //creating new user:\n        const hashPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.hash)(password, 10);\n        const newUser = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.create({\n            data: {\n                username,\n                email,\n                password: hashPassword\n            }\n        });\n        const { password: newUserPassword, ...rest } = newUser;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: rest,\n            message: \"User created successfully!\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"something went wrong in creating user!\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNiO0FBR0E7QUFDTDtBQUV6QixNQUFNSSxhQUFhRCx1Q0FBUSxDQUFDO0lBQzFCRyxVQUFVSCx1Q0FBUSxHQUFHSyxHQUFHLENBQUMsR0FBRyx3QkFBd0JDLEdBQUcsQ0FBQztJQUN4REMsT0FBT1AsdUNBQVEsR0FBR0ssR0FBRyxDQUFDLEdBQUcsc0JBQXNCRSxLQUFLLENBQUM7SUFDckRDLFVBQVVSLHVDQUNELEdBQ05LLEdBQUcsQ0FBQyxHQUFHLHdCQUNQQSxHQUFHLENBQUMsR0FBRztBQUNaO0FBRU8sZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU0sRUFBRUwsS0FBSyxFQUFFSixRQUFRLEVBQUVLLFFBQVEsRUFBRSxHQUFHUCxXQUFXWSxLQUFLLENBQUNGO1FBQ3ZELCtCQUErQjtRQUMvQixNQUFNRyxzQkFBc0IsTUFBTWhCLHVDQUFFQSxDQUFDaUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDbkRDLE9BQU87Z0JBQUVWLE9BQU9BO1lBQU07UUFDeEI7UUFDQSxJQUFJTyxxQkFBcUI7WUFDdkIsT0FBT2pCLHFEQUFZQSxDQUFDZSxJQUFJLENBQ3RCO2dCQUFFRyxNQUFNO2dCQUFNRyxTQUFTO1lBQXNDLEdBQzdEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxrQ0FBa0M7UUFDbEMsTUFBTUMseUJBQXlCLE1BQU10Qix1Q0FBRUEsQ0FBQ2lCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3REQyxPQUFPO2dCQUFFZCxVQUFVQTtZQUFTO1FBQzlCO1FBQ0EsSUFBSWlCLHdCQUF3QjtZQUMxQixPQUFPdkIscURBQVlBLENBQUNlLElBQUksQ0FDdEI7Z0JBQUVHLE1BQU07Z0JBQU1HLFNBQVM7WUFBeUMsR0FDaEU7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLG9CQUFvQjtRQUNwQixNQUFNRSxlQUFlLE1BQU10Qiw0Q0FBSUEsQ0FBQ1MsVUFBVTtRQUMxQyxNQUFNYyxVQUFVLE1BQU14Qix1Q0FBRUEsQ0FBQ2lCLElBQUksQ0FBQ1EsTUFBTSxDQUFDO1lBQ25DQyxNQUFNO2dCQUNKckI7Z0JBQ0FJO2dCQUNBQyxVQUFVYTtZQUNaO1FBQ0Y7UUFDQSxNQUFNLEVBQUViLFVBQVVpQixlQUFlLEVBQUUsR0FBR0MsTUFBTSxHQUFHSjtRQUUvQyxPQUFPekIscURBQVlBLENBQUNlLElBQUksQ0FDdEI7WUFBRUcsTUFBTVc7WUFBTVIsU0FBUztRQUE2QixHQUNwRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPUSxPQUFPO1FBQ2QsT0FBTzlCLHFEQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1lBQUVNLFNBQVM7UUFBeUMsR0FDcEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWhhYW5pYWdhcndhbC9BbGdvRWFzZS9zcmMvYXBwL2FwaS91c2VyL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcImNvbnNvbGVcIjtcblxuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCAqIGFzIHogZnJvbSBcInpvZFwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMSwgXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiKS5tYXgoMTAwKSxcbiAgZW1haWw6IHouc3RyaW5nKCkubWluKDEsIFwiRW1haWwgaXMgcmVxdWlyZWQgXCIpLmVtYWlsKFwiaW52YWxpZCBlbWFpbFwiKSxcbiAgcGFzc3dvcmQ6IHpcbiAgICAuc3RyaW5nKClcbiAgICAubWluKDEsIFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIilcbiAgICAubWluKDgsIFwicGFzc3dvcmQgbXVzdCBoYXZlIDggY2hhcmFjdGVyc1wiKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHVzZXJTY2hlbWEucGFyc2UoYm9keSkgO1xuICAgIC8vY2hlY2sgaWYgZW1haWwgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ1VzZXJCeUVtYWlsID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBlbWFpbCB9LFxuICAgIH0pO1xuICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgdXNlcjogbnVsbCwgbWVzc2FnZTogXCJ1c2VyIHdpdGggdGhpcyBlbWFpbCBhbHJlYWR5IGV4aXN0c1wiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDkgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGlmIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyQnlVc2VybmFtZSA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcbiAgICB9KTtcbiAgICBpZiAoZXhpc3RpbmdVc2VyQnlVc2VybmFtZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IHVzZXI6IG51bGwsIG1lc3NhZ2U6IFwidXNlciB3aXRoIHRoaXMgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDEwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9jcmVhdGluZyBuZXcgdXNlcjpcbiAgICBjb25zdCBoYXNoUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMCk7XG4gICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZDogaGFzaFBhc3N3b3JkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHBhc3N3b3JkOiBuZXdVc2VyUGFzc3dvcmQsIC4uLnJlc3QgfSA9IG5ld1VzZXI7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHVzZXI6IHJlc3QsIG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseSFcIiB9LFxuICAgICAgeyBzdGF0dXM6IDIwMSB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6IFwic29tZXRoaW5nIHdlbnQgd3JvbmcgaW4gY3JlYXRpbmcgdXNlciFcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiIiwiaGFzaCIsInoiLCJ1c2VyU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJlbWFpbCIsInBhc3N3b3JkIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwicGFyc2UiLCJleGlzdGluZ1VzZXJCeUVtYWlsIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJleGlzdGluZ1VzZXJCeVVzZXJuYW1lIiwiaGFzaFBhc3N3b3JkIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJuZXdVc2VyUGFzc3dvcmQiLCJyZXN0IiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// const { PrismaClient } = require('@prisma/client')\n// export const prisma = new PrismaClient()\n// lib/prisma.ts\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFxRDtBQUVyRCwyQ0FBMkM7QUFDM0MsZ0JBQWdCO0FBQzhCO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFFeEIsTUFBTUMsU0FDSkYsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBRTVDLElBQUlJLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUU3RCxNQUFNRSxLQUFLRixPQUFPIiwic291cmNlcyI6WyIvVXNlcnMvc3VoYWFuaWFnYXJ3YWwvQWxnb0Vhc2Uvc3JjL2xpYi9kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKVxuXG4vLyBleHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4vLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5jb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGNvbnN0IGRiID0gcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZGIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuhaaniagarwal%2FAlgoEase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();