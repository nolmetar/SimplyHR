<template>
<div class = "navigate-offer-r-item">
  <div class="row">
    <div class="col">
      <p class="h5 text-center"><strong>{{ nameOffer }} </strong></p>
    </div>
    <div class="col">
      <p class="h5 text-center">{{ numberOffer }}</p>
    </div>
    <div class="col">
      <p class="h5 text-center">{{ beginOffer }}</p>
    </div>
    <div class="col ">
      <p class="h5 text-center">{{ endOffer }}</p>
    </div>
    <div class="col ">
      <p class="h5 text-center">{{ statutOffer }}</p>
    </div>
  </div>

  <div class="row mb-5">
    <div class="col">
      <button type="button" class="btn btn-primary btn-block"  @click="onCreateClickA()" >Pending offers</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-primary btn-block"  @click="onCreateClickB()" >Applications history</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-primary btn-block"  @click="onCreateClickC()" >Modify current offer</button>
    </div>
  </div>
  <hr>
</div>
</template>

<script>
import router from "@/router";
export default {
  name: "NavigateOfferRItem",
  methods: {
    onCreateClickA(){
      router.push('viewCVs')
    },
    onCreateClickB(){
      router.push('candidateHistory')
    },
    onCreateClickC(){
      router.push('createOffer')
    }
  },
  props: {
    nameOffer: {
      type: String,
      required: true
    },
    numberOffer: {
      type: String,
      required: true
    },
    beginOffer: {
      type: String,
      required: true
    },
    endOffer: {
      type: String,
      required: true
    },
    statutOffer: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>