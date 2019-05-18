import { Injectable } from '@angular/core';
import { rootDb } from '../../assets/db.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public db = rootDb;
}
