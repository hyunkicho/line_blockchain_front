<template>
<div class="productCert">
        <header-nav :header="header"/>
    <div class="main-wrap">
        <!-- {{certData}} -->
        <section>
            <div class="wrap-margin">
                <h3>Authenticity Guaranteed</h3>
                <div class="cert_img_wrap">
                    <img src="@/assets/resources/auth_sticker.png" alt="">
                    <img :src="certData.src" alt="">
                </div>

                <ul>
                    <li>{{certData.productName}}</li>
                    <li>{{certData.productDesc}}</li>
                    <li>Size : <span>{{certData.size}}</span></li>
                </ul>
            </div>
        </section>

        <section>
            <div>
                <ul>
                    <li><img src="@/assets/resources/cert_logo.svg" alt=""></li>
                </ul>
                <ul>
                    <li><span>검수일자</span>  <span>{{time}}</span></li>
                    <li><span>검수자</span>  <span>조현기</span></li>
                </ul>
            </div>
            <a :href="'https://explorer.blockchain.line.me/cashew/transaction/' +certData.txHash" target="_blank">
                <button>검수내역 보기</button>
            </a>
        </section>

    </div>


</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import {msgBoxNo, } from "@/assets/js/api.js";
import { Table, TableColumn, Dialog, Input } from 'element-ui';
import {request} from "@/assets/js/apps.js";

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
    "v-input": Input,
    "v-table-column": TableColumn,
    "header-nav" : header,
  },

  mounted() {
      this.certData = this.$route.params.product
      this.init()
    // this.init(this.$route.query.product, this.$route.query.gubun)
  },

  

  methods: {
    async init() {
        let product_nft = await request.get("/product/retreive_product_nft");
        let d = new Date(product_nft.createdAt)
        let time = d.getFullYear() + "." + d.getMonth() + "." + d.getDay()

        this.time = time;
        this.tokenIndex = product_nft.tokenIndex;
    },
  },

  data() {
    return {
        time : "",
        tokenIndex : "",
        certData : "",
        header : {
            width:"100%",
            left : {
                src : require("@/assets/resources/header_certification.svg"),
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
.productCert .main-wrap {
    padding-bottom: 0px;
}
.productCert .cert_img_wrap {
    position: relative;
    left: 0px;
    right: 0px;
    z-index: 1;
    max-width: 768px;
    margin: auto;
}
.productCert h3{
    font-size:16px;
    color:#404750;
    font-weight: 600;
    padding-bottom: 20px;
    letter-spacing: -0.3px;
}
.productCert .cert_img_wrap img:nth-child(1) {
    position: absolute;
    width: 60px;
    right: 15%;
    top: 20px;
}
.productCert .cert_img_wrap img:nth-child(2) {
    width:80%;
}

.productCert section:nth-child(1) ul {
    display:flex;
    flex-direction: column;
    margin-top:5%;
}

.productCert section:nth-child(1) ul li{
    font-size:14px;
    padding-bottom:8px;
    color:#404750;
}
.productCert section:nth-child(1) ul li:nth-child(1){
    color:#747f89
}
.productCert section:nth-child(1) ul li:nth-child(2){
}
.productCert section:nth-child(1) ul li:nth-child(3) span{
    font-weight:500
}

/* 섹션2 */
.productCert section:nth-child(2){
    height: 172px;
    width: 100%;
    background: #f9faff;
    max-width: 768px;
    margin: auto;
    padding-top: 5px;
}

.productCert section:nth-child(2)>div{
    display:flex;
    align-items: center;
    margin: 30px 20px 10px 20px;
}
.productCert section:nth-child(2)>div ul:nth-child(2){
    display: flex;
    flex-direction: column;
    margin-left: auto;
}
.productCert section:nth-child(2)>div ul:nth-child(2) li{
    text-align:left;
    font-size:14px;
    line-height: 23px;

}
.productCert section:nth-child(2)>div ul:nth-child(2) span{
    display: inline-block;
    width: 80px;
    text-align: right;
    color: #747f89;
    padding-right: 10px;
}
.productCert section:nth-child(2)>div ul:nth-child(2) span:nth-child(2){
    text-align: right;
}

.productCert section:nth-child(2) button {
    border-radius: 50px;
    border: none;
    background: #167af9;
    color: white;
    width: 90%;
    height: 50px;
    margin: 15px 10px 0px 10px;
}
</style>
