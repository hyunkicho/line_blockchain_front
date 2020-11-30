<template>
<div class="profile">
    <div class="main-wrap">
        <header-nav :header="header"/>
          Profile Page
        <footer-nav/>
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
      footerData : [
        { 
            name : 'home',
            src : require("@/assets/resources/footer_home.svg")
        },  
        { 
            name : 'list',
            src : require("@/assets/resources/footer_list.svg")
        },  
        { 
            name : 'search',
            src : require("@/assets/resources/footer_search.svg")
        },  
        { 
            name : 'profile',
            src : require("@/assets/resources/footer_profile.svg")
        },  
      ],

      header : {
        width : "80%",
        left : {
            src : require("@/assets/resources/blimit.svg"),
            action : "index"
        },
        right : {
            src : require("@/assets/resources/header_alram.svg"),
            action : "alram"
        },
      }

    }
  },
  async created () {

  },
  methods: {

  },
}
</script>

