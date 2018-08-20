import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedfeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyADo9DiZLqEnD4ztxOyhEa0OSXK3gbCc7Q",
      authDomain: "recipe-book-15f18.firebaseapp.com"
    });
  }

}
