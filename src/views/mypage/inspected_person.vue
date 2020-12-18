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
                <li>인증 상태</li>
              </ul>

              <p>
                회의 때 말한 것처럼 해당 검증자에 대한 자기소개나<br/>
                그런 짧은 글을 넣으면 될 것 같습니다아아아아. 
              </p>
              <div class="person_info_btns">
                <button>검증자 정보보기</button>
                <button>검증자 이력보기</button>
              </div>

            </div>
            

          </section>

        <footer-nav :footer="footer"/>
    </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
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
      inspected : false,
      header : {
        width : "100%",
        left : {
            src : require("@/assets/resources/backspace_white.svg"),
            action : "back"
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
    init() {
      if(localStorage.mypage) {
        this.inspected = true
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
    width: 100%;
    height: 270px;
    border-radius: 18px;
    background: white;
    display: block;
    position: absolute;
    /* top: -25px; */
    /* padding-top: 14%; */
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
    color:#747f89;
    margin-left:auto;
    font-size:14px;
  }
  .person_descr div ul li:nth-child(2)::before{
    content: url("../../assets/resources/inspected_person_chk.svg");
    vertical-align: middle;
    padding-left:5px;
  }

  .person_descr div p{
    color :#747f89;
    font-size:14px;
    text-align: left;
  }

  .person_info_btns {
    padding: 0px;
    padding-top: 30px;
  }

  .person_info_btns button{
    width: 46%;
    height: 50px;
    border-radius: 42px;
    border: none;
    color: white;
  }
  .person_info_btns button:nth-child(1){
    background-color: #404750;
    margin-right: 13px;
  }
  .person_info_btns button:nth-child(2){
    background-color: #167af9;
    /* margin-right: 15px; */
  }

</style>
