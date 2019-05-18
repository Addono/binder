import { Component, OnInit } from '@angular/core';

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
  max_swipes = 10;
  success_msg = 'You liked it!';
  danger_msg = 'You noped it!';

  usr_memes: any = [
    {
      url: 'assets/img/memes/meme1.jpg',
      title: 'Whadya think about my meme?',
      text: 'The user can chose this text, and yes I typed this randomly, cause I don\'t like lorem. IPSUM.',
    },
    {
      url: 'assets/img/memes/meme2.jpg',
      title: 'I like... Teletubbies... Hen.. HMMM?',
      text: 'The user can chose this text, and yes I typed this randomly, cause I don\'t like lorem. IPSUM.',
    },
    {
      url: 'https://www.memecreator.org/static/images/memes/3702262.jpg',
      title: 'I like... Teletubbies... Hen.. HMMM?',
      text: 'The user can chose this text, and yes I typed this randomly, cause I don\'t like lorem. IPSUM.',
    },
    {
      url: 'https://www.tampabay.com/storyimage/HI/20150107/ARTICLE/301079512/AR/0/AR-301079512.jpg&MaxW=1200&Q=66',
      title: 'I like... Teletubbies... Hen.. HMMM?',
      text: 'The user can chose this text, and yes I typed this randomly, cause I don\'t like lorem. IPSUM.',
    },
    {
      url: 'https://i.redd.it/fakhj7o7eaaz.jpg',
      title: 'I like... Teletubbies... Hen.. HMMM?',
      text: 'The user can chose this text, and yes I typed this randomly, cause I don\'t like lorem. IPSUM.',
    },
  ];  // Will be "retrieved from database"

  constructor() {
    // Retrieve from db for current user...
    // Initialize
    this.card_url = this.usr_memes[this.curr_meme_index].url;
    this.card_title = this.usr_memes[this.curr_meme_index].title;
    this.card_text = this.usr_memes[this.curr_meme_index].text;
  }

  ngOnInit() {

  }

  load_next() {
    this.curr_meme_index += 1;
    if (this.curr_meme_index >= this.usr_memes.length) {
      this.curr_meme_index = 0
    }
    this.card_url = this.usr_memes[this.curr_meme_index].url;
    this.card_title = this.usr_memes[this.curr_meme_index].title;
    this.card_text = this.usr_memes[this.curr_meme_index].text;
  }

  reply() {
    alert('OK. You liked this one; now reply with your own memeeeeee.');
  }

  clicked(what, to_switch) {
    this.total_swipes += 1;
    if (this.amount_of_consecutive_nope_given > 3) {
      alert('JUMALAUTA! MAN YOU MUST LIKE SOMEBODY\'S MEME AT A CERTAIN POINT!')
    }
    alert(what)
    if (to_switch) {
      this.amount_of_consecutive_nope_given += 1;
      this.load_next();
    }
    else {
      this.amount_of_consecutive_nope_given = 0;
      this.reply();
    }
  }

}
