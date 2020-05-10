<template>
  <div class="about">
    <v-row>
      <v-col offset-md="1" md="6" xs="12">
        <div>
          <h1>Car Shop</h1>
        </div>
        <div>
          <p>We have really good cars</p>
        </div>
        <div>
          <h1>Telephone number</h1>
        </div>
        <div><p>+4566666666</p></div>
      </v-col>
      <v-col  md="4" xs="12">
        <GoogleMap/>
      </v-col>
    </v-row>
    <div>
      <h3></h3>
    </div>
  </div>
  
</template>

<script>
import GoogleMap from "../components/GoogleMap";
export default {
  data(){
    return{
                
     }
  },
  components: {
    GoogleMap
  }
}
</script>



<style lang="scss" scoped>
#map {
   width: 50%;
   height: 400px;
   background-color: grey;
 }

 h3:last-child{
    padding-bottom: 300px;
  }
 </style>