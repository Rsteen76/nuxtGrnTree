<template>
<v-container class="quotes" id="greenblur">
  <v-carousel id = "quotes-carousel" hide-delimiters hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</v-container>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/trees.jpeg'
          },
          {
            src: '/static/drop.jpeg'
          },
          {
            src: '/static/grassdrop.jpeg'
          },
          {
            src: '/static/water.jpeg'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
.quotes {
  font-family: 'Playfair Display SC', serif;
}
  #greenBlur
  .image
    height: 20vh;
    widows: 100vw;
    overflow: hidden;
    position: relative;


  #quotes-carousel
  .image
    height: 20vh;
    windows: 100vw;
    overflow: hidden;
    position: relative;


  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .8s ease-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0
</style>