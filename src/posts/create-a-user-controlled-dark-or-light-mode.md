---
layout: 'layouts/post.njk'
title: 'Create a user controlled dark or light mode'
subTitle: 'Piccalilli CSS Utility — Issue #10'
issueSlug: '/issues/10'
date: '2019-05-31'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

Ever since the [prefers-color-scheme media query landed](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), folks have been rolling out dark themes for their websites as often as they use the entire React library to power a hamburger menu on their static blog.

A lot of the time, folks rightly add a dark/light switch to give the user a choice. Oftentimes, though, folks will do one of the most dangerous things in design: make a presumption and roll out a dark theme if the user’s operating system preference is dark mode, and just leave it at that.

It’s important to not make presumptions in design if you can help it, so I’m going to show you a quick and easy way to honour the user’s operating system preference by default, but also give them a toggle button to change their preference, manually.

## What we are building

<figure>
<video src="https://res.cloudinary.com/andybelldesign/video/upload/v1559290559/misc/dark-light-mode-demo_cbfd3f.mp4" controls></video>
<figcaption>Video shows a dark theme by default being toggled by a toggle button on click.</figcaption>
</figure>

The video shows that because my operating system is in dark mode, the demo honours it by default. I then use the toggle to switch the theme. This is then maintained by local storage.

### Laying the foundations

<small><em>You can skip this section completely and [fork the base code on CodePen](https://codepen.io/andybelldesign/pen/654b3b67255eb4a8d5860938685e4d1f). If not, follow along to add the following base code.</em></small>

You’re going to need a HTML file, a CSS file and a JavaScript file. I’ve built this in [Codepen](https://codepen.io) to make things easier for us all.

In your HTML file (or HTML panel in CodePen), add the following code:

```html
<main>
  <article>
    <h1>Dark mode should be a user preference—not presumed</h1>
    <p>
      Yes, by default, when a user has <code>@media (prefers-color-scheme: dark)</code> set, we should set a dark theme, but we should also provide a
      switch for if the dark them isn’t working out for them.
    </p>
    <p>This also benefits users that don’t have <code>@media (prefers-color-scheme: dark)</code> set because they get a toggle to choose, too.</p>
  </article>
  <div class="user-toggle">
    <div role="status" class="[ visually-hidden ][ js-mode-status ]"></div>
    <button class="[ toggle-button ] [ js-mode-toggle ]">
      <span class="[ toggle-button__text ] [ js-mode-toggle-text ]">Enable dark mode</span>
      <span class="toggle-button__icon" aria-hidden="true"></span>
    </button>
  </div>
</main>
```

That’s all of the HTML that we need and the `<article>` element only serves as a demo. Everything that lives in `.user-toggle` is the important part.

Next up, let’s add some CSS. We’ll add our core presentational styles first. Paste this into your CSS file (or CSS panel on CodePen):

```css
/* Presentational demo styles */

body {
  font-family: sans-serif;
  padding: 2rem 1rem;
  line-height: 1.4;
  display: grid;
  place-items: center;
}

article {
  max-width: 75ch;
  margin: 0 auto;
}

article > * + * {
  margin-top: 1em;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.1;
}

p {
  font-size: 1.2rem;
  opacity: 0.9;
}

code {
  font-weight: 700;
  font-size: 1.3em;
  white-space: pre;
}

.visually-hidden {
  display: block;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(1px);
  white-space: nowrap;
  position: absolute;
}
```

Cool—we’ve got our base HTML and CSS in place. You might also want to add this [reset](https://codepen.io/andybelldesign/pen/Ygmwym.css) that I use for my demos.

[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) are doing the heavy lifting for us, so next, let’s define some at the `:root` level, which is on the `<html>` element.

```css
:root {
  --color-mode: 'light';
  --color-dark: #141414;
  --color-dark-alpha: rgba(0, 0, 0, 0.1);
  --color-light: #efefef;
  --color-light-alpha: rgba(255, 255, 255, 0.9);
  --icon-sun: url('data:image/svg+xml,\
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">\
    <path d="M18 12c0-0.811-0.161-1.587-0.455-2.295-0.304-0.735-0.75-1.395-1.303-1.948-0.552-0.552-1.213-0.998-1.948-1.303-0.707-0.293-1.483-0.454-2.294-0.454s-1.587 0.161-2.295 0.455c-0.735 0.304-1.395 0.75-1.948 1.302s-0.998 1.213-1.302 1.948c-0.294 0.708-0.455 1.484-0.455 2.295s0.161 1.587 0.455 2.295c0.304 0.735 0.75 1.395 1.303 1.948 0.552 0.552 1.213 0.998 1.948 1.303 0.707 0.293 1.483 0.454 2.294 0.454s1.587-0.161 2.295-0.455c0.735-0.304 1.395-0.75 1.948-1.303s0.998-1.213 1.303-1.948c0.293-0.707 0.454-1.483 0.454-2.294zM16 12c0 0.544-0.108 1.060-0.303 1.529-0.202 0.489-0.5 0.929-0.869 1.299s-0.81 0.667-1.299 0.869c-0.469 0.195-0.985 0.303-1.529 0.303s-1.060-0.108-1.529-0.303c-0.489-0.202-0.929-0.5-1.299-0.869s-0.667-0.81-0.869-1.299c-0.195-0.469-0.303-0.985-0.303-1.529s0.108-1.060 0.303-1.529c0.202-0.489 0.5-0.929 0.869-1.299s0.81-0.667 1.299-0.869c0.469-0.195 0.985-0.303 1.529-0.303s1.060 0.108 1.529 0.303c0.489 0.202 0.929 0.5 1.299 0.869s0.667 0.81 0.869 1.299c0.195 0.469 0.303 0.985 0.303 1.529zM11 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 21v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM3.513 4.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM17.653 19.067l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4.927 20.487l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM19.067 6.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>\
  </svg>');
  --icon-sun-filter: invert(0.61) sepia(0.8) saturate(5) hue-rotate(0deg) brightness(0.92);
  --icon-moon: url('data:image/svg+xml,\
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">\
    <path d="M21.996 12.882c0.022-0.233-0.038-0.476-0.188-0.681-0.325-0.446-0.951-0.544-1.397-0.219-0.95 0.693-2.059 1.086-3.188 1.162-0.696 0.047-1.399-0.027-2.077-0.226-0.656-0.192-1.29-0.501-1.874-0.932-0.655-0.484-1.181-1.074-1.575-1.729-0.409-0.68-0.676-1.432-0.792-2.206s-0.082-1.571 0.11-2.342c0.184-0.741 0.514-1.46 0.999-2.115 0.142-0.191 0.216-0.435 0.191-0.691-0.053-0.55-0.542-0.952-1.092-0.898-1.117 0.109-2.186 0.399-3.172 0.843-1.005 0.452-1.925 1.065-2.723 1.808-0.883 0.82-1.618 1.801-2.159 2.901-0.523 1.064-0.863 2.238-0.978 3.485-0.125 1.347 0.024 2.658 0.402 3.878 0.392 1.266 1.031 2.431 1.863 3.433s1.86 1.843 3.033 2.461c1.13 0.595 2.392 0.982 3.739 1.106s2.659-0.025 3.878-0.403c1.266-0.392 2.431-1.031 3.433-1.863s1.843-1.86 2.461-3.033c0.595-1.13 0.982-2.392 1.106-3.739zM19.567 14.674c-0.126 0.351-0.276 0.689-0.447 1.014-0.493 0.937-1.166 1.76-1.969 2.427s-1.735 1.178-2.747 1.491c-0.973 0.302-2.021 0.421-3.102 0.321s-2.089-0.41-2.99-0.884c-0.937-0.493-1.76-1.166-2.427-1.969s-1.178-1.735-1.491-2.747c-0.302-0.973-0.421-2.021-0.321-3.102 0.092-1 0.365-1.938 0.782-2.786 0.43-0.878 1.018-1.661 1.725-2.319 0.64-0.595 1.377-1.086 2.183-1.449 0.179-0.081 0.362-0.155 0.548-0.223-0.092 0.257-0.171 0.516-0.236 0.778-0.256 1.029-0.302 2.091-0.147 3.121s0.51 2.032 1.056 2.941c0.527 0.875 1.23 1.663 2.1 2.306 0.775 0.573 1.622 0.986 2.5 1.243 0.907 0.266 1.846 0.364 2.772 0.302 0.752-0.050 1.496-0.207 2.21-0.465z"></path>\
  </svg>');
  --icon-moon-filter: invert(0.75);
  --background: #efefef;
  --text-color: #141414;
  --button-icon: var(--icon-moon);
  --button-icon-filter: var(--icon-moon-filter);
  --button-background: var(--color-dark);
  --button-color: var(--color-light);
  --border-color: var(--color-dark-alpha);
}
```

There’s a big chunk in there, so let’s break it down a bit:

- We define the `--color-mode` variable and set it to `'light'` by default. This is used to communicate to the JavaScript what the user’s preference is
- We’re defining some SVG icons in CSS (I know, cool, right?). I probably wouldn’t do this on a production site, but it’s a pretty cool trick, and ever since [I saw on Twitter](https://twitter.com/Una/status/1129401554732277760) that [Lea Verou](https://twitter.com/leaverou) was demoing this technique in her talk, I really wanted to have a go

The rest is pretty self explanatory theme colours and the default application of the light theme.

### Dealing with the `prefers-color-scheme` media query

We’ve got all of our base code in place now, so let’s deal with the user’s preference for `prefers-color-scheme`. We’re also going to deal with the JavaScript controlled preference, too, while we’re at it.

```css
body {
  background: var(--background);
  color: var(--text-color);
  transition: background 500ms ease-in-out, color 200ms ease;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-mode: 'dark';
  }

  :root:not([data-user-color-scheme]) {
    --background: var(--color-dark);
    --text-color: var(--color-light);
    --button-icon: var(--icon-sun);
    --button-icon-filter: var(--icon-sun-filter);
    --button-background: var(--color-light);
    --button-color: var(--color-dark);
    --border-color: var(--color-light-alpha);
  }
}

[data-user-color-scheme='dark'] {
  --background: var(--color-dark);
  --text-color: var(--color-light);
  --button-icon: var(--icon-sun);
  --button-icon-filter: var(--icon-sun-filter);
  --button-background: var(--color-light-alpha);
  --button-color: var(--color-dark);
  --border-color: var(--color-light-alpha);
}
```

Let’s cover some key bits:

- If the user prefers dark mode, inside of the media query we’re making the relevant theme changes
- In that same media query, we’re also setting the `--color-mode`, which JavaScript can hook on to
- Notice how the CSS is applied if the `<html>` (`:root`) element doesn’t have a `data-user-color-scheme` attribute. This is to prevent the default overriding the user preference
- Under the media query, we’re using this attribute selector to look for a `data-user-color-scheme` attribute with the value of `dark`. We set this with JavaScript later in this tutorial, but notice how this does the same thing as the media query. This could be refactored with a Sass mixin, but for this tutorial, we’ll wear the mild repetition

### Adding the toggle styles

The last bit of CSS is making the toggle button look cool. We interchange a sun and moon icon, as well as colouring it in the inverse of the current theme.

Add this CSS:

```css
.no-js .user-toggle {
  display: none;
}

.user-toggle {
  margin: 2rem auto 0 auto;
  padding-top: 2.5rem;
  max-width: 20rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.toggle-button {
  display: inline-flex;
  background: var(--button-background);
  color: var(--button-color);
  border: none;
  font: inherit;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  transition: background 500ms ease-in-out, color 200ms ease;
}

.toggle-button__icon {
  background: var(--button-icon);
  width: 1.2em;
  height: 1.2em;
  margin: 0 0 0 0.5em;
  filter: var(--button-icon-filter);
  transform: translateY(1px); /* Optical adjustment */
  transition: filter 500ms ease-in-out;
}

.toggle-button:focus {
  outline: 1px solid var(--button-background);
  outline-offset: 0.5rem;
}
```

It’s all mostly presentational CSS, but there’s a couple of bits I need to explain:

- By default, because the `<html>` element has a class of `no-js`, we hide the `.user-toggle` element, because everything in it requires JavaScript. This means that if a user has no JavaScript available, they’ll still get dark mode if that’s their system preference—they just won’t be able to change it
- Because we’re using CSS to render icons, we’re going to use `filter` to colour them. Check out [this handy explainer article](https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/) for how that works

Now that we’ve added all of the CSS, let’s do the JavaScript bit!

### Adding the interaction

We’ve got our [minimum viable experience](https://andy-bell.design/wrote/the-power-of-progressive-enhancement/) working, so let’s wire up some JavaScript to enhance it and give the user more control.

Add the following to your JavaScript file (or JS panel in CodePen):

```js
document.documentElement.classList.remove('no-js');
```

We’re removing the `no-js` class from the `<html>` element because we have JavaScript available. You’ll have probably noticed that the user toggle control has suddenly appeared.

Let’s set up some constants. Add the following:

```js
const STORAGE_KEY = 'user-color-scheme';
const COLOR_MODE_KEY = '--color-mode';

const modeToggleButton = document.querySelector('.js-mode-toggle');
const modeToggleText = document.querySelector('.js-mode-toggle-text');
const modeStatusElement = document.querySelector('.js-mode-status');
```

The two shouty constants are as follows:

- `STORAGE_KEY` is what we use to store the user’s preference in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- `COLOR_MODE_KEY` is what we use to extract the current CSS Custom Property value, `--color-mode`

The rest of this section is us grabbing the relevant HTML elements for later.

Next up, let’s add a function to extract the `--color-mode` value:

```js
const getCSSCustomProp = propKey => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

  if (response.length) {
    response = response.replace(/\"/g, '').trim();
  }

  return response;
};
```

This is a condensed version of the function we use in [this tutorial](https://andy-bell.design/wrote/get-css-custom-property-value-with-javascript/), which is worth reading if you’re interesting in how this function works. The end result in this tutorial is a string of either `'light'` or `'dark'`, depending on the media query situation.

Next, let’s add a function that applies the user preference that’s either set in local storage or passed in:

```js
const applySetting = passedSetting => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
    setButtonLabelAndStatus(currentSetting);
  } else {
    setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
  }
};
```

This function has one job: it tries to load a setting that’s either passed in or from local storage as a fallback—then, depending wether a setting was loaded or not, the function applies the `data-user-color-scheme` attribute if necessary. It then updates the button label and the status text with another function, which we’ll add now.

```js
const setButtonLabelAndStatus = currentSetting => {
  modeToggleText.innerText = `Enable ${currentSetting === 'dark' ? 'light' : 'dark'} mode`;
  modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
};
```

As you can see, we set the text depending on what the current colour mode is. Because we’ll have a `'dark'` or `'light'` value, either from local storage _or_ the CSS property, we can safely set the button to be the inverse, and the status to announce what the colour mode currently is.

Next, let’s add the code that toggles the colour mode:

```js
const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
      break;
    case 'light':
      currentSetting = 'dark';
      break;
    case 'dark':
      currentSetting = 'light';
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};
```

The first thing that this function does is try to load the current setting from local storage. It then runs what it got through a switch. If the setting is found, we invert it. If not, we load from CSS, then invert that instead.

The last thing this function does is return the setting that it calculated.

The last thing we do in this tutorial is add an event to the button, then apply the setting by default, and then we are done!

```js
modeToggleButton.addEventListener('click', evt => {
  evt.preventDefault();

  applySetting(toggleSetting());
});

applySetting();
```

In the click handler, we pass the value that was returned by `toggleSetting()` straight into `applySetting()`. Job done. We run `applySetting()` by default to make sure that the user’s preference is applied on page load.

Here’s a demo of the final, working system:

{% codepen '163767d9126b8d5559cff3990ba5f826', 'result', 'Piccalilli  Issue  #10 — User controlled dark mode' %}

## Wrapping up

This little tutorial gets you going in the right direction, but there’s plenty of work to do to get it up to speed on your website. The most important thing that you need to do is make sure that both your light **and** dark themes are fully accessible—especially in terms of colour contrast. There are many tools you can use for this. I prefer to use [tota11y](https://khan.github.io/tota11y/).

You can also improve this system further. A couple of quick ideas are:

- Observe changes to the user’s dark/light mode setting, probably via the `prefers-color-scheme` media query and update the default state accordingly
- Refactor the CSS theming to not repeat itself as much. I personally would roll out some [Sass](https://sass-lang.com/) for this situation
