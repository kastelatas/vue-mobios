<template>
  <div class="container">
    <Loader v-if="$store.state.loader"/>
   <div v-else class="single-player">
     <h2 class="single-player__title">{{player.first_name && player.first_name}} </h2>
     <img src="../../assets/img/avatar.png" alt="avatar" class="single-player__img">
     <div class="single-player__block">
       <div class="single-player__row">
         <div class="single-player__about">
           <span>ID: {{player.id && player.id}}</span>
           <span>First Name: {{player.first_name && player.first_name}}</span>
           <span>Last Name: {{player.last_name && player.last_name}}</span>
           <span>Height feet: {{player.height_feet && player.height_feet}}</span>
           <span>Height inches: {{player.height_inches && player.height_inches}}</span>
           <span>Position: {{player.position && player.position}}</span>
           <span>Weight pounds: {{player.weight_pounds && player.weight_pounds}}</span>
         </div>
         <div class="single-player__team" >
            <span>Team ID: {{player.team.id && player.team.id}}</span>
            <span>Team abbreviation: {{player.team.abbreviation && player.team.abbreviation}}</span>
            <span>Team city: {{player.team.city && player.team.city}}</span>
            <span>Team conference: {{player.team.conference && player.team.conference}}</span>
            <span>Team division: {{player.team.division && player.team.division}}</span>
            <span>Team full name: {{player.team.full_name && player.team.full_name}}</span>
            <span>Team name:{{player.team.name && player.team.name}}</span>
         </div>
       </div>
     </div>
    <router-link to="/">  BACK </router-link>
   </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name:'OnePlayer',
  components:{
    Loader
  },
  data(){
    return{
      // player:[]
    }
  },
  computed:{
    player(){
      return this.$store.getters['getOnePlayer']
    }
  },
  async created() {
    await this.$store.dispatch('fetchOnePlayers', this.$route.params.id)
  }

}
</script>