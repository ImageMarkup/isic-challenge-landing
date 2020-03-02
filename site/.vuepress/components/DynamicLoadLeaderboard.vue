<template>
  <component
    v-if="Leaderboard"
    :is="Leaderboard"
    :challenge-id="challengeId"
    :by-team-default="byTeamDefault"
    :default-tab="defaultTab"
  />
</template>

<script>
export default {
  name: "DynamicLoadLeaderboard",

  props: {
    challengeId: {
      type: String,
      required: true
    },
    byTeamDefault: {
      type: Boolean,
      default: false
    },
    defaultTab: {
      type: Number,
      default: undefined
    }
  },

  data() {
    return {
      Leaderboard: null
    };
  },

  async mounted() {
    const LeaderboardModule = await import(
      "@isic/challenge-leaderboard/src/components/Leaderboard.vue"
    );
    this.Leaderboard = LeaderboardModule.default;
  }
};
</script>
