import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID f5bd52b1b1337bb9bbf07180d9ac1b04fe4b6a94df7e83e3b24760a28c0e1c2e'
  }  
})


