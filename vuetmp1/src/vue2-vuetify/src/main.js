import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need
// import { firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWiNkf24VorCWP8SrdiGBbyRJhrjjuRTQ",
  authDomain: "vue-myaddress-b2784.firebaseapp.com",
  projectId: "vue-myaddress-b2784",
  storageBucket: "vue-myaddress-b2784.appspot.com",
  messagingSenderId: "854046165010",
  appId: "1:854046165010:web:d4ffae2877929ce650b0cb",
};

// Initialize Firebase
// firebase(firebaseConfig);
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
