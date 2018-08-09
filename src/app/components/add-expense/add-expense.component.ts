import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Expenses } from '../../data-model/expenses';
import { ExpenseService } from '../../data-model/expense.service';
@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
})
export class AddExpenseComponent implements OnInit {

    emailFormControl = new FormControl
    expenses: Expenses[];
    category: string;
    detail: string;
    amount : number;
    date: any= new Date;
    
    
    
    
    constructor(
        private expenseService: ExpenseService
    ) { }

    ngOnInit() {
    }
    onSubmit() {
        var formatedDate= this.formatDate(this.date)
        console.log(formatedDate)
        if(this.formatDate!= null && this.amount!= null && this.category != '') {
            var newExpense = {
                id:  this.generateId(),
                date: formatedDate,
                category: this.category,
                amount: this.amount,
                detail: this.detail
            }
            console.log("newExpense",newExpense)
            this.expenseService.addExpense(newExpense)
            this.stateClear()

        }
        
    }

    stateClear() {
        this.category ='';
        this.amount=null;
        this.detail='';

    }

    generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
          
          
    }
    formatDate(date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
        
    }

}
