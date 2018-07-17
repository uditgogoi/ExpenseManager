import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatTabsModule, MatButtonModule, MatCardModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatRadioModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule,
  MatGridListModule, MatCheckboxModule, MatChipsModule,
  MatSlideToggleModule, MatProgressBarModule, MatSelectModule,
  MatSnackBarModule, MatSortModule, MatDialogModule, MatProgressSpinnerModule,MatExpansionModule,MatFormFieldModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ShowExpenseComponent } from './components/show-expense/show-expense.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ExpenseService } from './data-model/expense.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddExpenseComponent,
    ShowExpenseComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule, 
    MatButtonModule,
    MatCardModule, 
    MatMenuModule,
    MatToolbarModule, 
    MatIconModule, 
    MatRadioModule, 
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatAutocompleteModule,
    MatGridListModule, 
    MatCheckboxModule, 
    MatChipsModule,
    MatSlideToggleModule, 
    MatProgressBarModule, 
    MatSelectModule,
    MatSnackBarModule, 
    MatSortModule, 
    MatDialogModule, 
    MatProgressSpinnerModule,
    MatExpansionModule,MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ExpenseService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
