<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 v-for="card in cards" :key="card.headline">
      <v-card hover height="400" class="color4 ma-3">
      <!-- <v-responsive :aspect-ratio="16/9"> -->
        <v-img :src="card.image" :aspect-ratio="16/9" :alt="card.alt">
        </v-img>
      <!-- </v-responsive> -->

        <v-card-title primary-title class="color5--text justify-center">
        <div>
          <h3 class="headline mb-0">{{ card.headline }}</h3>
          <div class="color2--text">{{card.description}}</div>
        </div>

        </v-card-title>

        <!-- <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->

          <div class="text-xs-center justify-center">
          <v-dialog
          v-model="card.dialog"
          width="400"
          >
            <v-btn
            slot="activator"
            class="color1"
            dark
            >
            <span class="color5--text">See More</span>
            </v-btn>

            <v-card class="color5">
              <v-card-title primary-title
              class="color1 headline"
              >
              <span class="color2--text">{{card.headline}}</span>
              </v-card-title>

              <v-card-text class="color2--text">
              {{card.more}}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                :href="card.github"
                target="_blank">
                  <v-icon left>mdi-github-circle</v-icon>
                  <span class="color2--text">GitHub</span>
                </v-btn>
                <v-btn
                class="color1--text"
                flat
                @click="card.dialog = false"
                >
                  <span></span>
                  <v-icon right>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
    import Modal from '@/components/Modal'
    export default {
        data () {
            return {
                // dialog: false,
                cards: [
                    {
                        headline: 'Kangaroo', 
                        description: "Located two hours south of Sydney in the",
                        image: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                        alt: "Kangaroo Image",
                        dialog: false,
                        github: ""
                    },
                    {
                        headline: 'LIRI', 
                        description: "Using Node and the command line, search movies, songs, or concert APIs",
                        image: '../../static/liri.png',
                        alt: "LIRI",
                        dialog: false,
                        more: "The purpose of this tool is to call various APIs and return their objects via the command line.",
                        github: "https://github.com/Bricktown88/liri-node-app"
                    },
                    {
                        headline: 'Giphy API', 
                        description: "Click premade buttons to view GIFs, or add your own GIF button",
                        image: '../../static/giphy2.png',
                        alt: "Giphy API",
                        dialog: false,
                        github: "https://github.com/Bricktown88/GifTastic"
                    },
                    {
                        headline: 'bAmazon', 
                        description: "CLI Marketplace",
                        image: '../../static/bAmazon.png',
                        alt: "bAmazon",
                        dialog: false,
                        github: "https://github.com/Bricktown88/bAmazon"
                    },
                    {
                        headline: 'Game of Thrones FriendFinder', 
                        description: "Take the survey and find out which GoT character you are!",
                        image: '../../static/FF.png',
                        alt: "GoT FriendFinder",
                        dialog: false,
                        github: "https://github.com/Bricktown88/FriendFinder"
                    },
                    {
                        headline: 'Kangaroo3', 
                        description: "Located two hours south of Sydney in the",
                        image: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                        alt: "Kangaroo Image3",
                        dialog: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>