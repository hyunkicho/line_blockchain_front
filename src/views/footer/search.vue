<template>
<div class="search">
    <div class="main-wrap">
        <header-nav :header="header"/>
          <search-compo/>
        <footer-nav :footer="footer"/>
    </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import searchCompo from '@/components/search_compo.vue'
export default {
  name: 'Search',
  components: {
    "header-nav" : header,
    "footer-nav" : footer,
    "search-compo" : searchCompo,
    "v-row": Row,
    "v-col": Col,
  },
  props: {
    // msg: String
  },
  data() {
    return {
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
      },

      footer : [
        { 
            name : '',
            src : require("@/assets/resources/footer_home.svg")
        },  
        { 
            name : 'list',
            src : require("@/assets/resources/footer_list.svg")
        },  
        { 
            name : 'search',
            src : require("@/assets/resources/footer_search_active.svg")
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

