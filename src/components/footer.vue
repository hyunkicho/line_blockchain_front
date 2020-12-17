<template>
    <div class="footer">
        <ul>
          <li v-for="(item,idx) in footer" :key="idx">
            <img :src="item.src" alt="" @click="footerRotuer(item.name, idx)">
          </li>
        </ul>
    </div>
</template>

<script>
import { Row, Col, Button } from 'element-ui';
export default {
  props : ["footer"],
  name: 'Footer',
  components: {
    "v-row": Row,
    "v-col": Col,
    "v-button" : Button,
  },
  data() {
    return {
    }
  },
  async created () {
    // this.footerData = this.footer
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
