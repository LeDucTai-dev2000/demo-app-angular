"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(id, movieName, description, duration, nameAlias, status, thumbUrl) {
        if (status === void 0) { status = false; }
        this.status = true;
        this.id = id;
        this.movieName = movieName;
        this.description = description;
        this.duration = duration;
        this.nameAlias = nameAlias;
        this.status = status;
        this.thumbUrl = thumbUrl;
    }
    return Movie;
}());
exports.Movie = Movie;
