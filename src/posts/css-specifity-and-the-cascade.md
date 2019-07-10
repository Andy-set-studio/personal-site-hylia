---
layout: 'layouts/post.njk'
title: 'CSS specificity and the cascade'
tags: ['writing', 'tips', 'devpal']
date: '2018-09-10'
hasCodePen: true
---

A recent [Twitter poll](https://web.archive.org/web/20180909214420/https:/twitter.com/mxstbr/status/1038073603311448064) has caused a bit of a storm and there’s something important to take away from it: there’s a gap in some folk’s CSS skillsets, so I’ll try to help y’all fill it in.

Let’s not dwell on on the _hot drama_ and instead, dive in and have some fun by learning.

## The example at hand

Let’s use the same example as the Twitter poll. I’ve used `background` instead of `color` and used some nicer colors, rather than the default red and blue ones.

This is what we get:

{% codepen 'ZMvvKy', 'css,result', 'CSS specificity and the cascade: example 1' %}

As you can see, both boxes are blue. But why is that? The reason is that both `.red` and `.blue` have the same _specificity_ level as each other, so the browser picks the one that was declared last. In this case, that was `.blue`.

If we were to switch the two classes over in the CSS, we’d end up with this:

{% codepen 'BOJJJN', 'css,result', 'CSS specificity and the cascade: example 2' %}

Because `.red` was declared after `.blue`, the boxes are red. This is thanks to the fact that the browser _cascades_ down the stylesheet looking for the most _specific_ rule. The rules that were found were of equal specificity to each other, so .`red` coming after .`blue` means the boxes are going to be red.

## A basic introduction to specificity

Let’s use this same example to demonstrate some simple, common specificity situations and approaches.

### Use an ID

This is probably one of the most common ways that folks will give something a specificity boost. An `id` will take precedence over a `class`, so in the below example, the new CSS rule `#green` will override both `.red` and `.blue`, regardless of their order in the CSS file.

I will use this example as an opportunity to mention that the use of IDs in CSS is totally valid, but I’d recommend _cautious_ usage. Attaching styles to classes, HTML elements and attributes gives you a lot more flexibility.

#### Example:

{% codepen 'rZppJp', 'css,result', 'CSS specificity and the cascade: example 3' %}

### Add a style attribute

Let’s follow on from the `id` example and override it. One way we can do that is add a `style` attribute to the element. This will override the `#green` rule because `style` attributes take precedence over any rule defined in a CSS _file_, apart from `!important` (we’ll get to that).

The following example shows that because I set the background to be purple on the `#green` element in a `style` attribute, it overrode all of the other styles (including those defined in `.red` and `.blue`).

#### Example:

{% codepen 'dqJJer', 'css,result', 'CSS specificity and the cascade: example 4' %}

### Add an !important

Last-up in this basic introduction is `!important`. This is the CSS equivalent to an articulated lorry on a country lane: it will win in pretty much any scenario.

This example, that follows on from the `style` example, shows that if I add `!important` to the background declaration in the `.red` class, all the boxes turn red. This is because `!important` takes ultimate precedence. Use `!important` wisely, though. Because of its _importance_ it becomes difficult to override. Oftentimes the use of `!important` indicates that there’s probably some refactoring required.

#### Example

{% codepen 'Wgddyo', 'css,result', 'CSS specificity and the cascade: example 5' %}

## Wrapping up

Hopefully, this little post helps you understand both why the answer to the [Twitter poll](https://web.archive.org/web/20180909214420/https:/twitter.com/mxstbr/status/1038073603311448064) was `blue` and how cascade and specificity work on a basic level.

Understanding the cascade and specificity in CSS is really important and that knowledge _will_ make you a better front-end developer. Knowing fundamentals about the web platform will help you to make better, more informed decisions that will likely result in more graceful, resilient problem solving. This will of course have a much more positive impact on the people that really matter: _your website’s visitors_.

### Further reading

- [CSS Specificity: Things You Should Know - Smashing Magazine](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) (an oldie, but a goodie)
- [Specifics on CSS Specificity - CSS-Tricks](https://css-tricks.com/specifics-on-css-specificity/) (another oldie, but a goodie)
- [Link Specificity - Eric Meyer](https://meyerweb.com/eric/css/link-specificity.html)
- [W3 Spec](https://www.w3.org/TR/selectors-3/#specificity)
- [The Importance of !important: Forcing Immutability in CSS - Harry Roberts](https://csswizardry.com/2016/05/the-importance-of-important/)
- [Batificity](http://batificity.com) by [Mandy Michael](https://twitter.com/Mandy_Kerr)
