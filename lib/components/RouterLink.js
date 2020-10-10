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
var RouterLink = /** @class */ (function (_super) {
    __extends(RouterLink, _super);
    function RouterLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childs = [];
        _this.route = '/';
        _this.stopRefresh = function (e) {
            e.preventDefault();
            window.history.pushState(null, '', _this.route);
            window.dispatchEvent(new Event('locationchange'));
        };
        return _this;
    }
    RouterLink.prototype.stylize = function () {
        return (ExF("style", null,
            "a ",
            {
                'text-decoration': 'none',
                'color': 'inherit'
            }));
    };
    RouterLink.prototype.render = function () {
        return (ExF("a", { href: this.route, onClick: this.stopRefresh }, this.childs));
    };
    __decorate([
        Prop('state'),
        __metadata("design:type", Array)
    ], RouterLink.prototype, "childs", void 0);
    __decorate([
        Prop('state'),
        __metadata("design:type", String)
    ], RouterLink.prototype, "route", void 0);
    RouterLink = __decorate([
        CustomElement({
            selector: 'exf-router-link'
        })
    ], RouterLink);
    return RouterLink;
}(Component));
export { RouterLink };
//# sourceMappingURL=RouterLink.js.map