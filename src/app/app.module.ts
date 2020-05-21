import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DramasComponent } from './dramas/dramas.component';
import { ForumComponent } from './forum/forum.component';
import { GenreComponent } from './genre/genre.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    HeaderComponent,
    DramasComponent,
    ForumComponent,
    GenreComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
