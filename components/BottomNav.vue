<template>
      <v-card-text
        class="text-xs-center text--white pb-0"
        style="bottom:0; position: absolute;"
      >
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 white--text"
          icon
        >
          <v-icon small>{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
</template>
</<script>
export default {
  data() { return {
     icons: [
        'fa fa-facebook',
        'fa fa-twitter',
        'fa fa-linkedin',
        'fa fa-instagram'
      ]
  }
}
}
</script>
