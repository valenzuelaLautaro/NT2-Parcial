<template>
  <div id="app" class="container-fluid mt-3">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {

}
</style>
