---
layout: 'layouts/post.njk'
title: 'A progressive disclosure component'
date: '2019-04-03'
tags: ['writing']
hasCodePen: true
---

A common pattern on the web is a disclosure component that toggles the visibility of a panel of content when a trigger button is clicked. The usual context of these is some secondary, aside information, such as extra information about a product’s specification or contextual terms and conditions information.

These disclosure patterns work well, but they are often mired with accessibility issues and/or are completely broken—hiding the content completely if JavaScript isn't available.

In this article, we’re going to dive into how we can create a progressively enhanced component that will be accessible _and_ provide a solid [minimum viable experience](https://andy-bell.design/wrote/the-power-of-progressive-enhancement/) when JavaScript isn’t available.

<figure>
<video src="http://hankchizljaw.imgix.net/progressive-disclosure.mp4" controls></video>
<figcaption>A screencast shows the completed disclosure component which has a trigger button that when clicked, toggles the visibility of the sibling panel. The JavaScript is then disabled and the component reverts to showing the previously concealed content by default.</figcaption>
</figure>

## The component

This is the complete component in a CodePen:

{% codepen 'xebjLP', 'result', 'Progressive disclosure demo' %}

Instead of going through how to build it line-by-line, let’s pick out some key elements and discuss them.

### Enforced accessibility

```html
<button class="[ link-button ] [ js-trigger ]" type="button" hidden>
  See the terms & conditions
  <svg
    viewBox="0 0 512 512"
    aria-hidden="true"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M60 99.333l196 196 196-196 60 60-256 256-256-256z"></path>
  </svg>
</button>
<div class="[ panel ] [ js-panel ]">
  <article class="[ panel__inner ] [ js-panel__inner ]">
    <hr />
    <!-- Content goes here, pals -->
  </article>
</div>
```

This markup sample looks pretty straightforward, but when you mix it with the related CSS, you can hopefully see that by default, that button is hidden and the panel is visible. We hide the button with a `hidden` attribute too, just in case CSS fails:

```css
/* Enforcing the button to only show when it has a valid aria-expanded attribute */
.link-button {
  display: none;
  /* The rest of the button CSS */
}

.link-button[aria-expanded] {
  display: inline-flex;
  align-items: center;
}

/* Enforcing the panel to only conceal content when the sibling button has a valid aria-expanded attribute */
[aria-expanded] + .panel {
  --panel-max-height: 500px;

  transition: all 200ms ease;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 0;
  visibility: hidden;
  -webkit-overflow-scrolling: touch;
}

[aria-expanded] + .panel .panel__inner {
  transition: all 500ms ease;
  transition-delay: 50ms;
  opacity: 0;
  transform: translateY(1rem);
}

[aria-expanded='true'] + .panel {
  max-height: var(--panel-max-height);
  visibility: visible;
}

[aria-expanded='true'] + .panel .panel__inner {
  opacity: 1;
  transform: translateY(0);
}
```

This default display is happening because the CSS only toggles the panel and shows the button **if** the button has an `aria-expanded` attribute. We’re enforcing accessible practices by straight-up disabling this component’s interactivity if the right markup and attributes aren’t used. This means that no matter who implements it, the correct markup has to be used in order for the component to behave in an interactive manner. Without the correct markup, the component will still render the content fully.

Also note that the `<button>` element _looks_ like a link, but it is in fact an actual `<button>`. Remember, folks: a link is for sending a user to a different url or anchor point and a button is for JavaScript events or form submissions. With _very little_ CSS, you get your link-styled `<button>` which makes our setup legit. There are no excuses for [not using a button element](https://andy-bell.design/wrote/introducing-the-button-element/).

### JavaScript as an enhancement

Without JavaScript, this component works absolutely fine. You can’t see the interactive elements that _require_ it to work, so when JavaScript is unavailable—which is an incredibly likely scenario—we still get to see the content, and not even notice that there’s supposed to be a fancy toggle (progressive enhancement is neat like that).

Now that we know our minimum viable experience works, let’s build it up and introduce some interactivity. Again, just like the other parts, let’s just pick key snippets from the [component’s JavaScript](https://codepen.io/andybelldesign/pen/xebjLP.js).

```js
const trigger = document.querySelector('.js-trigger');

const setTriggerState = () => {
  let currentExpandedState = trigger.getAttribute('aria-expanded');

  if (currentExpandedState === null) {
    currentExpandedState = 'true';
  }

  state.triggerExpanded = currentExpandedState === 'true' ? 'false' : 'true';

  trigger.setAttribute('aria-expanded', state.triggerExpanded);
  trigger.removeAttribute('hidden');
};
```

The above snippet selects the `.link-button` element and attaches an `aria-expanded` state to it. By default, that will be `false`. Looking back at the CSS we discussed earlier, the button will now be visible and the panel will also be collapsed. We also ensure this by removing the hidden attribute. _Perfect_.

It’s not perfect, though, if we can’t open the panel again. It’s also not perfect if a screen reader user was to visit because there’s no indication that the content is concealed.

Let’s fix both.

### Fix #1: Add interactivity

This code snippet is what we need to create our interactivity:

```js
const panel = document.querySelector('.js-panel');
const panelInner = document.querySelector('.js-panel__inner');

const maxHeightKey = '--panel-max-height';

const setMaxHeight = () => {
  return new Promise((resolve, reject) => {
    if (!panel || !panelInner) {
      reject();
    }

    panel.style.setProperty(
      maxHeightKey,
      `${panelInner.getBoundingClientRect().height}px`
    );
    resolve();
  });
};

const run = () => {
  setMaxHeight().then(() => setTriggerState());
};

trigger.addEventListener('click', run);
```

There’s a lot going on, so I’ll just list it out what’s happening:

1. We grab the panel and its inner direct child element
2. We set a `maxHeightKey` which is used to assign the calculated height to a CSS Custom Property
3. The `setMaxHeight` function grabs that `panelInner` element and calculates its height using [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). It then assigns that to the `--panel-max-height` Custom Property, via and inline style, which the CSS can use
4. That `setMaxHeight` function returns a promise so that we can be sure that the calculation is sorted before we toggle the button’s expanded state.
5. The `run` function is a shared function that runs the toggle process, which is _“work out the height, then toggle the `aria-expanded` state”_
6. This `run` function is then bound to the trigger’s click event

#### Why calculate a height?

CSS can’t transition between `0` and `auto`, so what we’ve done in the past is set an arbitrary `max-height` value. This is _fine_, but if suddenly, a massive chunk of content is added, some of it might be hidden.

We tackle that problem in two ways in this component:

1. We set an `overflow-y: auto` rule on the panel, so that if things don’t work out how we want, the user will at least be able to scroll the content
2. We set a sensible default for `--panel-max-height` in the CSS so if the calculations fail, there’s still a transitionable value there. Also, because we’re using CSS Custom Properties: if they are not supported, the `max-height` rule will break and because CSS will carry on without making a fuss (ahhh, isn’t [CSS great](https://andy-bell.design/wrote/css-doesnt-suck/)?) and the panel’s content will be completely visible when it is expanded

The calculation’s purpose is to refine that `max-height` value, so that the transition is as smooth and accurate as possible. This is a proper progressive enhancement.

### Fix #2: Enhancing the accessibility

---

ℹ️ _**Update:** Thanks to useful feedback from [Scott O'Hara](https://twitter.com/scottohara), the component now just uses_ `visibility: hidden` _to hide the content from screen readers when the panel is collapsed, which massively simplifies things and means there is less JavaScript, which is only ever a good thing._

_Carry on reading this section though, because the_ `inert` _attribute is really handy._

---

Our toggle is working and it is as _smooth_ as butter, but there’s an issue still: it’s not as accessible as it could be.

When the panel is collapsed, the content is _visually_ hidden. This is fine for sighted users, but for those who rely on assistive technology to operate the component, it’s not clear that the content is collapsed.

Luckily for us, we can fix this with a single HTML attribute: `inert`. As this [handy explainer](https://github.com/WICG/inert/blob/master/explainer.md) says:

> “One problem: to [achieve a performance optimisation for animation] we must leave the drawer in the DOM at all times. Meaning its focusable children are just sitting there offscreen, and as the user is tabbing through the page eventually their focus will just disappear into the drawer and they won't know where it went. I see this on responsive websites all the time. This is just one example but I've also run into the need to disable tabindex when I'm animating between elements with opacity: 0, or temporarily disabling large lists of custom controls, and as others have pointed out, you'd hit if you tried to build something like coverflow where you can see a preview of the next element but can't actually interact with it yet.”

The [`inert` attribute](https://html.spec.whatwg.org/multipage/interaction.html#inert) is handy-as-heck here and we’ll add it with JavaScript when the transitions end for each state change:

```js
panel.addEventListener('transitionend', () => {
  if (state.triggerExpanded === 'false') {
    panel.setAttribute('inert', '');
    return;
  }

  panel.removeAttribute('inert');
});
```

Our global state tells us what the trigger button’s and panel’s state is, so we can use that to add or remove the `inert` attribute accordingly. We’re also using a [tiny little polyfill](https://github.com/WICG/inert) because this is very important to work, regardless of support.

## Going one step further: a Web Component

For those of you who love Web Components [as much as I do](https://webcomponents.club), I went ahead and completely refactored the standard JavaScript component to be a tidy encapsulated Web Component that can be initialised like this:

```html
<disclosure-toggle button-label="See the terms and conditions" class="flow">
  <p>
    Here's some secret terms and conditions that we didn't want you to see because they
    explain how the product isn't actually very good.
  </p>
  <p>
    Lorem ipsum dolor sit amet, appareat pertinax et ius, ne pro nibh consulatu
    consetetur, nulla virtute definitiones nec in. Ad consul feugait eligendi mea, mutat
    tamquam ei mei. No hinc graecis phaedrum pro, cu erat ipsum sed, ut novum dissentiunt
    ullamcorper pro.
    <a href="#">Dicat aliquid dissentias</a> in per, meis alterum quaestio mei eu, vero
    praesent ex eam. Ei nam homero noluisse dissentiunt, ut vim quot putent. Vis elitr
    accusam accommodare id, cu usu quaestio conceptam, habeo tibique placerat eos cu. An
    nullam corpora consulatu qui, graeci euripidis est et.
  </p>
</disclosure-toggle>
```

This is the type of progressive enhancement I _love_ to do, because we can leverage HTML’s forgiving, resilient nature, along with CSS’s forgiving nature to build up an experience that starts with some rendered content. As [Web Component support](https://caniuse.com/#feat=custom-elementsv1) is available, this _enhances_ into a tidy little disclosure. Awesome, right?

It’s got all of the same code as our original example, but now, it’s a tidy, reusable component that you can drop anywhere on you project.

Because the Web Component has scoped styles, too, we can pull the link button and panel styles out of our global CSS and stick them straight into the Web Component. It also means that those styles can be a tad more lenient, because we know the button is rendered with the Web Component, it’ll contain the correct `aria-expanded` attribute off the bat. It’s also now a potentially handy design system asset as it’s completely encapsulated and portable.

Here’s it in action:

{% codepen 'zXGgbz', 'result', 'Progressive disclosure demo: Web Component' %}

## Wrapping up

Hopefully, this post has demonstrated that we can achieve a semantic, accessible and progressively enhanced component _without_ leveraging heavy-duty JavaScript and CSS.

Even though we’re using the latest and greatest tricks that the web platform gives us for _free_, it’ll work for everyone, because we’ve used the [minimum viable experience](https://andy-bell.design/wrote/the-power-of-progressive-enhancement/) methodology to build up the component, sensibly.

<figure>
<img src="https://hankchizljaw.imgix.net/disclosure-ie-6.jpg?auto=format&q=60" alt="A screenshot of the disclosure component working in IE 6" />
<figcaption>The disclosure component working in IE6. Even though it doesn’t look great, it works, with no visible complaints. With some more effort into the base styles, this could actually look pretty darn good.</figcaption>
</figure>

You can grab the source code for the [original example](https://codepen.io/andybelldesign/pen/xebjLP) or the [Web Component example](https://codepen.io/andybelldesign/pen/zXGgbz). Go ahead and fork them and have a tinker. I’ve left lots of comments in them to help you, too.

Any questions and comments, [reach out on Twitter](https://twitter.com/andybelldesign) and we’ll have a chat.

---

Big thanks to [Heydon Pickering](https://twitter.com/heydonworks) for kindly feeding back on an early prototype and introducing me to the `inert` attribute.
