<template>
  <div class="container mt-5">
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Create an account</h3>
          </div>
          <div class="panel-body">
            <form role="form">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" v-model = "firstname" >
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" v-model = "lastname">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" v-model = "mail">
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password" v-model = "password">
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password" v-model = "confirmPassWord">
                  </div>
                </div>
              </div>
              <input type="submit" value="Register" class="btn btn-info btn-block" style="background: #007bff"  @click = "onCreateClick()">
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import {signup} from "../services/auth.service";
import router from "@/router";
import { mapGetters} from "vuex";
//import store from "@/store";

export default {
  name: "SignUp",
  data() {
    return{
      firstname: "",
      lastname : "",
      mail : "",
      password : "",
      confirmPassWord : "",
    }
  },

  computed: {
    ...mapGetters({
      getMail: "getMail"
    }),
  },
  methods: {
    signup,
    onCreateClick(){
      //alert(store.getters.getMail),
      //signup(this.firstname, this.lastname, this.mail, this.password, this.confirmPassWord)
      router.push('login')
    }
  }
}
</script>

<style scoped>

</style>