<template>
<div class="wrap-slide">
    <figure v-for="item in datas" :key="item.id" @click="productClick(item)">
        <img :src="item.src">
        <figcaption>
            <dl>
                <dt>{{item.productName}}</dt>
                <dd>{{item.productDesc}}</dd>
                <dd>{{item.productPrice}}</dd>
            </dl>
        </figcaption>
    </figure>
</div>
</template>



<script>
export default {
  props : ["products"],
  components: {

  },

  created() {
      this.listInit();
  },

  methods: {
      listInit(){
        if(this.products == "newProduct") { 
            this.datas = this.$store.state.newItem;
        }else{
            this.datas = this.$store.state.mostItem;
        }
      },
      productClick(item){
          this.$router.push({path: '/productDetail', query : {product:item.tag, gubun:item.gubun}})
      }
  },

  data() {
    return {
        datas : [],
       
    };
  },

};
</script>



<style>

</style>
