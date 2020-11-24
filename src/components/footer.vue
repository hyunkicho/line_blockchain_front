<template>
    <div class="footer">
        <ul>
          <li>
            <img src="../assets/resources/footer_home-24px.svg" alt="">
          </li>
          <li>
            <img src="../assets/resources/footer_view_list-24px.svg" alt="">
          </li>
          <li>
            <img src="../assets/resources/footer_search-24px.svg" alt="">
          </li>
          <li>
            <img src="../assets/resources/footer_person-24px.svg" alt="">
          </li>

          
        </ul>
    </div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
export default {
  name: 'Footer',
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
  data() {
    return {
      // episodes: [{
      //   thumbnail: 'http://thumbnail1.jpg',
      //   description: 'Episode 1'
      // },{
      //   thumbnail: 'http://thumbnail2.jpg',
      //   description: 'Episode 2'
      // },{
      //   thumbnail: 'http://thumbnail3.jpg',
      //   description: 'Episode 3'
      // }]
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
