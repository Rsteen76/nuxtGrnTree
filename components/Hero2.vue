<template>
<v-container  fluid> 
<v-carousel class="hero" id="custom-transition" hide-delimiters hide-controls mt3 height="35vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="slide-fade"
      transition="slide-fade"
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
            src: 'https://s3-us-west-2.amazonaws.com/greentreeme/greenTree1.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.hero {
  height: 30vh;
}

 #custom-transition
  .slide-fade
    &-enter-active 
      transition: all .3s ease;
    &-leave-active 
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    &-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ 
      transform: translateX(10px);
      opacity: 0;

</style>