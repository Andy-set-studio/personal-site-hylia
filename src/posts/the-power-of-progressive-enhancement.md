---
layout: 'layouts/post.njk'
title: 'The power of progressive enhancement'
date: '2018-08-13'
updated: '2018-12-03'
tags: 'writing'
external: false
hasCodePen: true
---

Back in July, I launched a handy web app called [My Browser](https://mybrowser.fyi). The premise was simple: generate a detailed report about a user’s web browser and create a URL to make sharing that report easy. In less than two months, [My Browser](https://mybrowser.fyi) generated an impressive **25,000** reports. That’s an average of **1,250** uses a day!

It’s become much more successful than I ever imagined, but why? This wasn’t a particularly new idea. Similar products and websites exist, so what is it that made [My Browser](https://mybrowser.fyi) different? I believe the answer is _progressive enhancement_. I took a gamble when I changed up my build approach, and I’m very happy I did.

I’ve decided to share some of the useful things I’ve learned along the way, in the hope that you’ll benefit and feel inspired to consider progressive enhancement as a concept too.

## Improvement by simplification

Without a doubt, building [My Browser](https://mybrowser.fyi) progressively paved the way towards a simpler future and longer lifespan for this app. Not only do I have a very maintainable codebase to work with, but I have one that can also grow very easily.

Building progressively means that I’ve avoided the need for a bunch of fixes and polyfills for older browsers. If something isn’t supported then the app provides a simpler method.

![The diagram that’s often used as an analogy for ‘minimum viable product’ could also be used as an analogy for ‘minimum viable experience’](https://hankchizljaw.imgix.net/tpope-1.png?auto=format)

The above figure is often used to demonstrate a minimum viable product, but I think it can also be used to demonstrate a _minimum viable experience_. The skateboard may be a little slower, but it doesn’t stop the user getting to where they want to go. So, if the user’s browser doesn’t support JavaScript or modern CSS then it doesn’t break, it presents the default experience instead: a button which instructs the user to generate a report. The user will experience a very similar process, but has to perform one extra click.

The beauty of this approach is that the site doesn’t ever appear broken and the user won’t even be aware that they are getting the ‘default’ experience. With progressive enhancement, every user has _their own_ experience of the site, rather than an experience that the designers and developers _demand_ of them.

![The default experience on My Browser](https://hankchizljaw.imgix.net/tpope-2.png?auto=format)

It was crucial to have this default performance in place, because if this reporting tool refused to report, it would become totally useless. It needs to perform one job and to perform it well, and it needs to be supported in all browsers.

## import { whoKnows } from ‘black-box’;

For some reason, the progressive enhancement approach seems to be surprisingly uncommon in our industry. So, for contrast, let’s explore a more popular but more prone-to-headaches build concept.

A much more common build approach is to throw dependencies at a project until the singular experience works on every browser. This can be very time consuming and frustrating, and often results in a proud declaration that you “no longer support IE!”, usually on Twitter.

Now, I can’t shame others without shaming myself — I’ve done that many times — and it’s only through experience and a solid foundation of skepticism for what’s “hot” that I’ve been kept on the fringes of that group.

I put it down to ever-increasing experience and associating myself with sensible, pragmatic figures in the industry that I’ve now begun to appreciate progressive enhancement as the de facto way to build things, instead of an evergreen approach.

## A reminder that it’s okay to change your default

I’ve always been very skeptical of frameworks, especially heavy-duty ones. I appreciate that frameworks like [React](https://reactjs.org) are very popular and useful but I think they should be used where necessary, rather than used by default.

Even Netflix, who are famously _very_ into React, have talked about how rolling out a vanilla JavaScript homepage saw [huge performance improvements](https://twitter.com/netflixuie/status/923374215041912833?lang=en). I single out React here because more commonly than not, the single default HTML element that’s rendered inside the `<body>` tag is a `<div id="root">` element. This means that unless that big ol’ bundle arrives in one piece, you aren’t going to get any experience whatsoever.

Luckily there are methods such as server-side rendering, otherwise known as universal or isomorphic apps, that can help introduce a more progressive workflow.

## Pixel perfection is becoming more difficult

As an industry, myself previously included, we are infatuated with this concept of pixel-perfect display for every browser. As [Jeremy Keith](https://adactio.com/) suggests in [Resilient Web Design](https://resilientwebdesign.com), this is in-fact a collective, consensual hallucination, an artefact of the PSD-to-HTML desktop-only era of web design. We often felt the need to painfully hand-craft our websites to look beautiful, even in IE6\. The problem now is that there’s so much variation these days, not just with browsers, but with devices, operating systems and connection speeds, so it’s impossible to be pixel perfect every time.

Another thing we seem to forget is that there’s a huge amount of fragmentation, particularly in the most popular mobile operating system around — Android — which, at the time of writing, [has over 70% of the mobile market share](http://gs.statcounter.com/os-market-share/mobile/europe).

We throw so much weight at trying to make our websites look the same in every browser that a lot of unnecessary bloat hangs around for way longer than it should. Tools like AutoPrefixer, heavy-duty resets and 960px 12 column grid systems have become bloat, just when newer, native, dedicated solutions like CSS Grid drop [with massive support](https://caniuse.com/#feat=css-grid) and no vendor prefixes (if you ignore Microsoft’s early prototype).

## A modern approach to CSS

I decided to make a big change in my own approach to CSS for [My Browser](https://mybrowser.fyi). I wanted to reduce weight and complexity. I chose to go completely ‘vanilla’, which differs to my usual preference of using Sass.

Don’t get me wrong, I love Sass and periodically [write about it](https://css-tricks.com/using-sass-control-scope-bem-naming/), but I’ve had a theory that it produces extra weight in the code _that I write_, mainly due to laziness and/or mild over-engineering. I was certainly made very aware of what was being output when forced to write the actual output code.

Writing vanilla CSS seemed to help me with progressive enhancement a lot. I don’t know if there’s an exact science there, but I definitely felt more _aware_. It’s also incredibly powerful compared to the CSS we had when Sass first arrived.

With ever-increasing support for [Custom Properties](https://caniuse.com/#feat=css-variables), a lot of the most common use-cases for Sass are already available to us and a progressive approach to these newer tools is handy to keep in mind too.

If you’re thinking “What even is progressively enhanced CSS?”. Let me show you:

{% codepen 'mjQOje', 'result', 'A progressive grid' %}

This example of a CSS Grid powered layout will support [92% of browsers](https://caniuse.com/#feat=flexbox). The other 8% will get stacked columns. This snippet of CSS is tiny and there are no expensive polyfills and fallbacks. Not bad, eh?

This is the exact approach that was taken with [My Browser](https://mybrowser.fyi) and that, along with modern, vanilla JavaScript, means that the total page size currently sits at **85kb**. It can probably also support browsers as far back as **IE7**.

### A modern approach to JavaScript

Much like the approach with CSS, the JavaScript on [My Browser](https://mybrowser.fyi) is also completely vanilla. I work with JavaScript frameworks every day, so I admit, going back to vanilla JavaScript was a daunting concept. Luckily, I’ve been learning about JavaScript’s native approach to componentisation: [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), of which I have a separate [learning journal](https://webcomponents.club).

Working with Web Components feels very similar to working with [Vue](https://vuejs.org) in a lot of senses, but the main similarity is that you can put your default experience within your custom HTML element, which gives you progressive enhancement for free.

Check out this example where the default experience is a simple heading and some paragraphs. If Web Components are supported, it transforms into a fancy toggle panel thanks to the magic of `<slot>`s and the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM):

![A demo showing the default experience being a heading and some content, which switches up to a nice toggle panel, where Web Components supported](https://user-images.githubusercontent.com/8672583/49397668-2c655a80-f734-11e8-8592-a218b98f8e94.gif)

You can see the demo in action [here](https://cbe18d8a31844dc49aaa38ac6a799a77.codepen.website) and the source code [here](https://codepen.io/hankchizljaw/project/editor/ZvGEar).

This approach to building [My Browser](https://mybrowser.fyi) allowed me to only have to write a bit more server-side code to accommodate both `fetch` based requests and `form` based requests. Again, the user will likely have no idea that _their experience_ differs from another person’s. And it enabled me to ship not just code with no polyfills and hacks, but also non-transpiled ES6 code.

Thanks to the declarative nature of HTML, I know that if the JavaScript fails to execute then the _default experience_ of a form-based, single click button will be available to the user.

The main usage of Web Components on [My Browser](https://mybrowser.fyi) is actually the [report view.](https://mybrowser.fyi/report/5b6c160870ecf1001499ac2f) The default experience is a nicely styled representation of the JSON data that the app produces. If Web Components are fully supported though, the app automatically replaces this with a grid of nice looking icons and a more visually pleasing representation of the data. Again, this only required a few `if` statements.

![The default report view next to a progressively enhanced report view](https://hankchizljaw.imgix.net/tpope-3.png)

[My Browser](https://mybrowser.fyi) is a very small and simple app, but it wasn’t only the small size that made the progressive enhancement possible, it was a change in my mindset…

## Let’s change how we think about Progressive Enhancement

Progressive enhancement isn’t necessarily _more work_ and it certainly isn’t a _non-JavaScript fallback_, it’s a change in how we think about our projects. A complete mindset change is required here and it starts by remembering that you don’t build websites for _yourself_, you build them for _others_.

There’s a common approach of “build for the best possible devices and browsers, then apply heavy-handed fixes just before go-live”. This usually results in said tests and fixes only happening at initial launch, once the issues have already been seen by many and have slowed down the experience.

An industry full of Apple Macs and high-speed fibre broadband certainly doesn’t help change this mentality, I need to emphasise this point: **by having a high-speed connection, you are part of a privileged few, not the many.**

## For the many!

[A recent article](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) by [Addy Osmani](https://addyosmani.com/) (which I recommend that you read) brilliantly highlights how bloated JavaScript payloads can be a lot more detrimental than you think. Especially when you consider poor connections.

Shipping multiple megabytes of JavaScript can be incredibly damaging for low-powered devices because of the sheer amount of computing that’s required in order to parse and execute it. You may have guessed where I’m going with this — The progressive approach means that if your _premium experience_ features lots of JavaScript, then at least your users will be able to interact with the _default experience_ if their slow connection lets them down.

By creating a **minimum viable experience**, you’re creating a better experience for a lot more people than you might think you are.

## Smaller tools are nearly always better

[My Browser](https://mybrowser.fyi)’s small size certainly helps. It’s very lightweight in that it only takes a few packets of data to fully load and it’s also progressive if those packets fail for some reason.

This has inspired me to release a new tool for managing state called [Beedle](https://github.com/hankchizljaw/beedle), which I won’t dwell too much on, but it gives you a lot of power to manage state in your application and is only around **0.5kb in size**. The micro-library approach is very appealing when you’re hyper-aware of your output bundle’s size — tiny tools can definitely be the way forward.

Popular frameworks like [React](https://reactjs.org) and [Vue](https://vuejs.org) are excellent for big applications, they are really helpful. We love Vue here at [No Divide](https://nodividestudio.com). This is certainly not a “don’t use big frameworks” post either, because as with most things in this industry, _it depends_ on what _you’re doing_. You can also improve the performance of large frameworks with methods such as code-splitting. This [excellent article](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/) by [Jeremy Wagner](https://www.jeremywagner.me) gives you heaps of knowledge to get you started.

An approach I would recommend that you consider is to be very aware of your add-ons and extra dependencies. Tools such as [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) for [VS Code](https://code.visualstudio.com) can really help with the decision making process, and might encourage you to use smaller libraries that have slightly less features than their popular counterparts.

Another approach that’s worth considering is: if you’re building something simple, maybe a large framework isn’t necessary. Libraries such as [Reef](https://github.com/cferdinandi/reef) by [Chris Ferdinandi](https://gomakethings.com) are really handy. I also strongly recommend using [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Wrapping up

I hope that if you’ve not already started considering progressive enhancement, that this post has been a good source of inspiration for you. Changing your mindset is _really hard_ and it’s something that we’re continually trying to improve at [No Divide](https://nodividestudio.com), constantly monitoring our own processes and improving them.

The benefits of progressive enhancement are incredible, so it’s really worth considering. Smaller, more considered payloads are only ever going to improve _everyone’s_ experience, not just your own.

I love to talk about this over on Twitter where you can find me at [@hankchizljaw](https://twitter.com/hankchizljaw).

---

<a href="https://medium.com/@hankchizljaw/the-power-of-progressive-enhancement-98738766b009" rel="canonical">Originally posted on Medium</a>.
