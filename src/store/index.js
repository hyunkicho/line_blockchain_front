import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newItem : [
        {
            gubun : 'newItem',
            productId : 0,
            productName : "Jordan",
            tag : "jordan",
            productDesc : "Air Jordan 1 Retro High OG Turbo Green",
            productPrice : "623,000원",
            src : require("@/assets/resources/slide_product1.png")
        },
        {
            gubun : 'newItem',
            productId : 1,
            productName : "Jacob Cohen",
            tag : "jacobcohen",
            productDesc : "Check pattern slim fit pants",
            productPrice : "410,000원",
            src : require("@/assets/resources/slide_product2.png")
        },
        {
            gubun : 'newItem',
            productId : 3,
            productName : "Jordan",
            tag : "jordan",
            productDesc : "Air Jordan 1 Retro High OG Turbo Green",
            productPrice : "623,000원",
            src : require("@/assets/resources/slide_product1.png")
        },
        {
            gubun : 'newItem',
            productId : 3,
            productName : "Jacob Cohen",
            tag : "jacobcohen",
            productDesc : "Check pattern slim fit pants",
            productPrice : "410,000원",
            src : require("@/assets/resources/slide_product2.png")
        },
    ],
    mostItem : [
        {
            gubun : 'mostItem',
            productId : 0,
            productName : "Rick Owens DRKSHDW",
            tag : "rick",
            productDesc : "Cargo Flight Boomer Jacket",
            productPrice : "1,657,000원",
            src : require("@/assets/resources/main3_product1.png")
        },
        {
            gubun : 'mostItem',
            productId : 1,
            productName : "Jacob Cohen",
            tag : "jacob",
            productDesc : "Balenciaga Track Sneakers Black",
            productPrice : "665,000원",
            src : require("@/assets/resources/main3_product2.png")
        },
        {
            gubun : 'mostItem',
            productId : 0,
            productName : "Rick Owens DRKSHDW",
            tag : "rick",
            productDesc : "Cargo Flight Boomer Jacket",
            productPrice : "1,657,000원",
            src : require("@/assets/resources/main3_product1.png")
        },
        {
            gubun : 'mostItem',
            productId : 1,
            productName : "Jacob Cohen",
            tag : "jacob",
            productDesc : "Balenciaga Track Sneakers Black",
            productPrice : "665,000원",
            src : require("@/assets/resources/main3_product2.png")
        },

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
