"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderCalculator {
    //TODO: add taxes, delivery costs, discounts, ...
    calculateTotalPrice(items) {
        let withoutTaxes = 0;
        let withTaxes = 0;
        let taxAmount = 0;
        let currency = '';
        for (const item of items) {
            //TODO: move total price to a separate function?
            item.totalPrice = {
                withoutTaxes: item.price.withoutTaxes * item.quantity,
                withTaxes: item.price.withTaxes * item.quantity,
                taxAmount: item.price.taxAmount * item.quantity,
                currency: item.price.currency
            };
            withoutTaxes += item.totalPrice.withoutTaxes;
            withTaxes += item.totalPrice.withTaxes;
            taxAmount += item.totalPrice.taxAmount;
            currency = item.totalPrice.currency;
        }
        const price = {
            withoutTaxes: withoutTaxes,
            withTaxes: withTaxes,
            taxAmount: taxAmount,
            currency: currency
        };
        return price;
    }
}
exports.default = OrderCalculator;
