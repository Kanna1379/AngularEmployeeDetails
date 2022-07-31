import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


const route : Routes = [
  {path: '', component: WelcomeComponent},
  {path : 'employees', component: EmpListComponent},
  {path : 'departements', component: DeptListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

