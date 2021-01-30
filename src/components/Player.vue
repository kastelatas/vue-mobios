<template>
  <div class="player"
       v-if="$store.state.positionFilter === 'All' || player.position === $store.state.positionFilter"
  >
    <img src="../assets/img/avatar.png" alt="avatar" class="player__avatar">
   <span class="player__text">Name: {{player.first_name}}</span>
   <span class="player__text">Last Name:{{player.last_name}}</span>
   <span class="player__text">Position: {{player.position}}</span>
    <router-link :to="'/player/'+player.id">More details</router-link>
  </div>
</template>

<script>
export default {
  name:'Player',
  props:{
    player:{
      type: Object,
      require: true
    }
  }
}
</script>