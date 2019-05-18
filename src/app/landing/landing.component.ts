import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../shared/database.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  card_title: String = '';
  card_text: String = '';
  card_url: String = '';
  curr_meme_index: any = 0;
  amount_of_consecutive_nope_given: any = 0;
  total_swipes = 0;
  max_swipes = 5;
  success_msg = 'You liked it!';
  danger_msg = 'You noped it!';

  current_user = {};
  memes = [];
  memes_to_show = [];

  constructor(dbs: DatabaseService) {
    // Retrieve from db for current user...
    // Initialize
    this.memes = dbs.db['memes'];
    let randomSelected;
    for (let i = 0; i <= this.max_swipes; i += 1) {
      randomSelected = Math.floor(Math.random() * this.memes.length);
      this.memes_to_show[i] = this.memes[randomSelected];
      this.memes = this.memes.filter((value, index, arr) => {
        return index !== randomSelected;
      });
    }
    console.log(this.memes_to_show);
    this.card_url = this.memes_to_show[this.curr_meme_index].url;
    this.card_title = this.memes_to_show[this.curr_meme_index].title;
    this.card_text = this.memes_to_show[this.curr_meme_index].text;
    this.current_user = dbs.db[localStorage.getItem('userId')];
  }

  ngOnInit() {

  }

  load_next() {
    this.curr_meme_index += 1;
    if (this.curr_meme_index >= this.memes_to_show.length) {
      this.curr_meme_index = 0
    }
    this.card_url = this.memes_to_show[this.curr_meme_index].url;
    this.card_title = this.memes_to_show[this.curr_meme_index].title;
    this.card_text = this.memes_to_show[this.curr_meme_index].text;
  }

  reply() {
    alert('OK. You liked this one; now reply with your own memeeeeee.');
  }

  clicked(what, to_switch) {
    if (this.total_swipes === this.max_swipes) {
      alert('HEY! CALM DOWN. TIGER. You used all your swipes for today, come back tomorrow. Or another day. Whatever.');
      this.total_swipes = 0;
    }
    this.total_swipes += 1;
    if (this.amount_of_consecutive_nope_given > 3) {
      alert('JUMALAUTA! MAN YOU MUST LIKE SOMEBODY\'S MEME AT A CERTAIN POINT!')
      this.amount_of_consecutive_nope_given = 0;
    }
    alert(what)
    if (to_switch) {
      this.amount_of_consecutive_nope_given += 1;
      this.load_next();
    } else {
      this.amount_of_consecutive_nope_given = 0;
      this.reply();
    }
  }

}
