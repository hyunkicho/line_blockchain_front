<template>
<div class="mypage_person">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="my_profile">
            <img src="@/assets/resources/mypage_person.png" alt="" style="width:100%;">

          </section>

          <section class="person_descr">
            <div>
              <ul>
                <li>Charlotte</li>
                  <li>
                    <router-link router-link to="/inspected_person_level">
                      <span>Gold</span>
                    </router-link>
                  </li>
              </ul>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis!
              </p>
              <div class="person_info_btns">
                <a :href="'https://explorer.blockchain.line.me/cashew/transaction/' +this.txHash" target="_blank">
                  <button>검증자 정보보기</button>
                </a>
                <a :href="this.addrex" target="_blank">
                  <button>검증 내역보기</button>
                </a>
              </div>

            </div>
            

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
      txHash: "",
      addrex: "",
      inspected : false,
      header : {
        width : "100%",
        left : {
            src : require("@/assets/resources/backspace_white.svg"),
            action : "index"
        },
        right : {
            src : require("@/assets/resources/header_gray_info.svg"),
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
      this.addrex = await request.get("/validator_nft/address_explorer");

      if(localStorage.mypage) {
        this.inspected = true;
        this.txHash = localStorage.getItem("mypage")
      }
    }
  },
}
</script>

<style>
  .mypage_person .header ul{
    background-color: transparent;
    border:none;
  }
  .mypage_person .header ul li:nth-child(1){
    padding-left:13px;
  }
  .mypage_person .main-wrap{
    padding-top:0px;
  }

  .mypage .header ul li:nth-child(1) img{
    padding-left:10%;
  }


  .person_descr {
    max-width: 768px;
    width: 100%;
    height: 260px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background: white;
    display: block;
    position: fixed;
    bottom: 0;
  }

  .person_descr div:nth-child(1){
    padding:25px;
  }

  .person_descr div ul{
    display: flex;
    margin-top:10px;
    margin-bottom:30px;
  }

  .person_descr div ul li{
    margin:0px;
  }

  .person_descr div ul li:nth-child(1){
    color:#404750;
    font-size:16px;
    font-weight:500;

  }
  .person_descr div ul li:nth-child(2){
    color: #747f89;
    margin-left: auto;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: solid 2px #d6e3f6;
  }
  .person_descr div ul li:nth-child(2)::after{
    content: url("../../assets/resources/medal_gold.svg");
    vertical-align: middle;
    padding-left:13px;
  }
    .person_descr div ul li:nth-child(2) span{
    color:#167af9;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 2px solid #167af9;
    }
    .person_descr div ul li:nth-child(2) a{
      color: white;
    }

  .person_descr div p{
    color :#747f89;
    font-size:14px;
    text-align: left;
    line-height: 23px;
  }

  .person_info_btns {
    padding: 0px;
    padding-top: 30px;
  }

  .person_info_btns button{
    width: 46%;
    height: 45px;
    border-radius: 42px;
    border: none;
    color: white;
  }
  .person_info_btns button:nth-child(1){
    background-color: #404750;
    margin-right: 13px;
  }
  .person_info_btns a:nth-child(2) button{
    background-color: #167af9;
    margin-right: 0px;
  }

</style>
