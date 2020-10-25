import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyABV4Urp6UGI3F-m9GCbx3z8tdEi2FNVoc",
  authDomain: "simple-vue-list.firebaseapp.com",
  databaseURL: "https://simple-vue-list.firebaseio.com",
  projectId: "simple-vue-list",
  storageBucket: "simple-vue-list.appspot.com",
  messagingSenderId: "211395104224",
  appId: "1:211395104224:web:d0d2ab015aafb5c273af85",
  measurementId: "G-EZV8E3RJWQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
