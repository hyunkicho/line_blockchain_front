<template>
<div class="productDetail">
    <div class="main-wrap">
        <header-nav :header="header" />
            <carousel :per-page="1" >
                <slide style="background:#eceff5">
                    <img :src="productInfo[0].src">
                </slide>
                <slide style="background:#eceff5">
                    <img :src="productInfo[0].src">
                </slide>
            </carousel>

            <div class="descr">
                <section>
                    <h2>{{productInfo[0].productName}}</h2>
                    <p>{{productInfo[0].productDesc}}</p>
                    <ul>
                        <li>사이즈</li>
                        <li v-if="size == 0" @click="dialogVisible = true">모든 사이즈 <img src="@/assets/resources/more_arrow.svg" alt="arrow"></li>
                        <li v-else @click="dialogVisible = true"> {{size}} <img src="@/assets/resources/more_arrow.svg" alt="arrow"></li>
                    </ul>
                    <ul>
                        <li>최근 판매가</li>
                        <li v-if="size == 0"><b>{{productInfo[0].productPrice}}</b></li>
                        <li v-else><b>{{productInfo[0].productPrice}}</b></li>
                    </ul>
                </section>

                <section>
                    <h2>입찰내역</h2>
                    <div class="buttonWrap">
                        <button :class="{active : btnidx == idx}" v-for="(btn,idx) in buttons" :key="btn" @click="btnTab(idx)">{{btn}}</button>
                    </div>

                    <div>
                        <v-table
                        :data="tableData"
                         style="width: 100%">
                        <v-table-column
                            prop="size"
                            label="사이즈"
                            >
                        </v-table-column>
                        <v-table-column
                            prop="sell"
                            label="판매 희망가"
                            >
                        </v-table-column>
                        <v-table-column
                            prop="count"
                            label="수량">
                        </v-table-column>
                        </v-table>
                    </div>
                </section>
            </div>

            <div>
                <div class="wrap-margin">
                    <h2>Related Product</h2>
                    <p>관련 상품</p>
                    <productList products='popularProduct'/>
                </div>
            </div>

            <div class="salebtnWrap">
                <button @click="sellBtnClick('buy')">구매 <span>|</span> {{productInfo[0].productPrice}}</button>
                <button @click="sellBtnClick('sell')">판매 <span>|</span> {{productInfo[0].productPrice}}</button>
            </div>


            <div class="sizeDialog">
                <v-dialog
                    title="사이즈 선택"
                    :visible.sync="dialogVisible"
                    width="90%"
                    >
                    <p v-if="this.buyOrsell == 'buy'">즉시 구매가 (원)</p>
                    <p v-if="this.buyOrsell == 'sell'">즉시 판매가 (원)</p>
                    <div class="sizeButtonWrap">
                        <button :class="{active : sizeidx == 100}"><span>모든사이즈</span>  <span style="padding:0px;"></span><span>{{productInfo[0].productPrice}}</span></button>
                        <button v-for="(item,idx) in sizesKey" :key="idx" @click="sizeBtnClick(idx, item)" :class="{active : idx == sizeidx}">
                        <!-- <button v-for="(item,idx) in sizesKey" :key="idx" @click="sizeBtnClick(idx, item)" :class="{active : idx == sizeidx}"> -->
                            <span>{{item}}</span> <span> | </span> <span>{{sizesPrice[idx]}}</span>
                        </button>
                    </div>
                    <!-- <span slot="footer" class="dialog-footer">
                        <v-button @click="dialogVisible = false">Cancel</v-button>
                        <v-button type="primary" @click="dialogVisible = false">Confirm</v-button>
                    </span> -->
                </v-dialog>
            </div>
        <!-- <footer-nav/> -->
    </div>
</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import {msgBoxNo,numberWithCommas} from "@/assets/js/api.js";
import {Carousel, Slide} from 'vue-carousel';
import { Table, TableColumn, Dialog } from 'element-ui';

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
    "v-table-column": TableColumn,
    "productList" :productList,
    "header-nav" : header,
    "footer-nav" : footer,
    "carousel" : Carousel,
    "slide" : Slide,
  },

  created() {
    this.init(this.$route.query.product, this.$route.query.gubun)
  },

  methods: {
      init(product,gubun) {
          const datas = this.$store.state[gubun]
          this.productInfo = datas.filter(e=> {
              if(e.tag == product){
                  return e
              }
          })
          this.sizesKey = Object.keys(this.productInfo[0].size)
          this.sizesPrice = Object.values(this.productInfo[0].size)
          numberWithCommas(this.sizesPrice)
          
      },

      sizeBtnClick(idx,size){
          this.sizeidx = idx;
          this.size = size;
          this.productInfo[0].productPrice = this.sizesPrice[idx];
          this.dialogVisible = false;
          if(this.buyOrsell != null) {
            this.$router.replace({name: "productDetail_account", params: {product: this.productInfo[0], fixSize:this.size, buyOrsell:this.buyOrsell} })
          }
      },    

      btnTab(btn){
        this.btnidx = btn;
      },

      sellBtnClick(buyOrsell) {
          this.buyOrsell = buyOrsell;

          if(this.size == 0){
              msgBoxNo("사이즈를 선택해주세요")
              this.dialogVisible = true;
          }else{
              this.$router.replace({name: "productDetail_account", params: {product: this.productInfo[0], fixSize:this.size, buyOrsell:this.buyOrsell} })
          } 
      }
  },

  data() {
    return {
        buyOrsell : null,
        sizeidx : 100,
        size : 0,
        dialogVisible : false,
        sizesKey : "",
        sizesPrice : "",
        productInfo : "",
        buttons : ['구매입찰', '판매입찰'],
        btnidx : 0,

        tableData: [{
            count: '1',
            size: '275',
            sell: '490,000원'
          }, {
            count: '1',
            size: '275',
            sell: '460,000원'
          }, {
            count: '1',
            size: '275',
            sell: '440,000원'
          }, {
            count: '1',
            size: '275',
            sell: '460,000원'
        }],

        header : {
            left : {
                src : require("@/assets/resources/backspace.svg"),
                action : "back"
            },
            right : {
                src : require("@/assets/resources/header_info.svg"),
                action : null
            },
        }
    };
  },

};
</script>



<style>
.productDetail  .VueCarousel-slide img{ 
    width : 60%;
}

.VueCarousel-pagination {
    position: absolute;
    bottom:0px;
}
.VueCarousel-pagination button {
    width : 60px !important; 
    height:1px !important;
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
