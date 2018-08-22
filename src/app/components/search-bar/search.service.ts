import { Injectable } from '@angular/core';
import { ExpenseService } from '../../data-model/expense.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    chiplistOptions = [];
    constructor(
        private expenseService: ExpenseService
    ) { }


    filteredChiplistOptions() {
        let allExpenses = this.expenseService.returnExpenseList();
        let filteredExpensesList = [];
        for (let expense of allExpenses) {
            for (let options of this.chiplistOptions) {
                if (options.category === expense.category) {
                    filteredExpensesList.push(expense);
                }
            }
        }
        console.log(filteredExpensesList);
        return filteredExpensesList
    }
}
