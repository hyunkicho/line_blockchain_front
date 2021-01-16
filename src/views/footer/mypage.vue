<template>
<div class="mypage">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="profile">
            <div @click="card_click()" class="profile-card" :class="{card_inspected : inspected}">
              <ul>
                <li>박성웅</li>
                <li>Validator</li>
                <li><img src="@/assets/resources/right_path.svg" alt=""></li>
              </ul>

              <ul>
                <li>Time left <span>00 : {{percentage}}</span></li>
                <v-progress :percentage="percentage"></v-progress>
              </ul>
            </div>
            
            <ul>
              <li>
                <img src="@/assets/resources/profile_image.svg" alt="profile">
              </li>
              <li>
                <p>홍길동</p>
                <p>email@example.com</p>
              </li>
              <li>
                <img src="@/assets/resources/profile_edit.svg" alt="edit">
              </li>
            </ul>
          </section>

          <section class="my_profile">
            <h3 class="mypage_h3">나의 프로필</h3>
            <ul>
              <router-link v-if="inspected" to="/inspected">
              <li>
                <p>검수자 활동내역</p>
                <p>인증 상태</p>
              </li>
              </router-link>
              <router-link v-else to="/inspect_step1">
              <li>
                <p>검수자 활동내역</p>
                <p>미인증 상태</p>
              </li>
              </router-link>
              <li>
                <p>My 포인트
                  <span>
                    <img src="@/assets/resources/bv_token_ico.svg" alt="" style="width: 15px; position: relative; top: 2px; left: -2px;">
                    0
                    </span>
                </p>
              </li>
            </ul>

            <h3 class="mypage_h3">나의 거래내역</h3>
              <ul>
              <li>
                <p>구매 내역
                  <span>3건</span>
                </p>
                <p>전체 구매 내역</p>
              </li>
              <li>
                <p>판매 내역
                  <span>5건</span>
                </p>
                <p>전체 판매 내역</p>
              </li>
              <li>
                <p>결제 정보 관리</p>
              </li>
            </ul>

          </section>

          <section>


          </section>

        <footer-nav :footer="footer"/>
    </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem, Progress } from 'element-ui';
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
export default {
  name: 'Footer',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
    "v-row": Row,
    "v-col": Col,
    "v-progress": Progress,
  },
  props: {
    // msg: String
  },
  data() {
    return {
      inspected : false,
      percentage:100,
      header : {
        width : "100%",
        left : {
            src : require("@/assets/resources/header_mypage.svg"),
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
    init() {
      if(localStorage.mypage) {
        this.inspected = true
      }
        setInterval(() => {
          this.percentage-=1;
          if (this.percentage == 0) {
            this.percentage = 100;
          } 
        }, 1000);
    },

    card_click(){
      this.$router.replace(`/inspected_person`)
    }

  },
}
</script>

<style>
  .mypage .header ul li:nth-child(1) img{
    padding-left:10%;
  }

  .mypage_h3 { 
    background-color: #f9faff;
    height: 30px;
    line-height: 30px;
    display: block;
    text-align: left;
    color: #747f89;
    font-size: 14px;
    padding: 10px 15px 10px 15px;
  }

  .profile ul{ 
    display: flex;
    align-items: center;
    margin: 15px;
    text-align: left;
  }
  .profile ul li:nth-child(1){ 
    margin-left:0;
  }
  .profile li:nth-child(2) p:nth-child(1){ 
    color: #404750;
    font-weight: 600;
    margin-bottom: 9px;
  }
  .profile li:nth-child(2) p:nth-child(2){ 
    color: #747f89;
    font-weight: 300;
    font-size:14px;
  }
  .profile li:last-child{ 
    margin-left: auto;
  }

  .profile .profile-card {
    height: 200px;
    width: 91%;
    padding: 25px;
    background: linear-gradient(123deg, #58a1ff 1%, #006df7);
    border-radius: 15px;
    margin: auto;
    box-sizing: border-box;
    margin-top:20px;
    margin-bottom:40px;
  }

  .profile .card_inspected {
    background :linear-gradient(123deg, #6c727b 1%, #404750);
  }

  .profile .profile-card ul {
    display: flex;
    margin: 0px;
  }
  .profile .profile-card ul:nth-child(1) li:nth-child(1){
    margin-right: 0px;
    font-size: 16px;
    color: white;
    font-weight: 600;
  }
  .profile .profile-card ul:nth-child(1) li:nth-child(2){
    font-size:13px;
    font-weight: 200;
    color: white;
  }

  .profile .profile-card ul:nth-child(2){
    flex-direction: column;
    height: 92%;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .profile .profile-card ul:nth-child(2) li:nth-child(1){
    color:white;
    font-size:13px;
    line-height: 23px;
  }
  .profile .profile-card ul:nth-child(2) li:nth-child(1) span{
    color:white;
    font-size:12px;
    margin-left:8px;
    font-weight: 700;
  }
  .profile .profile-card ul:nth-child(2) .el-progress::after{
    /* content: url("../../assets/resources/qr_code.jpg"); */
    background-image: url("../../assets/resources/qr_code.jpg");
    /* background-size: 90px 20px; */
    background-repeat: no-repeat;
    width: 130px;
    height: 127px;
    margin-left: 25px;
    margin-top: -71px;
    transform: scale(0.37);
    content: "";
    position: absolute;
  }

  .el-progress {
    width:80%;
  }

  .el-progress-bar__inner {
    background:white;
  }

  .el-progress-bar__outer {
    height:3px !important;
    background:#5a9ff7;
  }

  .el-progress__text {
    display:none;
  }

  .card_inspected .el-progress-bar__outer {
    background:#6f757e;
  }
  


  .my_profile ul{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .my_profile ul li{
    width: 93%;
    padding: 15px 0px 15px 5px;
    height:30px;
    
  }
  .my_profile ul li p:nth-child(1)::after{
    /* content: ">";
    float: right; */
    /* content: "";
    float: right; */
  }
  .my_profile ul li p:nth-child(1){
    color: #404750;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 7px;
    background: url("../../assets/resources/arrow_right.svg") no-repeat;
    background-position: top 0px right 8px;
  }
  .my_profile ul li p:nth-child(1) span{
    float: right;
    padding-right: 8%;
    position: relative;
    top: -2px;
    color: #167af9;
  }

  .my_profile ul li p:nth-child(2){
    color: #747f89;
    font-size: 14px;
  }



</style>
