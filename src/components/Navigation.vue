<template>
    <div>
    <v-navigation-drawer
    color="primary"
      v-model="drawer"
      app >
      <ul>
        <router-link tag="li" to="/"><v-icon color="orange">home</v-icon>Home</router-link>
        <router-link tag="li" to="/cars"><v-icon color="orange">directions_car</v-icon>Cars</router-link>
        <router-link tag="li" to="/about"><v-icon color="inprogress">info</v-icon>About</router-link>
        <router-link tag="li" to="/login"><v-icon color="inprogress">account_circle</v-icon>Login</router-link>
        <router-link tag="li" to="/admin"><v-icon color="inprogress">lock</v-icon>Admin</router-link>
      </ul>
    </v-navigation-drawer>
    <v-app-bar
      app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span>Car Shop</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        }),
    }
</script>

<style lang="scss" scoped>
  nav ul{
    padding: 0;
    margin-top: 20px;
    text-decoration: none;
  }
  nav li{
    //color: map-get($colorz , orange );
    margin-left: 15%;
    padding: 5px 20px;
    list-style-type: none;
    cursor: pointer;
    color: orange
  }

nav li i{
  margin-right: 10px;
}


nav li:last-child{
  position: absolute;
  bottom: 40px;
  //color: map-get($colorz , inprogress )
}
</style>