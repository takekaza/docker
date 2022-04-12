import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
// import "firebase/compat/firestore";
// import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: [],
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, address) {
      state.addresses.push(address);
    },
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    logout() {
      // const auth = getAuth();
      // auth.signOut();
      firebase.auth().signOut();
    },
    login() {
      // const provider = new GoogleAuthProvider();
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);

      // const auth = getAuth();
      // signInWithRedirect(auth, provider);
    },
    // 引数には自動的にcontextオブジェクトが来る
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addAddress({ getters, commit }, address) {
      // const db = getFirestore();
      if (getters.uid)
        // addDoc(collection(db, `users/${getters.uid}/addresses`).add(address));
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .add(address);
      commit("addAddress", address);
    },
  },
  modules: {},
});
