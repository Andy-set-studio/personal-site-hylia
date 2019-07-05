---
title: 'Adding Webmentions to my personal site'
date: '2019-07-05'
tags: ['indieweb', 'webmentions']
---

I think Webmentions are cool because they are a proper web standard, so I’ve been keen to get them going on my site—especially after I [burned it to the ground](https://andy-bell.design/wrote/eating-my-own-dog-food/) and replaced it with an instance of [Hylia](https://hylia.website).

I’ve had [Max’s tutorial](https://mxb.dev/blog/using-webmentions-on-static-sites/) bookmarked for _ages_ and it is a fantastic resource. I basically followed it to the letter, with a couple of modifications to match the code style of this site. If you’re looking to implement yourself, definitely head over to his site.

I did do the implementation with a [<abbr title="pull request">PR</abbr>](https://github.com/andybelldesign/personal-site-hylia/pull/2), though, so if you want to see the code that I implemented, check it out.

## A basic implementation

This implementation that I’ve added is _rough as hell_, but it’s a good starting point. I really want to improve the rebuild setup and also post Webmentions from my site as replies to other folks blogs. I’ll certainly be using [Remy’s project](https://webmention.app) for that.

For the builds, I have [IFTTT](http://ifttt.com) running a [Netlify](https://www.netlify.com) hook every hour, on the hour. It’ll do for now, but if anyone has any tricks for a slicker process, let me know.

I’ve also got [Bridgy](https://brid.gy) on the go to pull in likes and replies from Twitter. That service was very easy to implement. Very handy indeed.

## User experience and barrier to entry

Something that I can't stop thinking about with Webmentions is that the barrier to entry is **very** high. I’ve been making websites for a long time and it certainly had me sweating. I’m also a very confident developer who grinds through being stuck, so I do worry about how easy it would be for folks to drop-off and implement a nasty comments system like Disqus when they get stuck, if they’re not super confident.

I think the user experience for users manually posting their Webmentions to websites is pretty shit too, but as it stands, we don’t really have any other options other than a crappy little `<input />` at the end of our pages.

With both of those issues, I would love it if a group of us got our heads together and worked out ways to both reduce the barrier to entry and consider the user experience of posting Webmentions. Jump into my Webmentions if that sounds like something you’d like to do.

One thing you could do to help is blog about implementing Webmentions on your site. If it wasn’t for [Max](https://twitter.com/mxbck), I probably wouldn’t have bothered, so your input about your context will be valuable. I can promise that.

## Wrapping up

This has been fun and it certainly kept me entertained on the long [journey to Brighton](https://andy-bell.design/notes/198).

I imagine folks are wondering if I’m going to implement this stuff on [Hylia](https://hylia.website). I’m not going to do that quite yet because my implementation is rough, so I think it’d cause people more headaches. Maybe after some more thought and work, I can write some helpful docs or a very specific Hylia tutorial.

Anyway, you can now comment on any post, note or link!
