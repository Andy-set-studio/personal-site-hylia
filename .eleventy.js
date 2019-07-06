require('dotenv').config();

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const likesFilter = require('./src/filters/likes-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const webmentionsFilter = require('./src/filters/webmentions-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import shortcodes
const codepen = require('./src/shortcodes/codepen.js');

// Import data files
const site = require('./src/_data/site.json');

module.exports = function(config) {
  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('likesFilter', likesFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('webmentionsFilter', webmentionsFilter);

  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Shortcodes
  config.addShortcode('codepen', codepen);

  // Passthrough copy
  config.addPassthroughCopy('src/_redirects');
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');

  const now = new Date();

  // Custom collections
  const livePosts = post => post.date <= now && !post.data.draft;
  const feedExcluded = post => !['weeknotes'].some(x => post.data.tags.includes(x));

  config.addCollection('posts', collection => {
    return [
      ...collection
        .getFilteredByGlob('./src/posts/*.md')
        .filter(livePosts)
        .filter(feedExcluded)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [
      ...collection
        .getFilteredByGlob('./src/posts/*.md')
        .filter(livePosts)
        .filter(feedExcluded)
    ]
      .reverse()
      .slice(0, site.maxPostsPerPage);
  });

  config.addCollection('feed', collection => {
    const notes = collection.getFilteredByTag('notes');
    const links = collection.getFilteredByTag('links');
    return [...notes, ...links].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  config.addCollection('sortedNotes', function(collection) {
    return collection.getFilteredByTag('notes').reverse();
  });

  config.addCollection('sortedLinks', function(collection) {
    return collection.getFilteredByTag('links').reverse();
  });

  config.addCollection('allFeed', function(collection) {
    const notes = collection.getFilteredByTag('notes');
    const links = collection.getFilteredByTag('links');
    const posts = collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts);
    return [...notes, ...links, ...posts].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });
  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
