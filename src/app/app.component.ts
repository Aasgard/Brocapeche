import 'moment/locale/fr';
import * as moment from 'moment';
import { auth, User } from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import UserCredential = firebase.auth.UserCredential;
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public connectedUser: User;
    public frenchDepartments: Array<any> = [];

    constructor(private translate: TranslateService, private afAuth: AngularFireAuth, private httpClient: HttpClient) {
        this.initializeApplication();
        this.getDepartments();
    }

    public ngOnInit(): void {
        this.afAuth.authState.subscribe((user: User) => {
            this.connectedUser = user;
            console.log(this.connectedUser);
        });
    }

    private initializeApplication(): void {
        // Define translations on French element
        this.translate.use('fr');
        // Define locale for Datetime object to French
        moment().locale('fr');
    }

    public onSignInButtonClicked(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((data: UserCredential) => {
            this.connectedUser = data.user;
        }).catch(error => {
            alert(error);
        });
    }

    public onSignOutButtonClicked(): void {
        this.afAuth.auth.signOut().then(response => {
            this.connectedUser = null;
        });
    }

    public getConnectedUser(): void {
        console.log(this.connectedUser);
        // return this.connectedUser;
    }

    private getDepartments(): void {
        this.httpClient.get('assets/statics/french-departments.json').subscribe((result: any) => {
            this.frenchDepartments = result;
        });
    }
}
