const axios = require('axios');
const token = process.env.WEBMENTIONS_TOKEN;
const domain = 'hankchizljaw.com';

module.exports = async function webmentions() {
  if (!token) {
    return new Promise(resolve => resolve([]));
  }

  return axios
    .get(
      `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=200`
    )
    .then(({data}) => {
      return data.children || [];
    })
    .catch(ex => []);
};
