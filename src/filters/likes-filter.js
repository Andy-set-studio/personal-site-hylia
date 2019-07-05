/**
 * Scan webmentions feed for likes only
 *
 * @param {Array} webmentions
 * @param {String} url
 * @returns {Array}
 */
const likesFilter = function(webmentions, url) {
  const allowedTypes = ['like-of'];
  const hasRequiredFields = entry => {
    const {author} = entry;
    return author.name && author.photo && author.url;
  };

  return webmentions
    .filter(entry => entry['wm-target'] === url)
    .filter(entry => allowedTypes.includes(entry['wm-property']))
    .filter(hasRequiredFields);
};

module.exports = likesFilter;
