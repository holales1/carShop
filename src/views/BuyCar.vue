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

                    <v-img :src="getProfilePhoto(car)" height="50%"></v-img>

                     <v-btn
                     class="mt-4"
                    color="green"
                        @click.prevent="addOrder()"
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
            this.UserID=this.user.UserID;

            this.car=this.$store.getters.getCarBuy[0];
            this.Carname=this.car.name;
            this.price=this.car.price;
            this.carId=this.car.id;
        },
        methods:{
            getProfilePhoto(car){
                return "https://carshopalejandro.000webhostapp.com/img/"+car.image;
            },
            addOrder(){
                let formData = new FormData();
                formData.append('userID', this.UserID);
                formData.append('carID', this.carId);
                axios.post('https://carshopalejandro.000webhostapp.com/dbaddOrder.php',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(function() {
                        alert('Order added');
                });
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