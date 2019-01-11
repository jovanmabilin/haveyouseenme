import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDQt2SujQJSvD0wI0DUfMaEJnOHvBLLlBU",
    authDomain: "have-you-seen-me-aca1c.firebaseapp.com",
    databaseURL: "https://have-you-seen-me-aca1c.firebaseio.com",
    projectId: "have-you-seen-me-aca1c",
    storageBucket: "have-you-seen-me-aca1c.appspot.com",
    messagingSenderId: "777180232430"
  });

  export const db = app.database();