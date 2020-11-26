<template>
<div class="productDetail">
    <div class="main-wrap">
        <productHeader-nav/>
            <carousel :per-page="1">
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
                        <li @click="dialogVisible = true">모든 사이즈 <img src="@/assets/resources/more_arrow.svg" alt="arrow"></li>
                    </ul>
                    <ul>
                        <li>최근 판매가</li>
                        <li><b>{{productInfo[0].productPrice}}</b></li>
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
                <div>
                    <button>구매 <span>|</span> 545,000원</button>
                    <button>판매 <span>|</span> 550,000원</button>
                </div>
            </div>


            <div class="sizeDialog">
                <v-dialog
                    title="Size"
                    :visible.sync="dialogVisible"
                    width="90%"
                    >
                    <button ></button>
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
import productHeader from '@/components/product/productHeader.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import productSize from '@/components/product/productSize.vue'
import {Carousel, Slide} from 'vue-carousel';
import { Table, TableColumn, Dialog } from 'element-ui';

export default {
  components: {
    "v-table": Table,
    "v-dialog": Dialog,
    "v-table-column": TableColumn,
    "productList" :productList,
    "productSize" :productSize,
    "productHeader-nav" : productHeader,
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

          let data = this.productInfo;
      },

      btnTab(btn){
        this.btnidx = btn;
      }
  },

  data() {
    return {
        dialogVisible : false,
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
            sell: '490,000원'
          }, {
            count: '1',
            size: '275',
            sell: '490,000원'
          }, {
            count: '1',
            size: '275',
            sell: '490,000원'
          }]
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
