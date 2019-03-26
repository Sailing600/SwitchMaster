<template>
<div>
 <h1 class="ml-5 mt-5">Implantation des prises</h1>
<v-container class="my-5 pa-0 white--text black text-xs-center">
<div class="display-0 pa-3 white black--text text-uppercase">
    <v-layout class="mt-5" row justify-center>
      <v-flex xs2>
        <v-btn dark color="primary">
          <span text-uppercase>Rez de chaussee</span>
        </v-btn>
      </v-flex>
      <v-flex xs2>
        <v-btn dark color="primary">
          <span text-uppercase>1er Etage</span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
         <v-flex xs12>
          <v-card dark class="ma-5 font-weight-bold" color="success">
              <v-card-text class="px-0 ">Coordinates : {{ x }}px : {{ y }}px</v-card-text>
          </v-card>
      </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
           <img justify-center class="ml-5 mr-5 mb-5" src="@/assets/rdc.png" alt="" onmousemove="positionSouris(event);" v-on:mousemove="updateCoordinates">
      </v-flex>
      </v-layout>
    </div>
 </v-container>

 </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    // pass own argument step
    // eslint-disable-next-line no-unused-vars
    increase (step, event) {
      this.counter += step
    },
    updateCoordinates (event) {
      // pass event object, bound to mouse move with updat
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script>
