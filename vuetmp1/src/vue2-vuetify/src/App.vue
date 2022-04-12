<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          v-show="$store.state.login_user"
          @click="toggleSideMenu"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>マイアドレス帳</v-toolbar-title>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout"> ログアウト </v-btn>
      </v-toolbar-items>
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
      <SideNav />
    </v-main>
  </v-app>
</template>

<script>
import { firebase } from "firebase/app";
// import { firebase } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapActions } from "vuex";
import SideNav from "./components/SideNav.vue";
export default {
  name: "App",
  components: {
    SideNav,
  },
  created() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     // const uid = user.uid;
    //     this.setLoginUser(user);
    //     if (this.$router.currentRoute.name === "home")
    //       this.$router.push({ name: "addresses" });
    //   } else {
    //     // User is signed out
    //     // ...
    //     this.deleteLoginUser();
    //     this.$router.push({ name: "home" });
    //   }
    // });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
    ]),
  },
};
</script>
