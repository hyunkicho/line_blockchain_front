<template>
    <div class="footer">
        footer
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
