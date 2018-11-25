import axios from 'axios'

export const http = axios.create({
  baseURL: 'sad-spence-9ec68d.netlify.com/api'
  // baseURL: 'http://localhost:8080/api'
})
