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
import {  MatSidenavModule, MatCheckboxModule, MatListModule, MatGridListModule,  MatExpansionModule, MatButtonModule, MatFormFieldControl} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MdCardModule } from '@angular2-material/card';
import { ChartsModule } from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Login } from './login.component';
const appRoutes: Routes = [
	{ path: '', pathMatch:'full', redirectTo:'login'},
	{ path: 'dashboard', component: Dashboard},
	{ path: 'reports', component: Reports},
	{ path: 'documents', component: Documents },
	{ path: 'work-flows', component: WorkFlows},
  { path: 'spend', component: Spend} ,
  { path: 'bank', component: Bank },
  { path: 'make', component: Make} ,
  { path: 'login', component: Login}

]
@NgModule({
  exports: [ MatSidenavModule],
  declarations: [
    AppComponent, MenuBar, Dashboard, Documents, Reports, WorkFlows, Spend, Make, Bank,Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MdCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule,
    ChartsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuBar]
})
export class AppModule { }
