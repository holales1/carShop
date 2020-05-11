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

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="red accent-4" @click.prevent="deleteCar(car.id)" >
                        Delete
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-col>
        <v-col cols="12"
                md="4"
                sm="6">
            <v-flex >
                <v-card
                    class="px-auto"
                    max-width="400"
                >
                    <v-img
                    class="black--text align-end"
                    height="200px"
                    src="img/action_021-add-new-plus-increase-512.png"
                    >
                    </v-img>

                    <v-card-subtitle class="pb-0"></v-card-subtitle>

                    <v-card-text class="text--primary">

                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="green" >
                        <router-link to="/addNew">
                            Add new Car
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
            },
            deleteCar(id){
                axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbDeleteCar.php?id='+id)
                .then(response => {
                    store.dispatch('setCarsBuy',response.data);
                })
                .catch(error => {
                    console.log(error)
                })
            },
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