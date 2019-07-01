---
layout: 'layouts/post.njk'
title: 'Introducing “My Browser”'
date: '2018-07-19'
updated: '2018-08-09'
tags: 'writing'
external: false
---
_Extract a user’s browser information in a smarter, faster, more helpful way._

***

As a developer, extracting information about a website user’s browser information is essential for fixing bugs and making improvements to the site. However, getting technical details back from a bug report or support ticket is hard.

Bugs on the front-end are reported in an incredibly vague way: _“Feature X doesn’t work very well on Safari”_ or _“The layout is odd on Firefox”_. They don’t take into consideration the importance of communicating the specific version of Safari or Firefox, or the vast amount of variation between operating systems.

Asking the user for further information about their browser is painfully time consuming, for everyone involved, so I decided to create a web app that simply retrieves this information for me.

![A screenshot of the My Browser app](https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/main-screenshot.png)

## The app

[My Browser](https://mybrowser.fyi) is designed do one job and to do it well – to extract and present specific data about a user’s browser and environment. It takes the information, stores it, then provides an easy to share url that links to a detailed report.

It might sound simple, but I’ve worked hard to make sure it does this efficiently, and that the user experience is a frictionless and easy one. Other tools might be great at gathering and presenting data, but sharing that data becomes clunky. If you have to explain how to use a tool, doesn’t that defeat its purpose of making the process simpler?

[My Browser](https://mybrowser.fyi) puts the user first and is very simple to use.

## How it’s built

Although the site is built with bleeding edge technology such as web components, it’s built with a progressive-first approach. It follows the rule that: “in order to get the best experience, you need to be on a modern browser”, but the most basic and essential function of reporting data can be done on any browser by simply pressing the “generate report” button.

As well as having the ability to generate reports on any browser, [My Browser](https://mybrowser.fyi) also allows reports to be read on any browser.

The app enhances the user experience by detecting supported features and presenting their UI only where they are supported. It removes default and fallback UI elements at the same time, which means that a user on IE9 will get a very different experience to someone on Chrome, with the app working smoothly on both.

When making a progressively enhanced website or web app, we’re given so much information in the browser’s HTML for free. I’ve enjoyed working this way a lot. Designing progressively has allowed the app to have feature detection and `@supports` in CSS, which means [My Browser](https://mybrowser.fyi) ships with no polyfills, fallbacks or hacks like Autoprefixer. The app simply degrades gracefully instead.

The fact that the whole thing comes in around **85kb** tells you how effective progressive enhancement can be for performance too.

![3 screenshots showing how the app enhances it's user interface](https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/pe.png)

## Privacy matters

I’m extremely fortunate to be friends with some very smart and influential people, so I shared an early version of [My Browser](https://mybrowser.fyi) with them for initial feedback. They came back with some incredibly useful ideas and support, in particular, the amazingly talented [Laura Kalbag](https://twitter.com/laurakalbag) reached out and gave me very useful advice on privacy and how I could improve the way I was initially handling data.

Based on this help from Laura, changes were made and extra protection was added to make sure that any data stored on [My Browser](https://mybrowser.fyi) is completely anonymous. Anonymous data means it’s now stored without the risk of being fingerprinted by corporations or governments.

Privacy is so important to me and I’ll continue to work hard to make sure that all collected data is protected, transparent and anonymous.

## An evolving project

What you see today on [My Browser](https://mybrowser.fyi) is very much a minimum viable product. There are plans to make it even more useful – which you can see [on the roadmap](https://github.com/hankchizljaw/mybrowser.fyi-project/projects/1) – but if you think something else could be useful in the meantime, please do log a feature request.

I also want everything to be transparent, even though the code isn’t open source. So if you find a bug or issue, please go ahead and log it on the [public issue tracker](https://github.com/hankchizljaw/mybrowser.fyi-project/issues).

## Try it yourself

Try out [My Browser](https://mybrowser.fyi) for yourself and see if it’s helpful to you and your team. It was designed to solve a problem that I was facing regularly, so if it helps you as much as it’s helped me then please pass it around and share it with your network. I would love it to make a positive impact on as many teams as possible 🚀

* * *

If you’ve got any questions or comments, get in touch on [Twitter](https://twitter.com/hankchizljaw).
