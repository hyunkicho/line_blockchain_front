<template>
<div class="productAccount productinpect">
    <div class="main-wrap">
        <header-nav :header="header"/>
        <div>
            <section class="inspect_wrap">
                <div class="wrap-margin">
                    <h2>검수자 선택하기</h2>
                    <p>검수자의 등급을 선택하세요.</p>
                
                    <ul :class="{active : btnidx == 0}" @click="levelClcik('platinum',0)">
                        <li>Platinum</li>
                        <li>-100,000원</li>
                    </ul>
                    <ul :class="{active : btnidx == 1}" @click="levelClcik('dia',1)">
                        <li>Diamond</li>
                        <li>-80,000원</li>
                    </ul>
                    <ul :class="{active : btnidx == 2}" @click="levelClcik('gold',2)">
                        <li>Gold</li>
                        <li>-60,000원</li>
                    </ul>
                    <ul :class="{active : btnidx == 3}" @click="levelClcik('silver',3)">
                        <li>Silver</li>
                        <li>-40,000원</li>
                    </ul>
                    <ul :class="{active : btnidx == 4}" @click="levelClcik('bronze',4)">
                        <li>Bronze</li>
                        <li>0원</li>
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
      init(product,gubun) {
          this.datas = this.$route.params.product;
          
          this.price = JSON.parse(JSON.stringify(this.datas.productPrice.replace(/[^0-9]/g,'')));
          this.fixSize = this.$route.params.fixSize;
      },

     levelClcik(level, idx) {
         this.btnidx = idx;
         switch (level) {
             case "platinum":
                 this.datas.productPrice = numberWithCommas(this.price.replace(/[^0-9]/g,'')-100000)
                 break;
             case "dia":
                 this.datas.productPrice = numberWithCommas(this.price.replace(/[^0-9]/g,'')-80000)
                 break;
             case "gold":
                 this.datas.productPrice = numberWithCommas(this.price.replace(/[^0-9]/g,'')-60000)
                 break;
             case "silver":
                 this.datas.productPrice = numberWithCommas(this.price.replace(/[^0-9]/g,'')-40000)
                 break;
             case "bronze":
                 this.datas.productPrice = numberWithCommas(this.price.replace(/[^0-9]/g,''))
                 break;
             default:
                 break;
         }
        
     },


      async accountBtnClick() {
        this.$router.replace({name: "productDetail_completion", params: {product: this.datas, fixSize:this.fixSize} })
        // const nft1 = await request.post("/api/transfer_nft")
        // const nft2 = await request.post("/api/transfer_nft2")
      },


  },

  data() {
    return {
        price : 0,
        idx:0,
        btnidx:5,
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
.productinpect ul{
    display: flex;
    border: 1px solid #ededf0;
    height: 50px;
    line-height: 50px;
    margin-bottom: 15px;
    border-radius: 30px;
    font-weight: 500;
}
.inspect_wrap .active {
    border: 1px solid #167af9;
    font-weight: 500;
}
.inspect_wrap .active li:nth-child(2){
    color : #167af9;
}
.productinpect ul li:nth-child(1){
    font-size: 14px;
    color:#167af9
}
.productinpect ul li:nth-child(2){
    padding-right: 10px;
    font-size: 14px;
    color:#404750
}
.productinpect ul li:nth-child(1)::before{
    position: relative;
    margin-left: 15px;
    margin-right: 10px;
    top: 4px;
}
.productinpect ul:nth-child(3) li:nth-child(1)::before{
    content: url("../../assets/resources/medal_platinum.svg");
}
.productinpect ul:nth-child(4) li:nth-child(1)::before{
    content: url("../../assets/resources/medal_dia.svg");
}
.productinpect ul:nth-child(5) li:nth-child(1)::before{
    content: url("../../assets/resources/medal_gold.svg");
}
.productinpect ul:nth-child(6) li:nth-child(1)::before{
    content: url("../../assets/resources/medal_silver.svg");
}
.productinpect ul:nth-child(7) li:nth-child(1)::before{
    content: url("../../assets/resources/medal_bronze.svg");
}
.productinpect ul li:nth-child(2){
    margin-left:auto;
}
</style>
