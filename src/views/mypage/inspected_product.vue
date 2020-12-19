<template>
<div class="ins_product">

  <header-nav :header="header"/>
  <div class="main-wrap">
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product1.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 19일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product2.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 15일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product3.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 13일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product4.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 12일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product5.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 12일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><img src="@/assets/resources/inspect_product6.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 11일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
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
import axios from "axios";

export default {
  name: 'Main',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
  },
  data() {
    return {
        alramAll: [],
        alramItem : [],

        header : {
            width : "100%%",
            left : {
                src : require("@/assets/resources/backspace.svg"),
                action : "index"
            },
            right : {
                src : require("@/assets/resources/header_alram.svg"),
                action : "close"
            },
        }

    }
  },
  created() {
    // this.init();
  },
  methods: {
    init(){

      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) != "loglevel:webpack-dev-server")
            this.alramItem.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }

     

      // if (localStorage.length > 0) {
      //   for (let i = 0; i < localStorage.length; i++) {
      //     if (localStorage.key(i) != "loglevel:webpack-dev-server")
      //       this.alramItem.push(localStorage.key(i));
      //       this.alramAll.push(localStorage)
      //   }
      // }
      // console.log(this.alramItem, 'tt->', this.alramAll)
    },

    alramClick(item){
      this.$router.replace({name: "productDetail_cert", params: {product: item} })
    },
  },

}
</script>
<style>
.ins_product .header li:nth-child(1) {
  margin-left:20px;
}

.ins_product .main-wrap div {
  background : #f9faff
}
.ins_product .main-wrap div ul{
  display: flex;
  align-items: center;
  padding: 25px 10px 25px 10px;
  background-color: white;
}
.ins_product .main-wrap div ul li:nth-child(1) img{
  width:73px;
}

.ins_product .main-wrap div ul li:nth-child(2){
  width:100%;
  text-align: left;
  line-height: 25px;
  color:#404750;
  font-weight: 600;
  font-size: 14px;
}
.ins_product .main-wrap div ul li:nth-child(2) span{
  color:#747f89;
  font-weight:400;
}

.ins_product .main-wrap div ul li:nth-child(3) img{
  width:45px;
}

.ins_product .main-wrap div ul dl{
  text-align: left;
  color:#404750
}
.ins_product .main-wrap div ul dt{
  font-size:14px;
  font-weight: 600;
  padding-bottom:8px;
}
.ins_product .main-wrap div ul dd{
  font-size:13px;
  list-style: 16px;
}


</style>