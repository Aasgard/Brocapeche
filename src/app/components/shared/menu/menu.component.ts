import {Component, OnInit} from '@angular/core';
import {auth, User} from 'firebase';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import {TranslateService} from '@ngx-translate/core';
import UserCredential = firebase.auth.UserCredential;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public connectedUser: User;

    constructor(private translate: TranslateService, private afAuth: AngularFireAuth) {
    }

    public ngOnInit(): void {
        this.afAuth.authState.subscribe((user: User) => {
            this.connectedUser = user;
            console.log(this.connectedUser);
        });
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

}
