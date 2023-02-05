interface OrderItem {
    quantity: number;
    price: Price;
    totalPrice?: Price;
}
interface Price {
    withoutTaxes: number;
    withTaxes: number;
    taxAmount: number;
}
export default class OrderCalculator {
    calculateTotalPrice(items: OrderItem[]): Price;
}
export {};
