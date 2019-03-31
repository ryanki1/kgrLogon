(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXBwaW5nLWNhcmQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addressForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Shipping Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Company\" formControlName=\"company\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n              Address is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!hasUnitNumber\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"hasUnitNumber = !hasUnitNumber\">\n            + Add C/O, Apt, Suite, Unit\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"hasUnitNumber\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"City\" formControlName=\"city\">\n            <mat-error *ngIf=\"addressForm.controls['city'].hasError('required')\">\n              City is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"State\" formControlName=\"state\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                {{ state.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"addressForm.controls['state'].hasError('required')\">\n              State is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-radio-group formControlName=\"shipping\">\n            <mat-radio-button value=\"free\">Free Shipping</mat-radio-button>\n            <mat-radio-button value=\"priority\">Priority Shipping</mat-radio-button>\n            <mat-radio-button value=\"nextday\">Next Day Shipping</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AddressComponent = /** @class */ (function () {
    function AddressComponent(fb) {
        this.fb = fb;
        this.addressForm = this.fb.group({
            company: null,
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: null,
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)
                ])
            ],
            shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [
            { name: 'Alabama', abbreviation: 'AL' },
            { name: 'Alaska', abbreviation: 'AK' },
            { name: 'American Samoa', abbreviation: 'AS' },
            { name: 'Arizona', abbreviation: 'AZ' },
            { name: 'Arkansas', abbreviation: 'AR' },
            { name: 'California', abbreviation: 'CA' },
            { name: 'Colorado', abbreviation: 'CO' },
            { name: 'Connecticut', abbreviation: 'CT' },
            { name: 'Delaware', abbreviation: 'DE' },
            { name: 'District Of Columbia', abbreviation: 'DC' },
            { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
            { name: 'Florida', abbreviation: 'FL' },
            { name: 'Georgia', abbreviation: 'GA' },
            { name: 'Guam', abbreviation: 'GU' },
            { name: 'Hawaii', abbreviation: 'HI' },
            { name: 'Idaho', abbreviation: 'ID' },
            { name: 'Illinois', abbreviation: 'IL' },
            { name: 'Indiana', abbreviation: 'IN' },
            { name: 'Iowa', abbreviation: 'IA' },
            { name: 'Kansas', abbreviation: 'KS' },
            { name: 'Kentucky', abbreviation: 'KY' },
            { name: 'Louisiana', abbreviation: 'LA' },
            { name: 'Maine', abbreviation: 'ME' },
            { name: 'Marshall Islands', abbreviation: 'MH' },
            { name: 'Maryland', abbreviation: 'MD' },
            { name: 'Massachusetts', abbreviation: 'MA' },
            { name: 'Michigan', abbreviation: 'MI' },
            { name: 'Minnesota', abbreviation: 'MN' },
            { name: 'Mississippi', abbreviation: 'MS' },
            { name: 'Missouri', abbreviation: 'MO' },
            { name: 'Montana', abbreviation: 'MT' },
            { name: 'Nebraska', abbreviation: 'NE' },
            { name: 'Nevada', abbreviation: 'NV' },
            { name: 'New Hampshire', abbreviation: 'NH' },
            { name: 'New Jersey', abbreviation: 'NJ' },
            { name: 'New Mexico', abbreviation: 'NM' },
            { name: 'New York', abbreviation: 'NY' },
            { name: 'North Carolina', abbreviation: 'NC' },
            { name: 'North Dakota', abbreviation: 'ND' },
            { name: 'Northern Mariana Islands', abbreviation: 'MP' },
            { name: 'Ohio', abbreviation: 'OH' },
            { name: 'Oklahoma', abbreviation: 'OK' },
            { name: 'Oregon', abbreviation: 'OR' },
            { name: 'Palau', abbreviation: 'PW' },
            { name: 'Pennsylvania', abbreviation: 'PA' },
            { name: 'Puerto Rico', abbreviation: 'PR' },
            { name: 'Rhode Island', abbreviation: 'RI' },
            { name: 'South Carolina', abbreviation: 'SC' },
            { name: 'South Dakota', abbreviation: 'SD' },
            { name: 'Tennessee', abbreviation: 'TN' },
            { name: 'Texas', abbreviation: 'TX' },
            { name: 'Utah', abbreviation: 'UT' },
            { name: 'Vermont', abbreviation: 'VT' },
            { name: 'Virgin Islands', abbreviation: 'VI' },
            { name: 'Virginia', abbreviation: 'VA' },
            { name: 'Washington', abbreviation: 'WA' },
            { name: 'West Virginia', abbreviation: 'WV' },
            { name: 'Wisconsin', abbreviation: 'WI' },
            { name: 'Wyoming', abbreviation: 'WY' }
        ];
    }
    AddressComponent.prototype.onSubmit = function () {
        alert('Thanks!');
    };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/postal/postal.component.html":
/*!**********************************************!*\
  !*** ./src/app/postal/postal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate\n      [formGroup]=\"postalForm\"\n      ngClass.xs=\"smartphone-portrait\"\n      (ngSubmit)=\"submitPostal($event)\">\n  <fieldset>\n    <mat-form-field appearance=\"legacy\">\n      <input\n        class=\"line1\"\n        matInput\n        type=\"text\"\n        formControlName=\"line1\"\n        placeholder=\"Line 1\">\n      <mat-hint>* This is the first line of your address</mat-hint>\n      <mat-error *ngIf=\"postalForm.get('line1').hasError('required')\">Line 1 is required</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"legacy\">\n      <input\n        class=\"line2\"\n        matInput\n        type=\"text\"\n        formControlName=\"line2\"\n        placeholder=\"Line 2\">\n        <mat-hint>* This is the second line of your address</mat-hint>\n        <mat-error *ngIf=\"postalForm.get('line2').hasError('required')\">Line 2 is required</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"legacy\">\n      <input\n        class=\"line3\"\n        matInput\n        type=\"text\"\n        formControlName=\"line3\"\n        placeholder=\"Line 3\">\n    </mat-form-field>\n    <mat-form-field appearance=\"legacy\">\n      <input\n        class=\"city\"\n        matInput\n        type=\"text\"\n        formControlName=\"city\"\n        placeholder=\"City\">\n      <mat-hint>*</mat-hint>\n      <mat-error *ngIf=\"postalForm.get('city').hasError('required')\">City is required</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"legacy\">\n      <input\n        class=\"postcode\"\n        matInput\n        type=\"text\"\n        formControlName=\"postcode\"\n        placeholder=\"Postcode\">\n      <mat-hint>*</mat-hint>\n      <mat-error *ngIf=\"postalForm.get('postcode').hasError('required')\">Postcode is required</mat-error>\n      <mat-error *ngIf=\"this.postalForm.get('postcode').hasError('pattern')\">Postcode has format 12345</mat-error>\n    </mat-form-field>\n  </fieldset>\n  <button\n    class=\"submit\"\n    mat-button\n    mat-raised-button\n    color=\"warn\"\n    [disabled]=\"postalForm.invalid\">\n    Submit\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/postal/postal.component.scss":
/*!**********************************************!*\
  !*** ./src/app/postal/postal.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  overflow: auto;\n  background-size: cover;\n  background-color: tan; }\n  form.smartphone-portrait {\n    display: flex; }\n  form fieldset {\n    display: flex; }\n  form .submit::ng-deep {\n    display: flex;\n    width: 100%; }\n  form .submit::ng-deep span {\n      width: 100%;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFua2kxMC9XZWJzdG9ybVByb2plY3RzL3JlYWN0aXZlQXBwL3NyYy9hcHAvcG9zdGFsL3Bvc3RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7RUFWdkI7SUFHSSxhQUFhLEVBQUE7RUFIakI7SUFhSSxhQUFhLEVBQUE7RUFiakI7SUFpQkksYUFBYTtJQUNiLFdBQVcsRUFBQTtFQWxCZjtNQXFCTSxXQUFXO01BQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0YWwvcG9zdGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG5cbiAgJi5zbWFydHBob25lLXBvcnRyYWl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGFuO1xuXG4gIGZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnN1Ym1pdDo6bmctZGVlcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHNwYW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/postal/postal.component.ts":
/*!********************************************!*\
  !*** ./src/app/postal/postal.component.ts ***!
  \********************************************/
/*! exports provided: PostalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalComponent", function() { return PostalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_postal_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/postal.query */ "./src/app/postal/state/postal.query.ts");
/* harmony import */ var _state_postal_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/postal.model */ "./src/app/postal/state/postal.model.ts");
/* harmony import */ var _state_postal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/postal.service */ "./src/app/postal/state/postal.service.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _state_postal_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/postal.store */ "./src/app/postal/state/postal.store.ts");








var PostalComponent = /** @class */ (function () {
    function PostalComponent(fb, postalQuery, postalStore, postalService) {
        this.fb = fb;
        this.postalQuery = postalQuery;
        this.postalStore = postalStore;
        this.postalService = postalService;
        this.postalForm = this.fb.group({
            id: [0],
            line1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            line2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            line3: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{5}')]],
        });
    }
    PostalComponent.prototype.ngOnInit = function () {
        this.persistForm = new _datorama_akita__WEBPACK_IMPORTED_MODULE_6__["PersistNgFormPlugin"](this.postalQuery, _state_postal_model__WEBPACK_IMPORTED_MODULE_4__["createPostal"]).setForm(this.postalForm);
        this.checkFormControlsForErrors();
    };
    PostalComponent.prototype.checkFormControlsForErrors = function () {
        var _this = this;
        Object.keys(this.postalForm.controls).forEach(function (key) {
            if (key === 'id') {
                return;
            }
            _this.postalForm.controls[key].markAsTouched();
        });
    };
    PostalComponent.prototype.submitPostal = function (e) {
        var postal = this.postalForm.value;
        this.postalService.upsert(this.postalForm.get('id').value, postal);
    };
    PostalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postal',
            template: __webpack_require__(/*! ./postal.component.html */ "./src/app/postal/postal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./postal.component.scss */ "./src/app/postal/postal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _state_postal_query__WEBPACK_IMPORTED_MODULE_3__["PostalQuery"],
            _state_postal_store__WEBPACK_IMPORTED_MODULE_7__["PostalStore"],
            _state_postal_service__WEBPACK_IMPORTED_MODULE_5__["PostalService"]])
    ], PostalComponent);
    return PostalComponent;
}());



/***/ }),

/***/ "./src/app/postal/state/postal.model.ts":
/*!**********************************************!*\
  !*** ./src/app/postal/state/postal.model.ts ***!
  \**********************************************/
/*! exports provided: createPostal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostal", function() { return createPostal; });
/**
 * A factory function that creates Postal
 */
function createPostal() {
    return {
        line1: '',
        line2: '',
        line3: '',
        city: '',
        postcode: ''
    };
}


/***/ }),

/***/ "./src/app/start/start-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartRoutingModule", function() { return StartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _postal_postal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postal/postal.component */ "./src/app/postal/postal.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address/address.component */ "./src/app/address/address.component.ts");





var routes = [
    {
        path: 'postal',
        component: _postal_postal_component__WEBPACK_IMPORTED_MODULE_3__["PostalComponent"],
    },
    {
        path: 'address',
        component: _address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"],
        pathMatch: 'full'
    },
];
var StartRoutingModule = /** @class */ (function () {
    function StartRoutingModule() {
    }
    StartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StartRoutingModule);
    return StartRoutingModule;
}());



/***/ }),

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/start/start-routing.module.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _postal_postal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../postal/postal.component */ "./src/app/postal/postal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"],
                _postal_postal_component__WEBPACK_IMPORTED_MODULE_5__["PostalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _start_routing_module__WEBPACK_IMPORTED_MODULE_3__["StartRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            ],
        })
    ], StartModule);
    return StartModule;
}());



/***/ })

}]);
//# sourceMappingURL=start-start-module.js.map