---
layout: 'layouts/post.njk'
title: 'Flow and rhythm in CSS with Stalfos'
date: '2017-06-25'
updated: '2018-08-22'
tags: 'writing'
---

Something I’ve tried to improve in my CSS work is the implementation of consistent flow and rhythm, while keeping the footprint as low as possible.

It’s really useful to have these sort of components available to you when you are working with pattern / component libraries and style guides to build out your UI views.

I’ve been using the [lobotomised owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls) technique for quite some time now. This is a wildcard selector that adds space between direct child elements and their siblings. It looks something like this:

```
> * + * { 
    margin-top: 20px; 
}
```

This is great because it only adds space to every direct sibling of an element. This means that the first element won’t have any space added to it, which prevents the use of tricks such as a negative margin applied to the parent to reduce over-spacing. It also means that the margin setting won’t leak into deeper child elements such an `<li>`.

### A new component is born

Inspired by [tachyons](http://tachyons.io/), I’ve been trying to abstract often repeated CSS into utility components. In [Stalfos](https://stalfos.io/), this methodology has been applied to the [chunk](https://github.com/hankchizljaw/stalfos/blob/master/front-end/scss/project/components/_chunk.scss), [breathe](https://github.com/hankchizljaw/stalfos/blob/master/front-end/scss/project/components/_breathe.scss) and [size](https://github.com/hankchizljaw/stalfos/blob/master/front-end/scss/project/components/_size.scss) components already.

I decided to add a new one to the collection called [flow](https://github.com/hankchizljaw/stalfos/blob/master/front-end/scss/project/components/_flow.scss). Let’s take a look at how it works.

### Rhythm metrics

A new metric unit powers [flow](https://github.com/hankchizljaw/stalfos/blob/master/front-end/scss/project/components/_flow.scss). It’s called `$rhythm`. Like with some of the other units in [Stalfos](https://stalfos.io/), it has the `mini`, `double` and `treble` modifiers too.

### The power of maps and loops

The component itself is pretty simple. Using Sass maps, the two directions and the spacing property are defined at the top. The component then proceeds to generate the spacing CSS by starting a loop.

Inside this loop, each size modifier is looped to generate the modified versions of each direction class. This will result in available selectors such as `flow-vertical--double`.

### The component in practice

In [this Codepen example](https://codepen.io/hankchizljaw/full/dRVPMO), the flow component is demonstrated with both directions and a couple of the size modifiers. Notice how most of the surrounding layout is powered by flow component too.

Hopefully this little component will help you in developing lightweight, component driven UI. Any feedback will be greatly appreciated too!

***

**Update:** Stalfos isn't maintained anymore, but my quest to solve vertical rhythm continues. I'm currently working with a CSS custom properties approach which I hope to write about soon.



