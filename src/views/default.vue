<template>
  <div class="container">
   <div class="row">
     <Search/>
     <Select @selectPosition="selectPosition" />
   </div>

    <Loader v-if="$store.state.loader"/>

    <PlayerList :players="players"  v-else-if="!$store.state.loader && players.length" />

    <p v-else class="no-results">No Results</p>

    <button @click="more" class="load-btn">Load more</button>
  </div>
</template>

<script>
import PlayerList from "@/components/PlayerList";
import Search from '@/components/search'
import Select from '@/components/filtersPlayers'
import Loader from "@/components/Loader";

export default {
  name: 'default',
  components:{
    PlayerList,
    Search,
    Select,
    Loader
  },
  data(){
    return {
      page:1
    }
  },
  methods:{
    async more(){
      this.page +=1
      await this.$store.dispatch('fetchNextPage', this.page)
    },
    selectPosition(position){

    this.$store.commit('searchPlayersPosition', position)
    }
  },
  computed:{
    players(){
      return this.$store.state.players
    }
  },
 async  created() {
   await  this.$store.dispatch('fetchAllPlayers')
   // this.players = this.$store.getters['getAllPlayers']
  }
}
</script>








