---
layout: 'layouts/post.njk'
title: 'Custom Property controlled fluid type sizing'
subTitle: 'Piccalilli CSS Utility — Issue #1'
issueSlug: '/issues/1'
date: '2019-03-29'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

In a responsive layout, something that can be difficult to solve gracefully is type sizing. It’s a conundrum that has been easier to solve with CSS preprocessors, such as Sass or even setups where JavaScript assists styles.

I’m a big fan of using the web platform, so I wanted to solve this with pure, vanilla CSS!

## How it works

Without getting too much into the weeds, you set a **min size** and a **max size** (with optional min and max **screen** sizes), and the calc-based formula works out a _fluid measure_, on the fly, based on those **2 locks** and the `window`’s current width.

This means that you get the best of both worlds: type that scales with the viewport, and also some control so things don't get out of hand.

Pretty neat, right?

### Code

```css
.fluid-type {
  --fluid-type-min-size: 1;
  --fluid-type-max-size: 2;
  --fluid-type-min-screen: 20;
  --fluid-type-max-screen: 88;

  font-size: calc(
    (var(--fluid-type-min-size) * 1rem) + (var(--fluid-type-max-size) - var(--fluid-type-min-size)) * (100vw - (var(--fluid-type-min-screen) * 1rem)) /
      (var(--fluid-type-max-screen) - var(--fluid-type-min-screen))
  );
}
```

## Demo

In this demo, I’ve laid out a very typical article with headings, paragraphs and a `<blockquote>`. Those elements are attached to the fluid type utility (`.fluid-type`), and the paragraphs are set with a global `rem` size.

This is deliberate because making _everything_ fluid is pretty unnecessary—especially when there isn’t much a difference between the min an max lock sizes. The best use of this utility is certainly in larger elements such as headings.

In the CSS, you’ll see that each heading and the `<blockquote>` have `--fluid-type-min-size` and `--fluid-type-max-size` set to override the `.fluid-type`’s default scale. That’s the beauty of CSS Custom Properties: they _cascade_ like everything else in CSS!

{% codepen 'KEOdxN', 'css,result', 'Piccalilli CSS Pattern #1 — Custom Property Controlled Fluid Type' %}

## Wrapping up

This little trick is _super_ handy. I’ve never been happy setting font sizes at each breakpoint because there’s always a weird spot or two where the type looks _whack_, so this utility removes a _lot_ of code and improves the UI, globally.

This does make me yearn for container queries even more than I already do, though. Being able to have a fluid type size based on a container, rather than the viewport would be perfect for design systems.

I’ll just keep waiting patiently while I custom style my scrollbars instead...
