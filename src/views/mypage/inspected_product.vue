<template>
<div class="ins_product">

  <header-nav :header="header"/>
  <div class="main-wrap">
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/74D44EA7BD967A9A55996A8C34B96F8859920F094449CE71E7F352C17C7703E7')">
          <li><img src="@/assets/resources/inspect_product1.png" alt=""></li>
          <li>검증내용제목<br><span>2020년 12월 19일</span></li>
          <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>       
      </ul>
    </div>
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/DC4A7EBA6C15F4D67CEF7429A3E776B7A8604D09220AF964E2CDBAC64190769B')">
        <li><img src="@/assets/resources/inspect_product2.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 15일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/267CB77FC95C86DC6BB9C635CD088D7307A557CA3BE7770FF0B753DC3928A6C6')">
        <li><img src="@/assets/resources/inspect_product3.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 13일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/F00E768C8E6C90B9432FDC49E3891DC8DFD3E6FC754AD5EBA782FE48B8791B4E')">
        <li><img src="@/assets/resources/inspect_product4.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 12일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/1E2AA225DA6C230416F2571E67D215978BC51B3A1E602AF2413DEE0C99A571A7')">
        <li><img src="@/assets/resources/inspect_product5.png" alt=""></li>
        <li>검증내용제목<br><span>2020년 12월 12일</span></li>
        <li><img src="@/assets/resources/inspect_product_ico.svg" alt=""></li>
      </ul>
    </div>
    <div>
      <ul @click="routerClick('https://explorer.blockchain.line.me/cashew/transaction/095C461B36112AA362882BC253FF5559894147B7C22FED2FFB7F47C9A8C121F6')">
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
import {request} from "@/assets/js/apps.js";

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
    this.init();
  },
  methods: {
    routerClick(path){
      location.href=path;
    },

    async init(){

      let get_transfer = await request.get("/validator_nft/get_transfer");
      console.log(get_transfer,'etete')

      // if (localStorage.length > 0) {
      //   for (let i = 0; i < localStorage.length; i++) {
      //     if (localStorage.key(i) != "loglevel:webpack-dev-server")
      //       this.alramItem.push(localStorage.key(i));
      //       this.alramAll.push(localStorage)
      //   }
      // }
      // console.log(this.alramItem, 'tt->', this.alramAll)
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