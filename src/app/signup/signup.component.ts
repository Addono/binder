import { Component, OnInit } from '@angular/core';
import { db } from '../../assets/db.js';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor() {
        // console.log(db);
    }

    ngOnInit() {}

    route(userId) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("userId", userId);
            window.location.href = '/landing';
        } else {
            alert('Storage not supported in this browser.');
        }
    }
}
