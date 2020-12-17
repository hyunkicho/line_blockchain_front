<template>
    <div class="header">
        <ul>
            <li @click="leftClick(header.left.action)">
              <img :src="header.left.src" :style="{width: header.width}">
            </li>
            <li>
              <img :src="header.right.src" @click="rightClick(header.right.action)">
            </li>
        </ul>

        <!-- <ul>
            <li style="width:22px; padding-left:10px" @click="$router.go(-1)">
                <img src="@/assets/resources/backspace.svg" alt="Back">
            </li>
            <li>
              <img src="@/assets/resources/header_alram.svg" alt="noname">
            </li>
        </ul> -->
    </div>
</template>

<script>
import { Row, Col} from 'element-ui';
export default {
  props : ["header"],
  name: 'Header',
  components: {
    "v-row": Row,
    "v-col": Col,
  },
  data() {
    return {

    }
  },
  async created () {
  },
  methods: {
    leftClick(action) {
      switch (action) {
        case "index":
            this.$router.replace('/').catch(error => {
              if(error.name != "NavigationDuplicated" ){
                throw error;
              }
            });
          break;
        case "back":
            this.$router.go(-1)
          break;

        default:
            return
          break;
      }
    },
    rightClick(action) {
      switch (action) {
        case "close":
           this.$router.replace('/').catch(error => {
              if(error.name != "NavigationDuplicated" ){
                throw error;
              }
            });
          break;
        case "alram":
           this.$router.replace('/alram').catch(error => {
              if(error.name != "NavigationDuplicated" ){
                throw error;
              }
            });
          break;
        default:
            return
          break;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
