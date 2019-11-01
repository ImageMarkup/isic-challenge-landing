<template>
  <component
    v-if="Leaderboard"
    :is="Leaderboard"
    :challenge-id="challengeId"
    :by-team-default="byTeamDefault"
  />
</template>

<script>
export default {
  name: 'DynamicLoadLeaderboard',

  props: {
    challengeId: {
      type: String,
      required: true,
    },
    byTeamDefault: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      Leaderboard: null
    }
  },

  async mounted () {
    const LeaderboardModule = await import('@isic/challenge-leaderboard/src/components/Leaderboard.vue');
    this.Leaderboard = LeaderboardModule.default;
  },
}
</script>
