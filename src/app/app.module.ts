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
import { SearchService } from './components/search-bar/search.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddExpenseComponent,
    ShowExpenseComponent,
    HomeViewComponent,
    SearchBarComponent,
    AnalyticsComponent,
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
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ExpenseService,
    SearchService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
