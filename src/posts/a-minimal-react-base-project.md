---
title: 'A minimal React base project'
date: '2020-01-07'
tags: ['writing']
---

I started building out the [latest Front-End Challenges Club challenge](https://front-end-challenges.club/challenge-004-progress-button) this morning and because I’d [promised to build it in React](https://twitter.com/hankchizljaw/status/1213587540772630531), I started tinkering around with webpack to get my basic setup going. When I looked in the output directory, though, I gasped.

The _production bundle_ was around 130kb (no gzip) and all I had was **one React component**. It was clear, thanks to [VS Code Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) that the issue was React DOM, so I changed `import ReactDOM from 'react-dom';` to `import {render} from 'react-dom';`, thinking there’d be some tree-shaking, but nope: still a massive bundle.

I spent way to long messing around with babel, webpack, npm scripts and the works to shave off the kbs and nothing was working. I was ready to give up at this point because I just don’t like shipping lots of JavaScript, but I did make a promise in my [end of year review](https://hankchizljaw.com/wrote/2019:-a-year-in-review/#heading-time-to-embrace-react-and-gatsby) that I would get more involved in React and [Gatsby](https://www.gatsbyjs.org/) this year, so I stuck at it.

## Preact, the saviour

I could have messed around all day trying to shrink the bundle, but frankly, that sort of stuff is not my strongest skill. I remembered why I suddenly changed my attitude towards Gatsby, though. It was because of this package: [gatsby-plugin-preact](https://www.gatsbyjs.org/packages/gatsby-plugin-preact/).

I use that for [Front-End-Challenges Club](https://front-end-challenges.club/) and when it builds, the output JavaScript bundle is _tiny_ compared to when it was React, so I thought I’d play with the same approach. Luckily, the Preact team are smart as heck and created [preact-compat](https://preactjs.com/guide/v8/switching-to-preact/#how-to-alias-preact-compat). Thanks to this, I made no code changes and _just_ changed my webpack config. This brought the production bundle down from ~130kb to ~19kb!! Hell yeh.

## I made it into a thing

Of course, me being me, I made it into a repo, which you [can grab here](https://github.com/hankchizljaw/minimal-react-base). It’s a little base project that lets you sling a bit of React (Preact) on a web page, with no bells and whistles.

I’d love it if some folks from the React community or Preact community could cast their eyes on it because it would be good to make sure all is as optimised as possible. I’m a bit out of date with React knowledge and keen to get better.

## Wrapping up

The morale of the story: instead of wasting hours tinkering, think outside of the box and bit and get amazing results.

I’ll be using [this little base project](https://github.com/hankchizljaw/minimal-react-base) for all sorts of exciting stuff, including some React stuff for Every Layout in the future.

Stay tuned!
