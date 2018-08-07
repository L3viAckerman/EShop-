webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth.Guard.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EmployeeInfo_Service_1 = __webpack_require__("./src/app/Shared/EmployeeInfo.Service.ts");
// import {AuthService} from './Modules/Auth/Auth.Service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(EmployeeInfoService, router) {
        this.EmployeeInfoService = EmployeeInfoService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        //if (this.EmployeeInfoService.GetCurrent() == null) {
        //  this.router.navigate(['/Login']);
        //}
        return true;
        //        return this.authService.GetTypeOfLayout('',url).Ty == 'Show';
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [EmployeeInfo_Service_1.EmployeeInfoService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/Component/Category/Category.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/Category/Category.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Category Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n    <div style=\"padding-right: 15px;\">\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit:true, Names:{}})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Parent</th>\r\n            <th>Code</th>\r\n            <ng-container *ngIf=\"LanguageEntities.length > 0\">\r\n              <th *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n                {{LanguageEntity.Code + '_Name'}}\r\n              </th>\r\n            </ng-container>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <ng-select [items]=\"Entities\"\r\n                         bindLabel=\"Code\"\r\n                         bindValue=\"Id\"\r\n                         placeholder=\"Search ParentId\"\r\n                         [(ngModel)]=\"CategorySearchEntity.ParentId\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control full-width\" placeholder=\"SearchCode...\" [(ngModel)]=\"CategorySearchEntity.Code\" />\r\n            </td>\r\n            <ng-container *ngIf=\"LanguageEntities.length > 0\">\r\n              <td *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n              </td>\r\n            </ng-container>\r\n            <td class=\"text-center\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(CategorySearchEntity, false)\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(CategorySearchEntity, true)\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let CategoryEntity of Entities; index as i\">\r\n            <td class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!CategoryEntity.IsEdit\">{{CategoryEntity.ParentEntity?.Code}}</span>\r\n              <ng-select *ngIf=\"CategoryEntity.IsEdit\" [items]=\"Entities\"\r\n                         bindLabel=\"Code\"\r\n                         bindValue=\"Id\"\r\n                         placeholder=\"Parent...\"\r\n                         [(ngModel)]=\"CategoryEntity.ParentId\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!CategoryEntity.IsEdit\">{{CategoryEntity.Code}}</span>\r\n              <input *ngIf=\"CategoryEntity.IsEdit\" type=\"text\" class=\"form-control full-width\" placeholder=\"Code...\" [(ngModel)]=\"CategoryEntity.Code\" />\r\n            </td>\r\n            <td *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n              <span *ngIf=\"!CategoryEntity.IsEdit\">{{CategoryEntity.Names[LanguageEntity.Id]}}</span>\r\n              <input *ngIf=\"CategoryEntity.IsEdit\" type=\"text\" class=\"form-control full-width\" placeholder=\"Name...\" [(ngModel)]=\"CategoryEntity.Names[LanguageEntity.Id]\" />\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <div *ngIf=\"!CategoryEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"AddProductAttribute(CategoryEntity)\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CategoryEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CategoryEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"CategoryEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CategoryEntity)\"\r\n                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\">\r\n                  <i class=\"fa fa-floppy-o\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CategoryEntity)\"\r\n                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search(CategorySearchEntity)\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Category/Category.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Category_SearchEntity_1 = __webpack_require__("./src/app/Module/MCategory/Category.SearchEntity.ts");
var Category_Service_1 = __webpack_require__("./src/app/Module/MCategory/Category.Service.ts");
var Language_Service_1 = __webpack_require__("./src/app/Module/MLanguage/Language.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var CategoryComponent = /** @class */ (function (_super) {
    __extends(CategoryComponent, _super);
    function CategoryComponent(CategoryService, LanguageService, Router, cd, toastr, vcr) {
        var _this = _super.call(this, CategoryService, cd, toastr, vcr) || this;
        _this.CategoryService = CategoryService;
        _this.LanguageService = LanguageService;
        _this.Router = Router;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.CategorySearchEntity = new Category_SearchEntity_1.CategorySearchEntity();
        _this.LanguageEntities = [];
        _this.IsSearch = false;
        _this.CategorySearchEntity = new Category_SearchEntity_1.CategorySearchEntity();
        _this.Search(_this.CategorySearchEntity);
        _this.LanguageService.Gets().subscribe(function (res) {
            if (res) {
                _this.LanguageEntities = res;
            }
        });
        return _this;
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.AddProductAttribute = function (CategoryEntity) {
        if (CategoryEntity.Id !== null) {
            this.Router.navigate(['/Category/' + CategoryEntity.Id + '/ProductAttribute']);
        }
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-category',
            template: __webpack_require__("./src/app/Component/Category/Category.component.html"),
            styles: [__webpack_require__("./src/app/Component/Category/Category.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Category_Service_1.CategoryService,
            Language_Service_1.LanguageService,
            router_1.Router,
            core_1.ChangeDetectorRef,
            CustomToaster_1.BottomToastsManager,
            core_1.ViewContainerRef])
    ], CategoryComponent);
    return CategoryComponent;
}(app_component_1.CommonComponent));
exports.CategoryComponent = CategoryComponent;


/***/ }),

/***/ "./src/app/Component/City/City.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/City/City.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                City Management\r\n            </h3>\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>Country</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody> \r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\" [(ngModel)]=\"SearchEntity.Code\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" [(ngModel)]=\"SearchEntity.Name\" />\r\n                    </td>\r\n                    <td>\r\n                      <ng-select-custom [Service]=\"CountryService\" [(NgModel)]=\"SearchEntity.CountryId\"\r\n                                        [SearchProperty]=\"'Name'\"\r\n                                        (keyup.enter)=\"Search(SearchEntity)\"\r\n                                        [IsSearch]=\"true\" [Placeholder]=\"'Search...'\">\r\n                      </ng-select-custom>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(SearchEntity, false)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(SearchEntity, true)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let CityEntity of Entities; index as i\">\r\n                    <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                    <td>\r\n                      <div *ngIf=\"!CityEntity.IsEdit\">{{CityEntity.Code}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CityEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"CityEntity.Code\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CityEntity.IsEdit\">{{CityEntity.Name}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CityEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"CityEntity.Name\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CityEntity.IsEdit\">{{CityEntity.CountryEntity.Name}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CityEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"CityEntity.Code\" />\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div *ngIf=\"!CityEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CityEntity)\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CityEntity)\" (cancel)=\"cancelClicked = true\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"CityEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CityEntity)\">\r\n                          <i class=\"fa fa-save\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CityEntity)\">\r\n                          <i class=\"fa fa-remove\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/City/City.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var City_SearchEntity_1 = __webpack_require__("./src/app/Module/MCity/City.SearchEntity.ts");
var City_Service_1 = __webpack_require__("./src/app/Module/MCity/City.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Country_Service_1 = __webpack_require__("./src/app/Module/MCountry/Country.Service.ts");
var CityComponent = /** @class */ (function (_super) {
    __extends(CityComponent, _super);
    function CityComponent(CityService, cd, toastr, vcr, CountryService) {
        var _this = _super.call(this, CityService, cd, toastr, vcr) || this;
        _this.CityService = CityService;
        _this.toastr = toastr;
        _this.CountryService = CountryService;
        _this.SearchEntity = new City_SearchEntity_1.CitySearchEntity();
        _this.SearchEntity = new City_SearchEntity_1.CitySearchEntity();
        _this.Search(_this.SearchEntity);
        return _this;
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = __decorate([
        core_1.Component({
            selector: 'app-city',
            template: __webpack_require__("./src/app/Component/City/City.component.html"),
            styles: [__webpack_require__("./src/app/Component/City/City.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [City_Service_1.CityService, core_1.ChangeDetectorRef,
            CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef, Country_Service_1.CountryService])
    ], CityComponent);
    return CityComponent;
}(app_component_1.CommonComponent));
exports.CityComponent = CityComponent;


/***/ }),

/***/ "./src/app/Component/Country/Country.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/Country/Country.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Country Management\r\n            </h3>\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>Note</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody> \r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\" [(ngModel)]=\"SearchEntity.Code\"/>\r\n                    </td>\r\n                    <td>\r\n                      <datetime [placeholder]=\"'Start Date...'\" [(ngModel)]=\"SearchEntity.Name\"></datetime>\r\n                    </td>\r\n                    <td>\r\n                      <datetime [placeholder]=\"'End Date...'\" [(ngModel)]=\"SearchEntity.Note\"></datetime>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(SearchEntity, false)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(SearchEntity, true)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let CountryEntity of Entities; index as i\">\r\n                    <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                    <td>\r\n                      <div *ngIf=\"!CountryEntity.IsEdit\">{{CountryEntity.Code}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CountryEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"CountryEntity.Code\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CountryEntity.IsEdit\">{{CountryEntity.Name}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CountryEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"CountryEntity.Name\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CountryEntity.IsEdit\">{{CountryEntity.Note}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CountryEntity.IsEdit\" placeholder=\"Enter Note...\" [(ngModel)]=\"CountryEntity.Note\" />\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div *ngIf=\"!CountryEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CountryEntity)\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CountryEntity)\" (cancel)=\"cancelClicked = true\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"CountryEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CountryEntity)\">\r\n                          <i class=\"fa fa-save\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CountryEntity)\">\r\n                          <i class=\"fa fa-remove\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Country/Country.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Country_SearchEntity_1 = __webpack_require__("./src/app/Module/MCountry/Country.SearchEntity.ts");
var Country_Service_1 = __webpack_require__("./src/app/Module/MCountry/Country.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var CountryComponent = /** @class */ (function (_super) {
    __extends(CountryComponent, _super);
    function CountryComponent(CountryService, cd, toastr, vcr) {
        var _this = _super.call(this, CountryService, cd, toastr, vcr) || this;
        _this.CountryService = CountryService;
        _this.toastr = toastr;
        _this.SearchEntity = new Country_SearchEntity_1.CountrySearchEntity();
        _this.SearchEntity = new Country_SearchEntity_1.CountrySearchEntity();
        _this.Search(_this.SearchEntity);
        return _this;
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent = __decorate([
        core_1.Component({
            selector: 'app-country',
            template: __webpack_require__("./src/app/Component/Country/Country.component.html"),
            styles: [__webpack_require__("./src/app/Component/Country/Country.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Country_Service_1.CountryService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], CountryComponent);
    return CountryComponent;
}(app_component_1.CommonComponent));
exports.CountryComponent = CountryComponent;


/***/ }),

/***/ "./src/app/Component/Coupon/Coupon.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/Coupon/Coupon.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Coupon Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Code</th>\r\n                        <th>StartDate</th>\r\n                        <th>EndDate</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody> \r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\" [(ngModel)]=\"CouponSearchEntity.Code\"/>\r\n                    </td>\r\n                    <td>\r\n                      <datetime [placeholder]=\"'Start Date...'\" [(ngModel)]=\"CouponSearchEntity.StartDate\"></datetime>\r\n                    </td>\r\n                    <td>\r\n                      <datetime [placeholder]=\"'End Date...'\" [(ngModel)]=\"CouponSearchEntity.EndDate\"></datetime>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(CouponSearchEntity, false)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(CouponSearchEntity, true)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let CouponEntity of Entities; index as i\">\r\n                        <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                            <div *ngIf=\"!CouponEntity.IsEdit\">{{CouponEntity.Code}}</div>\r\n                            <input class=\"form-control\" *ngIf=\"CouponEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"CouponEntity.Code\"/>\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!CouponEntity.IsEdit\">{{CouponEntity.StartDate | date: 'dd/MM/yyyy'}}</div>\r\n                            <datetime *ngIf=\"CouponEntity.IsEdit\" [placeholder]=\"'Start Date...'\" [(ngModel)]=\"CouponEntity.StartDate\"></datetime>\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!CouponEntity.IsEdit\">{{CouponEntity.EndDate | date: 'dd/MM/yyyy'}}</div>\r\n                            <datetime *ngIf=\"CouponEntity.IsEdit\" [placeholder]=\"'End Date...'\" [(ngModel)]=\"CouponEntity.EndDate\"></datetime>\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!CouponEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CouponEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CouponEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"CouponEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CouponEntity)\">\r\n                                  <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button  class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CouponEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Coupon/Coupon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Coupon_SearchEntity_1 = __webpack_require__("./src/app/Module/MCoupon/Coupon.SearchEntity.ts");
var Coupon_Service_1 = __webpack_require__("./src/app/Module/MCoupon/Coupon.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var CouponComponent = /** @class */ (function (_super) {
    __extends(CouponComponent, _super);
    function CouponComponent(CouponService, cd, toastr, vcr) {
        var _this = _super.call(this, CouponService, cd, toastr, vcr) || this;
        _this.CouponService = CouponService;
        _this.toastr = toastr;
        _this.CouponSearchEntity = new Coupon_SearchEntity_1.CouponSearchEntity();
        _this.CouponSearchEntity = new Coupon_SearchEntity_1.CouponSearchEntity();
        _this.Search(_this.CouponSearchEntity);
        return _this;
    }
    CouponComponent.prototype.ngOnInit = function () {
    };
    CouponComponent = __decorate([
        core_1.Component({
            selector: 'app-coupon',
            template: __webpack_require__("./src/app/Component/Coupon/Coupon.component.html"),
            styles: [__webpack_require__("./src/app/Component/Coupon/Coupon.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Coupon_Service_1.CouponService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], CouponComponent);
    return CouponComponent;
}(app_component_1.CommonComponent));
exports.CouponComponent = CouponComponent;


/***/ }),

/***/ "./src/app/Component/Customer/Customer.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/Customer/Customer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Customer Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Username</th>\r\n                    <th>Display</th>\r\n                    <th>Picture</th>\r\n                    <th>FacebookId</th>\r\n                    <th>FacebookEmail</th>\r\n                    <th>GoogleId</th>\r\n                    <th>GoogleEmail</th>\r\n                    <th>Customer Group</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody> \r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Username...\" [(ngModel)]=\"CustomerSearchEntity.Username\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Display...\" [(ngModel)]=\"CustomerSearchEntity.Display\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Picture...\" [(ngModel)]=\"CustomerSearchEntity.Picture\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search FacebookId...\" [(ngModel)]=\"CustomerSearchEntity.FacebookId\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search FacebookEmail...\" [(ngModel)]=\"CustomerSearchEntity.FacebookEmail\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search GoogleId...\" [(ngModel)]=\"CustomerSearchEntity.GoogleId\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search GoogleEmail...\" [(ngModel)]=\"CustomerSearchEntity.GoogleEmail\" />\r\n                    </td>\r\n                    <td>\r\n                      <ng-select-custom [Service]=\"CustomerGroupService\" [Entity]=\"CustomerSearchEntity.CustomerGroupId\"\r\n                                        [BindProperty]=\"'Id'\"\r\n                                        (Change)=\"CustomerSearchEntity.CustomerGroupId = $event?.Id; Search(CustomerSearchEntity)\"\r\n                                        (keyup.enter)=\"Search(CustomerSearchEntity)\"\r\n                                        [IsSearch]=\"true\" [Placeholder]=\"'Search...'\"></ng-select-custom>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(CustomerSearchEntity, false)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(CustomerSearchEntity, true)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let CustomerEntity of Entities; index as i\">\r\n                    <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.Username}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter Username...\" [(ngModel)]=\"CustomerEntity.Username\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.Display}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter Display...\" [(ngModel)]=\"CustomerEntity.Display\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.Picture}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter Picture...\" [(ngModel)]=\"CustomerEntity.Picture\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.FacebookId}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter FacebookId...\" [(ngModel)]=\"CustomerEntity.FacebookId\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.FacebookEmail}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter FacebookEmail...\" [(ngModel)]=\"CustomerEntity.FacebookEmail\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.GoogleId}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter GoogleId...\" [(ngModel)]=\"CustomerEntity.GoogleId\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.GoogleEmail}}</div>\r\n                      <input class=\"form-control\" *ngIf=\"CustomerEntity.IsEdit\" placeholder=\"Enter GoogleEmail...\" [(ngModel)]=\"CustomerEntity.GoogleEmail\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">{{CustomerEntity.CustomerGroupEntity.Name}}</div>\r\n                      <ng-select-custom *ngIf=\"CustomerEntity.IsEdit\" [Service]=\"CustomerGroupService\"\r\n                                        [Entity]=\"CustomerEntity.CustomerGroupEntity\"\r\n                                        (Change)=\"CustomerEntity.CustomerGroupId = $event?.Id\"></ng-select-custom>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div *ngIf=\"!CustomerEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CustomerEntity)\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CustomerEntity)\" (cancel)=\"cancelClicked = true\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"CustomerEntity.IsEdit\">\r\n                        <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CustomerEntity)\">\r\n                          <i class=\"fa fa-save\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CustomerEntity)\">\r\n                          <i class=\"fa fa-remove\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Customer/Customer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Customer_SearchEntity_1 = __webpack_require__("./src/app/Module/MCustomer/Customer.SearchEntity.ts");
var Customer_Service_1 = __webpack_require__("./src/app/Module/MCustomer/Customer.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var CustomerGroup_Service_1 = __webpack_require__("./src/app/Module/MCustomerGroup/CustomerGroup.Service.ts");
var CustomerComponent = /** @class */ (function (_super) {
    __extends(CustomerComponent, _super);
    function CustomerComponent(CustomerService, cd, toastr, vcr, CustomerGroupService) {
        var _this = _super.call(this, CustomerService, cd, toastr, vcr) || this;
        _this.CustomerService = CustomerService;
        _this.toastr = toastr;
        _this.CustomerGroupService = CustomerGroupService;
        _this.CustomerSearchEntity = new Customer_SearchEntity_1.CustomerSearchEntity();
        _this.CustomerSearchEntity = new Customer_SearchEntity_1.CustomerSearchEntity();
        _this.Search(_this.CustomerSearchEntity);
        return _this;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-Customer',
            template: __webpack_require__("./src/app/Component/Customer/Customer.component.html"),
            styles: [__webpack_require__("./src/app/Component/Customer/Customer.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Customer_Service_1.CustomerService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef, CustomerGroup_Service_1.CustomerGroupService])
    ], CustomerComponent);
    return CustomerComponent;
}(app_component_1.CommonComponent));
exports.CustomerComponent = CustomerComponent;


/***/ }),

/***/ "./src/app/Component/CustomerGroup/CustomerGroup.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/CustomerGroup/CustomerGroup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        CustomerGroup Management\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Code</th>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n            <th>IsActive</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\" [(ngModel)]=\"CustomerGroupSearchEntity.Code\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" [(ngModel)]=\"CustomerGroupSearchEntity.Name\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Description...\" [(ngModel)]=\"CustomerGroupSearchEntity.Description\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search IsActive...\" [(ngModel)]=\"CustomerGroupSearchEntity.IsActive\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(CustomerGroupSearchEntity, false)\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(CustomerGroupSearchEntity, true)\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let CustomerGroupEntity of Entities; index as i\">\r\n            <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!CustomerGroupEntity.IsEdit\">{{CustomerGroupEntity.Code}}</div>\r\n              <input class=\"form-control\" *ngIf=\"CustomerGroupEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"CustomerGroupEntity.Code\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!CustomerGroupEntity.IsEdit\">{{CustomerGroupEntity.Name}}</div>\r\n              <input class=\"form-control\" *ngIf=\"CustomerGroupEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"CustomerGroupEntity.Name\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!CustomerGroupEntity.IsEdit\">{{CustomerGroupEntity.Description}}</div>\r\n              <input class=\"form-control\" *ngIf=\"CustomerGroupEntity.IsEdit\" placeholder=\"Enter Description...\" [(ngModel)]=\"CustomerGroupEntity.Description\" />\r\n            </td>\r\n            <td>\r\n              <input class=\"form-control\" *ngIf=\"!CustomerGroupEntity.IsEdit\" type=\"checkbox\" disabled placeholder=\"Enter IsActive...\" [(ngModel)]=\"CustomerGroupEntity.IsActive\" />\r\n              <input class=\"form-control\" *ngIf=\"CustomerGroupEntity.IsEdit\" type=\"checkbox\" placeholder=\"Enter IsActive...\" [(ngModel)]=\"CustomerGroupEntity.IsActive\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!CustomerGroupEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(CustomerGroupEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(CustomerGroupEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"CustomerGroupEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(CustomerGroupEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(CustomerGroupEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/CustomerGroup/CustomerGroup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CustomerGroup_SearchEntity_1 = __webpack_require__("./src/app/Module/MCustomerGroup/CustomerGroup.SearchEntity.ts");
var CustomerGroup_Service_1 = __webpack_require__("./src/app/Module/MCustomerGroup/CustomerGroup.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var CustomerGroupComponent = /** @class */ (function (_super) {
    __extends(CustomerGroupComponent, _super);
    function CustomerGroupComponent(CustomerGroupService, cd, toastr, vcr) {
        var _this = _super.call(this, CustomerGroupService, cd, toastr, vcr) || this;
        _this.CustomerGroupService = CustomerGroupService;
        _this.toastr = toastr;
        _this.CustomerGroupSearchEntity = new CustomerGroup_SearchEntity_1.CustomerGroupSearchEntity();
        _this.CustomerGroupSearchEntity = new CustomerGroup_SearchEntity_1.CustomerGroupSearchEntity();
        _this.Search(_this.CustomerGroupSearchEntity);
        return _this;
    }
    CustomerGroupComponent.prototype.ngOnInit = function () {
    };
    CustomerGroupComponent = __decorate([
        core_1.Component({
            selector: 'app-CustomerGroup',
            template: __webpack_require__("./src/app/Component/CustomerGroup/CustomerGroup.component.html"),
            styles: [__webpack_require__("./src/app/Component/CustomerGroup/CustomerGroup.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [CustomerGroup_Service_1.CustomerGroupService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], CustomerGroupComponent);
    return CustomerGroupComponent;
}(app_component_1.CommonComponent));
exports.CustomerGroupComponent = CustomerGroupComponent;


/***/ }),

/***/ "./src/app/Component/Employee/Employee.Component.css":
/***/ (function(module, exports) {

module.exports = ".avatar {\r\n  margin: 1rem;\r\n  display: inline-block;\r\n  width: 8rem;\r\n  height: 8rem;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.card-avatar-sm {\r\n  width: 4rem;\r\n  height: 6rem;\r\n  padding: 2px;\r\n  border: solid 1px #e9ebee;\r\n}\r\n\r\n.card-avatar-lg {\r\n  width: 8rem;\r\n  height: 12rem;\r\n  padding: 2px;\r\n  border: solid 1px #e9ebee;\r\n}\r\n\r\n.username-post-content {\r\n  font-size: large;\r\n  color: #0064B4;\r\n  cursor: default;\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.employee-card {\r\n  background-color: white;\r\n  margin-left: 3.5rem;\r\n  margin-bottom: 1.4rem;\r\n  border: 1px solid #d9d9d9;\r\n  border-radius: 2px;\r\n}\r\n\r\n.employee-card-info {\r\n  margin-left: 0.5rem;\r\n  overflow: hidden;\r\n  display: inline-table;\r\n  vertical-align: top;\r\n  width: calc(100% - 5rem);\r\n}\r\n\r\n.time-post-content {\r\n  color: rgba(0, 0, 0, .6);\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.reply-btn-post-content {\r\n  color: #365899;\r\n  font-size: 0.75rem;\r\n  font-weight: 500;\r\n  margin-right: .5rem;\r\n}\r\n\r\n.content-post-content {\r\n}\r\n\r\n.input-row {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.input-service {\r\n  min-height: 54px;\r\n  max-height: 7rem;\r\n  border: solid 1px #e9ebee;\r\n  padding: 1rem 2px 2px;\r\n}\r\n\r\n/*.new-employee-avatar{*/\r\n\r\n/*color: #adb5bd;*/\r\n\r\n/*line-height: 6rem;*/\r\n\r\n/*border: 1px dashed #d9d9d9;*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*border-radius: 2px;*/\r\n\r\n/*text-align: center;*/\r\n\r\n/*}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/Component/Employee/Employee.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 2rem;margin-bottom: 2rem\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-md-6\" style=\"padding-left: 4rem;\">\r\n    <ng-select-user [Service]=\"EmployeeService\" [Entity]=\"SearchEmployeeEntity.Display\"\r\n                    (Change)=\"SearchEmployeeEntity.Display = $event?.Display; Search(SearchEmployeeEntity)\"\r\n                    (keyup.enter)=\"Search(SearchEmployeeEntity)\"\r\n                    [IsSearch]=\"true\" [Placeholder]=\"'Search...'\"></ng-select-user>\r\n  </div>\r\n  <button class=\"btn btn-primary\" (click)=\"AddNewEmployee()\">ADD</button>\r\n</div>\r\n<div class=\"row\">\r\n  <!--<div class=\"col-md-3\">-->\r\n  <!--<div class=\"employee-card\" (click)=\"LoadDataToUpdateModal(Employee,i)\">-->\r\n  <!--&lt;!&ndash;<img class=\"card-avatar-sm\"&ndash;&gt;-->\r\n  <!--&lt;!&ndash;[src]=\"Employee.Avatar != null ? Employee.Avatar : '/assets/img_avatar.png'\" alt=\"Card image\">&ndash;&gt;-->\r\n  <!--<span class=\"fa fa-5x new-employee-avatar fa-user-plus\"></span>-->\r\n  <!--&lt;!&ndash;<div class=\"employee-card-info\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;NEW EMPLOYEE&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <div class=\"col-md-3\" *ngFor=\"let Employee of (Entities ? Entities : []); let i = index\">\r\n    <div class=\"employee-card\" (click)=\"LoadDataToUpdateModal(Employee,i)\">\r\n      <img class=\"card-avatar-sm\"\r\n           [src]=\"Employee.Picture != null ? Employee.Picture : '/assets/img_avatar.png'\" alt=\"Card image\">\r\n      <div class=\"employee-card-info\">\r\n        <div>\r\n            <span class=\"username-post-content\">\r\n                {{Employee.Display}}\r\n            </span>\r\n        </div>\r\n        <div>\r\n          <!--<div *ngIf=\"Employee.StoreManagerEntities.length > 0\">-->\r\n            <!--<b>Manager</b>-->\r\n          <!--</div>-->\r\n          <!--<div *ngIf=\"Employee.StoreManagerEntities.length == 0 && Employee.StoreEmployeeEntities.length > 0\">-->\r\n            <!--<b>Employee</b>-->\r\n          <!--</div>-->\r\n          <div>Code : {{Employee.Id | EmployeeCode}}</div>\r\n          <div>Date of Birth : {{Employee.Birthday | date: 'dd-MM-yyyy'}}</div>\r\n          <!--<div>FromDate : {{Employee.StoreEmployeeEntities[0]?.FromDate | date: 'dd-MM-yyyy'}}</div>-->\r\n          <!--<div>ToDate : {{Employee.StoreEmployeeEntities[0]?.ToDate | date: 'dd-MM-yyyy'}}</div>-->\r\n          <!--<a class=\"reply-btn-post-content\">-->\r\n          <!--{{Employee.Id | EmployeeCode}}-->\r\n          <!--</a>-->\r\n          <!--<div class=\"time-post-content\" *ngIf=\"Employee.StoreManagerEntities.length > 0\">-->\r\n          <!--<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Manager-->\r\n          <!--</div>-->\r\n          <!--<div class=\"time-post-content\"-->\r\n          <!--*ngIf=\"Employee.StoreManagerEntities.length == 0 && Employee.StoreEmployeeEntities.length > 0\">-->\r\n          <!--<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Employee-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-modal #EditModal>\r\n  <modal-header>\r\n    <h5 class=\"modal-title\" id=\"add_modal\">\r\n      <i class=\"fa fa-dropbox\" aria-hidden=\"true\"></i>\r\n      <span *ngIf=\"EditEmployee.Id != 0\">Edit</span>\r\n      <span *ngIf=\"EditEmployee.Id == 0\">Create</span> {{ Title }}\r\n    </h5>\r\n  </modal-header>\r\n  <modal-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <avatar [(ngModel)]=\"EditEmployee.Picture\"></avatar>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <div class=\"row\">\r\n          <!--<div class=\"col-md-4 input-row\">-->\r\n          <!--<div>Facebook</div>-->\r\n          <!--<input class=\"form-control\" [(ngModel)]=\"EditEmployee.FacebookEmail\" type=\"text\"-->\r\n          <!--placeholder=\"Enter FacebookEmail...\">-->\r\n          <!--</div>-->\r\n          <!--<div class=\"col-md-4 input-row\">-->\r\n          <!--<div>Google</div>-->\r\n          <!--<input class=\"form-control\" [(ngModel)]=\"EditEmployee.GoogleEmail\" type=\"text\"-->\r\n          <!--placeholder=\"Enter GoogleEmail...\">-->\r\n          <!--</div>-->\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Họ và tên</div>\r\n            <input class=\"form-control\" [(ngModel)]=\"EditEmployee.Display\" type=\"text\"\r\n                   placeholder=\"Enter DisplayName...\">\r\n          </div>\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Mã nhân viên</div>\r\n            <input class=\"form-control\" [ngModel]=\"EditEmployee.Id | EmployeeCode\" type=\"text\"\r\n                   placeholder=\"Auto generated...\" disabled>\r\n          </div>\r\n          <!--<div class=\"col-md-4 input-row\">-->\r\n            <!--<div>From Date</div>-->\r\n            <!--<datetime [ngModel]=\"EditEmployee?.StoreEmployeeEntities[0]?.FromDate\"-->\r\n                      <!--placeholder=\"Auto generated...\" [disabled]=\"EditEmployee.Id != 0\"></datetime>-->\r\n          <!--</div>-->\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Date Of Birth</div>\r\n            <datetime [(ngModel)]=\"EditEmployee.Birthday\"\r\n                      [placeholder]=\"'Enter DateOfBirth...'\"></datetime>\r\n          </div>\r\n          <!--<div class=\"col-md-4 input-row\">-->\r\n            <!--<div>Address</div>-->\r\n            <!--<input class=\"form-control\" [(ngModel)]=\"EditEmployee.Address\" type=\"text\"-->\r\n                   <!--placeholder=\"Enter Address...\"/>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"col-md-4 input-row\">-->\r\n            <!--<div>To Date</div>-->\r\n            <!--<datetime [(ngModel)]=\"EditEmployee.StoreEmployeeEntities[0].ToDate\"-->\r\n                      <!--placeholder=\"To Date...\"></datetime>-->\r\n          <!--</div>-->\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Phone Number</div>\r\n            <input class=\"form-control\" [(ngModel)]=\"EditEmployee.Phone\" type=\"text\"\r\n                   placeholder=\"Enter PhoneNumber...\">\r\n          </div>\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Số chứng minh thư</div>\r\n            <input class=\"form-control\" [(ngModel)]=\"EditEmployee.IdentityCard\" type=\"text\"\r\n                   placeholder=\"Enter IdentityCard...\">\r\n          </div>\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Tên đăng nhập</div>\r\n            <input class=\"form-control\" [(ngModel)]=\"EditEmployee.Username\" type=\"text\"\r\n                   placeholder=\"Enter UserName...\">\r\n          </div>\r\n          <!--<div class=\"col-md-8 input-row\">-->\r\n            <!--<div>Cửa hàng</div>-->\r\n            <!--<ng-select-custom [Init]=\"{Name : EditEmployee?.StoreEmployeeEntities[0]?.StoreEntity?.Name}\"-->\r\n                              <!--[Service]=\"StoreService\"-->\r\n                              <!--[(ngModel)]=\"EditEmployee.StoreEmployeeEntities[0].StoreId\"-->\r\n                              <!--(Change)=\"LoadService($event); EditEmployee.StoreEmployeeEntities[0].ToDate = null\"-->\r\n                              <!--[BindProperty]=\"'Id'\"></ng-select-custom>-->\r\n          <!--</div>-->\r\n          <div class=\"col-md-4 input-row\">\r\n            <div>Password</div>\r\n            <input class=\"form-control\" [(ngModel)]=\"EditEmployee.Password\" type=\"password\"\r\n                   placeholder=\"Enter HashPassword...\"/>\r\n          </div>\r\n          <!--<div class=\"col-md-12 input-row\">-->\r\n            <!--<div>Dịch vụ</div>-->\r\n            <!--<div class=\"row input-service\">-->\r\n              <!--<div class=\"col-md-3 input-row\" *ngFor=\"let ServiceStore of ServiceStoreEntites\">-->\r\n                <!--<checkbox [(ngModel)]=\"ServiceStore.IsChecked\"></checkbox>-->\r\n                <!--<span>{{ServiceStore.ServiceEntity.Name}}</span>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </modal-body>\r\n  <modal-footer>\r\n    <modal-footer>\r\n      <button (click)=\"Save()\"\r\n              class=\"btn btn-success\">\r\n        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n        <span *ngIf=\"EditEmployee.Id != 0\">Edit</span>\r\n        <span *ngIf=\"EditEmployee.Id == 0\">Create</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"EditModal.Close()\">\r\n        <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</span>\r\n      </button>\r\n    </modal-footer>\r\n  </modal-footer>\r\n</app-modal>\r\n"

/***/ }),

/***/ "./src/app/Component/Employee/Employee.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Employee_Service_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Employee_Entity_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.Entity.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Employee_SearchEntity_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.SearchEntity.ts");
var EmployeeComponent = /** @class */ (function (_super) {
    __extends(EmployeeComponent, _super);
    function EmployeeComponent(EmployeeService, cd, toastr, vcr) {
        var _this = _super.call(this, EmployeeService, cd, toastr, vcr) || this;
        _this.EmployeeService = EmployeeService;
        _this.Title = 'Employee';
        _this.SearchEmployeeEntity = new Employee_SearchEntity_1.SearchEmployeeEntity();
        _this.EditEmployee = new Employee_Entity_1.EmployeeEntity();
        _this.EditPosition = 0;
        _this.PagingModel.Take = 10000;
        _this.Search(_this.SearchEmployeeEntity);
        return _this;
    }
    EmployeeComponent.prototype.LoadDataToUpdateModal = function (Employee, index) {
        this.EditEmployee = JSON.parse(JSON.stringify(Employee));
        this.EditPosition = index;
        this.EditModal.Open();
    };
    // LoadService(Store: StoreEntity | number) {
    //   if (Store == null) {
    //     this.ServiceStoreEntites = [];
    //     this.EditEmployee.ServiceEmployeeEntities = [];
    //     return;
    //   }
    //   let StoreId = (typeof Store) == 'number' ? Store : Store['Id'];
    //   if (StoreId != null) {
    //     let t = new SearchServiceStoreEntity();
    //     t.StoreId = StoreId;
    //     this.ServiceStoreService.Gets(t).subscribe(entities => {
    //       this.ServiceStoreEntites = entities;
    //       this.ServiceStoreEntites.forEach(se => {
    //         if (this.EditEmployee.ServiceEmployeeEntities != null) {
    //           se.IsChecked = this.EditEmployee.ServiceEmployeeEntities.some(x => x.ServiceId == se.ServiceId);
    //         }
    //       });
    //     });
    //   }
    // }
    EmployeeComponent.prototype.AddNewEmployee = function () {
        this.EditEmployee = new Employee_Entity_1.EmployeeEntity();
        this.EditPosition = -1;
        // this.LoadService(null);
        this.EditModal.Open();
    };
    EmployeeComponent.prototype.Save = function () {
        var _this = this;
        // if (this.ServiceStoreEntites != null) {
        //   this.EditEmployee.ServiceEmployeeEntities = this.ServiceStoreEntites.filter(ss => {
        //     return ss.IsChecked;
        //   }).map(ss => {
        //     let t = new ServiceEmployeeEntity();
        //     t.ServiceId = ss.ServiceId;
        //     return t;
        //   });
        // } else {
        //   this.EditEmployee.ServiceEmployeeEntities = [];
        // }
        if (this.EditEmployee.Id == 0) {
            this.EmployeeService.Create(this.EditEmployee).subscribe(function (employee) {
                _this.Entities.unshift(employee);
                _this.toastr.ShowSuccess();
                _this.EditModal.Close();
            }, function (err) {
                _this.toastr.ShowError(err);
            });
        }
        else {
            this.EmployeeService.Update(this.EditEmployee).subscribe(function (employee) {
                _this.Entities[_this.EditPosition] = employee;
                _this.toastr.ShowSuccess();
                _this.EditModal.Close();
            }, function (err) {
                _this.toastr.ShowError(err);
            });
        }
    };
    __decorate([
        core_1.ViewChild('EditModal'),
        __metadata("design:type", modal_component_1.ModalComponent)
    ], EmployeeComponent.prototype, "EditModal", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'App-Employee',
            template: __webpack_require__("./src/app/Component/Employee/Employee.Component.html"),
            styles: [__webpack_require__("./src/app/Component/Employee/Employee.Component.css")],
            providers: [Employee_Service_1.EmployeeService,
                CustomToaster_1.BottomToastsManager]
        }),
        __metadata("design:paramtypes", [Employee_Service_1.EmployeeService,
            core_1.ChangeDetectorRef,
            CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], EmployeeComponent);
    return EmployeeComponent;
}(app_component_1.CommonComponent));
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/app/Component/Introduction/Introduction.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Introduction/Introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Introduction Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div style=\"padding-right: 15px;\">\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id: 0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\" width=\"10%\">#</th>\r\n                        <th width=\"40%\">Content</th>\r\n                        <th width=\"35%\">Route</th>\r\n                        <th width=\"15%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Content...\" [(ngModel)]=\"IntroductionSearchEntity.Content\"/>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Route...\" [(ngModel)]=\"IntroductionSearchEntity.Route\"/>\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(IntroductionSearchEntity, false)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(IntroductionSearchEntity, true)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let IntroductionEntity of Entities; index as i\">\r\n                        <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                            <span *ngIf=\"!IntroductionEntity.IsEdit\">{{IntroductionEntity.Content}}</span>\r\n                            <input class=\"form-control\" *ngIf=\"IntroductionEntity.IsEdit\" placeholder=\"Enter Content...\" [(ngModel)]=\"IntroductionEntity.Content\" />\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"!IntroductionEntity.IsEdit\">{{IntroductionEntity.Route}}</span>\r\n                            <input class=\"form-control\" *ngIf=\"IntroductionEntity.IsEdit\" placeholder=\"Enter Route...\" [(ngModel)]=\"IntroductionEntity.Route\" />\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!IntroductionEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(IntroductionEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(IntroductionEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"IntroductionEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(IntroductionEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(IntroductionEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Introduction/Introduction.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Introduction_SearchEntity_1 = __webpack_require__("./src/app/Module/MIntroduction/Introduction.SearchEntity.ts");
var Introduction_Service_1 = __webpack_require__("./src/app/Module/MIntroduction/Introduction.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var IntroductionComponent = /** @class */ (function (_super) {
    __extends(IntroductionComponent, _super);
    function IntroductionComponent(IntroductionService, cd, toastr, vcr) {
        var _this = _super.call(this, IntroductionService, cd, toastr, vcr) || this;
        _this.IntroductionService = IntroductionService;
        _this.toastr = toastr;
        _this.IntroductionSearchEntity = new Introduction_SearchEntity_1.IntroductionSearchEntity();
        _this.IntroductionSearchEntity = new Introduction_SearchEntity_1.IntroductionSearchEntity();
        _this.Search(_this.IntroductionSearchEntity);
        return _this;
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        core_1.Component({
            selector: 'app-Introduction',
            template: __webpack_require__("./src/app/Component/Introduction/Introduction.component.html"),
            styles: [__webpack_require__("./src/app/Component/Introduction/Introduction.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Introduction_Service_1.IntroductionService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], IntroductionComponent);
    return IntroductionComponent;
}(app_component_1.CommonComponent));
exports.IntroductionComponent = IntroductionComponent;


/***/ }),

/***/ "./src/app/Component/Inventory/Inventory.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Inventory/Inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Inventory Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n          <li class=\"m-nav__item m-nav__item--home\">\r\n              <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                  <i class=\"m-nav__link-icon la la-home\"></i>\r\n              </a>\r\n          </li>\r\n          <li class=\"m-nav__separator\">\r\n              -\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n              <a href=\"\" class=\"m-nav__link\">\r\n                  <span class=\"m-nav__link-text\">\r\n                      Reports\r\n                  </span>\r\n              </a>\r\n          </li>\r\n          <li class=\"m-nav__separator\">\r\n              -\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n              <a href=\"\" class=\"m-nav__link\">\r\n                  <span class=\"m-nav__link-text\">\r\n                      Revenue\r\n                  </span>\r\n              </a>\r\n          </li>\r\n      </ul>-->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div style=\"margin-top: 5px\">\r\n        <span style=\"font-size:20px; margin-right:7px\">Warehouse: </span>\r\n      </div>\r\n      <div style=\"margin-top: 2px; margin-right: 7px; width: 300px;\">\r\n        <ng-select-custom [Service]=\"WareHouseService\" [Entity]=\"WareHouseSearchEntity.Name\"\r\n                          [BindProperty]=\"'Name'\"\r\n                          (Change)=\"WareHouseSearchEntity.Name = $event?.Name; Search(WareHouseSearchEntity)\"\r\n                          (keyup.enter)=\"Search(WareHouseSearchEntity)\"\r\n                          [IsSearch]=\"true\" [Placeholder]=\"'Search...'\"></ng-select-custom>\r\n      </div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id: 0, IsEdit: true, WareHouseId: WareHouseEntity.Id})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\">#</th>\r\n            <th>Product</th>\r\n            <th>Product Group</th>\r\n            <th>Unit</th>\r\n            <th>Date</th>\r\n            <th>Current</th>\r\n            <th>Price</th>\r\n            <th>Total</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"ProductService\" [Entity]=\"InventorySearchEntity.ProductId\"\r\n                                [BindProperty]=\"'Id'\"\r\n                                (Change)=\"InventorySearchEntity.ProductId = $event?.Id; Search(InventorySearchEntity)\"\r\n                                (keyup.enter)=\"Search(InventorySearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search...'\"></ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\"/>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Current...\" [(ngModel)]=\"InventorySearchEntity.Current\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(IntroductionSearchEntity, false)\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(IntroductionSearchEntity, true)\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let InventoryEntity of Entities; index as i\">\r\n            <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.ProductEntity?.Code}}</span>\r\n              <ng-select *ngIf=\"InventoryEntity.IsEdit\" [items]=\"ProductEntities\"\r\n                         bindValue=\"Id\"\r\n                         bindLabel=\"Code\"\r\n                         placeholder=\"Choose Product...\"\r\n                         [(ngModel)]=\"InventoryEntity.ProductId\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!InventoryEntity.IsEdit\">{{InventoryEntity.Current}}</span>\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!InventoryEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(InventoryEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"InventoryEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(InventoryEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(InventoryEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Inventory/Inventory.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Inventory_SearchEntity_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.SearchEntity.ts");
var Inventory_Service_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var WareHouse_Entity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Entity.ts");
var WareHouse_SearchEntity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.SearchEntity.ts");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var Product_Service_1 = __webpack_require__("./src/app/Module/MProduct/Product.Service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Product_SearchEntity_1 = __webpack_require__("./src/app/Module/MProduct/Product.SearchEntity.ts");
var InventoryComponent = /** @class */ (function (_super) {
    __extends(InventoryComponent, _super);
    function InventoryComponent(InventoryService, toastr, vcr, cd, WareHouseService, ProductService) {
        var _this = _super.call(this, InventoryService, cd, toastr, vcr) || this;
        _this.InventoryService = InventoryService;
        _this.toastr = toastr;
        _this.WareHouseService = WareHouseService;
        _this.ProductService = ProductService;
        _this.InventorySearchEntity = new Inventory_SearchEntity_1.InventorySearchEntity();
        _this.WareHouseEntity = new WareHouse_Entity_1.WareHouseEntity();
        _this.WareHouseEntities = [];
        _this.ProductEntity = new Product_Entity_1.ProductEntity();
        _this.ProductEntities = [];
        _this.WareHouseSearchEntity = new WareHouse_SearchEntity_1.WareHouseSearchEntity();
        _this.InventorySearchEntity = new Inventory_SearchEntity_1.InventorySearchEntity();
        _this.ProductSearchEntity = new Product_SearchEntity_1.ProductSearchEntity();
        _this.WareHouseSearchEntity = new WareHouse_SearchEntity_1.WareHouseSearchEntity();
        _this.GetWarehouseList();
        _this.GetProductEntities();
        return _this;
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent.prototype.GetWarehouseList = function () {
        var _this = this;
        this.WareHouseService.Gets().subscribe(function (res) {
            if (res) {
                _this.WareHouseEntities = res;
                _this.WareHouseEntity = _this.WareHouseEntities[0];
                _this.InventorySearchEntity.WareHouseId = _this.WareHouseEntities[0].Id;
                _this.Search(_this.InventorySearchEntity);
            }
        });
    };
    InventoryComponent.prototype.ChooseWarehouse = function (WareHouseEntity, InventoryEntity) {
        console.log(WareHouseEntity);
        this.InventorySearchEntity.WareHouseId = WareHouseEntity.Id;
        this.WareHouseEntity = WareHouseEntity;
        this.WareHouseEntity.Id = WareHouseEntity.Id;
        this.Search(this.InventorySearchEntity);
    };
    InventoryComponent.prototype.ChooseProduct = function (ProductEntity, InventoryEntity) {
        InventoryEntity.ProductEntity = ProductEntity;
        InventoryEntity.ProductId = ProductEntity.Id;
        console.log(InventoryEntity.ProductEntity);
        console.log(InventoryEntity.ProductId);
    };
    InventoryComponent.prototype.GetProductEntities = function () {
        var _this = this;
        this.ProductService.Gets().subscribe(function (res) {
            if (res) {
                _this.ProductEntities = res;
                _this.ProductEntity = _this.ProductEntities[0];
            }
        });
    };
    InventoryComponent = __decorate([
        core_1.Component({
            selector: 'app-Inventory',
            template: __webpack_require__("./src/app/Component/Inventory/Inventory.component.html"),
            styles: [__webpack_require__("./src/app/Component/Inventory/Inventory.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Inventory_Service_1.InventoryService,
            CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            core_1.ChangeDetectorRef, WareHouse_Service_1.WareHouseService,
            Product_Service_1.ProductService])
    ], InventoryComponent);
    return InventoryComponent;
}(app_component_1.CommonComponent));
exports.InventoryComponent = InventoryComponent;


/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        IssueNote Management\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Phiếu nhập số:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <p style=\"margin-bottom: 0\">Tên khách hàng:</p>\r\n        <div style=\"display: flex\">\r\n          <input type=\"text\" class=\"form-control\" style=\"width: 88%; border-radius: 0.25em 0em 0em 0.25em;\" />\r\n          <button style=\"border-radius: 0em 0.25em 0.25em 0;\" class=\"btn btn-success\"><i class=\"fa fa-plus\" style=\"margin-right: 4px\"></i><i class=\"fa fa-user\"></i></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <p style=\"margin-bottom: 0\">Mã khách hàng:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Địa chỉ:</p>\r\n        <textarea type=\"text\" class=\"form-control\" style=\"width: 100%\"> </textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Mã số thuế:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <p style=\"margin-bottom: 0\">Điện thoại:</p>\r\n      <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <p style=\"margin-bottom: 0\">Diễn giải:</p>\r\n      <textarea type=\"text\" class=\"form-control\" style=\"width: 100%\"></textarea>\r\n    </div>\r\n  </div>\r\n  <app-IssueNoteLine></app-IssueNoteLine>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n      <div class=\"ui right aligned category search\" style=\"margin-bottom: 17px; float: right\">\r\n        <button class=\"btn btn-success\" style=\"margin-right:10px;\"><i class=\"fa fa-check\"></i> Gửi</button>\r\n        <button class=\"btn btn-info\" style=\"margin-right: 10px\"><i class=\"fa fa-print\"> In phiếu</i></button>\r\n        <button class=\"btn btn-danger\" style=\"margin-right:10px;\"><i class=\"fa fa-times\"></i> Hủy</button>\r\n        <button class=\"btn btn-warning\" style=\"color: white\"><i class=\"fa fa-pencil\"></i> Nhập lại</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var IssueNote_Service_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Service.ts");
var IssueNoteDetailComponent = /** @class */ (function (_super) {
    __extends(IssueNoteDetailComponent, _super);
    function IssueNoteDetailComponent(IssueNoteService, cd, toastr, vcr, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, IssueNoteService, cd, toastr, vcr) || this;
        _this.IssueNoteService = IssueNoteService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.IssueNoteId = 0;
        _this.route.params.subscribe(function (params) {
            if (params.ReceiptNoteId !== undefined) {
                _this.IssueNoteId = params.ReceiptNoteId;
                _this.GetId(_this.IssueNoteId);
            }
        });
        return _this;
    }
    IssueNoteDetailComponent.prototype.ngOnInit = function () {
    };
    IssueNoteDetailComponent = __decorate([
        core_1.Component({
            selector: "app-IssueNoteDetail",
            template: __webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.html"),
            styles: [__webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [IssueNote_Service_1.IssueNoteService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], IssueNoteDetailComponent);
    return IssueNoteDetailComponent;
}(app_component_1.CommonComponent));
exports.IssueNoteDetailComponent = IssueNoteDetailComponent;


/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteLine.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteLine.component.html":
/***/ (function(module, exports) {

module.exports = "<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover \">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Mã Hàng</th>\r\n            <th>Tên hàng hóa</th>\r\n            <th>Kho</th>\r\n            <th>Đơn vị</th>\r\n            <th>Số lượng</th>\r\n            <th>Đơn giá</th>\r\n            <th>Thành tiền</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.ProductEntity.Code}}</div>\r\n              <input *ngIf=\"IssueNoteLineEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Code...\" [(ngModel)]=\"IssueNoteLineEntity.ProductEntity.Code\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.ProductEntity.Name}}</div>\r\n\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.WareHouseEntity.Name}}</div>\r\n              <input *ngIf=\"IssueNoteLineEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Code...\" [(ngModel)]=\"IssueNoteLineEntity.WareHouseEntity.Name\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.UnitPrice}}</div>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"IssueNoteLineEntity.UnitPrice\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.Quantity}}</div>\r\n              <input class=\"form-control\" *ngIf=\"ReceiptNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"IssueNoteLineEntity.Quantity\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!IssueNoteLineEntity.IsEdit\">{{IssueNoteLineEntity.Price}}</div>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"IssueNoteLineEntity.Price\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n              <a class=\"addnewrow\" style=\"\"><i class=\"fa fa-plus\"></i> Add new row</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/IssueNote/Detail/IssueNoteLine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var IssueNoteLine_SearchEntity_1 = __webpack_require__("./src/app/Module/MIssueNoteLine/IssueNoteLine.SearchEntity.ts");
var IssueNoteLine_Service_1 = __webpack_require__("./src/app/Module/MIssueNoteLine/IssueNoteLine.Service.ts");
var IssueNoteLineComponent = /** @class */ (function (_super) {
    __extends(IssueNoteLineComponent, _super);
    function IssueNoteLineComponent(IssueNoteLineService, cd, toastr, vcr, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, IssueNoteLineService, cd, toastr, vcr) || this;
        _this.IssueNoteLineService = IssueNoteLineService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.IssueNoteId = 0;
        _this.FilterEntity = new IssueNoteLine_SearchEntity_1.IssueNoteLineSearchEntity();
        _this.route.params.subscribe(function (params) {
            if (params.IssueNoteId !== undefined) {
                _this.IssueNoteId = params.IssueNoteId;
                _this.FilterEntity.IssueNoteId = _this.IssueNoteId;
                _this.Search(_this.FilterEntity);
            }
        });
        return _this;
    }
    IssueNoteLineComponent.prototype.ngOnInit = function () {
    };
    IssueNoteLineComponent = __decorate([
        core_1.Component({
            selector: 'app-IssueNoteLine',
            template: __webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteLine.component.html"),
            styles: [__webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteLine.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [IssueNoteLine_Service_1.IssueNoteLineService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], IssueNoteLineComponent);
    return IssueNoteLineComponent;
}(app_component_1.CommonComponent));
exports.IssueNoteLineComponent = IssueNoteLineComponent;


/***/ }),

/***/ "./src/app/Component/IssueNote/IssueNote.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/IssueNote/IssueNote.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        IssueNote Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n    <div style=\"margin-top: 2px; margin-right: 7px; width: 300px;\">\r\n      <!--<ng-select [items]=\"SupplierEntities\"\r\n                 (ngModelChange)=\"SupplierEntity = $event; ChooseSupplier(SupplierEntity, IssueNoteEntity)\"\r\n                 bindLabel=\"Name\"\r\n                 bindValue=\"SupplierEntity\"\r\n                 placeholder=\"Choose Supplier...\"\r\n                 [(ngModel)]=\"SupplierEntity\">\r\n      </ng-select>-->\r\n      <ng-select [items]=\"SupplierEntities\"\r\n                 bindLabel=\"Name\"\r\n                 bindValue=\"Id\"\r\n                 placeholder=\"Choose Supplier...\"\r\n                 [(ngModel)]=\"SupplierEntity.Id\">\r\n      </ng-select>\r\n    </div>\r\n    <div>\r\n      <a class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" [routerLink]=\"['/IssueNotes/',0]\"><i class=\"fa fa-plus\"></i> Add</a>\r\n      <!--<button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddIssueNote()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Warehouse</th>\r\n            <th>Product</th>\r\n            <th>Quantity</th>\r\n            <th>Unit Price</th>\r\n            <th>Description</th>\r\n            <!--<th>Total</th>-->\r\n            <!--<th>Receipt Date</th>\r\n            <th>Receipt User</th>-->\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Warehouse...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Product...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Quantity...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Description...\" />\r\n            </td>\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Total...\" />\r\n            </td>-->\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>-->\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let IssueNoteEntity of IssueNoteEntities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.WareHouseEntity.Name}}</span>\r\n              <ng-select [items]=\"WareHouseEntities\"\r\n                         (ngModelChange)=\"IssueNoteEntity.WareHouseId=$event; GetProduct(IssueNoteEntity.WareHouseId)\"\r\n                         bindLabel=\"WareHouseEntity.Name\"\r\n                         bindValue=\"WareHouseId\"\r\n                         placeholder=\"Choose Warehouse...\"\r\n                         [(ngModel)]=\"IssueNoteEntity.WareHouseId\" *ngIf=\"IssueNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.ProductEntity.Code}}</span>\r\n              <ng-select [items]=\"InventoryEntities\"\r\n                         bindLabel=\"ProductEntity.Code\"\r\n                         bindValue=\"ProductId\"\r\n                         placeholder=\"Choose Product...\"\r\n                         [(ngModel)]=\"IssueNoteEntity.ProductId\" *ngIf=\"IssueNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Quantity}}</span>\r\n              <input type=\"number\" class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"IssueNoteEntity.Quantity\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.UnitPrice}}</span>\r\n              <input type=\"number\" class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Unit Price...\" [(ngModel)]=\"IssueNoteEntity.UnitPrice\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Description}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Description...\" [(ngModel)]=\"IssueNoteEntity.Description\" />\r\n            </td>\r\n            <!--<td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Route}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Route...\" [(ngModel)]=\"IssueNoteEntity.Route\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Route}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Route...\" [(ngModel)]=\"IssueNoteEntity.Route\" />\r\n            </td>-->\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!IssueNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"EditIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteIssueNote(IssueNoteEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"IssueNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"SaveIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"CancelIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchIssueNote()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/IssueNote/IssueNote.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var IssueNote_Entity_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Entity.ts");
var IssueNote_SearchEntity_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.SearchEntity.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var IssueNote_Service_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var Supplier_Entity_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Entity.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var WareHouse_Entity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Entity.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var Inventory_Entity_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Entity.ts");
var Inventory_Service_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Service.ts");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var Inventory_SearchEntity_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.SearchEntity.ts");
var IssueNoteComponent = /** @class */ (function () {
    function IssueNoteComponent(IssueNoteService, Router, toastr, cd, vcr, SupplierService, WareHouseService, InventoryService) {
        this.IssueNoteService = IssueNoteService;
        this.Router = Router;
        this.toastr = toastr;
        this.SupplierService = SupplierService;
        this.WareHouseService = WareHouseService;
        this.InventoryService = InventoryService;
        this.IssueNoteEntities = [];
        this.IssueNoteEntity = new IssueNote_Entity_1.IssueNoteEntity();
        this.IssueNoteSearchEntity = new IssueNote_SearchEntity_1.IssueNoteSearchEntity();
        this.PagingModel = new paging_model_1.PagingModel(7, 10, function (data) {
        });
        this.TempIssueNote = {};
        this.ModalIssueNoteEntity = new IssueNote_Entity_1.IssueNoteEntity();
        this.EditModalComponent = new modal_component_1.ModalComponent();
        this.IsSearch = false;
        this.SupplierEntity = new Supplier_Entity_1.SupplierEntity();
        this.SupplierEntities = [];
        this.WareHouseEntities = [];
        this.WareHouseEntity = new WareHouse_Entity_1.WareHouseEntity();
        this.InventoryEntity = new Inventory_Entity_1.InventoryEntity();
        this.InventoryEntities = [];
        this.ProductEntity = new Product_Entity_1.ProductEntity();
        this.ProductEntities = [];
        this.IsAdding = false;
        this.toastr.setRootViewContainerRef(vcr);
        this.SearchIssueNote(this.IssueNoteSearchEntity);
        this.GetSupplierEntities();
        this.GetWarehouseList();
    }
    IssueNoteComponent.prototype.ngOnInit = function () {
    };
    IssueNoteComponent.prototype.SearchIssueNote = function (SearchEntity, IsRefersh) {
        var _this = this;
        if (IsRefersh) {
            SearchEntity = Object.assign(new IssueNote_SearchEntity_1.IssueNoteSearchEntity());
        }
        this.IssueNoteService.Gets(SearchEntity).subscribe(function (res) {
            if (res) {
                _this.IssueNoteEntities = res;
                _this.Count(SearchEntity);
                _this.IssueNoteEntities = _this.IssueNoteEntities.map(function (c) {
                    c.IsEdit = false;
                    return c;
                });
            }
        }, function (err) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    IssueNoteComponent.prototype.Count = function (SearchEntity) {
        var _this = this;
        this.IssueNoteService.Count(SearchEntity).subscribe(function (data) {
            _this.PagingModel.TotalPage = Math.ceil(data / _this.PagingModel.Take);
        });
    };
    IssueNoteComponent.prototype.AddProductAttribute = function (IssueNoteEntity) {
        if (IssueNoteEntity.Id) {
            this.Router.navigate(['/module/IssueNote/' + IssueNoteEntity.Id + '/ProductAttribute']);
        }
    };
    //AddIssueNote() {
    //  let IssueNote: IssueNoteEntity = new IssueNoteEntity();
    //  IssueNote.IsEdit = true;
    //  this.IssueNoteEntities.unshift(IssueNote);
    //}
    IssueNoteComponent.prototype.EditIssueNote = function (IssueNoteEntity) {
        IssueNoteEntity.IsEdit = true;
        this.TempIssueNote[IssueNoteEntity.Id] = Object.assign(IssueNoteEntity);
    };
    IssueNoteComponent.prototype.DeleteIssueNote = function (IssueNoteEntity) {
        var _this = this;
        this.IssueNoteService.Delete(IssueNoteEntity.Id).subscribe(function (res) {
            if (res) {
                var IndexNumber = _this.IssueNoteEntities.indexOf(IssueNoteEntity);
                _this.IssueNoteEntities.splice(IndexNumber, 1);
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError();
        });
    };
    IssueNoteComponent.prototype.SaveIssueNote = function (IssueNoteEntity) {
        var _this = this;
        console.log(this.SupplierEntity.Id);
        console.log(IssueNoteEntity.WareHouseId);
        console.log(IssueNoteEntity.ProductId);
        if (IssueNoteEntity.Id == null || IssueNoteEntity.Id == undefined || IssueNoteEntity.Id == 0) {
            IssueNoteEntity.SupplierId = this.SupplierEntity.Id;
            //IssueNoteEntity.WareHouseId = IssueNoteEntity.WareHouseEntity.Id;
            this.IssueNoteService.Create(IssueNoteEntity).subscribe(function (res) {
                _this.IssueNoteEntities.unshift(IssueNoteEntity);
                _this.IssueNoteEntities[0].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
        else {
            this.IssueNoteService.Update(IssueNoteEntity).subscribe(function (res) {
                var IndexNumber = _this.IssueNoteEntities.indexOf(res);
                Object.assign(_this.IssueNoteEntities[IndexNumber], res);
                _this.IssueNoteEntities[IndexNumber].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
    };
    IssueNoteComponent.prototype.CancelIssueNote = function (IssueNoteEntity) {
        if (IssueNoteEntity.Id == null || IssueNoteEntity.Id == undefined) {
            var index = this.IssueNoteEntities.indexOf(IssueNoteEntity);
            this.IssueNoteEntities.splice(index, 1);
        }
        else {
            Object.assign(IssueNoteEntity, this.TempIssueNote);
            IssueNoteEntity.IsEdit = false;
        }
    };
    IssueNoteComponent.prototype.GetSupplierEntities = function () {
        var _this = this;
        this.SupplierService.Gets().subscribe(function (res) {
            _this.SupplierEntities = res;
            _this.SupplierEntity = _this.SupplierEntities[0];
        });
    };
    //ChooseSupplier(SupplierEntity: SupplierEntity, IssueNoteEntity?: IssueNoteEntity) {
    //  console.log(SupplierEntity);
    //  this.IssueNoteSearchEntity.SupplierId = SupplierEntity.Id;
    //  this.SupplierEntity = SupplierEntity;
    //  this.SupplierEntity.Id = SupplierEntity.Id;
    //  this.SearchIssueNote(this.IssueNoteSearchEntity);
    //}
    IssueNoteComponent.prototype.GetWarehouseList = function () {
        var _this = this;
        this.WareHouseService.Gets().subscribe(function (res) {
            _this.WareHouseEntities = res;
            _this.WareHouseEntity = _this.WareHouseEntities[0];
        });
    };
    IssueNoteComponent.prototype.ChooseWarehouse = function (WareHouseEntity, InventoryEntity) {
        console.log(WareHouseEntity);
        this.IssueNoteSearchEntity.WareHouseId = WareHouseEntity.Id;
        this.WareHouseEntity = WareHouseEntity;
        this.WareHouseEntity.Id = WareHouseEntity.Id;
        this.GetProduct(WareHouseEntity.Id);
    };
    IssueNoteComponent.prototype.GetProduct = function (WareHouseId) {
        var _this = this;
        console.log(WareHouseId);
        var a = new Inventory_SearchEntity_1.InventorySearchEntity();
        a.WareHouseId = WareHouseId;
        a.IsDeleted = false;
        this.InventoryService.Gets(a).subscribe(function (res) {
            _this.InventoryEntities = res;
        });
    };
    IssueNoteComponent.prototype.AddIssueNote = function () {
        this.IsAdding = true;
    };
    IssueNoteComponent = __decorate([
        core_1.Component({
            selector: 'app-issuenote',
            template: __webpack_require__("./src/app/Component/IssueNote/IssueNote.component.html"),
            styles: [__webpack_require__("./src/app/Component/IssueNote/IssueNote.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [IssueNote_Service_1.IssueNoteService,
            router_1.Router,
            CustomToaster_1.BottomToastsManager,
            core_1.ChangeDetectorRef, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService,
            WareHouse_Service_1.WareHouseService,
            Inventory_Service_1.InventoryService])
    ], IssueNoteComponent);
    return IssueNoteComponent;
}());
exports.IssueNoteComponent = IssueNoteComponent;


/***/ }),

/***/ "./src/app/Component/Language/Language.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Language/Language.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Language Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>Icon</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\" [(ngModel)]=\"LanguageSearchEntity.Code\"/>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" [(ngModel)]=\"LanguageSearchEntity.Name\"/>\r\n                    </td>\r\n                    <td>\r\n                      <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search Icon...\" />-->\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(LanguageSearchEntity, true)\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(LanguageSearchEntity, false)\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let LanguageEntity of Entities; index as i\">\r\n                        <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                            <div *ngIf=\"!LanguageEntity.IsEdit\">{{LanguageEntity.Code}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"LanguageEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"LanguageEntity.Code\" />\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!LanguageEntity.IsEdit\">{{LanguageEntity.Name}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"LanguageEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"LanguageEntity.Name\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            <img class=\"img-size\" [src]=\"LanguageEntity.Icon\"/>\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!LanguageEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(LanguageEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(LanguageEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"LanguageEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(LanguageEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(LanguageEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search(LanguageSearchEntity)\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Language/Language.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Language_SearchEntity_1 = __webpack_require__("./src/app/Module/MLanguage/Language.SearchEntity.ts");
var Language_Service_1 = __webpack_require__("./src/app/Module/MLanguage/Language.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var LanguageComponent = /** @class */ (function (_super) {
    __extends(LanguageComponent, _super);
    function LanguageComponent(cd, LanguageService, toastr, vcr) {
        var _this = _super.call(this, LanguageService, cd, toastr, vcr) || this;
        _this.LanguageService = LanguageService;
        _this.toastr = toastr;
        _this.LanguageSearchEntity = new Language_SearchEntity_1.LanguageSearchEntity();
        _this.LanguageSearchEntity = new Language_SearchEntity_1.LanguageSearchEntity();
        _this.Search(_this.LanguageSearchEntity);
        return _this;
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'app-Language',
            template: __webpack_require__("./src/app/Component/Language/Language.component.html"),
            styles: [__webpack_require__("./src/app/Component/Language/Language.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Language_Service_1.LanguageService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], LanguageComponent);
    return LanguageComponent;
}(app_component_1.CommonComponent));
exports.LanguageComponent = LanguageComponent;


/***/ }),

/***/ "./src/app/Component/Manufacturer/Manufacturer.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Manufacturer/Manufacturer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                User Management\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div style=\"padding-right: 15px;\">\r\n            <a href=\"#\" class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddUser()\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </a>\r\n            <a href=\"#\" class=\"btn btn-outline-info m-btn m-btn--icon m-btn--outline-2x\" (click)=\"IsSearch = !IsSearch\">\r\n                <span>\r\n                    <i class=\"fa fa-search\"></i>\r\n                    <span>Search</span>\r\n                </span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table m-table m-table--head-bg-success\">\r\n                <thead>\r\n                  <tr *ngIf=\"!IsSearch\">\r\n                    <th>#</th>\r\n                    <th>Code</th>\r\n                    <th>Name</th>\r\n                    <th>Address</th>\r\n                    <th>Origin</th>\r\n                    <th>TaxCode</th>\r\n                    <th>IsActive</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                    <tr *ngIf=\"IsSearch\">\r\n                        <th>#</th>\r\n                        <th>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search Username...\" />\r\n                        </th>\r\n                        <th>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search Password...\" />\r\n                        </th>\r\n                        <th>\r\n                            <div>\r\n                                <a href=\"#\" class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </a>\r\n                                <a href=\"#\" class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                                    <i class=\"fa fa-refresh\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let ManufacturerEntity of Entities; index as i\">\r\n                    <th scope=\"row\">{{i + 1}}</th>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.Code}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"ManufacturerEntity.Code\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.Name}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"ManufacturerEntity.Name\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.Address}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"ManufacturerEntity.Address\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.Origin}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"ManufacturerEntity.Origin\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.TaxCode}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"ManufacturerEntity.TaxCode\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">{{ManufacturerEntity.IsActive}}</div>\r\n                      <input class=\"input-text form-control\" *ngIf=\"ManufacturerEntity.IsEdit\" type=\"checkbox\" placeholder=\"Enter Name...\" [(ngModel)]=\"ManufacturerEntity.IsActive\" />\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\"!ManufacturerEntity.IsEdit\">\r\n                        <a href=\"#\" class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                           data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(ManufacturerEntity)\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </a>\r\n                        <a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                           data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                           mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(ManufacturerEntity)\" (cancel)=\"cancelClicked = true\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </a>\r\n                      </div>\r\n                      <div *ngIf=\"ManufacturerEntity.IsEdit\">\r\n                        <a href=\"#\" class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                           data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(ManufacturerEntity)\">\r\n                          <i class=\"fa fa-save\"></i>\r\n                        </a>\r\n                        <a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                           data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(ManufacturerEntity)\">\r\n                          <i class=\"fa fa-remove\"></i>\r\n                        </a>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Manufacturer/Manufacturer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Manufacturer_SearchEntity_1 = __webpack_require__("./src/app/Module/MManufacturer/Manufacturer.SearchEntity.ts");
var Manufacturer_Service_1 = __webpack_require__("./src/app/Module/MManufacturer/Manufacturer.Service.ts");
var ManufacturerComponent = /** @class */ (function (_super) {
    __extends(ManufacturerComponent, _super);
    function ManufacturerComponent(cd, ManufacturerService, toastr, vcr) {
        var _this = _super.call(this, ManufacturerService, cd, toastr, vcr) || this;
        _this.ManufacturerService = ManufacturerService;
        _this.ManufacturerSearchEntity = new Manufacturer_SearchEntity_1.ManufacturerSearchEntity();
        _this.Search(_this.ManufacturerSearchEntity);
        return _this;
    }
    ManufacturerComponent.prototype.ngOnInit = function () {
    };
    ManufacturerComponent = __decorate([
        core_1.Component({
            selector: 'app-Manufacturer',
            template: __webpack_require__("./src/app/Component/Manufacturer/Manufacturer.component.html"),
            styles: [__webpack_require__("./src/app/Component/Manufacturer/Manufacturer.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Manufacturer_Service_1.ManufacturerService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}(app_component_1.CommonComponent));
exports.ManufacturerComponent = ManufacturerComponent;


/***/ }),

/***/ "./src/app/Component/OpeningBalance/OpeningBalance.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/OpeningBalance/OpeningBalance.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Opening Balance Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div style=\"margin-top: 5px\">\r\n        <span style=\"font-size:20px; margin-right:7px\">Warehouse: </span>\r\n      </div>\r\n      <div style=\"margin-top: 2px; margin-right: 7px; width: 300px;\">\r\n        <ng-select-custom [Service]=\"WareHouseService\" [Entity]=\"WareHouseSearchEntity.Name\"\r\n                          [BindProperty]=\"'Name'\"\r\n                          (Change)=\"WareHouseSearchEntity.Name = $event?.Name; Search(WareHouseSearchEntity)\"\r\n                          (keyup.enter)=\"Search(WareHouseSearchEntity)\"\r\n                          [IsSearch]=\"true\" [Placeholder]=\"'Search...'\"></ng-select-custom>\r\n      </div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id: 0, IsEdit: true, WareHouseId: WareHouseEntity.Id})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <!--<div style=\"padding-right: 15px;\">\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit:true, Names:{}})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\" *ngIf=\"!IsAdding\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Mã hàng</th>\r\n            <th>Hàng hóa</th>\r\n            <th>Đơn vị</th>\r\n            <th>Số lượng</th>\r\n            <th>Đơn giá</th>\r\n            <th>Thành tiền</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Warehouse...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Product...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Quantity...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let ReceiptNoteEntity of Entities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.WareHouseEntity?.Name}}</span>\r\n              <ng-select [items]=\"WareHouseEntities\"\r\n                         (ngModelChange)=\"ReceiptNoteEntity.WareHouseId=$event; GetProduct(ReceiptNoteEntity.WareHouseId)\"\r\n                         bindLabel=\"Name\"\r\n                         bindValue=\"Id\"\r\n                         placeholder=\"Choose Warehouse...\"\r\n                         [(ngModel)]=\"ReceiptNoteEntity.WareHouseId\" *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.ProductEntity?.Code}}</span>\r\n              <ng-select [items]=\"InventoryEntities\"\r\n                         bindLabel=\"ProductEntity.Code\"\r\n                         bindValue=\"ProductId\"\r\n                         placeholder=\"Choose Product...\"\r\n                         [(ngModel)]=\"ReceiptNoteEntity.ProductId\" *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.Quantity | number}}</span>\r\n              <input currencyMask [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"ReceiptNoteEntity.Quantity\" (ngModelChange)=\"ReceiptNoteEntity.Quantity = $event; ComputeTotal(ReceiptNoteEntity)\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.UnitPrice | number}}</span>\r\n              <input currencyMask min=\"0\" [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter UnitPrice...\" [(ngModel)]=\"ReceiptNoteEntity.UnitPrice\" (ngModelChange)=\"ReceiptNoteEntity.UnitPrice = $event; ComputeTotal(ReceiptNoteEntity)\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.Total | number}}</span>\r\n              <input currencyMask min=\"0\" [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter Total...\" [(ngModel)]=\"ReceiptNoteEntity.Total\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.Total | number}}</span>\r\n              <input currencyMask min=\"0\" [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter Total...\" [(ngModel)]=\"ReceiptNoteEntity.Total\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!ReceiptNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(ReceiptNoteEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search(CategorySearchEntity)\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/OpeningBalance/OpeningBalance.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var OpeningBalance_SearchEntity_1 = __webpack_require__("./src/app/Module/MOpeningBalance/OpeningBalance.SearchEntity.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var OpeningBalance_Service_1 = __webpack_require__("./src/app/Module/MOpeningBalance/OpeningBalance.Service.ts");
var WareHouse_Entity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Entity.ts");
var WareHouse_SearchEntity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.SearchEntity.ts");
var OpeningBalanceComponent = /** @class */ (function (_super) {
    __extends(OpeningBalanceComponent, _super);
    function OpeningBalanceComponent(OpeningBalanceService, WareHouseService, Router, cd, toastr, vcr) {
        var _this = _super.call(this, OpeningBalanceService, cd, toastr, vcr) || this;
        _this.OpeningBalanceService = OpeningBalanceService;
        _this.WareHouseService = WareHouseService;
        _this.Router = Router;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.OpeningBalanceSearchEntity = new OpeningBalance_SearchEntity_1.OpeningBalanceSearchEntity();
        _this.WareHouseEntity = new WareHouse_Entity_1.WareHouseEntity();
        _this.WareHouseEntities = [];
        _this.WareHouseSearchEntity = new WareHouse_SearchEntity_1.WareHouseSearchEntity();
        _this.IsSearch = false;
        return _this;
    }
    OpeningBalanceComponent.prototype.ngOnInit = function () {
    };
    OpeningBalanceComponent = __decorate([
        core_1.Component({
            selector: 'app-openingbalance',
            template: __webpack_require__("./src/app/Component/OpeningBalance/OpeningBalance.component.html"),
            styles: [__webpack_require__("./src/app/Component/OpeningBalance/OpeningBalance.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [OpeningBalance_Service_1.OpeningBalanceService,
            WareHouse_Service_1.WareHouseService,
            router_1.Router,
            core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager,
            core_1.ViewContainerRef])
    ], OpeningBalanceComponent);
    return OpeningBalanceComponent;
}(app_component_1.CommonComponent));
exports.OpeningBalanceComponent = OpeningBalanceComponent;


/***/ }),

/***/ "./src/app/Component/Operation/Operation.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Operation/Operation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Operation Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id: 0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\">#</th>\r\n            <th>Path</th>\r\n            <th>Method</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Path...\" [(ngModel)]=\"OperationSearchEntity.Path\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Method...\" [(ngModel)]=\"OperationSearchEntity.Method\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(OperationSearchEntity, false)\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(OperationSearchEntity, false)\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let OperationEntity of Entities; index as i\">\r\n            <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!OperationEntity.IsEdit\">{{OperationEntity.Path}}</div>\r\n              <input class=\"form-control\" *ngIf=\"OperationEntity.IsEdit\" placeholder=\"Enter Path...\" [(ngModel)]=\"OperationEntity.Path\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!OperationEntity.IsEdit\">{{OperationEntity.Method}}</div>\r\n              <input class=\"form-control\" *ngIf=\"OperationEntity.IsEdit\" placeholder=\"Enter Method...\" [(ngModel)]=\"OperationEntity.Method\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!OperationEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(OperationEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(OperationEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"OperationEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(OperationEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(OperationEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search(OperationSearchEntity)\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Operation/Operation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Operation_Service_1 = __webpack_require__("./src/app/Module/MOperation/Operation.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Operation_SearchEntity_1 = __webpack_require__("./src/app/Module/MOperation/Operation.SearchEntity.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var OperationComponent = /** @class */ (function (_super) {
    __extends(OperationComponent, _super);
    function OperationComponent(OperationService, cd, toastr, vcr) {
        var _this = _super.call(this, OperationService, cd, toastr, vcr) || this;
        _this.OperationService = OperationService;
        _this.toastr = toastr;
        _this.OperationSearchEntity = new Operation_SearchEntity_1.OperationSearchEntity();
        _this.OperationSearchEntity = new Operation_SearchEntity_1.OperationSearchEntity();
        _this.Search(_this.OperationSearchEntity);
        return _this;
    }
    OperationComponent.prototype.ngOnInit = function () {
    };
    OperationComponent = __decorate([
        core_1.Component({
            selector: 'app-Operation',
            template: __webpack_require__("./src/app/Component/Operation/Operation.component.html"),
            styles: [__webpack_require__("./src/app/Component/Operation/Operation.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Operation_Service_1.OperationService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], OperationComponent);
    return OperationComponent;
}(app_component_1.CommonComponent));
exports.OperationComponent = OperationComponent;


/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderDetail.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Phiếu nhập số:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Ngày chứng từ:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Ngày hệ thống:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Nhà cung cấp:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Mã NCC:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Mã số thuế:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Địa chỉ:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Điện thoại:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Diễn giải:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"\">\r\n      <p style=\"margin-bottom: 0\">Người giao:</p>\r\n      <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n    </div>\r\n  </div>\r\n  <app-OrderLine></app-OrderLine>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n      <div class=\"ui right aligned category search\" style=\"margin-bottom: 17px; float: right\">\r\n        <button class=\"btn btn-success\" style=\"margin-right:10px;\"><i class=\"fa fa-check\"></i> Gửi</button>\r\n        <button class=\"btn btn-info\" style=\"margin-right: 10px\"><i class=\"fa fa-print\"> In phiếu</i></button>\r\n        <button class=\"btn btn-danger\" style=\"margin-right:10px;\"><i class=\"fa fa-times\"></i> Hủy</button>\r\n        <button class=\"btn btn-warning\" style=\"color: white\"><i class=\"fa fa-pencil\"></i> Nhập lại</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var Order_Service_1 = __webpack_require__("./src/app/Module/MOrder/Order.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var OrderDetailComponent = /** @class */ (function (_super) {
    __extends(OrderDetailComponent, _super);
    function OrderDetailComponent(cd, OrderService, toastr, vcr, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, OrderService, cd, toastr, vcr) || this;
        _this.OrderService = OrderService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.OrderId = 0;
        _this.route.params.subscribe(function (params) {
            if (params.OrderId !== undefined) {
                _this.OrderId = params.OrderId;
                _this.GetId(_this.OrderId);
            }
        });
        return _this;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-OrderDetail',
            template: __webpack_require__("./src/app/Component/Order/Detail/OrderDetail.component.html"),
            styles: [__webpack_require__("./src/app/Component/Order/Detail/OrderDetail.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Order_Service_1.OrderService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}(app_component_1.CommonComponent));
exports.OrderDetailComponent = OrderDetailComponent;


/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderLine.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderLine.component.html":
/***/ (function(module, exports) {

module.exports = "<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group\">\r\n        <label>Order Number:</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OrderLineEntity.Invoice\" placeholder=\"Jane Doe\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Warehouse: </label>\r\n        <ng-select-custom [Service]=\"WarehouseService\" [SearchProperty]=\"'Name'\"\r\n                          [Init]=\"{Display : OrderLineEntity.WarehouseEntity?.Name}\" (Change)=\"OrderLineEntity.WarehouseEntity = $event?.Name\">\r\n          <ng-template #templateRef let-default let-Name=\"Name\">\r\n            <span>{{Name}}</span>\r\n          </ng-template>\r\n        </ng-select-custom>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover \">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Product Name</th>\r\n            <th>Pack Name</th>\r\n            <th>Quantity</th>\r\n            <th>UnitPrice</th>\r\n            <th>Price</th>\r\n            <th>TaxAmount</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let OrderLineEntity of Entities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <div class=\"full-width\">\r\n                <ng-select-custom [Service]=\"ProductService\" [SearchProperty]=\"'Code'\"\r\n                                  [Init]=\"{Code : OrderLineEntity.ProductEntity?.Code}\" (Change)= \"OrderLineEntity.ProductId = $event?.Id\">\r\n                  <ng-template #templateRef let-default let-Code=\"Code\">\r\n                    <span>{{Code}}</span>\r\n                  </ng-template>\r\n                </ng-select-custom>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <input class=\"form-control fullwidth\" placeholder=\"Enter Pack Name...\" [(ngModel)]=\"OrderLineEntity.PackName\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control fullwidth\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"OrderLineEntity.Quantity\" currencyMask/>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control fullwidth\" placeholder=\"Enter Price...\" [(ngModel)]=\"OrderLineEntity.Price\" currencyMask />\r\n            </td>\r\n            <td>\r\n              <div class=\"full-width\">\r\n                <ng-select-custom [Service]=\"TaxService\" [SearchProperty]=\"'Code'\"\r\n                                  [Init]=\"{Code : OrderLineEntity.Tax}\" (Change)=\"OrderLineEntity.Tax = $event?.Code\">\r\n                  <ng-template #templateRef let-default let-Code=\"Code\">\r\n                    <span>{{Code}}</span>\r\n                  </ng-template>\r\n                </ng-select-custom>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n              <a class=\"addnewrow\" style=\"\"><i class=\"fa fa-plus\"></i> Add new row</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Order/Detail/OrderLine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var OrderLine_SearchEntity_1 = __webpack_require__("./src/app/Module/MOrderLine/OrderLine.SearchEntity.ts");
var OrderLine_Service_1 = __webpack_require__("./src/app/Module/MOrderLine/OrderLine.Service.ts");
var Tax_Service_1 = __webpack_require__("./src/app/Module/MTax/Tax.Service.ts");
var OrderLineComponent = /** @class */ (function (_super) {
    __extends(OrderLineComponent, _super);
    function OrderLineComponent(cd, OrderLineService, toastr, vcr, TaxService, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, OrderLineService, cd, toastr, vcr) || this;
        _this.OrderLineService = OrderLineService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.FilterEntity = new OrderLine_SearchEntity_1.OrderLineSearchEntity();
        _this.route.params.subscribe(function (params) {
            if (params.OrderId !== undefined) {
                _this.OrderId = params.OrderId;
                _this.FilterEntity.OrderId = _this.OrderId;
                _this.Search(_this.FilterEntity);
            }
        });
        return _this;
    }
    OrderLineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], OrderLineComponent.prototype, "OrderId", void 0);
    OrderLineComponent = __decorate([
        core_1.Component({
            selector: 'app-OrderLine',
            template: __webpack_require__("./src/app/Component/Order/Detail/OrderLine.component.html"),
            styles: [__webpack_require__("./src/app/Component/Order/Detail/OrderLine.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, OrderLine_Service_1.OrderLineService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef, Tax_Service_1.TaxService,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], OrderLineComponent);
    return OrderLineComponent;
}(app_component_1.CommonComponent));
exports.OrderLineComponent = OrderLineComponent;


/***/ }),

/***/ "./src/app/Component/Order/Order.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/Order/Order.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Order Management\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddOrder()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div>\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Customer</th>\r\n            <th>Code</th>\r\n            <th>Status</th>\r\n            <th>Total Price</th>\r\n            <th>Method</th>\r\n            <th>Shipment Detail</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"CustomerService\" [(ngModel)]=\"SearchEntity.CustomerId\"\r\n                                [SearchProperty]=\"'Display'\"\r\n                                [BindProperty]=\"'Id'\" (Change)=\"Search(SearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search Customer...'\"></ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Code...\"  [(ngModel)]=\"SearchEntity.Code\"/>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Status...\"  [(ngModel)]=\"SearchEntity.Status\"/>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Total Price...\"/>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Method...\"  [(ngModel)]=\"SearchEntity.Method\"/>\r\n            </td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"ShipmentDetailService\" [(ngModel)]=\"SearchEntity.ShipmentDetailId\"\r\n                                [BindProperty]=\"'Name'\" (Change)=\"Search(SearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search ShipmentDetail...'\"></ng-select-custom>\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let OrderEntity of Entities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.CustomerEntity?.Display}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.Code}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.Status}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.Totalprice | number}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.Method | number}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!OrderEntity.IsEdit\">{{OrderEntity.ShipmentDetailEntity?.Display}}</span>\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(OrderEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(OrderEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchOrder()\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Order/Order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Order_Service_1 = __webpack_require__("./src/app/Module/MOrder/Order.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Customer_Service_1 = __webpack_require__("./src/app/Module/MCustomer/Customer.Service.ts");
var ShipmentDetail_Service_1 = __webpack_require__("./src/app/Module/MShipmentDetail/ShipmentDetail.Service.ts");
var Order_SearchEntity_1 = __webpack_require__("./src/app/Module/MOrder/Order.SearchEntity.ts");
var OrderComponent = /** @class */ (function (_super) {
    __extends(OrderComponent, _super);
    function OrderComponent(cd, OrderService, toastr, vcr, CustomerService, ShipmentDetailService) {
        var _this = _super.call(this, OrderService, cd, toastr, vcr) || this;
        _this.CustomerService = CustomerService;
        _this.ShipmentDetailService = ShipmentDetailService;
        _this.SearchEntity = new Order_SearchEntity_1.OrderSearchEntity();
        _this.Search(_this.SearchEntity);
        return _this;
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-Order',
            template: __webpack_require__("./src/app/Component/Order/Order.component.html"),
            styles: [__webpack_require__("./src/app/Component/Order/Order.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Order_Service_1.OrderService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Customer_Service_1.CustomerService, ShipmentDetail_Service_1.ShipmentDetailService])
    ], OrderComponent);
    return OrderComponent;
}(app_component_1.CommonComponent));
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "./src/app/Component/Permission/Permission.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Permission/Permission.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Permission Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddPermission({Id: 0, IsEdit: true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th>User</th>\r\n                        <th>Role</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"text-center\">#</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search User...\"/>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Role...\" />\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let PermissionEntity of Entities; index as i\">\r\n                        <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                            <div *ngIf=\"!PermissionEntity.IsEdit\">{{PermissionEntity.UserEntity.Name}}</div>\r\n                            <input class=\"input-text\" *ngIf=\"PermissionEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"PermissionEntity.UserEntity.Name\" />\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!PermissionEntity.IsEdit\">{{PermissionEntity.RoleEntity.Name}}</div>\r\n                            <input class=\"input-text\" *ngIf=\"PermissionEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"PermissionEntity.RoleEntity.Name\" />\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!PermissionEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(PermissionEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(PermissionEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"PermissionEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(PermissionEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button  class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(PermissionEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Permission/Permission.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Permission_SearchEntity_1 = __webpack_require__("./src/app/Module/MPermission/Permission.SearchEntity.ts");
var Permission_Service_1 = __webpack_require__("./src/app/Module/MPermission/Permission.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var PermissionComponent = /** @class */ (function (_super) {
    __extends(PermissionComponent, _super);
    function PermissionComponent(cd, PermissionService, toastr, vcr) {
        var _this = _super.call(this, PermissionService, cd, toastr, vcr) || this;
        _this.PermissionService = PermissionService;
        _this.PermissionSearchEntity = new Permission_SearchEntity_1.PermissionSearchEntity();
        _this.Search(_this.PermissionSearchEntity);
        return _this;
    }
    PermissionComponent.prototype.ngOnInit = function () {
    };
    PermissionComponent = __decorate([
        core_1.Component({
            selector: 'app-Permission',
            template: __webpack_require__("./src/app/Component/Permission/Permission.component.html"),
            styles: [__webpack_require__("./src/app/Component/Permission/Permission.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Permission_Service_1.PermissionService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], PermissionComponent);
    return PermissionComponent;
}(app_component_1.CommonComponent));
exports.PermissionComponent = PermissionComponent;


/***/ }),

/***/ "./src/app/Component/Product/Product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Product Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n    <div style=\"padding-right: 15px;\">\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddProduct()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Code</th>\r\n            <th>Category</th>\r\n            <th>Unit</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"SearchCode...\" [(ngModel)]=\"ProductSearchEntity.Code\" />\r\n            </td>\r\n            <td>\r\n                <ng-select [items]=\"CategoryEntities\"\r\n                           bindLabel=\"Code\"\r\n                           bindValue=\"Id\"\r\n                           placeholder=\"Search Category...\"\r\n                           [(ngModel)]=\"ProductSearchEntity.CategoryId\">\r\n                </ng-select>\r\n            </td>\r\n            <td></td>\r\n            <td class=\"text-center\">\r\n                <div>\r\n                    <a href=\"#\" class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"SearchProduct(CategorySearchEntity)\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </a>\r\n                    <a href=\"#\" class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"SearchProduct()\">\r\n                        <i class=\"fa fa-refresh\"></i>\r\n                    </a>\r\n                </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let ProductEntity of ProductEntities; index as i\">\r\n            <td class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n                <span *ngIf=\"!ProductEntity.IsEdit\">{{ProductEntity.Code}}</span>\r\n                <input class=\"form-control\" *ngIf=\"ProductEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"ProductEntity.Code\" />\r\n            </td>\r\n            <td>\r\n                <span *ngIf=\"!ProductEntity.IsEdit\">{{ProductEntity.CategoryEntity?.Code}}</span>\r\n                <ng-select [items]=\"CategoryEntities\"\r\n                           bindLabel=\"Code\"\r\n                           bindValue=\"Id\"\r\n                           placeholder=\"Choose Category...\"\r\n                           [(ngModel)]=\"ProductEntity.CategoryId\" *ngIf=\"ProductEntity.IsEdit\">\r\n                </ng-select>\r\n            </td>\r\n            <td>\r\n                <span *ngIf=\"!ProductEntity.IsEdit\">{{ProductEntity.Unit}}</span>\r\n                <input class=\"form-control\" *ngIf=\"ProductEntity.IsEdit\" placeholder=\"Enter Unit...\" [(ngModel)]=\"ProductEntity.Unit\" />\r\n            </td>\r\n            <td class=\"text-center\">\r\n                <div *ngIf=\"!ProductEntity.IsEdit\">\r\n                    <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"ToProductDetail(ProductEntity)\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                    </button>\r\n                    <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                            mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteProduct(ProductEntity)\" (cancel)=\"cancelClicked = true\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                    </button>\r\n                </div>\r\n                <div *ngIf=\"ProductEntity.IsEdit\">\r\n                    <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveProduct(ProductEntity)\">\r\n                        <i class=\"fa fa-save\"></i>\r\n                    </button>\r\n                    <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelProduct(ProductEntity)\">\r\n                        <i class=\"fa fa-remove\"></i>\r\n                    </button>\r\n                </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchProduct(SearchEntity)\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Product/Product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var Product_Service_1 = __webpack_require__("./src/app/Module/MProduct/Product.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var Product_SearchEntity_1 = __webpack_require__("./src/app/Module/MProduct/Product.SearchEntity.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Category_Service_1 = __webpack_require__("./src/app/Module/MCategory/Category.Service.ts");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(cd, ProductService, toastr, vcr, Router, CategoryService) {
        var _this = this;
        this.ProductService = ProductService;
        this.toastr = toastr;
        this.Router = Router;
        this.CategoryService = CategoryService;
        this.ProductEntities = [];
        this.PagingModel = new paging_model_1.PagingModel(7, 10, function (data) {
        });
        this.ProductEntity = new Product_Entity_1.ProductEntity();
        this.ProductSearchEntity = new Product_SearchEntity_1.ProductSearchEntity();
        this.ModalProductEntity = new Product_Entity_1.ProductEntity();
        this.CategoryEntities = [];
        this.EditModalComponent = new modal_component_1.ModalComponent();
        this.IsSearch = false;
        this.toastr.setRootViewContainerRef(vcr);
        this.SearchProduct(this.ProductSearchEntity);
        this.CategoryService.Gets().subscribe(function (res) {
            _this.CategoryEntities = res;
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.SearchProduct = function (SearchEntity, IsRefersh) {
        var _this = this;
        if (IsRefersh) {
            SearchEntity = Object.assign(new Product_SearchEntity_1.ProductSearchEntity());
        }
        else {
            SearchEntity.Skip = this.PagingModel.Take * this.PagingModel.Active;
            SearchEntity.Take = this.PagingModel.Take;
        }
        this.ProductService.Gets(SearchEntity).subscribe(function (res) {
            if (res) {
                _this.ProductEntities = res;
                _this.ProductEntities = _this.ProductEntities.map(function (value) {
                    value.IsEdit = false;
                    return value;
                });
                _this.Count(SearchEntity);
            }
        }, function (err) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    ProductComponent.prototype.Count = function (SearchEntity) {
        var _this = this;
        this.ProductService.Count(SearchEntity).subscribe(function (data) {
            _this.PagingModel.TotalPage = Math.ceil(data / _this.PagingModel.Take);
        });
    };
    ProductComponent.prototype.ToProductDetail = function (ProductEntity) {
        if (ProductEntity.Id !== null) {
            this.Router.navigate(['/Product/' + ProductEntity.Id + '/ProductDetail']);
        }
    };
    ProductComponent.prototype.AddProduct = function () {
        var Product = new Product_Entity_1.ProductEntity();
        Product.IsEdit = true;
        this.ProductEntities.unshift(Product);
    };
    ProductComponent.prototype.DeleteProduct = function (ProductEntity) {
        var _this = this;
        this.ProductService.Delete(ProductEntity.Id).subscribe(function (res) {
            if (res) {
                var IndexNumber = _this.ProductEntities.indexOf(ProductEntity);
                _this.ProductEntities.splice(IndexNumber, 1);
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError('Something wrong!');
        });
    };
    ProductComponent.prototype.SaveProduct = function (ProductEntity) {
        var _this = this;
        this.ProductService.Create(ProductEntity).subscribe(function (res) {
            var IndexNumber = _this.ProductEntities.indexOf(ProductEntity);
            Object.assign(_this.ProductEntities[IndexNumber], res);
            _this.ProductEntities[IndexNumber].IsEdit = false;
            _this.toastr.ShowSuccess();
        }, function (err) {
            _this.toastr.ShowError('Something wrong!');
        });
    };
    ProductComponent.prototype.CancelProduct = function (ProductEntity) {
        var index = this.ProductEntities.indexOf(ProductEntity);
        this.ProductEntities.splice(index, 1);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-Product',
            template: __webpack_require__("./src/app/Component/Product/Product.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Product_Service_1.ProductService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef, router_1.Router, Category_Service_1.CategoryService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/Component/Product/ProductDetail/ProductDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        ProductDetail Management\r\n      </h3>\r\n      <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\" style=\"margin-top: 1.5rem\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <!--begin::Portlet-->\r\n          <div class=\"m-portlet\">\r\n            <div class=\"m-portlet__head header-section modify-header-porlet\">\r\n              <div class=\"m-portlet__head-caption\">\r\n                <div class=\"m-portlet__head-title\">\r\n                  <span class=\"m-portlet__head-icon m--hide\">\r\n                    <i class=\"la la-gear\"></i>\r\n                  </span>\r\n                  <h3 class=\"m-portlet__head-text white-text\">\r\n                    Product Section\r\n                  </h3>\r\n                </div>\r\n                <span class=\"icon-toogle\" (click)=\"ToogleProduct = !ToogleProduct\">\r\n                  <i class=\"fa fa-angle-{{ToogleProduct ? 'down' : 'right'}} font-white fa-2x\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <!--begin::Form-->\r\n            <div class=\"m-portlet__body modify-body-porlet\" *ngIf=\"ToogleProduct\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"m--margin-top-10\">\r\n                    <span class=\"header-section-group\">Product Information: </span>\r\n                  </div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Code</th>\r\n                        <th>Category</th>\r\n                        <th>Unit</th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>\r\n                          <input class=\"form-control\" placeholder=\"Enter Code...\" [(ngModel)]=\"ProductDetailEntity.Code\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td>\r\n                          <ng-select [items]=\"CategoryEntities\"\r\n                                     bindLabel=\"Code\"\r\n                                     bindValue=\"Id\"\r\n                                     placeholder=\"Choose Category...\"\r\n                                     [(ngModel)]=\"ProductDetailEntity.CategoryId\" [ngModelOptions]=\"{standalone: true}\">\r\n                          </ng-select>\r\n                        </td>\r\n                        <td>\r\n                          <input class=\"form-control\" placeholder=\"Enter Unit...\" [(ngModel)]=\"ProductDetailEntity.Unit\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>\r\n                            <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveProductDetail(ProductDetailEntity)\">\r\n                              <i class=\"fa fa-save\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <!--<div class=\"row\">\r\n                  <div class=\"m--margin-top-10 fullwidth\">\r\n                    <span class=\"header-section-group\">Tax Information: </span>\r\n                    <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x pull-right\" (click)=\"AddTax()\">\r\n                      <span>\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span>Add Tax</span>\r\n                      </span>\r\n                    </button>\r\n                  </div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th>Code</th>\r\n                        <th>Percentage</th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let TaxEntity of TaxEntities; let i = index\">\r\n                        <td class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                          <span *ngIf=\"!TaxEntity.IsEdit\">{{TaxEntity.Code}}</span>\r\n                          <input *ngIf=\"TaxEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Code...\" [(ngModel)]=\"TaxEntity.Code\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"!TaxEntity.IsEdit\">{{TaxEntity.Percentage | number}}</span>\r\n                          <input *ngIf=\"TaxEntity.IsEdit\" type=\"number\" class=\"form-control\" placeholder=\"Enter Percentage...\" [(ngModel)]=\"TaxEntity.Percentage\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div *ngIf=\"!TaxEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"EditTax(TaxEntity)\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                    mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteTax(TaxEntity)\" (cancel)=\"cancelClicked = true\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <div *ngIf=\"TaxEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveTax(TaxEntity)\">\r\n                              <i class=\"fa fa-save\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelTax(TaxEntity)\">\r\n                              <i class=\"fa fa-remove\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>-->\r\n                <div class=\"row\">\r\n                  <div class=\"m--margin-top-10 fullwidth\">\r\n                    <span class=\"header-section-group\">Pack Information: </span>\r\n                    <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x pull-right\" (click)=\"AddPack()\">\r\n                      <span>\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span>Add Pack</span>\r\n                      </span>\r\n                    </button>\r\n                  </div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th>UnitPrice</th>\r\n                        <th>Quantity</th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let PackEntity of PackEntities; let i = index\">\r\n                        <td class=\"text-center\">{{i + 1}}</td>\r\n                        <td>\r\n                          <span *ngIf=\"!PackEntity.IsEdit\">{{PackEntity.UnitPrice}}</span>\r\n                          <input *ngIf=\"PackEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter UnitPrice...\" [(ngModel)]=\"PackEntity.UnitPrice\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"!PackEntity.IsEdit\">{{PackEntity.Quantity}}</span>\r\n                          <input *ngIf=\"PackEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"PackEntity.Quantity\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div *ngIf=\"!PackEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"EditPack(PackEntity)\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                    mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeletePack(PackEntity)\" (cancel)=\"cancelClicked = true\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <div *ngIf=\"PackEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SavePack(PackEntity)\">\r\n                              <i class=\"fa fa-save\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelPack(PackEntity)\">\r\n                              <i class=\"fa fa-remove\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"m--margin-top-10 fullwidth\">\r\n                    <span class=\"header-section-group\">Discount Information: </span>\r\n                    <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x pull-right\" (click)=\"AddDiscount()\">\r\n                      <span>\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span>Add Discount</span>\r\n                      </span>\r\n                    </button>\r\n                  </div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"text-center\">#</th>\r\n                        <th>Min</th>\r\n                        <th>Max</th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let DiscountEntity of DiscountEntities; let i = index\">\r\n                        <td class=\"text-center\">\r\n                          {{i + 1}}\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"!DiscountEntity.IsEdit\">{{DiscountEntity.Max}}</span>\r\n                          <input *ngIf=\"DiscountEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Max...\" [(ngModel)]=\"DiscountEntity.Max\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"!DiscountEntity.IsEdit\">{{DiscountEntity.Min}}</span>\r\n                          <input *ngIf=\"DiscountEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Min...\" [(ngModel)]=\"DiscountEntity.Min\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div *ngIf=\"!DiscountEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"EditDiscount(DiscountEntity)\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                    mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteDiscount(DiscountEntity)\" (cancel)=\"cancelClicked = true\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <div *ngIf=\"DiscountEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveDiscount(DiscountEntity)\">\r\n                              <i class=\"fa fa-save\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelDiscount(DiscountEntity)\">\r\n                              <i class=\"fa fa-remove\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"m--margin-top-10 fullwidth\">\r\n                    <span class=\"header-section-group\">Image: </span>\r\n                    <FileBrowser class=\"pull-right\" (finished)=\"LoadImage($event)\"></FileBrowser>\r\n                  </div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"text-center\" width=\"5%\">#</th>\r\n                        <th width=\"20%\">Path</th>\r\n                        <th width=\"50%\">Image</th>\r\n                        <th width=\"15%\">Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let FileEntity of ProducPictureEntities; let i = index\">\r\n                        <td class=\"text-center\">\r\n                          {{i + 1}}\r\n                        </td>\r\n                        <td>\r\n                          <span>{{FileEntity.Path}}</span>\r\n                        </td>\r\n                        <td>\r\n                          <img [src]=\"FileEntity.Path\" alt=\"Smiley face\">\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                    mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteImage(FileEntity)\" (cancel)=\"cancelClicked = true\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--end::Form-->\r\n          </div>\r\n          <!--end::Portlet-->\r\n          <!--begin::Portlet-->\r\n          <div class=\"m-portlet\">\r\n            <div class=\"m-portlet__head header-section modify-header-porlet\">\r\n              <div class=\"m-portlet__head-caption\">\r\n                <div class=\"m-portlet__head-title\">\r\n                  <span class=\"m-portlet__head-icon m--hide\">\r\n                    <i class=\"la la-gear\"></i>\r\n                  </span>\r\n                  <h3 class=\"m-portlet__head-text white-text\">\r\n                    Product Value Section\r\n                  </h3>\r\n                </div>\r\n                <span class=\"icon-toogle\" (click)=\"ToogleProductValue = !ToogleProductValue\">\r\n                  <i class=\"fa fa-angle-{{ToogleProductValue ? 'down' : 'right'}} font-white fa-2x\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-portlet__body modify-body-porlet\">\r\n              <div class=\"col-md-12\">\r\n                <ul class=\"nav nav-tabs\">\r\n                  <li class=\"nav-item\" *ngFor=\"let Language of LanguageEntities\">\r\n                    <a class=\"nav-link modify-fontsize\" [ngClass]=\"{'active': Language.IsActive}\" (click)=\"ChangeLanguage(Language)\">{{Language.Code}}</a>\r\n                  </li>\r\n                </ul>\r\n                <div>\r\n                  <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th width=\"5%\">#</th>\r\n                        <th width=\"12%\">Code</th>\r\n                        <th width=\"12%\">Name</th>\r\n                        <th width=\"64%\">Value</th>\r\n                        <th width=\"11%\">Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let ProductValueEntity of ProductValueEntities; let i = index\">\r\n                        <td class=\"text-center\">\r\n                          {{i + 1}}<br />\r\n                        </td>\r\n                        <td>\r\n                          <span>{{ProductValueEntity.Code}}</span>\r\n                        </td>\r\n                        <td>\r\n                          <span>{{ProductValueEntity.Name}}</span>\r\n                        </td>\r\n                        <td>\r\n                          <div [innerHTML]=\"ProductValueEntity.Value\" *ngIf=\"!ProductValueEntity.IsEdit\"></div>\r\n                          <div>\r\n                            <quill-editor [(ngModel)]=\"ProductValueEntity.Value\" [options]=\"editorOptions\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"ProductValueEntity.IsEdit\"></quill-editor>\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div *ngIf=\"!ProductValueEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"EditProductValue(ProductValueEntity)\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </button>\r\n                          </div>\r\n                          <div *ngIf=\"ProductValueEntity.IsEdit\">\r\n                            <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveProductValue(ProductValueEntity)\">\r\n                              <i class=\"fa fa-save\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelProductValue(ProductValueEntity)\">\r\n                              <i class=\"fa fa-remove\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--end::Portlet-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Component/Product/ProductDetail/ProductDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var Product_Service_1 = __webpack_require__("./src/app/Module/MProduct/Product.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Category_Service_1 = __webpack_require__("./src/app/Module/MCategory/Category.Service.ts");
var Language_Service_1 = __webpack_require__("./src/app/Module/MLanguage/Language.Service.ts");
var ProductValue_Entity_1 = __webpack_require__("./src/app/Module/MProductValue/ProductValue.Entity.ts");
var ProductValue_Service_1 = __webpack_require__("./src/app/Module/MProductValue/ProductValue.Service.ts");
var ProductValue_SearchEntity_1 = __webpack_require__("./src/app/Module/MProductValue/ProductValue.SearchEntity.ts");
var Tax_Service_1 = __webpack_require__("./src/app/Module/MTax/Tax.Service.ts");
var Pack_Service_1 = __webpack_require__("./src/app/Module/MPack/Pack.Service.ts");
var Discount_Service_1 = __webpack_require__("./src/app/Module/MDiscount/Discount.Service.ts");
var Tax_Entity_1 = __webpack_require__("./src/app/Module/MTax/Tax.Entity.ts");
var Tax_SearchEntity_1 = __webpack_require__("./src/app/Module/MTax/Tax.SearchEntity.ts");
var Discount_Entity_1 = __webpack_require__("./src/app/Module/MDiscount/Discount.Entity.ts");
var Pack_Entity_1 = __webpack_require__("./src/app/Module/MPack/Pack.Entity.ts");
var Pack_SearchEntity_1 = __webpack_require__("./src/app/Module/MPack/Pack.SearchEntity.ts");
var Discount_SearchEntity_1 = __webpack_require__("./src/app/Module/MDiscount/Discount.SearchEntity.ts");
var ProductPicture_Service_1 = __webpack_require__("./src/app/Module/MProductPicture/ProductPicture.Service.ts");
var ProductPicture_Entity_1 = __webpack_require__("./src/app/Module/MProductPicture/ProductPicture.Entity.ts");
var ProductPicture_SearchEntity_1 = __webpack_require__("./src/app/Module/MProductPicture/ProductPicture.SearchEntity.ts");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(ProductDetailService, toastr, LanguageService, CategoryService, ProductValueService, TaxService, PackService, DiscountService, ProductPictureService, vcr, route) {
        var _this = this;
        this.ProductDetailService = ProductDetailService;
        this.toastr = toastr;
        this.LanguageService = LanguageService;
        this.CategoryService = CategoryService;
        this.ProductValueService = ProductValueService;
        this.TaxService = TaxService;
        this.PackService = PackService;
        this.DiscountService = DiscountService;
        this.ProductPictureService = ProductPictureService;
        this.route = route;
        this.htmlContent = 'abc';
        this.ProductDetailEntity = new Product_Entity_1.ProductEntity();
        this.ProductValueEntity = new ProductValue_Entity_1.ProductValueEntity();
        this.TaxEntities = [];
        this.TaxEntity = new Tax_Entity_1.TaxEntity();
        this.TempTax = {};
        this.PackEntities = [];
        this.PackEntity = new Pack_Entity_1.PackEntity();
        this.TempPack = {};
        this.DiscountEntities = [];
        this.DiscountEntity = new Discount_Entity_1.DiscountEntity();
        this.TempDiscount = {};
        this.ProductValueEntities = [];
        this.ModalProductDetailEntity = new Product_Entity_1.ProductEntity();
        this.EditModalComponent = new modal_component_1.ModalComponent();
        this.TempProductValueEntity = {};
        this.CategoryEntities = [];
        this.LanguageEntities = [];
        this.ProducPictureEntities = [];
        this.IsSearch = false;
        this.editorOptions = {
            placeholder: 'Insert content...',
            modules: {
                toolbar: {
                    container: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ],
                    handlers: {}
                }
            },
            theme: 'snow'
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.CategoryService.Gets().subscribe(function (res) {
            _this.CategoryEntities = res;
        }, function (err) {
            _this.toastr.ShowError();
        });
        this.LanguageService.Gets().subscribe(function (res) {
            if (res) {
                _this.LanguageEntities = res;
                _this.LanguageEntities = _this.LanguageEntities.map(function (item) {
                    item.IsEdit = false;
                    return item;
                });
            }
        });
        this.route.params.subscribe(function (params) {
            if (params.ProductId !== undefined) {
                _this.ProductId = params.ProductId;
                if (params.ProductId !== '0') {
                    _this.ProductDetailService.GetId(_this.ProductId).subscribe(function (res) {
                        if (res) {
                            _this.ProductDetailEntity = JSON.parse(JSON.stringify(res));
                        }
                    }, function (err) {
                        _this.toastr.ShowError();
                    });
                    //Get list Tax:
                    var TaxSearch = new Tax_SearchEntity_1.TaxSearchEntity();
                    TaxSearch.ProductId = _this.ProductId;
                    _this.TaxService.Gets(TaxSearch).subscribe(function (res) {
                        _this.TaxEntities = res;
                    });
                    //Get list Pack:
                    var PackSearch = new Pack_SearchEntity_1.PackSearchEntity();
                    PackSearch.ProductId = _this.ProductId;
                    _this.PackService.Gets(PackSearch).subscribe(function (res) {
                        _this.PackEntities = res;
                    });
                    //Get list Discount:
                    var DiscountSearch = new Discount_SearchEntity_1.DiscountSearchEntity();
                    DiscountSearch.ProductId = _this.ProductId;
                    _this.DiscountService.Gets(DiscountSearch).subscribe(function (res) {
                        _this.DiscountEntities = res;
                    });
                    //Get list image:
                    var SearchProductPicture = new ProductPicture_SearchEntity_1.ProductPictureSearchEntity();
                    SearchProductPicture.ProductId = _this.ProductId;
                    _this.ProductPictureService.Gets(SearchProductPicture).subscribe(function (res) {
                        _this.ProducPictureEntities = res;
                    });
                }
            }
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.ToogleProduct = true;
        this.ToogleProductValue = true;
    };
    //Product Info Section
    ProductDetailComponent.prototype.SaveProductDetail = function (ProductDetailEntity) {
        var _this = this;
        ProductDetailEntity.Id = this.ProductId;
        this.ProductDetailService.Update(ProductDetailEntity).subscribe(function (res) {
            _this.toastr.ShowSuccess();
        }, function (err) {
            _this.toastr.ShowError();
        });
    };
    //Tax Info Section:
    //AddTax() {
    //  let value = new TaxEntity();
    //  value.IsEdit = true;
    //  this.TaxEntities.unshift(value);
    //}
    //SaveTax(TaxEntity: TaxEntity) {
    //    TaxEntity.ProductId = this.ProductId;
    //    if (TaxEntity.Id == null || TaxEntity.Id == undefined || TaxEntity.Id == 0) {
    //      this.TaxService.Create(TaxEntity).subscribe(res => {
    //        Object.assign(TaxEntity, res);
    //        TaxEntity.IsEdit = false;
    //        this.toastr.ShowSuccess();
    //      }, e => {
    //        this.toastr.error("Some thing wrong!", 'Error');
    //      })
    //    } else {
    //      this.TaxService.Update(TaxEntity).subscribe(res => {
    //        Object.assign(TaxEntity, res)
    //        TaxEntity.IsEdit = false;
    //        this.toastr.ShowSuccess();
    //      }, e => {
    //        this.toastr.error("Some thing wrong!", 'Error');
    //      })
    //    }
    //}
    //EditTax(TaxEntity: TaxEntity) {
    //  this.TempTax = JSON.parse(JSON.stringify(TaxEntity));
    //  TaxEntity.IsEdit = true;
    //}
    //DeleteTax(TaxEntity: TaxEntity) {
    //  this.TaxService.Delete(TaxEntity.Id).subscribe(res => {
    //    let index = this.TaxEntities.indexOf(TaxEntity);
    //    this.TaxEntities.splice(index, 1);
    //    //this.Search();
    //    this.toastr.ShowSuccess();
    //  }, e => {
    //    this.toastr.error("Some thing wrong!", 'Error');
    //  })
    //}
    //CancelTax(TaxEntity: TaxEntity) {
    //  if (TaxEntity.Id == null || TaxEntity.Id == undefined || TaxEntity.Id == 0) {
    //    let index = this.TaxEntities.indexOf(TaxEntity);
    //    this.TaxEntities.splice(index, 1);
    //  } else {
    //    Object.assign(TaxEntity, this.TempTax);
    //    TaxEntity.IsEdit = false;
    //  }
    //}
    //Pack Info Section:
    ProductDetailComponent.prototype.AddPack = function () {
        var value = new Pack_Entity_1.PackEntity();
        value.IsEdit = true;
        this.PackEntities.unshift(value);
    };
    ProductDetailComponent.prototype.SavePack = function (PackEntity) {
        var _this = this;
        PackEntity.ProductId = this.ProductId;
        if (PackEntity.Id == null || PackEntity.Id == undefined || PackEntity.Id == 0) {
            this.PackService.Create(PackEntity).subscribe(function (res) {
                Object.assign(PackEntity, res);
                PackEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
        else {
            this.PackService.Update(PackEntity).subscribe(function (res) {
                Object.assign(PackEntity, res);
                PackEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
    };
    ProductDetailComponent.prototype.EditPack = function (PackEntity) {
        this.TempPack = JSON.parse(JSON.stringify(PackEntity));
        PackEntity.IsEdit = true;
    };
    ProductDetailComponent.prototype.DeletePack = function (PackEntity) {
        var _this = this;
        this.PackService.Delete(PackEntity.Id).subscribe(function (res) {
            var index = _this.PackEntities.indexOf(PackEntity);
            _this.PackEntities.splice(index, 1);
            _this.toastr.ShowSuccess();
        }, function (e) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    ProductDetailComponent.prototype.CancelPack = function (PackEntity) {
        if (PackEntity.Id == null || PackEntity.Id == undefined || PackEntity.Id == 0) {
            var index = this.PackEntities.indexOf(PackEntity);
            this.PackEntities.splice(index, 1);
        }
        else {
            Object.assign(PackEntity, this.TempPack);
            PackEntity.IsEdit = false;
        }
    };
    //Discount Info Section:
    ProductDetailComponent.prototype.AddDiscount = function () {
        var value = new Discount_Entity_1.DiscountEntity();
        value.IsEdit = true;
        this.DiscountEntities.unshift(value);
    };
    ProductDetailComponent.prototype.SaveDiscount = function (DiscountEntity) {
        var _this = this;
        DiscountEntity.ProductId = this.ProductId;
        if (DiscountEntity.Id == null || DiscountEntity.Id == undefined || DiscountEntity.Id == 0) {
            this.DiscountService.Create(DiscountEntity).subscribe(function (res) {
                Object.assign(DiscountEntity, res);
                DiscountEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
        else {
            this.DiscountService.Update(DiscountEntity).subscribe(function (res) {
                Object.assign(DiscountEntity, res);
                DiscountEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
    };
    ProductDetailComponent.prototype.EditDiscount = function (DiscountEntity) {
        this.TempDiscount = JSON.parse(JSON.stringify(DiscountEntity));
        DiscountEntity.IsEdit = true;
    };
    ProductDetailComponent.prototype.DeleteDiscount = function (DiscountEntity) {
        var _this = this;
        this.DiscountService.Delete(DiscountEntity.Id).subscribe(function (res) {
            var index = _this.DiscountEntities.indexOf(DiscountEntity);
            _this.DiscountEntities.splice(index, 1);
            //this.Search();
            _this.toastr.ShowSuccess();
        }, function (e) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    ProductDetailComponent.prototype.CancelDiscount = function (DiscountEntity) {
        if (DiscountEntity.Id == null || DiscountEntity.Id == undefined || DiscountEntity.Id == 0) {
            var index = this.DiscountEntities.indexOf(DiscountEntity);
            this.DiscountEntities.splice(index, 1);
        }
        else {
            Object.assign(DiscountEntity, this.TempDiscount);
            DiscountEntity.IsEdit = false;
        }
    };
    //Product Image:
    ProductDetailComponent.prototype.LoadImage = function (event) {
        var _this = this;
        if (event.length > 0) {
            var ProductPicture = new ProductPicture_Entity_1.ProductPictureEntity();
            ProductPicture.ProductId = this.ProductId;
            var count_1 = 0;
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var item = event_1[_i];
                ProductPicture.Path = item.Src;
                this.ProductPictureService.Create(ProductPicture).subscribe(function (res) {
                    count_1++;
                    if (count_1 === event.length) {
                        var SearchProductPicture = new ProductPicture_SearchEntity_1.ProductPictureSearchEntity();
                        SearchProductPicture.ProductId = _this.ProductId;
                        _this.ProductPictureService.Gets(SearchProductPicture).subscribe(function (res) {
                            _this.ProducPictureEntities = res;
                        });
                        _this.toastr.ShowSuccess();
                    }
                });
            }
        }
    };
    ProductDetailComponent.prototype.DeleteImage = function (FileEntity) {
        var _this = this;
        this.ProductPictureService.Delete(FileEntity.Id).subscribe(function (res) {
            if (res) {
                var index = _this.ProducPictureEntities.indexOf(FileEntity);
                _this.ProducPictureEntities.splice(index, 1);
                _this.toastr.ShowSuccess();
            }
        });
    };
    //Product Value Section:
    ProductDetailComponent.prototype.ChangeLanguage = function (LanguageEntity) {
        var _this = this;
        if (!LanguageEntity.IsActive) {
            this.LanguageId = LanguageEntity.Id;
            this.LanguageEntities = this.LanguageEntities.map(function (item) {
                item.IsActive = false;
                return item;
            });
            var Index = this.LanguageEntities.indexOf(LanguageEntity);
            this.LanguageEntities[Index].IsActive = true;
            var SearchProductValue = new ProductValue_SearchEntity_1.ProductValueSearchEntity();
            SearchProductValue.LanguageId = this.LanguageId;
            SearchProductValue.ProductId = this.ProductDetailEntity.Id;
            this.ProductValueService.Gets(SearchProductValue).subscribe(function (res) {
                if (res) {
                    _this.ProductValueEntities = res;
                    _this.TempProductValueEntity = {};
                    _this.ProductValueEntities = _this.ProductValueEntities.map(function (item) {
                        item.IsEdit = false;
                        return item;
                    });
                }
            });
        }
    };
    ProductDetailComponent.prototype.EditProductValue = function (ProductValueEntity) {
        ProductValueEntity.IsEdit = true;
        this.TempProductValueEntity[ProductValueEntity.Id] = {};
        Object.assign(this.TempProductValueEntity[ProductValueEntity.Id], ProductValueEntity);
    };
    ProductDetailComponent.prototype.SaveProductValue = function (ProductValueEntity) {
        var _this = this;
        this.ProductValueService.Create(ProductValueEntity).subscribe(function (res) {
            var Index = _this.ProductValueEntities.indexOf(ProductValueEntity);
            Object.assign(_this.ProductValueEntities[Index], res);
            _this.ProductValueEntities[Index].IsEdit = false;
            _this.toastr.ShowSuccess();
        });
    };
    ProductDetailComponent.prototype.CancelProductValue = function (ProductValueEntity) {
        Object.assign(ProductValueEntity, this.TempProductValueEntity[ProductValueEntity.Id]);
        ProductValueEntity.IsEdit = false;
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-productdetail',
            template: __webpack_require__("./src/app/Component/Product/ProductDetail/ProductDetail.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Product_Service_1.ProductService,
            CustomToaster_1.BottomToastsManager,
            Language_Service_1.LanguageService,
            Category_Service_1.CategoryService,
            ProductValue_Service_1.ProductValueService,
            Tax_Service_1.TaxService,
            Pack_Service_1.PackService,
            Discount_Service_1.DiscountService,
            ProductPicture_Service_1.ProductPictureService,
            core_1.ViewContainerRef,
            router_1.ActivatedRoute])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;


/***/ }),

/***/ "./src/app/Component/ProductAttribute/ProductAttribute.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Product Attribute Of {{Title}}\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div style=\"padding-right: 15px;\">\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddProductAttribute()\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"m-section\">\r\n        <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n          <thead>\r\n            <tr *ngIf=\"!IsSearch\">\r\n              <th class=\"text-center\">#</th>\r\n              <th width=\"15%\">Code</th>\r\n              <ng-container *ngIf=\"LanguageEntities.length > 0\">\r\n                <th *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n                  {{LanguageEntity.Code + '_Name'}}\r\n                </th>\r\n              </ng-container>\r\n              <th width=\"10%\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td class=\"text-center\">#</td>\r\n              <td>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"SearchCode...\" />\r\n              </td>\r\n              <ng-container *ngIf=\"LanguageEntities.length > 0\">\r\n                <td *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n                </td>\r\n              </ng-container>\r\n              <td class=\"text-center\">\r\n                <div>\r\n                  <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                    <i class=\"fa fa-refresh\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let ProductAttributeEntity of ProductAttributeEntities; index as i\">\r\n              <td class=\"text-center\" scope=\"row\">{{i + 1}}</td>\r\n              <td>\r\n                <span *ngIf=\"!ProductAttributeEntity.IsEdit\">{{ProductAttributeEntity.Code}}</span>\r\n                <input *ngIf=\"ProductAttributeEntity.IsEdit\" type=\"text\" class=\"form-control input-text\" placeholder=\"Code...\" [(ngModel)]=\"ProductAttributeEntity.Code\" />\r\n              </td>\r\n              <td *ngFor=\"let LanguageEntity of LanguageEntities\">\r\n                <span *ngIf=\"!ProductAttributeEntity.IsEdit\">{{ProductAttributeEntity.Names[LanguageEntity.Id]}}</span>\r\n                <input *ngIf=\"ProductAttributeEntity.IsEdit\" type=\"text\" class=\"form-control input-text\" placeholder=\"Name...\" [(ngModel)]=\"ProductAttributeEntity?.Names[LanguageEntity.Id]\" />\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <div *ngIf=\"!ProductAttributeEntity.IsEdit\">\r\n                  <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"EditProductAttribute(ProductAttributeEntity)\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                          mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteProductAttribute(ProductAttributeEntity)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"ProductAttributeEntity.IsEdit\">\r\n                  <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"SaveProductAttribute(ProductAttributeEntity)\">\r\n                    <i class=\"fa fa-floppy-o\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"CancelProductAttribute(ProductAttributeEntity)\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchProductAttribute(ProductAttributeSearchEntity)\"></app-paging>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Component/ProductAttribute/ProductAttribute.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductAttribute_Entity_1 = __webpack_require__("./src/app/Module/MProductAttribute/ProductAttribute.Entity.ts");
var ProductAttribute_SearchEntity_1 = __webpack_require__("./src/app/Module/MProductAttribute/ProductAttribute.SearchEntity.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var ProductAttribute_Service_1 = __webpack_require__("./src/app/Module/MProductAttribute/ProductAttribute.Service.ts");
var Language_Service_1 = __webpack_require__("./src/app/Module/MLanguage/Language.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Category_Service_1 = __webpack_require__("./src/app/Module/MCategory/Category.Service.ts");
var Category_Entity_1 = __webpack_require__("./src/app/Module/MCategory/Category.Entity.ts");
var ProductAttributeComponent = /** @class */ (function () {
    function ProductAttributeComponent(ProductAttributeService, CategoryService, LanguageService, route, toastr, vcr) {
        var _this = this;
        this.ProductAttributeService = ProductAttributeService;
        this.CategoryService = CategoryService;
        this.LanguageService = LanguageService;
        this.route = route;
        this.toastr = toastr;
        this.ProductAttributeEntities = [];
        this.ProductAttributeEntity = new ProductAttribute_Entity_1.ProductAttributeEntity();
        this.CategoryEntity = new Category_Entity_1.CategoryEntity();
        this.TempProductAttribute = {};
        this.ProductAttributeSearchEntity = new ProductAttribute_SearchEntity_1.ProductAttributeSearchEntity();
        this.LanguageEntities = [];
        this.IsSearch = false;
        this.Title = '';
        this.PagingModel = new paging_model_1.PagingModel(7, 10, function (data) {
        });
        this.toastr.setRootViewContainerRef(vcr);
        this.route.params.subscribe(function (params) {
            _this.LanguageService.Gets().subscribe(function (res) {
                if (res) {
                    _this.LanguageEntities = res;
                }
            });
            if (params.CategoryId !== undefined) {
                _this.CategoryId = params.CategoryId;
                _this.ProductAttributeSearchEntity.CategoryId = params.CategoryId;
                _this.CategoryService.GetId(params.CategoryId).subscribe(function (res) {
                    if (res) {
                        _this.CategoryEntity = Object.assign({}, res);
                        _this.Title = _this.CategoryEntity.Code;
                    }
                });
                _this.SearchProductAttribute(_this.ProductAttributeSearchEntity);
            }
        });
    }
    ProductAttributeComponent.prototype.ngOnInit = function () {
    };
    ProductAttributeComponent.prototype.Count = function () {
        var _this = this;
        this.ProductAttributeService.Count(this.ProductAttributeSearchEntity).subscribe(function (data) {
            _this.PagingModel.TotalPage = Math.ceil(data / _this.PagingModel.Take);
        });
    };
    ProductAttributeComponent.prototype.SearchProductAttribute = function (SearchEntity, IsRefersh) {
        var _this = this;
        if (IsRefersh) {
            SearchEntity = Object.assign(new ProductAttribute_SearchEntity_1.ProductAttributeSearchEntity());
            SearchEntity.CategoryId = this.CategoryId;
        }
        this.ProductAttributeService.Gets(SearchEntity).subscribe(function (res) {
            if (res) {
                _this.ProductAttributeEntities = res;
                _this.Count();
                _this.ProductAttributeEntities = _this.ProductAttributeEntities.map(function (c) {
                    c.IsEdit = false;
                    return c;
                });
            }
        }, function (err) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    ProductAttributeComponent.prototype.AddProductAttribute = function () {
        var ProductAttribute = new ProductAttribute_Entity_1.ProductAttributeEntity();
        ProductAttribute.IsEdit = true;
        for (var _i = 0, _a = this.LanguageEntities; _i < _a.length; _i++) {
            var value = _a[_i];
            ProductAttribute.Names[value.Id] = '';
        }
        this.ProductAttributeEntities.unshift(ProductAttribute);
    };
    ProductAttributeComponent.prototype.EditProductAttribute = function (ProductAttributeEntity) {
        ProductAttributeEntity.IsEdit = true;
        this.TempProductAttribute[ProductAttributeEntity.Id] = Object.assign(ProductAttributeEntity);
    };
    ProductAttributeComponent.prototype.DeleteProductAttribute = function (ProductAttributeEntity) {
        var _this = this;
        ProductAttributeEntity.CategoryId = this.CategoryId;
        this.ProductAttributeService.Delete(ProductAttributeEntity.Id).subscribe(function (res) {
            if (res) {
                var IndexNumber = _this.ProductAttributeEntities.indexOf(ProductAttributeEntity);
                _this.ProductAttributeEntities.splice(IndexNumber, 1);
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError();
        });
    };
    ProductAttributeComponent.prototype.SaveProductAttribute = function (ProductAttributeEntity, Type) {
        var _this = this;
        ProductAttributeEntity.CategoryId = this.CategoryId;
        if (ProductAttributeEntity.Id !== 0) {
            this.ProductAttributeService.Update(ProductAttributeEntity).subscribe(function (res) {
                var IndexNumber = _this.ProductAttributeEntities.indexOf(ProductAttributeEntity);
                Object.assign(_this.ProductAttributeEntities[IndexNumber], res);
                _this.ProductAttributeEntities[IndexNumber].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
        else {
            this.ProductAttributeService.Create(ProductAttributeEntity).subscribe(function (res) {
                Object.assign(_this.ProductAttributeEntities[0], res);
                _this.ProductAttributeEntities[0].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
    };
    ProductAttributeComponent.prototype.CancelProductAttribute = function (ProductAttributeEntity) {
        if (ProductAttributeEntity.Id == null || ProductAttributeEntity.Id == undefined) {
            var index = this.ProductAttributeEntities.indexOf(ProductAttributeEntity);
            this.ProductAttributeEntities.splice(index, 1);
        }
        else {
            Object.assign(ProductAttributeEntity, this.TempProductAttribute);
            ProductAttributeEntity.IsEdit = false;
        }
    };
    ProductAttributeComponent = __decorate([
        core_1.Component({
            selector: 'app-ProductAttribute',
            template: __webpack_require__("./src/app/Component/ProductAttribute/ProductAttribute.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ProductAttribute_Service_1.ProductAttributeService,
            Category_Service_1.CategoryService,
            Language_Service_1.LanguageService,
            router_1.ActivatedRoute,
            CustomToaster_1.BottomToastsManager,
            core_1.ViewContainerRef])
    ], ProductAttributeComponent);
    return ProductAttributeComponent;
}());
exports.ProductAttributeComponent = ProductAttributeComponent;


/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        ReceiptNote Management\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      <!--<button *ngIf=\"!IsAdding\" class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddReceiptNote()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Phiếu nhập số:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Ngày chứng từ:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Ngày hệ thống:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Nhà cung cấp:</p>\r\n        <ng-select-custom [Service]=\"SupplierService\" [SearchProperty]=\"'Name'\"\r\n                          [Init]=\"{Name : ReceiptNoteEntity?.SupplierEntity?.Name}\"\r\n                          (Change)=\"ReceiptNoteEntity.SupplierId=$event?.Id\">\r\n          <ng-template #templateRef let-Name=\"Name\">\r\n            <div>\r\n              {{Name}}\r\n            </div>\r\n          </ng-template>\r\n        </ng-select-custom>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Mã số thuế:</p>\r\n        <input type=\"text\" [(ngModel)]=\"ReceiptNoteEntity?.SupplierEntity.TaxCode\" class=\"form-control\" style=\"width: 100%\" disabled/>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Điện thoại:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Địa chỉ:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Người giao:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"\">\r\n        <p style=\"margin-bottom: 0\">Diễn giải:</p>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <p style=\"margin-bottom: 0\">Kho:</p>\r\n        <ng-select-custom [Service]=\"WareHouseService\" [SearchProperty]=\"'Name'\"\r\n                          (Change)=\"ReceiptNoteEntity.WareHouseId = $event?.Id\"\r\n                          [Init]=\"{Name : ReceiptNoteEntity?.WareHouseEntity?.Name}\">\r\n          <ng-template #templateRef let-Name=\"Name\">\r\n            <div>\r\n              {{Name}}\r\n            </div>\r\n          </ng-template>\r\n        </ng-select-custom>\r\n    </div>\r\n  </div>\r\n  \r\n  <app-ReceiptNoteLine></app-ReceiptNoteLine>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n      <div class=\"ui right aligned category search\" style=\"margin-bottom: 17px; float: right\">\r\n        <button class=\"btn btn-success\" style=\"margin-right:10px;\"><i class=\"fa fa-check\"></i> Gửi</button>\r\n        <button class=\"btn btn-info\" style=\"margin-right: 10px\"><i class=\"fa fa-print\"> In phiếu</i></button>\r\n        <button class=\"btn btn-danger\" style=\"margin-right:10px;\"><i class=\"fa fa-times\"></i> Hủy</button>\r\n        <button class=\"btn btn-warning\" style=\"color: white\"><i class=\"fa fa-pencil\"></i> Nhập lại</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var ReceiptNote_Service_1 = __webpack_require__("./src/app/Module/MReceiptNote/ReceiptNote.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ReceiptNoteDetailComponent = /** @class */ (function (_super) {
    __extends(ReceiptNoteDetailComponent, _super);
    function ReceiptNoteDetailComponent(ReceiptNoteService, cd, toastr, vcr, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, ReceiptNoteService, cd, toastr, vcr) || this;
        _this.ReceiptNoteService = ReceiptNoteService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.ReceiptNoteId = 0;
        _this.route.params.subscribe(function (params) {
            if (params.ReceiptNoteId !== undefined) {
                _this.ReceiptNoteId = params.ReceiptNoteId;
                _this.GetId(_this.ReceiptNoteId);
            }
        });
        return _this;
    }
    ReceiptNoteDetailComponent.prototype.ngOnInit = function () {
    };
    ReceiptNoteDetailComponent = __decorate([
        core_1.Component({
            selector: "app-ReceiptNoteDetail",
            template: __webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.html"),
            styles: [__webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ReceiptNote_Service_1.ReceiptNoteService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], ReceiptNoteDetailComponent);
    return ReceiptNoteDetailComponent;
}(app_component_1.CommonComponent));
exports.ReceiptNoteDetailComponent = ReceiptNoteDetailComponent;


/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.html":
/***/ (function(module, exports) {

module.exports = "<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover \">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Mã Hàng</th>\r\n            <th>Tên hàng hóa</th>\r\n            <th>Đơn vị</th>\r\n            <th>Số lượng</th>\r\n            <th>Đơn giá</th>\r\n            <!--th>Thành tiền</th>-->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let ReceiptNoteLineEntity of Entities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!ReceiptNoteLineEntity.IsEdit\">{{ReceiptNoteLineEntity.ProductEntity.Code}}</div>\r\n              <input *ngIf=\"ReceiptNoteLineEntity.IsEdit\" class=\"form-control\" placeholder=\"Enter Code...\" [(ngModel)]=\"ReceiptNoteLineEntity.ProductEntity.Code\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ReceiptNoteLineEntity.IsEdit\">{{ReceiptNoteLineEntity.ProductEntity.Name}}</div>\r\n              \r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ReceiptNoteLineEntity.IsEdit\">{{ReceiptNoteLineEntity.UnitPrice}}</div>\r\n              <input class=\"form-control\" *ngIf=\"ReceiptNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"ReceiptNoteLineEntity.UnitPrice\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ReceiptNoteLineEntity.IsEdit\">{{ReceiptNoteLineEntity.Quantity}}</div>\r\n              <input class=\"form-control\" *ngIf=\"ReceiptNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"ReceiptNoteLineEntity.Quantity\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ReceiptNoteLineEntity.IsEdit\">{{ReceiptNoteLineEntity.Price}}</div>\r\n              <input class=\"form-control\" *ngIf=\"ReceiptNoteLineEntity.IsEdit\" placeholder=\"Enter Code...\" [(ngModel)]=\"ReceiptNoteLineEntity.Price\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n              <a class=\"addnewrow\" style=\"\" (click)=\"AddNewRow()\"><i class=\"fa fa-plus\" ></i> Add new row</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ReceiptNoteLine_Entity_1 = __webpack_require__("./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.Entity.ts");
var ReceiptNoteLine_SearchEntity_1 = __webpack_require__("./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.SearchEntity.ts");
var ReceiptNoteLine_Service_1 = __webpack_require__("./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.Service.ts");
var ReceiptNoteLineComponent = /** @class */ (function (_super) {
    __extends(ReceiptNoteLineComponent, _super);
    function ReceiptNoteLineComponent(ReceiptNoteLineService, cd, toastr, vcr, SupplierService, WareHouseService, route) {
        var _this = _super.call(this, ReceiptNoteLineService, cd, toastr, vcr) || this;
        _this.ReceiptNoteLineService = ReceiptNoteLineService;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.route = route;
        _this.ReceiptNoteId = 0;
        _this.FilterEntity = new ReceiptNoteLine_SearchEntity_1.ReceiptNoteLineSearchEntity();
        _this.route.params.subscribe(function (params) {
            if (params.ReceiptNoteId !== undefined) {
                _this.ReceiptNoteId = params.ReceiptNoteId;
                _this.FilterEntity.ReceiptNoteId = _this.ReceiptNoteId;
                _this.Search(_this.FilterEntity);
            }
        });
        return _this;
    }
    ReceiptNoteLineComponent.prototype.ngOnInit = function () {
    };
    ReceiptNoteLineComponent.prototype.AddNewRow = function () {
        var a = new ReceiptNoteLine_Entity_1.ReceiptNoteLineEntity();
        a.IsEdit = true;
        console.log(a);
        this.Entities.push(a);
    };
    ReceiptNoteLineComponent = __decorate([
        core_1.Component({
            selector: 'app-ReceiptNoteLine',
            template: __webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.html"),
            styles: [__webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ReceiptNoteLine_Service_1.ReceiptNoteLineService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, router_1.ActivatedRoute])
    ], ReceiptNoteLineComponent);
    return ReceiptNoteLineComponent;
}(app_component_1.CommonComponent));
exports.ReceiptNoteLineComponent = ReceiptNoteLineComponent;


/***/ }),

/***/ "./src/app/Component/ReceiptNote/ReceiptNote.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/ReceiptNote.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        ReceiptNote Management\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      \r\n      <a class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" [routerLink]=\"['/ReceiptNotes/',0]\"><i class=\"fa fa-plus\"></i> Add</a>\r\n      <!--<button *ngIf=\"!IsAdding\" class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddReceiptNote()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div>\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Warehouse</th>\r\n            <th>Product</th>\r\n            <th>Quantity</th>\r\n            <th>Unit Price</th>\r\n            <th>Total</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Warehouse...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Product...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Quantity...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td></td>\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Total...\" />\r\n            </td>-->\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>-->\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let ReceiptNoteEntity of Entities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.WareHouseEntity?.Name}}</span>\r\n              <ng-select [items]=\"WareHouseEntities\"\r\n                         (ngModelChange)=\"ReceiptNoteEntity.WareHouseId=$event; GetProduct(ReceiptNoteEntity.WareHouseId)\"\r\n                         bindLabel=\"Name\"\r\n                         bindValue=\"Id\"\r\n                         placeholder=\"Choose Warehouse...\"\r\n                         [(ngModel)]=\"ReceiptNoteEntity.WareHouseId\" *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.ProductEntity?.Code}}</span>\r\n              <ng-select [items]=\"InventoryEntities\"\r\n                         bindLabel=\"ProductEntity.Code\"\r\n                         bindValue=\"ProductId\"\r\n                         placeholder=\"Choose Product...\"\r\n                         [(ngModel)]=\"ReceiptNoteEntity.ProductId\" *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.Quantity | number}}</span>\r\n              <input currencyMask [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"ReceiptNoteEntity.Quantity\" (ngModelChange)=\"ReceiptNoteEntity.Quantity = $event; ComputeTotal(ReceiptNoteEntity)\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.UnitPrice | number}}</span>\r\n              <input currencyMask min=\"0\" [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter UnitPrice...\" [(ngModel)]=\"ReceiptNoteEntity.UnitPrice\" (ngModelChange)=\"ReceiptNoteEntity.UnitPrice = $event; ComputeTotal(ReceiptNoteEntity)\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!ReceiptNoteEntity.IsEdit\">{{ReceiptNoteEntity.Total | number}}</span>\r\n              <input currencyMask min=\"0\" [options]=\"{ prefix: '', precision: '0'  }\" class=\"form-control\" *ngIf=\"ReceiptNoteEntity.IsEdit\" placeholder=\"Enter Total...\" [(ngModel)]=\"ReceiptNoteEntity.Total\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!ReceiptNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(ReceiptNoteEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"ReceiptNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(ReceiptNoteEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchReceiptNote()\"></app-paging>\r\n  </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/ReceiptNote/ReceiptNote.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ReceiptNote_Service_1 = __webpack_require__("./src/app/Module/MReceiptNote/ReceiptNote.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var Inventory_Service_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var ReceiptNoteComponent = /** @class */ (function (_super) {
    __extends(ReceiptNoteComponent, _super);
    function ReceiptNoteComponent(cd, ReceiptNoteService, toastr, vcr, SupplierService, WareHouseService, InventoryService) {
        var _this = _super.call(this, ReceiptNoteService, cd, toastr, vcr) || this;
        _this.SupplierService = SupplierService;
        _this.WareHouseService = WareHouseService;
        _this.InventoryService = InventoryService;
        return _this;
    }
    ReceiptNoteComponent.prototype.ngOnInit = function () {
    };
    ReceiptNoteComponent = __decorate([
        core_1.Component({
            selector: 'app-ReceiptNote',
            template: __webpack_require__("./src/app/Component/ReceiptNote/ReceiptNote.component.html"),
            styles: [__webpack_require__("./src/app/Component/ReceiptNote/ReceiptNote.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, ReceiptNote_Service_1.ReceiptNoteService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService, WareHouse_Service_1.WareHouseService, Inventory_Service_1.InventoryService])
    ], ReceiptNoteComponent);
    return ReceiptNoteComponent;
}(app_component_1.CommonComponent));
exports.ReceiptNoteComponent = ReceiptNoteComponent;


/***/ }),

/***/ "./src/app/Component/Role/Role.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Role/Role.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Role Management\r\n            </h3>\r\n            <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Reports\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Revenue\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddRole()\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Name</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" />\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let RoleEntity of RoleEntities; index as i\">\r\n                        <td scope=\"row\">{{i + 1}}</td>\r\n                        <td>\r\n                            <div *ngIf=\"!RoleEntity.IsEdit\">{{RoleEntity.Name}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"RoleEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"RoleEntity.Name\" />\r\n                        </td>\r\n                        <!--<td>\r\n                            <div *ngIf=\"!RoleEntity.IsEdit\">{{RoleEntity.ParentId}}</div>\r\n                            <input class=\"input-text\" *ngIf=\"RoleEntity.IsEdit\" placeholder=\"Enter Parent...\" [(ngModel)]=\"RoleEntity.ParentId\" />\r\n                        </td>-->\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!RoleEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"EditRole(RoleEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteRole(RoleEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"RoleEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"SaveRole(RoleEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"CancelRole(RoleEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Role/Role.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Role_Entity_1 = __webpack_require__("./src/app/Module/MRole/Role.Entity.ts");
var Role_Service_1 = __webpack_require__("./src/app/Module/MRole/Role.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var RoleComponent = /** @class */ (function () {
    function RoleComponent(RoleService, toastr, vcr) {
        this.RoleService = RoleService;
        this.toastr = toastr;
        this.RoleEntities = [];
        this.RoleEntity = new Role_Entity_1.RoleEntity();
        this.toastr.setRootViewContainerRef(vcr);
        this.SearchRole();
    }
    RoleComponent.prototype.ngOnInit = function () {
    };
    RoleComponent.prototype.SearchRole = function () {
        var _this = this;
        this.RoleService.Gets().subscribe(function (res) {
            if (res) {
                _this.RoleEntities = res;
                _this.toastr.ShowSuccess();
            }
        }, function (e) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    RoleComponent.prototype.AddRole = function () {
        var value = new Role_Entity_1.RoleEntity();
        value.IsEdit = true;
        this.RoleEntities.unshift(value);
    };
    RoleComponent.prototype.SaveRole = function (RoleEntity) {
        var _this = this;
        if (RoleEntity.Id == null || RoleEntity.Id == undefined) {
            RoleEntity.Id = 0;
            this.RoleService.Create(RoleEntity).subscribe(function (res) {
                Object.assign(RoleEntity, res);
                RoleEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
        else {
            this.RoleService.Update(RoleEntity).subscribe(function (res) {
                Object.assign(RoleEntity, res);
                RoleEntity.IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.error('Some thing wrong!', 'Error');
            });
        }
    };
    RoleComponent.prototype.EditRole = function (RoleEntity) {
        this.TempRole = JSON.parse(JSON.stringify(RoleEntity));
        RoleEntity.IsEdit = true;
    };
    RoleComponent.prototype.DeleteRole = function (RoleEntity) {
        var _this = this;
        this.RoleService.Delete(RoleEntity.Id).subscribe(function (res) {
            var index = _this.RoleEntities.indexOf(RoleEntity);
            _this.RoleEntities.splice(index, 1);
            _this.toastr.ShowSuccess();
        }, function (e) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    RoleComponent.prototype.CancelRole = function (RoleEntity) {
        if (RoleEntity.Id == null || RoleEntity.Id == undefined) {
            var index = this.RoleEntities.indexOf(RoleEntity);
            this.RoleEntities.splice(index, 1);
        }
        else {
            Object.assign(RoleEntity, this.TempRole);
        }
    };
    RoleComponent = __decorate([
        core_1.Component({
            selector: 'app-Role',
            template: __webpack_require__("./src/app/Component/Role/Role.component.html"),
            styles: [__webpack_require__("./src/app/Component/Role/Role.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Role_Service_1.RoleService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], RoleComponent);
    return RoleComponent;
}());
exports.RoleComponent = RoleComponent;


/***/ }),

/***/ "./src/app/Component/ShipmentDetail/ShipmentDetail.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.add-coupon {\r\n    float: right;\r\n}\r\n\r\n.input-text{\r\n    max-width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/Component/ShipmentDetail/ShipmentDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        ShipmentDetail Management\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit: true})\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover m-table--head-bg-success\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Customer</th>\r\n            <th>Country</th>\r\n            <th>City</th>\r\n            <th>Address</th>\r\n            <th>Phone</th>\r\n            <th>Note</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\">#</td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"CustomerService\" [(NgModel)]=\"SearchEntity.CustomerId\"\r\n                                [SearchProperty]=\"'Display'\"\r\n                                [BindProperty]=\"'Id'\"\r\n                                (keyup.enter)=\"Search(SearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search Customer...'\">\r\n              </ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"CountryService\" [(NgModel)]=\"SearchEntity.CountryId\"\r\n                                [SearchProperty]=\"'Name'\"\r\n                                [BindProperty]=\"'Id'\"\r\n                                (keyup.enter)=\"Search(SearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search Country...'\">\r\n              </ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <ng-select-custom [Service]=\"CityService\" [(NgModel)]=\"SearchEntity.CityId\"\r\n                                [SearchProperty]=\"'Name'\"\r\n                                [BindProperty]=\"'Id'\"\r\n                                [Init]=\"{CountryId:SearchEntity.CountryId}\"\r\n                                (Change)=\"SearchEntity.CityId = $event?.Id\"\r\n                                (keyup.enter)=\"Search(SearchEntity)\"\r\n                                [IsSearch]=\"true\" [Placeholder]=\"'Search City...'\"></ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Address...\" [(ngModel)]=\"SearchEntity.Address\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Phone...\" [(ngModel)]=\"SearchEntity.Phone\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Note...\" [(ngModel)]=\"SearchEntity.Note\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\" (click)=\"Search(ShipmentDetailSearchEntity, false)\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\" (click)=\"Search(ShipmentDetailSearchEntity, true)\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let ShipmentDetailEntity of Entities; index as i\">\r\n            <td scope=\"row\" class=\"text-center\">{{i + 1}}</td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity?.CustomerEntity?.Display}}</div>\r\n              <ng-select-custom *ngIf=\"ShipmentDetailEntity.IsEdit\"\r\n                                [Service]=\"CustomerService\" [SearchProperty]=\"'Display'\"\r\n                                [Init]=\"{Display : ShipmentDetailEntity?.CustomerEntity?.Display}\">\r\n                <ng-template #templateRef let-default let-Name=\"Name\">\r\n                  <div>\r\n                    {{Name}}\r\n                  </div>\r\n                </ng-template>\r\n              </ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity?.CountryEntity?.Name}}</div>\r\n              <ng-select-custom *ngIf=\"ShipmentDetailEntity.IsEdit\"\r\n                                [Service]=\"CountryService\"[SearchProperty]=\"'Name'\"\r\n                                (Change)=\"ShipmentDetailEntity.CountryId = $event?.Id; ShipmentDetailEntity.CityId = null; ShipmentDetailEntity.CityEntity=null;\"\r\n                                [Init]=\"{Name : ShipmentDetailEntity?.CountryEntity?.Name}\">\r\n                <ng-template #templateRef let-default let-Name=\"Name\">\r\n                  <div>\r\n                    {{Name}}\r\n                  </div>\r\n                </ng-template>             \r\n              </ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity?.CityEntity?.Name}}</div>\r\n              <ng-select-custom *ngIf=\"ShipmentDetailEntity.IsEdit && ShipmentDetailEntity.CountryId != null\"\r\n                                [Service]=\"CityService\" [SearchProperty]=\"'Name'\"\r\n                                [Init]=\"{CountryId:ShipmentDetailEntity?.CountryId, Name:ShipmentDetailEntity?.CityEntity?.Name}\"\r\n                                (Change)=\"ShipmentDetailEntity.CityId = $event?.Id;\">\r\n              </ng-select-custom>\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity.Address}}</div>\r\n              <input *ngIf=\"ShipmentDetailEntity.IsEdit\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ShipmentDetailEntity.Address\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity.Phone}}</div>\r\n              <input *ngIf=\"ShipmentDetailEntity.IsEdit\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ShipmentDetailEntity.Phone\" />\r\n            </td>\r\n            <td>\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">{{ShipmentDetailEntity.Note}}</div>\r\n              <input *ngIf=\"ShipmentDetailEntity.IsEdit\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ShipmentDetailEntity.Note\" />\r\n            </td>\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!ShipmentDetailEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Edit(ShipmentDetailEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(ShipmentDetailEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"ShipmentDetailEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Save(ShipmentDetailEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\" (click)=\"Cancel(ShipmentDetailEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"Search()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/ShipmentDetail/ShipmentDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShipmentDetail_SearchEntity_1 = __webpack_require__("./src/app/Module/MShipmentDetail/ShipmentDetail.SearchEntity.ts");
var ShipmentDetail_Service_1 = __webpack_require__("./src/app/Module/MShipmentDetail/ShipmentDetail.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var City_Service_1 = __webpack_require__("./src/app/Module/MCity/City.Service.ts");
var Country_Service_1 = __webpack_require__("./src/app/Module/MCountry/Country.Service.ts");
var Customer_Service_1 = __webpack_require__("./src/app/Module/MCustomer/Customer.Service.ts");
var ShipmentDetailComponent = /** @class */ (function (_super) {
    __extends(ShipmentDetailComponent, _super);
    function ShipmentDetailComponent(cd, ShipmentDetailService, toastr, vcr, CityService, CountryService, CustomerService) {
        var _this = _super.call(this, ShipmentDetailService, cd, toastr, vcr) || this;
        _this.ShipmentDetailService = ShipmentDetailService;
        _this.toastr = toastr;
        _this.CityService = CityService;
        _this.CountryService = CountryService;
        _this.CustomerService = CustomerService;
        _this.SearchEntity = null;
        _this.SearchEntity = new ShipmentDetail_SearchEntity_1.ShipmentDetailSearchEntity();
        _this.Search(_this.SearchEntity);
        return _this;
    }
    ShipmentDetailComponent.prototype.ngOnInit = function () {
    };
    ShipmentDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-ShipmentDetail',
            template: __webpack_require__("./src/app/Component/ShipmentDetail/ShipmentDetail.component.html"),
            styles: [__webpack_require__("./src/app/Component/ShipmentDetail/ShipmentDetail.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, ShipmentDetail_Service_1.ShipmentDetailService, CustomToaster_1.BottomToastsManager,
            core_1.ViewContainerRef, City_Service_1.CityService, Country_Service_1.CountryService, Customer_Service_1.CustomerService])
    ], ShipmentDetailComponent);
    return ShipmentDetailComponent;
}(app_component_1.CommonComponent));
exports.ShipmentDetailComponent = ShipmentDetailComponent;


/***/ }),

/***/ "./src/app/Component/StockTransfer/StockTransfer.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}"

/***/ }),

/***/ "./src/app/Component/StockTransfer/StockTransfer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center border-title\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title\">\r\n        Stock Transfer Management\r\n      </h3>\r\n      <!--<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n            <i class=\"m-nav__link-icon la la-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Reports\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">\r\n              Revenue\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddIssueNote()\">\r\n        <span>\r\n          <i class=\"fa fa-plus\"></i>\r\n          <span>Add</span>\r\n        </span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n  <div *ngIf=\"IsAdding\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"\">\r\n          <p style=\"margin-bottom: 0\">Phiếu chuyển kho số:</p>\r\n          <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        \r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"\">\r\n          <p style=\"margin-bottom: 0\">Ngày chuyển:</p>\r\n          <div class=\"row\">\r\n            <datetime style=\"width: 100%\" [placeholder]=\"'Transfer Date...'\"></datetime>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"\">\r\n          <p style=\"margin-bottom: 0\">Người lập phiếu:</p>\r\n          <input type=\"text\" class=\"form-control\" style=\"width: 100%\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        \r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"\">\r\n          <p style=\"margin-bottom: 0\">Diễn giải:</p>\r\n          <textarea type=\"text\" class=\"form-control\" style=\"width: 100%\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"m-section\">\r\n        <table class=\"table table-bordered m-table m-table--border-metal table-hover \">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Kho Hàng</th>\r\n              <th>Tên hàng hóa</th>\r\n              <th>Kho xuất</th>\r\n              <th>Kho nhập</th>\r\n              <th>Đơn vị tính</th>\r\n              <th>Số lượng</th>\r\n              <th>Đơn giá</th>\r\n              <th>Thành tiền</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td scope=\"row\">{{i + 1}}</td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n              <td>\r\n                <input class=\"form-control\" />\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"10\">\r\n                <a class=\"addnewrow\" style=\"\"><i class=\"fa fa-plus\"></i> Add new row</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n      <div class=\"col-sm-4 col-md-4 col-lg-4\"></div>\r\n      <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n        <div class=\"ui right aligned category search\" style=\"margin-bottom: 17px; float: right\">\r\n          <button class=\"btn btn-success\" style=\"margin-right:10px;\"><i class=\"fa fa-check\"></i> Gửi</button>\r\n          <button class=\"btn btn-info\" style=\"margin-right: 10px\"><i class=\"fa fa-print\"> In phiếu</i></button>\r\n          <button class=\"btn btn-danger\" style=\"margin-right:10px;\"><i class=\"fa fa-times\"></i> Hủy</button>\r\n          <button class=\"btn btn-warning\" style=\"color: white\"><i class=\"fa fa-pencil\"></i> Nhập lại</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\" *ngIf=\"!IsAdding\">\r\n    <div class=\"m-section\">\r\n      <table class=\"table table-bordered m-table m-table--border-metal table-hover table-nowhitespace\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Warehouse</th>\r\n            <th>Product</th>\r\n            <th>Quantity</th>\r\n            <th>Unit Price</th>\r\n            <th>Description</th>\r\n            <!--<th>Total</th>-->\r\n            <!--<th>Receipt Date</th>\r\n            <th>Receipt User</th>-->\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td></td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Warehouse...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Product...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Quantity...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Unit Price...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Description...\" />\r\n            </td>\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Total...\" />\r\n            </td>-->\r\n            <!--<td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Receipt User...\" />\r\n            </td>-->\r\n            <td class=\"button-crud\">\r\n              <div>\r\n                <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n                <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                  <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let IssueNoteEntity of IssueNoteEntities; index as i\">\r\n            <td scope=\"row\">{{i + 1}}</td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.WareHouseEntity.Name}}</span>\r\n              <ng-select [items]=\"WareHouseEntities\"\r\n                         (ngModelChange)=\"IssueNoteEntity.WareHouseId=$event; GetProduct(IssueNoteEntity.WareHouseId)\"\r\n                         bindLabel=\"WareHouseEntity.Name\"\r\n                         bindValue=\"WareHouseId\"\r\n                         placeholder=\"Choose Warehouse...\"\r\n                         [(ngModel)]=\"IssueNoteEntity.WareHouseId\" *ngIf=\"IssueNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.ProductEntity.Code}}</span>\r\n              <ng-select [items]=\"InventoryEntities\"\r\n                         bindLabel=\"ProductEntity.Code\"\r\n                         bindValue=\"ProductId\"\r\n                         placeholder=\"Choose Product...\"\r\n                         [(ngModel)]=\"IssueNoteEntity.ProductId\" *ngIf=\"IssueNoteEntity.IsEdit\">\r\n              </ng-select>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Quantity}}</span>\r\n              <input type=\"number\" class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Quantity...\" [(ngModel)]=\"IssueNoteEntity.Quantity\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.UnitPrice}}</span>\r\n              <input type=\"number\" class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Unit Price...\" [(ngModel)]=\"IssueNoteEntity.UnitPrice\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Description}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Description...\" [(ngModel)]=\"IssueNoteEntity.Description\" />\r\n            </td>\r\n            <!--<td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Route}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Route...\" [(ngModel)]=\"IssueNoteEntity.Route\" />\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"!IssueNoteEntity.IsEdit\">{{IssueNoteEntity.Route}}</span>\r\n              <input class=\"form-control\" *ngIf=\"IssueNoteEntity.IsEdit\" placeholder=\"Enter Route...\" [(ngModel)]=\"IssueNoteEntity.Route\" />\r\n            </td>-->\r\n            <td class=\"button-crud\">\r\n              <div *ngIf=\"!IssueNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"EditIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteIssueNote(IssueNoteEntity)\" (cancel)=\"cancelClicked = true\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"IssueNoteEntity.IsEdit\">\r\n                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"SaveIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                </button>\r\n                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"CancelIssueNote(IssueNoteEntity)\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchIssueNote()\"></app-paging>\r\n  </div>\r\n</div>\r\n\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/StockTransfer/StockTransfer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var IssueNote_Entity_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Entity.ts");
var IssueNote_SearchEntity_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.SearchEntity.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var IssueNote_Service_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var Supplier_Entity_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Entity.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var WareHouse_Entity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Entity.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var Inventory_Entity_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Entity.ts");
var Inventory_Service_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Service.ts");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var Inventory_SearchEntity_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.SearchEntity.ts");
var StockTransferComponent = /** @class */ (function () {
    function StockTransferComponent(IssueNoteService, Router, toastr, vcr, SupplierService, WareHouseService, InventoryService) {
        this.IssueNoteService = IssueNoteService;
        this.Router = Router;
        this.toastr = toastr;
        this.SupplierService = SupplierService;
        this.WareHouseService = WareHouseService;
        this.InventoryService = InventoryService;
        this.IssueNoteEntities = [];
        this.IssueNoteEntity = new IssueNote_Entity_1.IssueNoteEntity();
        this.IssueNoteSearchEntity = new IssueNote_SearchEntity_1.IssueNoteSearchEntity();
        this.PagingModel = new paging_model_1.PagingModel(7, 10, function (data) {
        });
        this.TempIssueNote = {};
        this.ModalIssueNoteEntity = new IssueNote_Entity_1.IssueNoteEntity();
        this.EditModalComponent = new modal_component_1.ModalComponent();
        this.IsSearch = false;
        this.SupplierEntity = new Supplier_Entity_1.SupplierEntity();
        this.SupplierEntities = [];
        this.WareHouseEntities = [];
        this.WareHouseEntity = new WareHouse_Entity_1.WareHouseEntity();
        this.InventoryEntity = new Inventory_Entity_1.InventoryEntity();
        this.InventoryEntities = [];
        this.ProductEntity = new Product_Entity_1.ProductEntity();
        this.ProductEntities = [];
        this.IsAdding = false;
        this.toastr.setRootViewContainerRef(vcr);
        this.SearchIssueNote(this.IssueNoteSearchEntity);
        this.GetSupplierEntities();
        this.GetWarehouseList();
    }
    StockTransferComponent.prototype.ngOnInit = function () {
    };
    StockTransferComponent.prototype.SearchIssueNote = function (SearchEntity, IsRefersh) {
        var _this = this;
        if (IsRefersh) {
            SearchEntity = Object.assign(new IssueNote_SearchEntity_1.IssueNoteSearchEntity());
        }
        this.IssueNoteService.Gets(SearchEntity).subscribe(function (res) {
            if (res) {
                _this.IssueNoteEntities = res;
                _this.Count(SearchEntity);
                _this.IssueNoteEntities = _this.IssueNoteEntities.map(function (c) {
                    c.IsEdit = false;
                    return c;
                });
            }
        }, function (err) {
            _this.toastr.error('Some thing wrong!', 'Error');
        });
    };
    StockTransferComponent.prototype.Count = function (SearchEntity) {
        var _this = this;
        this.IssueNoteService.Count(SearchEntity).subscribe(function (data) {
            _this.PagingModel.TotalPage = Math.ceil(data / _this.PagingModel.Take);
        });
    };
    StockTransferComponent.prototype.AddProductAttribute = function (IssueNoteEntity) {
        if (IssueNoteEntity.Id) {
            this.Router.navigate(['/module/IssueNote/' + IssueNoteEntity.Id + '/ProductAttribute']);
        }
    };
    //AddIssueNote() {
    //  let IssueNote: IssueNoteEntity = new IssueNoteEntity();
    //  IssueNote.IsEdit = true;
    //  this.IssueNoteEntities.unshift(IssueNote);
    //}
    StockTransferComponent.prototype.EditIssueNote = function (IssueNoteEntity) {
        IssueNoteEntity.IsEdit = true;
        this.TempIssueNote[IssueNoteEntity.Id] = Object.assign(IssueNoteEntity);
    };
    StockTransferComponent.prototype.DeleteIssueNote = function (IssueNoteEntity) {
        var _this = this;
        this.IssueNoteService.Delete(IssueNoteEntity.Id).subscribe(function (res) {
            if (res) {
                var IndexNumber = _this.IssueNoteEntities.indexOf(IssueNoteEntity);
                _this.IssueNoteEntities.splice(IndexNumber, 1);
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError();
        });
    };
    StockTransferComponent.prototype.SaveIssueNote = function (IssueNoteEntity) {
        var _this = this;
        console.log(this.SupplierEntity.Id);
        console.log(IssueNoteEntity.WareHouseId);
        console.log(IssueNoteEntity.ProductId);
        if (IssueNoteEntity.Id == null || IssueNoteEntity.Id == undefined || IssueNoteEntity.Id == 0) {
            IssueNoteEntity.SupplierId = this.SupplierEntity.Id;
            //IssueNoteEntity.WareHouseId = IssueNoteEntity.WareHouseEntity.Id;
            this.IssueNoteService.Create(IssueNoteEntity).subscribe(function (res) {
                _this.IssueNoteEntities.unshift(IssueNoteEntity);
                _this.IssueNoteEntities[0].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
        else {
            this.IssueNoteService.Update(IssueNoteEntity).subscribe(function (res) {
                var IndexNumber = _this.IssueNoteEntities.indexOf(res);
                Object.assign(_this.IssueNoteEntities[IndexNumber], res);
                _this.IssueNoteEntities[IndexNumber].IsEdit = false;
                _this.toastr.ShowSuccess();
            }, function (err) {
                _this.toastr.ShowError();
            });
        }
    };
    StockTransferComponent.prototype.CancelIssueNote = function (IssueNoteEntity) {
        if (IssueNoteEntity.Id == null || IssueNoteEntity.Id == undefined) {
            var index = this.IssueNoteEntities.indexOf(IssueNoteEntity);
            this.IssueNoteEntities.splice(index, 1);
        }
        else {
            Object.assign(IssueNoteEntity, this.TempIssueNote);
            IssueNoteEntity.IsEdit = false;
        }
    };
    StockTransferComponent.prototype.GetSupplierEntities = function () {
        var _this = this;
        this.SupplierService.Gets().subscribe(function (res) {
            _this.SupplierEntities = res;
            _this.SupplierEntity = _this.SupplierEntities[0];
        });
    };
    //ChooseSupplier(SupplierEntity: SupplierEntity, IssueNoteEntity?: IssueNoteEntity) {
    //  console.log(SupplierEntity);
    //  this.IssueNoteSearchEntity.SupplierId = SupplierEntity.Id;
    //  this.SupplierEntity = SupplierEntity;
    //  this.SupplierEntity.Id = SupplierEntity.Id;
    //  this.SearchIssueNote(this.IssueNoteSearchEntity);
    //}
    StockTransferComponent.prototype.GetWarehouseList = function () {
        var _this = this;
        this.WareHouseService.Gets().subscribe(function (res) {
            _this.WareHouseEntities = res;
            _this.WareHouseEntity = _this.WareHouseEntities[0];
        });
    };
    StockTransferComponent.prototype.ChooseWarehouse = function (WareHouseEntity, InventoryEntity) {
        console.log(WareHouseEntity);
        this.IssueNoteSearchEntity.WareHouseId = WareHouseEntity.Id;
        this.WareHouseEntity = WareHouseEntity;
        this.WareHouseEntity.Id = WareHouseEntity.Id;
        this.GetProduct(WareHouseEntity.Id);
    };
    StockTransferComponent.prototype.GetProduct = function (WareHouseId) {
        var _this = this;
        console.log(WareHouseId);
        var a = new Inventory_SearchEntity_1.InventorySearchEntity();
        a.WareHouseId = WareHouseId;
        a.IsDeleted = false;
        this.InventoryService.Gets(a).subscribe(function (res) {
            _this.InventoryEntities = res;
        });
    };
    StockTransferComponent.prototype.AddIssueNote = function () {
        this.IsAdding = true;
    };
    StockTransferComponent = __decorate([
        core_1.Component({
            selector: 'app-stocktransfer',
            template: __webpack_require__("./src/app/Component/StockTransfer/StockTransfer.component.html"),
            styles: [__webpack_require__("./src/app/Component/StockTransfer/StockTransfer.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [IssueNote_Service_1.IssueNoteService,
            router_1.Router,
            CustomToaster_1.BottomToastsManager,
            core_1.ViewContainerRef,
            Supplier_Service_1.SupplierService,
            WareHouse_Service_1.WareHouseService,
            Inventory_Service_1.InventoryService])
    ], StockTransferComponent);
    return StockTransferComponent;
}());
exports.StockTransferComponent = StockTransferComponent;


/***/ }),

/***/ "./src/app/Component/Supplier/Supplier.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Supplier/Supplier.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Supplier Management\r\n            </h3>\r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"AddSupplier()\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover table-nowhitespace\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width: 5%\">#</th>\r\n                        <th style=\"width: 30%\">Name</th>\r\n                        <th style=\"width: 10%\">TaxCode</th>\r\n                        <th style=\"width: 45%\">Description</th>\r\n                        <th style=\"width: 10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search TaxCode...\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" />\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search Description...\" />\r\n                    </td>\r\n                    <td class=\"button-crud\">\r\n                      <div>\r\n                        <button class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                          <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                    <tr *ngFor=\"let SupplierEntity of Entities; index as i\">\r\n                        <td scope=\"row\">{{i + 1}}</td>\r\n                        <td>\r\n                            <div *ngIf=\"!SupplierEntity.IsEdit\">{{SupplierEntity.TaxCode}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"SupplierEntity.IsEdit\" placeholder=\"Enter TaxCode...\" [(ngModel)]=\"SupplierEntity.TaxCode\" />\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!SupplierEntity.IsEdit\">{{SupplierEntity.Name}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"SupplierEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"SupplierEntity.Name\" />\r\n                        </td>\r\n                        <td>\r\n                            <div *ngIf=\"!SupplierEntity.IsEdit\">{{SupplierEntity.Description}}</div>\r\n                            <input class=\"input-text form-control\" *ngIf=\"SupplierEntity.IsEdit\" placeholder=\"Enter Description...\" [(ngModel)]=\"SupplierEntity.Description\" />\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!SupplierEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"EditSupplier(SupplierEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                   mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"DeleteSupplier(SupplierEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"SupplierEntity.IsEdit\">\r\n                                <button class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"SaveSupplier(SupplierEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                   data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"CancelSupplier(SupplierEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchSupplier()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Supplier/Supplier.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Supplier_SearchEntity_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.SearchEntity.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var SupplierComponent = /** @class */ (function (_super) {
    __extends(SupplierComponent, _super);
    function SupplierComponent(SupplierService, cd, toastr, vcr) {
        var _this = _super.call(this, SupplierService, cd, toastr, vcr) || this;
        _this.SupplierService = SupplierService;
        _this.SupplierSearchEntity = new Supplier_SearchEntity_1.SupplierSearchEntity();
        _this.Search(_this.SupplierSearchEntity);
        return _this;
    }
    SupplierComponent.prototype.ngOnInit = function () {
    };
    SupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-Supplier',
            template: __webpack_require__("./src/app/Component/Supplier/Supplier.component.html"),
            styles: [__webpack_require__("./src/app/Component/Supplier/Supplier.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [Supplier_Service_1.SupplierService, core_1.ChangeDetectorRef, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], SupplierComponent);
    return SupplierComponent;
}(app_component_1.CommonComponent));
exports.SupplierComponent = SupplierComponent;


/***/ }),

/***/ "./src/app/Component/Warehouse/WareHouse.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n.add-category{\r\n    float: right;\r\n    margin-bottom: 1em;\r\n}\r\n.input-text{\r\n    max-width: 150px;\r\n}\r\n.img-size{\r\n    width: 65%;\r\n}\r\n.m-dropdown {\r\n    margin-left: 11px;\r\n    top: -4px;\r\n}\r\n.m-dropdown.m-dropdown--align-center.m-dropdown--small .m-dropdown__wrapper {\r\n    width: 93px;\r\n    margin-left: -49.5px;\r\n}\r\n.m-dropdown .m-dropdown__wrapper .m-dropdown__body{\r\n    padding: 4px;\r\n}\r\n.m-nav .m-nav__item > .m-nav__link {\r\n    padding: 2px 11px;\r\n}\r\n.flag-icon{\r\n    text-align: center!important;\r\n}\r\n.button-crud{\r\n  padding: 6px!important;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Component/Warehouse/WareHouse.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center border-title\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                WareHouse Management\r\n            </h3>\r\n         \r\n        </div>\r\n        <div>\r\n            <button class=\"btn btn-outline-success m-btn m-btn--icon m-btn--outline-2x\" (click)=\"Add({Id:0, IsEdit:true})\">\r\n                <span>\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span>Add</span>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<!--BEGIN: Content-->\r\n<div class=\"m-content\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"m-section\">\r\n            <table class=\"table table-bordered m-table m-table--border-metal table-hover\">\r\n                <thead>\r\n                    <tr *ngIf=\"!IsSearch\">\r\n                        <th>#</th>\r\n                        <th style=\"width: 23%\">Name</th>\r\n                        <th style=\"width: 23%\">Storage Location</th>\r\n                        <th style=\"width: 23%\">Stock Keeper</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search Name...\" />\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search StorageLocation...\" />\r\n                        </td>\r\n                        <td>\r\n                            <ng-select [items]=\"StockKeeperEntities \"\r\n                                       bindLabel=\"Username\"\r\n                                       bindValue=\"Id\"\r\n                                       placeholder=\"Stockkeeper...\"\r\n                                       [(ngModel)]=\"WareHouseSearchEntity.StockkeeperId\">\r\n                            </ng-select>\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div>\r\n                                <button href=\"#\" class=\"btn btn-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </button>\r\n                                <button href=\"#\" class=\"btn btn-primary m-btn m-btn--icon btn-sm m-btn--icon-only  m-btn--pill\">\r\n                                    <i class=\"fa fa-refresh\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let WareHouseEntity of Entities; index as i\">\r\n                        <td scope=\"row\">{{i + 1}}</td>\r\n                        <td>\r\n                            <span *ngIf=\"!WareHouseEntity.IsEdit\">{{WareHouseEntity.Name}}</span>\r\n                            <input class=\"form-control\" *ngIf=\"WareHouseEntity.IsEdit\" placeholder=\"Enter Name...\" [(ngModel)]=\"WareHouseEntity.Name\" />\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"!WareHouseEntity.IsEdit\">{{WareHouseEntity.StorageLocation}}</span>\r\n                            <input class=\"form-control\" *ngIf=\"WareHouseEntity.IsEdit\" placeholder=\"Enter StorageLocation...\" [(ngModel)]=\"WareHouseEntity.StorageLocation\" />\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"!WareHouseEntity.IsEdit\">{{WareHouseEntity.StockkeeperEntity?.Username}}</span>\r\n                            <ng-select *ngIf=\"WareHouseEntity.IsEdit\" [items]=\"StockkeeperEntities\"\r\n                                       (ngModelChange)=\"ChooseWarehouse(StockkeeperEntity,WareHouseEntity)\"\r\n                                       bindLabel=\"Username\"\r\n                                       placeholder=\"Stockkeeper...\"\r\n                                       [(ngModel)]=\"StockkeeperEntity\">\r\n                            </ng-select>\r\n                        </td>\r\n                        <td class=\"button-crud\">\r\n                            <div *ngIf=\"!WareHouseEntity.IsEdit\">\r\n                                <button href=\"#\" class=\"btn btn-outline-warning m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                        data-toggle=\"m-tooltip\" data-original-title=\"Edit\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Edit(WareHouseEntity)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </button>\r\n                                <button href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                        data-toggle=\"m-tooltip\" data-original-title=\"Delete\" data-placement=\"right\" data-skin=\"dark\"\r\n                                        mwlConfirmationPopover [popoverTitle]=\"'Are you sure?'\" placement=\"top\" (confirm)=\"Delete(WareHouseEntity)\" (cancel)=\"cancelClicked = true\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"WareHouseEntity.IsEdit\">\r\n                                <button href=\"#\" class=\"btn btn-outline-info m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                        data-toggle=\"m-tooltip\" data-original-title=\"Save\" data-placement=\"left\" data-skin=\"dark\" (click)=\"Save(WareHouseEntity)\">\r\n                                    <i class=\"fa fa-save\"></i>\r\n                                </button>\r\n                                <button href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                        data-toggle=\"m-tooltip\" data-original-title=\"Cancel\" data-placement=\"right\" data-skin=\"dark\" (click)=\"Cancel(WareHouseEntity)\">\r\n                                    <i class=\"fa fa-remove\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-paging [PagingModel]=\"PagingModel\" [dot]=\"true\" (onChanges)=\"SearchWareHouse()\"></app-paging>\r\n<!--END: Content-->\r\n"

/***/ }),

/***/ "./src/app/Component/Warehouse/WareHouse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WareHouse_SearchEntity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.SearchEntity.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var Employee_Entity_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.Entity.ts");
var Employee_Service_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.Service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var Employee_SearchEntity_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.SearchEntity.ts");
;
var WareHouseComponent = /** @class */ (function (_super) {
    __extends(WareHouseComponent, _super);
    function WareHouseComponent(cd, WareHouseService, toastr, vcr, EmployeeService) {
        var _this = _super.call(this, WareHouseService, cd, toastr, vcr) || this;
        _this.WareHouseService = WareHouseService;
        _this.EmployeeService = EmployeeService;
        _this.WareHouseSearchEntity = new WareHouse_SearchEntity_1.WareHouseSearchEntity();
        _this.StockKeeperEntities = [];
        _this.StockKeeperEntity = new Employee_Entity_1.EmployeeEntity();
        _this.StockkeeperSearchEntity = new Employee_SearchEntity_1.SearchEmployeeEntity();
        _this.PagingModel = new paging_model_1.PagingModel(7, 10, function (data) {
        });
        _this.toastr.setRootViewContainerRef(vcr);
        _this.Search(_this.WareHouseSearchEntity);
        _this.GetStockkeeperList();
        return _this;
    }
    WareHouseComponent.prototype.ngOnInit = function () {
    };
    WareHouseComponent.prototype.GetStockkeeperList = function () {
        var _this = this;
        var SearchEntity = new Employee_SearchEntity_1.SearchEmployeeEntity();
        SearchEntity.Skip = 0;
        SearchEntity.Take = 10;
        this.EmployeeService.Gets(SearchEntity).subscribe(function (res) {
            _this.StockKeeperEntities = res;
            _this.StockKeeperEntity = _this.StockKeeperEntities[0];
            // this.WareHouseEntity.StockkeeperId = this.StockkeeperEntities[0].Id;
            // this.WareHouseEntity.StockkeeperEntity = this.StockkeeperEntities[0];
        });
    };
    WareHouseComponent.prototype.ChooseWarehouse = function (StockeeperEntity, WareHouseEntity) {
        WareHouseEntity.StockkeeperEntity = StockeeperEntity;
        WareHouseEntity.StockkeeperId = StockeeperEntity.Id;
        console.log(WareHouseEntity.StockkeeperEntity);
        console.log(WareHouseEntity.StockkeeperId);
    };
    WareHouseComponent = __decorate([
        core_1.Component({
            selector: 'app-WareHouse',
            template: __webpack_require__("./src/app/Component/Warehouse/WareHouse.component.html"),
            styles: [__webpack_require__("./src/app/Component/Warehouse/WareHouse.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, WareHouse_Service_1.WareHouseService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef, Employee_Service_1.EmployeeService])
    ], WareHouseComponent);
    return WareHouseComponent;
}(app_component_1.CommonComponent));
exports.WareHouseComponent = WareHouseComponent;


/***/ }),

/***/ "./src/app/Module/FilterEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var FilterEntity = /** @class */ (function () {
    function FilterEntity(FilterEntity) {
        if (FilterEntity === void 0) { FilterEntity = null; }
        if (FilterEntity == null) {
            this.Skip = 0;
            this.Take = 10;
            this.OrderBy = 'Id';
            this.Type = 'None';
        }
        else {
            this.Skip = FilterEntity.Skip;
            this.Take = FilterEntity.Take;
            this.OrderBy = FilterEntity.OrderBy;
            this.Type = FilterEntity.Type;
        }
    }
    FilterEntity.prototype.ToParams = function () {
        var params = new http_1.HttpParams();
        for (var key in this) {
            if (this.hasOwnProperty(key) && this[key.toString()] != null) {
                params = params.set(key, this[key.toString()]);
            }
        }
        return params;
    };
    return FilterEntity;
}());
exports.FilterEntity = FilterEntity;


/***/ }),

/***/ "./src/app/Module/IEntity.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IEntity = /** @class */ (function () {
    function IEntity() {
        this.Id = 0;
        this.IsEdit = false;
        this.IsSelected = false;
        this.IsActive = false;
        this.Error = {};
    }
    IEntity.prototype.Clone = function (Entity) {
        return JSON.parse(JSON.stringify(Entity));
    };
    IEntity.prototype.Init = function () {
        for (var key in this) {
            if (this.hasOwnProperty(key) && this[key.toString()] != null) {
                this.Error[key] = this[key.toString()];
            }
        }
    };
    return IEntity;
}());
exports.IEntity = IEntity;


/***/ }),

/***/ "./src/app/Module/MCategory/Category.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var CategoryEntity = /** @class */ (function (_super) {
    __extends(CategoryEntity, _super);
    function CategoryEntity() {
        var _this = _super.call(this) || this;
        _this.Code = null;
        _this.ParentId = null;
        _this.ParentEntity = null;
        _this.Names = {};
        return _this;
    }
    return CategoryEntity;
}(IEntity_Entity_1.IEntity));
exports.CategoryEntity = CategoryEntity;


/***/ }),

/***/ "./src/app/Module/MCategory/Category.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CategorySearchEntity = /** @class */ (function (_super) {
    __extends(CategorySearchEntity, _super);
    function CategorySearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.ParentId = Entity == null ? null : Entity.ParentId;
        return _this;
    }
    return CategorySearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CategorySearchEntity = CategorySearchEntity;


/***/ }),

/***/ "./src/app/Module/MCategory/Category.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/Categories';
        return _this;
    }
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CategoryService);
    return CategoryService;
}(HttpService_1.HttpService));
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./src/app/Module/MCity/City.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CitySearchEntity = /** @class */ (function (_super) {
    __extends(CitySearchEntity, _super);
    function CitySearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = null;
        _this.Name = null;
        _this.CountryId = null;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.CountryId = Entity == null ? null : Entity.CountryId;
        return _this;
    }
    return CitySearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CitySearchEntity = CitySearchEntity;


/***/ }),

/***/ "./src/app/Module/MCity/City.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CityService = /** @class */ (function (_super) {
    __extends(CityService, _super);
    function CityService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Cities';
        return _this;
    }
    CityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CityService);
    return CityService;
}(HttpService_1.HttpService));
exports.CityService = CityService;


/***/ }),

/***/ "./src/app/Module/MCountry/Country.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CountrySearchEntity = /** @class */ (function (_super) {
    __extends(CountrySearchEntity, _super);
    function CountrySearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = null;
        _this.Name = null;
        _this.Note = null;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.Note = Entity == null ? null : Entity.Note;
        return _this;
    }
    return CountrySearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CountrySearchEntity = CountrySearchEntity;


/***/ }),

/***/ "./src/app/Module/MCountry/Country.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CountryService = /** @class */ (function (_super) {
    __extends(CountryService, _super);
    function CountryService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Countries';
        return _this;
    }
    CountryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}(HttpService_1.HttpService));
exports.CountryService = CountryService;


/***/ }),

/***/ "./src/app/Module/MCoupon/Coupon.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CouponSearchEntity = /** @class */ (function (_super) {
    __extends(CouponSearchEntity, _super);
    function CouponSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.StartDate = null;
        _this.EndDate = null;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.StartDate = Entity == null ? null : Entity.StartDate;
        _this.EndDate = Entity == null ? null : Entity.EndDate;
        return _this;
    }
    return CouponSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CouponSearchEntity = CouponSearchEntity;


/***/ }),

/***/ "./src/app/Module/MCoupon/Coupon.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CouponService = /** @class */ (function (_super) {
    __extends(CouponService, _super);
    function CouponService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Coupons';
        return _this;
    }
    CouponService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CouponService);
    return CouponService;
}(HttpService_1.HttpService));
exports.CouponService = CouponService;


/***/ }),

/***/ "./src/app/Module/MCustomer/Customer.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CustomerSearchEntity = /** @class */ (function (_super) {
    __extends(CustomerSearchEntity, _super);
    function CustomerSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Username = null;
        _this.Display = null;
        _this.Picture = null;
        _this.FacebookId = null;
        _this.FacebookEmail = null;
        _this.GoogleId = null;
        _this.GoogleEmail = null;
        _this.CustomerGroupId = null;
        _this.Username = Entity == null ? null : Entity.Username;
        _this.Display = Entity == null ? null : Entity.Display;
        _this.Picture = Entity == null ? null : Entity.Picture;
        _this.FacebookId = Entity == null ? null : Entity.FacebookId;
        _this.FacebookEmail = Entity == null ? null : Entity.FacebookEmail;
        _this.GoogleId = Entity == null ? null : Entity.GoogleId;
        _this.GoogleEmail = Entity == null ? null : Entity.GoogleEmail;
        _this.CustomerGroupId = Entity == null ? null : Entity.CustomerGroupId;
        return _this;
    }
    return CustomerSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CustomerSearchEntity = CustomerSearchEntity;


/***/ }),

/***/ "./src/app/Module/MCustomer/Customer.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CustomerService = /** @class */ (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Customers';
        return _this;
    }
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CustomerService);
    return CustomerService;
}(HttpService_1.HttpService));
exports.CustomerService = CustomerService;


/***/ }),

/***/ "./src/app/Module/MCustomerGroup/CustomerGroup.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var CustomerGroupSearchEntity = /** @class */ (function (_super) {
    __extends(CustomerGroupSearchEntity, _super);
    function CustomerGroupSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = null;
        _this.Name = null;
        _this.Description = null;
        _this.IsActive = true;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.Description = Entity == null ? null : Entity.Description;
        _this.IsActive = Entity == null ? null : Entity.IsActive;
        return _this;
    }
    return CustomerGroupSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.CustomerGroupSearchEntity = CustomerGroupSearchEntity;


/***/ }),

/***/ "./src/app/Module/MCustomerGroup/CustomerGroup.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var CustomerGroupService = /** @class */ (function (_super) {
    __extends(CustomerGroupService, _super);
    function CustomerGroupService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/CustomerGroups';
        return _this;
    }
    CustomerGroupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CustomerGroupService);
    return CustomerGroupService;
}(HttpService_1.HttpService));
exports.CustomerGroupService = CustomerGroupService;


/***/ }),

/***/ "./src/app/Module/MDiscount/Discount.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var DiscountEntity = /** @class */ (function (_super) {
    __extends(DiscountEntity, _super);
    function DiscountEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.Min = null;
        _this.Max = null;
        _this.IsDeleted = null;
        _this.ProductId = null;
        return _this;
    }
    return DiscountEntity;
}(IEntity_Entity_1.IEntity));
exports.DiscountEntity = DiscountEntity;


/***/ }),

/***/ "./src/app/Module/MDiscount/Discount.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var DiscountSearchEntity = /** @class */ (function (_super) {
    __extends(DiscountSearchEntity, _super);
    function DiscountSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Min = 0;
        _this.Max = null;
        _this.IsDeleted = null;
        _this.ProductId = null;
        _this.Min = Entity == null ? null : Entity.Min;
        _this.Max = Entity == null ? null : Entity.Max;
        _this.IsDeleted = Entity == null ? null : Entity.IsDeleted;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        return _this;
    }
    return DiscountSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.DiscountSearchEntity = DiscountSearchEntity;


/***/ }),

/***/ "./src/app/Module/MDiscount/Discount.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var DiscountService = /** @class */ (function (_super) {
    __extends(DiscountService, _super);
    function DiscountService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Discounts';
        return _this;
    }
    DiscountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DiscountService);
    return DiscountService;
}(HttpService_1.HttpService));
exports.DiscountService = DiscountService;


/***/ }),

/***/ "./src/app/Module/MEmployee/Employee.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var EmployeeEntity = /** @class */ (function (_super) {
    __extends(EmployeeEntity, _super);
    function EmployeeEntity(entity, isSample) {
        var _this = _super.call(this) || this;
        _this.Username = null;
        _this.Password = null;
        _this.Display = null;
        _this.Phone = null;
        _this.IdentityCard = null;
        _this.Birthday = null;
        _this.Picture = '';
        return _this;
    }
    return EmployeeEntity;
}(IEntity_Entity_1.IEntity));
exports.EmployeeEntity = EmployeeEntity;


/***/ }),

/***/ "./src/app/Module/MEmployee/Employee.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var SearchEmployeeEntity = /** @class */ (function (_super) {
    __extends(SearchEmployeeEntity, _super);
    function SearchEmployeeEntity(Employee) {
        if (Employee === void 0) { Employee = null; }
        var _this = _super.call(this, Employee) || this;
        _this.Id = Employee == null ? null : Employee.Id;
        _this.UserName = Employee == null ? null : Employee.UserName;
        _this.HashPassword = Employee == null ? null : Employee.HashPassword;
        _this.Display = Employee == null ? null : Employee.Display;
        _this.Avatar = Employee == null ? null : Employee.Avatar;
        _this.FacebookId = Employee == null ? null : Employee.FacebookId;
        _this.FacebookEmail = Employee == null ? null : Employee.FacebookEmail;
        _this.GoogleId = Employee == null ? null : Employee.GoogleId;
        _this.GoogleEmail = Employee == null ? null : Employee.GoogleEmail;
        _this.PasswordAttemptTimes = Employee == null ? null : Employee.PasswordAttemptTimes;
        _this.OtpCode = Employee == null ? null : Employee.OtpCode;
        _this.PhoneNumber = Employee == null ? null : Employee.PhoneNumber;
        _this.IsDeleted = Employee == null ? null : Employee.IsDeleted;
        return _this;
    }
    return SearchEmployeeEntity;
}(FilterEntity_1.FilterEntity));
exports.SearchEmployeeEntity = SearchEmployeeEntity;


/***/ }),

/***/ "./src/app/Module/MEmployee/Employee.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var EmployeeService = /** @class */ (function (_super) {
    __extends(EmployeeService, _super);
    function EmployeeService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Employees';
        return _this;
    }
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}(HttpService_1.HttpService));
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/Module/MIntroduction/Introduction.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var IntroductionSearchEntity = /** @class */ (function (_super) {
    __extends(IntroductionSearchEntity, _super);
    function IntroductionSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.Content = Entity == null ? null : Entity.Content;
        _this.Route = Entity == null ? null : Entity.Route;
        return _this;
    }
    return IntroductionSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.IntroductionSearchEntity = IntroductionSearchEntity;


/***/ }),

/***/ "./src/app/Module/MIntroduction/Introduction.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var IntroductionService = /** @class */ (function (_super) {
    __extends(IntroductionService, _super);
    function IntroductionService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Introductions';
        return _this;
    }
    IntroductionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], IntroductionService);
    return IntroductionService;
}(HttpService_1.HttpService));
exports.IntroductionService = IntroductionService;


/***/ }),

/***/ "./src/app/Module/MInventory/Inventory.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var WareHouse_Entity_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Entity.ts");
var InventoryEntity = /** @class */ (function (_super) {
    __extends(InventoryEntity, _super);
    function InventoryEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.IsDeleted = false;
        _this.WareHouseId = 0;
        _this.ProductId = 0;
        _this.Current = 0;
        _this.ProductEntity = new Product_Entity_1.ProductEntity();
        _this.WareHouseEntity = new WareHouse_Entity_1.WareHouseEntity();
        return _this;
    }
    return InventoryEntity;
}(IEntity_Entity_1.IEntity));
exports.InventoryEntity = InventoryEntity;


/***/ }),

/***/ "./src/app/Module/MInventory/Inventory.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var InventorySearchEntity = /** @class */ (function (_super) {
    __extends(InventorySearchEntity, _super);
    function InventorySearchEntity(InventoryEntity) {
        if (InventoryEntity === void 0) { InventoryEntity = null; }
        var _this = _super.call(this, InventoryEntity) || this;
        _this.IsDeleted = InventoryEntity == null ? null : InventoryEntity.IsDeleted;
        _this.WareHouseId = InventoryEntity == null ? null : InventoryEntity.WareHouseId;
        _this.ProductId = InventoryEntity == null ? null : InventoryEntity.ProductId;
        _this.CreatedDate = InventoryEntity == null ? null : InventoryEntity.CreatedDate;
        _this.UpdatedDate = InventoryEntity == null ? null : InventoryEntity.UpdatedDate;
        return _this;
    }
    return InventorySearchEntity;
}(FilterEntity_1.FilterEntity));
exports.InventorySearchEntity = InventorySearchEntity;


/***/ }),

/***/ "./src/app/Module/MInventory/Inventory.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var InventoryService = /** @class */ (function (_super) {
    __extends(InventoryService, _super);
    function InventoryService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Inventories';
        return _this;
    }
    InventoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], InventoryService);
    return InventoryService;
}(HttpService_1.HttpService));
exports.InventoryService = InventoryService;


/***/ }),

/***/ "./src/app/Module/MIssueNote/IssueNote.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var IssueNoteEntity = /** @class */ (function (_super) {
    __extends(IssueNoteEntity, _super);
    function IssueNoteEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.InventoryId = null;
        _this.SupplierId = null;
        _this.WareHouseId = null;
        _this.ProductId = null;
        _this.Quantity = null;
        _this.UnitPrice = null;
        _this.Description = null;
        _this.IsDeleted = false;
        _this.InventoryEntity = null;
        _this.SupplierEntity = null;
        _this.WareHouseEntity = null;
        _this.ProductEntity = null;
        return _this;
    }
    return IssueNoteEntity;
}(IEntity_Entity_1.IEntity));
exports.IssueNoteEntity = IssueNoteEntity;


/***/ }),

/***/ "./src/app/Module/MIssueNote/IssueNote.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var IssueNoteSearchEntity = /** @class */ (function (_super) {
    __extends(IssueNoteSearchEntity, _super);
    function IssueNoteSearchEntity(IssueNote) {
        if (IssueNote === void 0) { IssueNote = null; }
        var _this = _super.call(this, IssueNote) || this;
        _this.Id = null;
        _this.InventoryId = null;
        _this.SupplierId = null;
        _this.WareHouseId = null;
        _this.Quantity = null;
        _this.UnitPrice = null;
        _this.Id = IssueNote == null ? null : IssueNote.Id;
        _this.InventoryId = IssueNote == null ? null : IssueNote.InventoryId;
        _this.SupplierId = IssueNote == null ? null : IssueNote.SupplierId;
        _this.WareHouseId = IssueNote == null ? null : IssueNote.WareHouseId;
        _this.Quantity = IssueNote == null ? null : IssueNote.Quantity;
        _this.UnitPrice = IssueNote == null ? null : IssueNote.UnitPrice;
        return _this;
    }
    return IssueNoteSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.IssueNoteSearchEntity = IssueNoteSearchEntity;


/***/ }),

/***/ "./src/app/Module/MIssueNote/IssueNote.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var IssueNoteService = /** @class */ (function (_super) {
    __extends(IssueNoteService, _super);
    function IssueNoteService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/IssueNotes';
        return _this;
    }
    IssueNoteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], IssueNoteService);
    return IssueNoteService;
}(HttpService_1.HttpService));
exports.IssueNoteService = IssueNoteService;


/***/ }),

/***/ "./src/app/Module/MIssueNoteLine/IssueNoteLine.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var IssueNoteLineSearchEntity = /** @class */ (function (_super) {
    __extends(IssueNoteLineSearchEntity, _super);
    function IssueNoteLineSearchEntity() {
        var _this = _super.call(this) || this;
        _this.IssueNoteId = null;
        _this.ProductId = null;
        _this.Quantity = null;
        _this.UnitPrice = null;
        _this.Price = null;
        _this.ManufactureDate = null;
        _this.ExpirationDate = null;
        _this.Shipment = null;
        _this.Note = null;
        return _this;
    }
    return IssueNoteLineSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.IssueNoteLineSearchEntity = IssueNoteLineSearchEntity;


/***/ }),

/***/ "./src/app/Module/MIssueNoteLine/IssueNoteLine.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var IssueNoteLineService = /** @class */ (function (_super) {
    __extends(IssueNoteLineService, _super);
    function IssueNoteLineService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/IssuseNoteLines';
        return _this;
    }
    IssueNoteLineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], IssueNoteLineService);
    return IssueNoteLineService;
}(HttpService_1.HttpService));
exports.IssueNoteLineService = IssueNoteLineService;


/***/ }),

/***/ "./src/app/Module/MLanguage/Language.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var LanguageSearchEntity = /** @class */ (function (_super) {
    __extends(LanguageSearchEntity, _super);
    function LanguageSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        return _this;
    }
    return LanguageSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.LanguageSearchEntity = LanguageSearchEntity;


/***/ }),

/***/ "./src/app/Module/MLanguage/Language.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var LanguageService = /** @class */ (function (_super) {
    __extends(LanguageService, _super);
    function LanguageService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Languages';
        return _this;
    }
    LanguageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LanguageService);
    return LanguageService;
}(HttpService_1.HttpService));
exports.LanguageService = LanguageService;


/***/ }),

/***/ "./src/app/Module/MManufacturer/Manufacturer.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ManufacturerSearchEntity = /** @class */ (function (_super) {
    __extends(ManufacturerSearchEntity, _super);
    function ManufacturerSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Code = null;
        _this.Name = null;
        _this.Address = null;
        _this.Origin = null;
        _this.TaxCode = null;
        _this.IsActive = true;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.Address = Entity == null ? null : Entity.Address;
        _this.Origin = Entity == null ? null : Entity.Origin;
        _this.TaxCode = Entity == null ? null : Entity.TaxCode;
        _this.IsActive = Entity == null ? null : Entity.IsActive;
        return _this;
    }
    return ManufacturerSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ManufacturerSearchEntity = ManufacturerSearchEntity;


/***/ }),

/***/ "./src/app/Module/MManufacturer/Manufacturer.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ManufacturerService = /** @class */ (function (_super) {
    __extends(ManufacturerService, _super);
    function ManufacturerService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/Manufacturers";
        return _this;
    }
    ManufacturerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ManufacturerService);
    return ManufacturerService;
}(HttpService_1.HttpService));
exports.ManufacturerService = ManufacturerService;


/***/ }),

/***/ "./src/app/Module/MOpeningBalance/OpeningBalance.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var OpeningBalanceSearchEntity = /** @class */ (function (_super) {
    __extends(OpeningBalanceSearchEntity, _super);
    function OpeningBalanceSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        _this.Code = Entity == null ? null : Entity.Code;
        return _this;
    }
    return OpeningBalanceSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.OpeningBalanceSearchEntity = OpeningBalanceSearchEntity;


/***/ }),

/***/ "./src/app/Module/MOpeningBalance/OpeningBalance.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var OpeningBalanceService = /** @class */ (function (_super) {
    __extends(OpeningBalanceService, _super);
    function OpeningBalanceService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/PriceLists";
        return _this;
    }
    OpeningBalanceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OpeningBalanceService);
    return OpeningBalanceService;
}(HttpService_1.HttpService));
exports.OpeningBalanceService = OpeningBalanceService;


/***/ }),

/***/ "./src/app/Module/MOperation/Operation.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var OperationSearchEntity = /** @class */ (function (_super) {
    __extends(OperationSearchEntity, _super);
    function OperationSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Path = Entity == null ? null : Entity.Path;
        _this.Method = Entity == null ? null : Entity.Method;
        return _this;
    }
    return OperationSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.OperationSearchEntity = OperationSearchEntity;


/***/ }),

/***/ "./src/app/Module/MOperation/Operation.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var OperationService = /** @class */ (function (_super) {
    __extends(OperationService, _super);
    function OperationService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Operations';
        return _this;
    }
    OperationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OperationService);
    return OperationService;
}(HttpService_1.HttpService));
exports.OperationService = OperationService;


/***/ }),

/***/ "./src/app/Module/MOrder/Order.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var OrderSearchEntity = /** @class */ (function (_super) {
    __extends(OrderSearchEntity, _super);
    function OrderSearchEntity() {
        var _this = _super.call(this) || this;
        _this.CustomerId = null;
        _this.Code = null;
        _this.CreatedDate = null;
        _this.UpdatedDate = null;
        _this.Status = null;
        _this.Total = 0;
        _this.OnPaid = false;
        _this.Method = null;
        _this.ShipmentDetailId = null;
        return _this;
    }
    return OrderSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.OrderSearchEntity = OrderSearchEntity;


/***/ }),

/***/ "./src/app/Module/MOrder/Order.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/Orders';
        return _this;
    }
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OrderService);
    return OrderService;
}(HttpService_1.HttpService));
exports.OrderService = OrderService;


/***/ }),

/***/ "./src/app/Module/MOrderLine/OrderLine.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var OrderLineSearchEntity = /** @class */ (function (_super) {
    __extends(OrderLineSearchEntity, _super);
    function OrderLineSearchEntity() {
        var _this = _super.call(this) || this;
        _this.OrderId = null;
        _this.ProductId = null;
        _this.Quantity = null;
        _this.UnitPrice = null;
        _this.Price = null;
        _this.ManufactureDate = null;
        _this.ExpirationDate = null;
        _this.Shipment = null;
        _this.Note = null;
        return _this;
    }
    return OrderLineSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.OrderLineSearchEntity = OrderLineSearchEntity;


/***/ }),

/***/ "./src/app/Module/MOrderLine/OrderLine.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var OrderLineService = /** @class */ (function (_super) {
    __extends(OrderLineService, _super);
    function OrderLineService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/OrderLines';
        return _this;
    }
    OrderLineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OrderLineService);
    return OrderLineService;
}(HttpService_1.HttpService));
exports.OrderLineService = OrderLineService;


/***/ }),

/***/ "./src/app/Module/MPack/Pack.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var PackEntity = /** @class */ (function (_super) {
    __extends(PackEntity, _super);
    function PackEntity() {
        var _this = _super.call(this) || this;
        _this.ProductId = null;
        _this.UnitPrice = null;
        _this.Quantity = null;
        _this.IsDeleted = null;
        _this.IsDefault = null;
        return _this;
    }
    return PackEntity;
}(IEntity_Entity_1.IEntity));
exports.PackEntity = PackEntity;


/***/ }),

/***/ "./src/app/Module/MPack/Pack.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var PackSearchEntity = /** @class */ (function (_super) {
    __extends(PackSearchEntity, _super);
    function PackSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.StartDate = Entity == null ? null : Entity.StartDate;
        _this.EndDate = Entity == null ? null : Entity.EndDate;
        return _this;
    }
    return PackSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.PackSearchEntity = PackSearchEntity;


/***/ }),

/***/ "./src/app/Module/MPack/Pack.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var PackService = /** @class */ (function (_super) {
    __extends(PackService, _super);
    function PackService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Packs';
        return _this;
    }
    PackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PackService);
    return PackService;
}(HttpService_1.HttpService));
exports.PackService = PackService;


/***/ }),

/***/ "./src/app/Module/MPermission/Permission.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var PermissionSearchEntity = /** @class */ (function (_super) {
    __extends(PermissionSearchEntity, _super);
    function PermissionSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.UserId = Entity == null ? null : Entity.UserId;
        _this.RoleId = Entity == null ? null : Entity.RoleId;
        return _this;
    }
    return PermissionSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.PermissionSearchEntity = PermissionSearchEntity;


/***/ }),

/***/ "./src/app/Module/MPermission/Permission.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var PermissionService = /** @class */ (function (_super) {
    __extends(PermissionService, _super);
    function PermissionService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/Permissions";
        return _this;
    }
    PermissionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PermissionService);
    return PermissionService;
}(HttpService_1.HttpService));
exports.PermissionService = PermissionService;


/***/ }),

/***/ "./src/app/Module/MProduct/Product.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var ProductEntity = /** @class */ (function (_super) {
    __extends(ProductEntity, _super);
    function ProductEntity() {
        var _this = _super.call(this) || this;
        _this.Code = null;
        _this.CategoryId = null;
        _this.IsDeleted = false;
        _this.Unit = null;
        _this.CategoryEntity = null;
        _this.TaxEntities = [];
        _this.PackEntities = [];
        _this.DiscountEntities = [];
        return _this;
    }
    return ProductEntity;
}(IEntity_Entity_1.IEntity));
exports.ProductEntity = ProductEntity;
var ExtraEntity = /** @class */ (function () {
    function ExtraEntity() {
        this.Id = null;
        this.Code = null;
        this.Name = null;
        this.Value = null;
    }
    return ExtraEntity;
}());
exports.ExtraEntity = ExtraEntity;


/***/ }),

/***/ "./src/app/Module/MProduct/Product.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ProductSearchEntity = /** @class */ (function (_super) {
    __extends(ProductSearchEntity, _super);
    function ProductSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.CategoryId = Entity == null ? null : Entity.CategoryId;
        _this.LanguageId = Entity == null ? null : Entity.LanguageId;
        return _this;
    }
    return ProductSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ProductSearchEntity = ProductSearchEntity;


/***/ }),

/***/ "./src/app/Module/MProduct/Product.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/Products";
        return _this;
    }
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}(HttpService_1.HttpService));
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/Module/MProductAttribute/ProductAttribute.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var ProductAttributeEntity = /** @class */ (function (_super) {
    __extends(ProductAttributeEntity, _super);
    function ProductAttributeEntity() {
        var _this = _super.call(this) || this;
        _this.CategoryId = null;
        _this.Code = null;
        _this.Names = {};
        _this.CategoryEntity = null;
        return _this;
    }
    return ProductAttributeEntity;
}(IEntity_Entity_1.IEntity));
exports.ProductAttributeEntity = ProductAttributeEntity;


/***/ }),

/***/ "./src/app/Module/MProductAttribute/ProductAttribute.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ProductAttributeSearchEntity = /** @class */ (function (_super) {
    __extends(ProductAttributeSearchEntity, _super);
    function ProductAttributeSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.CategoryId = Entity == null ? null : Entity.CategoryId;
        _this.Code = Entity == null ? null : Entity.Code;
        return _this;
    }
    return ProductAttributeSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ProductAttributeSearchEntity = ProductAttributeSearchEntity;


/***/ }),

/***/ "./src/app/Module/MProductAttribute/ProductAttribute.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ProductAttributeService = /** @class */ (function (_super) {
    __extends(ProductAttributeService, _super);
    function ProductAttributeService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/ProductAttributes";
        return _this;
    }
    ProductAttributeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductAttributeService);
    return ProductAttributeService;
}(HttpService_1.HttpService));
exports.ProductAttributeService = ProductAttributeService;


/***/ }),

/***/ "./src/app/Module/MProductPicture/ProductPicture.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var ProductPictureEntity = /** @class */ (function (_super) {
    __extends(ProductPictureEntity, _super);
    function ProductPictureEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.Path = null;
        _this.ProductId = 0;
        _this.IsDefault = false;
        return _this;
    }
    return ProductPictureEntity;
}(IEntity_Entity_1.IEntity));
exports.ProductPictureEntity = ProductPictureEntity;


/***/ }),

/***/ "./src/app/Module/MProductPicture/ProductPicture.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ProductPictureSearchEntity = /** @class */ (function (_super) {
    __extends(ProductPictureSearchEntity, _super);
    function ProductPictureSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Path = null;
        _this.ProductId = 0;
        _this.IsDefault = false;
        _this.Path = Entity == null ? null : Entity.Path;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        _this.IsDefault = Entity == null ? false : Entity.IsDefault;
        return _this;
    }
    return ProductPictureSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ProductPictureSearchEntity = ProductPictureSearchEntity;


/***/ }),

/***/ "./src/app/Module/MProductPicture/ProductPicture.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ProductPictureService = /** @class */ (function (_super) {
    __extends(ProductPictureService, _super);
    function ProductPictureService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/ProductPictures';
        return _this;
    }
    ProductPictureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductPictureService);
    return ProductPictureService;
}(HttpService_1.HttpService));
exports.ProductPictureService = ProductPictureService;


/***/ }),

/***/ "./src/app/Module/MProductValue/ProductValue.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var ProductValueEntity = /** @class */ (function (_super) {
    __extends(ProductValueEntity, _super);
    function ProductValueEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.ProductId = 0;
        _this.LanguageId = 0;
        _this.AttributeId = 0;
        _this.Code = null;
        _this.Name = null;
        _this.Value = null;
        _this.IsDeleted = false;
        return _this;
    }
    return ProductValueEntity;
}(IEntity_Entity_1.IEntity));
exports.ProductValueEntity = ProductValueEntity;


/***/ }),

/***/ "./src/app/Module/MProductValue/ProductValue.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ProductValueSearchEntity = /** @class */ (function (_super) {
    __extends(ProductValueSearchEntity, _super);
    function ProductValueSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.ProductId = 0;
        _this.LanguageId = 0;
        _this.AttributeId = 0;
        _this.Value = null;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        _this.LanguageId = Entity == null ? null : Entity.LanguageId;
        _this.AttributeId = Entity == null ? null : Entity.AttributeId;
        _this.Value = Entity == null ? null : Entity.Value;
        return _this;
    }
    return ProductValueSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ProductValueSearchEntity = ProductValueSearchEntity;


/***/ }),

/***/ "./src/app/Module/MProductValue/ProductValue.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ProductValueService = /** @class */ (function (_super) {
    __extends(ProductValueService, _super);
    function ProductValueService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/ProductValues';
        return _this;
    }
    ProductValueService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductValueService);
    return ProductValueService;
}(HttpService_1.HttpService));
exports.ProductValueService = ProductValueService;


/***/ }),

/***/ "./src/app/Module/MReceiptNote/ReceiptNote.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ReceiptNoteService = /** @class */ (function (_super) {
    __extends(ReceiptNoteService, _super);
    function ReceiptNoteService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/ReceiptNotes';
        return _this;
    }
    ReceiptNoteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ReceiptNoteService);
    return ReceiptNoteService;
}(HttpService_1.HttpService));
exports.ReceiptNoteService = ReceiptNoteService;


/***/ }),

/***/ "./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var Product_Entity_1 = __webpack_require__("./src/app/Module/MProduct/Product.Entity.ts");
var ReceiptNoteLineEntity = /** @class */ (function (_super) {
    __extends(ReceiptNoteLineEntity, _super);
    function ReceiptNoteLineEntity() {
        var _this = _super.call(this) || this;
        _this.Id = 0;
        _this.ReceiptNoteId = 0;
        _this.ProductId = 0;
        _this.Quantity = 0;
        _this.UnitPrice = 0;
        _this.Price = 0;
        _this.ManufactureDate = null;
        _this.ExpirationDate = null;
        _this.Shipment = null;
        _this.Note = null;
        _this.ProductEntity = new Product_Entity_1.ProductEntity();
        return _this;
    }
    return ReceiptNoteLineEntity;
}(IEntity_Entity_1.IEntity));
exports.ReceiptNoteLineEntity = ReceiptNoteLineEntity;


/***/ }),

/***/ "./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ReceiptNoteLineSearchEntity = /** @class */ (function (_super) {
    __extends(ReceiptNoteLineSearchEntity, _super);
    function ReceiptNoteLineSearchEntity() {
        var _this = _super.call(this) || this;
        _this.ReceiptNoteId = null;
        _this.ProductId = null;
        _this.Quantity = null;
        _this.UnitPrice = null;
        _this.Price = null;
        _this.ManufactureDate = null;
        _this.ExpirationDate = null;
        _this.Shipment = null;
        _this.Note = null;
        return _this;
    }
    return ReceiptNoteLineSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ReceiptNoteLineSearchEntity = ReceiptNoteLineSearchEntity;


/***/ }),

/***/ "./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ReceiptNoteLineService = /** @class */ (function (_super) {
    __extends(ReceiptNoteLineService, _super);
    function ReceiptNoteLineService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/ReceiptNoteLines';
        return _this;
    }
    ReceiptNoteLineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ReceiptNoteLineService);
    return ReceiptNoteLineService;
}(HttpService_1.HttpService));
exports.ReceiptNoteLineService = ReceiptNoteLineService;


/***/ }),

/***/ "./src/app/Module/MRole/Role.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var RoleEntity = /** @class */ (function (_super) {
    __extends(RoleEntity, _super);
    function RoleEntity() {
        var _this = _super.call(this) || this;
        _this.Code = null;
        _this.Name = null;
        _this.ParentId = null;
        return _this;
    }
    return RoleEntity;
}(IEntity_Entity_1.IEntity));
exports.RoleEntity = RoleEntity;


/***/ }),

/***/ "./src/app/Module/MRole/Role.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var RoleService = /** @class */ (function (_super) {
    __extends(RoleService, _super);
    function RoleService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/Roles";
        return _this;
    }
    RoleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RoleService);
    return RoleService;
}(HttpService_1.HttpService));
exports.RoleService = RoleService;


/***/ }),

/***/ "./src/app/Module/MShipmentDetail/ShipmentDetail.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var ShipmentDetailSearchEntity = /** @class */ (function (_super) {
    __extends(ShipmentDetailSearchEntity, _super);
    function ShipmentDetailSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.FullName = null;
        _this.CountryId = null;
        _this.CityId = null;
        _this.Address = null;
        _this.Phone = null;
        _this.Note = null;
        _this.CustomerId = null;
        _this.FullName = Entity == null ? null : Entity.FullName;
        _this.CountryId = Entity == null ? null : Entity.CountryId;
        _this.CityId = Entity == null ? null : Entity.CityId;
        _this.Address = Entity == null ? null : Entity.Address;
        _this.Phone = Entity == null ? null : Entity.Phone;
        _this.Note = Entity == null ? null : Entity.Note;
        _this.CustomerId = Entity == null ? null : Entity.CustomerId;
        return _this;
    }
    return ShipmentDetailSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.ShipmentDetailSearchEntity = ShipmentDetailSearchEntity;


/***/ }),

/***/ "./src/app/Module/MShipmentDetail/ShipmentDetail.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var ShipmentDetailService = /** @class */ (function (_super) {
    __extends(ShipmentDetailService, _super);
    function ShipmentDetailService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/ShipmentDetails';
        return _this;
    }
    ShipmentDetailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ShipmentDetailService);
    return ShipmentDetailService;
}(HttpService_1.HttpService));
exports.ShipmentDetailService = ShipmentDetailService;


/***/ }),

/***/ "./src/app/Module/MStockTransfer/StockTransfer.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var StockTransferService = /** @class */ (function (_super) {
    __extends(StockTransferService, _super);
    function StockTransferService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/Categories';
        return _this;
    }
    StockTransferService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StockTransferService);
    return StockTransferService;
}(HttpService_1.HttpService));
exports.StockTransferService = StockTransferService;


/***/ }),

/***/ "./src/app/Module/MStockTransferLine/StockTransferLine.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var StockTransferLineService = /** @class */ (function (_super) {
    __extends(StockTransferLineService, _super);
    function StockTransferLineService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/StockTransferLines';
        return _this;
    }
    StockTransferLineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StockTransferLineService);
    return StockTransferLineService;
}(HttpService_1.HttpService));
exports.StockTransferLineService = StockTransferLineService;


/***/ }),

/***/ "./src/app/Module/MSupplier/Supplier.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var SupplierEntity = /** @class */ (function (_super) {
    __extends(SupplierEntity, _super);
    function SupplierEntity() {
        var _this = _super.call(this) || this;
        _this.Code = null;
        _this.Name = null;
        _this.ParentId = null;
        _this.TaxCode = null;
        _this.Description = null;
        return _this;
    }
    return SupplierEntity;
}(IEntity_Entity_1.IEntity));
exports.SupplierEntity = SupplierEntity;


/***/ }),

/***/ "./src/app/Module/MSupplier/Supplier.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var SupplierSearchEntity = /** @class */ (function (_super) {
    __extends(SupplierSearchEntity, _super);
    function SupplierSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.TaxCode = Entity == null ? null : Entity.TaxCode;
        _this.Description = Entity == null ? null : Entity.Description;
        return _this;
    }
    return SupplierSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.SupplierSearchEntity = SupplierSearchEntity;


/***/ }),

/***/ "./src/app/Module/MSupplier/Supplier.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var SupplierService = /** @class */ (function (_super) {
    __extends(SupplierService, _super);
    function SupplierService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = "/api/Suppliers";
        return _this;
    }
    SupplierService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SupplierService);
    return SupplierService;
}(HttpService_1.HttpService));
exports.SupplierService = SupplierService;


/***/ }),

/***/ "./src/app/Module/MTax/Tax.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var TaxEntity = /** @class */ (function (_super) {
    __extends(TaxEntity, _super);
    function TaxEntity() {
        var _this = _super.call(this) || this;
        _this.Code = null;
        _this.ProductId = null;
        _this.Percentage = null;
        return _this;
    }
    return TaxEntity;
}(IEntity_Entity_1.IEntity));
exports.TaxEntity = TaxEntity;


/***/ }),

/***/ "./src/app/Module/MTax/Tax.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var TaxSearchEntity = /** @class */ (function (_super) {
    __extends(TaxSearchEntity, _super);
    function TaxSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Id = Entity == null ? null : Entity.Id;
        _this.ProductId = Entity == null ? null : Entity.ProductId;
        _this.Code = Entity == null ? null : Entity.Code;
        _this.Percentage = Entity == null ? null : Entity.Percentage;
        return _this;
    }
    return TaxSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.TaxSearchEntity = TaxSearchEntity;


/***/ }),

/***/ "./src/app/Module/MTax/Tax.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var TaxService = /** @class */ (function (_super) {
    __extends(TaxService, _super);
    function TaxService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Taxes';
        return _this;
    }
    TaxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaxService);
    return TaxService;
}(HttpService_1.HttpService));
exports.TaxService = TaxService;


/***/ }),

/***/ "./src/app/Module/MWareHouse/WareHouse.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var WareHouseEntity = /** @class */ (function (_super) {
    __extends(WareHouseEntity, _super);
    function WareHouseEntity() {
        var _this = _super.call(this) || this;
        _this.Name = null;
        _this.StorageLocation = null;
        _this.StockkeeperId = null;
        _this.StockkeeperEntity = null;
        _this.InventoryEntities = [];
        return _this;
    }
    return WareHouseEntity;
}(IEntity_Entity_1.IEntity));
exports.WareHouseEntity = WareHouseEntity;


/***/ }),

/***/ "./src/app/Module/MWareHouse/WareHouse.SearchEntity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var WareHouseSearchEntity = /** @class */ (function (_super) {
    __extends(WareHouseSearchEntity, _super);
    function WareHouseSearchEntity(Entity) {
        if (Entity === void 0) { Entity = null; }
        var _this = _super.call(this, Entity) || this;
        _this.Name = Entity == null ? null : Entity.Name;
        _this.StorageLocation = Entity == null ? null : Entity.StorageLocation;
        _this.StockkeeperId = Entity == null ? null : Entity.StockkeeperId;
        return _this;
    }
    return WareHouseSearchEntity;
}(FilterEntity_1.FilterEntity));
exports.WareHouseSearchEntity = WareHouseSearchEntity;


/***/ }),

/***/ "./src/app/Module/MWareHouse/WareHouse.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var WareHouseService = /** @class */ (function (_super) {
    __extends(WareHouseService, _super);
    function WareHouseService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.Http = Http;
        _this.url = '/api/WareHouses';
        return _this;
    }
    WareHouseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WareHouseService);
    return WareHouseService;
}(HttpService_1.HttpService));
exports.WareHouseService = WareHouseService;


/***/ }),

/***/ "./src/app/Route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Coupon_component_1 = __webpack_require__("./src/app/Component/Coupon/Coupon.component.ts");
var Category_component_1 = __webpack_require__("./src/app/Component/Category/Category.component.ts");
var ProductAttribute_component_1 = __webpack_require__("./src/app/Component/ProductAttribute/ProductAttribute.component.ts");
var Introduction_component_1 = __webpack_require__("./src/app/Component/Introduction/Introduction.component.ts");
var Inventory_component_1 = __webpack_require__("./src/app/Component/Inventory/Inventory.component.ts");
var Language_component_1 = __webpack_require__("./src/app/Component/Language/Language.component.ts");
var Operation_component_1 = __webpack_require__("./src/app/Component/Operation/Operation.component.ts");
var Permission_component_1 = __webpack_require__("./src/app/Component/Permission/Permission.component.ts");
var Product_component_1 = __webpack_require__("./src/app/Component/Product/Product.component.ts");
var Role_component_1 = __webpack_require__("./src/app/Component/Role/Role.component.ts");
var Supplier_component_1 = __webpack_require__("./src/app/Component/Supplier/Supplier.component.ts");
var Login_Component_1 = __webpack_require__("./src/app/Shared/Login/Login.Component.ts");
var Auth_Guard_Service_1 = __webpack_require__("./src/app/Auth.Guard.Service.ts");
var IssueNote_component_1 = __webpack_require__("./src/app/Component/IssueNote/IssueNote.component.ts");
var ReceiptNote_component_1 = __webpack_require__("./src/app/Component/ReceiptNote/ReceiptNote.component.ts");
var WareHouse_component_1 = __webpack_require__("./src/app/Component/Warehouse/WareHouse.component.ts");
var ProductDetail_component_1 = __webpack_require__("./src/app/Component/Product/ProductDetail/ProductDetail.component.ts");
var Manufacturer_component_1 = __webpack_require__("./src/app/Component/Manufacturer/Manufacturer.component.ts");
var CustomerGroup_component_1 = __webpack_require__("./src/app/Component/CustomerGroup/CustomerGroup.component.ts");
var Country_component_1 = __webpack_require__("./src/app/Component/Country/Country.component.ts");
var City_component_1 = __webpack_require__("./src/app/Component/City/City.component.ts");
var ShipmentDetail_component_1 = __webpack_require__("./src/app/Component/ShipmentDetail/ShipmentDetail.component.ts");
var OpeningBalance_component_1 = __webpack_require__("./src/app/Component/OpeningBalance/OpeningBalance.component.ts");
var StockTransfer_component_1 = __webpack_require__("./src/app/Component/StockTransfer/StockTransfer.component.ts");
var ReceiptNoteDetail_component_1 = __webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.ts");
var Employee_component_1 = __webpack_require__("./src/app/Component/Employee/Employee.component.ts");
var Order_component_1 = __webpack_require__("./src/app/Component/Order/Order.component.ts");
var OrderDetail_component_1 = __webpack_require__("./src/app/Component/Order/Detail/OrderDetail.component.ts");
var IssueNoteDetail_component_1 = __webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.ts");
//[END]
var routes = [
    {
        'path': 'Manufacturers',
        'component': Manufacturer_component_1.ManufacturerComponent,
    },
    {
        'path': 'Categories',
        'component': Category_component_1.CategoryComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Categories/:CategoryId',
        children: [
            {
                'path': 'ProductAttributes',
                'component': ProductAttribute_component_1.ProductAttributeComponent,
            }
        ],
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Coupons',
        'component': Coupon_component_1.CouponComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Introductions',
        'component': Introduction_component_1.IntroductionComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Inventories',
        'component': Inventory_component_1.InventoryComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Languages',
        'component': Language_component_1.LanguageComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Operations',
        'component': Operation_component_1.OperationComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Permissions',
        'component': Permission_component_1.PermissionComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Products',
        'component': Product_component_1.ProductComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Products/:ProductId',
        children: [
            {
                'path': 'ProductDetails',
                'component': ProductDetail_component_1.ProductDetailComponent,
            }
        ],
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Roles',
        'component': Role_component_1.RoleComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'Suppliers',
        'component': Supplier_component_1.SupplierComponent,
        canActivate: [Auth_Guard_Service_1.AuthGuard],
    },
    {
        'path': 'SignIn',
        'component': Login_Component_1.LoginComponent,
    },
    {
        'path': 'IssueNotes',
        'component': IssueNote_component_1.IssueNoteComponent,
    },
    {
        'path': 'IssueNotes/:IssueNoteId',
        'component': IssueNoteDetail_component_1.IssueNoteDetailComponent,
    },
    {
        'path': 'ReceiptNotes',
        'component': ReceiptNote_component_1.ReceiptNoteComponent,
    },
    {
        'path': 'WareHouses',
        'component': WareHouse_component_1.WareHouseComponent,
    },
    {
        'path': 'ReceiptNotes/:ReceiptNoteId',
        'component': ReceiptNoteDetail_component_1.ReceiptNoteDetailComponent,
    },
    {
        'path': 'WareHouses',
        'component': WareHouse_component_1.WareHouseComponent,
    },
    {
        'path': 'CustomerGroups',
        'component': CustomerGroup_component_1.CustomerGroupComponent,
    },
    {
        'path': 'Countries',
        'component': Country_component_1.CountryComponent,
    },
    {
        'path': 'Cities',
        'component': City_component_1.CityComponent,
    },
    {
        'path': 'ShipmentDetails',
        'component': ShipmentDetail_component_1.ShipmentDetailComponent,
    },
    {
        'path': 'OpeningBalance',
        'component': OpeningBalance_component_1.OpeningBalanceComponent,
    },
    {
        'path': 'StockTransfer',
        'component': StockTransfer_component_1.StockTransferComponent,
    },
    {
        'path': 'Employee',
        'component': Employee_component_1.EmployeeComponent,
    },
    {
        'path': 'Orders',
        'component': Order_component_1.OrderComponent,
    },
    {
        'path': 'Orders/:OrderId',
        'component': OrderDetail_component_1.OrderDetailComponent,
    },
];
exports.Routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/Shared/Body/Body.Component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'public-body',
            template: __webpack_require__("./src/app/Shared/Body/body.component.html"),
            styles: [__webpack_require__("./src/app/Shared/Body/body.component.css")]
        })
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;


/***/ }),

/***/ "./src/app/Shared/Body/body.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/Body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Shared/CustomToaster.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var BottomToastsManager = /** @class */ (function (_super) {
    __extends(BottomToastsManager, _super);
    function BottomToastsManager(componentFactoryResolver, ngZone, appRef, options) {
        return _super.call(this, componentFactoryResolver, ngZone, appRef, Object.assign(options, {
            positionClass: "toast-bottom-right",
            toastLife: 3000,
            animate: 'fade',
            dismiss: 'auto'
        })) || this;
    }
    BottomToastsManager.prototype.ShowSuccess = function () {
        _super.prototype.success.call(this, 'Thành công!', 'Hệ thống cập nhật');
    };
    BottomToastsManager.prototype.ShowWarning = function (message) {
        _super.prototype.warning.call(this, message, 'Cảnh báo');
    };
    BottomToastsManager.prototype.ShowError = function (message) {
        if (typeof message !== 'string') {
            _super.prototype.error.call(this, JSON.parse(message._body).Message, 'Lỗi');
        }
        else {
            _super.prototype.error.call(this, message, 'Lỗi');
        }
    };
    BottomToastsManager.prototype.ShowInfo = function (message) {
        _super.prototype.info.call(this, message, 'Thông báo');
    };
    BottomToastsManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.NgZone, core_1.ApplicationRef, ng2_toastr_1.ToastOptions])
    ], BottomToastsManager);
    return BottomToastsManager;
}(ng2_toastr_1.ToastsManager));
exports.BottomToastsManager = BottomToastsManager;


/***/ }),

/***/ "./src/app/Shared/EmployeeCodePipe/EmployeeCode.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var EmployeeCodePipe = /** @class */ (function () {
    function EmployeeCodePipe() {
    }
    EmployeeCodePipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var t = value.toString();
        var result = '';
        for (var i = 0; i < 6 - t.length; i++) {
            result += '0';
        }
        result += t;
        return result;
    };
    EmployeeCodePipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var t = value.toString();
        var result = '';
        for (var i = 0; i < 6 - t.length; i++) {
            result += '0';
        }
        result += t;
        return result;
    };
    EmployeeCodePipe = __decorate([
        core_1.Pipe({ name: 'EmployeeCode' }),
        __metadata("design:paramtypes", [])
    ], EmployeeCodePipe);
    return EmployeeCodePipe;
}());
exports.EmployeeCodePipe = EmployeeCodePipe;


/***/ }),

/***/ "./src/app/Shared/EmployeeInfo.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var EmployeeInfoService = /** @class */ (function () {
    function EmployeeInfoService() {
    }
    EmployeeInfoService.prototype.GetCurrent = function () {
        if (this.EmployeeEntity == null) {
            var EJWT = this.GetCookie("EJWT");
            var User = EJWT.split(".")[1];
            if (User == null) {
                console.error("Cannot recognize JWT token!");
                return;
            }
            var user = JSON.parse(window.atob(User));
            this.EmployeeEntity = user.UserEntity;
        }
        return this.EmployeeEntity;
    };
    EmployeeInfoService.prototype.GetCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    EmployeeInfoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EmployeeInfoService);
    return EmployeeInfoService;
}());
exports.EmployeeInfoService = EmployeeInfoService;


/***/ }),

/***/ "./src/app/Shared/Header/Header.Component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\r\n  .container {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 329px) {\r\n  .page-info {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n}\r\n\r\n.fixed-top {\r\n  background-color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.page-info .page-info-content {\r\n  margin-top: 10px;\r\n  width: auto;\r\n}\r\n\r\n.page-info .page-info-content .page-info-content-name {\r\n  padding-top: 10px;\r\n  font-size: 14px;\r\n  color: black\r\n}\r\n\r\n.page-header-top {\r\n  position: relative;\r\n  height: 60px;\r\n}\r\n\r\n.page-header-top .page-logo {\r\n  width: auto;\r\n  height: auto;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.page-header-top .page-info {\r\n  margin: 0;\r\n  padding: 0;\r\n  float: right;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.page-logo a {\r\n  font-weight: 600;\r\n  font-size: 17px;\r\n  color: #109421;\r\n}\r\n\r\n.container-fluid {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.navbar {\r\n  border-radius: 0 !important;\r\n  background-color: #0064B4;\r\n  border-color: #0064B4;\r\n  max-height: 40px !important;\r\n}\r\n\r\n.navbar-inverse .navbar-nav > .active > a,\r\n.navbar-inverse .navbar-nav > .active > a:hover,\r\n.navbar-inverse .navbar-nav > .active > a:focus {\r\n  color: #fff;\r\n  background-color: #35ae44;\r\n}\r\n\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-inverse .navbar-nav > li > a:hover {\r\n  background-color: #35ae44;\r\n}\r\n\r\n.public-header-avatar {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  width: 44px;\r\n  height: 44px;\r\n  background: #dcdcdc;\r\n  border: 2px solid #7D7D7D;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(255, 255, 255, .5);\r\n          box-shadow: 0 0 20px 0 rgba(255, 255, 255, .5);\r\n  border-radius: 50% !important;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n}\r\n\r\npublic-header-avatar > img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: #109421;\r\n  color: white;\r\n  padding: 13px;\r\n  font-size: 15px;\r\n  border: none;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 200px;\r\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 999;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #35ae44;\r\n}\r\n\r\nside-dropdown:hover sub-submenu {\r\n  background-color: #35ae44;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #35ae44;\r\n}\r\n\r\na.fpt-nav-link.nav-link {\r\n  padding: 15px 15px 15px 15px;\r\n}\r\n\r\n.side-dropdown-content {\r\n  position: relative;\r\n  left: 200px;\r\n  top: -43.2px;\r\n  display: none;\r\n  height: 40.2px;\r\n}\r\n\r\n.side-dropdown:hover .side-dropdown-content {\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Shared/Header/Header.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top\" *ngIf=\"EmployeeInfoService.EmployeeEntity != null\">\r\n    <div class=\"nav-fixed-top\">\r\n        <div class=\"page-header-top\" style=\"background-color: #ffffff\">\r\n            <div class=\"container\">\r\n                <div class=\"page-logo\">\r\n                    <a href=\"/\"><b>EShop Management</b></a>\r\n                </div>\r\n                <div class=\"page-info\" id=\"asds\">\r\n                  <div class=\"page-info-content\">\r\n                    <span class=\"page-info-content-name\">{{EmployeeInfoService.EmployeeEntity !== undefined ? EmployeeInfoService.EmployeeEntity.Display : \"\" }}</span>\r\n                    <a href=\"Home/Logout\">\r\n                      <i class=\"glyphicon glyphicon-log-out\"></i> Log Out\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <nav class=\"nav navbar-inverse fpt-navbar navbar-toggleable-md\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleContainer\"\r\n                aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"container collapse navbar-collapse\" id=\"navbarsExampleContainer\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li *ngFor=\"let menu of MenuList\"\r\n                    [ngClass]=\" (menu.hasSub() ? ' dropdown' : '')\">\r\n                    <a class=\"fpt-nav-link nav-link dropbtn\" routerLinkActive=\"active-link\"\r\n                       [routerLink]=\"[menu.Link]\">\r\n                        {{menu.Name}}\r\n                        <i class=\"fa fa-angle-down\" *ngIf=\"menu.hasSub() && menu.Link != 'Fams'\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-content\" *ngIf=\"menu.hasSub() && menu.Link != 'Fams'\">\r\n                        <ul style=\"list-style: none; padding: 0;\">\r\n                            <li [ngClass]=\" (sub.hasSub() ? ' side-dropdown' : '')\" *ngFor=\"let sub of menu.Sub\" style=\"height: 40.2px\">\r\n                                <a class=\"fpt-dropdown-menu fpt-nav-link sub-submenu\"\r\n                                   routerLinkActive=\"active-sublink\"\r\n                                   [routerLink]=\"[sub.Link]\">\r\n                                    {{sub.Name}}\r\n                                    <i class=\"fa fa-angle-right\" style=\"float: right; top: 4px; position: relative;\" *ngIf=\"sub.hasSub()\"></i>\r\n                                </a>\r\n                                <div class=\"side-dropdown-content\" *ngIf=\"sub.hasSub()\">\r\n                                    <a *ngFor=\"let Subsub of sub.Sub\" class=\"fpt-dropdown-menu fpt-nav-link\"\r\n                                       routerLinkActive=\"active-sublink\"\r\n                                       [routerLink]=\"[Subsub.Link]\">{{Subsub.Name}}</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/Header/Header.Component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var menu_model_1 = __webpack_require__("./src/app/menu-model.ts");
var EmployeeInfo_Service_1 = __webpack_require__("./src/app/Shared/EmployeeInfo.Service.ts");
//import {Http} from "@angular/http";
// import {AuthService} from "../../Modules/Auth/Auth.Service";
// import {UserEntity} from "../../Modules/User/User.Entity";
// import {UserService} from "../../Modules/User/User.Service";
// import { PermissionService } from "app/Modules/Permission/Permission.Service";
// import {LayerAccessControlEntity} from "../../Modules/LayerAccessControl/LayerAccessControl.Entity";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(EmployeeInfoService) {
        this.EmployeeInfoService = EmployeeInfoService;
        this.EmployeeInfoService.GetCurrent();
        this.MenuList = Array();
        var Home = new menu_model_1.MenuModel("Home", "Home");
        this.MenuList.push(Home);
        var Sale = new menu_model_1.MenuModel("Sale", "Sale");
        this.MenuList.push(Sale);
        var Order = new menu_model_1.MenuModel("Orders", "Orders");
        Sale.addSub(Order);
        var Introduction = new menu_model_1.MenuModel("Introductions", "Introductions");
        Sale.addSub(Introduction);
        var Coupon = new menu_model_1.MenuModel("Coupons", "Coupons");
        Sale.addSub(Coupon);
        var StockManagement = new menu_model_1.MenuModel("StockManagement", "StockManagement");
        this.MenuList.push(StockManagement);
        var Inventory = new menu_model_1.MenuModel("Inventories", "Inventories");
        StockManagement.addSub(Inventory);
        var ReceiptNote = new menu_model_1.MenuModel("ReceiptNotes", "ReceiptNotes");
        StockManagement.addSub(ReceiptNote);
        var IssueNote = new menu_model_1.MenuModel("IssueNotes", "IssueNotes");
        StockManagement.addSub(IssueNote);
        var StockTransfer = new menu_model_1.MenuModel("StockTransfer", "StockTransfer");
        StockManagement.addSub(StockTransfer);
        var OpeningBalance = new menu_model_1.MenuModel("OpeningBalance", "OpeningBalance");
        StockManagement.addSub(OpeningBalance);
        var ProductManagement = new menu_model_1.MenuModel("ProductManagement", "ProductManagement");
        this.MenuList.push(ProductManagement);
        var Category = new menu_model_1.MenuModel("Categories", "Categories");
        ProductManagement.addSub(Category);
        var Warehouse = new menu_model_1.MenuModel("Warehouses", "WareHouses");
        ProductManagement.addSub(Warehouse);
        var Manufacturer = new menu_model_1.MenuModel("Manufacturers", "Manufacturers");
        ProductManagement.addSub(Manufacturer);
        var Management = new menu_model_1.MenuModel("Management", "Management");
        this.MenuList.push(Management);
        var Supplier = new menu_model_1.MenuModel("Suppliers", "Suppliers");
        Management.addSub(Supplier);
        var Customer = new menu_model_1.MenuModel("Customers", "Customers");
        Management.addSub(Customer);
        var Language = new menu_model_1.MenuModel("Languages", "Languages");
        Management.addSub(Language);
        var Employee = new menu_model_1.MenuModel("Employees", "Employees");
        Management.addSub(Employee);
        var System = new menu_model_1.MenuModel("System", "System");
        this.MenuList.push(System);
        var Permission = new menu_model_1.MenuModel("Permissions", "Permissions");
        System.addSub(Permission);
        var MailConfig = new menu_model_1.MenuModel("MailConfigs", "MailConfigs");
        System.addSub(MailConfig);
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'public-header',
            template: __webpack_require__("./src/app/Shared/Header/Header.Component.html"),
            styles: [__webpack_require__("./src/app/Shared/Header/Header.Component.css")]
        }),
        __metadata("design:paramtypes", [EmployeeInfo_Service_1.EmployeeInfoService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/Shared/HttpService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.PendingRequests = 0;
        this.ShowLoading = false;
        this.url = '';
    }
    HttpService.prototype.Gets = function (SearchEntity, IsShowLoading) {
        SearchEntity = SearchEntity === undefined ? new FilterEntity_1.FilterEntity() : SearchEntity;
        return this.intercept(this.http.get(this.url, {
            observe: 'response',
            headers: this.GetHeaders(),
            params: SearchEntity.ToParams()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.Count = function (SearchEntity, IsShowLoading) {
        SearchEntity = SearchEntity === undefined ? new FilterEntity_1.FilterEntity() : SearchEntity;
        return this.intercept(this.http.get(this.url + '/Count', {
            observe: 'response',
            headers: this.GetHeaders(),
            params: SearchEntity.ToParams()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.GetId = function (Id, IsShowLoading) {
        return this.intercept(this.http.get(this.url + "/" + Id, {
            observe: 'response',
            headers: this.GetHeaders()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.Create = function (body, IsShowLoading) {
        return this.intercept(this.http.post(this.url, JSON.stringify(body), {
            observe: 'response',
            headers: this.GetHeaders()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.Update = function (body, IsShowLoading) {
        return this.intercept(this.http.put(this.url + "/" + body.Id, JSON.stringify(body), {
            observe: 'response',
            headers: this.GetHeaders()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.Delete = function (Id, IsShowLoading) {
        return this.intercept(this.http.delete(this.url + "/" + Id, {
            observe: 'response',
            headers: this.GetHeaders()
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    HttpService.prototype.intercept = function (observable, isShowLoading) {
        var _this = this;
        if (isShowLoading == null) {
            console.warn('isShowLoading not setted!');
            isShowLoading = true;
        }
        if (isShowLoading)
            this.turnOnModal();
        return observable
            .do(function (res) {
            console.log('Response: ' + res);
        }, function (err) {
            if (isShowLoading)
                _this.turnOffModal();
            console.log('Caught error: ' + err);
        })
            .finally(function () {
            if (isShowLoading)
                _this.turnOffModal();
        });
    };
    HttpService.prototype.GetHeaders = function () {
        var headers = new http_1.HttpHeaders({ 'content-type': 'application/json; charset=utf-8' });
        return headers;
    };
    HttpService.prototype.turnOnModal = function () {
        this.PendingRequests++;
        if (!this.ShowLoading) {
            this.ShowLoading = true;
            document.body.classList.add('m-page--loading-non-block');
            console.log('Turned on modal');
        }
        this.ShowLoading = true;
    };
    HttpService.prototype.turnOffModal = function () {
        this.PendingRequests--;
        if (this.PendingRequests <= 0) {
            if (this.ShowLoading) {
                this.PendingRequests = 0;
                document.body.classList.remove('m-page--loading-non-block');
            }
            this.ShowLoading = false;
        }
        console.log('Turned off modal');
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/Shared/Login/Login.Component.css":
/***/ (function(module, exports) {

module.exports = " .modal-header, #LoginModal h4, #LoginModal .close {\r\n  background-color: #5cb85c;\r\n  color: white !important;\r\n  text-align: center;\r\n  font-size: 30px;\r\n}\r\n .modal-footer {\r\n  background-color: #f9f9f9;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Shared/Login/Login.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <!-- Modal content-->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\" style=\"padding:35px 50px;\">\r\n      <h1><span class=\"fa fa-lock\"></span> Login</h1>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding:40px 50px;\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\"><span class=\"fa fa-user\"></span> Username</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"LoginModel.Username\" placeholder=\"Enter email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\"><span class=\"fa fa-key\"></span> Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"LoginModel.Password\" placeholder=\"Enter password\">\r\n      </div>\r\n      <div class=\"checkbox\">\r\n        <label><input type=\"checkbox\" value=\"\" checked>Remember me</label>\r\n      </div>\r\n      <button class=\"btn btn-success btn-block\" (click)=\"SignIn()\"><span class=\"fa fa-sign-in\"></span> Sign In</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/Login/Login.Component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var EmployeeInfo_Service_1 = __webpack_require__("./src/app/Shared/EmployeeInfo.Service.ts");
//import {Http} from "@angular/http";
// import {AuthService} from "../../Modules/Auth/Auth.Service";
// import {UserEntity} from "../../Modules/User/User.Entity";
// import {UserService} from "../../Modules/User/User.Service";
// import { PermissionService } from "app/Modules/Permission/Permission.Service";
// import {LayerAccessControlEntity} from "../../Modules/LayerAccessControl/LayerAccessControl.Entity";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(HttpService, EmployeeInfoService) {
        this.HttpService = HttpService;
        this.EmployeeInfoService = EmployeeInfoService;
        this.LoginModel = new LoginModel();
        this.HttpService.url = "/api/Auth/employee-sign-in";
    }
    LoginComponent.prototype.SignIn = function () {
        var _this = this;
        this.HttpService.Create(this.LoginModel).subscribe(function (res) {
            var data = res;
            var UserInfo = _this.DecodeUserInfo(data);
            _this.setCookie("EJWT", data.token, UserInfo.exp);
            _this.EmployeeInfoService.GetCurrent();
        });
    };
    LoginComponent.prototype.DecodeUserInfo = function (data) {
        var User = data.token.split(".")[1];
        if (User == null) {
            console.error("Cannot recognize JWT token!");
            return;
        }
        var user = JSON.parse(this.b64DecodeUnicode(User));
        console.log(user);
        return user;
    };
    LoginComponent.prototype.setCookie = function (cname, cvalue, exp) {
        var d = new Date();
        d.setTime(d.getTime() + exp);
        var expires = "expires=" + exp;
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    LoginComponent.prototype.b64DecodeUnicode = function (str) {
        str = str.replace('-', '+').replace('_', '/');
        switch (str.length % 4) {
            case 0:
                break;
            case 2:
                str += '==';
                break;
            case 3:
                str += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'public-login',
            template: __webpack_require__("./src/app/Shared/Login/Login.Component.html"),
            styles: [__webpack_require__("./src/app/Shared/Login/Login.Component.css")]
        }),
        __metadata("design:paramtypes", [HttpService_1.HttpService,
            EmployeeInfo_Service_1.EmployeeInfoService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoginModel;
}(IEntity_Entity_1.IEntity));
exports.LoginModel = LoginModel;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Excel/Excel.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExcelEntity = /** @class */ (function () {
    function ExcelEntity(ExcelEntity) {
        if (ExcelEntity == null) {
            this.Name = null;
            this.Data = [];
            this.Length = null;
            this.Extension = null;
        }
        else {
            this.Name = ExcelEntity.Name;
            this.Data = ExcelEntity.Data;
            this.Length = ExcelEntity.Length;
            this.Extension = ExcelEntity.Extension;
        }
    }
    ExcelEntity.prototype.GetKB = function () {
        var Result = Math.round(this.Length / 1024);
        return Result == NaN ? 0 : Result;
    };
    ExcelEntity.prototype.GetMB = function () {
        var Result = Math.round(this.Length / 1024 / 1024);
        return Result == NaN ? 0 : Result;
    };
    ExcelEntity.prototype.ParseExcel = function (data) {
    };
    return ExcelEntity;
}());
exports.ExcelEntity = ExcelEntity;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Excel/Excel.component.html":
/***/ (function(module, exports) {

module.exports = "<span data-toggle=\"modal\" (click)=\"OpenFile()\">\r\n    <ng-content></ng-content>\r\n</span>\r\n<input [attr.id]=\"Id\" style=\"display: none\" type=\"file\" name=\"Id\" (change)=\"LoadFile($event)\" #file/>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Excel/Excel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var XLSX = __webpack_require__("./node_modules/xlsx/xlsx.js");
var Excel_Entity_1 = __webpack_require__("./src/app/Shared/MaterialComponent/Excel/Excel.Entity.ts");
var ExcelComponent = /** @class */ (function () {
    // @Output() onFileChoosed: EventEmitter<ExcelEntity> = new EventEmitter();
    function ExcelComponent() {
        this.Id = this.MakeRandomId();
        this.ExcelEntity = new Excel_Entity_1.ExcelEntity();
        this.onFileChanged = new core_1.EventEmitter();
        this.data = [[1, 2], [3, 4]];
    }
    Object.defineProperty(ExcelComponent.prototype, "Innit", {
        set: function (value) {
            if (value !== undefined)
                this.Id = value;
            else
                console.warn("FileId Field isn't setted !");
        },
        enumerable: true,
        configurable: true
    });
    ExcelComponent.prototype.ngOnInit = function () {
    };
    ExcelComponent.prototype.OpenFile = function () {
        document.getElementById(this.Id).click();
    };
    ExcelComponent.prototype.LoadFile = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length != 1) {
            throw new Error("Cannot upload multiple files on the entry");
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = XLSX.read(bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var dataExcel = XLSX.utils.sheet_to_json(ws, { header: 1 });
            if (dataExcel == null) {
                console.warn("Cannot read file or file is empty!");
                return;
            }
            _this.ExcelEntity.ParseExcel(dataExcel);
            // if (data.length == 1 || data[0].length <= this.EndCol) {
            //     console.warn("Empty data or invalid format xls!");
            //     return;
            // }
            // let DataName = [];
            // for (let i = this.StartCol; i <= this.EndCol; i++) {
            //     DataName.push(data[i]);
            // }
            // let Unique = [...new Set(DataName)];
            // if (DataName.length != Unique.length) {
            //     console.warn("Duplicate ColName!");
            //     return;
            // }
            // if (this.NameDict != null) {
            //     for (let i = 0; i < DataName.length; i++) {
            //         if (this.NameDict[DataName[i].toLowerCase()] == null) {
            //             console.warn("Cannot mapping col!");
            //             return;
            //         }
            //         DataName[i] = this.NameDict[DataName[i].toLowerCase()];
            //     }
            // }
            // for (let i = 1; i < data.length; i++) {
            //     let a: any = {};
            //     let row: Array<any> = data[i];
            //     for (let j = this.StartCol; j < this.EndCol; j++) {
            //         a[DataName[j]] = row[j];
            //         this.ExcelEntity.Data.push(a);
            //     }
            // }
            _this.ExcelEntity.Name = target.files[0].name;
            _this.ExcelEntity.Length = target.files[0].size;
            var Arr = _this.ExcelEntity.Name.split('.');
            _this.ExcelEntity.Extension = Arr.length > 1 ? Arr[Arr.length - 1] : Arr[0];
            _this.onFileChanged.emit(_this.ExcelEntity);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ExcelComponent.prototype.MakeRandomId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Excel_Entity_1.ExcelEntity)
    ], ExcelComponent.prototype, "ExcelEntity", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ExcelComponent.prototype, "onFileChanged", void 0);
    __decorate([
        core_1.Input('FileId'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ExcelComponent.prototype, "Innit", null);
    ExcelComponent = __decorate([
        core_1.Component({
            selector: 'Excel',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/Excel/Excel.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ExcelComponent);
    return ExcelComponent;
}());
exports.ExcelComponent = ExcelComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.css":
/***/ (function(module, exports) {

module.exports = ".numberCircle {\r\n    display: table-caption;\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    height: 36px;\r\n    padding: 0.4rem;\r\n    background: #fff;\r\n    border: 2px solid;\r\n    text-align: center;\r\n    font: 20px Arial, sans-serif;\r\n    cursor: default;\r\n}\r\n\r\n\r\n.text-fams-big {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    cursor: default;\r\n}\r\n\r\n\r\n.text-fams-small {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    padding-left: 1.1rem;\r\n    opacity: 0.8;\r\n    cursor: default;\r\n}\r\n\r\n\r\n.menu-style {\r\n    color: #666;\r\n    border-color: #666;\r\n}\r\n\r\n\r\n.ActiveMenu {\r\n    color: #0064b4;\r\n    border-color: #0064b4;\r\n}\r\n\r\n\r\n.menu-style:hover {\r\n    color: #0064b4;\r\n    border-color: #0064b4;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-2 menu-style\" *ngFor=\"let Menu of MenuList; let i = index\" [ngClass]=\"{'ActiveMenu': Menu.Active}\"\r\n         (click)=\"NavigateLink(Menu)\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-lg-3 col-sm-3 n-p-l\" style=\"padding-top: 4%\">\r\n                <div class=\"numberCircle\">{{Menu.Number}}</div>\r\n            </div>\r\n            <div class=\"col-md-9 col-lg-9 col-sm-3 n-p-l n-p-r\">\r\n                <span class=\"text-uppercase text-fams-big\">{{Menu.Name}}</span>\r\n                <br>\r\n                <span class=\"text-fams-small\">{{Menu.SubName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MenuPurchaseComponent = /** @class */ (function () {
    function MenuPurchaseComponent(Router) {
        this.Router = Router;
        this.MenuList = [{ Number: 1, Name: 'Đề nghị', SubName: 'Mua sắm', Active: false, Link: 'Fams/PurchaseRequest', Query: null },
            { Number: 2, Name: 'Phương án', SubName: 'Mua sắm', Active: false, Link: 'Fams/PurchasePlan', Query: { Type: 'PROCESS' } },
            { Number: 3, Name: 'Catalog', SubName: 'Đặt hàng', Active: false, Link: 'Fams/Catalogs', Query: null },
            { Number: 4, Name: 'Đặt hàng', SubName: 'Sản phẩm', Active: false, Link: 'Fams/PurchaseOrders', Query: null },
            { Number: 5, Name: 'Nhận hàng', SubName: 'Sản phẩm', Active: false, Link: 'Fams/PurchaseReceipt', Query: null },
            { Number: 6, Name: 'Thanh toán', SubName: 'Mua hàng', Active: false, Link: '#', Query: null }];
    }
    MenuPurchaseComponent.prototype.ngOnInit = function () {
        if (!this.NumberSelected) {
            throw new Error('Number value is required!');
        }
        else {
            for (var _i = 0, _a = this.MenuList; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.Number === this.NumberSelected) {
                    i.Active = true;
                }
                else {
                    i.Active = false;
                }
            }
        }
    };
    MenuPurchaseComponent.prototype.NavigateLink = function (Menu) {
        if (Menu.Query !== null) {
            this.Router.navigate([Menu.Link], { queryParams: Menu.Query });
        }
        else {
            this.Router.navigate([Menu.Link]);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MenuPurchaseComponent.prototype, "NumberSelected", void 0);
    MenuPurchaseComponent = __decorate([
        core_1.Component({
            selector: 'menupurchase',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MenuPurchaseComponent);
    return MenuPurchaseComponent;
}());
exports.MenuPurchaseComponent = MenuPurchaseComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i [ngClass]=\"TitleIcon\"></i>&nbsp;{{TitleName}}\r\n        <button type=\"button\" class=\"btn btn-sm btn-success pull-right\" title=\"Search\" (click)=\"Search()\"\r\n                *ngIf=\"HideButton\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PortletComponent = /** @class */ (function () {
    function PortletComponent() {
        this.TitleName = "";
        this.TitleIcon = "";
        this.HideButton = true;
        this.SearchAction = new core_1.EventEmitter();
        this.ToogleSearch = false;
    }
    PortletComponent.prototype.Search = function () {
        this.ToogleSearch = !this.ToogleSearch;
        this.SearchAction.emit(this.ToogleSearch);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletComponent.prototype, "TitleName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletComponent.prototype, "TitleIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PortletComponent.prototype, "HideButton", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PortletComponent.prototype, "SearchAction", void 0);
    PortletComponent = __decorate([
        core_1.Component({
            selector: 'app-portlet',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.css")]
        })
    ], PortletComponent);
    return PortletComponent;
}());
exports.PortletComponent = PortletComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/avatar/avatar.component.css":
/***/ (function(module, exports) {

module.exports = ".myImg {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  position: absolute;\r\n}\r\n\r\n.modal-show {\r\n  display: block !important;\r\n}\r\n\r\n.myImg:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: block;\r\n  position: inherit;\r\n  z-index: 2;\r\n  left: 0;\r\n  top: 0;\r\n  width: 10rem;\r\n  height: 16rem;\r\n}\r\n\r\n/* Modal Content (image) */\r\n\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n  width: 90%;\r\n  height: 90%;\r\n  text-align: center;\r\n}\r\n\r\n.img-modal-content {\r\n  display: -webkit-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.attr-modal-content {\r\n  color: white;\r\n  position: absolute;\r\n  display: table;\r\n  background: rgba(0, 0, 0, .3);\r\n  width: 100.1%;\r\n  padding-top: .5rem;\r\n  padding-left: 1rem;\r\n  top: calc(100% - 2rem);\r\n  height: 2rem;\r\n  cursor: default;\r\n  -webkit-animation-name: example;\r\n          animation-name: example;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n.attr-modal-content:hover {\r\n  background: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.mask:hover {\r\n  background: rgba(0, 0, 0, .15);\r\n}\r\n\r\n.mask {\r\n  border: solid 1px #e9ebee;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n@-webkit-keyframes example {\r\n  from {\r\n    background: transparent;\r\n    color: transparent\r\n  }\r\n  to {\r\n    background: rgba(0, 0, 0, .3);\r\n    color: white\r\n  }\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes example {\r\n  from {\r\n    background: transparent;\r\n    color: transparent\r\n  }\r\n  to {\r\n    background: rgba(0, 0, 0, .3);\r\n    color: white\r\n  }\r\n}\r\n\r\n@-webkit-keyframes zoom {\r\n  from {\r\n    -webkit-transform: scale(0)\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1)\r\n  }\r\n}\r\n\r\n@keyframes zoom {\r\n  from {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0)\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1)\r\n  }\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* 100% Image Width on Smaller Screens */\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .modal-content {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*.caption-show{*/\r\n\r\n/**/\r\n\r\n/*}*/\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal myModal\" (keyup.esc)=\"toggleScrollBody()\">\r\n  <div class=\"modal-content\" (mouseenter)=\"showTitle()\" (mouseleave)=\"offTitle()\">\r\n    <img [src]=\"imgContent\" class=\"img-modal-content\" #imgRef2>\r\n    <FileBrowser [(ngModel)]=\"value\" [Multiple]=\"false\" [ModalSize]=\"'xl'\">\r\n      <OpenDiv>\r\n        <div class=\"attr-modal-content\" *ngIf=\"isShowTitle\">\r\n          <div>Update avatar</div>\r\n        </div>\r\n      </OpenDiv>\r\n    </FileBrowser>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/avatar/avatar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return AvatarComponent; }),
    multi: true
};
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.imgContent = '/assets/img_avatar.png';
        this.isEnableScroll = true;
        this.isShowTitle = false;
        this.onTouchedCallback = noop_1.noop;
        this.onChangeCallback = noop_1.noop;
    }
    Object.defineProperty(AvatarComponent.prototype, "value", {
        get: function () {
            return this.imgContent;
        },
        set: function (obj) {
            this.imgContent = obj;
            this.onChangeCallback(obj);
        },
        enumerable: true,
        configurable: true
    });
    AvatarComponent.prototype.writeValue = function (obj) {
        if (obj != null) {
            this.imgContent = obj;
        }
        else {
            this.imgContent = '/assets/img_avatar.png';
        }
    };
    AvatarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    AvatarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent.prototype.toggleScrollBody = function () {
        if (this.imgContent == null) {
            return;
        }
        if (this.isEnableScroll) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'inherit';
        }
        this.isEnableScroll = !this.isEnableScroll;
    };
    AvatarComponent.prototype.showTitle = function () {
        this.isShowTitle = true;
    };
    AvatarComponent.prototype.offTitle = function () {
        this.isShowTitle = false;
    };
    __decorate([
        core_1.ViewChild('title'),
        __metadata("design:type", core_1.ElementRef)
    ], AvatarComponent.prototype, "titleRef", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "height", void 0);
    AvatarComponent = __decorate([
        core_1.Component({
            selector: 'avatar',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/avatar/avatar.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/avatar/avatar.component.css")],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/datetime/datetime.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-list {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n}\n\n.dropdown-content {\n    position: absolute;\n    width: 100%;\n    z-index: 400;\n    list-style: none;\n    white-space: normal;\n    -webkit-box-shadow: 2px 2px 5px #888888;\n            box-shadow: 2px 2px 5px #888888;\n    cursor: pointer;\n    max-height: 150px;\n    overflow-y: auto;\n    background-color: white;\n}\n\n.dropdown-content li:hover {\n    color: #fff;\n    background-color: #2A92D8;\n    cursor: pointer;\n}\n\ndropdown {\n    width: 100%;\n    height: auto;\n    cursor: pointer;\n}\n\n.hide {\n    display: none;\n}"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/datetime/datetime.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" [attr.placeholder]=\"placeholder\" ngbDatepicker #d3=\"ngbDatepicker\"\r\n       (click)=\"d3.toggle()\" name=\"ExpiredDateCreate\" [(ngModel)]=\"value\" [autoClose]=\"true\" required/>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/datetime/datetime.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
var ngb_date_parser_formatter_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatetimeComponent; }),
    multi: true
};
var DatetimeComponent = /** @class */ (function () {
    function DatetimeComponent(el) {
        this.el = el;
        this.placeholder = "";
        this.onTouchedCallback = noop_1.noop;
        this.onChangeCallback = noop_1.noop;
        this.ngbDateISOParserFormatter = new ngb_date_parser_formatter_1.NgbDateISOParserFormatter();
        this.innerValue = '';
    }
    Object.defineProperty(DatetimeComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(this.ngbDateISOParserFormatter.format(v));
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    DatetimeComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    DatetimeComponent.prototype.writeValue = function (value) {
        if (this.ngbDateISOParserFormatter.parse(value) !== this.innerValue) {
            this.innerValue = this.ngbDateISOParserFormatter.parse(value);
        }
    };
    //From ControlValueAccessor interface
    DatetimeComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    DatetimeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatetimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("click", function (event) {
            if (!_this.isDescendant(_this.el.nativeElement, event.target)) {
                _this.d3.close();
            }
        });
    };
    DatetimeComponent.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatetimeComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.ViewChild("d3"),
        __metadata("design:type", Object)
    ], DatetimeComponent.prototype, "d3", void 0);
    DatetimeComponent = __decorate([
        core_1.Component({
            selector: 'datetime',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/datetime/datetime.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/datetime/datetime.component.css")],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DatetimeComponent);
    return DatetimeComponent;
}());
exports.DatetimeComponent = DatetimeComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/dropdown/dropdown.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-list {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 400;\r\n    list-style: none;\r\n    white-space: normal;\r\n    -webkit-box-shadow: 2px 2px 5px #888888;\r\n            box-shadow: 2px 2px 5px #888888;\r\n    cursor: pointer;\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n}\r\n\r\n.dropdown-content li:hover {\r\n    color: #fff;\r\n    background-color: #2A92D8;\r\n    cursor: pointer;\r\n}\r\n\r\ndropdown {\r\n    width: 100%;\r\n    height: auto;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-list\">\r\n    <span (mousedown)=\"Click()\" (keyup.esc)=\"Esc()\" (keyup.ArrowDown)=\"Down()\" (keyup.ArrowUp)=\"Up()\"\r\n          (keyup.enter)=\"Enter()\" (keypress)=\"CurrentNumber = -1; IsShow = true;\">\r\n        <ng-content select=\"dropdown-input\">\r\n        </ng-content>\r\n    </span>\r\n    <ul [ngClass]=\"'dropdown-content list-group ' + ClassContent\" *ngIf=\"IsShow\" (click)=\"TurnOff($event)\"\r\n        (mousedown)=\"TurnOn()\"\r\n        (mousemove)=\"Remove()\">\r\n        <span *ngIf=\"IsShow && !IsError && HideContentWhenError\">\r\n            <ng-content select=\"dropdown-content\"></ng-content>\r\n        </span>\r\n        <li *ngIf=\"DataList == null\" class=\"list-group-item\">Đang tải dữ liệu ...</li>\r\n        <li *ngIf=\"DataList != null && DataList.length == 0\" class=\"list-group-item\">Không có dữ liệu</li>\r\n        <li *ngIf=\"IsError\" class=\"list-group-item text-danger\">\r\n            <ng-content select=\"dropdown-error\"></ng-content>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/dropdown/dropdown.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.IsShow = false;
        this.isMultiSelect = false;
        this.isTurnOffAnother = true;
        this.Id = this.MakeRandomId();
        this.DataList = [{}];
        this.onEnter = new core_1.EventEmitter();
        this.ChangeWhenUpDown = false;
        this.IsLoopOption = false;
        this.CurrentNumber = -1;
        this.IsValidateDataList = true;
        this.PropertyActive = "IsActive";
        this.PropertySelected = "IsSelected";
        this.IsFirstClick = true;
        this.IsTree = false;
        this.IsError = false;
        this.onFirstClick = new core_1.EventEmitter();
        this.ClassContent = "";
        this.HideContentWhenError = true;
        DropdownComponent_1.DropdownComponentList.push(this);
    }
    DropdownComponent_1 = DropdownComponent;
    DropdownComponent.prototype.MakeRandomId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    DropdownComponent.prototype.TurnOn = function () {
        var _this = this;
        this.IsShow = true;
        DropdownComponent_1.IsBlock = true;
        setTimeout(function () {
            DropdownComponent_1.IsBlock = false;
            _this.TurnOffAnother();
        }, 40);
    };
    DropdownComponent.prototype.Click = function () {
        if (this.IsFirstClick) {
            this.IsFirstClick = false;
            this.onFirstClick.emit();
        }
        if (this.IsShow) {
            this.IsShow = false;
            return;
        }
        this.Remove();
        this.ValidateDataList();
        this.TurnOn();
    };
    DropdownComponent.prototype.Esc = function () {
        if (this.IsShow) {
            this.IsShow = false;
            return;
        }
        this.Remove();
        this.TurnOn();
    };
    // DbClick() {
    //     this.Remove();
    //     this.ValidateDataList();
    //     this.TurnOn();
    // }
    DropdownComponent.prototype.TurnOff = function (event) {
        if (this.isMultiSelect || this.IsTree) {
            this.TurnOn();
            return;
        }
        console.log(event);
        this.IsShow = false;
    };
    DropdownComponent.prototype.TurnOffAnother = function () {
        var _this = this;
        if (this.isTurnOffAnother == false || DropdownComponent_1.IsBlock)
            return;
        DropdownComponent_1.DropdownComponentList.forEach(function (DC) {
            if (DC.Id != _this.Id)
                DC.IsShow = false;
        });
    };
    DropdownComponent.prototype.Up = function () {
        if (this.DataList == null || this.DataList.length == 0)
            return false;
        var length = this.DataList.length;
        for (var i = 0; i < length; i++) {
            if (this.DataList[i][this.PropertyActive] == true) {
                this.DataList[i][this.PropertyActive] = false;
                if (i == 0) {
                    if (this.IsLoopOption)
                        this.DataList[length - 1][this.PropertyActive] = true;
                    else
                        this.DataList[0][this.PropertyActive] = true;
                }
                else {
                    this.DataList[i - 1][this.PropertyActive] = true;
                }
                if (this.ChangeWhenUpDown == true && this.isMultiSelect == false) {
                    this.Enter();
                    this.TurnOn();
                }
                return false;
            }
        }
        this.DataList[0][this.PropertyActive] = true;
        if (this.ChangeWhenUpDown == true && this.isMultiSelect == false) {
            this.Enter();
            this.TurnOn();
        }
        return false;
    };
    DropdownComponent.prototype.Down = function () {
        if (this.DataList == null || this.DataList.length == 0)
            return false;
        var length = this.DataList.length;
        for (var i = 0; i < length; i++) {
            if (this.DataList[i][this.PropertyActive] == true) {
                this.DataList[i][this.PropertyActive] = false;
                if (i == length - 1) {
                    if (this.IsLoopOption)
                        this.DataList[0][this.PropertyActive] = true;
                    else
                        this.DataList[length - 1][this.PropertyActive] = true;
                }
                else {
                    this.DataList[i + 1][this.PropertyActive] = true;
                }
                if (this.ChangeWhenUpDown == true && this.isMultiSelect == false) {
                    this.Enter();
                    this.TurnOn();
                }
                return false;
            }
        }
        this.DataList[0][this.PropertyActive] = true;
        if (this.ChangeWhenUpDown == true && this.isMultiSelect == false) {
            this.Enter();
            this.TurnOn();
        }
        return false;
    };
    DropdownComponent.prototype.Remove = function () {
        if (this.DataList == null)
            return;
        var length = this.DataList.length;
        for (var i = 0; i < length; i++) {
            this.DataList[i][this.PropertyActive] = false;
        }
        // if(!this.isMultiSelect) {
        //     for (let i = 0; i < length; i++) {
        //         this.DataList[i].IsSelected = false;
        //     }
        // }
    };
    DropdownComponent.prototype.Enter = function () {
        if (this.DataList == null)
            return;
        var length = this.DataList.length;
        for (var i = 0; i < length; i++) {
            if (this.DataList[i][this.PropertyActive] == true) {
                if (!this.isMultiSelect) {
                    for (var j = 0; j < length; j++) {
                        if (this.DataList[j].IsSelected == true) {
                            this.DataList[j].IsSelected = false;
                            break;
                        }
                    }
                    this.CurrentNumber = i;
                    this.DataList[i].IsSelected = true;
                }
                else {
                    this.CurrentNumber = i;
                    this.DataList[i].IsSelected = !this.DataList[i].IsSelected;
                }
                this.TurnOff();
                this.onEnter.emit(this.DataList[i]);
                return;
            }
        }
        // if (this.DataList == null && this.DataList.length <= this.CurrentNumber) return;
        // let length = this.DataList.length;
        // for (let i = 0; i < length; i++) {
        //     if (this.DataList[i][this.PropertyCheck] == true) {
        //         if (!this.isMultiSelect) {
        //             for (let j = 0; j < length; j++) {
        //                 if (this.DataList[j].IsSelected == true) {
        //                     this.DataList[j].IsSelected = false;
        //                     break;
        //                 }
        //             }
        //         }
        //         this.DataList[i].IsSelected = true;
        //         this.TurnOff();
        //         this.onEnter.emit(this.DataList[i]);
        //         return;
        //     }
        // }
    };
    DropdownComponent.prototype.ValidateDataList = function () {
        if (this.DataList == null || !this.IsValidateDataList || this.isMultiSelect)
            return;
        var length = this.DataList.length;
        var count = 0;
        for (var j = 0; j < length; j++) {
            if (this.DataList[j].IsSelected == true) {
                count++;
            }
        }
        if (this.CurrentNumber < this.DataList.length && count > 1) {
            if (this.DataList[this.CurrentNumber].IsSelected == undefined) {
                this.DataList[this.CurrentNumber].IsSelected = false;
            }
            else {
                this.DataList[this.CurrentNumber].IsSelected = false;
            }
        }
        for (var j = 0; j < length; j++) {
            if (this.DataList[j].IsSelected == true) {
                this.CurrentNumber = j;
                return;
            }
        }
    };
    DropdownComponent.DropdownComponentList = [];
    DropdownComponent.IsBlock = false;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isMultiSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "isTurnOffAnother", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "DataList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DropdownComponent.prototype, "onEnter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "ChangeWhenUpDown", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "IsLoopOption", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "IsValidateDataList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "PropertyActive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "PropertySelected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "IsTree", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "IsError", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DropdownComponent.prototype, "onFirstClick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "ClassContent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "HideContentWhenError", void 0);
    DropdownComponent = DropdownComponent_1 = __decorate([
        core_1.Component({
            selector: 'dropdown',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/dropdown/dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
    var DropdownComponent_1;
}());
exports.DropdownComponent = DropdownComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/inputfile/Data.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataEntity = /** @class */ (function () {
    function DataEntity(DataEntity) {
        if (DataEntity == null) {
            this.Name = null;
            this.Data = null;
            this.Length = null;
            this.Extension = null;
        }
        else {
            this.Name = DataEntity.Name;
            this.Data = DataEntity.Data;
            this.Length = DataEntity.Length;
            this.Extension = DataEntity.Extension;
        }
    }
    DataEntity.prototype.GetKB = function () {
        var Result = Math.round(this.Length / 1024);
        return Result == NaN ? 0 : Result;
    };
    DataEntity.prototype.GetMB = function () {
        var Result = Math.round(this.Length / 1024 / 1024);
        return Result == NaN ? 0 : Result;
    };
    return DataEntity;
}());
exports.DataEntity = DataEntity;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/inputfile/inputfile.component.html":
/***/ (function(module, exports) {

module.exports = "<span data-toggle=\"modal\" (click)=\"OpenFile()\">\r\n    <ng-content></ng-content>\r\n</span>\r\n<input [attr.id]=\"Id\" style=\"display: none\" type=\"file\" name=\"Id\" (change)=\"LoadFile(file.files)\" #file/>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/inputfile/inputfile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Data_Entity_1 = __webpack_require__("./src/app/Shared/MaterialComponent/inputfile/Data.Entity.ts");
var InputfileComponent = /** @class */ (function () {
    function InputfileComponent() {
        this.Id = this.MakeRandomId();
        this.DataEntity = new Data_Entity_1.DataEntity();
        this.onFileChanged = new core_1.EventEmitter();
        this.FileReader = new FileReader();
    }
    Object.defineProperty(InputfileComponent.prototype, "Innit", {
        set: function (value) {
            if (value !== undefined)
                this.Id = value;
            else
                console.warn("FileId Field isn't setted !");
        },
        enumerable: true,
        configurable: true
    });
    InputfileComponent.prototype.ngOnInit = function () {
    };
    InputfileComponent.prototype.OpenFile = function () {
        document.getElementById(this.Id).click();
    };
    InputfileComponent.prototype.LoadFile = function (files) {
        var _this = this;
        var f = files[0];
        this.DataEntity.Name = f.name;
        this.DataEntity.Length = f.size;
        var Arr = this.DataEntity.Name.split('.');
        this.DataEntity.Extension = Arr.length > 1 ? Arr[Arr.length - 1] : Arr[0];
        this.FileReader.readAsDataURL(f);
        this.FileReader.onloadend = function (e) {
            _this.DataEntity.Data = _this.FileReader.result;
            _this.DataEntity.Data = _this.DataEntity.Data.substr(_this.DataEntity.Data.indexOf(',') + 1);
            _this.onFileChanged.emit(_this.DataEntity);
        };
    };
    InputfileComponent.prototype.MakeRandomId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Data_Entity_1.DataEntity)
    ], InputfileComponent.prototype, "DataEntity", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputfileComponent.prototype, "onFileChanged", void 0);
    __decorate([
        core_1.Input('FileId'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputfileComponent.prototype, "Innit", null);
    InputfileComponent = __decorate([
        core_1.Component({
            selector: 'inputfile',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/inputfile/inputfile.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InputfileComponent);
    return InputfileComponent;
}());
exports.InputfileComponent = InputfileComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = "/*CSS chung*/\r\n/*-------------------------------------\r\n-------------------------------------*/\r\n/*TABLE*/\r\ntable {\r\n  font-family: sans-serif;\r\n  margin-top: 20px;\r\n  line-height: 17px;\r\n}\r\nth {\r\n  text-align: center;\r\n  background-color: #0064b4;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n}\r\ntr:nth-child(1) {\r\n  border: none;\r\n}\r\ntr td {\r\n  white-space: nowrap;\r\n  line-height: 17px;\r\n}\r\n.row {\r\n  margin: 5px;\r\n}\r\n/*TITLE*/\r\n.caption {\r\n  text-transform: uppercase;\r\n  float: left;\r\n  font-size: 18px;\r\n  line-height: 17px;\r\n  padding: 10px 0;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin: 5px 5px 0px 5px;\r\n}\r\ntitle {\r\n  display: block;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n/*END TITLE*/\r\n/*ICON*/\r\n.delete {\r\n  background-color: red;\r\n  border: none;\r\n}\r\nbtn-success {\r\n  background-color: #4CAF50;\r\n}\r\n.adddown {\r\n  margin-left: 10%;\r\n  padding-top: 8.9%;\r\n  padding-bottom: 8.9%;\r\n  padding-left: 12%;\r\n}\r\n.edittrash {\r\n  margin-left: 10%;\r\n  padding-top: 1.5%;\r\n  padding-bottom: 1.5%;\r\n  padding-left: 12%;\r\n}\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n}\r\n/*END ICON*/\r\n/*INPUT SEARCH*/\r\n.SearchBox {\r\n  width: 100%;\r\n}\r\n.ui.input input {\r\n  padding: 0.5em 1em !important;\r\n}\r\n.ui.search .prompt {\r\n  border-radius: 4px !important;\r\n}\r\n/*END INPUT SEARCH*/\r\n/*MODAL*/\r\n.modal-header {\r\n  background-color: #0064b4;\r\n  color: aliceblue;\r\n}\r\n.modal-footer {\r\n  padding: 1% 4% 1% 1%;\r\n}\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  -webkit-animation-name: fadeIn;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: fadeIn;\r\n  animation-duration: 0.4s\r\n}\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n}\r\n/*END MODAL*/\r\n/*PADING*/\r\napp-paging {\r\n  float: right;\r\n  padding: 1%;\r\n}\r\n/*END PADING*/\r\n/*END CSS chung*/\r\n/*-------------------------------------\r\n-------------------------------------*/\r\n/*CSS VỚI MODAL NHIỀU TRƯỜNG*/\r\n@media (min-width: 768px) {\r\n  .modal-xl {\r\n    width: 90%;\r\n    max-width: 1000px;\r\n  }\r\n}\r\n/*END CSS VỚI MODAL NHIỀU TRƯỜNG*/\r\n/*-------------------------------------\r\n-------------------------------------*/\r\n/*CSS VỚI MODAL NHIỀU RESPONSIVE 3 TABLE*/\r\n.threetable {\r\n  width: 100%;\r\n}\r\n.threetable td {\r\n  padding: 2px;\r\n  line-height: 17px;\r\n}\r\n@media (min-width: 768px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 14.2%;\r\n    padding-bottom: 14.2%;\r\n    padding-left: 2%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 2%;\r\n  }\r\n}\r\n@media (min-width: 912px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 13.3%;\r\n    padding-bottom: 13.3%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 972px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 12.5%;\r\n    padding-bottom: 12.5%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1018px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 11.9%;\r\n    padding-bottom: 11.9%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1066px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 11.4%;\r\n    padding-bottom: 11.4%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1114px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 11.2%;\r\n    padding-bottom: 11.2%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1138px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 10.7%;\r\n    padding-bottom: 10.7%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1186px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 10.4%;\r\n    padding-bottom: 10.4%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1210px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 10.1%;\r\n    padding-bottom: 10.1%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1246px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 9.8%;\r\n    padding-bottom: 9.8%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1282px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 9.5%;\r\n    padding-bottom: 9.5%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1318px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 9.2%;\r\n    padding-bottom: 9.2%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1354px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 8.9%;\r\n    padding-bottom: 8.9%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1402px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 8.6%;\r\n    padding-bottom: 8.6%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1450px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 8.3%;\r\n    padding-bottom: 8.3%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1486px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 8.3%;\r\n    padding-bottom: 8.3%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.3%;\r\n    padding-bottom: 1.3%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1498px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 8%;\r\n    padding-bottom: 8%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.3%;\r\n    padding-bottom: 1.3%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1546px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 7.7%;\r\n    padding-bottom: 7.7%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.3%;\r\n    padding-bottom: 1.3%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1607px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 7.4%;\r\n    padding-bottom: 7.4%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.3%;\r\n    padding-bottom: 1.3%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1667px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 7.1%;\r\n    padding-bottom: 7.1%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1.3%;\r\n    padding-bottom: 1.3%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1703px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 7.1%;\r\n    padding-bottom: 7.1%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1739px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 6.8%;\r\n    padding-bottom: 6.8%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1811px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 6.6%;\r\n    padding-bottom: 6.6%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1860px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 6.3%;\r\n    padding-bottom: 6.3%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 1943px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 6%;\r\n    padding-bottom: 6%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n@media (min-width: 2185px) {\r\n  .adddown {\r\n    margin-left: 10%;\r\n    padding-top: 5.5%;\r\n    padding-bottom: 5.5%;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .edittrash {\r\n    margin-left: 10%;\r\n    padding-top: 0.9%;\r\n    padding-bottom: 0.9%;\r\n    padding-left: 12%;\r\n  }\r\n}\r\n/*END CSS VỚI MODAL NHIỀU RESPONSIVE 3 TABLE*/\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<span data-toggle=\"modal\" [attr.data-target]=\"'#' + ID\" #OpenModal>\r\n    <ng-content select=\"OpenDiv\"></ng-content>\r\n</span>\r\n<div class=\"modal fade\" [attr.id]=\"ID\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_modal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-{{ModalSize}}\" role=\"document\" [style.width.px]=\"WidthModal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <ng-content select=\"modal-header\"></ng-content>\r\n        <button type=\"button\" class=\"close\" (click)=\"Close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\"modal-body\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <ng-content select=\"modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/modal/modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.ID = this.MakeRandomId();
        this.WidthModal = 1440;
        this.ModalSize = 'xl';
        if (this.ModalSize === undefined) {
            this.ModalSize = 'md';
        }
    }
    ModalComponent.prototype.Open = function () {
        this.OpenModal.nativeElement.click();
    };
    ModalComponent.prototype.Close = function () {
        if (document.getElementById(this.ID).style.display == 'block') {
            this.Open();
        }
    };
    ModalComponent.prototype.ngOnChange = function () {
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.MakeRandomId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    __decorate([
        core_1.ViewChild('OpenModal'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "OpenModal", void 0);
    __decorate([
        core_1.Input('Style-width'),
        __metadata("design:type", Number)
    ], ModalComponent.prototype, "WidthModal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "ModalSize", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-select [items]=\"Entities\"\r\n           [loading]=\"LoadingCount || LoadingSearch\"\r\n           [virtualScroll]=\"true\"\r\n           (scrollToEnd)=\"FetchMore()\"\r\n           [typeahead]=\"TypeAhead\"\r\n           [ngModel]=\"value\"\r\n           [bindLabel]=\"SearchProperty\"\r\n           (focus)=\"FirstLoad()\"\r\n           (change)=\"EmitChange($event)\"\r\n           [placeholder]=\"Placeholder\"\r\n           [disabled]=\"Disabled\">\r\n  <ng-template ng-header-tmp>\r\n    <small *ngIf=\"!(LoadingCount || LoadingSearch)\" class=\"form-text text-muted\">Loaded {{IsSearch? Entities.length-1 : Entities.length}} of {{TotalEntity}}\r\n    </small>\r\n    <small *ngIf=\"LoadingCount || LoadingSearch\" class=\"form-text text-muted\">Loading ...</small>\r\n  </ng-template>\r\n  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n    <ng-container *ngTemplateOutlet=\"templateRef; context: item\"></ng-container>\r\n    <!--span *ngIf=\"!IsSearch || index != 0\">{{item[SearchProperty]}}</span>\r\n    <b *ngIf=\"IsSearch && index == 0\">{{item[SearchProperty]}}</b>-->\r\n  </ng-template>\r\n</ng-select>\r\n\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return NgSelectCustomComponent; }),
    multi: true
};
var NgSelectCustomComponent = /** @class */ (function () {
    function NgSelectCustomComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.Service = null;
        this.SearchProperty = 'Name';
        this.Placeholder = 'Input ' + this.SearchProperty + '...';
        this.BindProperty = 'Id';
        this.Take = 10;
        this.IsSearch = false;
        this.Disabled = false;
        this.HTML = '';
        this.Change = new core_1.EventEmitter();
        this.Entities = [];
        this.TypeAhead = new Subject_1.Subject();
        this.LoadingCount = false;
        this.IsFirstLoad = true;
        this.LoadingSearch = false;
        this.SearchEntity = new FilterEntity_1.FilterEntity();
        this.IsMoreItemEntity = false;
        this.TotalEntity = 0;
        this.onTouchedCallback = noop_1.noop;
        this.onChangeCallback = noop_1.noop;
        this.SearchEntity.Take = this.Take;
        this.TypeAhead.pipe(operators_1.distinctUntilChanged(), operators_1.debounceTime(200), operators_1.switchMap(function (term) {
            _this.LoadingSearch = true;
            _this.value = term;
            _this.SearchEntity.Skip = 0;
            _this.Count();
            _this.cd.markForCheck();
            return _this.Service.Gets(_this.SearchEntity, false);
        })).subscribe(function (x) {
            if (x.length == _this.SearchEntity.Take)
                _this.IsMoreItemEntity = true;
            var temp = {};
            temp[_this.BindProperty] = _this.SearchEntity[_this.SearchProperty];
            _this.Entities = _this.IsSearch ? [temp].concat(x) : x.slice();
            _this.LoadingSearch = false;
            _this.cd.markForCheck();
        }, function () {
            _this.Entities = [];
        });
    }
    Object.defineProperty(NgSelectCustomComponent.prototype, "value", {
        // Input String used by NgModel
        get: function () {
            return this.SearchEntity[this.SearchProperty];
        },
        //set accessor including call the onchange callback
        set: function (v) {
            this.SearchEntity[this.SearchProperty] = v;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgSelectCustomComponent.prototype, "Init", {
        set: function (obj) {
            if (this.SearchEntity == null)
                this.SearchEntity = new FilterEntity_1.FilterEntity();
            Object.assign(this.SearchEntity, obj);
        },
        enumerable: true,
        configurable: true
    });
    ;
    NgSelectCustomComponent.prototype.writeValue = function (obj) {
        var temp = obj;
    };
    NgSelectCustomComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgSelectCustomComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgSelectCustomComponent.prototype.ngOnInit = function () {
        if (this.Service == null)
            console.error('Service null');
        if (this.IsSearch) {
            var t = {};
            t[this.SearchProperty] = '';
            if (this.IsSearch)
                this.Entities.push(t);
        }
    };
    NgSelectCustomComponent.prototype.FirstLoad = function () {
        var _this = this;
        this.LoadingSearch = true;
        this.SearchEntity.Skip = 0;
        this.Count();
        this.Service.Gets(this.SearchEntity, false).subscribe(function (x) {
            if (x.length == _this.SearchEntity.Take)
                _this.IsMoreItemEntity = true;
            var temp = {};
            temp[_this.BindProperty] = _this.SearchEntity[_this.SearchProperty];
            _this.Entities = _this.IsSearch ? [temp].concat(x) : x.slice();
            _this.LoadingSearch = false;
            _this.cd.markForCheck();
        }, function () {
            _this.Entities = [];
        });
    };
    NgSelectCustomComponent.prototype.FetchMore = function () {
        var _this = this;
        if (this.IsMoreItemEntity == true) {
            this.SearchEntity.Skip += this.SearchEntity.Take;
            this.LoadingSearch = true;
            this.Service.Gets(this.SearchEntity, false).subscribe(function (x) {
                _this.Entities = _this.Entities.concat(x);
                if (x.length == 0)
                    _this.IsMoreItemEntity = false;
                _this.LoadingSearch = false;
                _this.cd.markForCheck();
            });
        }
    };
    NgSelectCustomComponent.prototype.Count = function () {
        var _this = this;
        this.LoadingCount = true;
        this.Service.Count(this.SearchEntity, false).subscribe(function (x) {
            _this.TotalEntity = x;
            _this.LoadingCount = false;
            _this.cd.markForCheck();
        });
    };
    NgSelectCustomComponent.prototype.EmitChange = function (event) {
        if (event == null) {
            this.value = null;
            this.onChangeCallback(null);
            this.Change.emit(null);
            return;
        }
        this.value = event[this.SearchProperty];
        if (this.BindProperty != null)
            this.onChangeCallback(event[this.BindProperty]);
        else
            this.onChangeCallback(event);
        this.Change.emit(event);
        this.cd.markForCheck();
    };
    NgSelectCustomComponent.prototype.translate = function (item) {
        return "<span class=\"pull-right\">" + item.Id + "</span>";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", HttpService_1.HttpService)
    ], NgSelectCustomComponent.prototype, "Service", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectCustomComponent.prototype, "SearchProperty", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectCustomComponent.prototype, "Placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectCustomComponent.prototype, "BindProperty", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NgSelectCustomComponent.prototype, "Take", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgSelectCustomComponent.prototype, "IsSearch", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgSelectCustomComponent.prototype, "Disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectCustomComponent.prototype, "HTML", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSelectCustomComponent.prototype, "Change", void 0);
    __decorate([
        core_1.ContentChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], NgSelectCustomComponent.prototype, "templateRef", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgSelectCustomComponent.prototype, "Init", null);
    NgSelectCustomComponent = __decorate([
        core_1.Component({
            selector: 'ng-select-custom',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.css")],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], NgSelectCustomComponent);
    return NgSelectCustomComponent;
}());
exports.NgSelectCustomComponent = NgSelectCustomComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-select [items]=\"Entities\"\r\n           [loading]=\"LoadingCount || LoadingSearch\"\r\n           [virtualScroll]=\"true\"\r\n           (scrollToEnd)=\"FetchMore()\"\r\n           [typeahead]=\"TypeAhead\"\r\n           [ngModel]=\"value\"\r\n           [bindLabel]=\"SearchProperty\"\r\n           (focus)=\"FirstLoad()\"\r\n           (change)=\"EmitChange($event)\"\r\n           [placeholder]=\"Placeholder\"\r\n           [disabled]=\"Disabled\">\r\n  <ng-template ng-header-tmp>\r\n    <small *ngIf=\"!(LoadingCount || LoadingSearch)\" class=\"form-text text-muted\">Loaded {{IsSearch? Entities.length\r\n      -1 : Entities.length}} of {{TotalEntity}}\r\n    </small>\r\n    <small *ngIf=\"LoadingCount || LoadingSearch\" class=\"form-text text-muted\">Loading ...</small>\r\n  </ng-template>\r\n  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n    <span *ngIf=\"!IsSearch || index != 0\">{{item[SearchProperty]}}</span>\r\n    <b *ngIf=\"IsSearch && index == 0\">{{item[SearchProperty]}}</b>\r\n  </ng-template>\r\n</ng-select>\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
var FilterEntity_1 = __webpack_require__("./src/app/Module/FilterEntity.ts");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return NgSelectUserComponent; }),
    multi: true
};
var NgSelectUserComponent = /** @class */ (function () {
    function NgSelectUserComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.Service = null;
        this.SearchProperty = 'Display';
        this.Placeholder = 'Input ' + this.SearchProperty + '...';
        this.BindProperty = null;
        this.Take = 10;
        this.IsSearch = false;
        this.Disabled = false;
        this.Change = new core_1.EventEmitter();
        this.Entities = [];
        this.TypeAhead = new Subject_1.Subject();
        this.LoadingCount = false;
        this.IsFirstLoad = true;
        this.LoadingSearch = false;
        this.SearchEntity = new FilterEntity_1.FilterEntity();
        this.IsMoreItemEntity = false;
        this.TotalEntity = 0;
        this.onTouchedCallback = noop_1.noop;
        this.onChangeCallback = noop_1.noop;
        this.SearchEntity.Take = this.Take;
        this.TypeAhead.pipe(operators_1.distinctUntilChanged(), operators_1.debounceTime(200), operators_1.switchMap(function (term) {
            _this.LoadingSearch = true;
            _this.value = term;
            _this.SearchEntity.Skip = 0;
            _this.Count();
            _this.cd.markForCheck();
            return _this.Service.Gets(_this.SearchEntity, false);
        })).subscribe(function (x) {
            if (x.length == _this.SearchEntity.Take) {
                _this.IsMoreItemEntity = true;
            }
            var temp = {};
            temp[_this.BindProperty] = _this.SearchEntity[_this.SearchProperty];
            _this.Entities = _this.IsSearch ? [temp].concat(x) : x.slice();
            _this.LoadingSearch = false;
            _this.cd.markForCheck();
        }, function () {
            _this.Entities = [];
        });
    }
    Object.defineProperty(NgSelectUserComponent.prototype, "value", {
        // Input String used by NgModel
        get: function () {
            return this.SearchEntity[this.SearchProperty];
        },
        // set accessor including call the onchange callback
        set: function (v) {
            this.SearchEntity[this.SearchProperty] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectUserComponent.prototype, "Init", {
        set: function (obj) {
            if (this.SearchEntity == null) {
                this.SearchEntity = new FilterEntity_1.FilterEntity();
            }
            Object.assign(this.SearchEntity, obj);
        },
        enumerable: true,
        configurable: true
    });
    NgSelectUserComponent.prototype.writeValue = function (obj) {
        var temp = obj;
    };
    NgSelectUserComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgSelectUserComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgSelectUserComponent.prototype.ngOnInit = function () {
        if (this.Service == null) {
            console.error('Service null');
        }
        if (this.IsSearch) {
            var t = {};
            t[this.SearchProperty] = '';
            if (this.IsSearch) {
                this.Entities.push(t);
            }
        }
    };
    NgSelectUserComponent.prototype.FirstLoad = function () {
        var _this = this;
        if (this.IsFirstLoad) {
            this.IsFirstLoad = false;
            this.LoadingSearch = true;
            this.SearchEntity.Skip = 0;
            this.Count();
            this.Service.Gets(this.SearchEntity, false).subscribe(function (x) {
                if (x.length == _this.SearchEntity.Take) {
                    _this.IsMoreItemEntity = true;
                }
                var temp = {};
                temp[_this.BindProperty] = _this.SearchEntity[_this.SearchProperty];
                _this.Entities = _this.IsSearch ? [temp].concat(x) : x.slice();
                _this.LoadingSearch = false;
                _this.cd.markForCheck();
            }, function () {
                _this.Entities = [];
            });
        }
    };
    NgSelectUserComponent.prototype.FetchMore = function () {
        var _this = this;
        if (this.IsMoreItemEntity == true) {
            this.SearchEntity.Skip += this.SearchEntity.Take;
            this.LoadingSearch = true;
            this.Service.Gets(this.SearchEntity, false).subscribe(function (x) {
                _this.Entities = _this.Entities.concat(x);
                if (x.length == 0) {
                    _this.IsMoreItemEntity = false;
                }
                _this.LoadingSearch = false;
                _this.cd.markForCheck();
            });
        }
    };
    NgSelectUserComponent.prototype.Count = function () {
        var _this = this;
        this.LoadingCount = true;
        this.Service.Count(this.SearchEntity, false).subscribe(function (x) {
            _this.TotalEntity = x;
            _this.LoadingCount = false;
            _this.cd.markForCheck();
        });
    };
    NgSelectUserComponent.prototype.EmitChange = function (event) {
        if (event == null) {
            this.value = null;
            this.onChangeCallback(null);
            this.Change.emit(null);
            return;
        }
        this.value = event[this.SearchProperty];
        if (this.BindProperty != null) {
            this.onChangeCallback(event[this.BindProperty]);
        }
        else {
            this.onChangeCallback(event);
        }
        this.Change.emit(event);
        this.cd.markForCheck();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", HttpService_1.HttpService)
    ], NgSelectUserComponent.prototype, "Service", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSelectUserComponent.prototype, "SearchProperty", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectUserComponent.prototype, "Placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSelectUserComponent.prototype, "BindProperty", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSelectUserComponent.prototype, "Take", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSelectUserComponent.prototype, "IsSearch", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSelectUserComponent.prototype, "Disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSelectUserComponent.prototype, "Change", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgSelectUserComponent.prototype, "Init", null);
    NgSelectUserComponent = __decorate([
        core_1.Component({
            selector: 'ng-select-user',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.css")],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], NgSelectUserComponent);
    return NgSelectUserComponent;
}());
exports.NgSelectUserComponent = NgSelectUserComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/paging/paging.component.css":
/***/ (function(module, exports) {

module.exports = ".list-header {\r\n    font-size: 30px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.list-header .list-body .list-form-header .title {\r\n    color: #ffffff;\r\n}\r\n\r\nspan.input-group-addon i {\r\n    color: #0064b4;\r\n    font-size: 14px;\r\n}\r\n\r\n@-webkit-keyframes NewRow {\r\n    0% {\r\n        outline: solid 0.5px #0064b4;\r\n    }\r\n\r\n    100% {\r\n        outline: solid 0 #0064b4;\r\n    }\r\n}\r\n\r\n@keyframes NewRow {\r\n    0% {\r\n        outline: solid 0.5px #0064b4;\r\n    }\r\n\r\n    100% {\r\n        outline: solid 0 #0064b4;\r\n    }\r\n}\r\n\r\n.paging button {\r\n    background-color: #0064b4;\r\n    border: 1px solid #0064b4;\r\n    color: #ffffff;\r\n\r\n}\r\n\r\n.page-item {\r\n    cursor: default;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\na.dropdown-item:hover{\r\n    background-color: #2A92D8;\r\n    color: white;\r\n}\r\n\r\n.dropdown-menu{\r\n    min-width: 0px;\r\n}"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/paging/paging.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination\">\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Previous\" tabindex=\"-1\" (click)=\"previous()\"\n               *ngIf=\"PagingModel.TotalPage>PagingModel.NumberButton\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{'active':PagingModel.Active == 0}\" (click)=\"entry(0)\">\n            <a class=\"page-link\" tabindex=\"-1\">1</a>\n        </li>\n        <li class=\"page-item\" *ngIf=\"dot && PagingModel.TotalPage>PagingModel.NumberButton && PagingModel.base > 1\">\n            <a class=\"page-link\" tabindex=\"-1\">...</a>\n        </li>\n        <li class=\"page-item\" *ngFor=\"let i of PagingModel.buttons\" [ngClass]=\"{'active':PagingModel.Active == i}\"\n            (click)=\"entry(i)\">\n            <a *ngIf=\"i>0 && i < PagingModel.TotalPage-1\" class=\"page-link\" tabindex=\"-1\">{{i+1}}</a>\n        </li>\n        <li class=\"page-item\"\n            *ngIf=\"dot && PagingModel.TotalPage>PagingModel.NumberButton  && PagingModel.base < PagingModel.TotalPage - PagingModel.NumberButton + 1\">\n            <a class=\"page-link\" tabindex=\"-1\">...</a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{'active':PagingModel.Active == PagingModel.TotalPage-1}\"\n            *ngIf=\"PagingModel.TotalPage > 1\" (click)=\"entry(PagingModel.TotalPage-1)\">\n            <a class=\"page-link\" tabindex=\"-1\">{{PagingModel.TotalPage}}</a>\n        </li>\n        <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Next\" tabindex=\"-1\" (click)=\"next()\"\n               *ngIf=\"PagingModel.TotalPage>PagingModel.NumberButton\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </li>\n        <li class=\"dropup\">\n            <a class=\"btn btn-secondary dropdown-toggle\" href=\"https://example.com\" id=\"dropdownMenuLink\"\n               data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{PagingModel.Take}}\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" style=\"left: auto;\">\n                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let s of SetOfPage\" (click)=\"SetTake(s)\">{{s}}</a>\n            </div>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/paging/paging.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Nếu cần binds dữ liệu ra ngoài thì gắn 1 Oject PagingModel vào, nếu không, chỉ cần khai báo number, cần nút ... thì dot =  true .
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var PagingComponent = /** @class */ (function () {
    function PagingComponent() {
        this.SetOfPage = [10, 20, 50];
        this.onChanges = new core_1.EventEmitter();
    }
    PagingComponent.prototype.previous = function () {
        if (this.valid(this.PagingModel.Active - 1)) {
            this.PagingModel.setActive(this.PagingModel.Active - 1);
        }
    };
    PagingComponent.prototype.entry = function (PageToGo) {
        if (this.valid(PageToGo)) {
            this.PagingModel.setActive(PageToGo);
            this.onChanges.emit(this.PagingModel);
        }
    };
    PagingComponent.prototype.next = function () {
        if (this.valid(this.PagingModel.Active + 1)) {
            this.PagingModel.setActive(this.PagingModel.Active + 1);
            this.onChanges.emit(this.PagingModel);
        }
    };
    PagingComponent.prototype.valid = function (number) {
        return !(number > this.PagingModel.TotalPage - 1 || number < 0);
    };
    PagingComponent.prototype.SetTake = function (number) {
        this.PagingModel.Take = number;
        this.entry(0);
        this.onChanges.emit(this.PagingModel);
        return false;
    };
    PagingComponent.prototype.ngOnInit = function () {
    };
    PagingComponent.prototype.ngOnChanges = function () {
        if (this.PagingModel === undefined)
            this.PagingModel = new paging_model_1.PagingModel(10, this.SetOfPage[0]);
        else {
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PagingComponent.prototype, "dot", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", paging_model_1.PagingModel)
    ], PagingComponent.prototype, "PagingModel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PagingComponent.prototype, "SetOfPage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PagingComponent.prototype, "onChanges", void 0);
    PagingComponent = __decorate([
        core_1.Component({
            selector: 'app-paging',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PagingComponent);
    return PagingComponent;
}());
exports.PagingComponent = PagingComponent;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/paging/paging.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PagingModel = /** @class */ (function () {
    function PagingModel(NumberButton, Take, callback) {
        if (NumberButton % 2 == 0 || NumberButton < 3)
            throw new Error("the NumberButton must be odd and greater than 2");
        this.buttons = Array(NumberButton - 2).fill(1).map(function (x, i) {
            return i + 1;
        });
        this.Take = Take;
        this.TotalPage = 0;
        this.NumberButton = NumberButton;
        this.Active = 0;
        this.base = 1;
    }
    PagingModel.prototype.ceil = function () {
        return Math.floor(this.NumberButton / 2 + 1);
    };
    PagingModel.prototype.setActive = function (Active) {
        var _this = this;
        if (Active <= this.TotalPage && Active >= 0) {
            this.Active = Active;
            var fi = Math.floor(this.NumberButton / 2 + 1);
            if (this.Active > this.TotalPage - fi) {
                this.base = this.TotalPage - fi - 2;
            }
            else if (this.Active > fi - 1) {
                this.base = this.Active - fi + 2;
            }
            else {
                this.base = 1;
            }
            this.buttons = Array(this.NumberButton - 2).fill(1).map(function (x, i) {
                return _this.base + i;
            });
        }
        else {
            throw new Error("Invalid NumberButton");
        }
    };
    return PagingModel;
}());
exports.PagingModel = PagingModel;


/***/ }),

/***/ "./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.css":
/***/ (function(module, exports) {

module.exports = ".TagsInput {\r\n    background-color: #fff;\r\n    /*border: 1px solid #ccc;*/\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n    display: inline-block;\r\n    /*padding: 4px 6px;*/\r\n    color: #555;\r\n    vertical-align: middle;\r\n    max-width: 100%;\r\n    line-height: 22px;\r\n    cursor: text;\r\n    width: 100%;\r\n    height: auto;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n\r\n.tag {\r\n    margin-right: 2px;\r\n    color: white;\r\n}\r\n\r\n\r\n.label-info {\r\n    background-color: #5bc0de;\r\n}\r\n\r\n\r\n.label {\r\n    display: inline-block;\r\n    padding: .2em .6em .3em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: .25em;\r\n}\r\n\r\n\r\n.remove-tag{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.dropdown-list {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.dropdown-content {\r\n    position: absolute;\r\n    width: 90%;\r\n    left: 1.1rem;\r\n    z-index: 999;\r\n    list-style: none;\r\n    white-space: normal;\r\n    -webkit-box-shadow: 2px 2px 5px #888888;\r\n            box-shadow: 2px 2px 5px #888888;\r\n    cursor: pointer;\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n}\r\n\r\n\r\n.dropdown-content li:hover {\r\n    color: #fff;\r\n    background-color: #2A92D8;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"TagsInput container\">\r\n    <span *ngFor=\"let Tag of DataList\">\r\n        <span [class]=\"'tag label ' + (Tag.Class == null ? DefaultTagClass : Tag.Class)\"\r\n              *ngIf=\"Tag[PropertySelected] == true\">\r\n                       <!--{{Tag[DisplayProperty] == null ? Tag.substr(0,TagLength) : Tag[DisplayProperty].substr(0,TagLength)}}{{(Tag[DisplayProperty] == null ? Tag : Tag[DisplayProperty]).length < DisplayProperty ? \"\" : \"...\"}}-->\r\n                       {{Tag[DisplayProperty] == null ? Tag : Tag[DisplayProperty]}}\r\n           <span (click)=\"RemoveTag(Tag)\" [class]=\"'remove-tag ' + RemoveTagClass\" *ngIf=\"!Disabled\"> x</span>\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"IsShowInput\" (mousedown)=\"Click()\" (keyup.esc)=\"Esc()\" (keyup.ArrowDown)=\"Down()\" (keyup.ArrowUp)=\"Up()\"\r\n          (keyup.enter)=\"Enter()\" (keypress)=\"CurrentNumber = -1; IsShow = true;\">\r\n        <ng-content select=\"dropdown-input\">\r\n        </ng-content>\r\n    </span>\r\n    <ul class=\"dropdown-content list-group\" *ngIf=\"IsShow\" (click)=\"TurnOff($event)\" (mousedown)=\"TurnOn()\"\r\n        (mousemove)=\"Remove()\">\r\n        <ng-content select=\"dropdown-content\" *ngIf=\"IsShow\"></ng-content>\r\n        <li *ngIf=\"DataList == null\" class=\"list-group-item\">Đang tải dữ liệu ...</li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dropdown_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/dropdown/dropdown.component.ts");
var TagsinputComponent = /** @class */ (function (_super) {
    __extends(TagsinputComponent, _super);
    // @Input() TagList: Array<any> = [];
    function TagsinputComponent() {
        var _this = _super.call(this) || this;
        _this.IsShow = false;
        _this.DefaultTagClass = "label-info";
        _this.DisplayProperty = "Name";
        _this.RemoveTagClass = "";
        _this.TagLength = 15;
        _this.isTurnOffAnother = true;
        _this.IsShowInput = true;
        _this.Id = _this.MakeRandomId();
        _this.DataList = [];
        _this.onEnter = new core_1.EventEmitter();
        _this.ChangeTag = new core_1.EventEmitter();
        _this.ChangeWhenUpDown = false;
        _this.IsLoopOption = false;
        _this.CurrentNumber = -1;
        _this.IsValidateDataList = true;
        _this.isMultiSelect = true;
        _this.Disabled = false;
        return _this;
    }
    TagsinputComponent.prototype.RemoveTag = function (Tag) {
        //let indexOf = this.DataList.indexOf(Tag);
        //this.DataList.splice(indexOf, 1);
        //this.ChangeTag.emit(Tag);
        Tag.IsSelected = false;
    };
    TagsinputComponent.prototype.MakeRandomId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    TagsinputComponent.IsBlock = false;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagsinputComponent.prototype, "DefaultTagClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagsinputComponent.prototype, "DisplayProperty", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagsinputComponent.prototype, "RemoveTagClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TagsinputComponent.prototype, "TagLength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "isTurnOffAnother", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "IsShowInput", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TagsinputComponent.prototype, "DataList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TagsinputComponent.prototype, "onEnter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TagsinputComponent.prototype, "ChangeTag", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "ChangeWhenUpDown", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "IsLoopOption", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "IsValidateDataList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "isMultiSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TagsinputComponent.prototype, "Disabled", void 0);
    TagsinputComponent = __decorate([
        core_1.Component({
            selector: 'TagsInput',
            template: __webpack_require__("./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.html"),
            styles: [__webpack_require__("./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagsinputComponent);
    return TagsinputComponent;
}(dropdown_component_1.DropdownComponent));
exports.TagsinputComponent = TagsinputComponent;


/***/ }),

/***/ "./src/app/Shared/file-browser/directory/directory.entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var DirectoryEntity = /** @class */ (function (_super) {
    __extends(DirectoryEntity, _super);
    function DirectoryEntity() {
        var _this = _super.call(this) || this;
        _this.Path = null;
        _this.SourcePath = null;
        _this.DestinationPath = null;
        return _this;
    }
    return DirectoryEntity;
}(IEntity_Entity_1.IEntity));
exports.DirectoryEntity = DirectoryEntity;


/***/ }),

/***/ "./src/app/Shared/file-browser/directory/directory.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var DirectoryService = /** @class */ (function (_super) {
    __extends(DirectoryService, _super);
    function DirectoryService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Directories';
        return _this;
    }
    DirectoryService.prototype.CreateFolder = function (body, IsShowLoading) {
        return _super.prototype.intercept.call(this, this.http.post(this.url + '/Create', JSON.stringify(body), {
            observe: 'response',
            headers: _super.prototype.GetHeaders.call(this)
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    DirectoryService.prototype.RenameFolder = function (body, IsShowLoading) {
        return _super.prototype.intercept.call(this, this.http.post(this.url + '/Rename', JSON.stringify(body), {
            observe: 'response',
            headers: _super.prototype.GetHeaders.call(this)
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    DirectoryService.prototype.DeleteFolder = function (body, IsShowLoading) {
        return _super.prototype.intercept.call(this, this.http.post(this.url + '/Delete', JSON.stringify(body), {
            observe: 'response',
            headers: _super.prototype.GetHeaders.call(this)
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    DirectoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DirectoryService);
    return DirectoryService;
}(HttpService_1.HttpService));
exports.DirectoryService = DirectoryService;


/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.component.css":
/***/ (function(module, exports) {

module.exports = ".custom-checkbox {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  left: calc(100% - 25px);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.custom-checkbox input {\r\n  display: none;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  border-radius: 3px;\r\n  background-color: #eee;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.custom-checkbox:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.custom-checkbox input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.custom-checkbox input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.custom-checkbox .checkmark:after {\r\n  left: 9px;\r\n  top: 3px;\r\n  width: 9px;\r\n  height: 16px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.remove-tag {\r\n  position: absolute;\r\n  top: -1px;\r\n  right: 0;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  border-radius: 2px;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n"

/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal [ModalSize]=\"ModalSize\" #modal>\r\n  <OpenDiv (click)=\"writeValue(temp)\">\r\n    <ng-content select=\"OpenDiv\"></ng-content>\r\n  </OpenDiv>\r\n  <modal-header>\r\n    <h5 class=\"modal-title\" id=\"add_modal\" style=\"color:white\">\r\n      <i class=\"fa fa-dropbox\" aria-hidden=\"true\"> </i>\r\n      <span *ngFor=\"let url of fileMap; let i = index\"><a style=\"cursor: default\" (click)=\"goToDirectory(i)\">{{url}}</a> / </span>\r\n    </h5>\r\n  </modal-header>\r\n  <modal-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 col-sm-12\" style=\"max-height:33rem;overflow-y:auto;\">\r\n        <div class=\"row\">\r\n          <div [File]=\"file\" class=\"card col-md-2\" style=\"height:10rem\"\r\n               *ngFor=\"let file of fileBrowserEntities; let i = index\"\r\n               (contextmenu)=\"OpenContext($event,cm,file);\">\r\n            <label class=\"custom-checkbox\" *ngIf=\"!file.IsDirectory\">\r\n              <input type=\"checkbox\" (click)=\"toggleFile(file)\" [checked]=\"file.IsSelected\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n            <img class=\"card-img-top\" src=\"/assets/file.png\" name=\"Img\" style=\"height: 6.5rem;\"\r\n                 (dblclick)=\"file.IsDirectory ? Search(file.Src) : null\">\r\n            <p class=\"card-title\" *ngIf=\"!file.IsEdit\">{{file.Name}}</p>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"file.Name\"\r\n                   (keydown.enter)=\"PostNameFolder(file)\" *ngIf=\"file.IsEdit\">\r\n          </div>\r\n          <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-12\" style=\"max-height: 33rem;padding: 0;overflow-y: auto;\">\r\n        <ul class=\"list-group row\">\r\n          <li class=\"list-group-item col-md-12 col-sm-12\"\r\n              *ngFor=\"let selected of selectedFileEntities; let i of index\">\r\n            <span (click)=\"toggleFile(selected)\" [class]=\"'remove-tag '\" *ngIf=\"!Disabled\"> x</span>\r\n            {{selected.Src}};\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </modal-body>\r\n  <modal-footer>\r\n    <input type=\"file\" (change)=\"UploadImage($event)\" #fileInput placeholder=\"Upload file...\"\r\n           style=\"display: none;\"/>\r\n    <button (click)=\"AddNewFolder()\" class=\"btn btn-accent\">\r\n      <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Create Folder\r\n    </button>\r\n    <button (click)=\"TriggerUploadImage()\" class=\"btn btn-info\">\r\n      <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Upload Image\r\n    </button>\r\n    <button (click)=\"finishTrigger(); modal.Close()\"\r\n            class=\"btn btn-success\">\r\n      <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Choose\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.Close()\">\r\n      <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel</span>\r\n    </button>\r\n  </modal-footer>\r\n</app-modal>\r\n"

/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var file_browser_service_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.service.ts");
var file_browser_entity_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.entity.ts");
var directory_service_1 = __webpack_require__("./src/app/Shared/file-browser/directory/directory.service.ts");
var File_Entity_1 = __webpack_require__("./src/app/Shared/file-browser/file/File.Entity.ts");
var File_Service_1 = __webpack_require__("./src/app/Shared/file-browser/file/File.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var directory_entity_1 = __webpack_require__("./src/app/Shared/file-browser/directory/directory.entity.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop_1 = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
// import { EmployeeSearchEntity } from "../../Module/MEmployee/Employee.SearchEntity";
// import { EmployeeService } from "../../Module/MEmployee/Employee.Service";
// import { EmployeeEntity } from "../../Module/MEmployee/Employee.Entity";
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return FileBrowserComponent; }),
    multi: true
};
var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(FileBrowserService, FileService, DirectoryService, toastr, vcr) {
        this.FileBrowserService = FileBrowserService;
        this.FileService = FileService;
        this.DirectoryService = DirectoryService;
        this.toastr = toastr;
        this.CurrentFile = new file_browser_entity_1.FileBrowserEntity();
        this.FileEntity = new File_Entity_1.FileEntity();
        this.selectedFileEntities = [];
        this.onChanges = new core_1.EventEmitter();
        this.finish = new core_1.EventEmitter();
        this.Disabled = false;
        this.Multiple = true;
        this.onTouchedCallback = noop_1.noop;
        this.onChangeCallback = noop_1.noop;
        this.ModalSize = 'xxl';
        this.Search('/Files');
    }
    FileBrowserComponent.prototype.writeValue = function (obj) {
        if (obj == null)
            return;
        this.temp = obj;
        var files = obj.split(';');
        this.selectedFileEntities = files.map(function (f) {
            if (f == '')
                return;
            var fbe = new file_browser_entity_1.FileBrowserEntity();
            fbe.Src = f;
            fbe.IsSelected = true;
            return fbe;
        }).filter(function (f) { return f != null; });
        if (this.fileMap == null)
            this.Search('/Files');
        else
            this.Search(this.fileMap.join('/'));
    };
    FileBrowserComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FileBrowserComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FileBrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Rename', icon: 'fa fa-plus', command: function (event) { return _this.RenameFolder(); } },
            { label: 'Xóa', icon: 'fa fa-trash', command: function (event) { return _this.DeleteFolder(); } }
        ];
    };
    FileBrowserComponent.prototype.Search = function (Url, IsCreate) {
        var _this = this;
        this.FileBrowserService.getFiles(Url).subscribe(function (x) {
            var end = Url.length;
            if (Url[end - 1] == '/')
                end = end - 1;
            _this.fileMap = Url.substring(0, end).split('/');
            _this.fileBrowserEntities = x;
            if (IsCreate == true) {
                for (var _i = 0, _a = _this.fileBrowserEntities; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.IsDirectory && item.Name === 'NewFolder') {
                        item.IsEdit = true;
                    }
                }
            }
            _this.fileBrowserEntities.forEach(function (f) {
                f.IsSelected = _this.selectedFileEntities.some(function (ff) {
                    return ff.Src == f.Src;
                });
            });
        });
    };
    FileBrowserComponent.prototype.OpenContext = function (a, cm, file) {
        if (file.IsDirectory) {
            cm.show({
                pageX: a.pageX - 100, pageY: a.pageY - 700, preventDefault: function () {
                }
            });
            a.preventDefault();
            Object.assign(this.CurrentFile, file);
        }
        else {
            return;
        }
    };
    FileBrowserComponent.prototype.goToDirectory = function (index) {
        var url = '';
        for (var i = 0; i <= index; i++) {
            url += this.fileMap[i] + '/';
        }
        this.Search(url);
    };
    FileBrowserComponent.prototype.finishTrigger = function () {
        this.temp = this.selectedFileEntities.map(function (f) { return f.Src; }).join(';');
        this.onChangeCallback(this.temp);
        this.finish.emit(this.temp);
    };
    FileBrowserComponent.prototype.toggleFile = function (file) {
        if (file.IsSelected) {
            file.IsSelected = false;
            this.selectedFileEntities = this.selectedFileEntities.filter(function (f) {
                return f.Src != file.Src;
            });
        }
        else {
            if (this.Multiple == false) {
                this.fileBrowserEntities.forEach(function (fB) { return fB.IsSelected = false; });
                this.selectedFileEntities = [];
            }
            file.IsSelected = true;
            this.selectedFileEntities.push(file);
        }
        this.onChanges.emit(file);
    };
    FileBrowserComponent.prototype.AddNewFolder = function () {
        var _this = this;
        var Directory = new directory_entity_1.DirectoryEntity();
        Directory.Path = this.fileMap.join('/') + '/NewFolder';
        this.DirectoryService.CreateFolder(Directory).subscribe(function (res) {
            if (res) {
                _this.Search(_this.fileMap.join('/'), true);
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError('Something went wrong!');
        });
    };
    FileBrowserComponent.prototype.RenameFolder = function () {
        for (var _i = 0, _a = this.fileBrowserEntities; _i < _a.length; _i++) {
            var file = _a[_i];
            if (file.Name === this.CurrentFile.Name) {
                file.IsEdit = true;
            }
        }
    };
    FileBrowserComponent.prototype.DeleteFolder = function () {
        var _this = this;
        var ConfirmBox = confirm('Are you sure about delete this folder?');
        if (ConfirmBox) {
            var Directory = new directory_entity_1.DirectoryEntity();
            Directory.Path = this.fileMap.join('/') + '/' + this.CurrentFile.Name;
            this.DirectoryService.DeleteFolder(Directory).subscribe(function (res) {
                if (res) {
                    _this.Search(_this.fileMap.join('/'));
                    _this.toastr.ShowSuccess();
                }
            }, function (err) {
                _this.toastr.ShowError('Something went wrong');
            });
        }
    };
    FileBrowserComponent.prototype.PostNameFolder = function (FileEntity) {
        var _this = this;
        var Directory = new directory_entity_1.DirectoryEntity();
        Directory.DestinationPath = this.fileMap.join('/') + '/' + FileEntity.Name;
        Directory.SourcePath = FileEntity.Src;
        this.DirectoryService.RenameFolder(Directory).subscribe(function (res) {
            if (res) {
                var Index = _this.fileBrowserEntities.indexOf(FileEntity);
                _this.fileBrowserEntities[Index].IsEdit = false;
                _this.toastr.ShowSuccess();
            }
        }, function (err) {
            _this.toastr.ShowError('Something went wrong!');
        });
    };
    FileBrowserComponent.prototype.TriggerUploadImage = function () {
        var fileBrowser = this.fileInput.nativeElement;
        fileBrowser.click();
    };
    FileBrowserComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result.substring(reader.result.indexOf(',') + 1, reader.result.length + 1)); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    FileBrowserComponent.prototype.UploadImage = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file_1 = fileList[0];
            var ConfirmBox = confirm('Are you sure about upload this image?');
            if (ConfirmBox) {
                this.getBase64(file_1).then(function (data) {
                    _this.FileEntity.FileName = file_1.name;
                    _this.FileEntity.Path = _this.fileMap.join('/');
                    _this.FileEntity.Content = data;
                    _this.FileService.UploadFile(_this.FileEntity).subscribe(function (res) {
                        if (res) {
                            _this.toastr.ShowSuccess();
                            _this.Search(_this.fileMap.join('/'));
                        }
                    });
                });
            }
            else {
                return;
            }
        }
    };
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "fileInput", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileBrowserComponent.prototype, "onChanges", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileBrowserComponent.prototype, "finish", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileBrowserComponent.prototype, "Disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileBrowserComponent.prototype, "Multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileBrowserComponent.prototype, "ModalSize", void 0);
    FileBrowserComponent = __decorate([
        core_1.Component({
            selector: 'FileBrowser',
            template: __webpack_require__("./src/app/Shared/file-browser/file-browser.component.html"),
            styles: [__webpack_require__("./src/app/Shared/file-browser/file-browser.component.css")],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [file_browser_service_1.FileBrowserService, File_Service_1.FileService,
            directory_service_1.DirectoryService, CustomToaster_1.BottomToastsManager, core_1.ViewContainerRef])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());
exports.FileBrowserComponent = FileBrowserComponent;


/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var file_browser_entity_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.entity.ts");
var FileBrowserDirective = /** @class */ (function () {
    function FileBrowserDirective(el) {
        this.el = el;
    }
    FileBrowserDirective.prototype.ngOnInit = function () {
        var img = this.el.nativeElement.getElementsByClassName('card-img-top')[0];
        if (this.File.IsDirectory) {
            img.src = '/assets/Closed_Folder-512.png';
        }
        else {
            switch (this.File.Extension.toLowerCase()) {
                case 'png':
                case 'jpg':
                    img.src = this.File.Src;
                    break;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", file_browser_entity_1.FileBrowserEntity)
    ], FileBrowserDirective.prototype, "File", void 0);
    FileBrowserDirective = __decorate([
        core_1.Directive({
            selector: '[File]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FileBrowserDirective);
    return FileBrowserDirective;
}());
exports.FileBrowserDirective = FileBrowserDirective;


/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileBrowserEntity = /** @class */ (function () {
    function FileBrowserEntity() {
        this.IsSelected = false;
        this.IsEdit = false;
    }
    return FileBrowserEntity;
}());
exports.FileBrowserEntity = FileBrowserEntity;


/***/ }),

/***/ "./src/app/Shared/file-browser/file-browser.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var file_browser_entity_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.entity.ts");
var FileBrowserService = /** @class */ (function () {
    function FileBrowserService(httpClient) {
        this.httpClient = httpClient;
        this._parser = new DOMParser();
    }
    FileBrowserService.prototype.getFiles = function (url) {
        var _this = this;
        return this.httpClient.get(url, { responseType: 'text' }).map(function (x) {
            var el = _this._parser.parseFromString(x, 'text/xml');
            var fileArray = el.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            var result = [];
            for (var i = 0; i < fileArray.length; i++) {
                var type = fileArray[i].classList[0];
                var fileBrowserEntity = new file_browser_entity_1.FileBrowserEntity();
                fileBrowserEntity.IsDirectory = type == 'directory';
                fileBrowserEntity.Name = fileArray[i].getElementsByTagName('a')[0].textContent;
                var tempHref = fileArray[i].getElementsByTagName('a')[0].getAttribute('href');
                if (url[url.length - 1] == '/')
                    url = url.substring(0, url.length - 1);
                fileBrowserEntity.Src = url + tempHref.substring(1, tempHref.length);
                if (!fileBrowserEntity.IsDirectory) {
                    var nameSplit = fileBrowserEntity.Name.split('.');
                    fileBrowserEntity.Extension = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1] : '';
                    fileBrowserEntity.Size = Number.parseInt(fileArray[i].getElementsByClassName('length')[0].textContent.replace(',', ''));
                    ;
                }
                else {
                    fileBrowserEntity.Extension = '';
                    if (fileBrowserEntity.Name[fileBrowserEntity.Name.length - 1] == '/')
                        fileBrowserEntity.Name = fileBrowserEntity.Name.substring(0, fileBrowserEntity.Name.length - 1);
                }
                fileBrowserEntity.LastModified = fileArray[i].getElementsByClassName('modified')[0].textContent;
                result.push(fileBrowserEntity);
            }
            return result;
        });
    };
    FileBrowserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FileBrowserService);
    return FileBrowserService;
}());
exports.FileBrowserService = FileBrowserService;


/***/ }),

/***/ "./src/app/Shared/file-browser/file/File.Entity.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IEntity_Entity_1 = __webpack_require__("./src/app/Module/IEntity.Entity.ts");
var FileEntity = /** @class */ (function (_super) {
    __extends(FileEntity, _super);
    function FileEntity() {
        var _this = _super.call(this) || this;
        _this.Path = null;
        _this.FileName = null;
        _this.Content = null;
        return _this;
    }
    return FileEntity;
}(IEntity_Entity_1.IEntity));
exports.FileEntity = FileEntity;


/***/ }),

/***/ "./src/app/Shared/file-browser/file/File.Service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var FileService = /** @class */ (function (_super) {
    __extends(FileService, _super);
    function FileService(Http) {
        var _this = _super.call(this, Http) || this;
        _this.url = '/api/Files';
        return _this;
    }
    FileService.prototype.UploadFile = function (body, IsShowLoading) {
        return _super.prototype.intercept.call(this, this.http.post(this.url + '/Upload', JSON.stringify(body), {
            observe: 'response',
            headers: _super.prototype.GetHeaders.call(this)
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    FileService.prototype.DeleteFile = function (body, IsShowLoading) {
        return _super.prototype.intercept.call(this, this.http.post(this.url + '/Delete', JSON.stringify(body), {
            observe: 'response',
            headers: _super.prototype.GetHeaders.call(this)
        }), IsShowLoading).map(function (r) { return r.body; });
    };
    FileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FileService);
    return FileService;
}(HttpService_1.HttpService));
exports.FileService = FileService;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<public-header *ngIf=\"EmployeeInfoService.EmployeeEntity != null\"></public-header>\r\n<public-body *ngIf=\"EmployeeInfoService.EmployeeEntity != null\"></public-body>\r\n<public-login *ngIf=\"EmployeeInfoService.EmployeeEntity == null\"></public-login>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var EmployeeInfo_Service_1 = __webpack_require__("./src/app/Shared/EmployeeInfo.Service.ts");
var paging_model_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.model.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(EmployeeInfoService) {
        this.EmployeeInfoService = EmployeeInfoService;
        this.title = 'app';
        this.EmployeeInfoService.GetCurrent();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [EmployeeInfo_Service_1.EmployeeInfoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var CommonComponent = /** @class */ (function () {
    function CommonComponent(HttpService, cd, toastr, vcr, isChild) {
        this.HttpService = HttpService;
        this.cd = cd;
        this.toastr = toastr;
        this.vcr = vcr;
        this.PagingModel = new paging_model_1.PagingModel(7, 10);
        if (isChild == true)
            return;
        this.toastr.setRootViewContainerRef(vcr);
    }
    CommonComponent.prototype.Search = function (SearchEntity, IsPaging) {
        var _this = this;
        SearchEntity.Skip = IsPaging ? this.PagingModel.Take * this.PagingModel.Active : 0;
        SearchEntity.Take = this.PagingModel.Take;
        this.HttpService.Gets(SearchEntity).subscribe(function (p) {
            _this.Entities = p;
            _this.toastr.ShowSuccess();
        }, function (e) {
            _this.toastr.ShowError(e);
        });
        this.Count(SearchEntity);
    };
    CommonComponent.prototype.GetId = function (Id) {
        var _this = this;
        this.HttpService.GetId(Id).subscribe(function (p) {
            _this.Entity = p;
        });
    };
    CommonComponent.prototype.Count = function (FilterEntity) {
        var _this = this;
        this.HttpService.Count(FilterEntity).subscribe(function (data) {
            _this.PagingModel.TotalPage = Math.ceil(data / _this.PagingModel.Take);
        });
    };
    CommonComponent.prototype.Edit = function (T) {
        this.temp = JSON.parse(JSON.stringify(T));
        T.IsEdit = true;
    };
    CommonComponent.prototype.Add = function (T) {
        this.Entities.unshift(T);
    };
    CommonComponent.prototype.Delete = function (T) {
        var _this = this;
        this.HttpService.Delete(T.Id).subscribe(function (p) {
            var indexOf = _this.Entities.indexOf(T);
            _this.Entities.splice(indexOf, 1);
            _this.toastr.ShowSuccess();
        }, function (e) {
            _this.toastr.ShowError(e);
        });
    };
    CommonComponent.prototype.Save = function (T) {
        var _this = this;
        if (T.Id === undefined || T.Id === null || T.Id == 0) {
            this.HttpService.Create(T).subscribe(function (p) {
                if (_this.Entities != null) {
                    _this.Entities[0] = p;
                    _this.Entities[0].IsEdit = false;
                }
                else {
                    T = p;
                }
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.ShowError(e);
            });
        }
        else {
            this.HttpService.Update(T).subscribe(function (p) {
                if (_this.Entities != null) {
                    for (var i = 0; i < _this.Entities.length; i++) {
                        if (_this.Entities[i].Id == p.Id) {
                            _this.Entities[i] = p;
                            _this.Entities[i].IsEdit = false;
                        }
                    }
                }
                else {
                    T = p;
                }
                _this.toastr.ShowSuccess();
            }, function (e) {
                _this.toastr.ShowError(e);
            });
        }
    };
    CommonComponent.prototype.Cancel = function (T) {
        if (T.Id === undefined || T.Id === null) {
            this.Entities.splice(0, 1);
        }
        else {
            for (var i = 0; i < this.Entities.length; i++) {
                if (this.Entities[i].Id == this.temp.Id) {
                    this.Entities[i] = this.temp;
                    this.Entities[i].IsEdit = false;
                }
            }
        }
    };
    return CommonComponent;
}());
exports.CommonComponent = CommonComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Module:
var Route_1 = __webpack_require__("./src/app/Route.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ng_select_1 = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var angular_confirmation_popover_1 = __webpack_require__("./node_modules/angular-confirmation-popover/esm5/angular-confirmation-popover.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var primeng_1 = __webpack_require__("./node_modules/primeng/primeng.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
//Import Library Component:
var Body_Component_1 = __webpack_require__("./src/app/Shared/Body/Body.Component.ts");
var Header_Component_1 = __webpack_require__("./src/app/Shared/Header/Header.Component.ts");
var dropdown_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/dropdown/dropdown.component.ts");
var Excel_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/Excel/Excel.component.ts");
var inputfile_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/inputfile/inputfile.component.ts");
var menupurchase_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/MenuPurchase/menupurchase.component.ts");
var modal_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/modal/modal.component.ts");
var paging_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/paging/paging.component.ts");
var Portlet_Component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/Portlet/Portlet.Component.ts");
var tagsinput_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/tagsinput/tagsinput.component.ts");
var Auth_Guard_Service_1 = __webpack_require__("./src/app/Auth.Guard.Service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_quill_editor_1 = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
//Import Module Component:
var Category_component_1 = __webpack_require__("./src/app/Component/Category/Category.component.ts");
var Coupon_component_1 = __webpack_require__("./src/app/Component/Coupon/Coupon.component.ts");
var Permission_component_1 = __webpack_require__("./src/app/Component/Permission/Permission.component.ts");
var Product_component_1 = __webpack_require__("./src/app/Component/Product/Product.component.ts");
var ProductAttribute_component_1 = __webpack_require__("./src/app/Component/ProductAttribute/ProductAttribute.component.ts");
var Role_component_1 = __webpack_require__("./src/app/Component/Role/Role.component.ts");
var Inventory_component_1 = __webpack_require__("./src/app/Component/Inventory/Inventory.component.ts");
var Introduction_component_1 = __webpack_require__("./src/app/Component/Introduction/Introduction.component.ts");
var Language_component_1 = __webpack_require__("./src/app/Component/Language/Language.component.ts");
var Operation_component_1 = __webpack_require__("./src/app/Component/Operation/Operation.component.ts");
var Supplier_component_1 = __webpack_require__("./src/app/Component/Supplier/Supplier.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var IssueNote_component_1 = __webpack_require__("./src/app/Component/IssueNote/IssueNote.component.ts");
var ReceiptNote_component_1 = __webpack_require__("./src/app/Component/ReceiptNote/ReceiptNote.component.ts");
var WareHouse_component_1 = __webpack_require__("./src/app/Component/Warehouse/WareHouse.component.ts");
var OpeningBalance_component_1 = __webpack_require__("./src/app/Component/OpeningBalance/OpeningBalance.component.ts");
var StockTransfer_component_1 = __webpack_require__("./src/app/Component/StockTransfer/StockTransfer.component.ts");
var IssueNoteDetail_component_1 = __webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteDetail.component.ts");
var IssueNoteLine_component_1 = __webpack_require__("./src/app/Component/IssueNote/Detail/IssueNoteLine.component.ts");
// Import Module Service:
var EmployeeCode_pipe_1 = __webpack_require__("./src/app/Shared/EmployeeCodePipe/EmployeeCode.pipe.ts");
var avatar_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/avatar/avatar.component.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
//Import Module Service:
var Category_Service_1 = __webpack_require__("./src/app/Module/MCategory/Category.Service.ts");
var Coupon_Service_1 = __webpack_require__("./src/app/Module/MCoupon/Coupon.Service.ts");
var Introduction_Service_1 = __webpack_require__("./src/app/Module/MIntroduction/Introduction.Service.ts");
var Inventory_Service_1 = __webpack_require__("./src/app/Module/MInventory/Inventory.Service.ts");
var Language_Service_1 = __webpack_require__("./src/app/Module/MLanguage/Language.Service.ts");
var Operation_Service_1 = __webpack_require__("./src/app/Module/MOperation/Operation.Service.ts");
var Permission_Service_1 = __webpack_require__("./src/app/Module/MPermission/Permission.Service.ts");
var Product_Service_1 = __webpack_require__("./src/app/Module/MProduct/Product.Service.ts");
var Role_Service_1 = __webpack_require__("./src/app/Module/MRole/Role.Service.ts");
var Supplier_Service_1 = __webpack_require__("./src/app/Module/MSupplier/Supplier.Service.ts");
var ProductAttribute_Service_1 = __webpack_require__("./src/app/Module/MProductAttribute/ProductAttribute.Service.ts");
var CustomToaster_1 = __webpack_require__("./src/app/Shared/CustomToaster.ts");
var EmployeeInfo_Service_1 = __webpack_require__("./src/app/Shared/EmployeeInfo.Service.ts");
var Login_Component_1 = __webpack_require__("./src/app/Shared/Login/Login.Component.ts");
var HttpService_1 = __webpack_require__("./src/app/Shared/HttpService.ts");
var IssueNote_Service_1 = __webpack_require__("./src/app/Module/MIssueNote/IssueNote.Service.ts");
var ReceiptNote_Service_1 = __webpack_require__("./src/app/Module/MReceiptNote/ReceiptNote.Service.ts");
var WareHouse_Service_1 = __webpack_require__("./src/app/Module/MWareHouse/WareHouse.Service.ts");
var ProductDetail_component_1 = __webpack_require__("./src/app/Component/Product/ProductDetail/ProductDetail.component.ts");
var ProductValue_Service_1 = __webpack_require__("./src/app/Module/MProductValue/ProductValue.Service.ts");
var Tax_Service_1 = __webpack_require__("./src/app/Module/MTax/Tax.Service.ts");
var Discount_Service_1 = __webpack_require__("./src/app/Module/MDiscount/Discount.Service.ts");
var Pack_Service_1 = __webpack_require__("./src/app/Module/MPack/Pack.Service.ts");
var Employee_Service_1 = __webpack_require__("./src/app/Module/MEmployee/Employee.Service.ts");
var ProductPicture_Service_1 = __webpack_require__("./src/app/Module/MProductPicture/ProductPicture.Service.ts");
var datetime_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/datetime/datetime.component.ts");
var Employee_component_1 = __webpack_require__("./src/app/Component/Employee/Employee.component.ts");
var Manufacturer_component_1 = __webpack_require__("./src/app/Component/Manufacturer/Manufacturer.component.ts");
var Manufacturer_Service_1 = __webpack_require__("./src/app/Module/MManufacturer/Manufacturer.Service.ts");
var ng_select_custom_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/ng-select-custom/ng-select-custom.component.ts");
var Customer_component_1 = __webpack_require__("./src/app/Component/Customer/Customer.component.ts");
var CustomerGroup_component_1 = __webpack_require__("./src/app/Component/CustomerGroup/CustomerGroup.component.ts");
var Customer_Service_1 = __webpack_require__("./src/app/Module/MCustomer/Customer.Service.ts");
var CustomerGroup_Service_1 = __webpack_require__("./src/app/Module/MCustomerGroup/CustomerGroup.Service.ts");
var ShipmentDetail_component_1 = __webpack_require__("./src/app/Component/ShipmentDetail/ShipmentDetail.component.ts");
var City_component_1 = __webpack_require__("./src/app/Component/City/City.component.ts");
var Country_component_1 = __webpack_require__("./src/app/Component/Country/Country.component.ts");
var City_Service_1 = __webpack_require__("./src/app/Module/MCity/City.Service.ts");
var Country_Service_1 = __webpack_require__("./src/app/Module/MCountry/Country.Service.ts");
var ShipmentDetail_Service_1 = __webpack_require__("./src/app/Module/MShipmentDetail/ShipmentDetail.Service.ts");
var OpeningBalance_Service_1 = __webpack_require__("./src/app/Module/MOpeningBalance/OpeningBalance.Service.ts");
var StockTransfer_Service_1 = __webpack_require__("./src/app/Module/MStockTransfer/StockTransfer.Service.ts");
var file_browser_directive_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.directive.ts");
var file_browser_component_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.component.ts");
var ReceiptNoteDetail_component_1 = __webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteDetail.component.ts");
var OrderLine_component_1 = __webpack_require__("./src/app/Component/Order/Detail/OrderLine.component.ts");
var OrderDetail_component_1 = __webpack_require__("./src/app/Component/Order/Detail/OrderDetail.component.ts");
var Order_component_1 = __webpack_require__("./src/app/Component/Order/Order.component.ts");
var File_Service_1 = __webpack_require__("./src/app/Shared/file-browser/file/File.Service.ts");
var OrderLine_Service_1 = __webpack_require__("./src/app/Module/MOrderLine/OrderLine.Service.ts");
var Order_Service_1 = __webpack_require__("./src/app/Module/MOrder/Order.Service.ts");
var ReceiptNoteLine_Service_1 = __webpack_require__("./src/app/Module/MReceiptNoteLine/ReceiptNoteLine.Service.ts");
var ReceiptNoteLine_component_1 = __webpack_require__("./src/app/Component/ReceiptNote/Detail/ReceiptNoteLine.component.ts");
var directory_service_1 = __webpack_require__("./src/app/Shared/file-browser/directory/directory.service.ts");
var file_browser_service_1 = __webpack_require__("./src/app/Shared/file-browser/file-browser.service.ts");
var ng_select_user_component_1 = __webpack_require__("./src/app/Shared/MaterialComponent/ng-select-user/ng-select-user.component.ts");
var IssueNoteLine_Service_1 = __webpack_require__("./src/app/Module/MIssueNoteLine/IssueNoteLine.Service.ts");
var StockTransferLine_Service_1 = __webpack_require__("./src/app/Module/MStockTransferLine/StockTransferLine.Service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, Body_Component_1.BodyComponent, Header_Component_1.HeaderComponent, dropdown_component_1.DropdownComponent, Excel_component_1.ExcelComponent, inputfile_component_1.InputfileComponent, menupurchase_component_1.MenuPurchaseComponent, modal_component_1.ModalComponent, EmployeeCode_pipe_1.EmployeeCodePipe,
                paging_component_1.PagingComponent, avatar_component_1.AvatarComponent, Portlet_Component_1.PortletComponent, tagsinput_component_1.TagsinputComponent, Login_Component_1.LoginComponent, file_browser_directive_1.FileBrowserDirective, datetime_component_1.DatetimeComponent, ng_select_custom_component_1.NgSelectCustomComponent, ng_select_user_component_1.NgSelectUserComponent,
                // Component Module;
                Category_component_1.CategoryComponent, Coupon_component_1.CouponComponent, Introduction_component_1.IntroductionComponent, Inventory_component_1.InventoryComponent, Language_component_1.LanguageComponent, Operation_component_1.OperationComponent,
                Permission_component_1.PermissionComponent, Product_component_1.ProductComponent, ProductAttribute_component_1.ProductAttributeComponent, Role_component_1.RoleComponent, Supplier_component_1.SupplierComponent, Employee_component_1.EmployeeComponent, paging_component_1.PagingComponent,
                IssueNote_component_1.IssueNoteComponent, ReceiptNote_component_1.ReceiptNoteComponent, WareHouse_component_1.WareHouseComponent, file_browser_component_1.FileBrowserComponent, ProductDetail_component_1.ProductDetailComponent, Manufacturer_component_1.ManufacturerComponent,
                Customer_component_1.CustomerComponent, CustomerGroup_component_1.CustomerGroupComponent, City_component_1.CityComponent, Country_component_1.CountryComponent, ShipmentDetail_component_1.ShipmentDetailComponent, OpeningBalance_component_1.OpeningBalanceComponent, StockTransfer_component_1.StockTransferComponent,
                ReceiptNoteDetail_component_1.ReceiptNoteDetailComponent, ReceiptNoteLine_component_1.ReceiptNoteLineComponent, Order_component_1.OrderComponent, OrderDetail_component_1.OrderDetailComponent, OrderLine_component_1.OrderLineComponent, IssueNoteDetail_component_1.IssueNoteDetailComponent, IssueNoteLine_component_1.IssueNoteLineComponent, IssueNote_component_1.IssueNoteComponent,
                StockTransfer_component_1.StockTransferComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, Route_1.Routing, ng_bootstrap_1.NgbModule.forRoot(), ng_select_1.NgSelectModule, forms_1.FormsModule, http_1.HttpClientModule, animations_1.BrowserAnimationsModule, ngx_quill_editor_1.QuillEditorModule, ng2_currency_mask_1.CurrencyMaskModule,
                // Toaster module:
                ng2_toastr_1.ToastModule.forRoot(),
                // Popover mopdule:
                angular_confirmation_popover_1.ConfirmationPopoverModule.forRoot({
                    confirmButtonType: 'danger' // set defaults here
                }),
                // Primeng module:
                primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.DataTableModule, primeng_1.DialogModule, primeng_1.TreeModule, primeng_1.AccordionModule, primeng_1.ContextMenuModule, primeng_1.CalendarModule
            ],
            providers: [
                Auth_Guard_Service_1.AuthGuard, CustomToaster_1.BottomToastsManager, EmployeeInfo_Service_1.EmployeeInfoService, HttpService_1.HttpService,
                // Service Module:
                Category_Service_1.CategoryService, Coupon_Service_1.CouponService, Introduction_Service_1.IntroductionService, Inventory_Service_1.InventoryService, Language_Service_1.LanguageService, Operation_Service_1.OperationService,
                Permission_Service_1.PermissionService, Product_Service_1.ProductService, Role_Service_1.RoleService, Supplier_Service_1.SupplierService, Employee_Service_1.EmployeeService, ProductAttribute_Service_1.ProductAttributeService,
                IssueNote_Service_1.IssueNoteService, ReceiptNote_Service_1.ReceiptNoteService, WareHouse_Service_1.WareHouseService, file_browser_service_1.FileBrowserService, ProductValue_Service_1.ProductValueService, Tax_Service_1.TaxService, Pack_Service_1.PackService, Discount_Service_1.DiscountService,
                Employee_Service_1.EmployeeService, ProductPicture_Service_1.ProductPictureService, directory_service_1.DirectoryService, Manufacturer_Service_1.ManufacturerService, Customer_Service_1.CustomerService, CustomerGroup_Service_1.CustomerGroupService, City_Service_1.CityService, Country_Service_1.CountryService, ShipmentDetail_Service_1.ShipmentDetailService,
                OpeningBalance_Service_1.OpeningBalanceService, StockTransfer_Service_1.StockTransferService, ReceiptNoteLine_Service_1.ReceiptNoteLineService, Order_Service_1.OrderService, OrderLine_Service_1.OrderLineService, File_Service_1.FileService, IssueNote_Service_1.IssueNoteService, IssueNoteLine_Service_1.IssueNoteLineService, StockTransfer_Service_1.StockTransferService,
                StockTransferLine_Service_1.StockTransferLineService
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/menu-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("./node_modules/util/util.js");
var MenuModel = /** @class */ (function () {
    function MenuModel(Name, Link, Sub) {
        this.Name = Name;
        if (!util_1.isNullOrUndefined(Link)) {
            this.Link = Link;
        }
        else {
            this.Link = "";
        }
        if (!util_1.isNullOrUndefined(Sub)) {
            this.Sub = Sub;
        }
        else {
            this.Sub = [];
        }
    }
    MenuModel.prototype.addSub = function (Sub) {
        this.Sub.push(Sub);
    };
    MenuModel.prototype.hasSub = function () {
        return (!(util_1.isNullOrUndefined(this.Sub) || this.Sub.length == 0));
    };
    return MenuModel;
}());
exports.MenuModel = MenuModel;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map