import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_id : null,
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
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,757,000",
                "300" : "1,857,000",
            }
        },

        {
            gubun : 'newItem',
            productId : 1,
            productName : "New Balance",
            tag : "newbalance",
            productDesc : "New Balance 327 White Moonbeam",
            productPrice : "188,000원",
            src : require("@/assets/resources/slide_product3.png"),
            size : {
                "250" : "188,000",
                "255" : "198,000",
                "260" : "208,000",
                "265" : "218,000",
                "270" : "228,000",
                "275" : "298,000",
                "280" : "298,000",
                "285" : "308,000",
                "290" : "318,000",
                "295" : "328,000",
                "300" : "338,000",
            }
        },
        {
            gubun : 'newItem',
            productId : 2,
            productName : "Converse",
            tag : "converse",
            productDesc : "Feng Chen Wang x Chuck 70 Ivory Black",
            productPrice : "210,000원",
            src : require("@/assets/resources/slide_product4.png"),
            size : {
                "250" : "210,000",
                "255" : "220,000",
                "260" : "225,000",
                "265" : "230,000",
                "270" : "232,000",
                "275" : "237,000",
                "280" : "235,000",
                "285" : "239,000",
                "290" : "240,000",
                "295" : "242,000",
                "300" : "240,000",
            }
        },
        {
            gubun : 'newItem',
            productId : 3,
            productName : "Jacob Cohen",
            tag : "jacobcohen",
            productDesc : "Check pattern slim fit pants",
            productPrice : "410,000원",
            src : require("@/assets/resources/slide_product2.png"),
            size : {
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,727,000",
                "300" : "1,655,000",
            }
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
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,655,000",
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
            src : require("@/assets/resources/main3_product2.png"),
            size : {
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,727,000",
                "300" : "1,655,000",
            }
        },
        {
            gubun : 'mostItem',
            productId : 2,
            productName : "Rick Owens DRKSHDW",
            tag : "rick",
            productDesc : "Cargo Flight Boomer Jacket",
            productPrice : "1,657,000원",
            src : require("@/assets/resources/main3_product1.png"),
            size : {
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,727,000",
                "300" : "1,655,000",
            }

        },
        {
            gubun : 'mostItem',
            productId : 3,
            productName : "Balenciaga",
            tag : "balenciaga",
            productDesc : "Balenciaga Track Sneakers Black",
            productPrice : "665,000원",
            src : require("@/assets/resources/main3_product2.png"),
            size : {
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,727,000",
                "300" : "1,655,000",
            }
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
            src : require("@/assets/resources/main3_product2.png"),
            size : {
                "250" : "1,622,000",
                "255" : "1,667,000",
                "260" : "1,729,000",
                "265" : "1,687,000",
                "270" : "1,637,000",
                "275" : "1,617,000",
                "280" : "1,697,000",
                "285" : "1,627,000",
                "290" : "1,727,000",
                "295" : "1,727,000",
                "300" : "1,655,000",
            }
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
