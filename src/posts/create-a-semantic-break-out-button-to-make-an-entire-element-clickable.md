---
title: 'Create a semantic “breakout” button to make an entire element clickable'
date: '2019-09-27'
tags: ['writing']
permalink: '/wrote/create-a-semantic-breakout-button-to-make-an-entire-element-clickable/index.html'
hasCodePen: true
---

A common design pattern is to have something like a “card” element that has to be fully clickable. This is usually because it links to another page or triggers a JavaScript action.

The problem though, is that often, you end up with stuff that looks like this:

```html
<div onClick="alert('Nope')">Please don’t ever do this.</div>
```

You should absolutely never attach a click event to a `<div>` element, though, even if you sprinkle it with [aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) to “fake” a real button. [Although this is technically possible](/wrote/context-and-caveats/), if assistive technology doesn’t support the aria roles in question, the user will just get `<div>`s and nothing else. **Not cool**.

In this article, we’re going to remedy this common crime by instead using the magic of CSS to give us the desired fully clickable element effect, while also using proper semantic elements and JavaScript and as an enhancement.

## What we’re making

We’re going to use the context of an `<article>` that when a button is clicked, a JavaScript alert fires. Here’s a CodePen demo:

{% codepen '3b85e3dbeaa97221d06a9d055541f680', 'result', 'Semantic “break-out” button' %}

To code along, you’re going to need a HTML file, a CSS file and a JavaScript file. I recommend that you use a service like [CodePen](https://codepen.io/) that does all of this for you.

For the rest of this section, we’re going to be laying the foundations. If you’re in a rush, you can [skip this section](#heading-creating-the-breakout-button-component) and use this [starter CodePen](https://codepen.io/andybelldesign/pen/43dd6339a10e9830264524bbdef3fcfc) instead.

### Getting started with markup

We need some HTML to work with, so add this:

```html
<article class="box">
  <h1>A semantic, breakout button</h1>
  <p>This whole box is clickable, but still uses a button element, correctly.</p>
  <button class="breakout-button" type="button">Say Hi 👋</button>
</article>
```

We’ve got an article, a heading, a paragraph and a button. Job done for HTML for now.

### Base CSS styles

Before we get into the proper CSS stuff, let’s set some base styles. Add this CSS:

```css
body {
  background: #efefef;
  padding: 3rem 2rem;
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.2rem;
}

h1 {
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
}

.box {
  color: #fff;
  padding: 2rem;
  max-width: 30rem;
  background: #252525;
  position: relative;
  box-shadow: none;
  transition: transform 300ms ease-in-out, box-shadow 400ms ease, background 100ms ease;
}

.box:hover,
.box:focus-within {
  background: #111111;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  transform: translateY(-0.5rem);
}

.box > * + * {
  margin-top: 1em;
}
```

Looking pretty decent, right? That’s it for our base styles.

## Creating the breakout button component

We’ve got base styles, so let’s focus all of our attention on the `.breakout-button` component.

### Core component styles

In your CSS, add the following:

```css
.breakout-button {
  font: inherit;
  font-weight: 600;
  padding: 0.6rem 2rem;
  background: transparent;
  color: currentColor;
  border: 1px solid;
  transition: background 100ms ease;
  position: static;
}
```

Here, we have some simple styles for our button which make it looks nicer. A handy takeaway trick here is that because we are using `font: inherit` and `color: currentColor`, we get all of our text styles for free, using the cascade, which is by far my favourite aspect of CSS. Also notice that we are setting `.breakout-button` to be `position: static`. This is because we want our “breakout element” (coming up) to literally _break out_ of the button!

Related to this is that the `.box` element has `position: relative`, which means that any child elements without a relative parent that have `position: absolute` will be contained in this `.box`. Because that’s what our breakout button will do as its sole purpose, you should always remember to make its containing parent behave like this. The `position: static` on the `.breakout-button` itself is a failsafe to make sure the “breakout element” isn’t ever contained to the `.breakout-button` element.

Right, let’s add some more code. Under the `.breakout-button` component style, add this CSS:

```css
.breakout-button,
.breakout-button::before {
  cursor: pointer;
}
```

We’ve set both the button and its [`::before` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) to have a `pointer` cursor. There’s some contention around wether a `<button>` should have a `pointer` cursor and I very much sit in the camp that by proxy of exposure, it is now an expected style and shouldn’t really have a negative user experience impact.

Anyway, we digress… Add the following CSS to create the “breakout element”:

```css
.breakout-button::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

It’s pretty straightforward. We make this pseudo-element an absolutely positioned block element that will “break out” until it hits the bounds of a [relative, absolute or fixed](https://developer.mozilla.org/en-US/docs/Web/CSS/position) parent. In our context, this parent is the `.box` element because it has `position: relative` set.

The “breakout element” is visually hidden, so to help you understand how it behaves, check out this demo where I’ve added some colour to it:

{% codepen '87e1796e1212d6759faf9bca250f4e1f', 'result', 'Semantic “break-out” button (pseudo element exposed)' %}

### Interactive styles

Now that we’ve got the core component setup, let’s style up the interactivity. Add this to your CSS:

```css
.breakout-button:focus {
  outline: none;
}

.breakout-button:hover {
  background: #333333;
}
```

The first thing we do is remove focus outline from the button. I can’t stress this enough, though: you **must** have visible focus styles for interactive elements, so keyboard users can actually see where their focus currently is. If you remove the default `outline` CSS rule, you **must** replace it with something effective and obvious.

This is exactly what we’re going to do now, by adding a solid outline to our “breakout element” when the parent button is focused. Add this CSS:

```css
.breakout-button:focus::before {
  outline: 1px solid #ffffff;
  outline-offset: -0.8rem;
}
```

Now that we’ve sorted our button out, let’s add some hover styles to our `.box` element. Add this to your CSS, with all of the other `.box` styles:

```css
.box:hover,
.box:focus-within {
  background: #111111;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  transform: translateY(-0.5rem);
}
```

This makes our box shift up either on hover, or if there’s focus inside it, which means when our button element is focused, our box’s appearance will change.

That’s it! Our “breakout button” finished and this is what it should look like:

{% codepen '3b85e3dbeaa97221d06a9d055541f680', 'result', 'Semantic “break-out” button' %}

## Improving our breakout button with progressive enhancement

As usual, I make you think that you’re done, but then slip in some progressive enhancement when you least expect it, because as it stands, our project is just _ok_. Because we’re using a `<button>`, it’ll be about as useful as a chocolate teapot when JavaScript isn’t available. What we’re going to do to fix this is hide the button by default with a `hidden` attribute, and when JavaScript is available, we’ll show it by removing the `hidden` attribute.

We’re also going to add a bonus bit of attention to detail and only display the interactive states when JavaScript is available too, using a [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) as a style hook.

Open up your HTML and add a `hidden` attribute to the `<button>` like this:

```html
<button class="breakout-button" type="button" hidden>Say Hi 👋</button>
```

Now we need to add some JavaScript to show the `<button>` by removing that `hidden` element:

```javascript
const button = document.querySelector('.breakout-button');

if (button) {
  button.removeAttribute('hidden');
}
```

Like I said above, though, we should also only show interactive styles such as `:hover` and `:focus` states when the button is available too. Let’s replace your existing JavaScript with this JavaScript:

```javascript
const button = document.querySelector('.breakout-button');

if (button) {
  button.parentElement.setAttribute('data-interactive', '');
  button.removeAttribute('hidden');

  button.addEventListener('click', evt => {
    evt.preventDefault();

    alert('Oh hi there 👋');
  });
}
```

We’ve added an event handler for the button’s click event, but most importantly, we’ve added a `data-interactive` attribute to the button’s parent, which means we can now use this as a style hook.

Amend your CSS by deleting this block:

```css
.box:hover,
.box:focus-within {
  background: #111111;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  transform: translateY(-0.5rem);
}
```

And now, replace it with this block:

```css
[data-interactive]:hover,
[data-interactive]:focus-within {
  background: #111111;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  transform: translateY(-0.5rem);
}
```

Now, the `.box` will behave like a normal element when JavaScript isn’t available, like so:

{% codepen 'b853fb1a71529dfb1e4cc97d154fd0dc', 'result', 'Semantic “break-out” button - progressive enhancement (JS disabled)' %}

## Wrapping up

That’s it, we’re done. Yours should now look like this:

{% codepen 'NWKmqRm', 'result', 'Semantic, progressively enhanced “break-out” button' %}

Hopefully this article shows that when you think outside the box (or inside it in this context), CSS, semantic HTML and a sprinkle of JavaScript can give you solid, progressive components that work for everyone.
