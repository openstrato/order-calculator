interface OrderItem
{
    quantity: number;
    price: Price;
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
            withoutTaxes += item.price.withoutTaxes;
            withTaxes += item.price.withTaxes;
            taxAmount += item.price.taxAmount;
        }

        const price: Price = {
            withoutTaxes: withoutTaxes,
            withTaxes: withTaxes,
            taxAmount: taxAmount,
        }

        return price;
    }
}
