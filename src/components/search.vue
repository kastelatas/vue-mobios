<template>
  <div class="search">
    <input v-model="searchText" placeholder="Search" @input="searchPlayers" class="search__input" />
  </div>
</template>

<script>
export default {
  name:'search',
  data(){
    return {
      searchText:''
    }
  },
  methods:{
    async searchPlayers(){
      await this.$store.dispatch('fetchSearchPlayers', this.searchText);
    }
  }
}
</script>