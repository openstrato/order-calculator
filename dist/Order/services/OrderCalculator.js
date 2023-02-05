"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderCalculator {
    calculateTotalPrice(items) {
        let withoutTaxes = 0;
        let withTaxes = 0;
        let taxAmount = 0;
        for (const item of items) {
            withoutTaxes += item.price.withoutTaxes;
            withTaxes += item.price.withTaxes;
            taxAmount += item.price.taxAmount;
        }
        const price = {
            withoutTaxes: withoutTaxes,
            withTaxes: withTaxes,
            taxAmount: taxAmount,
        };
        return price;
    }
}
exports.default = OrderCalculator;
