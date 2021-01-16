<template>
<div class="mypage_person_level">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="level_wrap">

            <div>
              <p>Best Validator 2020</p>            
              <img src="@/assets/resources/person.png" alt="">
            </div>
            <p>Certification NIKE<br> 
            <p>상의,하의,신발</p>
              <!-- <span>Gold</span> 입니다.</p>             -->
            <!-- <button>내용확인</button> -->
          </section>

          <section>
            <div>
                <ul>
                    <li><img src="@/assets/resources/cert_logo.svg" alt=""></li>
                </ul>
                <ul>
                    <li><span>고유번호</span>  <span>1000000200000001</span></li>
                    <li><span>수상일자</span><span>1608315884666</span></li>
                </ul>
            </div>
            <router-link to="/inspected_product">
                <button>검수내역 보기</button>
            </router-link>
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
    height: calc(100vh - 260px);
    justify-content: center;
    align-items: center;
    position: relative;
    /* top: -140px; */
  }
  .level_wrap div:nth-child(1){
    margin-bottom:20px;
  }
  .level_wrap div:nth-child(1) img{
    vertical-align: middle;
    width: 75%;
  }
  .level_wrap div:nth-child(1) p{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .level_wrap p:nth-child(2){
    line-height: 22px;
    font-weight: 500;
  }
  .level_wrap p:nth-child(2) span{
    color:#167af9
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


/* 섹션2 */
.mypage_person_level section:nth-child(3){
    height: 172px;
    width: 100%;
    background: #f9faff;
    max-width: 768px;
    margin: auto;
    padding-top: 5px;
}

.mypage_person_level section:nth-child(3)>div{
    display:flex;
    align-items: center;
    margin: 30px 20px 10px 20px;
}
.mypage_person_level section:nth-child(3)>div ul:nth-child(2){
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.mypage_person_level section:nth-child(3)>div ul:nth-child(2) li{
    text-align:left;
    font-size:14px;
    line-height: 26px;
}
.mypage_person_level section:nth-child(3)>div ul:nth-child(2) span{
    display: inline-block;
    width: 80px;
    text-align: right;
    color: #747f89;
    padding-right: 10px;
}
.mypage_person_level section:nth-child(3)>div ul:nth-child(2) span:nth-child(2){
    text-align: right;
}

.mypage_person_level section:nth-child(3) button {
    border-radius: 50px;
    border: none;
    background: #167af9;
    color: white;
    width: 90%;
    height: 50px;
    margin: 15px 10px 0px 10px;
}

</style>
