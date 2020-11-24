<template>
    <div class="header">
        <ul>
            <li>
              <img src="../assets/resources/noname.svg" alt="noname1">
            </li>
            <li>
              <img src="../assets/resources/header_alram.svg" alt="noname">
            </li>
            
        </ul>
    </div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
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
