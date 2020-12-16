<template>
<div class="inspect_step1">
    <div class="main-wrap">
        <header-nav :header="header" />
            <div class="step_wrap">
                <ul>
                    <li>검수자 인증하기</li>
                    <li>
                        <span>2</span>
                        <span>/3</span>
                    </li>
                </ul>
            </div>
            <div class="step_input_wrap">
                <div>
                    <p>은행명</p>
                    <v-input ref="idRef" placeholder="은행/증권사 선택해주세요." v-model="name" clearable></v-input>
                </div>
                <div>
                    <p>계좌번호</p>
                    <v-input ref="idRef" placeholder="계좌번호를 입력해주세요." v-model="email" clearable></v-input>
                </div>
                <div>
                    <p>예치금액</p>
                    <v-input ref="idRef" placeholder="예치금액을 입력해주세요." v-model="files" clearable></v-input>
                </div>
            </div>

            <div class="to_step_btn">
                <router-link to="/inspect_step3">
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

</style>
