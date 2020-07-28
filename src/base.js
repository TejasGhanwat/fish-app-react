var Rebase = require("re-base");
var firebase = require("firebase/app");
var database = require("firebase/database");

var app = firebase.initializeApp({
  apiKey: "AIzaSyB-yTdfV4NRJ3Kxa14Z1bxDsGtnjbcAQbI",
  authDomain: "catch-of-the-day-tejas.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tejas.firebaseio.com",
  projectId: "catch-of-the-day-tejas",
  storageBucket: "catch-of-the-day-tejas.appspot.com",
  messagingSenderId: "656009020548",
  appId: "1:656009020548:web:54783ea761e7ad0dc1aed1",
  measurementId: "G-TVL5DJ68QV",
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
