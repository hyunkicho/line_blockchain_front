<template>
<div class="productCompletion">
    <div class="main-wrap">
        <header-nav :header="header"/>
        <!-- {{productData}} -->
        <div class="section1">
            <div>
                <img :src="productData.src">
            </div>
            <ul>
                <li v-if="buyOrsell=='buy'">구매등록이 완료되었습니다.</li>
                <li v-if="buyOrsell=='sell'">판매등록이 완료되었습니다.</li>
                <li>검증을 위해 아래 주소로 상품을 보내주세요.</li>
                <li>서울특별시 영등포구 63로 50</li>
            </ul>
            <button>상품을 기다리는 중입니다.</button>
        </div>

        <div class="section2 wrap-margin">
            <ul>
                <li v-if="buyOrsell=='buy'" >구매 희망가</li>
                <li v-if="buyOrsell=='sell'">판매 희망가</li>
                <li>{{productData.productPrice}}원</li>
            </ul>
            <ul>
                <li>검수비</li>
                <li>-</li>
            </ul>
            <ul>
                <li>배송비</li>
                <li v-if="buyOrsell=='buy'" >선불∙구매자 부담</li>
                <li v-if="buyOrsell=='se ll'">선불∙판매자 부담</li>
            </ul> 
            <ul>
                <li v-if="buyOrsell=='buy'" >예상 구매금액</li>
                <li v-if="buyOrsell=='sell'">예상 판매금액</li>
                <li>{{productData.productPrice}}원</li>
            </ul>
        </div>

        <!-- <img src="" alt=""> -->
        <!-- {{$route.params.product}} -->

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
    // price: function(newVal) {
    //     this.price = newVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     // return ( newVal === 0 ) ? "" : newVal.toLocaleString( "en-US" );
    // }
  },

  computed: {
      
  },

  methods: {
    async init(product,gubun) {
        this.productData = JSON.parse(JSON.stringify(this.$route.params.product));
        this.productData.size = this.$route.params.fixSize;
        this.buyOrsell = this.$route.params.buyOrsell;
        const mint_nft = await request.post("/product_nft/mint");
        // const transfer = await request.post("/product_nft/transfer");
        // const transfer2 = await request.post("/product_nft/transfer2");
        this.productData.txHash = mint_nft.txHash;

        localStorage.setItem(this.$route.params.product.tag, JSON.stringify(this.productData));
    },
  },

  data() {
    return {
        productData : "",
        buyOrsell : "",
        header : {
            width:"100%",
            left : {
                src : require("@/assets/resources/completion.svg"),
                action : "index"
            },
            right : {
                src : require("@/assets/resources/close.svg"),
                action : "close"
            },
        }
      };
  },

};
</script>



<style>
.productCompletion .header ul li:nth-child(1) img {
    padding-left:10px;
}

/* 섹션1 */
.section1 {
    padding-bottom: 30px;
    border-bottom: 2px solid #eceff5;
}
.section1 div{
    background-color: #eceff5;
}
.section1 div img{
    width:70%;
}
.section1 ul{
    margin-top:30px;
    display: flex;
    flex-direction: column;
}
.section1 ul li{
    font-size:16px;
    line-height:25px;
}
.section1 li:nth-child(1){
    font-size:17px;
    font-weight:600;
    padding-bottom:10px;
}
.section1 li:nth-child(2){
    color:#747f89;
}
.section1 li:nth-child(3){
    color:#167af9;
    font-weight: 500;
}
.section1 button{
    color: #747f89;
    width: 70%;
    height: 50px;
    margin: 30px 10px -5px 01px;
    background: #eceff5;
    border: none;
    border-radius: 30px;
}

/* 섹션2 */
.section2 {
    margin-top:15px;
}
.section2 ul {
    display:flex;
    width:100%;
    line-height: 30px;
}
.section2 ul li:nth-child(1) {
    color: #747f89;
}
.section2 ul li:nth-child(2) {
    color: #404750;
    margin-left: auto;
    font-size: 14px;
    font-weight: 500;
}
.section2 ul:nth-child(3) {
    padding-bottom: 15px;
    border-bottom: 2px solid #eceff5;
}
.section2 ul:nth-child(4) {
    padding-top: 15px;
}
.section2 ul:nth-child(4) li:nth-child(2){
    font-size:17px;
    font-weight: 600;
}
</style>
