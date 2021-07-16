<template>
  <div id="app">
  <div class="container justify-content-center ">
    <h2>Short Link</h2>
    <div class="row justify-content-center">
      <div class="col-12 bg-light box">
        <h3>Link Shorter</h3>

        <div>
        <span>Enter a Link:</span>
          <input type="text" placeholder="example.com" v-model="linkInput">
          <button type="button" class="btn btn-primary" @click="getShortLink">check</button>
          </div>

          <div>
              <span>Short domain:</span>
              <button type="button" class="btn btn-primary" @click="changeOption(1)" >Shrtco.de</button>
              <button type="button" class="btn btn-primary" @click="changeOption(2)">9qr.de</button>
              <button type="button" class="btn btn-primary" @click="changeOption(3)">shiny.link</button>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid deserunt illo eveniet assumenda, tenetur impedit ipsam voluptates modi dolorem praesentium sit suscipit in hic asperiores non consequatur officia quis.</p>
          </div>
      </div>

      <div class="col-8 bg-light box justify-content-center" v-if="statusLink">
        <h3>Link shorted</h3>
         <a class="link" v-if="linkOption == 1" :href="shortLink.result.short_link"> {{shortLink.result.short_link}} </a> 
        <a class="link" v-if="linkOption == 2" :href="shortLink.result.short_link2"> {{shortLink.result.short_link2}} </a>
        <a class="link" v-if="linkOption == 3" :href="shortLink.result.short_link3"> {{shortLink.result.short_link3}} </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      linkOption:1,
      linkInput:"",
      // shortLink:{result:{
      //   short_link:"",
      //   short_link2:"",
      //   short_link3:""
      // }},
      status: false
    }
  },
  computed:{
   shortLink () {
     return this.$store.state.link
   },
   statusLink() {
     return this.$store.state.status
   },
   
  },
  methods:{
    async getShortLink(){
      await this.$store.dispatch(`getLink`,this.linkInput)
      // this.shortLink =  this.$store.state.link;
      this.status = true
      console.log(this.shortLink);
    },
     changeOption (option){
     this.linkOption = option
   }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  background-color: rgba(14, 12, 12, 0.8);
  height: 100vh;
}

h2 {
  color:azure
}

.box{
  border-radius: 20px;
  margin: 10px;
  line-height: 1.25rem;
  padding: 20px;
}

.box input, .box .btn {
  border-radius: 5px;
  margin: 10px;
}

.link{
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
}
</style>
