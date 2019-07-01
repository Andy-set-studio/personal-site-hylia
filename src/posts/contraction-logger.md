---
layout: 'layouts/post.njk'
title: 'Contraction logger'
date: '2018-09-11'
tags: 'writing'
---

My partner is due to give birth at any moment, so I did what any other sensible person does in this situation and created myself a contraction logging, progressive web app.

For those of you that haven't gone through the labour process, it's a good idea to keep track of how long it's been between each contraction in the early parts. It's also pretty darn handy to keep track of how long each contraction went on for. 

In the U.K. you're supposed to stay at home until you're having roughly 3 contractions within 10 minutes. That makes sense because early labour can go on for _hours—even days_, so they don't want you clogging up their wards.

## How it works

You go to [hankchizljaw.io/contraction-log.html](https://hankchizljaw.io/contraction-log.html) and you get sent to a [CodePen](https://codepen.io) project. All this does is present you with a [Boilerform](https://boilerform.design) powered form. This is where you log a duration as an entry. As you log each entry, it keeps a track of the timestamps and shows you a when each contraction was and how long it was between each one. It does all of this by storing a JSON object in local storage.

It's a very simple and _highly janky_ app that I hope someone can find a use of. You can add it to your home screen on iOS too. You can also [see the source code on CodePen](https://codepen.io/hankchizljaw/project/editor/XbpWqE) if you want to have a poke around. 

Here's a quick screencast of me landing on the app, adding it to the home screen and then making a couple of entries on an iOS simulator.

<video autoplay mute controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/174183/contractions.mp4" style="max-width: 30rem"></video>

## Wrapping up

If you find a use for this, let me know. I'd love to hear from you! Regardless, it was a fun little thing to make and give to [Boilerform](https://boilerform.design) another spin, which I rarely get to do since I made it.

I'll also finish this article by saying it's ok to make little things like this. Sure, it's got loads of dead code and is probably riddled with bugs and it's also a bit of a <abbr title="title">UX</abbr> nightmare, but that doesn't matter. It serves the purpose of helping me and my partner through a stressful period, which is the most important and only role it plays.

I strongly recommend making stuff like this when the pressure is off. As an industry, our work has gotten so damn complicated, so it's good to just keep things simple and muck around every now and then. Trust me, it's good for the soul 🙂