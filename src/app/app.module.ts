import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './token.interceptor';
import { AddRoleComponent } from './add-role/add-role.component';
import {DialogModule} from 'primeng/dialog';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { LogoutComponent } from './logout/logout.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { EditroleComponent } from './editrole/editrole.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { GenderPipe } from './pipe/gender.pipe';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AddRoleComponent,
    ViewroleComponent,
    LogoutComponent,
    UserlayoutComponent,
    EditroleComponent,
    AddUserComponent,
    MyHomeComponent,
    ListAccountComponent,
    AddAccountComponent,
    AddPaymentComponent,
    GenderPipe,
    AdminLayoutComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule 
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
