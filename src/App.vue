<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <TesteMageda />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import TesteMageda from './components/TesteMageda.vue'

export default {
  name: 'LayoutDefault',

  components: {
    TesteMageda
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
