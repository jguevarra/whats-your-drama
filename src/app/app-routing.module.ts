import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

// Components
import { MainComponent } from './main/main.component';
import { DramalistComponent } from './dramalist/dramalist.component';
import { DramaDetailsComponent } from './drama-details/drama-details.component';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo('');

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dramalist', component: DramalistComponent },
  { path: 'drama/:id', component: DramaDetailsComponent }, // a way to dynamically pass an id value into the route. Then we can access this id to request the document from Firestore.
  { path: '**', redirectTo: '/'} // case if user tries to navigate to any other specific path, redirect to mainpage
  // { path: 'dramalist', component: DramalistComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
