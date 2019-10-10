---
title: 'The “P” in Progressive Enhancement stands for “Pragmatism”'
date: '2019-10-10'
tags: ['writing']
hasCodePen: true
presentation: 'true'
---

I often think of IE11 as a rancid smog that follows us around, spoiling things. This is not me criticising the browser, though. Instead, I’m referencing how it follows progress on the web around, hindering it.

I’m also seemingly putting the blame on the browser for that, too, but no: that blame sits firmly on the shoulders of the web community. Nearly every time some modern CSS is talked about in the hellish vacuum of sensible discourse: Twitter, you can set your watch by the <dfn id="ttwa-def">TTWAI</dfn>, which is “Time To What About IE11”?

![Hipster, probably called Turd Buckman, says “WhAt aboUt IE 11 tHOuGh”](https://res.cloudinary.com/andybelldesign/image/upload/c_scale,f_auto,w_1400/v1568725444/keeping-it-simple-with-css-that-scales/presentation.081_allu7h.png)

# Support means support, not mimic

The <a href="#ttwa-def">TTWAI</a> phrase is almost always used as a prefix that someone “has to support IE11”. What they inadvertently give away in their short, often petulant exchange, is that when they say “support”, they actually mean “my website has to work identically in IE11 as it does in Chrome”. This, my friends, is the stinkiest shit, especially when you consider web design and development with a progressive enhancement mindset.

We seem to be stuck in pixel perfection and identical experiences across devices and browsers, even though we really have very little control about how our work will land on any given user’s device. Pixel perfection is a “a collective, consensual hallucination”, as mentioned by [Jeremy Keith](//adactio.com) in [Resilient Web Design](https://resilientwebdesign.com/). It’s a collective, consensual hallucination that just wont go away: just like that smog.

## A progressive mindset

Last year, [I wrote about this stuff in some depth](https://hankchizljaw.com/wrote/the-power-of-progressive-enhancement/) and mentioned the term: “minimal viable experience” a lot. As explained in the article, “minimum viable experience” is the absolute baseline experience—a sensible default.

![The diagram that’s often used as an analogy for ‘minimum viable product’ could also be used as an analogy for ‘minimum viable experience’](https://hankchizljaw.imgix.net/tpope-1.png?auto=format 'The diagram that I used in “The Power Of Progressive Enhancement” to illustrate a minimum viable experience”')

A good example of this is that if you have a complex, state driven contact form that does all sorts of validation magic: the minimum viable experience is a `mailto` link for the user to send you an email. With Progressive Enhancement, you can build on that and add the fancy stuff when JavaScript and dependencies are loaded, working and ready.

The beauty of approaching your work like this is that **when** things go wrong (emphasis on when), your minimum viable experience is ready and raring to go! This is much better than a broken, often blank website, right?

## In the context of CSS

Bringing this back around to CSS, a context that always results in <a href="#ttwa-def">TTWAI</a> is when someone talks about [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*). These are a perfect candidate for working out a minimal viable experience, and I’ll show you how.

First of all, let’s look at our ideal experience:

{% codepen 'ZEEbpRz', 'result', 'The “P” in Progressive Enhancement stands for “Pragmatism” - Final Experience' %}

Now let’s strip it back. Our minimal viable experience is unstyled HTML, so make sure first that when CSS isn’t loaded, your content is accessible.

{% codepen 'rNNOMzB', 'html,result', 'The “P” in Progressive Enhancement stands for “Pragmatism” - Demo 1' %}

Now that’s sorted, let’s build on that and have some baseline CSS. This will be the what our friends on IE11 will experience.

{% codepen 'RwwWGxL', 'css,result', 'The “P” in Progressive Enhancement stands for “Pragmatism” - Demo 2' %}

Now, let’s reference some custom properties and enhance our experience:

{% codepen 'PooPGRe', 'css,result', 'The “P” in Progressive Enhancement stands for “Pragmatism” - Final Experience' %}

Notice that I only _referenced_ them here and still haven’t defined them. You’ll also notice that the text turned dark blue. This is because I set `darkblue` as a sensible fallback for if `--color-primary` wasn’t defined. Now, finally, let’s define the custom properties.

{% codepen 'ZEEbpRz', 'css,result', 'The “P” in Progressive Enhancement stands for “Pragmatism” - Final Experience' %}

There you have it, job done. Everyone gets a decent experience and where we have full support, they get more of a magical experience. For good measure, here it is in IE11, via [BrowserStack](https://www.browserstack.com/):

![A minumum viable experience in IE11, via BrowserStack](https://res.cloudinary.com/andybelldesign/image/upload/c_scale,f_auto,w_1400/v1570715475/the-p-in-progressive-enhancement-ie11_h5vwqj.jpg)

## Wrapping up

This is a hyper-simplified example of using Progressive Enhancement with CSS, but I hope it’s demonstrated how to build things up naturally with browser support.

With a Progressive Enhancement mindset, support actually means support. We’re not trying to create an identical experience: we’re creating a viable experience instead.

Also with Progressive Enhancement, it’s _incredibly_ likely that your IE11 user, or your user on a low-powered device, or even your user on a poor connection won’t notice that they’re experiencing a “minor” experience because it’ll _just work_ for them. This is the magic, right there. Everyone’s a winner.

Always remember: it’s people that we build our websites or web apps for.
