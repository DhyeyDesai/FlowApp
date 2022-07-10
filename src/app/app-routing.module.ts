import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {CreateEditWorkflowComponent} from "./create-edit-workflow/create-edit-workflow.component";
import {AllWorkflowsComponent} from "./all-workflows/all-workflows.component"
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'all-workflows', component: AllWorkflowsComponent },
  { path: 'edit-workflow/:id', component: CreateEditWorkflowComponent },
  { path: 'create-workflow', component: CreateEditWorkflowComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
