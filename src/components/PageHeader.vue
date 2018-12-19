<template>
<nav>

  <v-toolbar app class="pink">
    <v-toolbar-side-icon right @click="hamburger = !hamburger"></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <router-link
        class="home"
        tag="span"
        :to="{ name: 'portfolio' }">
        Alex Young
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-for="button in buttons" :key="button.name" small flat dark 
      :to="button.route" class="pink">
        <v-icon left>{{button.icon}}</v-icon>
        <span class="hidden-sm-and-down">{{button.name}}</span>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn v-for="linker in linkers" :key="linker.name" small flat dark 
      :href="linker.ref"
      target="_blank" class="pink">
        <v-icon left>{{linker.icon}}</v-icon>
        <span class="hidden-sm-and-down">{{linker.name}}</span>
      </v-btn>
    </v-toolbar-items>


    <!-- <v-toolbar-items>
      <v-btn v-for="button in buttons" :key="button.name" dark>
      <v-icon>{{button.icon}}</v-icon>
        {{button.name}}
      </v-btn>
    </v-toolbar-items> -->
  </v-toolbar>
    <v-navigation-drawer width="180" left temporary app v-model="hamburger">
      <v-btn block v-for="button in buttons" :key="button.name" small flat dark 
      :to="button.route" class="pink">
        <v-icon left>{{button.icon}}</v-icon>
        <span>{{button.name}}</span>
      </v-btn>
      <v-btn v-for="linker in linkers" :key="linker.name" small flat dark 
      :href="linker.ref"
      target="_blank" class="pink">
        <v-icon left>{{linker.icon}}</v-icon>
        <span>{{linker.name}}</span>
      </v-btn>
    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
data () {
  return {
    hamburger: false,
    buttons: [
      {
        name: 'projects',
        icon: 'folder',
        route: '/projects'
      },
      {
        name: 'contact',
        icon: 'contact_phone',
        route: '/contact'
      }
    ],
    linkers: [
      {
        name: 'linkedIn',
        icon: 'mdi-linkedin-box',
        ref: 'https://www.linkedin.com/in/alexander-young-b41b1071/'
      },
      {
        name: 'GitHub',
        icon: 'mdi-github-circle',
        ref: 'https://github.com/Bricktown88'
      }
    ]
  }
}
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gold;
}
</style>
