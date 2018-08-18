<template>
  <div id="app">

    <v-app dark>
      <v-content class ="background">
        <v-container fluid>
          <router-view :hasWebGL="hasWebGL"></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasWebGL: KerasJS.GPU_SUPPORT
    }
  },
}


</script>

<style lang="postcss">
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 600, 700';
@import 'https://fonts.googleapis.com/css?family=Share+Tech+Mono';
@import 'https://fonts.googleapis.com/css?family=Nothing+You+Could+Do';

@import './variables.css';


a {
  text-decoration: none;
}


/*******************************************************************/
/* Vuetify overrides */

.input-group:not(.input-group--error) label {
    font-size: 14px !important;
    color: var(--color-lightgray) !important;
}

.background {
    background-color: var(--color-darkgray);
}

</style>
