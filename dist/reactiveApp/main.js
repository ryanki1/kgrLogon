(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./start/start.module": [
		"./src/app/start/start.module.ts",
		"start-start-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _login_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/auth-guard.service */ "./src/app/login/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






var routes = [
    {
        path: 'start',
        component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
        canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: '',
                loadChildren: './start/start.module#StartModule'
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/start'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n<div id=\"timer\">\n  <span id=\"countdown\">Remaining: {{remainingSeconds}}s</span>\n  <button\n    id=\"resume\"\n    mat-button\n    mat-raised-button>\n    Resume\n  </button>\n  <button\n    id=\"pause\"\n    mat-button\n    mat-raised-button>\n    Pause\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _postal_state_postal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postal/state/postal.service */ "./src/app/postal/state/postal.service.ts");
/* harmony import */ var _postal_state_postal_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postal/state/postal.query */ "./src/app/postal/state/postal.query.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _postal_state_postal_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postal/state/postal.store */ "./src/app/postal/state/postal.store.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var AppComponent = /** @class */ (function () {
    function AppComponent(postalStore, postalQuery, postalService, ngZone, matIconRegistry, sanitizer) {
        this.postalStore = postalStore;
        this.postalQuery = postalQuery;
        this.postalService = postalService;
        this.ngZone = ngZone;
        this.matIconRegistry = matIconRegistry;
        this.sanitizer = sanitizer;
        this.countdown = 10;
        this.remainingSeconds = this.countdown;
        this.matIconRegistry.addSvgIcon('exit-to-app', this.sanitizer.bypassSecurityTrustResourceUrl('./reactiveApp/assets/baseline-exit_to_app-24px.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
        var pauseButton = document.getElementById('pause');
        var resumeButton = document.getElementById('resume');
        var pause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(pauseButton, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mapTo"])(rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]));
        var interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mapTo"])(-1));
        var resume$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(resumeButton, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mapTo"])(interval$));
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(pause$, resume$);
        var errSource = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject('You sunk my battleship..');
            }, 2000);
        });
        // source
        //     .pipe(
        //         startWith(true),
        //         switchMap( projectFn),
        //         scan(accumulatorFn, this.countdown),
        //         take(this.countdown)
        //     )
        //     .subscribe((remainingSeconds) => {
        //         this.remainingSeconds = remainingSeconds;
        //     });
        // source
        //         //     .pipe(
        //         //         startWith(-1),
        //         //         mapTo(-1),
        //         //         scan((acc: number, val: number, ind: number) => {
        //         //                 if (isNumber(val)) {
        //         //                     return (acc + val);
        //         //                 }
        //         //             },
        //         //             this.countdown
        //         //         ),
        //         //         take(this.countdown)
        //         //     )
        //         //     .subscribe((remainingSeconds) => {
        //         //         this.remainingSeconds = remainingSeconds;
        //         //     });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (x) {
            try {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(errSource);
            }
            catch (e) {
                throw new Error(e.message);
            }
        }))
            .subscribe(function (x) {
            console.log(x);
        }, function (errMessage) {
            console.log(errMessage);
        });
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_4__["akitaDevtools"])(this.ngZone);
        // this.postalStore.setHasCache(true); // todo: remove if not required
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(1, 2, 3, 4, 5)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(function (num) {
            console.log("Take(1) => " + num);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_postal_state_postal_store__WEBPACK_IMPORTED_MODULE_5__["PostalStore"],
            _postal_state_postal_query__WEBPACK_IMPORTED_MODULE_3__["PostalQuery"],
            _postal_state_postal_service__WEBPACK_IMPORTED_MODULE_2__["PostalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_validator_username_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/validator/username-validator */ "./src/app/login/validator/username-validator.ts");














// import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
// import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
// import { environment } from '../environments/environment';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _login_validator_username_validator__WEBPACK_IMPORTED_MODULE_13__["UsernameValidatorDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
                // environment.production ?
                //     [] :
                //     [ AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot() ]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li class=\"header\">\n    <span class=\"title\">Header</span>\n    <i class=\"material-icons logout\"\n       (click)=\"logout()\">\n      exit_to_app\n    </i>\n  </li>\n  <li class=\"body\">\n    <router-outlet></router-outlet>\n  </li>\n  <li class=\"footer\">\n    Footer\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  display: grid;\n  height: 100%;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  text-align: center;\n  grid-template-rows: 15% 70% 15%;\n  grid-template-columns: auto;\n  grid-template-areas: 'header' 'content' 'footer'; }\n  ul .header {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    grid-area: header;\n    background-color: lightcoral; }\n  ul .header .title {\n      font-weight: bold;\n      font-size: 18px; }\n  ul .header .logout {\n      cursor: pointer; }\n  ul .body {\n    overflow: auto;\n    grid-area: content; }\n  ul .footer {\n    grid-area: footer;\n    background-color: lightpink; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFua2kxMC9XZWJzdG9ybVByb2plY3RzL3JlYWN0aXZlQXBwL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLGdEQUFnRCxFQUFBO0VBUmxEO0lBVUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUE0QixFQUFBO0VBZGhDO01BZ0JNLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7RUFqQnJCO01Bb0JNLGVBQWUsRUFBQTtFQXBCckI7SUF3QkksY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBekJ0QjtJQTRCSSxpQkFBaUI7SUFDakIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgNzAlIDE1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyJyAnY29udGVudCcgJ2Zvb3Rlcic7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5sb2dvdXQge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuYm9keSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICB9XG4gIC5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_state_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/state/login.service */ "./src/app/login/state/login.service.ts");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(loginService) {
        this.loginService = loginService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_state_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/login/auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_login_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/login.query */ "./src/app/login/state/login.query.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(loginQuery, router) {
        var _this = this;
        this.loginQuery = loginQuery;
        this.router = router;
        this.authenticated = false;
        this.$isLoggedIn = this.loginQuery.$isLoggedIn();
        this.$isLoggedIn
            .subscribe(function (loginState) {
            _this.authenticated = !!loginState.token;
        });
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var unguarded;
        if (this.authenticated) {
            unguarded = true;
        }
        else {
            unguarded = false;
            this.router.navigateByUrl('/login');
        }
        return unguarded;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_login_query__WEBPACK_IMPORTED_MODULE_3__["LoginQuery"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formLogin\">\n  <mat-card>\n    <mat-card-header>\n      <h3>Login</h3>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field>\n        <input #username\n               type=\"text\"\n               formControlName=\"username\"\n               matInput\n               placeholder=\"Username\">\n        <mat-hint>*</mat-hint>\n        <mat-error *ngIf=\"formLogin.get('username').hasError('required')\">Username is required</mat-error>\n        <mat-error *ngIf=\"formLogin.get('username').hasError('username')\">Herreng as username is a no no I'm afraid!</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"password\"\n               formControlName=\"password\"\n               matInput\n               placeholder=\"Password\">\n        <mat-hint>*</mat-hint>\n        <mat-error *ngIf=\"formLogin.get('password').hasError('required')\">Password is required</mat-error>\n      </mat-form-field>\n      <button\n        mat-button\n        mat-raised-button\n        (click)=\"onSubmit($event, formLogin)\"\n        color=\"warn\"\n        [disabled]=\"!formLogin.valid\">\n        Logon\n      </button>\n    </mat-card-content>\n  </mat-card>\n  <mat-spinner *ngIf=\"formLogin.pending\"></mat-spinner>\n</form>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/login.service */ "./src/app/login/state/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_login_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/login.query */ "./src/app/login/state/login.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _validator_username_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validator/username-validator */ "./src/app/login/validator/username-validator.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, loginQuery, router) {
        var _this = this;
        this.fb = fb;
        this.loginService = loginService;
        this.loginQuery = loginQuery;
        this.router = router;
        this.formLogin = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validator_username_validator__WEBPACK_IMPORTED_MODULE_7__["UsernameValidatorDirective"].validate.bind(this)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.$loginState = this.loginQuery.$isLoggedIn();
        this.formLogin.valueChanges
            .subscribe(function (loginFormData) {
            _this.credentials = loginFormData;
        });
        this.formLogin.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (credentials) { return credentials.username; }))
            .subscribe(function (username) {
            if (username === 'Herreng') {
                setTimeout(function () {
                    alert('Herreng Bingo!');
                }, 0);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$loginState
            .subscribe(function (loginState) {
            if (!!loginState.token) {
                _this.router.navigateByUrl('/start');
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        });
    };
    LoginComponent.prototype.onSubmit = function (e, formLogin) {
        e.stopPropagation();
        e.preventDefault();
        this.loginService.login(this.credentials);
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.formLogin.get('username');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _state_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _state_login_query__WEBPACK_IMPORTED_MODULE_5__["LoginQuery"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/state/login.model.ts":
/*!********************************************!*\
  !*** ./src/app/login/state/login.model.ts ***!
  \********************************************/
/*! exports provided: createLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogin", function() { return createLogin; });
/**
 * A factory function that creates Login
 */
function createLogin() {
    return {
        name: null,
        token: null
    };
}


/***/ }),

/***/ "./src/app/login/state/login.query.ts":
/*!********************************************!*\
  !*** ./src/app/login/state/login.query.ts ***!
  \********************************************/
/*! exports provided: LoginQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginQuery", function() { return LoginQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _login_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.store */ "./src/app/login/state/login.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LoginQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginQuery, _super);
    function LoginQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.$login = _this.select()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.getValue(); }));
        return _this;
    }
    LoginQuery.prototype.$isLoggedIn = function () {
        return this.$login;
    };
    LoginQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"]])
    ], LoginQuery);
    return LoginQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]));



/***/ }),

/***/ "./src/app/login/state/login.service.ts":
/*!**********************************************!*\
  !*** ./src/app/login/state/login.service.ts ***!
  \**********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.store */ "./src/app/login/state/login.store.ts");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.model */ "./src/app/login/state/login.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginService = /** @class */ (function () {
    function LoginService(loginStore, http, router) {
        this.loginStore = loginStore;
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.login = function (credentials) {
        var _this = this;
        this.http.post('http://localhost:4200/api/auth', credentials).subscribe(function (authLogin) {
            if (authLogin && !!authLogin.token) {
                _this.loginStore.update(authLogin);
            }
        });
    };
    LoginService.prototype.logout = function () {
        this.loginStore.update(Object(_login_model__WEBPACK_IMPORTED_MODULE_4__["createLogin"])());
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_store__WEBPACK_IMPORTED_MODULE_3__["LoginStore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/state/login.store.ts":
/*!********************************************!*\
  !*** ./src/app/login/state/login.store.ts ***!
  \********************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.model */ "./src/app/login/state/login.model.ts");




var LoginStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginStore, _super);
    function LoginStore() {
        return _super.call(this, Object(_login_model__WEBPACK_IMPORTED_MODULE_3__["createLogin"])()) || this;
    }
    LoginStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'login' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginStore);
    return LoginStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]));



/***/ }),

/***/ "./src/app/login/validator/username-validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/validator/username-validator.ts ***!
  \*******************************************************/
/*! exports provided: UsernameValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidatorDirective", function() { return UsernameValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UsernameValidatorDirective = /** @class */ (function () {
    function UsernameValidatorDirective() {
    }
    UsernameValidatorDirective_1 = UsernameValidatorDirective;
    UsernameValidatorDirective.validate = function (control) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var ret;
                if (control.value && (control.value.toString().toLowerCase() === 'herreng')) {
                    ret = { username: true };
                }
                resolve(ret);
            }, 3000);
        });
    };
    var UsernameValidatorDirective_1;
    UsernameValidatorDirective = UsernameValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appValidateUsername]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
                    useExisting: UsernameValidatorDirective_1,
                    multi: true
                }]
        })
    ], UsernameValidatorDirective);
    return UsernameValidatorDirective;
}());



/***/ }),

/***/ "./src/app/postal/state/postal.query.ts":
/*!**********************************************!*\
  !*** ./src/app/postal/state/postal.query.ts ***!
  \**********************************************/
/*! exports provided: PostalQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalQuery", function() { return PostalQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _postal_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postal.store */ "./src/app/postal/state/postal.store.ts");




var PostalQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostalQuery, _super);
    function PostalQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    PostalQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_postal_store__WEBPACK_IMPORTED_MODULE_3__["PostalStore"]])
    ], PostalQuery);
    return PostalQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/postal/state/postal.service.ts":
/*!************************************************!*\
  !*** ./src/app/postal/state/postal.service.ts ***!
  \************************************************/
/*! exports provided: PostalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalService", function() { return PostalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _postal_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postal.store */ "./src/app/postal/state/postal.store.ts");




var PostalService = /** @class */ (function () {
    function PostalService(postalStore, http) {
        this.postalStore = postalStore;
        this.http = http;
    }
    PostalService.prototype.get = function () {
        var _this = this;
        this.http.get('./assets/postal.json').subscribe(function (entities) {
            return _this.postalStore.set(entities);
        });
    };
    PostalService.prototype.upsert = function (id, postal) {
        this.postalStore.upsert(id, postal);
    };
    PostalService.prototype.remove = function (id) {
        this.postalStore.remove(id);
    };
    PostalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_postal_store__WEBPACK_IMPORTED_MODULE_3__["PostalStore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostalService);
    return PostalService;
}());



/***/ }),

/***/ "./src/app/postal/state/postal.store.ts":
/*!**********************************************!*\
  !*** ./src/app/postal/state/postal.store.ts ***!
  \**********************************************/
/*! exports provided: PostalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalStore", function() { return PostalStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var PostalStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostalStore, _super);
    function PostalStore() {
        return _super.call(this) || this;
    }
    PostalStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'postal' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostalStore);
    return PostalStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));



/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"heroForm\">\n  <div style=\"text-align:center\">\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </div>\n  <h2>Here are some links to help you start: </h2>\n  <ul>\n    <li>\n      <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n    </li>\n    <li>\n      <h2><a [routerLink]=\"['postal']\">Enter a postal Address</a></h2>\n    </li>\n    <li>\n      <h2><a routerLink=\"address\">Enter in to the sample Material AddressForm</a></h2>\n    </li>\n    <li>\n      <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/start/start.component.scss":
/*!********************************************!*\
  !*** ./src/app/start/start.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
        this.title = 'reactiveApp';
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["enableAkitaProdMode"])();
}
Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["persistState"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanki10/WebstormProjects/reactiveApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map