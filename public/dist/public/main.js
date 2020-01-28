(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"gameMap\">\n    <table *ngIf=\"gameMap.map\" class=\"borderTable\" [style.backgroundImage]=\"'url('+ gameBG + ')'\">\n        <tr *ngFor=\"let row of gameMap.map\">\n            <td *ngFor=\"let col of row\" (click)=\"clickGame(col, currentPlayer)\" [style.width]=\"gameScale\" [style.height]=\"gameScale\" [style.max-width]=\"gameScale\" [style.max-height]=\"gameScale\" [style.outline]=\"col.border\">\n                <div [style.background-color]=\"col.bg\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <img *ngIf=\"col.img\" [src]=\"col.img\" [width]=\"col.size\" [height]=\"col.size\" [style.transform]=\"col.location.transform\">\n                    <img *ngIf=\"col.imgTop\" [src]=\"col.imgTop.img\" [style.opacity]='col.imgTop.alpha' [style.transform]='col.imgTop.transform' style=\"position: absolute;\">\n                </div>\n            </td>\n        </tr>\n    </table>\n</div>\n<div *ngIf=\"gameInfo\">\n\n    <div *ngIf=\"gameInfo['desc']\">\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");




const routes = [
    { path: '', component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.borderTable{\r\n    border-collapse: collapse;\r\n}\r\n.borderTable, .borderTable th, .borderTable td{\r\n    border: 1px solid black;\r\n}\r\n.borderTable td{\r\n    width: 50px; height: 50px; max-width: 50px; max-height: 50px;\r\n}\r\n.borderTable tr{\r\n    height: 50px; max-height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjtBQUNoRTtBQUNBO0lBQ0ksWUFBWSxFQUFFLGdCQUFnQjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5ib3JkZXJUYWJsZXtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuLmJvcmRlclRhYmxlLCAuYm9yZGVyVGFibGUgdGgsIC5ib3JkZXJUYWJsZSB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5ib3JkZXJUYWJsZSB0ZHtcclxuICAgIHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IG1heC13aWR0aDogNTBweDsgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG4uYm9yZGVyVGFibGUgdHJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7IG1heC1oZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _map_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-obj */ "./src/app/map-obj.ts");



let GameComponent = class GameComponent {
    constructor() {
        this.gameScale = '50'; // affects height and width of table blocks
        this.gameBG = 'assets/img/Backgrounds/darkPurple.png'; // overall map background
        this.numAsteroids = 10; // maximum number of asteroids on map
        this.numRows = 8; // width of map
        this.numColumns = 8; // height of map
        this.inMove = false;
        this.inShoot = false;
        this.inSpecial = false;
    }
    ngOnInit() {
        this.newGame(this.randomMap());
        this.currentPlayer = 'blue'; // going to need logic to figure out which player this is...
        this.gameInfo = {
            'turnNumber': this.gameMap.turn,
            'turnPlayer': this.gameMap.playerTurn,
        };
    }
    newGame(map) {
        this.gameMap = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["MapObj"]();
        this.generateMap(map);
        //debugging
        // this.gameMap.map[4][1].imgTop = {
        //   'img': 'assets/img/Lasers/laserGreen02.png',
        //   'alpha': 0.7,
        //   'rotate': 'rotate(45deg)',
        // };
    }
    generateMap(map) {
        this.gameMap.map = [];
        for (let row in map) {
            this.gameMap.map.push([]);
            for (let col in map[row]) {
                if (map[row][col] == 'a') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Asteroid"](+row, +col, 0, 20)); // + operator converts string to number
                }
                else if (map[row][col] == 'bFighter') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Fighter"](+row, +col, 180, 'blue'));
                }
                else if (map[row][col] == 'bScout') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Scout"](+row, +col, 180, 'blue'));
                }
                else if (map[row][col] == 'bSniper') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Sniper"](+row, +col, 180, 'blue'));
                }
                else if (map[row][col] == 'bCapitol') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Capitol"](+row, +col, 180, 'blue'));
                }
                else if (map[row][col] == 'rFighter') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Fighter"](+row, +col, 0, 'red'));
                }
                else if (map[row][col] == 'rScout') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Scout"](+row, +col, 0, 'red'));
                }
                else if (map[row][col] == 'rSniper') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Sniper"](+row, +col, 0, 'red'));
                }
                else if (map[row][col] == 'rCapitol') {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Capitol"](+row, +col, 0, 'red'));
                }
                else {
                    this.gameMap.map[row].push(new _map_obj__WEBPACK_IMPORTED_MODULE_2__["BaseObj"](+row, +col, 0, 0, 0, 0)); // push empty base object
                }
            }
        }
    }
    randomMap() {
        let blueprint = [];
        for (let i = 0; i < this.numRows; i++) {
            blueprint.push([]);
            for (let j = 0; j < this.numColumns; j++) {
                blueprint[i].push(0);
            }
        }
        blueprint[0][0] = "bCapitol";
        blueprint[0][1] = "bSniper";
        blueprint[1][0] = "bFighter";
        blueprint[1][1] = "bScout";
        blueprint[blueprint.length - 1][blueprint[0].length - 1] = "rCapitol";
        blueprint[blueprint.length - 1][blueprint[0].length - 2] = "rSniper";
        blueprint[blueprint.length - 2][blueprint[0].length - 1] = "rFighter";
        blueprint[blueprint.length - 2][blueprint[0].length - 2] = "rScout";
        // random asteroids
        let asteroidsMade = 0;
        let asteroidArray = [];
        while (asteroidsMade < (this.numAsteroids / 2)) { // only go to half hte number of asteroids to mirro the playing field
            let randRow = (Math.floor(Math.random() * blueprint.length));
            let randCol = (Math.floor(Math.random() * blueprint[0].length));
            if (blueprint[randRow][randCol] == 0) {
                blueprint[randRow][randCol] = 'a';
                asteroidsMade++;
                asteroidArray.push([randRow, randCol]);
            }
        }
        for (let asteroidToMirror of asteroidArray) { // mirroring the playing field for balance
            let mirrorCoordRow = (blueprint.length - asteroidToMirror[0] - 1);
            let mirrorCoordCol = (blueprint[0].length - asteroidToMirror[1] - 1);
            if (blueprint[mirrorCoordRow][mirrorCoordCol] == 0) {
                blueprint[mirrorCoordRow][mirrorCoordCol] = 'a';
            }
        }
        console.log(blueprint);
        return blueprint;
    }
    clickGame(clicked, player) {
        // need logic for if it's the player's turn, etc
        if (player == 'blue') { // blue player's click
            if (this.lastBlueClicked) {
                this.lastBlueClicked.border = "";
            }
            clicked.border = "1px solid cyan";
            this.lastBlueClicked = clicked;
        }
        else { // red player's click
            if (this.lastRedClicked) {
                this.lastRedClicked.border = "";
            }
            clicked.border = "1px solid red";
            this.lastRedClicked = clicked;
        }
        if (!this.inMove && !this.inShoot && !this.inSpecial) {
            this.unitInfo(clicked);
        }
    }
    unitInfo(unit) {
        if (unit instanceof _map_obj__WEBPACK_IMPORTED_MODULE_2__["BaseObj"]) {
            this.gameInfo['desc'] = 'Empty Space';
        }
        else {
            this.gameInfo['desc'] = ` Unit Type: ${unit.name} \n Player Owner: ${unit.color} \n Health: ${unit.hp} \n Speed: ${unit.speed} units/turn \n Attack Range: ${unit.range} units`;
            if (unit instanceof _map_obj__WEBPACK_IMPORTED_MODULE_2__["Fighter"]) {
                this.gameInfo['desc'] += `\n Missile Available: `;
                if (unit.ammo == 1) {
                    this.gameInfo['desc'] += `Yes`;
                }
                else {
                    this.gameInfo['desc'] += `No`;
                }
                if (unit.missile.firing == true) {
                    this.gameInfo['desc'] += ` (Missile en route)`;
                }
            }
        }
    }
};
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/map-obj.ts":
/*!****************************!*\
  !*** ./src/app/map-obj.ts ***!
  \****************************/
/*! exports provided: BaseObj, Fighter, Scout, Sniper, Capitol, Asteroid, MapObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseObj", function() { return BaseObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fighter", function() { return Fighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scout", function() { return Scout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sniper", function() { return Sniper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capitol", function() { return Capitol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asteroid", function() { return Asteroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapObj", function() { return MapObj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaseObj {
    constructor(row, col, rotate, hp, speed, range) {
        this.location = {
            'row': 0,
            'col': 0,
            'rotate': 0,
            'transform': 'rotate(0deg)',
        };
        this.location.row = row;
        this.location.col = col;
        this.location.rotate = rotate;
        this.location.transform = `rotate(${rotate}deg)`;
        this.hp = hp;
        this.speed = speed;
        this.range = range;
        this.ammo = 1;
        this.shieldHP = 0;
        this.size = 50;
        this.border = "";
    }
    click() {
        console.log('clicked an empty space');
        this.border = "1px solid red";
        return this;
    }
    move(targetRow, targetCol) {
        this.location.row = targetRow;
        this.location.col = targetCol;
        return this;
    }
    takeDmg(amount) {
        if (this.shieldHP > 0) {
            this.shieldHP -= amount;
            if (this.shieldHP < 0) {
                amount = Math.abs(this.shieldHP);
            }
            else {
                amount = 0;
            }
        }
        this.hp -= amount;
        if (this.hp <= 0) {
            this.die();
        }
        return this;
    }
    die() {
        this.hp = 0;
        this.img = null;
        this.imgTop = null;
        this.bg = null;
        // maybe have code in here to change the entry to a different map null object?
        return this;
    }
}
class Fighter extends BaseObj {
    constructor(row, col, rotate, color) {
        super(row, col, rotate, 50, 4, 6);
        this.missile = {
            'firing': false,
            'target': {
                'row': 0,
                'col': 0,
            },
        };
        this.img = `assets/img/playerShip1_${color}.png`;
    }
    fireMissile(targetRow, targetCol) {
        if (this.missile.firing == false && this.ammo > 0) {
            let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
            if (distance <= this.range) {
                this.missile.firing = true;
                this.missile.target.row = targetRow;
                this.missile.target.col = targetCol;
                this.ammo = 0;
            }
            else {
                console.log('Missile target out of range');
            }
        }
        else {
            console.log('Missile already firing or out of ammo');
        }
        return this;
    }
    newTurn() {
        if (this.missile.firing == true) {
            // do missile exploding stuff here
            //
            this.missile.firing = false;
        }
        else if (this.ammo == 0) {
            this.ammo = 1;
        }
        return this;
    }
    click() {
        console.log('clicked a Fighter');
        return this;
    }
}
class Scout extends BaseObj {
    constructor(row, col, rotate, color) {
        super(row, col, rotate, 25, 5, 3);
        this.empAmmo = 1;
        this.img = `assets/img/playerShip2_${color}.png`;
    }
    fireEMP() {
        if (this.empAmmo > 0) {
            // do EMP exploding stuff
        }
        else {
            console.log('Out of EMP ammo');
        }
        this.empAmmo = 0;
        return this;
    }
    shoot(targetRow, targetCol, targetObj) {
        if (this.ammo == 0) {
            console.log('Cannot fire more than once per turn');
            return this;
        }
        let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
        if (distance <= this.range) {
            try {
                targetObj.takeDmg(10);
                this.ammo = 0;
            }
            catch (error) {
                console.log('Error reducing health of target');
            }
        }
        else {
            console.log('Target out of range');
        }
    }
    newTurn() {
        this.ammo = 1;
    }
    click() {
        console.log('clicked a Scout');
        return this;
    }
}
class Sniper extends BaseObj {
    constructor(row, col, rotate, color) {
        super(row, col, rotate, 20, 2, 12);
        this.charged = false;
        this.img = `assets/img/playerShip3_${color}.png`;
    }
    charge() {
        if (this.ammo > 0 && this.charged == false) {
            this.charged = true;
            this.ammo = 0;
        }
        else {
            console.log('Either out of ammo or already charged');
        }
        return this;
    }
    shoot(targetRow, targetCol, targetObj) {
        if (this.ammo > 0) {
            let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
            if (distance <= this.range) {
                try {
                    if (this.charged == true) {
                        targetObj.takeDmg(60);
                        this.charged = false;
                    }
                    else {
                        targetObj.takeDmg(30);
                    }
                    this.ammo = 0;
                }
                catch (error) {
                    console.log('Error reducing health of target');
                }
            }
            else {
                console.log('Target out of range');
            }
        }
        else {
            console.log('Out of ammo');
        }
    }
    newTurn() {
        this.ammo = 1;
    }
    click() {
        console.log('clicked a Sniper');
        return this;
    }
}
class Capitol extends BaseObj {
    constructor(row, col, rotate, color) {
        super(row, col, rotate, 50, 3, 2);
        this.shieldHP = 100;
        this.ammo = 2;
        this.img = `assets/img/ufo${color}.png`;
    }
    newTurn() {
        this.ammo = 2;
        while (this.ammo > 0) {
            // have logic to shoot anything within range and do low damage, like 15 or something
        }
        this.shieldHP += 10;
    }
    die() {
        console.log('Game over');
        super.die();
        // need game over logic here
        return this;
    }
    click() {
        console.log('clicked a Capitol');
        return this;
    }
}
class Asteroid extends BaseObj {
    constructor(row, col, rotate, hp) {
        super(row, col, rotate, hp, 0, 0);
        this.ammo = 0;
        let meteorArray = ['meteorBrown_big1', 'meteorBrown_big2', 'meteorBrown_big3', 'meteorBrown_big4', 'meteorGrey_big1', 'meteorGrey_big2', 'meteorGrey_big3', 'meteorGrey_big4', 'meteorBrown_med1', 'meteorBrown_med2', 'meteorGrey_med1', 'meteorGrey_med2', 'meteorGrey_small1', 'meteorGrey_small2', 'meteorBrown_small1', 'meteorBrown_small2'];
        let randMeteorInd = (Math.floor(Math.random() * meteorArray.length));
        this.img = `assets/img/Meteors/${meteorArray[randMeteorInd]}.png`;
        if (randMeteorInd <= 7) { // big meteor
            this.size = 50;
        }
        else if (randMeteorInd <= 11) { // medium meteor
            this.size = (Math.floor(Math.random() * 15) + 35);
        }
        else { // small meteor
            this.size = (Math.floor(Math.random() * 15) + 20);
        }
        this.location.rotate = (Math.floor(Math.random() * 360));
        this.location.transform = `rotate(${this.location.rotate}deg)`;
    }
    newTurn() {
        let rotate = (this.location.rotate + (Math.floor(Math.random() * 60) - 30));
        this.location.rotate = rotate;
        this.location.transform = `rotate(${rotate}deg)`;
        return this;
    }
    click() {
        console.log('clicked an Asteroid');
        return this;
    }
}
class MapObj {
    constructor() {
        this.turn = 0;
        this.playerTurn = 'blue';
        this.activeClick = '';
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Charles\Desktop\CodingDojo\meanStack\Project Week\space fighter\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map