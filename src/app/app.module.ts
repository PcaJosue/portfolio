import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HelperService } from './services/helper.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MainProjectsComponent } from './components/main-projects/main-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MainProjectsComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule

  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
