import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../data-model/expense.service';
@Component({
    selector: 'app-show-expense',
    templateUrl: './show-expense.component.html',
})
export class ShowExpenseComponent implements OnInit {

    expenseList=[]
    
    constructor(
        private expenseService: ExpenseService
    ) {
        this.expenseService.getExpense().subscribe(expenses=>{
            this.expenseList= expenses;
        });
    }

    ngOnInit() {
    }

}
