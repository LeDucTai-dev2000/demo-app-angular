"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieAddComponent = void 0;
var movie_model_1 = require("../../../models/movie.model");
var core_1 = require("@angular/core");
var MovieAddComponent = /** @class */ (function () {
    function MovieAddComponent(movieService, Routes) {
        this.movieService = movieService;
        this.Routes = Routes;
        this.movies = [];
        this.status = false;
    }
    MovieAddComponent.prototype.ngOnInit = function () {
    };
    MovieAddComponent.prototype.onAddMovie = function () {
        var _this = this;
        console.log(this.movieName + "-" + this.description + "-" + this.duration + "-" + this.nameAlias + "--" + this.status + "-" + this.thumbUrl);
        var movie = new movie_model_1.Movie(this.id, this.movieName, this.description, this.duration, this.nameAlias, this.status, this.thumbUrl);
        this.movieService.add(movie).subscribe(function (data) {
            _this.Routes.navigate(['index']);
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    MovieAddComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-add',
            templateUrl: './movie-add.component.html',
            styleUrls: ['./movie-add.component.css']
        })
    ], MovieAddComponent);
    return MovieAddComponent;
}());
exports.MovieAddComponent = MovieAddComponent;
