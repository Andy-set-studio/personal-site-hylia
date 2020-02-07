---
title: 'Fluid scale and tokens: a match made in heaven'
date: '2020-02-07'
tags: ['writing']
---

[Trys](https://twitter.com/trysmudford) and [James](https://twitter.com/j98) from [Clearleft](https://clearleft.com/) shared their great new side project, [Utopia](https://utopia.fyi/) with us all today. 

> Utopia emerges when designers and developers share a systematic approach to fluidity in responsive design. Instead of designing for x number of arbitrary breakpoints, we can design a system within which elements scale proportionally and fluidly

As the co-author of [Every Layout](https://every-layout.dev/), my head nearly fell off from all of the nodding when reading this because this is the exact sort of approach that we preach: setting some rules and letting the browser do the rest. In fact, that’s what my most recent talk, [Keeping It Simple With CSS That Scales](https://hankchizljaw.com/wrote/keeping-it-simple-with-css-that-scales/) boils down to (amongst soft skills being one of the best CSS tools). 

I’m _obsessed_ with fluid type and forcing it into projects (much to poor Trys’ experience in a project we worked on together), because setting arbitrary sizes for type kills me. 

The thing that _really_ excites me though, is how this formula that Utopia provides, mixed with my little [design token utility class generator, Goron](https://github.com/hankchizljaw/goron), produces. 

My gosh, pals, it’s magical. I’m in CSS heaven.

## Size scales FTW

With Goron, I base text sizes and spacing on a defined size scale, which is usually a [Major Third Scale (Classic Scale)](http://spencermortensen.com/articles/typographic-scale/). That part of the config—which is `rem` based—looks like this: 

```js
const sizeScale = {
  '300': '0.8rem',
  '400': '1rem',
  '500': '1.25rem',
  '600': '1.56rem',
  '700': '1.95rem',
  '800': '2.44rem',
  '900': '3.05rem'
};
```

When I use the handy CSS Custom Properties that Utopia generates, my `sizeScale` looks like this:

```js
const sizeScale = {
  '300': 'var(--step--1)',
  '400': 'var(--step-0)',
  '500': 'var(--step-1)',
  '600': 'var(--step-2)',
  '700': 'var(--step-3)',
  '800': 'var(--step-4)',
  '900': 'var(--step-5)'
};
```

Instead of rigid—albeit still flexible by proxy of the `rem` unit—token classes, I have fluid token classes _that scale_.

## How does this help?

Take [Hylia](https://hylia.website/) as an example. On that project, I have a component called `.intro` and inside there, the main heading for a page has the following sizing tokens like this: 

```html
<h1 class="text-800 md:text-900">Lorem ipsum</h1>
```

This is because at smaller screens, the `900` item in the scale (`3.05rem`) is too big, so I use a responsive version of the token instead, setting `800`(`2.44rem`) as the default.

With this new approach, I’d just use `text-900`, because I would have generated a fluid scale. This cuts down on generated classes, and importantly, media-queries, while simplifying the process of implementing a type scale. It _also_ gives me consistent, fluid spacing. Holy moly.

## Wrapping up

Go and check out [Utopia](https://utopia.fyi/). I was lucky enough to work with both Trys and James on projects while doing freelance stuff for Clearleft, and I can tell you, there probably isn’t a better dream team for this sort of tool.

Another fluid type tool (and good looking paid service) that I have a lot of love for is [Typetura](https://typetura.com/), by typography and CSS maven, [Scott Kellum](https://twitter.com/ScottKellum) ([and co](https://typetura.com/about/)). Give that a look too.

***

For now, I’m going to think about creating a 2020 version of [Keeping It Simple With CSS That Scales](https://hankchizljaw.com/wrote/keeping-it-simple-with-css-that-scales/) which goes into more depth about this sort of fluidity, [Every Layout](//every-layout.dev) and the methodology, [C-BEUT](https://hankchizljaw.com/wrote/keeping-it-simple-with-css-that-scales/#heading-consistency). [Give me a shout](mailto:me@andy-bell.design) if you want me to deliver it at your event.