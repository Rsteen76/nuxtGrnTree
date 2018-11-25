<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 elevation-15>
      <v-card>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

        <v-card-title primary-title>
          <div>
            <div class="headline mb-0">Children's Ministry</div>
            <div class="children">Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        items: [
          { src : '/static/kids2.jpg'},
          { src : '/static/annybaptize.jpg'},
          { src : '/static/phinny.jpg'}
        ]
      }
    }
  }
</script>
<style scoped>
.children,.headline {
font-family: 'Open Sans Condensed', sans-serif;
}
.children {
  font-size: 2em;
}
.headline {
  font-size: 2.5em !important;
}
</style>
