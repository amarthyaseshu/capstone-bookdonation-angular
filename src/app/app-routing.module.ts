import { EditbookComponent } from './bookscrud/editbook/editbook.component';
import { ViewbookComponent } from './bookscrud/viewbook/viewbook.component';
import { AddbookComponent } from './bookscrud/addbook/addbook.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './ui/view/view.component';

const routes: Routes = [

  {path:'', component:ViewComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'viewbook',component:ViewbookComponent},
  {path:'viewbook/:id', component:ViewbookComponent},
  {path:'editbook',component:EditbookComponent},
  {path:'editbook/:id', component:EditbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
