var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { match } from 'path-to-regexp';
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.routes = [];
        _this.handleChange = function () {
            _this.update();
        };
        return _this;
    }
    Router.prototype.onCreate = function () {
        window.addEventListener('popstate', this.handleChange);
        window.addEventListener('hashchange', this.handleChange);
        window.addEventListener('locationchange', this.handleChange);
    };
    Router.prototype.onDestroy = function () {
        window.removeEventListener('popstate', this.handleChange);
        window.removeEventListener('hashchange', this.handleChange);
        window.removeEventListener('locationchange', this.handleChange);
    };
    Router.prototype.render = function () {
        var pathname = window.location.pathname;
        for (var i = 0; i < this.routes.length; i++) {
            var currRoute = this.routes[i];
            var matchFn = match(currRoute.path, { decode: decodeURIComponent });
            var matched = matchFn(pathname);
            if (matched) {
                return { tag: currRoute.component, props: matched.params, children: [] };
            }
        }
        return ExF("div", null, "Route is not found");
    };
    __decorate([
        Prop('state'),
        __metadata("design:type", Array)
    ], Router.prototype, "routes", void 0);
    __decorate([
        Prop('state'),
        __metadata("design:type", Function)
    ], Router.prototype, "guard", void 0);
    Router = __decorate([
        CustomElement({
            selector: 'exf-router'
        })
    ], Router);
    return Router;
}(Component));
export { Router };
//# sourceMappingURL=Router.js.map