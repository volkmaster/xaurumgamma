<style lang="less">
@import '../main';
</style>

<style lang="less" scoped>
@import (reference) '../main';

.wrapper {
  & when (@debug = true) { border: 1px solid black; }

  width  : 100vw;
  height : 100vh;
}
</style>

<template>
  <div class="wrapper">
    <nav-header
      @change-page="changePage">
    </nav-header>
    <home
      v-if="currentPage === 'home'">
    </home>
    <project-overview
      v-else-if="currentPage === 'project overview'">
    </project-overview>
    <gamma-ico
      v-else-if="currentPage === 'gamma ico'">
    </gamma-ico>
    <gamma-surveillance
      v-else-if="currentPage === 'gamma surveillance'">
    </gamma-surveillance>
    <real-time-economy
      v-else-if="currentPage === 'real time economy'">
    </real-time-economy>
    <team
      v-else-if="currentPage === 'team'">
    </team>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import Home from '../components/Home.vue'
import ProjectOverview from '../components/ProjectOverview.vue'
import GammaIco from '../components/GammaIco.vue'
import GammaSurveillance from '../components/GammaSurveillance.vue'
import RealTimeEconomy from '../components/RealTimeEconomy.vue'
import Team from '../components/Team.vue'

export default {
  data () {
    return {
      currentPage: 'home'
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {})
  },
  computed: {},
  methods: {
    changePage (navItemLabel) {
      console.log(navItemLabel)
      this.currentPage = navItemLabel
    }
  },
  components: {
    navHeader: NavHeader,
    home: Home,
    projectOverview: ProjectOverview,
    gammaIco: GammaIco,
    gammaSurveillance: GammaSurveillance,
    realTimeEconomy: RealTimeEconomy,
    team: Team
  }
}
</script>
