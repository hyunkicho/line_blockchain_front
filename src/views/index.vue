<template>
<div class="index">

  <div class="main-wrap">
    <header-nav :header="header"/>

    <carousel :per-page="1">
      <slide>
        <img src="../assets/resources/main_slide1.jpg">
      </slide>
    </carousel>

    <div class="wrap-margin">
      <h2>Just Dropped</h2>
      <p>발매상품</p>
    </div>
    <productList products='newProduct'/>

    <carousel :per-page="1">
      <slide>
        <img src="../assets/resources/main_slide2.jpg">
      </slide>
    </carousel>

    <div class="wrap-margin">
      <h2>Most Popular</h2>
      <p>인기상품</p>
    </div>
    <productList products='popularProduct'/>

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
import {request} from "@/assets/js/apps.js";
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

   async corsRequest() {
    //  let mint_nft1 = await request.get("/api/mint_nft");
    //  let mint_nft2 = await request.get("/api/mint_nft2");

    //  console.log(mint_nft1,mint_nft2)

      // axios.get("/api/getList")
      // .then((res) => {
      //   // console.log('corsRequest res', res)
      // })
      // .catch((error) => {
      //   // console.log('corsRequest error', error)
      // })
    },
  },
  created() {
    this.corsRequest();
    
    // this.loginBool = true;
  },
}
</script>
<style>
.index .wrap-margin {
  margin-bottom:0px;
}
.index .wrap-slide {
  padding-left: 20px;
  padding-bottom: 40px;
}
</style>