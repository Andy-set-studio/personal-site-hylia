---
layout: 'layouts/post.njk'
title: 'Relative sizing with EM units'
subTitle: 'Piccalilli CSS Utility — Issue #5'
issueSlug: '/issues/5'
date: '2019-04-26'
tags: ['writing', 'piccalilli-pattern']
hasCodePen: true
---

The combination of responsive design and more component-based systems means that when we write CSS for an element, there’s a good chance we have absolutely no idea where it will be used. Because of this, something I like to do is allow an outer context to have control over font-size and colour and let the [cascade](https://andy-bell.design/wrote/css-specifity-and-the-cascade/) do the rest.

This approach is absolutely fine, but it can create some issues if you are using fixed sizes on elements, because the text scaling will put those fixed elements out of proportion really quickly.

Relative sizing helps in this situation and I like to let `font-size` do the work for me. By using `em` units to size elements that would be previously sized with `px`, we can let things scale, whilst maintaining a sensible scale of its parent’s `font-size`. We also have the flexibility to use `em` units for `width` and `height` with this strategy.

## Examples

I’ve set up three examples of contexts which I think are ideal candidates for this approach.

### SVG Icons

I pushed [this tip](https://twitter.com/andybelldesign/status/1098915626050117633) out a while ago and it blew people’s minds. Let’s dive into it a little deeper.

The first step is to set your SVG icons css like this:

```css
.icon {
  width: 1em;
  height: 1em;
}
```

With that, their `width` and `height` will be exactly 100% of their parent’s `font-size`. You can even skip the CSS class and set the dimensions with `<svg>` attributes instead:

```svg
<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
```

This approach is especially useful for when your SVG icon sits within a link or a button, and just like in the example shows: if it’s in a large context, it’ll scale with perfect proportion.

{% codepen 'mgjvxZ', 'css,result', 'Piccalilli Tip #5 —Relative sizing with EMs — Icon' %}

### Images

Circular user avatars are a very common design pattern and they work really well if they are relative to the font-size of their sibling elements. This example has a font-size set on the parent `.profile` component. The `.profile__image` and `.profile__heading` elements are both using `em` units to size themselves.

This is great because when we add a modifier of `.profile--large`, which sets the component font-size to `5rem`, both of these elements scale up and maintain their relative size in the component.

{% codepen 'gyjErM', 'css,result', 'Piccalilli Tip #5 —Relative sizing with EMs — Avatar' %}

### Code in articles

Just like on this site, sizing `<code>` elements with `em` units is super handy. The main reason it’s handy is because `<code>` elements tend to look a bit small—especially if you’re using a serif like Georgia. Because of this, I knock up the `<code>` element’s `font-size` to about `1.2em`. This’ll then scale well if it’s in a `<p>` or even a `<h2>`!

{% codepen 'YMjgJG', 'css,result', 'Piccalilli Tip #5 —Relative sizing with EMs — Code' %}

## Wrapping up

This is a quick trick to add to your tool belt. Sizing things with relative units is great—not just for design systems—but also for accessibility. For all of the examples in this article, a user could set their system font-size to whatever they want and _everything_ would be appropriately sized for them.

If you do end up using this utility, let me know on [Twitter](https://twitter.com/andybelldesign). I’d love to see [these utilities](https://codepen.io/collection/ngRQEr/) provide real value for people.
