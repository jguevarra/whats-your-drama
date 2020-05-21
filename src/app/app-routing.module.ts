import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DramasComponent } from './dramas/dramas.component';
import { ForumComponent } from './forum/forum.component';
import { GenreComponent } from './genre/genre.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'dramalist', component: DramasComponent },
  { path: 'forums', component: ForumComponent },
  { path: 'genrelist', component: GenreComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
