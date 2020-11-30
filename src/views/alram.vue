<template>
<div class="alramList">

  <header-nav :header="header"/>
  <div class="main-wrap">
      <div>
        <ul style="background:#f9faff">
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="@/assets/resources/alram_left.svg" alt=""></li>
          <li>
            <dl>
              <dt>새로운 즉시 구매가</dt>
              <dd>Check Pattern slim fit pants 즉시 구매가를 확인하세요!</dd>
            </dl>
          </li>
          <li>
            <img src="@/assets/resources/slide_product1.png" alt="">
          </li>
        </ul>
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

export default {
  name: 'Main',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
    "productList" :productList,
  },
  data() {
    return {
        header : {
            width : "123%",
            left : {
                src : require("@/assets/resources/notice.svg"),
                action : "index"
            },
            right : {
                src : require("@/assets/resources/header_alram.svg"),
                action : "close"
            },
        }

    }
  },
  methods: {

  },

}
</script>
<style>
.alramList .header li:nth-child(1) {
  margin-left:20px;
}

.alramList .main-wrap div {
  background : #f9faff
}
.alramList .main-wrap div ul{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 25px 10px 25px 10px;
  background-color: white;
}

.alramList .main-wrap div ul li:nth-child(2){
  width:100%;
}
.alramList .main-wrap div ul dl{
  text-align: left;
  color:#404750
}
.alramList .main-wrap div ul dt{
  font-size:14px;
  font-weight: 600;
  padding-bottom:8px;
}
.alramList .main-wrap div ul dd{
  font-size:13px;
}
.alramList .main-wrap div ul li:nth-child(3) img{
  width:70px;
}

</style>