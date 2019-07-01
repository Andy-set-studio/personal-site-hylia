module.exports = function codepen(id, tabs, title, height = 500) {

  let response = `
        <p data-height="${height}" data-theme-id="34482" data-slug-hash="${id}" data-default-tab="${tabs}" data-user="hankchizljaw" data-pen-title="${title}" class="codepen">See the Pen <a href="https://codepen.io/hankchizljaw/pen/${id}/">${title}</a> by Andy Bell (<a href="https://codepen.io/andybelldesign">@andybelldesign</a>) on <a href="https://codepen.io">CodePen</a>.</p>`;

  // Strip any newlines, spaces and other gubbins to 'minify' this component
  return response.replace(/\s{2,}/g, '').replace(/\'/g, '"');
};
