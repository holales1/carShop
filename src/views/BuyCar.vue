<template>
    <v-container>
        <v-row>
            <v-col  md="6" xs="12">
                <h1>User information</h1>
                <div id="info">
                    <v-text-field
                    v-model="name"
                    label="Name"
                    required
                    readonly>
                    </v-text-field>

                    <v-text-field
                    v-model="email"
                    label="Email"
                    readonly
                    required>
                    </v-text-field>
                </div>
            </v-col>

            <v-col  md="6" xs="12">
                <h1>Car information</h1>
                <div id="info">
                    <v-text-field
                    v-model="Carname"
                    label="Name"
                    required
                    readonly>
                    </v-text-field>

                    <v-text-field
                    v-model="price"
                    label="Price"
                    readonly
                    required>
                    </v-text-field>

                    <v-img :src="getProfilePhoto(car)" height="200px"></v-img>

                     <v-btn
                     class="mt-4"
                    color="green"
                        @click.prevent=""
                    >
                    
                    Buy
                    </v-btn>
                </div>
            </v-col>
        </v-row>
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
                carId:'',
                name:'',
                email:'',
                user:{},
                car:{},
                Carname:'',
                price:'',
                UserID:''
            }
        },
        created() {
            this.user=this.$store.getters.getUser[0];
            this.name=this.user.Name;
            this.email=this.user.email;
            this.UserID=this.user.userID;
   
            this.car=this.$store.getters.getCarBuy[0];
            this.Carname=this.car.name;
            this.price=this.car.price;
            this.carId=this.car.id;



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
                return "/img/"+car.image;
            },
            get(){
                console.log(this.$store.getters.getUser[0]);
                console.log(this.$store.getters.getCarBuy[0]);
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>
  h3:last-child{
    padding-bottom: 400px;
  }

</style>