import axios from 'axios'

export const http = axios.create({
  // baseURL: 'https://greentreehive.herokuapp.com/api'
  baseURL: 'http://localhost:8080/api'
})
