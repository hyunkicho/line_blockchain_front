<template>
<div class="mypage">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <section class="my_profile">
            <h3 class="mypage_h3">검수자 활동내역</h3>
            <ul>
              <li>
                <p>검증 가능상품
                  <span>100건</span>
                </p>
              </li>

              <li>
                <p>검증 히스토리
                  <span>13건</span>
                </p>
              </li>
            </ul>

            <h3 class="mypage_h3">검수자 관리</h3>
              <ul>
                <li>
                  <p>검수자 프로필</p>
                </li>
                <li>
                  <p>나의 예치금
                    <span>0원</span>
                  </p>
                </li>
                <li>
                  <p>검수자 활동중지</p>
                  <p>활동중지 예치금 환급신청</p>
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

  .my_profile ul{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .my_profile ul li{
    width: 93%;
    padding: 15px 5px 15px 5px;
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
