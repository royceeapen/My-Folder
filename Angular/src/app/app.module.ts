import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule }from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreateuserstoryComponent } from './userstories/createuserstory/createuserstory.component';
import { ShowuserstoryComponent } from './userstories/showuserstory/showuserstory.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
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
import { ServicesComponent } from './services/services.component';
import{EmployeeService} from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    UserstoriesComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    AboutComponent,
    CreateemployeeComponent,
    ShowemployeeComponent,
    ShowprojectComponent,
    CreateprojectComponent,
    CreateuserstoryComponent,
    ShowuserstoryComponent,
    EditemployeeComponent,
    DeleteemployeeComponent,
    EditprojectComponent,
    DeleteprojectComponent,
    EdituserstoryComponent,
    DeleteuserstoryComponent,
    ProjtaskComponent,
    CreatetaskComponent,
    EdittaskComponent,
    DeletetaskComponent,
    ShowtaskComponent,
    ManagerComponent,
    CreatemanagerComponent,
    EditmanagerComponent,
    DeletemanagerComponent,
    ShowmanagerComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
