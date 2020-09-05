//components

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import{AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//componets
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { AdminpowerComponent } from './adminpower/adminpower.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddyearComponent } from './addyear/addyear.component';


//services and config

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DepartmentService } from './department.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthService } from './admin-auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YearService } from './year.service';
import * as firebase from 'firebase';
import{PdfViewerModule} from 'ng2-pdf-viewer';
  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContributeComponent,
    LoginComponent,
    AdminComponent,
   
    AdminpowerComponent,
    AdddepartmentComponent,
    AddcourseComponent,
    AddyearComponent
  ],
  imports: [
BrowserModule,
HttpClientModule,
PdfViewerModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
   AngularFireStorageModule,
    
    FormsModule,
   
  
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'', 
      component:HomeComponent},
      
      {path:'contribute', 
      component:ContributeComponent},
      {path:'contribute', 
      component:ContributeComponent},
    
      {path:'Login', 
      component:LoginComponent},
     
     
   {
    path:'admin/power/:id',
    component:AdminpowerComponent,
    canActivate:[AuthGuardService,AdminAuthService]
  },
  {path:'admin', 
  component:AdminComponent,
canActivate:[AuthGuardService,AdminAuthService]},
 
{
 path:'admin/power',
 component:AdminpowerComponent,
 canActivate:[AuthGuardService,AdminAuthService]
},
{ path: '**', redirectTo: '' }
  
    ]),
    NgbModule
    
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    AdminAuthService,
    
    
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
