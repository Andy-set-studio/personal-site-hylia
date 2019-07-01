---
layout: 'layouts/post.njk'
title: 'Creating an aspect ratio CSS utility'
subTitle: 'Piccalilli CSS Utility — Issue #3'
issueSlug: '/issues/3'
date: '2019-04-12'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

Until we get a native aspect ratio unit in the browser: achieving a controlled height based on a container’s width might seem difficult in a responsive design at first glance. It is actually pretty darn trivial, thanks to good ol’ padding and a touch of positioning magic _(read: hacking)_.

## The utility’s code

We’ve got a two for the price of one going on here:

```css
[class*='ratio-'] {
  display: block;
  position: relative;
}

[class*='ratio-'] > * {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.aspect-ratio-wide {
  padding-top: 56.25%;
}

.aspect-ratio-square {
  padding-top: 100%;
}
```

<small>🔥 _**Pro tip**: The_ `[class*='']` _selector looks for elements that **contain** whatever you put in the quotes. It’s handy for querying parts of a selector when you’re not 100% sure of an element’s construction._</small>

We’ve got two separate classes that specify a ratio and then a shared bit of CSS that is common to both.

The `.aspect-ratio-*` class creates a relatively positioned container because its direct descendant is absolutely positioned. Adding a top padding value of `X%` means that the container will have `X%` of its own width as vertical padding.

This padding value is the magic of the aspect ratio utility, because no matter how wide or narrow the container gets, the height will always be relative to its width. It’s a tidy little _CSS algorithm_.

The absolute positioning serves two purposes, too: it makes it easier for the child element to fill its container—but more crucially—it prevents that child element from affecting its parent’s padding.

## Examples

This utility is flexible and can be used in a number of contexts. Here’s two common ones.

### Image gallery

Sometimes it’s handy to render out a list of square images in a grid. We all know images can vary in size, so the mixture of `.aspect-ratio-square` and some `object-fit` gives you exactly what you want, with a _tiny_ amount of CSS (even to generate a completely responsive grid).

This is thanks the the `.aspect-ratio-square` utility having a `padding-bottom` value of `100%`, which is what makes it a perfect square.

{% codepen '4ef169f75b6a9bb99b3c7ca15e0ccf76', 'result', 'Piccalilli CSS Utility — Issue  #3 — Aspect Ratio Utility — Square' %}

### Video embed

One thing that can be a bit of a head scratcher is responsive video embeds. Not with the ratio utility, though!

If you add `.aspect-ratio-wide` to the container of the `<iframe>`, it adds a bottom padding value of `56.25%`, which gives you a `16:9` aspect ratio, regardless of width. The CSS also takes precedence over the `width` and `height` attributes, which you can still use to set sensible defaults for if your CSS fails. [Progressive enhancement](https://andy-bell.design/wrote/the-power-of-progressive-enhancement/) in action.

{% codepen 'a27c533e0008d2de2612f3b564ec1a71', 'css,result', 'Piccalilli CSS Utility — Issue  #3 — Aspect Ratio Utility — Wide' %}

## Wrapping up

With only a few lines of CSS, we’ve got a handy little CSS algorithm that gives us aspect ratio. It’s frustrating that we’re having to use absolute positioning within the utility, but that won’t be the case forever because that [magic `aspect-ratio` unit](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/) is only around the corner.

When it arrives, we’ll be able to extend _this_ utility to use the new `aspect-ratio` unit as a progressive enhancement. Until then, you can [read the draft spec](https://drafts.csswg.org/css-sizing-4/) in preparation.
