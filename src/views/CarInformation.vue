<template>
<v-container >
    <div v-for="(ca , index) in car" :key="index">
        <v-card
            class="mx-auto"
            max-width="600"
        >
        
            <v-img :src="getProfilePhoto(ca)" height="400px"></v-img>
            
            <v-card-title>
            {{ car.name }}
            </v-card-title>

            <v-card-subtitle>
            {{ car.motor }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn text>Motor:{{ca.motor}}</v-btn>

                <v-btn color="purple" text>
                    Buy
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    {{ ca.description }}
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
        <div>
            <h3></h3>
        </div>
     </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store/index.js';
    export default {
        data(){
            //var car=this.$route.params
            return{
                show:false,
                /*car:{
                    id:car.id,
                    name:car.name,
                    image:car.image,
                    description:car.description,
                    price:car.motor,
                }*/
                
            }
        },
        created() {
            var url=window.location.href;
            var id=url.split("car/")
            axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbCarRead.php?id='+id[1])
            .then(response => {
                store.dispatch('setCarBuy',response.data);
            })
            .catch(error => {
                console.log(error)
            })
        },
        methods:{
            getProfilePhoto(car){
                console.log(car.image);
                return "/img/"+car.image;
            },

        },
        computed:{
            car(){
                return this.$store.getters.getCarBuy;
            }
        }
    }
</script>

<style lang="scss" scoped>
  h3:last-child{
    padding-bottom: 300px;
  }
</style>

