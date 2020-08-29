"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieUpdateComponent = void 0;
var movie_model_1 = require("./../../../models/movie.model");
var core_1 = require("@angular/core");
var MovieUpdateComponent = /** @class */ (function () {
    function MovieUpdateComponent(movieService, Routes, activateRouteService) {
        this.movieService = movieService;
        this.Routes = Routes;
        this.activateRouteService = activateRouteService;
        this.status = false;
    }
    MovieUpdateComponent.prototype.ngOnInit = function () { };
    MovieUpdateComponent.prototype.onUpdateMovie = function () {
        var _this = this;
        var movie = new movie_model_1.Movie(this.id, this.movieName, this.description, this.duration, this.nameAlias, this.status, this.thumbUrl);
        this.movieService.update(movie).subscribe(function (data) {
            _this.Routes.navigate(['index']);
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    MovieUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-update',
            templateUrl: './movie-update.component.html',
            styleUrls: ['./movie-update.component.css']
        })
    ], MovieUpdateComponent);
    return MovieUpdateComponent;
}());
exports.MovieUpdateComponent = MovieUpdateComponent;
