<template>
    <div class="footer">
        <ul>
          <li v-for="(item,idx) in footerData" :key="idx">
            <img :src="item.src" alt="" @click="footerRotuer(item.name, idx)">
          </li>

          
        </ul>
    </div>
</template>

<script>
import { Row, Col, Button } from 'element-ui';
export default {
  name: 'Footer',
  components: {
    "v-row": Row,
    "v-col": Col,
    "v-button" : Button,
  },
  props: {
    // msg: String
  },
  data() {
    return {
      footerData : [
        { 
            name : '',
            src : require("@/assets/resources/footer_home_active.svg"),
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
      ]
    }
  },
  async created () {

  },
  methods: {
    footerRotuer(name,idx){
      this.$router.push({path: `/${name}`}).catch(error => {
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

</style>
