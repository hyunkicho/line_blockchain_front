<template>
<div>

  <div class="main-wrap">
    <header-nav/>

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


  <footer-nav/>
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

    }
  },
  methods: {
    plusRouter(){
       this.$router.push({path: '/search'})
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