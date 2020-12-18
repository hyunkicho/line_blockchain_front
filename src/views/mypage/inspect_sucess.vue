<template>
<div class="inspect_step1">
        <div class="inspect_sucess_wrap">
            <div>
                <img src="@/assets/resources/checkbox_ico_active.svg" alt="">
            </div>
            <p>검수자 인증절차 완료</p>
            <p>절차가 완료되었습니다.<br/>승인이 완료된 경우 <span style="color:#167af9; font-weight:400">알림</span>을 보내드립니다.</p>

        </div>
        <div class="to_step_btn" @click="routerClick()">
            <button>확인</button>
        </div>
</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
// import inspect_step1 from '@/components/product/inspect_step1.vue'
import {msgBoxNo} from "@/assets/js/api.js";
import { Table, TableColumn, Dialog, Input, Checkbox, CheckboxGroup } from 'element-ui';

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
      routerClick(){
        localStorage.setItem('mypage', "inspect")
        this.$router.replace('/')
      }
  },

  data() {
    return {

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
    .inspect_sucess_wrap {
        position: absolute;
        top: 35%;
        left: 0;
        right: 0;
    }
    .inspect_sucess_wrap p:nth-child(2){
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 13px;
    }
    .inspect_sucess_wrap p:nth-child(3){
        font-size: 14px;
        line-height: 25px;
        color: #747f89;
        font-weight: 300;
    }
    .inspect_sucess_wrap div{
        width: 30px;
        height: 30px;
        border-radius: 30px;
        padding:15px;
        margin: auto;
        margin-bottom:20px;
        background: #eceff5;
    }
    .inspect_sucess_wrap div img{
        width: 26px;
        position: relative;
        top: 5px;
    }
</style>
