<template>
  <q-page class="flex flex-center column" :style='bgStyle'>
    <h3>{{ titulo }}</h3>
    <img alt="Quasar logo" :src='image'>

    <div class="q-pa-md slider">
      <q-slider
        v-model="slider"
        :min="0"
        :max="100"
        color="green"
        vertical
        label-always
        reverse
      />
    </div>

    <q-btn color="green" label="Enviar" />
  </q-page>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default {
  name: 'TesteMageda',
  data () {
    return {
      titulo: 'Menor que 50',
      image: require('../assets/logo.png'),
      bgStyle: {
        backgroundColor: "#e5e5e5",
        color: "#000"
      },
      slider: 10,
    }
  },

  methods: {
    
  },

  watch: {
    slider: function (val) {
      if (val >= 80) {
        this.titulo = 'Maior ou igual a 80'
        this.image = require('../assets/css-logo.png')
        this.bgStyle.backgroundColor = "#00ff84"
        this.bgStyle.color = "#333"
      } else if (val < 80 && val >= 50) {
        this.titulo = 'Menor que 80 e maior ou igual a 50'
        this.image = require('../assets/vue-logo.png')
        this.bgStyle.backgroundColor = "#5a00b3"
        this.bgStyle.color = "#fff"
      } else if (val < 50) {
        this.titulo = 'Menor que 50'
        this.image = require('../assets/logo.png')
        this.bgStyle.backgroundColor = "#e5e5e5"
        this.bgStyle.color = "#000"
      }
    }
  }
}
</script>


<style lang="sass">
  .q-page-container
    main
      transition: background-color 0.5s

  img
    width: 250px

  h3
    transition: color 0.5s

  .slider
    position: absolute
    top: auto
    bottom: auto
    display: flex
    margin: auto 0
    right: 15%
    .q-slider
      height: 80vh

  .q-btn
    margin: 40px auto
</style>
