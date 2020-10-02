import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { ViewComponent } from './ui/view/view.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewallbooksComponent } from './bookscrud/viewallbooks/viewallbooks.component';
import { ViewbookComponent } from './bookscrud/viewbook/viewbook.component';
import { AddbookComponent } from './bookscrud/addbook/addbook.component';
import { EditbookComponent } from './bookscrud/editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ViewComponent,
    LoginComponent,
    RegistrationComponent,
    AboutusComponent,
    ContactusComponent,
    ViewallbooksComponent,
    ViewbookComponent,
    AddbookComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
