interface OrderItem
{
    quantity: number;
    price: Price;
    totalPrice?: Price;
}

interface Price
{
    withoutTaxes: number;
    withTaxes: number;
    taxAmount: number;
}

export default class OrderCalculator {
    calculateTotalPrice(items: OrderItem[]): Price
    {
        let withoutTaxes: number = 0;
        let withTaxes: number = 0;
        let taxAmount: number = 0;

        for (const item of items) {
            //TODO: move total price to a separate function
            item.totalPrice = {
                withoutTaxes: item.price.withoutTaxes * item.quantity,
                withTaxes: item.price.withTaxes * item.quantity,
                taxAmount: item.price.taxAmount * item.quantity,
            }

            withoutTaxes += item.totalPrice.withoutTaxes;
            withTaxes += item.totalPrice.withTaxes;
            taxAmount += item.totalPrice.taxAmount;
        }

        const price: Price = {
            withoutTaxes: withoutTaxes,
            withTaxes: withTaxes,
            taxAmount: taxAmount,
        }

        return price;
    }
}
