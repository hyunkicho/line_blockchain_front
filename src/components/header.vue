<template>
    <div class="header">
        <ul>
            <li>H1</li>
            <li>H2</li>
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
