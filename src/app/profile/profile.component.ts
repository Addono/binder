import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../shared/database.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    private matches: Array<Object> = [];
    private memes: Array<Object>;

    constructor(dbs: DatabaseService) {
      this.memes = dbs.db['memes'];

      const matchIds: Array<number> = dbs.db[localStorage.getItem('userId')]['matches'];
      this.matches = matchIds.map(id => {
        return dbs.db[id];
      });
//         this.matches = dbs.db[localStorage.getItem('userId')]['matches'];
    }

    ngOnInit() {}

}
