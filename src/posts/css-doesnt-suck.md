---
title: 'CSS doesn’t suck'
layout: 'layouts/post.njk'
date: '2019-01-09'
updated: '2019-03-08'
tags: 'writing'
permalink: '/wrote/css-doesnt-suck/index.html'
---

Another week comes along and with it, another assault on CSS. It’s turning into a bit of a trend—particularly in the JavaScript community—to crap on CSS wherever possible. I could lambaste those who frequently do this, but instead, I thought I’d write about CSS positively to counter the falsities that are spread over the tech tyre fire that is Twitter.

## CSS is incredibly flexible

Imagine if a tech dude walked on stage at a conference and said the following:

> “This declarative language will gracefully continue on failure, allow you to write global and scoped code, **and** it will work across your entire front-end stack, wether it’s rendered by a framework, a CMS or a static HTML file”

People would lose their damn minds and Hacker News would probably melt down. Now, if I make a slight amendment to that, the reception would probably be the exact opposite.

> “CSS will gracefully continue on failure, allow you to write global and scoped code, **and** it will work across your entire front-end stack, wether it’s rendered by a framework, a CMS or a static HTML file”

For some reason, amazing features of CSS like this are often seen as a negative in the JavaScript community and it’s something I can’t quite personally get my head around. I’ve settled now though, on it being a naive, inexperienced opinion of people who simply haven’t bothered to learn the language.

My favourite feature of CSS is this _incredible_ flexibility. We can use CSS to style web pages, style complex apps, [produce art](http://diana-adrianne.com/purecss-francine/), create [stunning animation](https://codepen.io/miocene/full/aPwrpw) and even [layout a printed asset](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/). This portability makes CSS knowledge a super transferable skill to have, so next time someone on Twitter says otherwise, think back to this section instead.

## There are fantastic methodologies for component driven CSS

A popular “critique” of CSS is that “you can’t build components that scale efficiently”. This, my friends, is utter poppycock. Thanks to methodologies such as [BEM](https://css-tricks.com/bem-101/) and [SMACSS](https://smacss.com/), there’s a plethora of solid, tested options for doing exactly that. You can even import these CSS components into your React components if you want.

This false opinion that CSS isn’t component friendly is so often used as an excuse to fall into a JavaScript-based approach for styling components. It’s something that frustrates me, personally because I’ve worked on humongous front-ends that are powered by BEM-driven CSS that have scaled perfectly well with lots of contributors. The often ignored beauty of using CSS over JavaScript for component-driven design is that you can _also_ leverage global styles **and** the [cascade](/wrote/css-specifity-and-the-cascade/), so you don’t end up endlessly repeating yourself.

So, again, if someone says “you can’t build components that scale efficiently”, you now know that they are very likely talking out of their arse.

## Some brilliant people who evangelise and work hard on CSS

Did you know that there’s an official working group for CSS? The CSSWG meet regularly and discuss new features of the language to create specifications for browser vendors to implement. Take a moment to look at the mind-blowing talent that make up the [CSSWG’s members list](https://www.w3.org/Style/CSS/members.en.php3). Thanks to these fabulous people, newer features such as [CSS Grid](https://gridbyexample.com/) landed with huge levels of support very quickly. At the time of writing CSS Grid has [**88.17%** global support](https://caniuse.com/#feat=css-grid). This is great for a feature that landed less than 2 years ago!

I’d also like to link you up to some of my favourite CSS people’s Twitter profiles. I’d recommend that you follow them to give your feed some balance in preparation for when we get into one of our _frequent_ arguments. Here’s a rather exhaustive list to get you started:

-   [Rachel Andrew](https://twitter.com/rachelandrew)
-   [Lara Schenck](https://twitter.com/laras126)
-   [Mina Markham](https://twitter.com/MinaMarkham)
-   [Jina Anne](https://twitter.com/jina)
-   [Tab Atkins](https://twitter.com/tabatkins)
-   [Michelle Barker](https://twitter.com/mbarker_84)
-   [Charlie Owen](https://twitter.com/sonniesedge)
-   [Bruce Lawson](https://twitter.com/brucel)
-   [Jeremy Keith](https://twitter.com/adactio)
-   [Jen Simmons](https://twitter.com/jensimmons)
-   [Robin Rendle](https://twitter.com/robinrendle)
-   [Chris Coyier](https://twitter.com/chriscoyier)
-   [Mandy Michael](https://twitter.com/Mandy_Kerr)
-   [Dave Rupert](https://twitter.com/davatron5000)
-   [Sara Soueidan](https://twitter.com/SaraSoueidan)
-   [Ethan Marcotte](https://twitter.com/beep)
-   [Ire Aderinokun](https://twitter.com/ireaderinokun)
-   [Heydon Pickering](https://twitter.com/heydonworks)
-   [Eric Meyer](https://twitter.com/meyerweb)
-   [Brad Frost](https://twitter.com/brad_frost)
-   [Lea Verou](https://twitter.com/LeaVerou)
-   [Stuart Robson](https://twitter.com/StuRobson)

## Wrapping up

It’s getting exhausting spending so much of my time defending one of the three pillars of the web: CSS. It should sit _equal_ with HTML and JavaScript to produce accessible, progressively enhanced websites and web apps that help _everyone_ achieve what they need to achieve.

Remember: [we build the web for everyone, not ourselves or our peers](/wrote/the-power-of-progressive-enhancement/). One way to help you do this is to use native technologies that are designed for a specific purpose. JavaScript is not designed to style elements on a web page, but CSS _is_.

Let’s hope that in 2019 we will start to see the end of this relentless, frustrating assault on CSS. The pessimist in me says that it’s only just beginning because we’re in an industry that is quickly resembling the bloated, proprietary, dependency ridden software development culture of the corporate world, rather than the lean, flexible and open nature of the web.
