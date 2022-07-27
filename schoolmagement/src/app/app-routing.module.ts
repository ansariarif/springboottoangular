import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AuthGuard } from './auth.guard';
import { AddfeeComponent } from './fee/addfee/addfee.component';
import { FeeComponent } from './fee/fee.component';
import { FeetostudentComponent } from './fee/feetostudent/feetostudent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddmsgtostudentComponent } from './msgtostudent/addmsgtostudent/addmsgtostudent.component';
import { MsgtostudentComponent } from './msgtostudent/msgtostudent.component';
import { AddqueryforstudentComponent } from './queryforstudent/addqueryforstudent/addqueryforstudent.component';
import { DisplayquerytostudentComponent } from './queryforstudent/displayquerytostudent/displayquerytostudent.component';
import { QueryforstudentComponent } from './queryforstudent/queryforstudent.component';
import { UpdatequerytostudentComponent } from './queryforstudent/updatequerytostudent/updatequerytostudent.component';
import { CustomerrupdateComponent } from './registerationss/customerrupdate/customerrupdate.component';
import { RegisterationssComponent } from './registerationss/registerationss.component';
import { ShowlogintocustomerComponent } from './registerationss/showlogintocustomer/showlogintocustomer.component';
import { ShowregisterationComponent } from './registerationss/showregisteration/showregisteration.component';


import { AddreportComponent } from './report/addreport/addreport.component';
import { ReportComponent } from './report/report.component';
import { ShowtostudentComponent } from './report/showtostudent/showtostudent.component';
import { AddstudformComponent } from './student/addstudform/addstudform.component';
import { StudentComponent } from './student/student.component';
import { StudformComponent } from './student/studform/studform.component';
import { AddsubformComponent } from './subject/addsubform/addsubform.component';
import { SubformComponent } from './subject/subform/subform.component';
import { SubjectComponent } from './subject/subject.component';
import { ActiveornotComponent } from './teacher/activeornot/activeornot.component';
import { AddformComponent } from './teacher/addform/addform.component';
import { FormComponent } from './teacher/form/form.component';
import { ShowstudentComponent } from './teacher/showstudent/showstudent.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
   
  
  {
    path:"login" , component:LoginComponent
  },
  {
    path:"teachers" , component:TeacherComponent ,canActivate:[AuthGuard]
  },
  {
    path:"teachers/edit/:id",component:FormComponent,canActivate:[AuthGuard]
  },
  {
    path:"teachers/addform",component:AddformComponent,canActivate:[AuthGuard]
  },
  {
    path:"subjects" , component:SubjectComponent,canActivate:[AuthGuard]
  },
  {
    path:"subjects/edit/:id",component:SubformComponent , canActivate:[AuthGuard]
  },
  {
    path:"subjects/addform",component:AddsubformComponent ,canActivate:[AuthGuard]
  },
  {
    path:"students",component:StudentComponent , canActivate:[AuthGuard]
  },
  {
    path:"students/edit/:id",component:StudformComponent
  },
  {
    path:"students/addstudform", component:AddstudformComponent
  },
  {
    path:"reports", component:ReportComponent ,canActivate:[AuthGuard]
  },
  {
    path:"reports/addform",component:AddreportComponent , canActivate:[AuthGuard]
  },
  {
    path:"fee",component:FeeComponent , canActivate:[AuthGuard]
  },
  {
    path:"fee/addfee",component:AddfeeComponent
  },
  {
    path:"showstudent",component:ShowstudentComponent
  },
  {
    path:"showtostudentreport",component:ShowtostudentComponent
  },
  {
    path:"feetostdents",component:FeetostudentComponent
  }
  ,
  {
    path:"admin",component:AdminsComponent , canActivate:[AuthGuard]
  }
  ,
  {
    path:"msg" , component:MsgtostudentComponent
  },
  {
    path:"add/msg",component:AddmsgtostudentComponent
  },
  {
    path:"query",component:QueryforstudentComponent
  },
  {
    path:"add/query",component:AddqueryforstudentComponent
  },
  {
    path:"student/query",component:DisplayquerytostudentComponent
  },
  {
    path:"query/edit/:id",component:UpdatequerytostudentComponent
  },
  {
    path:"register",component:RegisterationssComponent
  },
  {
    path:"customer",component:ShowregisterationComponent
  },
  {
    path:"customer/edit/:id",component:CustomerrupdateComponent
  },
  {
    path:"customer/home",component:ShowlogintocustomerComponent
  },
  {
    path:"active/path",component:ActiveornotComponent
  }

 
  

 // { path:"/",component:HomeComponent },
 // {path:"*", redirectTo:"/",pathMatch:"full"},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
