---
layout: 'layouts/post.njk'
title: 'Progressive overflow management with a scroll track utility'
subTitle: 'Piccalilli CSS Utility — Issue #4'
issueSlug: '/issues/4'
date: '2019-04-18'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

You probably know the old classic responsive design scenario where you’ve got a row of 3 or 4 items that looks great on large viewports, but on small viewports, it’s a long, stacked list of repetitive strain injury inducing content. It’s a pretty suboptimal situation and it can be incredibly frustrating for users. One trick I sometimes use to avoid this is a `.scroll-track` utility.

## Scroll track

First of all, it’s impossible to use this utility and not have “[Bombtrack](https://song.link/s/6ZU9RJIZ0fNaFuQM57bDIA)” by Rage Against the Machine stuck in your head for the rest of the day. Aside from that catchy ear-worm, `.scroll-track` is a tiny CSS utility that packs a punch. My favourite type.

### The code

```css
.scroll-track {
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.scroll-track > * {
  flex-shrink: 0;
}
```

This utility leans on flexbox’s default behaviour, where it will automatically layout items _horizontally_ if there’s no intervention from a `flex-wrap` rule. By setting `overflow-x` to auto and the child items to `flex-shrink: 0`, we get a nice, resilient overflow mechanism where items will size themselves, but not shrink as they run out of space.

The small design and interaction detail is using `-webkit-overflow-scrolling: touch;`, which tells WebKit browsers—specifically on iOS devices to use inertia scrolling, which gives users a nice, native feel.

## Examples

This first example is a site header context with a typical navigation menu pushed out to the right. Nothing revolutionary going on here.

On small viewports, this list of inline links can become a bit of a problem and oftentimes, designers will roll out a hamburger menu or just stack the links vertically. Neither option is very useful. With `.scroll-track`, we can leave it all as it is and let it _flow_. With a bit of shadow to indicate that there’s content to reveal—thanks to [Lea Verou](https://twitter.com/LeaVerou)’s [legendary trick](http://lea.verou.me/2012/04/background-attachment-local/)—we’ve got ourselves a tidy progressive solution to a common problem.

{% codepen 'EJwOgE', 'result', 'Piccalilli CSS Utility #4 — Scroll Track — Navigation' %}

---

The second example is a classic scenario of some images in a basic gallery. If there were a lot of items that stacked on a small viewport, it could be pretty frustrating for a user.

Thankfully, `.scroll-track` allows us to roll out a nice semantic list of images and we’re done!

{% codepen 'XQaooX', 'result', 'Piccalilli CSS Utility #4 — Scroll Track — Gallery' %}

## Making `.scroll-track` more useful

Just like in the gallery example, sometimes it’s nice to have the row of content horizontally centered.

Because `display: flex` behaves like `display: block` in terms of flow, the `.scroll-track` element will fill the remaining horizontal space by default. We can mitigate this by creating a modifier that will change it to `display: inline-flex`, which makes it behave more like an `inline-block` element.

```css
.scroll-track--fluid {
  display: inline-flex;
}
```

This `.scroll-track--fluid` [BEM](https://css-tricks.com/bem-101/) modifier does exactly that. If the parent—which in the context of the gallery example is the `<body>`—has `text-align: center` set, the `.scroll-track` element will sit horizontally centered by default. This makes an already handy and progressive utility even more useful.

## Wrapping up

Hopefully you can roll out this utility on your projects to save some vertical scrolling for small-viewport users. If you wanted to push it even further, you can add some [snap points](https://css-tricks.com/introducing-css-scroll-snap-points/) and create a basic, pure CSS slider. Pretty handy, right?

If you do end up using this utility, let me know on [Twitter](https://twitter.com/andybelldesign). I’d love to see [these utilities](https://codepen.io/collection/ngRQEr/) provide real value for people.
