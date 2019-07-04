---
title: 'Keeping it simple with image alt text for accessibility'
date: '2019-07-04'
tags: ['accessibility']
---

We’ve watched a [mass outage of media on Facebook, Instagram and WhatsApp](https://www.bbc.co.uk/news/technology-48855823) unfold over the last 24 hours and something it exposed is Facebook’s [use of AI for image alt text](https://www.theverge.com/2019/7/3/20681231/facebook-outage-image-tags-captions-ai-machine-learning-revealed?utm_campaign=theverge&utm_content=entry&utm_medium=social&utm_source=twitter). The alt text is often completely inaccurate and really unhelpful for users who need it the most, which to me, feels like a very negative thing. In my opinion, it’s just another example of [over-engineering](https://andy-bell.design/wrote/keep-it-simple/) what should be a reasonably trivial accessibility problem.

Why don’t Facebook and Twitter make adding alt text a requirement for posting images? I suppose it would damage those all important <abbr title="Objectives and Key Results">OKRs</abbr> and <abbr title="Key performance indicators">KPIs</abbr>, which as we all know by now, are apparently the only focus for these [toilet companies](https://npm-uninstall-facebook.com). We shouldn’t waste any energy on hoping that companies like these will do anything remotely ethical in the future, so, sorry to say it folks, but the onus is on us: the individuals to make a difference with accessibility.

Focusing on us, the individuals: some general ownership, empathy and knowledge would go a long way. Developers should really be asking themselves “is this image decorative or informative?”. If the answer is decorative, an empty alt (`alt=""`) will hide it from a screenreader. I personally like to add an `aria-hidden="true"` for good measure in that context, too. If it’s an informative image: spend some time writing some genuinely helpful alt text. In the words of the great [Roy Walker](<https://en.wikipedia.org/wiki/Roy_Walker_(comedian)>):

> ”Say what you see”

## Wrapping up

The few seconds that it takes you to do add some helpful alt text or apply an empty alt attribute will make folks who need alt text’s experience on your website that little bit better. [Small tweaks](https://css-tricks.com/small-tweaks-can-make-huge-impact-websites-accessibility/) like this that make accessibility better at its most basic level, chip away at what can be a very hostile environment for people who use assistive technology.

We can **all** do it, too. We can **all** make a genuine, positive impact.
