import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AdvicesComponent } from './pages/advices/advices.component';
import {OffersComponent} from './pages/offers/offers.component';
import {SigninComponent} from './pages/signin/signin.component';

const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'advices', component: AdvicesComponent},
    { path: 'signin', component: SigninComponent},
    { path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    },
    { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
