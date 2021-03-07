import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {DashComponent} from './dash/dash.component';
import {DiseaseTypeComponent} from './disease-type/disease-type.component';
import{InfoComponent} from './info/info.component';
import {TableComponent} from './table/table.component';
import {SpanishDashComponent} from './spanish-dash/spanish-dash.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { ReviewComponent } from './reviews/review/review.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

import { FormComponent } from './form/form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireAuthGuard,  redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { EbolaDashComponent } from './ebola-dash/ebola-dash.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['SignUp']);
const redirectLoggedInToReview = () => redirectLoggedInTo(['Form']);
const routes: Routes = [
  { path: '', component: DashComponent },
  {path:'info-component', component:InfoComponent},
  {path:'bar-chart-component', component: BarChartComponent},
  {path:'disease-component', component:DiseaseTypeComponent},
  {path:'review-component', component:ReviewComponent},
  {path:'spanish-component',component:SpanishDashComponent},
  {path:'dashboard', component:AppDashboardComponent },
  {path:'ebolaComponent', component:EbolaDashComponent},
  {path:'SignUp', component:SignUpComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToReview } },
  {path:'Form', component:FormComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:'detail-component', component:UserdetailComponent},  
  {path:'tableComponent', component: TableComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
