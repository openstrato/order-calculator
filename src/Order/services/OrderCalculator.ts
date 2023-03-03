//TODO: move interfaces to separate file
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
    currency: string;
}

export default class OrderCalculator
{
    //TODO: add taxes, delivery costs, discounts, ...
    calculateTotalPrice(items: OrderItem[]): Price
    {
        let withoutTaxes: number = 0;
        let withTaxes: number = 0;
        let taxAmount: number = 0;
        let currency: string = '';

        for (const item of items) {
            //TODO: move total price to a separate function?
            item.totalPrice = {
                withoutTaxes: item.price.withoutTaxes * item.quantity,
                withTaxes: item.price.withTaxes * item.quantity,
                taxAmount: item.price.taxAmount * item.quantity,
                currency: item.price.currency
            }

            withoutTaxes += item.totalPrice.withoutTaxes;
            withTaxes += item.totalPrice.withTaxes;
            taxAmount += item.totalPrice.taxAmount;
            currency = item.totalPrice.currency;
        }

        const price: Price = {
            withoutTaxes: withoutTaxes,
            withTaxes: withTaxes,
            taxAmount: taxAmount,
            currency: currency
        }

        return price;
    }
}
