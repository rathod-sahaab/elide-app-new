<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <h1>
    <img alt="Gatsby" src="./docs/images/elide-logo.png" width="60" /> <a href="https://console.elide.me">elide.me </a>
  </h1>
</p>

A tool to make URL's simpler to manage, beautiful to look at and easy to remember.

### About
This is the repository for frontend i.e. React app that let's users access features of the [backend](https://github.com/rathod-sahaab/elide-router).

The frontend is hosted on a CDN rather than the server to minimize the load.

The name [elide](https://www.thefreedictionary.com/elide) was only synomnym of 'short' that was available when I was buying the domain, hence elide.me.

## Develop

#### Dependencies
- Node.js
- yarn
- npx

### Commands
Install packages
```
yarn
```

#### Run and Watch for changes
```
yarn develop
```

This will host a webapp on [http://localhost:3000](http://localhost:3000).

#### Test
```
yarn test
```
This will use `jest` to the app. All test should pass.
Test for `mult.ts` or `sum.js` are to check if jest is setup correctly if these fail there might be setup problem contact @rathod-sahaab.

#### StoryBook
```
yarn storybook
```

Some time you need to check if a component looks good using `yarn develop` would require you to write functional code to render your component. To avoid running everything for such a simple task use storybook.

This will host a storybook on [http://localhost:6006](http://localhost:6006), where you can alter data and see how a bomponent looks.

That's all folk have fun! If there's something I missed ping me!
