<template>
  <div class="container ">
    <MenuCandidate
      />
    <h1 class="mt-3">Job offers</h1>
    <div class="row">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">Manager, Corporate IT Helpdesk </h5>
              <p class="card-text">Create an inspiring team environment with an open culture of discussion and continuous improvement
                Set clear team goals and motivate team members
                Oversee/manage day-to-day operations
                Monitor team performance and enable the global team’s potential
                Discover training needs and provide coaching</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">IT Network Engineer</h5>
              <p class="card-text">Do you want beneficial technologies being shaped by your ideas? Whether in the areas of mobility solutions, consumer goods, industrial technology or energy and building technology - with us, you will have the chance to improve quality of life all across the globe. Welcome to Bosch.
                The Bosch Service Solutions Magdeburg GmbH is looking forward to your application!.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">IT Expert Customer Service Applications</h5>
              <p class="card-text">You will be responsible for the further development as well as the country rollouts of KWS' own Salesforce Commerce Cloud, as well as various direct ordering and B2B ordering solutions
                Furthermore, you will coordinate the development processes and contribute your own innovative ideas and suggestions to improve the projects
                You optimize the technical interfaces to other IT projects of the KWS Group (SAP ERP, myKWS, Digital Services, mobile applications, etc.)
                You manage external implementation partners to further develop the applications</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">IT Applications Service Manager</h5>
              <p class="card-text">The job holder is responsible for the seamless operation of our European IT Business Applications and Systems. The responsibility covers full service management of all applications and systems in this area including continuous service improvement and improvements. This position offers the opportunity to be the key responsible person for European IT Applications landscape. Based on the close collaboration with business peers, IT Business Relationship Managers, IT colleagues and other Service Managers within the team. Ability to identify requirements and needs and to transfer them into valuable solutions.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">IT Security Engineer</h5>
              <p class="card-text">Do you like to take over responsibility and your passion is IT Security? Join our Security Engineering Team as IT Security Engineer and help us further improve the overall security level of Germany's biggest mail and  cloud provider WEB.DE and GMX.more Do you have a multiple-year experience with IT Security and were you already able to deliver strategic improvements in complicated situations? * You understand the aspects of modern agile product development and you have hands-on experience with concepts and technologies like DevOps, CI/CD and Kubernetes.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card h-100" @click="onCreateClick()">
            <div class="card-body">
              <h5 class="card-title">GMX</h5>
              <p class="card-text">Do you like to take over responsibility and your passion is IT Security? Are you eager to drive strategic topics and solve complex security challenges? Are you curious and continuously improving your technical and security know-how? Then we're looking for you! Join our Security Engineering Team as IT Security Engineer and help us further improve the overall security level of Germany's biggest mail and cloud provider WEB.DE and GMX..</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Posted 3 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import MenuCandidate from "../components/MenuCandidate";
export default {
  name: "NavigateOfferC",
  components: {MenuCandidate},
  methods: {
    onCreateClick(){
      router.push('selectOffer')
    }
  }
}
</script>

<style scoped>

</style>