---
layout: 'layouts/post.njk'
title: 'Create a split, faux-container layout with CSS Grid and Flexbox'
subTitle: 'Piccalilli CSS Utility — Issue #9'
issueSlug: '/issues/9'
date: '2019-05-24'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

One of my favourite things about CSS Grid and Flexbox is that you can create unconventional layouts a heck of a lot easier than before we had proper layout tools available to us. One example of these layouts is splitting the traditional center container that [most websites have](https://getbootstrap.com/docs/4.3/layout/overview/) in two, while maintaining its position.

This is what we’re building. It’s a split layout that breaks an article of content into separate, coloured panels.

![A layout that features 6 panels, split equally 50/50. They are all different colours and feature white text.](https://res.cloudinary.com/andybelldesign/image/upload/c_scale,f_auto,q_auto,w_1400/v1558651191/misc/center-split-what-were-building_lb6zmq.png)

This layout enables some cool design opportunities and I’m going to show you how it works, so let’s dive straight into the code.

## How to build this layout

There’s a fair bit of stuff to compose this layout, so let’s break it into small pieces and run through it step-by-step.

### Laying the foundations

<small><em>You can skip this section completely and fork the base code on [CodePen](https://codepen.io/andybelldesign/pen/a08e772950243153620d63707e0d4431). If not, follow along to add the following base code.</em></small>

First up, you’re going to need some HTML, so grab the following and stick it in your text editor / [CodePen](https://codepen.io/pen) editor.

```html
<article>
  <div class="center-split">
    <h1>
      <span>Equal center split layout</span>
    </h1>
    <p>
      <span>
        Each item of <code>.center-split</code> is 50% wide. The content within is sized
        with the <code>--center-split-max-width</code> Custom Property. Inner content in
        all items is pushed into the center.
      </span>
    </p>
  </div>
  <div class="center-split">
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi
        porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Maecenas sed
        diam eget risus varius blandit sit amet non magna.
      </span>
    </p>
    <h2>
      <span>A large subheading</span>
    </h2>
  </div>
  <div class="center-split">
    <p>
      <span>
        Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta
        gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis
        consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula
        ut id elit. Sed posuere consectetur est at lobortis.
      </span>
    </p>
    <p>
      <span>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta
        felis euismod semper. Donec id elit non mi porta gravida at eget metus. Maecenas
        sed diam eget risus varius blandit sit amet non magna.
      </span>
    </p>
  </div>
</article>
```

You’re probably thinking something like _“what the heck is that extra markup doing?”_ It’s all needed to achieve this effect, and I’ve tried to keep things as clean as possible (as much as adding extra markup pains me).

Next up: it’s time to add some global CSS styles. In your CSS file or CodePen, add this CSS:

```css
body {
  background: #141414;
  color: #f3f3f3;
  line-height: 1.6;
  font-family: Georgia, serif;
}

h1,
h2,
h3 {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.1;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  max-width: 30ch;
}

h2 {
  font-size: 2rem;
}

code {
  font-size: 1.2em;
  border: 1px solid #c1c1c1;
  white-space: pre;
  padding: 2px;
  font-weight: 700;
}

@media (min-width: 720px) {
  article > h1,
  article > p {
    margin-left: 3rem;
  }
}
```

Cool—we’ve got our base HTML and CSS in place. You might also want to add this [reset](https://codepen.io/andybelldesign/pen/Ygmwym.css) that I use for my demos.

This is what you should have so far:

{% codepen 'a08e772950243153620d63707e0d4431', 'result', 'Piccalilli CSS Layout — Issue  #9 — Split container — Starting point' %}

### Creating the `.center-split` layout

The effect we are trying to achieve is that [traditional centered container](https://getbootstrap.com/docs/4.3/layout/overview/), but split in half. The child items bleed out to be half of the width of the screen, so on first look, it probably seems like it’ll be tricky, but it’s not as tricky as you might think.

Add the following to your CSS:

```css
.center-split {
  --center-split-max-width: 30vw;
}
```

We’ve defined a [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) which will tell the layout how wide you want **each split** to be. We’ve set it to be `30vw` which means the “faux container” will be `60vw` wide in total.

Next, add this to your CSS:

```css
.center-split > * {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
}

.center-split > img,
.center-split > picture,
.center-split > video {
  display: block;
  padding: 0;
  object-fit: cover;
}
```

The first block sets each child element of the `.center-split` layout to be a Flexbox element. This is to make aligning and nudging the inner content a bit easier. By default, it’ll be vertically aligned to the top because of `flex-direction: column` and `justify-content: flex-start`. You could use `justify-content` to align the content how you like, though.

The second block removes some of that CSS for specific elements where it _could_ be a problem. For me, personally, I don’t want images and videos to be affected by the padding and flex. You could safely remove this block if you wanted.

Right at the end of the block there is an `object-fit` rule. This is set because the image/video will get stretched out all over the place, so the `object-fit` rule will maintain some order by cropping the content.

Next up, add this big ol’ block of CSS:

```css
@media (min-width: 720px) {
  /* [1] */
  .center-split {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: stretch;
  }

  /* [2] */
  .center-split > * > * {
    max-width: var(--center-split-max-width);
  }

  /* [3] */
  .center-split > *:nth-child(odd) > * {
    margin: 0 0 0 auto;
  }

  .center-split > *:nth-child(even) > * {
    margin: 0 auto 0 0;
  }

  /* [4] */
  .center-split > img,
  .center-split > picture,
  .center-split > video {
    max-width: 100%;
    margin: 0;
  }
}
```

There’s a lot going on, so I’ve added a numbered comment (E.G. `/* [1] */`) for each section of interest. Also notice that this is all inside a media query, where the min screen width is 720px.

1. We start off by creating a grid and setting it to have two columns that are 50% wide. We also set the alignment to `stretch` so that each side is equal in height.
2. Then, we select the direct sub-children of the `.center-split` child elements using what I like to call, the “[Phineas](https://www.imdb.com/title/tt0852863/mediaviewer/rm871382272) Selector” (`* > *`), and apply our `--center-split-max-width` to them.
3. We tell **even** sub-children to push in from the right and **odd** sub-children to push in from the left with auto margins.
4. Lastly, we reset `max-width` and `margin` on media elements because we want them to bleed out. Feel free to delete this if you wish.

That’s it for the layout. Let’s see where we’re at with this pen:

{% codepen 'b99f2a0b9f7f216bb1eeb02c0988ac0e', 'result', 'Piccalilli CSS Layout — Issue  #9 — Split container — Layout only' %}

Let’s jazz it up a bit and add some design flair. Add this CSS:

```css
.center-split {
  color: #f3f3f3;
  font-size: 1.35rem;
}

.center-split h1,
.center-split h2 {
  background: #03435b;
  font-size: 2rem;
  text-transform: uppercase;
}

.center-split:nth-of-type(1) > p {
  background: #022b3a;
}

.center-split:nth-of-type(2) p {
  background: #923e30;
}

.center-split:nth-of-type(2) h2 {
  background: #b84e3d;
  justify-content: flex-end;
}

.center-split:nth-of-type(3) p:first-child {
  background: #1c6e7e;
}

.center-split:nth-of-type(3) p:last-child {
  background: #134a54;
}

@media (min-width: 720px) {
  .center-split h1,
  .center-split h2 {
    font-size: 3.75rem;
  }
}
```

That’s all pretty self explanatory, presentation CSS. You could merge that in with your layout code if you wanted to, too. As you can see, it looks super smart now!

{% codepen '15af3e96dd733e9027cec854b81aaed6', 'result', 'Piccalilli CSS Layout — Issue  #9 — Split container — Complete' %}

### Applying a different context

This layout isn’t limited to just coloured blocks of text. There’s a very deliberate reason that I reset media styles because this layout works great when you mix media and text together. Check out this example:

{% codepen '26b68505545345dc238d64274d07d03e', 'result', 'Piccalilli CSS Layout — Issue  #9 — Split container — Images Example' %}

Having an image for each block of text creates a really nice design. It currently works based on markup source order, but you could do some fancy CSS Grid re-ordering, [with care](https://www.matuzo.at/blog/the-dark-side-of-the-grid-part-2/) if you wanted.

## Why use CSS Grid?

I like to use CSS Grid where there’s _fixed sizes_, where appropriate. Even though we’re setting each “panel” to be 50% wide, we’re still setting them specifically and not letting the elements size themselves with assistance, which is when Flexbox is really useful.

This layout could be re-created with Flexbox with not much effort, so if you want to support an extra few percent of browsers, have at it!

## Wrapping up

This is a pretty nice design pattern with some handy layout tricks and hopefully, you can use it for your stuff.

If you do end up using it, please [email me a link](mailto:me@andy-bell.design) or send me a link on [Twitter](https://twitter.com/andybelldesign). I love to see when folks make use out of the tutorials I write.
