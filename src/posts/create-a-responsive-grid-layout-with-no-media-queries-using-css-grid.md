---
layout: 'layouts/post.njk'
title: 'Create a responsive grid layout with no media queries, using CSS Grid'
subTitle: 'Piccalilli CSS Utility — Issue #6'
issueSlug: '/issues/6'
date: '2019-05-03'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

Embracing the flexible nature of the web gives us powerful, resilient front-ends, where instead of using specific sizes, we give elements sensible boundaries and let them auto-fill where possible. I embrace this mentality as much as possible and roll utilities out like this one for grid layouts:

{% codepen '01efa376f3b08fd14eb87627a433f25e', 'result', 'Piccalilli CSS Utility — Issue  #6 — Responsive grid  with no media queries — Example' %}

It’s a fully responsive grid that uses **no media queries** to work across **all** viewports and it’s all thanks to [CSS Grid](https://css-utilitys.com/snippets/css/complete-guide-grid/).

## How it works

First of all, let’s take a look at the code:

```css
.auto-grid {
  --auto-grid-min-size: 16rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
```

CSS Grid is incredibly powerful for layout but usually, this type of flexible layout utility should use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)—by proxy of its _flexibility_. The reason we use grid for this particular utility, though, is the magic that is `minmax`. This handy function is what allows us to clamp our sizes to maintain just the _right amount_ of control.

What the CSS above does is lay out your grid items with a fixed minimum width. It then expands to fill remaining available space where it can, because we use a fractal unit (`1fr`) for its max width value. The remaining available space is split up equally between the items inside `.auto-grid`, so by using `1fr` as the max value for each item, we use `x%` of the remaining available space per item. This means that if there are 10 items, `x` is equal to 10% of the remaining available space. This is how we get that nice flexibility with a light seasoning of absolute control that we’re after.

---

🔥 **Pro tip:** _The `--auto-grid-min-size` [Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) powers the minimum width. I set this as a Custom Property because I never know where this layout will appear—so by making the min-width easily configurable, it can be modified to work in specific contexts. This is handy for design system work._

---

## How can we improve this layout utility?

Because this `.auto-grid` utility will keep trying to fill remaining available space, it’s useful to either give the layout itself a maximum width or wrap it with a shared `.wrapper` utility. I prefer the latter approach because I work with design systems/components libraries a lot, so I’m very reticent to explicitly size a particular element, unless I absolutely _have_ to.

### HTML

```html
<div class="wrapper">
  <ul class="auto-grid">
    <!-- items go here -->
  </ul>
</div>
```

### CSS

```css
.wrapper {
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}
```

### Example

{% codepen '313a9a10e486da4f8a6a3f06330951e8', 'result', 'Piccalilli CSS Utility — Issue  #6 — Responsive grid  with no media queries — Wrapper' %}

Making the `.wrapper` a separate utility means we can use it wherever we need it. Some good ol’ portability!

Because the `.wrapper` has a `max-width` set, it’ll support all viewports, too, without using media queries. The padding provides a gutter, so at tiny viewports, you get a `1rem` sized gap at each side, which is ideal. The `.wrapper` is a responsive design power utility.

## Progressive enhancement

[CSS Grid support](https://caniuse.com/#feat=css-grid), at the time of writing is `92.33%`, so the _vast majority_ of browsers have support for it. We _can_ improve our code to provide a default experience for the minority of users that don’t have support for it with a [minimum viable experience](https://andy-bell.design/wrote/the-power-of-progressive-enhancement/), though.

{% codepen '1714751b269c648b2798937484dc6707', 'result', 'Piccalilli CSS Utility — Issue  #6 — Responsive grid  with no media queries — Progressive enhancement' %}

In my opinion, the minimum viable experience of this context is stacked items with some vertical margin between each one:

```css
.auto-grid {
  --auto-grid-min-size: 16rem;
}

.auto-grid > * {
  max-width: 400px;
}

.auto-grid > * + * {
  margin-top: 1rem;
}

@supports (display: grid) {
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  }

  .auto-grid > * {
    max-width: unset;
  }

  .auto-grid > * + * {
    margin-top: unset;
  }
}
```

As the code block demonstrates, the minimum viable experience removes that default style using `@supports` which detects CSS Grid support. This sample will work fine all the way back to _super old_ IE browser versions. You could even use floats and Flexbox if you absolutely wanted a grid-like layout for _all_ browsers. You could also use the [Scroll Track Utility](https://andy-bell.design/wrote/progressive-overflow-management-with-a-scroll-track-utility/) as a happy medium.

Utilising the forgiving nature of CSS to build up, rather than fix and break down will very likely result in you writing better, lighter code, so finding the lowest-tech approach to compatibility issues is only ever going to be a good thing.

### Wrapping up

I use this snippet of CSS _a tonne_ and also use the `.wrapper`, extensively in every project that I work on. Hopefully this post has demonstrated the power of modern CSS and how we can write very little to achieve _a lot_.

Even the progressively enhanced version that supports _all_ browsers is tiny. It’s so much tinier than writing hacks and specific browser CSS!

If you do end up using this utility, let me know on [Twitter](https://twitter.com/andybelldesign). I’d love to see [these utilities](https://codepen.io/collection/ngRQEr/) provide real value for people.

---

🙌 _Big thanks to the [amazing teaching](https://gridbyexample.com/) of [Rachel Andrew](https://twitter.com/rachelandrew) where I learned tricks like this and a **tonne** more about CSS Grid._
