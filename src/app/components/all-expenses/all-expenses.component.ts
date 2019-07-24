import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../data-model/expense.service';
import { Expenses } from '../../data-model/expenses';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent implements OnInit {

  allExpenses: Expenses[] = [];
  constructor(
    private expense: ExpenseService
  ) { }

  ngOnInit() {
    this.expense.getExpense().subscribe(expense => this.allExpenses  = expense);
  }

}
