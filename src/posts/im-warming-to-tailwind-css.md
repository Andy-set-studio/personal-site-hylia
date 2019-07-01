---
title: 'I’m warming to Tailwind CSS'
tags: ['writing'] 
layout: 'layouts/post.njk'
date: '2019-01-15'
---

We’re using [Tailwind CSS](https://tailwindcss.com/) to handle our [design tokens](https://www.lightningdesignsystem.com/design-tokens/) in the current project I’m on and I’ve gotta say, I am _digging_ it.

## Example
Working with colours is probably is simplest example to share. I’ve got some config like this in `tailwind.config.js`:

```javascript
const colors = {
  primary: '#ff00ff',
  secondary: '#efefef'
}
```

Then in my CSS file, thanks to PostCSS, I can do this:
```css
:root {
  --color-primary: config('colors.primary');
  --color-secondary: config('colors.secondary');
}
```

This also becomes super useful when I want to share colour information with JavaScript, which in this project’s context, where I’m working with [Chart JS](https://www.chartjs.org/), I can do stuff like this:
```javascript 
import { colors } from '../tailwind.config.js';

// I could use it however I wanted now and it'll be in sync with CSS
const primaryColor = colors.primary;
```

This to me feels like a good balance of using CSS for what’s it’s good for, using JavaScript for what it’s good for and using light pre(post?)-processing to unify the two, where necessary.
