---
layout: 'layouts/post.njk'
title: 'Keep it simple'
date: '2019-06-07'
tags: 'writing'
---

One thing that is often forgotten about accessibility is that keeping things simple and utilising semantic HTML gets you most of the way towards providing a fully accessible experience for everyone. [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), CSS and JavaScript are great for _enhancing_ what we already get with semantic HTML and you don’t have to use much of it at all if you do use well-structured, semantic HTML as your base. Even when you apply CSS and JavaScript, keeping the code as simple as possible will reduce risk that is very often created by complexity. 

Throwing ARIA roles and heaps of JavaScript at non-semantic HTML (read: div soup) might well make your site or app *technically* accessible—especially in terms of automatic testing, but you must ask yourselves at what cost? Also ask yourselves who are you prioritising? Is it the developers or the users?

There is a case for utilising static ARIA roles to help user agents understand semantic elements. Giving a `<main>` element a `role="main"` isn’t really required anymore, but it also doesn’t really hurt anyone and will help users that are stuck on very old technology. 

A good example of using ARIA roles as a dynamic enhancement is improving the `<button>` element with an `aria-pressed="true|false"`, where applicable. You also don’t really need a `role="button"`, because it’s an *actual button* and not a `<div>`. Enhancing what we get [given for free](https://andy-bell.design/wrote/introducing-the-button-element/) is always going to be better than re-invention and producing an often sub-par experience. 

## JavaScript is an expensive tool
Always remember that JavaScript is _incredibly expensive_, so if your app **requires** it to be accessible, ask yourself what if something goes wrong? What if there is a runtime error? What if someone is on a poor connection? Do these people get an accessible experience? Probably not.

It’s important to consider questions like this—especially if you are a global company with millions of users, like Twitter. It’s also worth considering **training** your team, rather than **tooling** your team.

In general, keeping everything as simple as possible will by proxy, give you a more resilient, often more accessible end-result, which will be better for your users. Yes, _progressively enhance_ your solid, simple and semantic base-point with CSS and JavaScript, but always keep an eye on whether you are creating accessibility issues with those enhancements, too. 

Now, with that solid approach, test your work with assistive technology and with real people. That’ll give you a real, accurate account of how accessible your website or app is, because [tools can mislead you](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/).

If you find yourself potentially over-engineering an accessibility problem, or any technical problem in general: step back, take a breathe and think to yourself “how can I simplify this and make the platform do the work for me?”. Low-tech is often the best-tech.

Lastly, remember it’s the people who use our websites and apps that we build for. Not acceptance from our peer group and certainly not our own selfish needs. 

---

Big thanks to [Heydon Pickering](https://twitter.com/heydonworks) for providing some valuable feedback for this article.
