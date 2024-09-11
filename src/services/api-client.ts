import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://chintan.cetecerp.com',
  headers: {Authorization:'ncp4ZMB!azx5fmc*fuj'},
  
})

export { CanceledError };