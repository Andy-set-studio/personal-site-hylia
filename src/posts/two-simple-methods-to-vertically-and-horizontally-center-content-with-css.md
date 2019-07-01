---
layout: 'layouts/post.njk'
title: 'Two simple methods to vertically and horizontally center content with CSS'
subTitle: 'Piccalilli CSS Utility — Issue #7'
issueSlug: '/issues/7'
date: '2019-05-10'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

Centering with CSS—especially vertically, used to be a bit of an in-joke, back in the _old days_. I emphasise old days because vertical centering hasn't been an issue since Flexbox gained majority support, [7 years ago](https://caniuse.com/#feat=flexbox)!

I primarily use Flexbox for vertical centering, but Grid can also be useful. In this post, we’re going to use both to create a little utility class.

## The `.center-xy` utility

Using CSS Grid, we can achieve horizontal _and_ vertical centering with 4 lines of CSS:

```css
.center-xy {
  display: grid;
  place-items: center;
}
```

{% codepen '768e736a16e9baa2ae0e1a8645cf5895', 'result', 'Piccalilli CSS Utility — Issue  #7 — Two simple methods to vertically and horizontally center content with CSS — Grid' %}

The `place-items` property is a shorthand for `justify-items` and `align-items`, so because we’ve effectively set both to `center`, the direct descendants of `.center-xy` will be centered. Neat, right?

I said _descendants_ for a reason. This will place **all** descendants in the center, so things get pretty wild when you have more than one descendant. That’s where this second, more resilient version of the utility steps in:

```css
.center-xy {
  display: flex;
}

.center-xy > *:only-child {
  margin: auto;
}
```

{% codepen '588e276d647a1e01bb7f8a77decdf722', 'result', 'Piccalilli CSS Utility — Issue  #7 — Two simple methods to vertically and horizontally center content with CSS — Flexbox' %}

Good ol’ Flexbox and its flexibility is here to save the day. Yes, there’s a tiny bit of extra CSS, but it’s serving a useful purpose. Let’s break it down:

- We set the utility to use `display: flex` instead of using `display: grid`.
- The direct descendant has `margin: auto` which thanks to the Flexbox parent, will push itself into the center. [Robin Rendle](https://mobile.twitter.com/robinrendle) wrote a [great explainer](https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/) of this on&nbsp;CSS-Tricks.
- The `:only-child` pseudo-selector means that the auto margin only gets applied if—you guessed it—there’s only one child. Perfect.

It’s worth noting that both of these techniques require the parent to have at least _some_ height to work with. That’s why I’ve set a `min-height` on both examples.

## Wrapping up

There’s probably only a handful of cases where this utility is genuinely useful. The two that spring to mind are a hero unit and a CodePen demo. I use the grid approach [_extensively_ on CodePen](https://codepen.io/andybelldesign/pen/mgjvxZ). Still—even though this isn’t the most portable of utilities, it’s still useful to have in your toolbelt—especially as the flex version [supports around 95% of browsers](https://caniuse.com/#feat=flexbox).

If you do end up using this utility, let me know on [Twitter](https://twitter.com/andybelldesign). I’d love to see [these utilities](https://codepen.io/collection/ngRQEr/) provide real value for people.
