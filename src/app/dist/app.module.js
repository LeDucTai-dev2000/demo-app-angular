"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var movie_list_component_1 = require("./components/movie-list/movie-list.component");
var app__routing_module_1 = require("./app.-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var movie_add_component_1 = require("./components/movie-add/movie-add.component");
var movie_update_component_1 = require("./components/movie-update/movie-update.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
//Service
var movie_service_1 = require("./../service/movie.service");
var index_component_1 = require("./components/index/index.component");
var appRoutes = [
    {
        path: 'index',
        component: index_component_1.IndexComponent
    },
    {
        path: 'movie-list',
        component: movie_list_component_1.MovieListComponent
    },
    {
        path: 'movie-add',
        component: movie_add_component_1.MovieAddComponent
    },
    {
        path: 'movie-update',
        component: movie_update_component_1.MovieUpdateComponent
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                movie_list_component_1.MovieListComponent,
                movie_add_component_1.MovieAddComponent,
                movie_update_component_1.MovieUpdateComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                index_component_1.IndexComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                app__routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule
            ],
            providers: [movie_service_1.MovieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
