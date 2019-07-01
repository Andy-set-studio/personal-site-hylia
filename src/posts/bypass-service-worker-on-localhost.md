---
layout: 'layouts/post.njk'
title: 'Bypass service worker on localhost'
date: '2018-09-04'
tags: 'writing'
---

The main thing that's been holding me back from using Firefox full-time is that there appears to be no way to _bypass_ a service worker. I often use the provided “bypass service worker” option in Chrome dev tools to do this.

I've been hunting around and [pleading](https://toots.hankchizljaw.io/@hankchizljaw/100666743737034549) with the web to no avail, so I put the responsibility onto myself.

For now, I _just_ want to ignore `localhost` urls, but the below snippet could allow you to prevent the service worker's `fetch` event from continuing for any `hostname` that you assign in `ignoredHosts`.

```javascript
self.addEventListener('fetch', evt => {
    
    // Define the hostnames that you want to ignore
    const ignoredHosts = ['localhost'];
    
    // Destructure the hostname out of the event's request 
    // URL by creating a new URL instance
    const {hostname} = new URL(evt.request.url);
	
    // Bail out if our definition contains this url
    if (ignoredHosts.indexOf(hostname) >= 0) {
        return;
    }

});
```

Go ahead and [grab the code from this Gist](https://gist.github.com/hankchizljaw/ab90fadcf33de890f303ea483cd83515).

## Let's break it down

1. You define your host in the `ignoredHosts` array
2. We construct a new [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) because we can't access the window in a service worker. This URL gives us access to the magic `hostname` property which we grab using [destructuring](https://css-tricks.com/learning-gutenberg-4-modern-javascript-syntax/#article-header-id-4) to create the `hostname` constant.
3. We check the index of the `hostname` within `ignoredHosts`. If it's greater than or equal to 0, we have a match
4. If it's a match, we bail out

## Wrapping up

A short and sweet tip which I hope you find useful. I can _finally_ use Firefox full-time now which brings me a lot of joy. 

If you can improve the above code, hit me up. It's only a quick fix, so any improvements will be welcomed!
