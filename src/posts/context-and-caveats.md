---
title: 'Context and caveats'
date: '2019-07-22'
tags: ['writing', 'accessibility', 'buttons', 'advice']
---

I found myself in one of those famous Twitter debates\* the other day and off the back of it, I thought I’d create a short article about how we should should always consider context and caveats when we make bold statements.

The context of that particular conversation was around a hot take that I’ll paraphrase:

> “Native buttons aren’t great and this one that has been developed is better and fully accessible”

The new one that is “better” is built with, and completely relies on JavaScript, using a non-semantic `<div>` (or equivalent) as its base. In the interests of fairness, it _is_ completely possible to do this, thanks to [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). The problem that I have, though, is less about the technical specifics, but more about the wider potential damage of a developer discovering this `<div>` button and not understanding the wider **context** and **caveats**, such as unless you use a _very_ heavy JavaScript framework or library, those `<div>`s are suddenly completely inaccessible. Not great for most users on the web who use under-powered devices on slow connections, right?

The developer who discovered the `<div>` button will probably think it’s ok to use it, because a figure of authority said so. They’ll probably then _just_ attach a click event to a `<div>` and nothing else. This causes lots of what I call “accessibility fires” that can’t easily be put out and often provide a miserable experience for users of assistive technology. It’s not solely the developer who created this fire’s fault, because a well known member of the JavaScript community told them that it’s ok, with no **context or caveats**. This is why people need to be responsible with their bold statements on Twitter.

Let me give you a bit of insight about my attitude, in general. Often the loudest members of the JavaScript community represent a complete minority of the web as a whole. Yes, some might work for very large products or privacy stealing social networks, but they still represent a tiny minority, and their advice and claims should be treated in that way. There’s so many **caveats** to their advice, generally, such as you probably need to work in a large team or you need to be fully baked into the React ecosystem. Even though it might seem like that particular ecosystem is everywhere, the **quiet majority** are still slinging out websites with other technology, where the `<div>` button will be wholly inappropriate. If you need some numbers as context, WordPress still [powers 34% of all websites](https://hostingtribunal.com/blog/wordpress-statistics/) (and rising).

Now let me fix up the original quote from earlier in the article in a more responsible manner, with the appropriate **context and caveats**:

> “Native buttons aren’t great, sometimes, and this one that has been developed can be better and fully accessible, with the help of ARIA roles. This is probably only the case if your user has access to a high speed connection _and_ is using a device with enough available CPU to parse the large JavaScript payload that we send in order to make this element accessible, so keep this in mind before implementing yourself. Your project also requires React.”

I can understand why those caveats aren’t added to the original broadcast because the potential for those precious likes and retweets is massively reduced.

What it really comes down to, in my opinion, is that the folks that broadcast these sort of hot takes are still learning and probably aren’t very experienced, yet. This is fine, because we’ve all got to start somewhere and we work in a very immature industry. An appreciation of the wider context of the web comes with experience and they’ll get there, eventually. It’s useful to remember this when you read their tweets that are lacking in detail, so make sure you get some confirmation of their claims, before your implement on your own projects.

My main advice to you, dear reader, is to [diversify your Twitter following list](https://twitter.com/andybelldesign/status/1152491655041359872) so that you get a vast range of opinion and knowledge to get you that experienced, well considered advice, more efficiently.

I’ll close this article with an analogy. Inventing a new button with a `<div>` because there’s one or two easily fixable quirks with a native `<button>` is like burning your house down because the windows need a clean. It’s a very drastic, unnecessary approach when in reality, all you needed was some soapy water and a sponge.

---

\* The conversation isn’t worth linking as some of the tweets that give it the right context have since been deleted.
