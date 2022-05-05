import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HelperService } from './services/helper.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MainProjectsComponent } from './components/main-projects/main-projects.component';
import { WorkComponent } from './components/work/work.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MainProjectsComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    CommonModule

  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
