<template>
<div class="productSizeWrap">
    <v-dialog
    title="Size"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <span>This is a message</span>
    <!-- <span slot="footer" class="dialog-footer">
        <v-button @click="dialogVisible = false">Cancel</v-button>
        <v-button type="primary" @click="dialogVisible = false">Confirm</v-button>
    </span> -->
    </v-dialog>
</div>
</template>



<script>
import { Dialog, Button } from 'element-ui';
export default {
//   props : ["products"],
  components: {
      "v-dialog": Dialog,
      "v-button": Button,
  },

  created() {
    //   this.listInit();
  },

  methods: {

  },

  data() {
    return {
       dialogVisible:false,
       
    };
  },

};
</script>



<style>
.productSizeWrap {
    height:100%;
    background:gray;
    transition: 2s;
}
</style>
