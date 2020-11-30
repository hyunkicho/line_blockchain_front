<template>
<div class="productAccount">
    <div class="main-wrap">
        <header-nav :header="header"/>
        <div>
            <section>
                <div class="productInfoWrap">
                    <img :src="datas.src">
                    <ul>
                        <li>Air Force 1 Low Peaceminusone Para-Noise</li>
                        <li><span>사이즈</span> 250</li>
                    </ul>
                </div>

                <div class="productPrices">
                    <ul>
                        <li>즉시 구매가</li>
                        <li>{{datas.productPrice}}원</li>
                    </ul>
                    <ul>
                        <li>즉시 판매가</li>
                        <li>{{datas.productPrice}}원</li>
                    </ul>
                </div>

                <div class="buttonWrap">
                    <button :class="{active : btnidx == idx}" v-for="(btn,idx) in priceButtons" :key="btn" @click="priceButtonsTab(idx)">{{btn}}</button>
                </div>
                <div class="priceInputWrap">
                    <template>
                        <img src="@/assets/resources/pricesell.svg" alt="price">
                        <v-input v-if="this.btnidx==0" v-model="price" placeholder="희망가 입력"></v-input>
                        <div v-else>{{datas.productPrice}}</div>
                        <!-- <v-input v-model="price" type="number">{{datas.productPrice}}</v-input> -->
                        <span>원</span>
                    </template>
                </div>

                <div class="productPrices">
                    <ul>
                        <li>접수비</li>
                        <li>-</li>
                    </ul>
                    <ul>
                        <li>배송비</li>
                        <li v-if="this.btnidx==0">선불∙판매자 부담</li>
                        <li v-else style="color:#b0b0b0">-</li>
                    </ul>
                </div>
            </section>

            <!-- <section>
                <ul>
                    <li>판매 정산 계좌</li>
                    <li>국민은행 </li>
                </ul>
                <ul>
                    <li>반송 주소</li>
                    <li>주소테스트</li>
                </ul>
            </section> -->

        </div>
        <div class="account_footer">
            <ul>
                <li>총 결제 금액</li>
                <li>584,000 원</li>
            </ul>
            <button @click="accountBtnClick()">즉시구매 계속</button>
        </div>
    </div>


</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import {msgBoxNo, } from "@/assets/js/api.js";
import { Table, TableColumn, Dialog, Input } from 'element-ui';

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
    "v-input": Input,
    "v-table-column": TableColumn,
    "productList" :productList,
    "header-nav" : header,
  },

  created() {
      this.init()
    // this.init(this.$route.query.product, this.$route.query.gubun)
  },

  watch: {
    price: function(newValue) {
      const result = newValue.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.$nextTick(() => this.price = result);
    }
  },

  computed: {
      
  },

  methods: {
      init(product,gubun) {
          this.datas = this.$route.params.product;
      },

      priceButtonsTab(btn){
        this.btnidx = btn;
      },

      accountBtnClick() {
        this.$router.replace({name: "productDetail_completion", params: {product: this.datas} })
      }

  },

  data() {
    return {
        form :{},
        datas : "",
        btnidx : 1,
        price : 0,
        priceButtons : ['판매입찰', '즉시판매'],
        header : {
            left : {
                src : require("@/assets/resources/backspace.svg"),
                action : "back"
            },
            right : {
                src : require("@/assets/resources/header_info.svg"),
                // action : null
            },
        }

      };
  },

};
</script>



<style>
.VueCarousel-pagination {
    position: absolute;
    bottom:0px;
}
.VueCarousel-pagination button {
    width : 60px !important; 
    height:2px !important;
    background-color: black !important;
}
.VueCarousel-pagination .VueCarousel-dot--active {
    background-color: #167af9 !important;
}
.el-table tr:nth-child(1) th{
border-bottom: 1px solid #EBEEF5;
}
.el-table td, .el-table th.is-leaf {
    border-bottom:none;
}
.el-table th>.cell {
    text-align: center;
    color:#747f89
}
.el-table .cell {
    text-align: center;
    color:#404750
}
</style>
