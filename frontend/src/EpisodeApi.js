import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://api.tvmaze.com',
  //   headers: {},
});

export default instance;
