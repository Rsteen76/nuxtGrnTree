<template>
<v-container>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Name"
      v-model="user.name"
      required
    ></v-text-field>
    <v-text-field
      label="Email"
      v-model="user.email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="user.password"
      required
    ></v-text-field>
    <v-text-field
      name="input-7-1"
      label="Confirm Password"
      v-model="confirm_password"
    ></v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </v-container>
</template>

<script>
import { http } from "../config/http.js"

import axios from 'axios';

export default {
  data: () => ({
    submitDone: true,
    valid: true,
    user: { 
    name: '',
    email: '',
    password: '',
    },
    confirm_password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        http
          .post("/auth/register", this.user)
          .then((response) => {
            console.log(response)
            window.localStorage.setItem("auth", response.data.token);
            window.localStorage.setItem("name", response.data.name);
            this.$swal(
              'Great!',
              'You have been successfully registered!',
              'success',
            );
            this.$router.push({ name: 'greentree' });
          })
          .catch((error) => {
            const message = error.message;
            this.$swal('Oh oo!', `${message}`, 'error');
          });
      }
      return true;
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>