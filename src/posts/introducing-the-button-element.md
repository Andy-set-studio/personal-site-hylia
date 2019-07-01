---
layout: 'layouts/post.njk'
title: 'Introducing the Button element'
date: '2018-10-03'
tags: 'writing'
hasCodePen: true
---

How many times have you thought to yourself something like this?

> "As much as I love making `<div>` elements buttons, it'd be great if there was an npm package that I could install that would give me keyboard events and focus."

Think no more, because I have exciting news. There's a _native_ element called a `<button>`, and I'm here to talk about it with you today.

## A what now?

A `<button>` gives you everything you want out of the box:

- It's focusable
- If you attach a `click` event, you get keyboard events for ✨FREE✨
- A screen reader will announce it appropriately
- It's primary function is not dividing content, it's actually an interactive element

Best of all, it's already in _every_ browser!

## Oh, these are hard to style, though

Ah yes, the primary reason we find lots of `<div onClick={this.myFunction}>` in our `hot-framework.js` codebases is that buttons are tough to style, apparently. What if I told you that a few of lines of CSS will make it look like a standard element, though?

```css
button {
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif; /* Use whatever font-family you want */
  font-size: 1rem;
  line-height: 1;
  background: transparent;
  -webkit-appearance: none;
}
```

Pretty neat, huh? Wanna see it in action? No build steps required, my friend—_just_ use some HTML and CSS 🎉.

Here's a demo in CodePen for convenience:

{% codepen 'OBMxeR', 'css,result', 'A basic button reset' %}

Are you fan of using JavaScript to style your elements? Here's an object that you can steal:

```javascript
const buttonStyles = {
  display: 'inline-block',
  border: 'none',
  margin: '0',
  padding: '0',
  'font-family': 'sans-serif',
  'font-size': '1rem',
  background: 'transparent',
  'line-height': '1',
  '-webkit-appearance': 'none'
};
```

## Wrapping up with serious note

Although there are elements of satire to this post, it's got a really important message. You get so much for free by using appropriate HTML elements. Sure, they can be a pain in the butt to style, but the tradeoff is minimal—especially when they'll make the overall user experience _much_ better. Don't make users suffer for your personal convenience.

Hopefully with the above styles, or even a [more detailed version like this one](https://codepen.io/hankchizljaw/details/Vxpjvo/), you'll consider using `<button>` elements instead of `<div>` elements for buttons in your apps and websites. I also recommend that you look at the [A11y Nutrition Card](https://davatron5000.github.io/a11y-nutrition-cards/#button), by [Dave Rupert](https://daverupert.com) to make sure you're meeting accessibility standards.

We're all in this together to make our user's lives easier because that's the real priority.
