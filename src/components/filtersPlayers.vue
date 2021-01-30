<template>
  <div class="filter">
    <select v-model="position" @change="onChange" class="filter__select">
      <option value="All" >Position All</option>
      <option value="C" >Position C</option>
      <option value="G">Position G</option>
      <option value="F">Position F</option>
      <option value="F-C">Position F-C</option>
      <option value="G-F">Position G-F</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'filtersPlayers',
  data() {
    return {
      position: ''
    }
  },
 methods:{
    onChange(){
      this.$emit('selectPosition', this.position)

    }
 }
}
</script>