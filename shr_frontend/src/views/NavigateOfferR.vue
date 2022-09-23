<template>
  <div class="container">
    <MenuRecruiter
      />
    <h1 class="mt-3">Offers</h1>
    <section class="menu">
      <NavigateOfferRItem
          v-for="item in listOffers"
          :name-offer="item.name"
          :number-offer="item.nombre"
          :begin-offer="item.datedebut"
          :end-offer="item.datefin"
          :statut-offer="item.statut"
          :key="item.name"
      />
    </section>
  </div>
</template>

<script>
import NavigateOfferRItem from "../components/NavigateOfferRItem";
import MenuRecruiter from "../components/MenuRecruiter";
import {mapGetters, mapState} from "vuex";

export default {
  name: "NavigateOfferR",
  components: {NavigateOfferRItem, MenuRecruiter},

  computed: {
    ...mapGetters({

    }),
    ...mapState({
      listOffers: 'listOffers'
    })
  }

}
</script>

<style scoped>

</style>