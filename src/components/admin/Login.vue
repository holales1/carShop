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
                    Sign Out
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
                if(this.$store.getters.getUser==null || this.$store.getters.getUser.length==0){

                
                    axios.get('http://localhost/Progressive%20Web%20Development/DBCarShop/dbUserRead.php?email='+this.email+'&pass='+this.password)
                    .then(response => {
                        if(response.data.length==0){
                            alert("Wrong email/password")
                        }else{
                            store.dispatch('setUser',response.data);
                            if(response.data[0]['admin']=="0"){
                                this.$router.replace('/');
                            }else{
                                this.$router.replace('/admin');
                            }
                            
                        }
                        
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                }else{
                    alert("You are already log in");
                }
            },
            signOut(){
                if(this.$store.getters.getUser==null || this.$store.getters.getUser.length==0){
                    alert('You are not logged in right now')
                }else{
                    var user=null;
                    store.dispatch('setSignOutUser',user);
                    if(this.$store.getters.getUser==null){
                        alert('You have sign out')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#info{
    padding:20px; 
}
</style>