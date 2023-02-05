"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCalculator = void 0;
const OrderCalculator_1 = require("./Order/services/OrderCalculator");
function loadCalculator() {
    const calculator = new OrderCalculator_1.default();
    return calculator;
}
exports.loadCalculator = loadCalculator;
