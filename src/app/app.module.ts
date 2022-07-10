import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllWorkflowsComponent } from './all-workflows/all-workflows.component';
import { CreateEditWorkflowComponent } from './create-edit-workflow/create-edit-workflow.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllWorkflowsComponent,
    CreateEditWorkflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
