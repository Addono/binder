import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../shared/database.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public matches: Array<Object> = [];
    public memes: Array<Object>;

    constructor(dbs: DatabaseService) {
      this.memes = dbs.db['memes'];

      const matchIds: Array<number> = dbs.db[localStorage.getItem('userId')]['matches'];
      this.matches = matchIds.map(id => {
        return dbs.db[id];
      });
    }

    ngOnInit() {}

    openInNewTab(url) {
      window.open(url, '_blank').focus();
    }

}
