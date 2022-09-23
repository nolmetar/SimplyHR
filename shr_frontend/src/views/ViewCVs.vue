<template>
    <div class="container">
      <MenuRecruiter
      />
      <h1>Pending Applications list</h1>
      <section class="menu">
        <CVItem
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
import CVItem from "../components/CVItem";
import MenuRecruiter from "../components/MenuRecruiter"
import {mapGetters, mapState} from "vuex";


export default {
  name: "ViewCVs",
  components: {CVItem, MenuRecruiter},

  computed: {
    ...mapGetters({}),
    ...mapState({
      waitingCandidacy: 'waitingCandidacy'
    })
  }

}
</script>

<style scoped>

</style>