<template>
  <div class="candidacy-item">
    <div class="row">
      <div class="col">
        <p class="h2">{{ nameCandidate }}</p>
      </div>
      <div class="col-sm">
      </div>
      <div class="col-sm">
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

    <div class="row mb-5 mt-3 mr-0 ml-0">
      <div class="col border">
          <p class="h5">Perfect resume !</p>
      </div>

    </div>

    <hr>

  </div>



</template>

<script>
export default {
  name: "CandidacyItem",

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
  },

}
</script>

<style scoped>

</style>