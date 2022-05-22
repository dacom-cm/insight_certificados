import dotenv from 'dotenv';

dotenv.config();

const env = {
    api: process.env.REACT_APP_API_URL,
    // recaptcha: {
    //   siteKey: process.env.REACT_APP_SITE_KEY,
    // }
  }
  
  export default env;