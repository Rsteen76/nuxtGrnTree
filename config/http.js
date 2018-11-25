import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://sad-spence-9ec68d.netlify.com/api'
  // baseURL: 'http://localhost:8080/api'
})
