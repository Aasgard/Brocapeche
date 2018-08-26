import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { TranslateService } from '@ngx-translate/core';
import {Offer} from '../../datastore/models/offer';
import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    public frenchDepartments: Array<any> = [];
    public uneOffre: Offer = null;

    constructor(private translate: TranslateService, private afAuth: AngularFireAuth, private httpClient: HttpClient) {
        this.getDepartments();
        this.uneOffre = {
            description: 'zaeaeaez',
            price: 12.00,
            title: 'Coucou les amis'
        };
    }

    private getDepartments(): void {
        this.httpClient.get('assets/statics/french-departments.json').subscribe((result: any) => {
            this.frenchDepartments = result;
        });
    }

}
