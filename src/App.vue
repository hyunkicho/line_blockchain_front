<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/main.css";
import "@/assets/css/elementui.css";
import "@/assets/css/product.css";
import "@/assets/css/product_account.css";
import 'element-ui/lib/theme-chalk/index.css';
// import apps from "@/assets/js/apps.js";
// import api from "@/assets/js/api.js";

export default {
  components: {

  },

  created() {
    if(sessionStorage.length==0){
      this.$router.replace(`/login`).catch(error => {
        if(error.name != "NavigationDuplicated" ){
          throw error;
        }
      });
    }
  },

  data() {
    return {

    };
  },

  methods: {
  }
};
</script>



<style>

</style>
