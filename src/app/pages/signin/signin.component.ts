import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import UserCredential = firebase.auth.UserCredential;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    constructor(private afAuth: AngularFireAuth) {

    }

    public ngOnInit(): void {

    }

    public onSignInButtonClicked(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((data: UserCredential) => {

        }).catch(error => {
            alert(error);
        });
    }

}
