<template>
  <v-img 
    min-height="300px"
    height="200"
    src="/static/greenTree1.jpg" >
    <div class="hero-text text-xs-center">
        <h2>Green Tree</h2>
        <v-text>An eclectic bunch of folks who believe in building community in Christ and seeking to leave an indelible mark of love and life -promoting service in the Willamette Valley and beyond...</v-text>
    </div>
  </v-img>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
v-img {
  min-height: 300px !important;
}
.hero-text {
  color: white;
  font-size: 1.75em;
  width: 700px;
  min-height: 75%;
  margin: auto;
}
/* @media screen and (max-width: 800px) {
  .hero-text {
    font-size: 1.5em;
    width: 75%;
  }
} */
@media screen and (max-width: 725px) {
  .hero-text {
    font-size: 1.25em;
    width: 90%;
  }
}
</style>
