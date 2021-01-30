<template>
  <div class="player-list">
    <Player
        v-for="player in players"
        :key="player.id"
        :player="player"
    />
  </div>
</template>

<script>
import Player from "@/components/Player";

export default {
  name: 'Playerlist',
  components: {
    Player
  },
  props: {
    players: {
      type: Array,
      require: true
    }
  }
}
</script>