import axios from 'axios';


const config = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

export default axios.create({
   // baseURL: 'http://35.238.162.67/',
    baseURL: 'https://www.bearbear.co.kr/',
    headers: config,
    withCredentials: true,

    // header: {
    // 	Authorization: 'bearer accessKey'
    // }
});
