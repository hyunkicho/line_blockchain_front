<template>
<div class="login">
  <div class="login_wrap">
    <!-- <h1>NONAME</h1> -->
    <img src="../assets/logo.png" alt="">
    <v-row :gutter="10">
        <v-col :span="24">
        <p>아이디</p>
        <div class="grid-content bg-purple">
            <v-input v-model="id" clearable></v-input>
        </div>
        </v-col>
    </v-row>
    
    <v-row :gutter="20">
        <v-col :span="24">
        <p>패스워드</p>
        <div class="grid-content bg-purple">
            <v-input v-model="pw" type="password" clearable @keyup.enter.native="loginSubmit"></v-input>
        </div>
        </v-col>
        <!-- <v-col :span="12">
        <div class="grid-content bg-purple">
            <v-input v-model="pw" clearable></v-input>
        </div>
        </v-col> -->
    </v-row>
    
    <v-row :gutter="20">
        <v-col :span="3">
        <v-button v-if="loginBtnOn" type="primary" @click="loginSubmit">로그인</v-button>
        <v-button v-else type="info" @click="loginSubmit">로그인</v-button>
        </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
import { Row, Col, Input, Button, Form, FormItem } from 'element-ui';
import {request} from "@/assets/js/apps.js";
import {msgBoxNo} from "@/assets/js/api.js";

export default {
  name: 'Login',
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
      loginBtnOn : false,
      id : "",
      pw : ""
    }
  },
  watch: {
      pw : function (val) {
        val != "" ? this.loginBtnOn = true : this.loginBtnOn = false
      }
  },
  async created () {
    if(sessionStorage.length > 0){
      this.$router.replace("/")
    }
    // const { data } = await servlet.ajaxLogin("hello", data)
  },
  methods: {
    loginSubmit () {
      if(this.id == "admin" && this.pw == 123){
        this.$router.replace("/")
        sessionStorage.setItem(this.id, this.pw);
      }else{
        msgBoxNo("아이디 또는 패스워드가 틀렸습니다.")
      }
    },
  },
}
</script>