<template>
<v-container>
    <v-form
    ref="form"
    lazy-validation>
        <v-row>
            
            <v-col offset-md="3" md="6" xs="12">
                <h1>Add new car</h1>
                
                <div id="info">
                    
                    <v-text-field
                    v-model="nameCar"
                    label="Name"
                    :rules="nameRules"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="description"
                    label="Description"
                    :rules="descriptionRules"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="motor"
                    label="Motor"
                    :rules="motorRules"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="price"
                    label="Price"
                    type="number"
                    :rules="priceRules"
                    required>
                    </v-text-field>

                    <input type="file" @change="onFileSelected">
                </div>
            </v-col>
            <v-col offset-md="3"  xs="12">
                <v-btn
                color="complete"
                @click.prevent="onUpload()"
                >
                    Create car
                </v-btn>
            </v-col>
            
        </v-row>
        <div>
            <h3></h3>
        </div>
        </v-form>
    </v-container>
</template>

<script>
import axios from 'axios';
//import store from '../../store/index.js';

    export default {
        data() {
            
            
            return{
                nameCar:'',
                description:'',
                image:[],
                motor:'',
                price:'',
                nameRules: [
                v => !!v || 'Name is required',
                ],
                descriptionRules: [
                    v => !!v || 'Description is required',
                ],
                motorRules: [
                    v => !!v || 'Motor is required',
                ],
                priceRules: [
                    v => !!v || 'Price is required',
                ],
            }
        },
        created() {

        },
        methods:{
            onFileSelected(event){
                this.image=event.target.files[0];
            },
            onUpload(){
                console.log(this.image);
                    if(this.$refs.form.validate()==true && this.image!=null){
                    let formData = new FormData();
                    formData.append('image', this.image);
                    formData.append('nameCar', this.nameCar);
                    formData.append('description', this.description);
                    formData.append('motor', this.motor);
                    formData.append('price', this.price);
                    axios.post('https://carshopalejandro.000webhostapp.com/dbCreateCar.php',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                        ).then(function() {
                        alert('Car created')
                    });
                }
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