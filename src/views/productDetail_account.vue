<template>
<div class="productDetail">
    <div class="main-wrap">
        <productHeader-nav/>
        Account 페이지..
    </div>
</div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import productHeader from '@/components/product/productHeader.vue'
import footer from '@/components/footer.vue'
import productList from '@/components/product/productList.vue'
import productSize from '@/components/product/productSize.vue'
import {msgBoxNo} from "@/assets/js/api.js";
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
    // this.init(this.$route.query.product, this.$route.query.gubun)
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
      },

  },

  data() {
    return {
      
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
