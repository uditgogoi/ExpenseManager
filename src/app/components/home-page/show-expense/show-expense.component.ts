import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../data-model/expense.service';
import { SearchService } from '../../search-bar/search.service';

@Component({
    selector: 'app-show-expense',
    templateUrl: './show-expense.component.html',
})
export class ShowExpenseComponent implements OnInit {

    expenseList=[]
    
    constructor(
        private expenseService: ExpenseService,
        private searchService: SearchService
    ) {
       
    }

    


    ngOnInit() {
        this.expenseService.getExpense().subscribe(expenses=>{
            this.expenseList= expenses;
        });
        
    }

    onSelectedOption(e) {
        this.getFilteredExpenseList();
    }

    getFilteredExpenseList() {
        if(this.searchService.chiplistOptions.length>0)
            this.expenseList= this.searchService.filteredChiplistOptions();
        else {
            this.expenseList = this.expenseService.returnExpenseList();
        }
    }

    

}
