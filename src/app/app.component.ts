import 'moment/locale/fr';
import * as moment from 'moment';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.initializeApplication();
    }

    private initializeApplication(): void {
        // Define translations on French element
        this.translate.use('fr');
        // Define locale for Datetime object to French
        moment().locale('fr');
    }
}
