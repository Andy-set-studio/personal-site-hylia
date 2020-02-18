---
title: 'Jamstack, IFTTT and Netlify: a power trio'
date: '2020-02-18'
tags: ['writing']
---

I love the term power trio. I normally think of bands like Alkaline Trio or Biffy Clyro as power trios, but today, I’m going to talk to you about my ever-increasing obsession with the [Jamstack](https://jamstack.org/), a seasoning of [IFTTT](ifttt.com) and [Netlify](//netlify.com), and how I think there’s great power in simplicity when you pick the right tools to do the job.

## Micro Blog

[I’ve got a Micro Blog](https://microblog.hankchizljaw.com/) which is great for posting little notes, like tweets.

I used to post notes on this very site, but stopped as my setup was cumbersome and I wanted to break free of it when using my starter kit, [Hylia](https://hylia.website/) as the base.

I did miss owning my own content, though and mixing that with my [ever-troubled relationship with Twitter](https://hankchizljaw.com/wrote/hello-i'm-andy-and-i'm-addicted-to-twitter/), resulted in me putting together a Micro Blog with [Eleventy](//11ty.dev): my favourite static site generator. I even redesigned it recently [and live-streamed the process](https://www.twitch.tv/videos/551830940).

It’s a simple concept: I set the titles as a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time), which then powers ordering, dates and gives me unique slugs. I created myself a [little post editor](https://post.hankchizljaw.com/), too, which I take the contents of and create a markdown file to add to the blog.

It’s a super quick and easy process, which is crucial for maintenance and importantly, long lasting usage. If it’s not simple, I’ll just stop using it (hence why notes aren’t on here anymore), and revert back to posting directly to Twitter, which is less than ideal.

## In steps IFTTT

[IFTTT](https://ifttt.com/): short for “if this then that” is an incredible service. It’s incredible _because it’s simple_.

I use it to monitor my [Micro Blog’s RSS feed](https://microblog.hankchizljaw.com/feed.xml). It then posts new entries to Twitter for me, with a canonical link back to my Micro Blog. The great thing is, I write no code to make this magic happen. IFTTT does this for me and does it really bloody well.

I’m a big believer in letting services that do a good job, do just that. I used to want to write everything from scratch, but experience drains that urge out of you. Even when I have an idea, I frantically search to see if it exists because I’d much rather give someone money than have to write something myself. Because of that, having a setup where all I do is post some markdown and magically a tweet appears is perfection, as far as I’m concerned. It being free is a bonus.

## Back to power trios

Now you’ve got some background, let’s get stuck into the swooning.

[Dave](https://daverupert.com) and [Robin](https://www.robinrendle.com) both did some cool as heck stuff with [Feedbin](//feedbin.com), which is a fantastic RSS reader. It lets you “favourite” articles, which I’ll be honest, I had no idea you could do that until recently.

Dave [created a page](https://daverupert.com/likes/) on his website which grabs a feed of his likes from Feedbin, and renders them out in a nice post list—much like a reading list. I immediately fell in love with this idea and when [Robin posted about his solution](https://www.robinrendle.com/notes/rss-favorites.html), I jumped straight into a text editor and worked it out for my Micro Blog.

I wanted mine to be rendered at build time though, so I used [Eleventy JavaScript data files](https://www.11ty.dev/docs/data-js/) to [create a function](https://github.com/hankchizljaw/microblog/blob/master/src/_data/likes.js) that fetches my feed, converts it to JSON, then returns a nice array of items. This then gets [paginated by Eleventy](https://www.11ty.dev/docs/pagination/#paging-an-array). Lovely stuff.

I turned it all out in about half an hour and was really happy with that. I really love how Eleventy enables super rapid development. You can [see the final result, here](https://microblog.hankchizljaw.com/likes/0/).

Later on though, I thought “what if I don’t post on my Micro Blog for a while and like a few articles in Feedbin in the meantime”. This was a pretty valid thought, so it was back to the drawing board to work it out.

Thanks to IFTTT, this problem was trivial to fix. I got IFTTT to monitor my [favourites feed from Feedbin](https://feedbin.com/starred/91894d3eb1e30664631b3d475c213f5e.xml) and when a new entry is added, IFTTT posts a webhook to [Netlify](//netlify.com) for me. This triggers a build, which then runs my data file function, which renders my likes. Super simple and super effective.

## Longterm gains

This stuff is right on my mind at the moment as I rebuild [Piccalilli](https://hankchizljaw.com/wrote/piccalilli:-the-future/) with the Jamstack and Eleventy. One key aspect of Piccalilli is the [well-known newsletter](//piccalil.li). I used to post the newsletter with [Curated](https://curated.co/), but on the new, Jamstack-powered platform, it’ll be web-first, which then syndicates to people’s inboxes.

A newsletter issue will be published as an Eleventy-generated page and I’m then going to create a specific RSS feed that—you guessed it—IFTTT will monitor. I’m going to get IFTTT to post a webhook to my API which will scrape the RSS content and send it to people’s inboxes. Again: super simple and super effective.

This is the sort of exciting stuff [I wrote about](https://css-tricks.com/the-future-is-bright-because-the-future-is-static/) for [Chris](https://chriscoyier.net/) in [CSS-Tricks](https://css-tricks.com/) last year. The Jamstack enables me, a designer who codes, to make incredibly cool shit and I am all for it!

## How do I, the dear reader, do this?

You might want to do this yourself, so here’s how.

First up, here’s my [Micro Blog source code](https://github.com/hankchizljaw/microblog) (make sure you delete the posts!).

To create an RSS to Twitter action in IFFT:

1. [Create a new “RSS Feed”](https://ifttt.com/create) trigger and add your Micro Blog feed url. Then select “Twitter” as the action and select “Post a tweet”
2. Set the ingredients to be `EntryContent` and `EntryUrl`
3. Done

To trigger builds:

1. Create a new build hook in Netlify: `https://app.netlify.com/sites/YOUR_SITE/settings/deploys#build-hooks`
2. [Create a new “RSS Feed”](https://ifttt.com/create) trigger and add your Feedbin favourites URL (settings > starred article feed). Then select “Webhooks” as the action and select “Make a web request”
3. Set the URL that Netlify generated for you and select POST request. Leave the other fields as they are and save your action
4. Done

## Wrapping up

I’ll make a more detailed tutorial or short course on [Piccalilli](//piccalil.li) about Micro Blogs that post to social networks in the future, but for now, I hope this shows you how owning your own content and syndicating it to Twitter—even with a static site generator—is very doable with the right tools.

Happy posting!

