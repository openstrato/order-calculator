"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderCalculator {
    calculateTotalPrice(items) {
        let withoutTaxes = 0;
        let withTaxes = 0;
        let taxAmount = 0;
        for (const item of items) {
            //TODO: move total price to a separate function
            item.totalPrice = {
                withoutTaxes: item.price.withoutTaxes * item.quantity,
                withTaxes: item.price.withTaxes * item.quantity,
                taxAmount: item.price.taxAmount * item.quantity,
            };
            withoutTaxes += item.totalPrice.withoutTaxes;
            withTaxes += item.totalPrice.withTaxes;
            taxAmount += item.totalPrice.taxAmount;
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
