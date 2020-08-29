"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IndexComponent = void 0;
var core_1 = require("@angular/core");
var IndexComponent = /** @class */ (function () {
    function IndexComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loadAllMovie();
    };
    IndexComponent.prototype.loadAllMovie = function () {
        var _this = this;
        this.movieService.getAll().subscribe(function (data) {
            _this.movies = data.data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    IndexComponent.prototype.onDeleteMovie = function (id) {
        var _this = this;
        this.movieService["delete"](id).subscribe(function (data) {
            _this.DataAfterDelete(id);
            _this.loadAllMovie();
            //  console.log(data);
        });
    };
    IndexComponent.prototype.DataAfterDelete = function (id) {
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].id == id) {
                this.movies.splice(i, 1);
                break;
            }
        }
    };
    IndexComponent.prototype.onSearch = function (name) {
        var _this = this;
        this.movieService.findbyname(name).subscribe(function (data) {
            console.log(data);
            _this.movies = data.data;
        });
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        })
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
