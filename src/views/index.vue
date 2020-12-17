<template>
<div>

  <div class="main-wrap">
    <header-nav :header="header"/>

    <carousel :per-page="1">
      <slide>
        <img src="../assets/resources/main1_slide.jpg">
      </slide>
    </carousel>

    <div class="wrap-margin">
      <h2>Just Dropped</h2>
      <p>발매상품</p>
      <productList products='newProduct'/>
    </div>

    <carousel :per-page="1">
      <slide>
        <img src="../assets/resources/main3_slide.png">
      </slide>
    </carousel>

    <div class="wrap-margin">
      <h2>Most Popular</h2>
      <p>인기상품</p>
      <productList products='popularProduct'/>
    </div>

    <div class="plusBtnWrap" @click="plusRouter()">
      <img src="../assets/resources/plus.svg" alt="">
    </div>

  </div>


  <footer-nav :footer="footer"/>
</div>
</template>

<script>
import { Row, Col } from 'element-ui';

/* custom */
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import axios from "axios";
import {Carousel, Slide} from 'vue-carousel';
// import {apps} from "@/assets/js/apps.js";

export default {
  name: 'Main',
  components: {
    "v-row": Row,
    "v-col": Col,
    "header-nav" : header,
    "footer-nav" : footer,
    "productList" :productList,

    "carousel" : Carousel,
    "slide" : Slide,
  },
  data() {
    return {
        header : {
            width:"80%",
            left : {
                src : require("@/assets/resources/blimit.svg"),
                action : "index"
            },
            right : {
                src : require("@/assets/resources/header_alram.svg"),
                action : "alram"
            },
        },
        footer : [
          { 
              name : '',
              src : require("@/assets/resources/footer_home_active.svg")
          },  
          { 
              name : 'list',
              src : require("@/assets/resources/footer_list.svg")
          },  
          { 
              name : 'search',
              src : require("@/assets/resources/footer_search.svg")
          },  
          { 
              name : 'mypage',
              src : require("@/assets/resources/footer_profile.svg")
          },  
        ],

    }
  },
  methods: {
    plusRouter(){
       this.$router.push({path: '/search'}).catch(error => {
          if(error.name != "NavigationDuplicated" ){
            throw error;
          }
        });
    },

    corsRequest() {
      axios.get("/api/getList")
      .then((res) => {
        console.log('corsRequest res', res)
      })
      .catch((error) => {
        console.log('corsRequest error', error)
      })
    },
  },
  created() {
    this.corsRequest();
    
    // this.loginBool = true;
  },
}
</script>
<style>
</style>