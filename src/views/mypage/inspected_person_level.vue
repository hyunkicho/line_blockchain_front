<template>
<div class="mypage_person_level">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="person_level">
            <div class="person_level_box">
              <ul class="person_profile">
                <li><img src="@/assets/resources/person_face.png" alt=""></li>
                <li>
                  <p>박성웅 <span>Validator</span></p>  
                  <p>email@example.com</p>  
                  <p>1608315884666</p>  
                </li>
              </ul>

                <div class="brand">
                  <ul>
                    <li><img src="@/assets/resources/nike.jpg" alt="" style="width: 148%;
    position: relative;
    top: 3px;"></li>
                    <li>NIKE</li>
                    <li>Top,pants</li>
                    <li>2021.01.10</li>
                  </ul>
                  <ul>
                    <li><img src="@/assets/resources/adidas.jpg" alt=""></li>
                    <li>Adidas</li>
                    <li>Sneakers</li>
                    <li>2021.01.08</li>
                  </ul>
                  <ul>
                    <li><img src="@/assets/resources/adidas.jpg" alt=""></li>
                    <li>Adidas</li>
                    <li>Sneakers</li>
                    <li>2021.01.08</li>
                  </ul>
                  <ul>
                    <li><img src="@/assets/resources/adidas.jpg" alt=""></li>
                    <li>Adidas</li>
                    <li>Sneakers</li>
                    <li>2021.01.07</li>
                  </ul>
                </div>

                <div>
                  <ul class="person_cert_wrap">
                    <li><img src="@/assets/resources/blimit_cert.svg" alt=""><br>
                    <span>1608315884666</span>
                    </li>
                    <li><img src="@/assets/resources/auth_cert.jpg" alt=""></li>
                  </ul>
                </div>



<!-- 
                <li>
                  <p>
                      <img src="@/assets/resources/nike.jpg" alt="">
                    NIKE
                    <span>Top,pants</span>
                  </p>
                  <p>2021.01.10</p>
                </li>

                <li>
                  <p>
                    <img src="@/assets/resources/adidas.jpg" alt="">
                    NIKE
                    <span>Top,pants</span>
                  </p>
                  <p>2021.01.10</p>
                </li>

                <li>
                  <p>
                    <img src="@/assets/resources/omega.jpg" alt="">
                    NIKE
                    <span>Top,pants</span>
                  </p>
                  <p>2021.01.10</p>
                </li> -->

                
              </div>

 
          </section>

          <section>
            <a :href="'https://explorer.blockchain.line.me/cashew/transaction/A0874BE27BD113566F10922AEC37F99F844F4FAAA8DF36B37455B00F5D52DA23'" target="_blank">
                <button>블록체인 조회</button>
            </a>
            
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
            src : require("@/assets/resources/header_certificate.svg"),
            action : null
        },
        right : {
            src : require("@/assets/resources/close.svg"),
            action : "close"
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
  .mypage_person_level{
    background-color: #eceff5
  }

  .mypage_person_level .main-wrap{
    padding-bottom:85px;
  }
  .mypage_person_level .header ul{
    background-color: transparent;
    border:none;
  }

  .person_level {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
  .person_level_box {
    width: 85%;
    /* height: 80%; */
    margin: auto;
    background-color: white;
    border-radius: 20px;
    padding:30px 15px;
    box-sizing: border-box;
  }

  .person_profile {
    display: flex;
    flex-wrap:wrap;
  }

  .person_profile li:nth-child(1){
    width:40%;
  }
  .person_profile li:nth-child(1) img{
    width:100%;
  }
  .person_profile li:nth-child(2){
    width: 43%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .person_profile li:nth-child(2) p:nth-child(1){
    color:#404750;
    font-size:16px;
    font-weight: 600;
    line-height: 30px;
  }
  .person_profile li:nth-child(2) p:nth-child(1) span{
    color:#404750;
    font-size:13px;
    font-weight: 400;
    margin-left:5px;
  }

  .person_profile li:nth-child(2) p:nth-child(2){
    color:#747f89;
    font-size:12px;
    font-weight: 300;
  }

  .person_profile li:nth-child(2) p:nth-child(3){
    color:#747f89;
    font-size:15px;
    font-weight: 300;
    margin-top: auto;
    padding-bottom: 15px;
  }

  .brand {
    border-top: 1px solid #dadae1;
    margin-top: 37px;
    padding-top: 30px;
    padding-top: 10%;
  }
  .brand ul{
    display: flex;
    flex-wrap:wrap;
    height:45px;
    align-items: baseline;
  }
  .brand ul li:nth-child(1){
    width:5%;
  }
  .brand ul li:nth-child(1) img{
    width: 100%;
  }
  .brand ul li:nth-child(2){
    width:15%;
    text-align: left;;
    color:404750;
    font-weight: 600;

  }
  .brand ul li:nth-child(3){
    color: #747f89;
    font-size: 12px;
    font-weight: 300;
    margin-left: 10px;

  }
  .brand ul li:nth-child(4){
    margin-left:auto;
    color:#404750;
    font-size:13px;
  }

  .person_cert_wrap {
    display:flex;
    margin-top:7%;
  }
  .person_cert_wrap li:nth-child(1){
    text-align: left;
  }
  .person_cert_wrap li:nth-child(1) span{
    color:#404750;
    font-size:14px;
  }
  .person_cert_wrap li:nth-child(2){
    text-align: right;
    margin-left:auto;
  }
  .person_cert_wrap li:nth-child(2) img{
    width:41%;
  }

  .mypage_person_level button {
    background: #167af9;
    width: 85%;
    height: 45px;
    border-radius: 42px;
    border: none;
    color: white;
  }

  /* .brand li{
    display: flex;
    flex-wrap:wrap;
    width:96%;
    align-items: baseline;
    height:40px;
  }

  .brand li p:nth-child(1){
    text-align: left;
    font-weight: 600;
  }
  .brand li p:nth-child(1) img{
    width: 18%;
    position: relative;
    top: 9px;
  }
  .brand li p:nth-child(1) span{
    color: #747f89;
    font-size: 12px;
    font-weight: 300;
    margin-left: 10px;
  }
  .brand li p:nth-child(2){
    color:#404750;
    font-size:13px;
    margin-left:auto;
  } */


</style>
