<template>
<div class="inspect_step1">
    <div class="main-wrap">
        <header-nav :header="header" />
            <div class="step_wrap">
                <ul>
                    <li>검수자 인증하기</li>
                    <li>
                        <span>1</span>
                        <span>/3</span>
                    </li>
                </ul>
            </div>
            <div class="step_input_wrap">
                <div>
                    <p>이름</p>
                    <v-input ref="idRef" placeholder="이름을 입력하세요." v-model="name" clearable></v-input>
                </div>
                <div>
                    <p>이메일</p>
                    <v-input ref="idRef" placeholder="email@example.com" v-model="email" clearable></v-input>
                </div>
                <div>
                    <p>인증서류</p>
                    <v-input ref="idRef" placeholder="첨부할 파일을 선택해주세요." v-model="files" clearable></v-input>
                </div>
                
            </div>

            <div class="to_step_btn">
                <router-link to="/inspect_step2">
                    <button>다음 단계</button>
                </router-link>
            </div>
    </div>
</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
// import inspect_step1 from '@/components/product/inspect_step1.vue'
import {msgBoxNo} from "@/assets/js/api.js";
import { Table, TableColumn, Dialog, Input } from 'element-ui';

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
     "v-input": Input,
    // "inspect_step1" :inspect_step1,
    "header-nav" : header,
    "footer-nav" : footer,
  },

  created() {
  },

  methods: {

  },

  data() {
    return {
        name : "",
        email : "",
        files : "",
        header : {
            left : {
                src : require("@/assets/resources/backspace.svg"),
                action : "back"
            },
            right : {
                src : require("@/assets/resources/header_info.svg"),
                action : null
            },
        },


    };
  },

};
</script>



<style>
  .inspect_step1 .header ul li:nth-child(1) img{
    padding-left:10px;
  }

  .inspect_step1 .step_wrap {
      margin-top: 35px;
      text-align: left;
      padding: 15px;
  }

  .inspect_step1 .step_wrap ul{
      display: flex;
  }
  .inspect_step1 .step_wrap ul li{
      margin:0px;
  }

  .inspect_step1 .step_wrap ul li:nth-child(1){ 
      color: #404750;
      font-size:18px;
      font-weight: 600;
  }
  .inspect_step1 .step_wrap ul li:nth-child(2){ 
      margin-left:auto;
      font-size:14px;
  }
  .inspect_step1 .step_wrap ul li:nth-child(2) span:nth-child(1){ 
      color:#167af9;
  }
  .inspect_step1 .step_wrap ul li:nth-child(2) span:nth-child(2){ 
      color: #747f89
  }


    /* step input */
   .step_input_wrap { 
        padding: 15px;
   }

   .step_input_wrap div {
       text-align: left;
       margin-top:10px;
       margin-bottom:10px;
   }

   .step_input_wrap div p{
       color:#747f89;
       font-size:14px;
   }

   .step_input_wrap div input{
       color: #404750;
       font-weight: 500;
       padding-left:0px;
       border-radius:0px;
       border-top: none;
       border-left: none;
       border-right: none;
    }
   .step_input_wrap div input:hover{
       border-color: #167af9;

    }

    /* btn */
    .to_step_btn button {
        position: fixed;
        bottom: 40px;
        left: 0px;
        right: 0px;
        z-index: 10;
        max-width: 768px;
        margin: auto;
        color: white;
        background: #167af9;
        width: 90%;
        height: 50px;
        border: none;
        border-radius: 30px;
    }

</style>
