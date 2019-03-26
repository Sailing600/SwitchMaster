<template>
  <div class="home">
  <h1 class="ml-5 mt-5">Gestion des switch</h1>

<v-container class="my-5">
 <v-layout row>
     <v-flex>
    <v-layout align-center justify-center row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="blue darken-1" dark v-on="on"><span>Ajouter un switch</span><v-icon class="ml-2">add_circle</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline font-weight-light">Ajout d'un nouveau switch</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Nom du switch*" required><span class="red--text">*</span></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select :items="['8', '12', '24', '48']" label="Nombre de ports" required><span class="red--text">*</span></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select :items="['Burautique', 'iMedia', 'Process']" label="Categorie" required ><span class="red--text">*</span></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="ml-4 red--text">*indicateur des champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="blue darken-1" dark v-on="on"><span>Modifier un switch</span><v-icon class="ml-2">create</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline font-weight-light">Modification un switch</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
               <v-select
                  :items="['111-1', '111-2', '111-3', '111-4']"
                  label="Nom du switch"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['8', '12', '24', '48']"
                  label="Nombre de ports"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['Burautique', 'iMedia', 'Process']"
                  label="Categorie"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="ml-4 red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
        <!-- <v-btn flat class="mb-5 ml-0" color="black">
          <download-excel :data   = "json_data">
             <span>Export data to excel</span>
             <v-icon class="ml-1 mt-0">exit_to_app</v-icon>
          </download-excel>
        </v-btn>-->
        <h2>Burautique / Serveur</h2><br><br>

    <h3 class="font-weight-light">NPXNANT111-1 (CISCO 2539)<br>( Baie i2 Rack 16 )</h3><br>

    <table>
  <tr>
    <th>Port 1<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 3<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 5<br><br><div class="circle2"></div></th>
    <th>Port 7<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 9<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 11<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 13<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 15<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 17<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 19<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 21<br>eeeeeee<br><div class="circle2"></div></th>
    <th>Port 23<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 25<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 27<br>eeeeeee<br><div class="circle2"></div></th>
    <th style="background-color:#9542f4">Port 29<br><br><div class="circle2"></div></th>
    <th>Port 31<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 33<br>eeeeeee<br><div class="circle2"></div></th>
    <th style="background-color:#ea7100">Port 35<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 37<br>2.34.22<br><div class="circle"></div></th>
    <th style="background-color:#b70000">Port 39<br>2.34.22<br><div class="circle"></div></th>
    <th style="background-color:#b70000">Port 41<br>2.34.22<br><div class="circle"></div></th>
    <th style="background-color:#b70000">Port 43<br>2.34.22<br><div class="circle"></div></th>
    <th style="background-color:#b70000">Port 45<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 47<br>2.34.22<br><div class="circle"></div></th>
  </tr>
  <tr>
    <th>Port 2<br><br><div class="circle2"></div></th>
    <th>Port 4<br><br><div class="circle2"></div></th>
    <th>Port 6<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 8<br><br><div class="circle2"></div></th>
    <th>Port 10<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 12<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 14<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 16<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 18<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 20<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 22<br><br><div class="circle2"></div></th>
    <th>Port 24<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 26<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 28<br><br><div class="circle2"></div></th>
    <th>Port 30<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 32<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 34<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 36<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 38<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 40<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 42<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 44<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 46<br>2.34.22<br><div class="circle"></div></th>
    <th>Port 48<br>2.34.22<br><div class="circle"></div></th>
  </tr>
</table>

<h2>iMedia</h2><br><br>

     </v-flex>
 </v-layout>

 <v-layout>
   <!-- test de la connexion bdd -->

   <table border='1' width='80%' style='border-collapse: collapse;'>
    <tr>
      <th>Port</th>
    </tr>
   <th v-for="truc in test" :key="truc">
      <td :key="truc.Port"></td>
      <td :key="truc.Infos"></td>
    </th>
  </table>

  <!-- FIN test de la connexion bdd -->

 </v-layout>
 </v-container>
 </div>
</template>

<!-- Using CSS modules -->
<style module>

table{

  border: 4px solid rgb(59, 58, 58);
  border-radius: 2px;
}
th{

  margin: 0px;
  border: 3px solid rgb(59, 58, 58);
  border-radius: 2px;
}

th :hover{

  background-color: aqua;
}
</style>

<script>
import downloadexcel from 'vue-json-excel'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    downloadexcel
  },
  data () {
    return {
      json_fields: {
        'Complete name': 'name',
        Date: 'date'
      }
    }
  }, // data
  methods: {
    async fetchData () {
      const response = await axios.get('https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2017&month=09')
      console.log(response)
      return response.data.holidays
    },
    startDownload () {
      alert('show loading')
    },
    finishDownload () {
      alert('hide loading')
    }
  }
}
</script>

<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>
