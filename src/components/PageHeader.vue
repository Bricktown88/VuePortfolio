<template>
<nav>

<!-- Home button and hamburger -->
  <v-toolbar app class="pink">
    <v-toolbar-side-icon right @click="hamburger = !hamburger"></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <router-link
        class="home"
        tag="span"
        :to="{ name: 'portfolio' }">
        <v-icon medium>mdi-home-account</v-icon>
      </router-link>
    </v-toolbar-title>
      
    <v-spacer></v-spacer>

<!-- buttons with routes -->
    <v-toolbar-items>
      <v-btn v-for="button in buttons" :key="button.name" small flat dark 
      :to="button.route" class="pink">
        <v-icon left>{{button.icon}}</v-icon>
        <span class="hidden-sm-and-down">{{button.name}}</span>
      </v-btn>
    </v-toolbar-items>

<!-- contact button with modal instead of route, importing from ContactForm component -->
    <v-toolbar-items>
      <v-btn v-for="contact in contacts" :key="contact.name" block small flat dark
      target="_blank" class="pink"
      @click="dialog = true">
        <v-icon left>{{contact.icon}}</v-icon>
        <span>{{contact.name}}</span>
      </v-btn>
      <v-dialog max-width="700px"
        v-model="dialog">
        <!-- <Contact-Modal /> -->
      <v-card>
        <v-card-title>
          <span align-center class="headline">Contact Alex</span>
        </v-card-title>
        <!-- <Contact-Form /> -->
        <!-- <Contact-Modal /> -->
        <v-card-text>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="name*" v-model="name" required></v-text-field>

                <v-text-field label="Email*" v-model="email" required></v-text-field>
                <v-textarea label="Message*" v-model="message" required></v-textarea>
              </v-flex>
            </v-layout>

          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red lighten-1" flat @click="dialog = false">Close</v-btn>
          <!-- <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn> -->
          <v-btn color="blue darken-1" flat @click="success">
            Send Message
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>




<!-- buttons with links instead of routes -->
      <v-btn v-for="linker in linkers" :key="linker.name" small flat dark 
      :href="linker.ref"
      target="_blank" class="pink">
        <v-icon left>{{linker.icon}}</v-icon>
        <span class="hidden-sm-and-down">{{linker.name}}</span>
      </v-btn>      
    </v-toolbar-items>

<!-- hamburger specific -->
  </v-toolbar>
      <v-navigation-drawer width="180" left temporary app v-model="hamburger">
        <v-layout column align-center>
          <v-flex class="mt-2">
            <router-link
        class="home"
        tag="span"
        :to="{ name: 'portfolio' }">
        <!-- <v-icon medium>mdi-home-account</v-icon> -->
            <v-avatar class="mb-3" size="100">
              <img src="../../static/Alex.png" alt="home">
            </v-avatar>
            <p class="white--text subheading">Alex Young</p>
      </router-link>
        <v-btn block v-for="button in buttons" :key="button.name" small flat dark 
        :to="button.route" class="mb-2 pink">
          <v-icon left>{{button.icon}}</v-icon>
          <span>{{button.name}}</span>
        </v-btn>
        <v-btn v-for="contact in contacts" :key="contact.name" block small flat dark
          target="_blank" class="mb-2 pink"
          @click="dialog = true">
            <v-icon left>{{contact.icon}}</v-icon>
            <span>{{contact.name}}</span>
        </v-btn>
        <v-btn block v-for="linker in linkers" :key="linker.name" small flat dark 
        :href="linker.ref"
        target="_blank" class="mb-2 pink">
          <v-icon left>{{linker.icon}}</v-icon>
          <span>{{linker.name}}</span>
        </v-btn>
          </v-flex>
        </v-layout>
      </v-navigation-drawer>
</nav>
</template>

<script>
// import ContactModal from '@/components/ContactModal'
import ContactForm from '@/components/ContactForm'
export default {
  components: { 
    ContactForm,
    // ContactModal 
    },
data () {
 
  return {
    name: "",
    email: "",
    message: "",
    dialog: false,
    hamburger: false,
    // components: {
    //   ContactForm
    // },
    buttons: [
      {
        name: 'projects',
        icon: 'folder',
        route: '/projects'
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
    ],
    contacts: [
      {
        name: 'contact',
        icon: 'mdi-contact-mail'
      }
    ]
  }
},
  methods: {
    showModal () {
      this.dialog = true
    },
    success() {
        this.dialog = false,
        this.$toast.open({
            message: 'Message sent!',
            type: 'is-success',
            duration: 2800
        })
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

.v-btn {
min-width: 0;
}

</style>
