<template>
<div class="inspect_step1">
    <div class="main-wrap">
        <header-nav :header="header" />
            <div class="step_wrap">
                <ul>
                    <li>검수자 인증하기</li>
                    <li>
                        <span>3</span>
                        <span>/3</span>
                    </li>
                </ul>
            </div>
            <div class="step_last_wrap">
                <p >검수자로 활동하기 위해 사용자의<br/> 추가 동의가 필요합니다.</p>
                <ul>

                    <li v-for="(item,idx) in items" :key="idx" @click="check(idx)" :class="{active : item.active}">{{item.key}}</li>
                    <!-- <li @click="check(3)">전체동의</li>
                    <li @click="check(1)">[필수] 서비스 이용약관 동의</li>
                    <li @click="check(1)">[필수] 전자금융거래 이용약관</li> -->
                </ul>
            </div>

            <div v-if="this.items[0].active == true" class="to_step_btn">
                <router-link to="/inspect_sucess">
                    <button>인증하기</button>
                </router-link>
            </div>

            <div v-if="this.items[0].active == false" class="to_step_btn step_none_active">
                <!-- <router-link to=""> -->
                    <button>인증하기</button>
                <!-- </router-link> -->
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
      check(idx){
          const result = this.items.filter(item => item.active);
          if(idx == 0 && this.items[0].active == false){
            this.items[0].active = true;
            this.items[1].active = true;
            this.items[2].active = true;
          }else{
            this.items[idx].active = this.items[idx].active == true ? false : true
          }

          if(result.length == 3) {
            this.items[0].active = false;
            this.items[1].active = false;
            this.items[2].active = false; 
          }

          if(result.length == 1){
            this.items[0].active = true;
          }
         
      }
  },

  data() {
    return {
        // items: ["전체동의", "[필수] 서비스 이용약관 동의", "[필수] 전자금융거래 이용약관"],
        items: [{key : "전체동의", active:false}, {key:"[필수] 서비스 이용약관 동의",active:false}, {key:"[필수] 전자금융거래 이용약관",active:false}],
        checked : [],
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
    .step_last_wrap{
        text-align:left;
        padding:15px;
    }
    .step_last_wrap p{
        color: #747f89;
        font-size:14px;
        line-height: 22px;;
    }

    .step_none_active button {
        background: #e9e9ed;
        color:#b5b6c4;
    }

    .step_last_wrap ul {
        display:flex;
        flex-direction: column;
        margin-top:27px;
    }
    .step_last_wrap ul li{
        line-height: 30px;
        padding:10px 10px 10px 22px;
        margin: 0px;
        font-size:14px;
        color:#747f89
    }
    .step_last_wrap ul li::before{
        content: url("../../assets/resources/checkbox_ico.svg");
        padding-right: 12px;
    }
    .step_last_wrap ul li:nth-child(1){
        color:#404750;
        border-radius: 30px;
        border: 1px solid #ededf0;
        
    }
    .step_last_wrap ul .active::before{
        content: url("../../assets/resources/checkbox_ico_active.svg");
        padding-right: 12px;
    }
</style>
