<template>
  <div class="cv-item">
    <div class="row">
      <div class="col">
        <p class="h2">{{ nameCandidate }}</p>
      </div>
      <div class="col">
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary btn-block" @click="onCreateClickH()">History</button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <embed src=http://www.africau.edu/images/default/sample.pdf width=800 height=500 type='application/pdf'/>
      </div>
    </div>

    <div class="row ml-0 mr-0">
      <div class="col border">

          <p class="h5">{{ mailCandidate }}</p>

      </div>
      <div class="col border">

          <p class="h5">{{ phoneCandidate }}</p>

      </div>
      <div class="col border">

          <a class="h5" href="http://www.africau.edu/images/default/sample.pdf">URL pdf</a>

      </div>
    </div>

    <div class="row mb-3 mt-3 ">
      <div class="col ">

          <textarea type="text" aria-label="note" class="form-control" required  />

      </div>

    </div>

    <div class="row mb-5">
      <div class="col">
        <button type="button" class="btn btn-success btn-block" @click="onCreateClickV()" >Valider</button>
      </div>

      <div class="col">
        <button type="button" class="btn btn-danger  btn-block" @click="onCreateClickR()" >Refuser</button>
      </div>
    </div>

    <hr>

  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "CVItem",
  methods : {
    onCreateClickH(){
      router.push('candidateHistory')
    },
    onCreateClickV(){
      alert("That's a yes!")
    },
    onCreateClickR(){
      alert("That's a no.")
    }
  },
  props: {
    nameCandidate: {
      type: String,
          required: true
    },
    mailCandidate: {
      type: Number,
          required: true
    },
    phoneCandidate: {
      type: String,
          required: true
    },
    pdfCandidate: {
      type: String,
          required: true
    }
  }
}
</script>

<style scoped>

</style>