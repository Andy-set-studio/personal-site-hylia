const axios = require('axios');
const token = process.env.WEBMENTIONS_TOKEN;
const domain = 'andy-bell.design';

module.exports = async function webmentions() {
  return axios
    .get(`https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=999999999`)
    .then(({data}) => {
      return data.children || [];
    })
    .catch(ex => []);
};
