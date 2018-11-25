<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Schedule
        <b-link href="#/schedule">(schedule List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{schedule.title}}
        </template>
        <template slot="lead">
          Date: {{schedule.date}}<br>
          Location: {{schedule.location}}<br>
          Worship Leader: {{schedule.worshipLeader}}<br>
          Meeting Leader: {{schedule.meetingLeader}}<br>
          Teacher: {{schedule.teacher}}<br>
          Busy Bees: {{schedule.busyBees}}<br>
          Nursery: {{schedule.nursery}}<br>
          Logistics: {{schedule.logistics}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{schedule.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editschedule(schedule._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteschedule(schedule._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowSchedule',
  data () {
    return {
      schedule: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/schedule/` + this.$route.params.id)
    .then(response => {
      this.schedule = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editschedule (scheduleid) {
      this.$router.push({
        name: 'EditSchedule',
        params: { id: scheduleid }
      })
    },
    deleteschedule (scheduleid) {
      axios.delete('http://localhost:3000/schedule/' + scheduleid)
      .then((result) => {
        this.$router.push({
          name: 'ScheduleList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>