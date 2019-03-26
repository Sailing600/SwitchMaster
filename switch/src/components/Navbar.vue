<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="black--text" @click="drawer =!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light">FRANCE 3 </span>
                <span>Gestion des switch et des prises réseaux</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span></span>
                <span>Version 1.0</span>
                <v-icon right>verified_user</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="blue darken-2">
           <v-list>
               <v-switch dark class="mx-3 mt-2 ml-5 font-weight-regular" v-model="godark" label="Dark Theme" color="success" value="success"></v-switch>
               <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                   <v-list-tile-action>
                       <v-icon medium class ="ml-5" color="white">{{link.icon}}</v-icon>
                   </v-list-tile-action>
               <v-list-tile-content>
                   <v-list-tile-title class="white--text ml-3">{{link.text}}</v-list-tile-title>
               </v-list-tile-content>
               </v-list-tile>
           </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Gestion des switch', route: '/' },
        { icon: 'map', text: 'Plan des prises', route: '/plan' },
        { icon: 'calendar_today', text: 'Planning', route: '/planning' }
      ]
    }
  }
}
</script>
