<template>
<v-container > 
    <v-layout align-center row wrap>
        <v-col v-for="(car , index) in carsBuy" :key="index"
        cols="12"
          md="4"
          sm="6"
          >
            <v-flex >
                <v-card
                    class="px-auto"
                    max-width="400"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="getProfilePhoto(car)"
                    >
                    <v-card-title>{{car.name}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">{{car.motor}}</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{car.description}}</div>

                    </v-card-text>

                    <v-card-actions>

                    <v-btn color="orange" >
                        {{ car.price }} kr
                    </v-btn>

                    <v-btn color="orange" >
                        <router-link v-bind:to="{name:'car',params:{
                                        id:car.id,
                                        }}">
                            Explore
                        </router-link>
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-col>
    </v-layout>
    <div>
      <h3></h3>
    </div>
</v-container>
</template>

<script>
import axios from 'axios';
import store from '../store/index.js';

    export default {
        data() {
            return{
                car:'',
                /*carsBuy:{

                }*/
            }
        },
        created() {
            axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbCar.php')
            .then(response => {
                store.dispatch('setCarsBuy',response.data);
            })
            .catch(error => {
                console.log(error)
            })
        },
        methods:{
            getProfilePhoto(car){
                return "img/"+car.image;
            }
        },
        computed:{
            carsBuy(){
                return this.$store.getters.getCarsBuy;
                
            }
        }
    }
</script>

<style lang="scss" scoped>
  h3:last-child{
    padding-bottom: 400px;
  }

</style>