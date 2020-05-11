<template>
  <div>
    <v-layout align-center>
      <v-flex sm12 xs12>
        <v-carousel  cycle 
          height="690px"
          hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.url"
            ></v-carousel-item>
        </v-carousel>
      </v-flex> 
    </v-layout>
    <v-container>
      <v-layout align-center class="pt-12">
        <v-flex sm12 xs12>
          <h1>Buy and rent cars</h1>
          <p>The perfect place to buy or/and rent a car when you need one</p>
        </v-flex> 
      </v-layout>
    </v-container>
    <div>
      <h3></h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  
  data () {
    return {
        items: [
          {
            url: require('@/assets/car_1.jpg'),
          },
          {
            url: require('@/assets/cmasccoches-en-avila.jpg'),
          },
          {
            url: require('@/assets/fondo-web.jpg'),
          },
        ],
    }
  },

  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
  h3:last-child{
    padding-bottom: 400px;
  }
</style>
