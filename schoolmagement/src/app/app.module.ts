import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { FormComponent } from './teacher/form/form.component';
import { AddformComponent } from './teacher/addform/addform.component';
import { SubjectComponent } from './subject/subject.component';
import { SubformComponent } from './subject/subform/subform.component';
import { AddsubformComponent } from './subject/addsubform/addsubform.component';
import { StudentComponent } from './student/student.component';
import { StudformComponent } from './student/studform/studform.component';
import { AddstudformComponent } from './student/addstudform/addstudform.component';
import { ReportComponent } from './report/report.component';
import { AddreportComponent } from './report/addreport/addreport.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FeeComponent } from './fee/fee.component';
import { AddfeeComponent } from './fee/addfee/addfee.component';
import { ShowstudentComponent } from './teacher/showstudent/showstudent.component';
import { ShowtostudentComponent } from './report/showtostudent/showtostudent.component';
import { FeetostudentComponent } from './fee/feetostudent/feetostudent.component';
import { AdminsComponent } from './admins/admins.component';
import { MsgtostudentComponent } from './msgtostudent/msgtostudent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AddmsgtostudentComponent } from './msgtostudent/addmsgtostudent/addmsgtostudent.component';
import { QueryforstudentComponent } from './queryforstudent/queryforstudent.component';
import { AddqueryforstudentComponent } from './queryforstudent/addqueryforstudent/addqueryforstudent.component';
import { DisplayquerytostudentComponent } from './queryforstudent/displayquerytostudent/displayquerytostudent.component';
import {MatIconModule} from '@angular/material/icon';
import { UpdatequerytostudentComponent } from './queryforstudent/updatequerytostudent/updatequerytostudent.component';
import { RegisterationssComponent } from './registerationss/registerationss.component';
import { ShowregisterationComponent } from './registerationss/showregisteration/showregisteration.component';
import { CustomerrupdateComponent } from './registerationss/customerrupdate/customerrupdate.component';
import { ShowlogintocustomerComponent } from './registerationss/showlogintocustomer/showlogintocustomer.component';
import { ActiveornotComponent } from './teacher/activeornot/activeornot.component';




@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    FormComponent,
    AddformComponent,
    SubjectComponent,
    SubformComponent,
    AddsubformComponent,
    StudentComponent,
    StudformComponent,
    AddstudformComponent,
    ReportComponent,
    AddreportComponent,
    HomeComponent,
    LoginComponent,
    FeeComponent,
    AddfeeComponent,
    ShowstudentComponent,
    ShowtostudentComponent,
    FeetostudentComponent,
    AdminsComponent,
    MsgtostudentComponent,
    AddmsgtostudentComponent,
    QueryforstudentComponent,
    AddqueryforstudentComponent,
    DisplayquerytostudentComponent,
    UpdatequerytostudentComponent,
    RegisterationssComponent,
    ShowregisterationComponent,
    CustomerrupdateComponent,
    ShowlogintocustomerComponent,
    ActiveornotComponent,
   
    
    
    
    

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule
   

   
  ],
 
  providers: [HttpClient],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
