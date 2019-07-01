---
layout: 'layouts/post.njk'
title: 'No More Anchor Buttons'
date: '2015-09-28'
updated: '2018-08-22'
tags: 'writing'
---

I’ve been as guilty as the next person for using **<a>** tags as buttons in the past and it’s something that from today onwards, won’t happen again.

An `<a>` tag is for linking to other pages of a website. It’s not for triggering some fancy JavaScript interaction. An `<a>` tag is however much easier to style than a `<button>`, which makes the wide usage of them as buttons understandable.

You might wonder why this sudden realisation has occurred now. It should have occurred a long time ago, but today I logged into [Nest](http://www.nestpensions.org.uk/), the workplace pension provider’s _“My Account”_ area.

This tweet followed shortly after:

> Hey [@nestpensions](http://twitter.com/nestpensions). I'd really like it if I didn't have to open IE in a virtual machine to read my messages in your system. Piss poor.

[@hankchizljaw - 22/04/2016](https://twitter.com/hankchizljaw/status/723432918551388161)

I couldn’t navigate around the application using Google Chrome on Mac OS X. Seemingly every`<a>` tag had been hijacked by JavaScript. Said JavaScript didn’t seem to be working.

I immediately thought of all the occasions that I have attached a JavaScript event to an `<a>` tag and I suddenly fealt unbearably guilty that someone might have used one of these UIs without JavaScript available to them.

From this day forward, I will not use an`<a>` for a JavaScript event ever again unless I absolutely have to. I’ll be using a `<button>` where possible and visually-hiding it where JavaScript isn’t available. Hopefully I won’t be responsible for anyone’s frustration while using a UI I built again.

You have my word.

---

**Update**: This still annoys me two years later so I made '[Button Pal](https://codepen.io/hankchizljaw/details/Vxpjvo/)' to give folks some easy to copy-and-paste styles.
