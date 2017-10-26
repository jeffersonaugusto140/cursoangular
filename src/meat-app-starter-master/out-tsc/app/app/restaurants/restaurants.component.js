var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent() {
        this.restaurants = [
            {
                "id": "bread-bakery",
                "name": "Bread & Bakery",
                "category": "Bakery",
                "deliveryEstimate": "25m",
                "rating": 4.9,
                "imagePath": "assets/img/restaurants/breadbakery.png"
            },
            {
                "id": "burger-house",
                "name": "Burger House",
                "category": "Hamburgers",
                "deliveryEstimate": "100m",
                "rating": 3.5,
                "imagePath": "assets/img/restaurants/burgerhouse.png"
            },
            {
                "id": "coffee-corner",
                "name": "Coffee Corner",
                "category": "Coffee Shop",
                "deliveryEstimate": "30-40m",
                "rating": 4.8,
                "imagePath": "assets/img/restaurants/coffeecorner.png"
            },
            {
                "id": "green-food",
                "name": "Green Food",
                "category": "Saudável",
                "deliveryEstimate": "75m",
                "rating": 4.1,
                "imagePath": "assets/img/restaurants/greenfood.png"
            },
            {
                "id": "ice-cream",
                "name": "Ice Cream",
                "category": "Ice Creams",
                "deliveryEstimate": "40-65m",
                "rating": 4.5,
                "imagePath": "assets/img/restaurants/icy.png"
            },
            {
                "id": "tasty-treats",
                "name": "Tasty Treats",
                "category": "Doces",
                "deliveryEstimate": "20m",
                "rating": 4.4,
                "imagePath": "assets/img/restaurants/tasty.png"
            }
        ];
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map