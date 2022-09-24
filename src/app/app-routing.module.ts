import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { AddInquiryComponent } from './Component/add-inquiry/add-inquiry.component';
import { DashboardGraphComponent } from './Component/dashboard-graph/dashboard-graph.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { InquiryComponent } from './Component/inquiry/inquiry.component';
import { MemberListComponent } from './Component/MemberList/member-list.component';
import { TrainersListComponent } from './Component/trainers-list/trainers-list.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},
  { path: 'graph', component: DashboardGraphComponent },
  {path:'Dashboard',component:DashboardComponent,

  children: [
    {path: '', component: DashboardGraphComponent },
    {path:'Member',component:MemberListComponent},
    { path: 'Trainers', component: TrainersListComponent },
    { path: 'Inquiry', component: InquiryComponent ,
    children:[
      { path: '', component: AddInquiryComponent },
    ]
    },
    // { path: 'AddInquiry', component: AddInquiryComponent },
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
