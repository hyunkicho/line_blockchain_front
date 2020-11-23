<template>
<div>

  <div class="main-wrap">
    <header-nav/>
    <div class="wrap-margin">
      <!-- <strong>1. Overflow로 구현</strong> -->
      <div class="wrap">

        <figure>
          <img src="https://placeimg.com/200/200/any?1">
          <figcaption>제품설명</figcaption>

        </figure>
        <figure>
          <img src="https://placeimg.com/200/200/any?2">
          <figcaption>제품설명2</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/200/200/any?3">
          <figcaption>제품설명3</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/200/200/any?4">
          <figcaption>제품설명4</figcaption>
        </figure>

      </div>


      
      <v-row :gutter="20" style="margin-top: 30px;">
      <!-- <b>2. Carousel 라이브러리로 구현</b> -->
        <v-col :span="24">
          <div class="grid-content">
            <carousel class="test" :items="2" :loop="true" :autoplay="true" :autoplayTimeout="3000" :nav="false">
                <div>
                  <img src="https://placeimg.com/200/200/any?1">
                  <p>캐러셀1</p>
                </div>
                <div>
                  <img src="https://placeimg.com/200/200/any?2">
                  <p>캐러셀2</p>
                </div>
                <div>
                  <img src="https://placeimg.com/200/200/any?3">
                  <p>캐러셀3</p>
                </div>
                <div>
                  <img src="https://placeimg.com/200/200/any?4">
                  <p>캐러셀4</p>
                </div>

            </carousel>
          </div>
        </v-col>
      </v-row>
    </div>

  <!--     <v-row :gutter="20">
        <v-col :span="24">
          <div class="grid-content">
            <carousel class="test" :items="1" :loop="true" :autoplay="true" :autoplayTimeout="3000" :nav="false">
                <img src="https://placeimg.com/200/200/any?1">
                <img src="https://placeimg.com/200/200/any?2">
                <img src="https://placeimg.com/200/200/any?3">
                <img src="https://placeimg.com/200/200/any?4">
            </carousel>
          </div>
        </v-col>
      </v-row>
      <v-row :gutter="20">
        <v-col :span="24">
          <div class="grid-content">
            <carousel class="test" :items="1" :loop="true" :autoplay="true" :autoplayTimeout="3000" :nav="false">
                <img src="https://placeimg.com/200/200/any?1">
                <img src="https://placeimg.com/200/200/any?2">
                <img src="https://placeimg.com/200/200/any?3">
                <img src="https://placeimg.com/200/200/any?4">
            </carousel>
          </div>
        </v-col>
      </v-row> -->
  </div>
  <footer-nav/>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel2'
import { Row, Col } from 'element-ui';

/* custom */
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    "v-row": Row,
    "v-col": Col,
    carousel,
    "header-nav" : header,
    "footer-nav" : footer
    // Login
  },
  data() {
    return {
      // loginBool: false
    }
  },
  methods: {
    
  },
  created() {
    // this.loginBool = true;
  },
}
</script>
<style>
.test img{width:300px; height:200px}

.wrap {display: flex; overflow:scroll; text-align:left;}
</style>