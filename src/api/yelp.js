import axios from 'axios';

const apiKey = 'nZBhwsJ_czTeprFFqSBL_shCMbsLWPZ-3-BjFyg0Al6H4pzE0Zn5y7mTDIcu8WS7n9P5yGSIHNcacSA3zhe6lsOd0E15tuihhCmekxlKFJm8MngG8Pgv2nK5o0nyXnYx';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
