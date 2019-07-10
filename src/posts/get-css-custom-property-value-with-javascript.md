---
layout: 'layouts/post.njk'
title: 'Get a CSS Custom Property value with JavaScript'
date: '2019-04-09'
tags: 'writing'
permalink: '/wrote/get-css-custom-property-value-with-javascript/index.html'
---

[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) are handy for making highly configurable CSS components and themes, but that’s not their only handy use. Sometimes you might want to do something like send some information to some JavaScript.

In the past, I’ve done something like this to get the current breakpoint without querying the `window` width:

**CSS**:

```css
body::before {
  content: 'mobile';
  display: none;
}

@media screen and (min-width: 30rem) {
  body::before {
    content: 'large-mobile';
  }
}

@media screen and (min-width: 70rem) {
  body::before {
    content: 'desktop';
  }
}
```

**JavaScript**

```js
function getBreakpoint() {
  return getComputedStyle(document.querySelector('body'), ':before')
    .getPropertyValue('content')
    .replace(/\'|"/g, '');
}
```

This approach very much does the job, but with CSS Custom Properties, we can have a little more flexibility and using properties to send values feels more...um...right.

## The `getCSSCustomProp` function

I needed to see if CSS scroll snapping was supported in my JavaScript component and messed around for _too long_ looking for a JavaScript solution. It dawned on me that CSS could [cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) for me and communicate the status back up to my JavaScript with a little bit of magic.

I set a default value on the component like this:

```css
.my-component {
  --supports-scroll-snap: 0;
}
```

Then, using `@supports`, I can do this:

```css
@supports (scroll-snap-type: x mandatory) {
  .my-component {
    --supports-scroll-snap: 1;
  }
}
```

Then, finally, the JavaScript runs this:

```js
const myComponent = document.querySelector('.my-component');
const isSnapSupported = getCSSCustomProp('--supports-scroll-snap', myComponent, 'boolean');
```

That all runs off this function:

```js
/**
 * Pass in an element and its CSS Custom Property that you want the value of.
 * Optionally, you can determine what datatype you get back.
 *
 * @param {String} propKey
 * @param {HTMLELement} element=document.documentElement
 * @param {String} castAs='string'
 * @returns {*}
 */
const getCSSCustomProp = (propKey, element = document.documentElement, castAs = 'string') => {
  let response = getComputedStyle(element).getPropertyValue(propKey);

  // Tidy up the string if there's something to work with
  if (response.length) {
    response = response.replace(/\'|"/g, '').trim();
  }

  // Convert the response into a whatever type we wanted
  switch (castAs) {
    case 'number':
    case 'int':
      return parseInt(response, 10);
    case 'float':
      return parseFloat(response, 10);
    case 'boolean':
    case 'bool':
      return response === 'true' || response === '1';
  }

  // Return the string response by default
  return response;
};
```

## Wrapping up

This trick isn’t dissimilar to the original hack that I did with breakpoints on the `body`. The main difference now is that we’re passing actual properties, rather than hiding values in content. It feels a hell of a lot cleaner.

You can grab this function from [this Gist](https://gist.github.com/andybelldesign/c119528bead18261c424c735a6fb08da) and hopefully, it’ll help you out.
