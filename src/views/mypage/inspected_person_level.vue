<template>
<div class="mypage_person_level">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="level_wrap">

            <div>
              <img src="@/assets/resources/medal_gold.svg" alt="">
            </div>
            <p>시즌 우수 검수자</p>            
            <p>이번 시즌 우수 검수자로 선정되었습니다. <br/>
              현재 검수자의 등급은 
              <span>Gold</span> 입니다.</p>            
            <button>내용확인</button>
          </section>

        <!-- <footer-nav :footer="footer"/> -->
    </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import {request} from "@/assets/js/apps.js";
export default {
  name: 'Footer',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
    "v-row": Row,
    "v-col": Col,
  },
  props: {
    // msg: String
  },
  data() {
    return {
      prize: "",
      header : {
        width : "100%",
        left : {
            src : require("@/assets/resources/backspace.svg"),
            action : "back"
        },
        right : {
            src : require("@/assets/resources/header_info.svg"),
            action : null
        },
      },
      
      footer : [
        { 
            name : '',
            src : require("@/assets/resources/footer_home.svg")
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
            src : require("@/assets/resources/footer_profile_active.svg")
        },  
      ],

    }
  },
  async created () {
    this.init();
  },
  methods: {
    async init() {
      this.prize = await request.get("/validator_nft/retreive_prize");

      // if(localStorage.mypage) {
      //   this.inspected = true;
      //   this.txHash = localStorage.getItem("mypage")
      // }
    }
  },
}
</script>

<style>

  .mypage_person_level .header ul li:nth-child(1){
    padding-left:13px;
  }

  .mypage_person_level .main-wrap {
    padding-bottom:0px;
  }
  .level_wrap {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 67px);
    justify-content: center;
    align-items: center;
    position: relative;
    top: -50px;
  }
  .level_wrap div:nth-child(1){
    background: #eceff5;
    width: 55px;
    height: 55px;
    border-radius: 55px;
    margin-bottom:16px;
  }
  .level_wrap div:nth-child(1) img{
    vertical-align: middle;
    position: relative;
    top: 15px;
    width: 22px;
  }
  .level_wrap p:nth-child(2){
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .level_wrap p:nth-child(3){
    color: #747f89;
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 21px;
  }
  .level_wrap p:nth-child(3) span{
    color:#167af9;
    font-weight: 600;
  }
  .level_wrap button{
    position: absolute;
    bottom: 0;
    border-radius: 50px;
    border: none;
    background: #167af9;
    color: white;
    width: 90%;
    height: 50px;
    margin: 15px 10px 0px 10px;
  }


</style>
