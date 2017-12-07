import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuBar } from './menubar.component';
import { Dashboard } from './dashboard.component';
import { Documents } from './document.component';
import { Reports } from './reports.component';
import { WorkFlows } from './workflows.component';
import { Make } from './make.component';
import { Spend } from './spend.component';
import { Bank } from './bank.component';
import {  MatSidenavModule, MatCheckboxModule, MatListModule, MatGridListModule,  MatExpansionModule, MatButtonModule } from '@angular/material';
import { MdCardModule } from '@angular2-material/card';
const appRoutes: Routes = [
	{ path: '', pathMatch:'full', redirectTo:'dashboard'},
	{ path: 'dashboard', component: Dashboard},
	{ path: 'reports', component: Reports},
	{ path: 'documents', component: Documents },
	{ path: 'work-flows', component: WorkFlows},
  { path: 'spend', component: Spend} ,
  { path: 'bank', component: Bank },
  { path: 'make', component: Make} 

]

@NgModule({
  exports: [ MatSidenavModule],
  declarations: [
    AppComponent, MenuBar, Dashboard, Documents, Reports, WorkFlows, Spend, Make, Bank
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MdCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuBar]
})
export class AppModule { }
