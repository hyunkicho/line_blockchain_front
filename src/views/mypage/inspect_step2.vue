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
                    <!-- <v-input ref="idRef" placeholder="은행/증권사 선택해주세요." v-model="name" clearable></v-input> -->
                    <v-select v-model="value" placeholder="은행/증권사 선택해주세요.">
                        <v-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </v-option>
                    </v-select>

                </div>
                <div>
                    <p>계좌번호</p>
                    <v-input type="number" placeholder="계좌번호를 입력해주세요." v-model="email" clearable></v-input>
                </div>
                <div>
                    <p>예치금액</p>
                    <v-input placeholder="예치금액을 입력해주세요." v-model="price" clearable></v-input>
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
import { Table, TableColumn, Dialog, Input, Select, Option } from 'element-ui';

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
    "v-input": Input,
    "v-select": Select,
    "v-option": Option,
    // "inspect_step1" :inspect_step1,
    "header-nav" : header,
    "footer-nav" : footer,
  },

  created() {
  },

  watch: {
    price: function(newValue) {
      const result = newValue.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.$nextTick(() => this.price = result);
    }
  },

  methods: {

  },

  data() {
    return {
        price:"",
        name : "",
        email : "",
        files : "",

        options: [{
          value: '우리은행',
          label: '우리은행'
        }, {
          value: '국민은행',
          label: '국민은행'
        }, {
          value: '신한은행',
          label: '신한은행'
        }, {
          value: '기업은행',
          label: '기업은행'
        }, {
          value: '카카오뱅크',
          label: '카카오뱅크'
        }, {
          value: '농협',
          label: '농협'
        }
        ],
        value: '',


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
.el-select {
    width:100%;
}
.el-select-dropdown {
    width:63%;
    max-width: 720px;
}
</style>
