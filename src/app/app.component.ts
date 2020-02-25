import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "your API Firebase Key",
      authDomain: "ebookform-2cabc.firebaseapp.com",
      databaseURL: "https://ebookform-2cabc.firebaseio.com",
      projectId: "ebookform-2cabc",
      storageBucket: "ebookform-2cabc.appspot.com",
      messagingSenderId: "1055244044686",
      appId: "1:1055244044686:web:9e110ed6fa3953ddb4bcdf",
      measurementId: "G-D4LLQKXFT1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
