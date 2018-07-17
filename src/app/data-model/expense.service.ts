import { Injectable } from '@angular/core';
import { Expenses } from './expenses';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ExpenseService {


    expenses: Expenses[] = []
    savedRecords= {}


    private ExpenseSource= new BehaviorSubject <Expenses> ({ id:  null,date: null,category: null,amount: null,detail: null })


    constructor() { }

    addExpense(expense) {
        console.log("+++", this.savedRecords)
        this.expenses.unshift(expense)
        localStorage.setItem('expenses', JSON.stringify(this.expenses) )
        console.log(this.expenses)
        
    }

    getExpense () : Observable<Expenses[]> {
        if(localStorage.getItem('expenses')=== null) {
            this.expenses=[]
        }
        else {
            this.expenses= JSON.parse(localStorage.getItem('expenses'))
        }
        return of(this.expenses)
    }

}
