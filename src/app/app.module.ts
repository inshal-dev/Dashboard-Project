import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { DiseaseTypeComponent } from './disease-type/disease-type.component';
import {InfoComponent} from './Covid/info.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { EbolaDashComponent } from './ebola-dash/ebola-dash.component';
import { SpanishDashComponent } from './spanish-dash/spanish-dash.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './reviews/review/review.component';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from './services/api.service';
import { PlagueService } from './services/plague.service';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from "../environments/environment";

import { SignUpComponent } from './sign-up/sign-up.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PlagueComponent } from './plague/plague.component';
import { PlagueDashComponent } from './plague-dash/plague-dash.component';
import { EbolaComponent } from './ebola/ebola.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DiseaseTypeComponent,
    InfoComponent,
    TableComponent,
    EbolaDashComponent,
    SpanishDashComponent,
    ReviewComponent,
    AppDashboardComponent,
    FooterNavComponent,
    FormComponent,
    SignUpComponent,
    UserdetailComponent,
    PlagueComponent,
    PlagueDashComponent,
    EbolaComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatSortModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    LayoutModule,
    
  ],
  exports: [RouterModule],
  providers: [ApiService,
  PlagueService,
  {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
