<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                <h1>Administrator login</h1>
                <div id="info">
                    <v-text-field
                    v-model="email"
                    label="Email"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="password"
                    label="Password"
                    required>
                    </v-text-field>

                    <v-btn
                        color="complete"
                        @click.prevent="signIn()"
                    >
                    Login
                    </v-btn>

                    <v-btn
                        color="incomplete"
                        @click.prevent="signOut()"
                    >
                    SignOut
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import store from '../../store/index.js';

    export default {
        data(){
            return{
                email:'',
                password:'',
                
            }
        },
        methods:{
            signIn(){
                axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbUserRead.php?email='+this.email+'&pass='+this.password)
                .then(response => {
                    if(response.data.length==0){
                        alert("Wrong email/password")
                    }else{
                        store.dispatch('setUser',response.data);
                        this.$router.replace('/admin')
                    }
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },
            signOut(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>
#info{
    padding:20px; 
}
</style>