import { Component, OnInit,ElementRef, ViewChild,Output,EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExpenseService } from '../../data-model/expense.service';
import { Expenses } from '../../data-model/expenses';
import { SearchService } from './search.service';
@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


    searchBarCtrl = new FormControl();
    filteredOptions: Observable<string[]>;
    allExpenses: any;
    filteredOptionsArray:any[];
    autoCompleteList:any[]=[]; 

    @ViewChild('autocompleteInput') autocompleteInput: ElementRef;

    @Output() onSelectedOption = new EventEmitter();




    constructor(
        private expenseService: ExpenseService,
        private searchService: SearchService
    ) { }

    ngOnInit() {
        this.allExpenses = this.expenseService.expenses;

        this.searchBarCtrl.valueChanges.subscribe(userInput =>{
            this.autoCompleteExpenseList(userInput);
        })
    }

    private autoCompleteExpenseList(input){
        let categoryList= this.filterCategoryList(input)
        this.autoCompleteList= categoryList;
    }

    displayFn(expense: Expenses) {
        let k = expense ? expense.category : expense;
        return k;
    }

    filterCategoryList(val) {
        var categoryList=[]
        if (typeof val != "string") {
            return [];
        }
        return val ? this.allExpenses.filter(s => s.category.toLowerCase().indexOf(val.toLowerCase()) != -1)
            : this.allExpenses;
    }

    filterExpenseList(event) {
        var expense= event.source.value;
        if(!expense) {
            this.searchService.chiplistOptions=[]
        }
        else {
            this.searchService.chiplistOptions.push(expense);
            this.onSelectedOption.emit(this.searchService.chiplistOptions)
        }
        this.focusOnPlaceInput();
    }

    removeOption(option) {
        
        let index = this.searchService.chiplistOptions.indexOf(option);
        if (index >= 0)
            this.searchService.chiplistOptions.splice(index, 1);
            this.focusOnPlaceInput();

            this.onSelectedOption.emit(this.searchService.chiplistOptions)

        

    }
    
    focusOnPlaceInput() {
        this.autocompleteInput.nativeElement.focus();
        this.autocompleteInput.nativeElement.value = '';
    }

    filterList() {
        // need to changes this strategy
       
    }



}
