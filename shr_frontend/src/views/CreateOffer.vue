<template>
  <div class="container">
    <MenuRecruiter
      />
    <div class="border p-4 m-2">
      <div class="row my-5">
        <div class="col">
          <form>
            <h2> Create Offer</h2>
            <div class="form-group">
              <div class="input-group my-5 ">
                <div class="input-group-prepend">
                  <span class="input-group-text">Title</span>
                </div>
                <input type="text" aria-label="title" class="form-control" required>
                <div class="container">
                  <div class="row my-5">
                    <div class="col">
                      <div class="mb-2">
                        <div class="input-group">
                          <div class="input-group-prepend">
                                                    <span class="input-group-text"
                                                          for="validationTextarea">Description</span>
                          </div>
                          <textarea class="form-control" aria-label="With textarea"
                                    id="validationTextarea1" placeholder=""
                                    required></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="row ">
                    <div class="col">
                      <div class="mb-2">
                        <div class="input-group">
                          <div class="input-group-prepend">
                                                        <span class="input-group-text"
                                                              for="validationTextarea">Skills</span>
                          </div>
                          <textarea class="form-control" aria-label="With textarea"
                                    id="validationTextarea" placeholder=""
                                    required></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-2">
                        <div class="input-group">
                          <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                      for="validationTextarea">Challenges</span>
                          </div>
                          <textarea class="form-control"
                                    aria-label="With textarea"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                    <div class="col-md-4 text-center">
                      <div class="dropdown">
                        <button class="btn btn-block btn-secondary dropdown-toggle" type="button"
                                id="Menu2" data-toggle="dropdown" aria-expanded="false">
                          Status
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <button class="dropdown-item" type="button" @click="onCreateClick()">Draft</button>
                          <button class="dropdown-item" type="button" @click="onCreateClick()">Published</button>
                          <button class="dropdown-item" type="button" @click="onCreateClick()">Unpublished</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import MenuRecruiter from "../components/MenuRecruiter";

export default {
  name: "CreateOffer",
  components : {
    MenuRecruiter
  },
  methods: {
    onCreateClick(){
      router.push('navigateOfferR')
    }
  }
}
</script>

<style scoped>

</style>