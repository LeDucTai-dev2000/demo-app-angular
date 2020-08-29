"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieService = void 0;
// import { Movie } from '../models/movie.model';
var environment_prod_1 = require("../environments/environment.prod");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiUrl = environment_prod_1.environment.apiUrl;
    }
    MovieService.prototype.getAll = function () {
        var endPoint = this.apiUrl + "/getall";
        return this.http.get(endPoint);
    };
    MovieService.prototype.add = function (movie) {
        var add = this.apiUrl + "/add";
        return this.http.post(add, movie);
    };
    MovieService.prototype.update = function (movie) {
        var update = this.apiUrl + "/update";
        return this.http.post(update, movie);
    };
    MovieService.prototype["delete"] = function (id) {
        var remove = this.apiUrl + "/delete";
        return this.http.post(remove, id);
    };
    MovieService.prototype.findbyname = function (name) {
        var findname = this.apiUrl + "/findbyname/";
        var params1 = new http_1.HttpParams().set('name', name);
        return this.http.get(findname, { params: params1 });
    };
    MovieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
