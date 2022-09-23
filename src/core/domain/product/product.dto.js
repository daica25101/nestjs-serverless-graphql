"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetProductResponseDTO = exports.PostProductRequestDTO = exports.GetProductRequestDTO = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var GetProductRequestDTO = /** @class */ (function () {
    function GetProductRequestDTO() {
    }
    GetProductRequestDTO = __decorate([
        (0, graphql_1.InputType)()
    ], GetProductRequestDTO);
    return GetProductRequestDTO;
}());
exports.GetProductRequestDTO = GetProductRequestDTO;
var PostProductRequestDTO = /** @class */ (function () {
    function PostProductRequestDTO() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, class_validator_1.MaxLength)(30)
    ], PostProductRequestDTO.prototype, "name");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Length)(30, 255)
    ], PostProductRequestDTO.prototype, "description");
    PostProductRequestDTO = __decorate([
        (0, graphql_1.InputType)()
    ], PostProductRequestDTO);
    return PostProductRequestDTO;
}());
exports.PostProductRequestDTO = PostProductRequestDTO;
var GetProductResponseDTO = /** @class */ (function () {
    function GetProductResponseDTO() {
    }
    return GetProductResponseDTO;
}());
exports.GetProductResponseDTO = GetProductResponseDTO;
