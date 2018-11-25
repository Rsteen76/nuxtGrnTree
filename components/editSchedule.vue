<template>
  <v-card>
    <v-toolbar class="primary primaryText--text">
      <v-toolbar-title> Edit a Schedule </v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-card-text>
        <v-form ref="form">
        <v-flex>
        <v-menu 
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="0" 
          :return-value.sync="changedSchedule.date"
          lazy transition="scale-transition" 
          offset-y full-width min-width="290px">
          <v-text-field slot="activator" 
            v-model="changedSchedule.date" 
            label="Date" 
            prepend-icon="event" 
            readonly>
          </v-text-field>
          <v-date-picker 
            v-model="changedSchedule.date" 
            @input="$refs.menu.save(changedSchedule.date)">
          </v-date-picker>
        </v-menu>
        </v-flex>
        <v-text-field label="Location" v-model="changedSchedule.location"> </v-text-field>
        <v-text-field label="Meeting Leader" v-model="changedSchedule.meetingLeader"> </v-text-field>
        <v-text-field label="Worship Leader" v-model="changedSchedule.worshipLeader"> </v-text-field>
        <v-text-field label="Teacher Leader" v-model="changedSchedule.teacher"> </v-text-field>
        <v-text-field label="Busy Bees Leader" v-model="changedSchedule.busyBees"> </v-text-field>
        <v-text-field label="Nursery Leader" v-model="changedSchedule.nursery"> </v-text-field>
        <v-text-field label="Logistic Leader" v-model="changedSchedule.logistics"> </v-text-field>
        </v-form>

        <v-card-actions>
          <v-btn @click="edit()" class="green lighten-1 white--text" :loading="!editDone">Submit</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="close()" class="red white--text">Close</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-container>
  </v-card>

</template>
<script>
import { http } from '../config/http'

export default {
  data: () => ({
    menu: false,
    changedSchedule: {
      date: '',
      location: '',
      meetingLeader: '',
      worshipLeader: '',
      teacher: '',
      busyBees: '',
      nursery: '',
      logistics: '',
      mealTheme: ''
    },
    editDone: true
  }),

  props: {
    schedule: {
      type: Object
    },
    rules: {
      type: Object
    },
    editName: {
      type: String,
      default: ''
    }
  },

  methods: {
    edit() {
      this.editDone = false
      http
        .put("/schedules/" + this.schedule._id, this.changedSchedule, { headers: { 'Authorization': 'Bearer ' + localStorage.auth }})
        .then(response => {
          this.alert(true, 'Edit', 'Schedule')
          this.editDone = true
        })
        .catch(e => {
          this.alert(false, 'Edit', 'Schedule')
          this.editDone = true
        });
        
    },

    close() {
      this.$emit('closeEdit')
    },

    alert(success, callName, resource) {
      this.$emit('alert', success, callName, resource)
      this.close()
    },

    // checkForm() {
    //   if (this.changedSchedule.age <= 0 || this.changedSchedule.name == '' || this.changedSchedule.email == '') {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },

  mounted() {
    console.log(this.scheduleToEdit)
    this.changedSchedule = this.schedule
  }

}
</script>

<style>

</style>