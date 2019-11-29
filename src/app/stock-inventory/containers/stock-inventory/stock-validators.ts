import { AbstractControl } from '@angular/forms';

export class StockValidators {
    static checkBranch(control: AbstractControl) {
        return /^[a-z]\d{3}$/i.test(control.value)
            ? null
            : { invalidBranch: true }
    }
}
