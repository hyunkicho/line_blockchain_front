<template>
<div class="login">
  <div class="login_wrap">
    <!-- <h1>NONAME</h1> -->
    <div class="loginTop">
      <img src="../assets/resources/blimit.svg" alt="Blimit">
      <p>로그인하고 다양한 혜택을 만나세요.</p>
    </div>

    <v-row :gutter="10">
        <v-col :span="24" :class="{focusOn : focusid}">
        <p>아이디</p>
        <div class="grid-content bg-purple" @click="foucsEvent('id')">
            <v-input ref="idRef" v-model="id" clearable prefix-icon="el-icon-user"></v-input>
        </div>
        </v-col>
    </v-row>
    
    <v-row :gutter="20">
        <v-col :span="24" :class="{focusOn : focuspw}">
          <p >패스워드</p>
          <div class="grid-content bg-purple" @click="foucsEvent('pw')">
              <v-input v-model="pw" type="password" clearable @keyup.enter.native="loginSubmit" prefix-icon="el-icon-user-solid"></v-input>
          </div>
        </v-col>
        <!-- <v-col :span="12">
        <div class="grid-content bg-purple">
            <v-input v-model="pw" clearable></v-input>
        </div>
        </v-col> -->
    </v-row>
    
    <v-row :gutter="20" style="float:right">
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
      focusid : true,
      focuspw : false,
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
  mounted() {
    this.$refs.idRef.focus()
  },
  methods: {
    loginSubmit() {
      if(this.id == "admin" && this.pw == 123){
        this.$router.replace("/")
        sessionStorage.setItem(this.id, this.pw);
      }else{
        msgBoxNo("아이디 또는 패스워드가 틀렸습니다.")
      }
    },

    foucsEvent(val) {
      if(val == 'id') { 
        this.focusid = true;
        this.focuspw = false;
      }else{
        this.focusid = false;
        this.focuspw = true;
      }
    }
  },
}
</script>

<style>
.login .el-input--prefix .el-input__inner {
  padding-left:55px;
}
.login .el-input__icon {
  position: relative;
  top:3px
}
.login .el-col p{
  position: relative;
  left: 10px;
}

.grid-content div input {
  height:50px;
}

.el-icon-user:before {
  content:url("../assets/resources/login_email.svg");
  position: relative;
  left:15px;
}
.el-icon-user-solid:before {
  content:url("../assets/resources/login_password.svg");
  position: relative;
  left:15px;
  top: 2px;
}
.focusOn .el-icon-user:before {
  content:url("../assets/resources/login_email_focus.svg");
  position: relative;
  left:15px;
}
.focusOn .el-icon-user-solid:before {
  content:url("../assets/resources/login_password_focus.svg");
  position: relative;
  left:15px;
  top: 2px;
}
</style>