<template>
  <v-app id="app">
    <Navigation/>
    <v-content>
      <router-view></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Navigation,
      Footer
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss" scoped>
  
</style>
