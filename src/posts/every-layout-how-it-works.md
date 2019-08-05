---
title: 'Every Layout - how it works'
date: '2019-08-05'
tags: ['every-layout', 'node', 'express']
---

Heydon wrote a [cool article](http://www.heydonworks.com/article/every-layout-is-released-some-facts) with some fun facts about [Every Layout](https://every-layout.dev/) last week, so seems as I did a lot of the nerdy stuff, I thought I’d make a short article about how it works, behind the scenes.

## Eleventy is everywhere

We use [Eleventy](https://www.11ty.io/) **for everything**. Well, almost everything. It currently powers:

- The public-facing site
- Email templates (transactional emails)
- The premium site (mostly)
- The eBooks (ePUB and PDF)

The great thing about Eleventy is that it allows us to completely centralise our content across different contexts. Three of the above list items run off one repository and are differentiated only by some environment variables. Eleventy has made our lives so easy and arguably enabled this project to start in the first place.

## Node and Express

I’m a massive fan of [Express](https://expressjs.com/). The main reason is that it enables a pleb like me to do back-end work, reasonably easily. It’s also incredibly straight-forward to work with.

Behind the scenes, we have an API which is running on Express and handles the following:

- Payment (via Stripe)
- Emails (via Postmark)
- Authentication, so you can access the premium site if you have a valid licence
- Asset distribution, such as letting you download the book, if you have a valid licence

The API works as the beating heart of everything and _so much work_ has gone not into coding, but into thinking about how to make it as easy as possible for people to access content.

We could have come up with some convoluted way of distributing content to users, but that would only make us a few extra dollars in revenue protection by creating a walled garden around the site, which would actually create us a lot of technical debt, with all of the support queries that would inevitably come with it.

What we’ve landed on instead, after hours of thinking (and poor Heydon having to listen to my endless brain farts), is something criminally simple. We just use your email to check that you have a licence and **that is it**.

“That means people can just share access”, I hear you cry. Yes, it makes it easier for people to take the piss, but we’ve implemented monitors that detect if someone **is** taking the piss. If they are caught, they get their licence taken off them in accordance with our [terms and conditions](https://every-layout.dev/terms-and-conditions/). We believe that most people are fundamentally honest, so we’d rather not punish them for what _might_ happen, because of a couple of bad actors.

It’s important that **we** accept the burden of content protection, rather than making users accept it for us. This is not just the case for our systems, but also with CAPTCHA, front-end frameworks and developer experience. Don’t make users pay for **your** convenience.

### How Express serves a static site

The way we serve the authenticated, premium site is hilariously simple. As I mentioned earlier, we have environment variables that control content. For our site, we have a “premium” build, which enables all of the layouts. We build that into a source-controlled directory. Express then serves this as a static directory with some middleware that on premium layouts, checks to see if you’re a licence holder.

This authentication is a little [JSON Web Token](https://jwt.io) that sits in a cookie. Simple stuff that again, is designed to make your life easier and use as little technology as possible.

## Wrapping up

This is only a short post that gives you a little peek around the curtain of [Every Layout](https://every-layout.dev/) and how we’ve put effort into simplifying things, rather than throwing technology at it.

The conclusion is that by keeping things simple, by making pragmatic choices, everyone has been able to access the content that they paid for with little-to-no issues, which is the most important thing.

---

You can support the work we are doing by [purchasing a copy of Every Layout](https://every-layout.dev/checkout/). Every copy that we sell enables us to give copies away for free to those who need a leg up, via our [honour system](https://every-layout.dev/blog/you-pay/).
