<template>
  <div class="container">
    <div class="border p-4 m-5">
      <div class="row my-5">
        <div class="col">
          <form>
            <h2> Candidate Informations</h2>
            <div class="form-group">
              <div class="input-group my-5">
                <div class="input-group-prepend">
                  <span class="input-group-text">Email address</span>
                </div>
                <input type="text" aria-label="First name" class="form-control"
                       placeholder="name@example.com" required>
              </div>

              <div class="input-group my-5">
                <div class="input-group-prepend">
                  <span class="input-group-text ">First and last name</span>
                </div>
                <input type="text" aria-label="First name" class="form-control" required>
                <input type="text" aria-label="Last name" class="form-control" required>
              </div>

              <!-- phone-->
              <div class="input-group my-5">
                <div class="input-group-prepend">
                  <span class="input-group-text">Phone Number</span>
                </div>
                <input type="text" aria-label="First name" class="form-control" required>
              </div>

              <!-- language-->
              <div class="container">
                <div class="row my-5">
                  <div class="col-md-4 text-center">
                    <div class="dropdown">
                      <button class="btn btn-block btn-secondary dropdown-toggle" type="button"
                              id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false">
                        English Level
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Perfect</button>
                        <button class="dropdown-item" type="button">good</button>
                        <button class="dropdown-item" type="button">not bad</button>
                        <button class="dropdown-item" type="button">bad</button>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 text-center">
                    <div class="dropdown">
                      <button class="btn btn-block btn-secondary dropdown-toggle" type="button"
                              id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                        French Level
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Perfect</button>
                        <button class="dropdown-item" type="button">good</button>
                        <button class="dropdown-item" type="button">not bad</button>
                        <button class="dropdown-item" type="button">bad</button>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 text-center">
                    <div class="dropdown">
                      <button class="btn btn-block btn-secondary dropdown-toggle" type="button"
                              id="dropdownMenu3" data-toggle="dropdown" aria-expanded="false">
                        German Level
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Perfect</button>
                        <button class="dropdown-item" type="button">good</button>
                        <button class="dropdown-item" type="button">not bad</button>
                        <button class="dropdown-item" type="button">bad</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- finish language-->
              <div class="input-group my-5">
                <div class="input-group-prepend">
                  <span class="input-group-text">Job start date:</span>

                  <label for="start"></label>

                  <input type="date" id="start" name="trip-start"
                         value="2018-07-22"
                         min="2018-01-01" max="2050-12-31">
                </div>
              </div>
              <div class="container">
                <div class="row my-5">
                  <div class="col-md-4 text-center">
                    <div class="dropdown">
                      <button class="btn btn-block btn-secondary dropdown-toggle" type="button"
                              id="Menu1" data-toggle="dropdown" aria-expanded="false">
                        Contract type
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">CDI</button>
                        <button class="dropdown-item" type="button">CDD</button>
                        <button class="dropdown-item" type="button">Internship</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" @click="onCreateClick()">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import store from "@/store";
import router from "@/router";

export default {
  name: "CandidateInfo",

  data() {
    return{
      candiMail : "",
      firstname : "",
      lastname: "",
      phone: "",
      englishLevel: "",
      germanLevel: "",
      frenchLevel: "",
      date: "",
      contract: "",
    }
  },
  computed: {
    ...mapGetters({
      getMail: "getMail",
      getFirstname: "getFirstName"
    }),

  },
  methods: {
    ...mapActions(["updateUserFirstName", "updateUserMail", "updateUserLastName", "updateUserPhone", "updateUserEnglish", "updateUserFrench", "updateUserGerman", "updateUserDate", "updateUserContract"]),
      onCreateCandidate(){
        store.dispatch("updateUserMail", this.candiMail),
            store.dispatch("updateUserFirstName", this.firstname),
            store.dispatch("updateUserLastName", this.lastname),
            store.dispatch("updateUserPhone", this.phone),
            store.dispatch("updateUserEnglish", this.englishLevel),
            store.dispatch("updateUserFrench", this.frenchLevel),
            store.dispatch("updateUserGerman", this.germanLevel),
            store.dispatch("updateUserDate", this.date),
            store.dispatch("updateUserContract", this.contract),
            alert(store.getters.getFirstName)
        alert(store.getters.getMail)
      },
    onCreateClick(){
      router.push('navigateOfferC')
    }
  },

}
</script>

<style scoped>

</style>