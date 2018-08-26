import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AdvicesComponent } from './pages/advices/advices.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        HomepageComponent,
        PhotosComponent,
        AdvicesComponent,
        OffersComponent,
        SigninComponent
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: translateFactory,
                    deps: [HttpClient]
                }
            }
        ),
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

export function translateFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
