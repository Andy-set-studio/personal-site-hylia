---
title: 'The (extremely) loud minority'
date: '2020-10-16'
tags: ['writing']
presentation: true
---

Often on Twitter, we’ll hear stuff like this:

> The cascade was a mistake

Or:

> CSS just doesn’t work for the web anymore

The latter may be true for a _tiny_ minority of cases, such as in a code-factory, full of developers, independently working on small pieces of a very large product, but this represents a _tiny_ proportion of the web.

How small is that percentage, though? I’m glad you asked. We’re going to be using data from [W3Techs, who crawl the **top 10 million websites**](https://w3techs.com/faq) to calculate what market share certain technologies have. For this example, I’ll compare WordPress and React, because I use this example in my [talk about CUBE CSS](https://piccalil.li/talk/cube-vienna/) to illustrate various points.

> WordPress is used by 63.6% of all the websites whose content management system we know. **This is 38.6% of all websites**.
>
> [W3Techs](https://w3techs.com/technologies/details/cm-wordpress)

And to compare:

> React is used by 0.4% of all the websites whose JavaScript library we know. **This is 0.3% of all websites**.
>
> [W3Techs](https://w3techs.com/technologies/details/js-react)

Emphasis on both examples, mine and the data is accurate as of October 16th 2020.

Even when you consider the reality that these technology paths likely cross and some sites hide the tech they are using, the difference is _extreme_. Even if you [add together React and Vue](https://w3techs.com/technologies/comparison/js-react,js-vuejs), it’s still **less than one percent**.

It’s also worth caveating (for the sake of my mentions) that React and Vue usage doesn’t mean that we’re only talking about <abbr title="Single Page Applications">SPAs</abbr>. Those likely account for such a small percentage of the web, it’s barely worth counting.

Just for fun, here’s React and Vue’s market share, visually represented by 100 people:

![100 grey simple illustration that represent a person. 1 of those 100 is white with a grey border](https://assets.codepen.io/174183/react-and-vue-people.jpg)

Now, here’s WordPress’

![100 grey simple illustration that represent a person. 38 of those 100 is white with a grey border](https://assets.codepen.io/174183/wordpress-people.jpg)

## The point I am trying to make

It’s understandable to think that JavaScript frameworks and their communities are eating the web because places like Twitter are _awash with very loud voices from said communities_.

Always remember that although a **subset of the JavaScript community** can be **very loud**, they a **paltry portion of the web as a whole**. This means that when _they_ say something like “CSS sucks”—what they mean is “CSS sucks for a small subset of less than 1 percent of the web” <sup>\*</sup>.

Now when you look at it like that, it makes you wonder why we give these people such a large stage which the _very quiet_ **majority** don’t get a voice at all. The very quiet majority are out there building 99% of the web, after all.

Even a slight change in that dynamic would likely have a massive positive impact, over time.

---

<sup>\*</sup> There are lots of fantastic people in the JavaScript community who have much better, balanced opinions. I recommend seaking them out instead. Also, [CSS doesn’t suck](https://hankchizljaw.com/wrote/css-doesnt-suck/).
