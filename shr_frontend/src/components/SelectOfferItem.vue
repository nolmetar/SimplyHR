<template>
  <div class="selectoffer-item">
    <div class="row mt-5">
      <div class="col">
        <p > {{ descOffer }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p> {{ challengeOffer }}</p>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col">
        <p> {{ skillOffer }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="h3" >Job start date : {{ dateOffer }}</p>
      </div>
      <div class="col">
        <p class="h3" >Contract type : {{ emploiOffer }}</p>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col">
        <textarea type="text" aria-label="note" class="form-control" required  placeholder="Covering letter"/>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
                   aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01">Upload your resume</label>
          </div>
        </div>
      </div>

      <div class="col">
        <button type="button" class="btn  btn-primary btn-block" @click="onCreateClick()">Send an application</button>
      </div>
    </div>



  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "SelectOfferItem",
  methods: {
    onCreateClick(){
      router.push('navigateOfferC')
    }
  },
  props: {
    descOffer: {
      type: String,
      required: true
    },
    challengeOffer: {
      type: String,
      required: true
    },
    skillOffer: {
      type: String,
      required: true
    },
    dateOffer: {
      type: String,
      required: true
    },
    emploiOffer: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>

</style>