<template>
<div class="productAccount">
    <div class="main-wrap">
        <header-nav :header="header"/>
        {{productData}}
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
      init(product,gubun) {
          this.productData = this.$route.params.product;
      },
  },

  data() {
    return {
        productData : "",
        header : {
            left : {
                src : require("@/assets/resources/backspace.svg"),
                action : "back"
            },
            right : {
                src : require("@/assets/resources/header_info.svg"),
                action : "close"
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
