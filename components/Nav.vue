<template>
    <div class="topnav" id="myTopnav" :class="{responsive: isActive}">
      <div>
      <a href="#/" class="active">Green Tree</a>
      </div>
      <template v-if="auth">
        <a @click="logout" style="float: right;">Logout</a>
      </template>
      <!-- <a v-if="!auth" style="float: right;" href="#/login">Login</a> -->
      <!-- <a href="#" class="icon">
        <i class="fa fa-bars" @click="isActive = !isActive"></i>
      </a> -->
      <span @click="login(counter)" class="meeting-time"><strong>Next Meeting {{moment(schedules[1].date).format('M/D') }} in
          {{schedules[1].location}}</strong></span>
    </div>
    <!-- <v-toolbar fixed dense dark app="true">
      <v-toolbar-title>Green Tree</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text class="title"><strong>Next Meeting {{moment(schedules[1].date).format('MMMM Do') }} in
          {{schedules[1].location}}</strong></v-text>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn v-if="!name" to='/login' flat>Login
        </v-btn>
      </v-toolbar-items>
      <template v-if="auth">
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <span>{{name}}</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
            <v-list-tile-title v-text="item.title">
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items>
        <v-btn @click="logout">Logout</v-btn>
      </v-toolbar-items>
      </template>
    </v-toolbar> -->
</template>

<script>
  import { http } from "../config/http.js"
  import moment from 'moment'


  export default {
    data: ()  => ({
      counter: 0,
      isActive : false,
      auth: localStorage.auth,
      name: localStorage.name,
      items: [
        { 
          title: "Schedules", 
          path: "/schedules",
        },
        {
          title: "People",
          path: "/users",
        }, 
      ],
      schedules: [],
      date: ""
    }),
    methods: {
      login() {
        this.counter++
        console.log(this.counter)
        if (this.counter == 5) {
          this.counter = 0
          this.$router.push ({
            name: 'login'
          })
        }
      },
      // Load all Schedules from database
      load() {
        this.counter = 0  
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
        logout() {
          localStorage.clear()
          this.$router.go({
            name: 'greentree'
          })
        }
    },
    mounted() {
      this.load();
    }
  }
</script>

<style scoped>
.topnav {
    background-color: #333333;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 999999;
    text-align: center;
    height: 50px;
    font-family: 'Libre Baskerville', serif
}

/* Style the links inside the navigation bar */
.topnav  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-decoration: none;
    padding: 12px;
    font-size: 17px;
}
.topnav  span {
  color: #f2f2f2;
  padding-top: 3px;
  display: block;
  float: none;
  text-align: center;
  font-size: 30px;
}
/* Change the color of links on hover */
.topnav a:hover {
  padding: 15px;
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.active {
    background-color: green;
    color: white;
    height: 50px;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
    display: none;
}
@media screen and (max-width: 600px) {
  .topnav span {
    font-size: 20px;
    padding: 8px;
  }
}
@media screen and (max-width: 500px) {
  .topnav span {
    font-size: 12px;
    padding: 14px;
    padding-left: 100px
    
  }
}
</style>
