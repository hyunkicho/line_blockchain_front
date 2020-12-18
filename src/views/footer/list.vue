<template>
<div class="list">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <div class="list_wrap">
            <img src="@/assets/resources/list_sni.png" alt="">
            <img src="@/assets/resources/list_clo.png" alt="">
            <img src="@/assets/resources/list_watch.png" alt="">
            <img src="@/assets/resources/list_bag.png" alt="">
          </div>


        <footer-nav :footer="footer"/>
    </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
export default {
  name: 'Footer',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
    "v-row": Row,
    "v-col": Col,
  },
  props: {
    // msg: String
  },
  data() {
    return {
      header : {
        width : "100%",
        left : {
            src : require("@/assets/resources/header_category.svg"),
            action : "index"
        },
        right : {
            src : require("@/assets/resources/header_alram.svg"),
            action : "alram"
        },
      },

      footer : [
        { 
            name : '',
            src : require("@/assets/resources/footer_home.svg")
        },  
        { 
            name : 'list',
            src : require("@/assets/resources/footer_list_active.svg")
        },  
        { 
            name : 'search',
            src : require("@/assets/resources/footer_search.svg")
        },  
        { 
            name : 'mypage',
            src : require("@/assets/resources/footer_profile.svg")
        },  
      ],
      
    }
  },
  async created () {

  },
  methods: {

  },
}
</script>

<style>
.list .header ul li:nth-child(1) {
  margin-left:16px;
}

.list_wrap{
  padding:15px;
}

.list_wrap img{
  width:100%;
  margin-bottom:15px;
}
  
</style>

