<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-app dark>
      <!-- put a navbar / page header here -->
      <PageHeader />
      <main>
        <v-container>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #F1FAEE;
}
</style>
