interface OrderItem {
    quantity: number;
    price: Price;
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
