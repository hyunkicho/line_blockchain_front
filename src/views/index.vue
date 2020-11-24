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

      <div class="wrap-slide">
        <figure>
          <img src="../assets/resources/slide_product1.png">
          <figcaption>
            <dl>
              <dt>Jordan</dt>
              <dd>Air Jordan 1 Retro High OG Turbo Green</dd>
              <dd>410,000원</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/resources/slide_product2.png">
          <figcaption>
            <dl>
              <dt>Jacob Cohen</dt>
              <dd>Check pattern slim fit pants</dd>
              <dd>623,000원</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/resources/slide_product1.png">
          <figcaption>
            <dl>
              <dt>Jordan</dt>
              <dd>Air Jordan 1 Retro High OG Turbo Green</dd>
              <dd>410,000원</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/resources/slide_product2.png">
          <figcaption>
            <dl>
              <dt>Jacob Cohen</dt>
              <dd>Check pattern slim fit pants</dd>
              <dd>623,000원</dd>
            </dl>
          </figcaption>
        </figure>
      </div>
    </div>

    <carousel :per-page="1">
      <slide>
        <img src="../assets/resources/main3_slide.png">
      </slide>
    </carousel>

    <div class="wrap-margin">
      <h2>Most Popular</h2>
      <p>인기상품</p>

      <div class="wrap-slide">
        
      </div>

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
import axios from "axios";
import {Carousel, Slide} from 'vue-carousel';

export default {
  name: 'Main',
  components: {
    "v-row": Row,
    "v-col": Col,
    "header-nav" : header,
    "footer-nav" : footer,

    "carousel" : Carousel,
    "slide" : Slide,
  },
  data() {
    return {
        sampleData: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],

      // loginBool: false
    }
  },
  methods: {
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
.test img{width:300px; height:200px}
</style>