<template>
  <div class="container">
    <MenuCandidate
    />
    <h1 class="mt-2">Web app developer</h1>
    <section class="menu">
      <SelectOfferItem
          v-for="item in offerSelected"
          :desc-offer="item.desc"

          :challenge-offer="item.challenges"
          :skill-offer="item.skills"
          :date-offer="item.date"
          :emploi-offer="item.emploi"
          :key="item.name"
      />
    </section>
  </div>
</template>

<script>
import SelectOfferItem from "@/components/SelectOfferItem";
import {mapGetters, mapState} from "vuex";
import MenuCandidate from "../components/MenuCandidate";
export default {
  name: "selectOffer",
  components: {SelectOfferItem, MenuCandidate},

  computed: {
    ...mapGetters({

    }),
    ...mapState({
      offerSelected: 'offerSelected'
    })
  }
}
</script>

<style scoped>

</style>