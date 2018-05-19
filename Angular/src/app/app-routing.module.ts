import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { ShowuserstoryComponent } from './userstories/showuserstory/showuserstory.component';
import { CreateuserstoryComponent } from './userstories/createuserstory/createuserstory.component';
import { EdituserstoryComponent } from './userstories/edituserstory/edituserstory.component';
import { DeleteuserstoryComponent } from './userstories/deleteuserstory/deleteuserstory.component';
import { ProjtaskComponent } from './projtask/projtask.component';
import { CreatetaskComponent } from './projtask/createtask/createtask.component';
import { EdittaskComponent } from './projtask/edittask/edittask.component';
import { DeletetaskComponent } from './projtask/deletetask/deletetask.component';
import { ShowtaskComponent } from './projtask/showtask/showtask.component';
import { ManagerComponent } from './manager/manager.component';
import { CreatemanagerComponent } from './manager/createmanager/createmanager.component';
import { EditmanagerComponent } from './manager/editmanager/editmanager.component';
import { DeletemanagerComponent } from './manager/deletemanager/deletemanager.component';
import { ShowmanagerComponent } from './manager/showmanager/showmanager.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
  {
    path:'employees',
    component:EmployeeComponent,
    children:[{
      path:'createemployees',
      component:CreateemployeeComponent,
      children:[]
    },
    {
      path:'editemployee/:id',
    component:EditemployeeComponent,
    children:[]
    },
    {
      path:'deleteemployee/:id',
      component:DeleteemployeeComponent,
      children:[]
    },
  {
    path:'showemployees',
      component:ShowemployeeComponent,
      children:[]
  }]
  },
  
  
{
  path:'project',
  component:ProjectComponent,
  children:[{
    path:'createproject',
    component:CreateprojectComponent,
    children:[]
    
  },
  {
    path:'editproject/:id',
    component:EditprojectComponent,
    children:[]
  },
  {
    path:'deleteproject/:id',
    component:DeleteprojectComponent,
    children:[]
  },
  
  {
    path:'showproject',
    component:ShowprojectComponent,
    children:[]
  }]
},
{
  path:'userstories',
  component:UserstoriesComponent,
  children:[{
    path:'showuserstory',
    component:ShowuserstoryComponent,
    children:[]
  },
{
  path:'createuserstory',
  component:CreateuserstoryComponent,
  children:[] 
},
{
  path:'edituserstory/:id',
  component:EdituserstoryComponent,
  children:[] 
},
{
  path:'deleteuserstory/:id',
  component:DeleteuserstoryComponent,
  children:[] 
}]
},
{
  path:'projtask',
  component:ProjtaskComponent,
  children:[{
    path:'showprojtask',
    component:ShowtaskComponent,
    children:[]
  },
  {
    path:'createprojtask',
    component:CreatetaskComponent,
    children:[]
  },
{
  path:'editprojtask/:id',
    component:EdittaskComponent,
    children:[]
},
{
  path:'deleteprojtask/:id',
  component:DeletetaskComponent,
  children:[]
}] 
},
{
  path:'manager',
  component:ManagerComponent,
  children:[{
    path:'showmanager',
  component:ShowmanagerComponent,
  children:[]

  },
  {
    path:'createmanager',
  component:CreatemanagerComponent,
  children:[]
  },
  {
    path:'editmanager/:id',
    component:EditmanagerComponent,
    children:[]
  },
  {
    path:'deletemanager/:id',
    component:DeletemanagerComponent,
    children:[]
  }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
