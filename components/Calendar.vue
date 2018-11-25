<template>
  <v-container class="calendar">
    <v-layout row wrap>
      <v-flex xs12  mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(schedule,i) in schedules"
            :key="i"
          >
            <div slot="header"><span class="display-1">{{schedule.location}}</span> - <h3>{{moment(schedule.date).format('MMMM Do YYYY')}}</h3></div>
            <v-card class="elevation-5">
              <v-card-text class="headline">Meeting Leader: {{schedule.meetingLeader }} </v-card-text>
              <v-card-text class="headline">Worship Leader: {{schedule.worshipLeader }} </v-card-text>
              <v-card-text class="headline">Teacher: {{schedule.teacher }} </v-card-text>
              <v-card-text class="headline">Busy Bees: {{schedule.busyBees }} </v-card-text>
              <v-card-text class="headline">Nursery: {{schedule.nursery }} </v-card-text>
              <v-card-text class="headline">Logistics: {{schedule.logistics }} </v-card-text>
              <img src="" alt="">
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { http } from "../config/http.js"
import moment from 'moment'

  export default {
    data: ()  => ({
      schedules: []
    }),
    methods: {
      // Load all Schedules from database
      load() {
            http
                .get("schedules")
                .then(response => {
                    this.schedules = response.data.schedules;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
      moment: function (date) {
        return moment(date);
      },
    },
    mounted() {
      this.load();
    }
  }
</script>

<style scoped>
.calendar,.headline,.display-1 {
  font-family: 'Libre Baskerville', serif !important;
}
</style>
