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
                        <li><span>사이즈</span> {{this.fixSize}}</li>
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

                <div class="buttonWrap" :class="{buy : buyOrsell == 'buy'}">
                    <button :class="{active : btnidx == idx}" v-for="(btn,idx) in priceButtons" :key="btn" @click="priceButtonsTab(idx)">{{btn}}</button>
                </div>
                <div class="priceInputWrap">
                    <template v-if="buyOrsell == 'buy'" >
                        <img src="@/assets/resources/pricebuy.svg" alt="price">
                        <v-input v-if="this.btnidx==0" v-model="price" placeholder="희망가 입력" @focus="focusOnMobile = true"  @blur="focusOnMobile = false"></v-input>
                        <div v-else>{{datas.productPrice}}</div><span>원</span>
                        <!-- <v-input v-model="price" type="number">{{datas.productPrice}}</v-input> -->
                    </template>
                    <template v-if="buyOrsell == 'sell'" >
                        <img src="@/assets/resources/pricesell.svg" alt="price">
                        <v-input v-if="this.btnidx==0" v-model="price" placeholder="희망가 입력" @focus="focusOnMobile = true"  @blur="focusOnMobile = false"></v-input>
                        <div v-else>{{datas.productPrice}}</div><span>원</span>
                        <!-- <v-input v-model="price" type="number">{{datas.productPrice}}</v-input> -->
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
        <div v-if="buyOrsell == 'buy'" class="account_footer" :class="{focusOnMobile}">
            <ul>
                <li>총 결제 금액</li>
                <li>{{datas.productPrice}}원</li>
            </ul>
            <button @click="accountBtnClick()">즉시구매 계속</button>
        </div>
        <div v-if="buyOrsell == 'sell'" class="account_footer" :class="{focusOnMobile}">
            <ul>
                <li>총 결제 금액</li>
                <li>{{datas.productPrice}}원</li>
            </ul>
            <button @click="accountBtnClick()">즉시판매 계속</button>
        </div>
    </div>
</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import {msgBoxNo,numberWithCommas } from "@/assets/js/api.js";
import { Table, TableColumn, Dialog, Input } from 'element-ui';
import axios from "axios";
import {request} from "@/assets/js/apps.js";

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

  methods: {
      init(product) {
          this.datas = this.$route.params.product;
          this.fixSize = this.$route.params.fixSize;
          this.buyOrsell =  this.$route.params.buyOrsell;
          if(this.buyOrsell == "buy"){
              this.priceButtons = ['판매입찰', '즉시구매']
          }
      },
      priceButtonsTab(btn){
        this.btnidx = btn;
        if(btn == 1){
            this.price = 0;
        }
      },

      async accountBtnClick() {
        this.$router.replace({name: "productDetail_completion", params: {product: this.datas, fixSize:this.fixSize, buyOrsell:this.buyOrsell } })
        // const nft1 = await request.post("/api/transfer_nft")
        // const nft2 = await request.post("/api/transfer_nft2")
      },


  },

  data() {
    return {
        datas : "",
        btnidx : 1,
        price : 0,
        fixSize : 0,
        focusOnMobile : false,
        priceButtons : ['판매입찰', '즉시판매'],
        buyOrsell : "",
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
    width : 100px !important; 
    height:1px !important;
    background-color: black !important;
}
.VueCarousel-pagination .VueCarousel-dot--active {
    background-color: #167af9 !important;
}
.el-table tr:nth-child(1) th{
    border-bottom: 1px solid #EBEEF5;
}
.el-table tr:last-child td{
    border-bottom: 0px;
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
.focusOnMobile {
    display:none;
    /* position: absolute */
}
</style>
