<template>
  <div class="home-page">
    <div class="text-xs-center">
      <!-- <h1 class="info-text">{{ nextSunday.format('LL') }}</h1> -->
    </div>
    <div class="center">
      <transition 
        name="big" 
        mode="out-in">
        <v-img @click="login(counter)" src="/GreenTreeLogo.png" class="logo" v-if="showButtons"/>

        <!-- Children Info Section -->
        <div v-if="showChildren" class="">
        <v-card max-height="75vh" class="scroll">
          <v-img
            src="/Kids.png"
            aspect-ratio="2.75"
          />
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Childrens Ministry</h3>
              <v-card-text style="text-align:justify;">Today’s children are Tomorrow’s leaders, of both the church and the world. And while they have tremendous roles in the future, they’re just as important right now. Church should feel like a place that’s meant for them too. We love children and do our very best to blow wind into the sails of their imaginations, and to nurture their hearts with wisdom and compassion. 
                <br/><br/>
                Kids of all ages worship with us at the beginning of every meeting. And those that are too young play at our feet. After worship we split the younger kids into two groups and have them go to classrooms for age-appropriate lessons and activities. Kids 8 years and older remain with the adults for the teaching portion of the meeting.
                <br/><br/>
                <strong>Nursery</strong>
                <br/>
                Children up to 4 years old
                <br/>
                <strong>Busy Bees</strong>
                <br/>
                Children from 4 to 7 years old
                <br/><br/>
                Our deepest desire is that our kids will flourish, and will grow to experience, understand, and enjoy the Lord and his perfect love.
              </v-card-text>
            </div>
          </v-card-title>
        </v-card>
      </div>

    <!-- Show Info Section -->
    <div v-if="showInfo">
      <v-card max-height="75vh" class="scroll">
          <v-img
            src="~assets/images/Kids.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">More About Us</h3>
              <v-card-text style="text-align:justify;">We are a Hive Communities fellowship. We are one small church in a network of churches who are moving forward together, united in purpose, as a family of the faith. We are passionate about nurturing and developing the God-given gifts in each and every person as we live out Christ’s love for the world. We don’t have a paid staff, or any kind of professional clergy. Our elders work for their own livings, and the burdens of teaching, worship leading, and administration are happily shared by a leadership team of mature Christian volunteers.
                <br/><br/>
                As a church we hold traditional conservative values.
                <br/><br/>
                <strong>We believe</strong> the Bible to be the only inspired, trustworthy and true, without error, Word of God. (2 Timothy 3:16-17)
                <br/><br/>
                <strong>We believe</strong> there is only one God who eternally exists in three persons: Father, Son and Holy Spirit.  Matthew 28:19)
                <br/><br/>
                <strong>We believe</strong> Jesus Christ is God, in His virgin birth, in His sinless life, in His miracles, in His death that paid for our sin through His shed blood, in His bodily resurrection, in His ascension/rising up to the right hand of the Father and in His personal return in power and glory. (John 1:1; Matthew 1:18,25; Hebrews 4:15; Hebrews 9:15-22; 1 Corinthians 15:1-8; Acts 1:9-11; Hebrews 9:27-28)
                <br/><br/>
                <strong>We believe</strong> that acceptance of Jesus Christ and the corresponding renewal of the Holy Spirit are the only paths to salvation for lost/sinful men and women. (John 3:16; John 5:24; Titus 3:3-7)
                <br/><br/>
                <strong>We believe</strong> in the present ministry of the Holy Spirit, who lives within and guides Christians so they are enabled to live godly lives. (John 14:15-26; John 16:5-16; Ephesians 1:13-14)
                <br/><br/>
                <strong>We believe</strong> in eternal life, and that through belief in Jesus Christ as the Son of God, we spend eternity with the Lord in Heaven. We believe that in rejecting Jesus Christ as Lord and Savior, we receive eternal suffering in hell. (Matthew 25:31-46; 1 Thessalonians 4:13-18)
                <br/><br/>
                <strong>We believe</strong> in the spiritual unity of believers in our Lord Jesus Christ, that all believers are members of His body, the Church. (Philippians 2:1-4)
                <br/><br/>
                <strong>We believe</strong> God’s design for sexual intimacy is to be expressed only within the context of marriage. God instituted marriage between one man and one woman as the foundation of the family and the basic structure of human society. For this reason, we believe that marriage is exclusively the union of one man and one woman. (Genesis 2:24; Matthew 19:5-6; Mark 10:6-9; Romans 1:26-27; 1 Corinthians 6:9)
                <br/><br/>
                <strong>We believe</strong> that God created all human beings in His image. Therefore, we believe that human life is sacred from conception to its natural end; that we must honor the physical and spiritual needs of all people; following Christ’s example, we believe that every person should be treated with love, dignity and respect. (Psalm 139:13; Isaiah 49:1; Jeremiah 1:5; Matthew 22:37-39; Romans 12:20-21; Galatians 6:10
                <br/><br/>
                If you have any questions, comments, or concerns, please reach out to our fellowship by sending an email to <a href="mailto:info@greentree.me">info@greentree.me</a>
                <br/><br/>
                Thanks, and God bless!
              </v-card-text>
            </div>
          </v-card-title>
        </v-card>
      </div>
      <div v-if="showCalendar">
        <Calendar/>
      </div>
      </transition>
    </div>

    <!-- Buttons -->
    <!-- Home Button -->
    <img src="~assets/images/ButtonHome.png" @click="showButtons=true, showChildren=false, showInfo=false, showCalendar=false"  class="home-button custom-button"/>

    <!-- Children Button -->
    <transition 
      name="custom-classes-transition" 
      enter-active-class="animated fadeInLeft" 
      leave-active-class="animated fadeOutLeft">
      <img src="~assets/images/ButtonKids.png" @click="showChildren=!showChildren, showButtons=!showButtons" v-if="showButtons" class="custom-button children-button"/>
    </transition>
    
    <!-- Info Button -->
    <transition 
      name="custom-classes-transition" 
      enter-active-class="animated fadeInRight" 
      leave-active-class="animated fadeOutRight">
      <img src="~assets/images/ButtonInfo.png" @click="showInfo=!showInfo, showButtons=!showButtons" v-if="showButtons" class="custom-button more-button"/>
    </transition>

    <!-- Calendar Button -->
    <transition 
      name="custom-classes-transition" 
      enter-active-class="animated fadeInRight" 
      leave-active-class="animated fadeOutRight">
      <img src="~assets/images/ButtonCalendar.png" @click="showCalendar=!showCalendar, showButtons=!showButtons" v-if="showButtons" class="custom-button schedule-button"/>
    </transition>
  
  <!-- Footer -->
  <BottomNav />
  </div>
</template>

<script>
import { http } from "../config/http.js"
import moment from 'moment'

import Nav from "../components/Nav.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Quotes from "../components/Quotes.vue";
import Children from "../components/Children.vue";
import Calendar from "../components/Calendar.vue";
import BottomNav from "../components/BottomNav.vue"

export default {
  name: "home",
  components: {
    Nav,
    Hero,
    About,
    Quotes,
    Children,
    Calendar,
    BottomNav
  },
  data() {
    return {
      counter: 0,
      showButtons: true,
      showLogo: true,
      showChildren: false,
      showInfo: false,
      showCalendar: false,
      nextDate: '',
      schedules: []
    };
  },
  methods: {
  // Load all Schedules from database
  load() {
    http
      .get("schedules")
      .then(response => {
          this.schedules = response.data.schedules;
          this.nextSunday()
      })
      .catch(e => {
          this.errors.push(e);
      });
    },
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
    nextSunday() {
      const dayINeed = 7; // for Sunday
      this.nextDate =  moment().isoWeekday(dayINeed)
      this.schedules.forEach(schedule => {
        console.log(moment(schedule.date).format('DD.MM.YY'))
        if(moment(schedule.date).format('LL') == moment(this.nextDate).format('LL')) {
          console.log(success);
        }
      });
    }
  },
  mounted() {
    this.load()
  }
}
</script>
<style lang="stylus" scoped>
.home-page {
  font-family: 'Oxygen', sans-serif;
  overflow: auto;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  height: auto;
  background-image: url("~assets/images/GreenTreeBG.jpg");
  background-size: cover;
}
.info-text {
  color: white;

}
.about-content {
  position: relative;
  top: 50%;
  transform: translateY(-60%);
  display: block;
  z-index: 1;
  margin: auto;
  width: 25%;
  min-width: 400px; 
}
.center {
  display: block;
  width: 25%;
  min-width: 400px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  z-index: 2;
}
.logo {
  width: 100%;
}

.green-tree {
  color: rgb(47, 170, 47);
  font-size: 7em;
}
.home-button {
  margin-left: 0px;
  position: absolute;
  left: 0;
  top: 0;
}
.children-button {
  margin-left: 0px;
  margin-bottom: 0;
  position: absolute;
  left: 0;
  bottom: 0;
}
.more-button {
  margin-right: 0px;
  position: absolute;
  right: 0;
  top: 0;
}
.schedule-button {
  margin-right: 0px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.custom-button {
  padding-top: 0px;
  font-size: 2em;
  text-align: center;
  color: rgb(255, 251, 251);
  width: 15%;
  max-width: 150px;
  height: auto;
  transition: all .3s ease-in;
  z-index: 1
}
.custom-button:hover {
  text-decoration: underline;
}
.custom-button::after {
  background-color: yellow;
}
.scroll {
  max-height: 75%;
    overflow-y: auto;
}
@media only screen and ( max-width: 800px ) {
  .info-text {
    font-size: 1.5em;
  }
  .custom-button {
    min-width:100px;
  }
  
  .green-tree {
    color: rgb(47, 170, 47);
    top: 30px;
    font-size: 3.75em;
  }

.center {
  position: relative;
  width: 40%;
  top: 40%
  min-width: 275px;
}
  .about-content {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    margin-left: -45%; /* margin is -0.5 * dimension */
    margin-top: -55%;
  }
  .scroll {
    max-height: 350px;
    overflow-y: auto;
}
}
@keyframes zoomOutBig {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

  to {
    opacity: 0;
  }
}

.big-leave-active {
  -webkit-animation-name: zoomOutBig;
  animation-name: zoomOutBig;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes zoomInBig {
  from {
    opacity: .2;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  to {
    opacity: 1;
  }
}

.big-enter-active {
  -webkit-animation-name: zoomInBig;
  animation-name: zoomInBig;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
