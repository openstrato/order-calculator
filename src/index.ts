import OrderCalculator from './Order/services/OrderCalculator'

export function loadCalculator()
{
    const calculator = new OrderCalculator();
    return calculator;
}
