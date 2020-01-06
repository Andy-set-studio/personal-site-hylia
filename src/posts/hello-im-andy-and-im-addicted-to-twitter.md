---
title: 'Hello, I’m Andy and I’m addicted to Twitter'
date: '2020-01-06'
tags: ['writing']
---

A big part of getting better and overcoming addiction is accepting that you are addicted, and with that in mind, I’m telling you here today that **I’m addicted to Twitter**. Enough is enough, though. I have to get better.

I’ve been through this sort of thing before, because back in 2015, during the Christmas break, after **15 years** of smoking full time, I decided enough was enough. I tried to quit a few times before that and the longest I ever managed was 6 months without smoking. My biggest problem was myself, though. I’m quite bad at challenging myself and kept giving in to cravings. I’d give in to smoking after “a bad day” or when I was at the pub and it was only when I set myself an action plan to quit for good that I actually achieved it.

Now, on the fourth anniversary of me quitting smoking, I can treat myself to a pack of cigarettes every now and then and enjoy them. I often do this at conferences because that smoke gives me an excuse to get a little introvert recharge or have a nice quiet conversation with a friend. When I’m a speaker, that quiet, solitary smoke is what gets me on to the stage in the first place. The difference now is, because I finally combatted my addiction, I can just not smoke afterwards and not even crave a cigarette—even after smoking for a few days.

This feels like a healthy (well, aside from the smoking bit) relationship with cigarettes.

## How does this relate to Twitter?

I need to achieve the same healthy relationship with Twitter. Twitter fundamentally is good. It is _incredibly_ addictive though, and those who follow me (I’m sorry) will know that I spend a _lot of time_ on there. Historically, this has been fine, but I’ve noticed over the last 6 months or so that it’s making me unwell.

The straws that broke the camel’s back were firstly, “[React Gate](https://dev.to/aryanjnyc/ken-wheeler-and-dan-abramov-deactivate-their-twitter-accounts-302)” and then finally, the UK General Election in 2019.

The “React Gate” situation was hard, watching the community rip itself apart with Twitter not even remotely helping, thanks to its complete lack of nuance and context. I stayed quite quiet during that period—mainly because I was privately helping people I care really dearly for, get through it as they were deep in the middle. I’m so glad I did because it was a tiring, destructive period for many and for me personally, changed my opinion of large parts of the community, along with key individuals.

The General Election completely killed me off. I spent a _ridiculous_ amount of time on Twitter in the campaign weeks. It was incredibly stressful. The biggest problem with that period was that there were intense periods of outrage, several times a day. I was getting neck-deep into this outrage and it was really affecting my mood. I felt very similar to when I had a [severe case of burnout](https://hankchizljaw.com/wrote/burnout-a-long-recovery/). It was pretty scary.

This has all led to me using the Christmas break of 2019 to admit that I have a problem and fix it.

## How I’m fixing it

Here’s my strategy. I’ll start by saying sorry, this is Mac and iOS only as they are the only platforms that I use. If someone could “convert” this strategy into a more platform agnostic one, that would always be appreciated.

### Step 1 - Stop using native Twitter services

Twitter is designed to make you engaged and the _incredibly noisy_ notifications section does exactly that. Mix this with an algorithmically rigged timeline (even when it’s “chronological”) and you find yourself being pulled in all the time. What really doesn’t help with this is that Twitter will not only relentlessly notify you that people have liked or retweeted your tweets: it’ll also notify you if someone likes a tweet that you’ve retweeted. It’s hell. Add to that a hilariously bad muting experience (if you mute someone, they still pop up in your feed) and you’ve got a recipe for disaster.

Now, I exclusively use [Tweetbot](https://tapbots.com/tweetbot). It’s much quieter because thanks to [Twitter reducing API functionality](http://apps-of-a-feather.com/), a lot of notification related noise doesn’t exist in Tweetbot. The timeline is also genuinely chronological. Perfect.

### Step 2 - Block Twitter on my Mac

I do this by modifying my hosts file which lives in `/etc/hosts`.

All I added was this:

```bash
# Block Twitter
127.0.0.1 www.twitter.com
127.0.0.1 twitter.com
127.0.0.1 mobile.twitter.com
```

Why did I do this? Twitter was distracting the hell out of me and affecting the quality of work that I do, so it has to go. Having a work machine with no access to a productivity killer has been an absolute game changer.

### Step 3 - Create a condensed list and use that as my timeline

Tweetbot allows you to set a list as your timeline, so I’ve created a private “Cool Folks” list that only has 100 people in it. This is a massive drop compared to the 650(ish) people that I follow. You could say “Andy, just unfollow people not on the list”, but that isn’t the point of the list. I’ve spent about a year curating the list because the people in it give me the best overview of what’s going on. It means I can get through the latest tweets in about 5 minutes, vs 40+ minutes. I still pop into the main timeline every now and then, but mainly, I’m just seeing this list.

I couldn’t recommend this approach more if I tried.

### Step 4 - Buy an alarm clock

My iPhone was my alarm clock, so in the morning, I’d turn off my alarm and you guessed it, I’d fire open Twitter. This almost always started my day in a bad way—often with me being in a foul mood.

I knew I had to fix this, so I went and bought a [£10 alarm clock](https://www.amazon.co.uk/gp/product/B075L6H4M9/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1). At night now, I put my phone at the other side of the room and my alarm clock on the bedside table. When it goes off, I get straight out of bed, walk past my phone and go to make coffee and breakfast for my family. This, pals, is life changing.

### Step 5 - Screen Time

I’m using [Screen Time](https://support.apple.com/en-us/HT208982) twofold. Firstly, I’m limiting my access to Tweetbot to 1 hour a day because I still want to use Twitter and interact with folks. I also maintain accounts for [Every Layout](https://twitter.com/layoutplusplus) and [Front-End Challenges Club](https://twitter.com/fechallengeclub) along with a [CSS Parody account](https://twitter.com/the_c_in_css). I want to keep doing this—just spend less time doing so.

The second way I’m using Screen Time is by using the “Downtime” feature. This essentially soft blocks the majority of apps on your device, so I have it set from 6am to 4:30pm every weekday. I’m hoping that a barrier to entry will help me to fix the habit of picking up my phone and checking Twitter.

So far, so good.

## Wrapping up

This isn’t a foolproof method, but it should work for me. I know my own weaknesses and this should help protect myself from myself. It took me nearly 3 years to get to the point where I can have a social cigarette or two and not crave them anymore. I feel like this Twitter addiction may not take as long to improve, but will still take a lot of effort.

So, rest assured that if you send me a mention or a DM on [my Twitter account](https://twitter.com/hankchizljaw), I will get to it eventually (although I have now closed DMs). If you need a proper response, I always prefer email (me@andy-bell.design) anyway.

Take care of yourselves, pals.
