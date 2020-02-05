---
title: 'Honesty is the best policy'
date: '2020-02-05'
tags: ['writing']
---

There’s an article circulating, titled [Why Gatsby is better with
JavaScript](https://www.gatsbyjs.org/blog/2020-01-30-why-gatsby-is-better-with-javascript/),
which boils down as a justification for why the framework produces so much JavaScript output. This
is fine and there are some good points in the article, but there’s one bit that I
initially skimmed over, and spotted today (thanks,
[Matt](https://twitter.com/stowball/status/1224791020220510208)) which made me
wince:

> “It’s also important to put the JavaScript bundle size in perspective. While
> it definitely can have a detrimental effect on performance, especially when it
> grows uncontrollably, a single image is often bigger than a JavaScript
> bundle.”

It goes on to say that “It’s worth judging the website as a whole, not only how
much JavaScript it ships”, which I wholeheartedly agree with, but the sentiment
of the main quote is concerning and frankly, it’s completely false.

## Why is it false?

I urge you to read [JavaScript Start-up
Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization)
by [Addy Osmani](https://addyosmani.com/). It’s a brilliant article that
explains the true cost of JavaScript really well. There’s a couple of takeaways
that I want to highlight:

> “Spending a long time parsing/compiling code can heavily delay how soon a user
> can interact with your site. The more JavaScript you send, the longer it will
> take to parse and compile it before your site is interactive.”

This is something that’s very important to remember and it’s one of the main
contributors to my obsession with shipping as little JavaScript as possible—
[Time To Interactive](https://web.dev/interactive/), which is how long after the
initial request for a web page it takes for you to be able to interact with it.
For heavy sites, this can be an eye-watering long time (hello news sites).

This is not an issue for me, because I am steeped in privilege with my top-spec
MacBook Pro and iPhone 11, so generally, most sites—even ones with outrageous
bundle sizes—tend to run fine. We should’t be building for people like me
though, because people like me are the privileged minority. We should instead be
optimizing for low-to-mid powered devices. One good way to test your
sites against devices like this is [Webpage Test’s “easy”
preset](https://webpagetest.org/easy).

Some other related advice is to not 100% rely on
[Lighthouse](https://developers.google.com/web/tools/lighthouse) scores. Lighthouse
is a fantastic tool which gives you a good idea of how your website is
performing, but it can also be misleading, as [Manuel Matuzovic eloquently
describes](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/).

Anyway, back to Addy’s article. Another takeaway from the article is this:

> “JavaScript and image bytes have very different costs. Images usually don’t
> block the main thread or prevent interfaces from getting interactive while
> being decoded and rasterized. JS however can delay interactivity due to parse,
> compile and execution costs.”

This is what my issue with the Gatsby article is.

## Benefit of the doubt

I want to give Gatsby the benefit of the doubt on this. I want to believe it’s
not a sinister attempt at self-justification by distributing a little mistruth
that could cascade, much like the [myth that you can use multiple `<h1>`
elements on a site](https://github.com/w3c/html/pull/331). I, of course, [spat
out my tea on Twitter when I saw
this](https://twitter.com/hankchizljaw/status/1224972729373405185), but [added
to the thread](https://twitter.com/hankchizljaw/status/1224976031163076610) that
I appreciate the work that Gatsby are doing for Accessibility and improving
client-driven JavaScript, by working on partial hydration. These are good things
and the optimist in me is hoping that they take their [sizeable VC
funding](https://www.crunchbase.com/organization/gatsby-e828#section-overview) and
apply it in becoming leaders in modern, performant frameworks.

I also think that there could a bit of naivety from the author of [the article in
question](https://www.gatsbyjs.org/blog/2020-01-30-why-gatsby-is-better-with-javascript/), who
might not be aware of the points raised in [Addy’s writing](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization).

I’m trying to look at Gatsby in a more positive light, as I [mentioned in my
2019 year in review
article](https://hankchizljaw.com/wrote/2019:-a-year-in-review/#heading-time-to-embrace-react-and-gatsby).
I even built [Front-End Challenges Club](https://front-end-challenges.club/)
with Gatsby to better understand the workings of it and I must say, the
developer experience was lovely. I’ll also be [teaching a course on
Piccalilli](https://piccalil.li/course/lets-build-a-landing-page/) using Gatsby
as the core static-site generator. I still, of course, prefer
[Eleventy](//11ty.dev), but
it’s important that I’m fair with criticism and that actually using tools like Gatsby
contributes to that.

## Wrapping up

This all boils down to trust. Trust is often not lost in single events but
instead it is chipped away at. With the [rather problematic theme
competition](https://themejam.gatsbyjs.org/), last year, which encouraged people
to build an entire theme to win a conference ticket (hello, unpaid spec work)
and then articles like this coming about: I can feel my own trust being chipped
away at. It also doesn’t help that Gatsby is built with React, so by proxy, has a
direct link to Facebook, which for those who know me well, will know that’s
almost immediately in impossible barrier to get beyond.

But as I said when I was [lucky to be on the Shop Talk
Show](https://shoptalkshow.com/episodes/394/): Gatsby is not going anywhere and
will only get more popular, so I want to try to be productive with criticisms,
with the hope that in turn, they make a big, positive impact on the web.
