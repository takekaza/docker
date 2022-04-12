<template>
  <div class="home">
    <Addresses></Addresses>
  </div>
</template>

<script>
// @ is an alias to /src
import Addresses from "@/components/Addresses.vue";

export default {
  name: "HomeView",
  components: {
    Addresses,
  },
};
</script>
