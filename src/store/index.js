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
            src : require("@/assets/resources/slide_product1.png"),
            size : {
                "all" : "1,657,000",
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "300" : "1,655,000",
            }
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
            productId : 2,
            productName : "Jordan",
            tag : "jordan",
            productDesc : "Air Jordan 1 Retro High OG Turbo Green",
            productPrice : "623,000원",
            src : require("@/assets/resources/slide_product1.png"),
            size : {
                "all" : "1,657,000",
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "300" : "1,655,000",
            }
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
            src : require("@/assets/resources/main3_product1.png"),
            size : {
                "all" : "1,657,000",
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "300" : "1,655,000",
            }
        },
        {
            gubun : 'mostItem',
            productId : 1,
            productName : "Balenciaga",
            tag : "balenciaga",
            productDesc : "Balenciaga Track Sneakers Black",
            productPrice : "665,000원",
            src : require("@/assets/resources/main3_product2.png")
        },
        {
            gubun : 'mostItem',
            productId : 2,
            productName : "Rick Owens DRKSHDW",
            tag : "rick",
            productDesc : "Cargo Flight Boomer Jacket",
            productPrice : "1,657,000원",
            src : require("@/assets/resources/main3_product1.png"),

        },
        {
            gubun : 'mostItem',
            productId : 3,
            productName : "Balenciaga",
            tag : "balenciaga",
            productDesc : "Balenciaga Track Sneakers Black",
            productPrice : "665,000원",
            src : require("@/assets/resources/main3_product2.png")
        },
    ],
    size : [
        {
            gubun : 'mostItem',
            productId : 3,
            productName : "Balenciaga",
            tag : "balenciaga",
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
