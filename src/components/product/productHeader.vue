<template>
    <div class="header">
        <ul>
            <li style="width:22px; padding-left:10px" @click="$router.go(-1)">
                <img src="@/assets/resources/backspace.svg" alt="Back">
            </li>
            <li>
              <img src="@/assets/resources/header_alram.svg" alt="noname">
            </li>
            
        </ul>
    </div>
</template>

<script>
import { Row, Col} from 'element-ui';
export default {
  name: 'Header',
  components: {
    "v-row": Row,
    "v-col": Col,
  },
  props: {
    // msg: String
  },
  data() {
    return {

    }
  },
  async created () {

  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
