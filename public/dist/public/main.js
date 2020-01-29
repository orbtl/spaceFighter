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
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: block;\">\n    <div *ngIf=\"gameMap\" style=\"display: inline-block\">\n        <table *ngIf=\"gameMap.map\" class=\"borderTable\" [style.backgroundImage]=\"'url('+ gameBG + ')'\">\n            <tr *ngFor=\"let row of gameMap.map\">\n                <td *ngFor=\"let col of row\" (click)=\"clickGame(col, currentPlayer)\" [style.background-color]=\"col.bg\" [style.width]=\"gameScale\" [style.height]=\"gameScale\" [style.max-width]=\"gameScale\" [style.max-height]=\"gameScale\" [style.outline]=\"col.border\">\n                    <div [style.width]=\"gameScale\" [style.height]=\"gameScale\" style=\"display: flex; justify-content: center; align-items: center;\">\n                        <img *ngIf=\"col.img\" [src]=\"col.img\" [width]=\"col.size\" [height]=\"col.size\" [style.opacity]=\"col.imgAlpha\" [style.transform]=\"col.location.transform\">\n                        <img *ngIf=\"col.imgTop\" [src]=\"col.imgTop.img\" [width]=\"col.imgTop.size\" [height]=\"col.imgTop.size\" [style.opacity]='col.imgTop.alpha' [style.transform]='col.imgTop.transform' style=\"position: absolute;\">\n                        \n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div style=\"display: inline-block; vertical-align: top;\">\n        <button (click)=\"cancel(currentPlayer)\">Cancel Selection</button>\n        <br>\n        <button (click)=\"enableMove(currentPlayer)\">Move</button>\n        <br>\n        <button (click)=\"enableShoot(currentPlayer)\">Shoot</button>\n        <br>\n        <button (click)=\"enableSpecial(currentPlayer)\">Special Ability</button>\n        <br>\n        <button (click)=\"endTurn(currentPlayer)\">End Turn</button>\n        <br>\n        <div *ngIf=\"actionText\">\n            <p>{{actionText}}</p>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"gameInfo\">\n    <p>Turn: {{gameInfo.turnNumber}}, {{gameInfo.turnPlayer}}'s turn</p>\n    <div *ngIf=\"gameInfo['desc']\" style=\"white-space: pre-line;\">\n        <p>{{gameInfo['desc']}}</p>\n    </div>\n</div>\n<div>\n    <button (click)='newGame()'>Start New Game</button>\n</div>\n<div *ngIf=\"debugMode == true\">\n    <button (click)=\"debugInfo()\">Print Debug Info</button>\n</div>");

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
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");







const config = { url: 'http://localhost:8000', options: {} };
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
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");



let GameService = class GameService {
    // testData = this._socket.fromEvent<any>('testSocketFromServer');
    constructor(_socket) {
        this._socket = _socket;
        this.myTeamAssignment = this._socket.fromEvent('teamAssignment');
        this.otherPlayerClicks = this._socket.fromEvent('newServerClick');
        this.existingMap = this._socket.fromEvent('sendMap');
        this.needNewMap = this._socket.fromEvent('needNewGame');
        this.otherPlayerMoves = this._socket.fromEvent('newServerMove');
        this.otherPlayerShoots = this._socket.fromEvent('newServerShoot');
    }
    sendClick(row, col, player) {
        this._socket.emit('newClientClick', { 'row': row, 'col': col, 'player': player });
    }
    sendMap(blueprint) {
        this._socket.emit('newMap', blueprint);
    }
    sendMove(moveData) {
        this._socket.emit('newClientMove', moveData);
    }
    sendShoot(shootData) {
        this._socket.emit('newClientShoot', shootData);
    }
};
GameService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



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
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");




let GameComponent = class GameComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.gameScale = '50'; // affects height and width of table blocks
        this.gameBG = 'assets/img/Backgrounds/darkPurple.png'; // overall map background
        this.numAsteroids = 10; // maximum number of asteroids on map
        this.numRows = 8; // width of map
        this.numColumns = 8; // height of map
        this.inMove = false;
        this.inShoot = false;
        this.inSpecial = false;
        this.debugMode = true;
    }
    ngOnInit() {
        this._clickObs = this._gameService.otherPlayerClicks.subscribe(data => {
            this.selectClick(data.row, data.col, data.player);
        });
        this._teamObs = this._gameService.myTeamAssignment.subscribe(data => {
            console.log('was assigned to team', data.team);
            this.currentPlayer = data.team;
        });
        this._existingMapObs = this._gameService.existingMap.subscribe(data => {
            this.processExistingMap(data);
        });
        this._needNewMapObs = this._gameService.needNewMap.subscribe(data => {
            console.log('creating new map data');
            this.newGame();
        });
        this._moveObs = this._gameService.otherPlayerMoves.subscribe(data => {
            let moveFrom = this.gameMap.map[data.moveFromRow][data.moveFromCol];
            let moveTo = this.gameMap.map[data.moveToRow][data.moveToCol];
            this.moveUnit(moveTo, moveFrom, data.player);
        });
        this._shootObs = this._gameService.otherPlayerShoots.subscribe(data => {
            let shootFrom = this.gameMap.map[data.shootFromRow][data.shootFromCol];
            let shootTo = this.gameMap.map[data.shootToRow][data.shootToCol];
            this.shootUnit(shootTo, shootFrom, data.player);
        });
        this.currentPlayer = 'blue'; // defaults to blue until getting info back from socket
    }
    newGame() {
        this.blueprint = this.randomMap();
        // this._gameService.sendMap(this.blueprint);
        this.renderGame(this.blueprint);
        return this;
    }
    processExistingMap(mapData) {
        console.log('got existing map data, beginning processing');
        this.gameMap = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["MapObj"]();
        this.gameMap.map = mapData.map;
        for (let row in mapData.map) {
            for (let col in mapData.map[row]) {
                if (mapData.map[row][col].name == 'Empty Space') {
                    this.gameMap.map[row][col] = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["BaseObj"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].hp, mapData.map[row][col].speed, mapData.map[row][col].range);
                }
                else if (mapData.map[row][col].name == 'Fighter') {
                    this.gameMap.map[row][col] = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Fighter"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].team);
                }
                else if (mapData.map[row][col].name == 'Scout') {
                    this.gameMap.map[row][col] = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Scout"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].team);
                }
                else if (mapData.map[row][col].name == 'Sniper') {
                    this.gameMap.map[row][col] = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Sniper"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].team);
                }
                else if (mapData.map[row][col].name == 'Capitol') {
                    this.gameMap.map[row][col] = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Capitol"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].team);
                }
                else if (mapData.map[row][col].name == 'Asteroid') {
                    var asteroid = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["Asteroid"](+row, +col, mapData.map[row][col].location.rotate, mapData.map[row][col].hp);
                    asteroid.size = mapData.map[row][col].size;
                    asteroid.img = mapData.map[row][col].img;
                    asteroid.location.rotate = mapData.map[row][col].location.rotate;
                    asteroid.location.transform = mapData.map[row][col].location.transform;
                    this.gameMap.map[row][col] = asteroid; //
                }
                else {
                    console.log('error: unknown object type in map data');
                }
            }
        }
        this.gameInfo = {
            'turnNumber': this.gameMap.turn,
            'turnPlayer': this.gameMap.playerTurn,
        };
        console.log('Finished processing map data received and generating new object instances');
        return this;
    }
    renderGame(map) {
        this.gameMap = new _map_obj__WEBPACK_IMPORTED_MODULE_2__["MapObj"]();
        this.generateMap(map);
        this._gameService.sendMap(this.gameMap);
        return this;
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
        this.gameInfo = {
            'turnNumber': this.gameMap.turn,
            'turnPlayer': this.gameMap.playerTurn,
        };
        console.log('generated map and game info');
        return this;
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
        return blueprint;
    }
    enableMove(player) {
        if (player == this.gameMap.playerTurn) { // it's this player's turn and they should be able to move
            if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
                if (player == 'blue') { // blue player
                    if (this.lastBlueClicked) {
                        this.unitToAct = this.lastBlueClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                else { // red player
                    if (this.lastRedClicked) {
                        this.unitToAct = this.lastRedClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                if (this.unitToAct.moved == false) {
                    this.inMove = true;
                    this.actionText = "Select a position marked by a green background to move to";
                }
                else {
                    this.actionText = "That unit has already moved";
                }
            }
        }
        else {
            this.actionText = "It is not your turn!";
        }
        return this;
    }
    enableShoot(player) {
        if (player == this.gameMap.playerTurn) { // it's this player's turn and they should be able to move
            if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
                if (player == 'blue') { // blue player
                    if (this.lastBlueClicked) {
                        this.unitToAct = this.lastBlueClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                else { // red player
                    if (this.lastRedClicked) {
                        this.unitToAct = this.lastRedClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                if (this.unitToAct.ammo > 0) {
                    this.inShoot = true;
                    this.actionText = "Select a target marked by an X to shoot (range illustrated by green border)";
                }
                else {
                    this.actionText = "That unit does not have any ammo";
                }
            }
        }
        else {
            this.actionText = "It is not your turn!";
        }
        return this;
    }
    enableSpecial(player) {
        if (player == this.gameMap.playerTurn) {
            if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
                if (player == 'blue') { // blue player
                    if (this.lastBlueClicked) {
                        this.unitToAct = this.lastBlueClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                else { // red player
                    if (this.lastRedClicked) {
                        this.unitToAct = this.lastRedClicked;
                    }
                    else {
                        this.actionText = "You must first select a unit";
                        return this;
                    }
                }
                if (this.unitToAct.name == 'Sniper') {
                    if (this.unitToAct.charged == false) {
                        this.unitToAct.charged = true;
                        this.unitToAct.ammo = 0;
                        this.unitToAct.moved = true;
                        this.actionText = "This sniper is now charging and cannot shoot or move until next turn";
                    }
                }
                else if (this.unitToAct.name == 'Scout') {
                    if (this.unitToAct.empAmmo > 0) {
                        // emp stuff
                        let row = this.unitToAct.location.row;
                        let minRow = row;
                        let maxRow = row;
                        let col = this.unitToAct.location.col;
                        let minCol = col;
                        let maxCol = col;
                        if ((row - 1) >= 0) {
                            minRow = row - 1;
                        }
                        if ((col - 1) >= 0) {
                            minCol = col - 1;
                        }
                        if ((row + 1) < this.gameMap.map.length) {
                            maxRow = row + 1;
                        }
                        if ((col + 1) < this.gameMap.map[0].length) {
                            maxCol = col + 1;
                        }
                        for (let i = minRow; i <= maxRow; i++) {
                            for (let j = minCol; j <= maxCol; j++) {
                                if (this.gameMap.map[i][j].name == 'Capitol') {
                                    this.gameMap.map[i][j].shieldHP = 0;
                                    this.gameMap.map[i][j].imgTop = null;
                                    this.gameMap.map[i][j].imgTopLast = null;
                                }
                                else if (this.gameMap.map[i][j].name == 'Sniper') {
                                    this.gameMap.map[i][j].charged = false;
                                }
                            }
                        }
                        this.unitToAct.empAmmo = 0;
                        this.cancel(player);
                        this.actionText = "EMP Successfully Detonated!  All adjacent Snipers are discharged and Capitols have no shields!";
                    }
                    else {
                        this.actionText = "That scout's EMP is not available";
                    }
                }
                else {
                    this.actionText = "That unit does not have a special ability";
                }
            }
        }
        else {
            this.actionText = "It is not your turn!";
        }
        return this;
    }
    moveUnitLocal(moveTo, moveFrom, player) {
        let moveData = {
            'moveToRow': moveTo.location.row,
            'moveToCol': moveTo.location.col,
            'moveFromRow': moveFrom.location.row,
            'moveFromCol': moveFrom.location.col,
            'player': player
        };
        this.moveUnit(moveTo, moveFrom, player);
        this._gameService.sendMove(moveData);
        return this;
    }
    moveUnit(moveTo, moveFrom, player) {
        // logic to move the unit
        //logic to figure out rotation
        let row2 = moveTo.location.row;
        let row1 = moveFrom.location.row;
        let col2 = moveTo.location.col;
        let col1 = moveFrom.location.col;
        let rotation = 0;
        if (col2 == col1) { // they are above each other, don't want to divide by 0
            if (row2 >= row1) { // new position is below
                rotation = 180;
            }
            else { // new position is above
                rotation = 0;
            }
        }
        else if (col2 > col1) { // new position is to the right
            if (row2 > row1) { // position below and to the right
                rotation = 135;
            }
            else if (row2 < row1) { //position above and to the right
                rotation = 45;
            }
            else { // position directly to the right
                rotation = 90;
            }
        }
        else { // position is to the left
            if (row2 > row1) { // position below and to the left
                rotation = 225;
            }
            else if (row2 < row1) { //position above and to the left
                rotation = 315;
            }
            else { // position directly to the left
                rotation = 270;
            }
        }
        let unit1 = this.gameMap.map[row1][col1]; // these lines are so we can swap them even from socket connection and keep track of them as we swap
        let unit2 = this.gameMap.map[row2][col2];
        unit1.location.row = row2;
        unit1.location.col = col2;
        unit1.location.rotate = rotation;
        unit1.location.transform = `rotate(${rotation}deg)`;
        unit2.location.row = row1;
        unit2.location.col = col1;
        this.gameMap.map[row1][col1] = unit2; // move empty space object that was at destination to origin
        this.gameMap.map[row2][col2] = unit1; // move ship to destination
        unit1.moved = true;
        this.cancel(player);
        return this;
    }
    shootUnitLocal(clicked, player) {
        let shootFrom = this.unitToAct;
        let shootTo = clicked;
        let shootData = {
            'shootFromRow': shootFrom.location.row,
            'shootFromCol': shootFrom.location.col,
            'shootToRow': shootTo.location.row,
            'shootToCol': shootTo.location.col,
            'player': player
        };
        this.shootUnit(shootTo, shootFrom, player);
        this._gameService.sendShoot(shootData);
        return this;
    }
    shootUnit(shootTo, shootFrom, player) {
        if (shootFrom.name == 'Fighter') {
            shootFrom.fireMissile(shootTo.location.row, shootTo.location.col);
        }
        else {
            shootFrom.shoot(shootTo);
        }
        this.cancel(player);
        return this;
    }
    debugInfo() {
        console.log('Printing Debug Info:');
        console.log(`lastBlueClicked: ${this.lastBlueClicked}, lastRedClicked: ${this.lastRedClicked}`);
        if (this.lastBlueClicked) {
            console.log(`lastBlueClicked row: ${this.lastBlueClicked.location.row}, col: ${this.lastBlueClicked.location.col}`);
        }
        if (this.lastRedClicked) {
            console.log(`lastRedClicked row: ${this.lastRedClicked.location.row}, col: ${this.lastRedClicked.location.col}`);
        }
        console.log(`currentPlayer: ${this.currentPlayer}, unitToAct: ${this.unitToAct}`);
        console.log(`inMove: ${this.inMove}, inShoot: ${this.inShoot}, inSpecial: ${this.inSpecial}`);
        return this;
    }
    clickGame(clicked, player) {
        // need logic for if it's the player's turn, etc
        let row = clicked.location.row; // these are so that the clicked row and col are kept clean for after other methods are called
        let col = clicked.location.col;
        if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
            this.unitInfo(clicked);
            this.actionText = "";
            if (this.moveable) { // clear old green bg highlights
                for (let item of this.moveable) {
                    item.bg = '';
                }
            }
            if (this.shootInRange) { // clear old yellow border highlights
                for (let item of this.shootInRange) {
                    item.border = '';
                }
            }
            if (this.shootable) { // clear old bg highlights
                for (let item of this.shootable) {
                    item.imgTop = null;
                }
            }
            this.shootable = [];
            this.shootInRange = [];
            this.moveable = [];
            if (player == clicked.team) {
                if (clicked.moved == false) {
                    this.moveRange(clicked.location.row, clicked.location.col, clicked.speed);
                }
                if (clicked.ammo > 0) {
                    if (clicked.name == 'Fighter') {
                        this.shootRange(clicked.location.row, clicked.location.col, clicked.range, true);
                    }
                    else {
                        this.shootRange(clicked.location.row, clicked.location.col, clicked.range, false);
                    }
                }
            }
        }
        else if (this.inMove) { // Player has selected Move
            if (this.moveable.indexOf(clicked) != -1) { // item is in the moveable list of spaces
                this.moveUnitLocal(clicked, this.unitToAct, player);
                this.clickGame(this.gameMap.map[row][col], player);
            }
        }
        else if (this.inShoot) { // Player has selected Shoot
            if (this.shootable.indexOf(clicked) != -1) { // item is in the shootable list of spaces
                this.shootUnitLocal(clicked, player);
                this.clickGame(this.gameMap.map[row][col], player);
            }
        }
        // logic for moving the highlight border
        this.selectClick(row, col, player);
        this._gameService.sendClick(row, col, player);
        return this;
    }
    selectClick(row, col, player) {
        let clicked = this.gameMap.map[row][col];
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
        return this;
    }
    shootRange(startRow, startCol, range, missile, currRow = startRow, currCol = startCol, dir = '') {
        if (!(currRow == startRow && currCol == startCol)) { // make sure we don't make the ship able to fire on itself
            let item = this.gameMap.map[currRow][currCol];
            if (this.shootInRange.indexOf(item) == -1) { // add item to in shooting range list if not already there
                if (item.team != this.currentPlayer || missile == true) { // only allow targeting of one's own ships if it's a missile
                    item.border = '1px solid yellow';
                    this.shootInRange.push(item);
                    if (item.hp > 0 || missile == true) { // it's a shootable unit or user is firing missiles which can target any location
                        if (item.imgTop && item.imgTop.img != 'assets/img/UI/numeralX.png') {
                            item.imgTopLast = item.imgTop; // this saves whatever the old imgTop was like a missile or powerup so it will be restored later when the X target is removed
                        }
                        item.imgTop = {
                            'img': 'assets/img/UI/numeralX.png',
                            'alpha': '0.8',
                            'transform': '',
                            'size': 17,
                        };
                        this.shootable.push(item);
                    }
                }
            }
            if (item.hp > 0) { // break out and stop moving forward if you hit an actual shootable object regardless of which team
                return this;
            }
        }
        if (range < 1) { // break case when range gets down to 0
            return this;
        }
        if (missile) { // missiles can go around rocks don't need line of sight
            if ((currRow - 1) >= 0) { // check up
                this.shootRange(startRow, startCol, range - 1, true, currRow - 1, currCol);
            }
            if ((currCol - 1) >= 0) { // check left
                this.shootRange(startRow, startCol, range - 1, true, currRow, currCol - 1);
            }
            if ((currRow + 1) < this.gameMap.map.length) { // check down
                this.shootRange(startRow, startCol, range - 1, true, currRow + 1, currCol);
            }
            if ((currCol + 1) < this.gameMap.map[0].length) { // check right
                this.shootRange(startRow, startCol, range - 1, true, currRow, currCol + 1);
            }
        }
        else { // regular guns
            if (dir == '' || dir == 'N') {
                if ((currRow - 1) >= 0) { // check N
                    this.shootRange(startRow, startCol, range - 1, false, currRow - 1, currCol, 'N');
                }
            }
            if (dir == '' || dir == 'NW') {
                if ((currRow - 1) >= 0 && (currCol - 1) >= 0) { // check NW
                    this.shootRange(startRow, startCol, range - 1, false, currRow - 1, currCol - 1, 'NW');
                }
            }
            if (dir == '' || dir == 'W') {
                if ((currCol - 1) >= 0) { // check W
                    this.shootRange(startRow, startCol, range - 1, false, currRow, currCol - 1, 'W');
                }
            }
            if (dir == '' || dir == 'SW') {
                if ((currCol - 1) >= 0 && (currRow + 1) < this.gameMap.map.length) { // check SW
                    this.shootRange(startRow, startCol, range - 1, false, currRow + 1, currCol - 1, 'SW');
                }
            }
            if (dir == '' || dir == 'S') {
                if ((currRow + 1) < this.gameMap.map.length) { // check S
                    this.shootRange(startRow, startCol, range - 1, false, currRow + 1, currCol, 'S');
                }
            }
            if (dir == '' || dir == 'SE') {
                if ((currRow + 1) < this.gameMap.map.length && (currCol + 1) < this.gameMap.map[0].length) { // check SE
                    this.shootRange(startRow, startCol, range - 1, false, currRow + 1, currCol + 1, 'SE');
                }
            }
            if (dir == '' || dir == 'E') {
                if ((currCol + 1) < this.gameMap.map[0].length) { // check E
                    this.shootRange(startRow, startCol, range - 1, false, currRow, currCol + 1, 'E');
                }
            }
            if (dir == '' || dir == 'NE') {
                if ((currCol + 1) < this.gameMap.map[0].length && (currRow - 1) >= 0) { // check NE
                    this.shootRange(startRow, startCol, range - 1, false, currRow - 1, currCol + 1, 'NE');
                }
            }
        }
        return this;
    }
    moveRange(startRow, startCol, range, currRow = startRow, currCol = startCol) {
        if (!(currRow == startRow && currCol == startCol)) { // make sure we aren't making the start location moveable to
            let item = this.gameMap.map[currRow][currCol];
            if (this.moveable.indexOf(item) == -1) { // add item to moveable list if not already in there
                item.bg = 'rgba(0,255,0,0.3)';
                this.moveable.push(item);
            }
        }
        if (range < 1) { // break case when range gets down to 0
            return this;
        }
        if ((currRow - 1) >= 0 && this.gameMap.map[currRow - 1][currCol].hp == 0) { // check up
            this.moveRange(startRow, startCol, range - 1, currRow - 1, currCol);
        }
        if ((currCol - 1) >= 0 && this.gameMap.map[currRow][currCol - 1].hp == 0) { // check left
            this.moveRange(startRow, startCol, range - 1, currRow, currCol - 1);
        }
        if ((currRow + 1) < this.gameMap.map.length && this.gameMap.map[currRow + 1][currCol].hp == 0) { // check down
            this.moveRange(startRow, startCol, range - 1, currRow + 1, currCol);
        }
        if ((currCol + 1) < this.gameMap.map[0].length && this.gameMap.map[currRow][currCol + 1].hp == 0) { // check right
            this.moveRange(startRow, startCol, range - 1, currRow, currCol + 1);
        }
        return this;
    }
    cancel(player) {
        if (player == this.gameMap.playerTurn) {
            this.inMove = false;
            this.inShoot = false;
            this.inSpecial = false;
            if (this.moveable) {
                for (let item of this.moveable) {
                    item.bg = '';
                }
            }
            if (this.shootInRange) {
                for (let item of this.shootInRange) {
                    item.border = '';
                }
            }
            if (this.shootable) {
                for (let item of this.shootable) {
                    if (item.imgTop.img == 'assets/img/UI/numeralX.png') {
                        if (item.imgTopLast) {
                            item.imgTop = item.imgTopLast;
                            item.imgTopLast = null;
                        }
                        else {
                            item.imgTop = null;
                        }
                    }
                }
            }
            this.moveable = [];
            this.shootInRange = [];
            this.shootable = [];
            this.unitToAct = null;
        }
        if (player == 'blue' && this.lastBlueClicked) {
            this.lastBlueClicked.border = "";
            this.lastBlueClicked = null;
        }
        else if (player == 'red' && this.lastRedClicked) {
            this.lastRedClicked.border = "";
            this.lastRedClicked = null;
        }
        this.actionText = "";
        return this;
    }
    endTurn(player) {
        this.cancel(player);
        if (player == this.gameMap.playerTurn) { // it's this player's turn and they have the right to end it
            this.gameMap.turn += 1;
            if (this.gameMap.playerTurn == 'red') {
                this.gameMap.playerTurn = 'blue';
            }
            else {
                this.gameMap.playerTurn = 'red';
            }
            for (let row of this.gameMap.map) {
                for (let col of row) {
                    if (col.team == this.gameMap.playerTurn) {
                        col.newTurn();
                    }
                }
            }
        }
        return this;
    }
    newTurn(player) {
    }
    unitInfo(unit) {
        if (unit.hp <= 0) {
            this.gameInfo['desc'] = 'Empty Space';
        }
        else {
            this.gameInfo['desc'] = ` Unit Type: ${unit.name} \n Player Owner: ${unit.team} \n Health: ${unit.hp}`;
            if (unit.name != 'Asteroid') {
                this.gameInfo['desc'] += `\n Speed: ${unit.speed} units/turn \n Attack Range: ${unit.range} units`;
            }
            if (unit.name == 'Fighter') {
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
            else if (unit.name == 'Scout') {
                this.gameInfo['desc'] += `\n EMP Available: `;
                if (unit.empAmmo == 1) {
                    this.gameInfo['desc'] += `Yes`;
                }
                else {
                    this.gameInfo['desc'] += `No`;
                }
            }
            else if (unit.name == 'Sniper') {
                this.gameInfo['desc'] += `\n Charged: `;
                if (unit.charged == true) {
                    this.gameInfo['desc'] += `Yes`;
                }
                else {
                    this.gameInfo['desc'] += `No`;
                }
            }
            else if (unit.name == 'Capitol') {
                this.gameInfo['desc'] += `\n Shield Health: ${unit.shieldHP}`;
            }
        }
        return this;
    }
};
GameComponent.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
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
        this.team = "neutral";
        this.moved = false;
        this.imgAlpha = "1";
        this.name = "Empty Space";
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
            if (this.shieldHP <= 0) {
                this.shieldHP = 0;
                this.imgTop = null;
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
        var self = this;
        var exploded = 0;
        var fade = setInterval(function () {
            if (exploded <= 40) { // explosion gif
                self.imgTop = {
                    'img': 'assets/img/Effects/explosion.gif',
                    'alpha': 1,
                    'transform': `rotate(${exploded * 2}deg)`,
                    'size': 50,
                };
                exploded++;
            }
            if (exploded >= 30) { // fade
                let alpha = parseFloat(self.imgAlpha);
                if (alpha <= 0) {
                    clearInterval(fade);
                    self.bg = '';
                    return this;
                }
                else {
                    alpha -= 0.03;
                    self.imgAlpha = alpha.toString();
                }
            }
            if (exploded > 40) {
                self.imgTop = null;
            }
        }, 10); // interval ms
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
        this.team = color;
        this.name = "Fighter";
    }
    fireMissile(targetRow, targetCol) {
        this.missile.firing = true;
        this.missile.target.row = targetRow;
        this.missile.target.col = targetCol;
        this.ammo = 0;
        this.imgTop = {
            'img': 'assets/img/Power-ups/pill_yellow.png',
            'alpha': 1,
            'transform': '',
            'size': 22,
        };
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
        super(row, col, rotate, 25, 5, 2);
        this.empAmmo = 1;
        this.img = `assets/img/playerShip2_${color}.png`;
        this.team = color;
        this.name = "Scout";
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
    shoot(targetObj) {
        try {
            targetObj.takeDmg(10);
            this.ammo = 0;
        }
        catch (error) {
            console.log('Error reducing health of target');
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
        super(row, col, rotate, 20, 2, 5);
        this.charged = false;
        this.img = `assets/img/playerShip3_${color}.png`;
        this.team = color;
        this.name = "Sniper";
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
    shoot(targetObj) {
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
        this.team = color;
        this.imgTop = {
            'img': 'assets/img/Effects/shield3.png',
            'alpha': '1',
            'transform': '',
            'size': 60,
        };
        this.name = "Capitol";
    }
    shoot(targetObj) {
        try {
            targetObj.takeDmg(15);
            this.ammo -= 1;
        }
        catch (error) {
            console.log('Error reducing health of target');
        }
    }
    newTurn() {
        this.ammo = 2;
        this.shieldHP += 10;
        if (this.shieldHP > 100) {
            this.shieldHP = 100;
        }
        this.imgTop = {
            'img': 'assets/img/Effects/shield3.png',
            'alpha': (this.shieldHP / 100),
            'transform': '',
            'size': 60,
        };
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
        this.name = "Asteroid";
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map