<template>
    <div class="serachWrap">
      <div class="inputWrap">
        <v-input v-model="searchTxt" type="text" prefix-icon="el-icon-search" />
      </div>

      <p class="counts"><span>검색결과 </span> {{filterData.length}}건</p>
      <div class="filderWrap">
          <dl v-for="(posts,idx) in filterData" :key="idx" @click="productClick(posts)">
            <img :src="posts.src" alt="">
            <dt>{{posts.productName}}</dt>
            <dd>{{posts.productDesc}}</dd>
            <dd class="prices">{{posts.productPrice}}</dd>
          </dl>
      </div>
      <!-- {{filterData}} -->

    </div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Header',
  components: {
    "v-row": Row,
    "v-col": Col,
    "v-input": Input,
    "v-button" : Button,
    "v-form" : Form,
    "v-formitem" : FormItem
  },
  props: {
    // msg: String
  },

  watch: {
    searchTxt:function(newVal, oldVal) {
      if(newVal == ""){
        this.filterData = this.allData
      }else{
        return this.filterData = this.allData.filter(item => {
         return item.productName.toLowerCase().match(this.searchTxt.toLowerCase())
        })
      }
    },
  },
  data() {
    return {
      searchTxt : "",
      allData : this.$store.state.newItem,
      filterData : this.$store.state.newItem,
    }
  },
  async created () {

  },
  methods: {
    productClick(item){
        this.$router.push({path: '/productDetail', query : {product:item.tag, gubun:item.gubun}}).catch(error => {
          if(error.name != "NavigationDuplicated" ){
            throw error;
          }
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-icon-search:before {
  content:url("../assets/resources/search.svg")
}
</style>
