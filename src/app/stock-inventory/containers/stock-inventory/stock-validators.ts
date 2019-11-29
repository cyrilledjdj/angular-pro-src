import { AbstractControl } from '@angular/forms';

export class StockValidators {
    static checkBranch(control: AbstractControl) {
        return /^[a-z]\d{3}$/i.test(control.value)
            ? null
            : { invalidBranch: true }
    }
    static checkStockExists(control: AbstractControl) {
        const stockItem = control.get('stock')
        const selector = control.get('selector')

        if (stockItem && selector) {
            const exists = stockItem.value.some(stock => {
                return stock.product_id === parseInt(selector.value.product_id)
            })
            return exists ? { stockExists: true } : null;
        }
        return null;
    }
}
