<template>
  <div class="container">
    <MenuRecruiter
      />
    <h1 class="mt-3">History</h1>
    <section class="menu">
      <CandidacyItem
          v-for="item in waitingCandidacy"
          :name-candidate="item.name"

          :pdf-candidate="item.pdf"
          :mail-candidate="item.mail"
          :phone-candidate="item.phone"
          :key="item.name"
      />
    </section>
  </div>
</template>

<script>
import CandidacyItem from "../components/CandidacyItem";
import {mapGetters, mapState} from "vuex";
import MenuRecruiter from "../components/MenuRecruiter";


export default {
  name: "CandidateHistory",
  components: {CandidacyItem, MenuRecruiter},

  computed: {
    ...mapGetters({

    }),
    ...mapState({
      waitingCandidacy: 'waitingCandidacy'
    })
  }

}
</script>

<style scoped>

</style>