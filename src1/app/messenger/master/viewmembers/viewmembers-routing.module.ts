import { NgModule } from '@angular/core';
import { ViewmembersComponent } from './viewmembers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ViewmembersComponent }];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ViewmembersRoutingModule { }
